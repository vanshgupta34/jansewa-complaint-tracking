import { useState } from 'react';
import { useComplaints } from '../controllers/ComplaintContext.jsx';
import StatusBadge from '../components/StatusBadge.jsx';

export default function MyComplaintsPage() {
  const [searchText, setSearchText] = useState('');
  const query = searchText.toLowerCase().trim();
  const { complaints: allComplaints } = useComplaints();
  const complaints = allComplaints.filter((complaint) =>
    [complaint.id, complaint.title, complaint.category, complaint.status].some((value) => value.toLowerCase().includes(query)),
  );

  return (
    <main className="page-content">
      <p className="eyebrow">CITIZEN SERVICES</p><h1>My complaints</h1>
      <p className="intro">Search and review complaints saved in this browser.</p>
      <section className="panel">
        <label className="search-field">Search complaints<input value={searchText} onChange={(event) => setSearchText(event.target.value)} placeholder="Search by ID, title, category or status" /></label>
        {complaints.length === 0 ? <div className="empty-state"><h3>{searchText ? 'No matching complaints' : 'No complaints found'}</h3><p>{searchText ? 'Try another search term.' : 'Submit a complaint to see it listed here.'}</p></div> : (
          <div className="table-wrap"><table><thead><tr><th>Complaint ID</th><th>Title</th><th>Category</th><th>Date</th><th>Status</th></tr></thead><tbody>
            {complaints.map((complaint) => <tr key={complaint.id}><td className="id-cell">{complaint.id}</td><td>{complaint.title}</td><td>{complaint.category}</td><td>{new Date(complaint.createdAt).toLocaleDateString()}</td><td><StatusBadge status={complaint.status} /></td></tr>)}
          </tbody></table></div>
        )}
      </section>
    </main>
  );
}
