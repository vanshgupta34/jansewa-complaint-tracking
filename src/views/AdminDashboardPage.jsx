import { useState } from 'react';
import { useComplaints } from '../controllers/ComplaintContext.jsx';
import StatusBadge from '../components/StatusBadge.jsx';

const statuses = ['Pending', 'In Progress', 'Resolved'];

export default function AdminDashboardPage() {
  const { complaints, updateComplaint } = useComplaints();
  const [filter, setFilter] = useState('All');
  const [selectedId, setSelectedId] = useState('');
  const visibleComplaints = complaints.filter((item) => filter === 'All' || item.status === filter);
  const selectedComplaint = complaints.find((item) => item.id === selectedId);

  function saveUpdates(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    updateComplaint(selectedId, { status: formData.get('status'), adminRemarks: formData.get('adminRemarks').trim() });
  }

  return (
    <main className="page-content">
      <p className="eyebrow">STAFF WORKSPACE</p><h1>Admin dashboard</h1>
      <p className="intro">Review complaints and update their status or remarks.</p>
      <section className="panel">
        <div className="panel-heading"><div><h2>All complaints</h2><p>{complaints.length} total</p></div><label className="filter-field">Filter by status<select value={filter} onChange={(event) => setFilter(event.target.value)}><option>All</option>{statuses.map((status) => <option key={status}>{status}</option>)}</select></label></div>
        {visibleComplaints.length === 0 ? <div className="empty-state"><h3>No complaints to show</h3><p>Submitted complaints will appear here for review.</p></div> : <div className="table-wrap"><table><thead><tr><th>Complaint ID</th><th>Title</th><th>Category</th><th>Status</th><th>Action</th></tr></thead><tbody>{visibleComplaints.map((item) => <tr key={item.id}><td className="id-cell">{item.id}</td><td>{item.title}</td><td>{item.category}</td><td><StatusBadge status={item.status} /></td><td><button type="button" className="link-button" onClick={() => setSelectedId(item.id)}>{selectedId === item.id ? 'Selected' : 'View / edit'}</button></td></tr>)}</tbody></table></div>}
      </section>
      {selectedComplaint && <section className="panel admin-detail"><div className="panel-heading"><div><h2>Complaint details</h2><p>{selectedComplaint.id} · {selectedComplaint.citizenName} · {selectedComplaint.mobile}</p></div><button type="button" className="text-button" onClick={() => setSelectedId('')}>Close</button></div>
        <p><strong>{selectedComplaint.title}</strong> · {selectedComplaint.category}</p><p className="detail-copy">{selectedComplaint.description}</p><p className="detail-copy"><strong>Address:</strong> {selectedComplaint.address}</p>
        <form className="admin-edit-form" onSubmit={saveUpdates}><label>Status<select name="status" key={`${selectedComplaint.id}-${selectedComplaint.status}`} defaultValue={selectedComplaint.status}>{statuses.map((status) => <option key={status}>{status}</option>)}</select></label><label>Admin remarks<textarea name="adminRemarks" key={`${selectedComplaint.id}-${selectedComplaint.adminRemarks}`} defaultValue={selectedComplaint.adminRemarks} rows="3" placeholder="Add an update for the citizen" /></label><button className="primary-button">Save updates</button></form>
      </section>}
    </main>
  );
}
