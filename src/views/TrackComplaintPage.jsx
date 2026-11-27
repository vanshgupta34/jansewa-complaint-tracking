import { useState } from 'react';
import { useComplaints } from '../controllers/ComplaintContext.jsx';
import StatusBadge from '../components/StatusBadge.jsx';

const statusSteps = ['Pending', 'In Progress', 'Resolved'];

export default function TrackComplaintPage() {
  const [complaintId, setComplaintId] = useState('');
  const [searchedId, setSearchedId] = useState('');
  const { complaints } = useComplaints();
  const complaint = complaints.find((item) => item.id.toLowerCase() === searchedId.toLowerCase());

  function handleSubmit(event) {
    event.preventDefault();
    setSearchedId(complaintId.trim());
  }

  const currentStep = complaint ? statusSteps.indexOf(complaint.status) : -1;

  return (
    <main className="page-content narrow-content">
      <p className="eyebrow">CITIZEN SERVICES</p><h1>Track a complaint</h1>
      <p className="intro">Enter the complaint ID you received after submitting the form.</p>
      <form className="panel track-form" onSubmit={handleSubmit}><label>Complaint ID<input value={complaintId} onChange={(event) => setComplaintId(event.target.value)} required placeholder="Example: JS-12345678" /></label><button className="primary-button">Track complaint</button></form>
      {searchedId && !complaint && <div className="empty-state panel"><h3>Complaint not found</h3><p>Check the ID and try again. Complaints are saved in the browser where they were submitted.</p></div>}
      {complaint && <section className="panel result-card"><div className="result-heading"><div><p className="eyebrow">COMPLAINT DETAILS</p><h2>{complaint.title}</h2></div><StatusBadge status={complaint.status} /></div>
        <dl className="details-grid"><div><dt>Complaint ID</dt><dd className="id-cell">{complaint.id}</dd></div><div><dt>Category</dt><dd>{complaint.category}</dd></div><div><dt>Citizen name</dt><dd>{complaint.citizenName}</dd></div><div><dt>Date submitted</dt><dd>{new Date(complaint.createdAt).toLocaleDateString()}</dd></div><div className="full-width"><dt>Address</dt><dd>{complaint.address}</dd></div><div className="full-width"><dt>Description</dt><dd>{complaint.description}</dd></div>{complaint.adminRemarks && <div className="full-width"><dt>Admin remarks</dt><dd>{complaint.adminRemarks}</dd></div>}</dl>
        <h3 className="progress-title">Progress</h3><div className="progress-track">{statusSteps.map((step, index) => <div className={`progress-step ${index <= currentStep ? 'complete' : ''} ${index === currentStep ? 'current' : ''}`} key={step}><span className="progress-dot">{index < currentStep ? '✓' : index + 1}</span><span>{step}</span></div>)}</div>
      </section>}
    </main>
  );
}
