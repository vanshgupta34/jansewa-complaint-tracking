import { Link } from 'react-router-dom';
import { useComplaints } from '../controllers/ComplaintContext.jsx';
import StatusBadge from '../components/StatusBadge.jsx';

export default function DashboardPage() {
  const { complaints } = useComplaints();
  const pendingCount = complaints.filter((item) => item.status === 'Pending').length;
  const resolvedCount = complaints.filter((item) => item.status === 'Resolved').length;

  return (
    <main className="page-content">
      <div className="page-heading">
        <div><p className="eyebrow">CITIZEN SERVICES</p><h1>Complaint dashboard</h1>
          <p className="intro">Submit a concern and follow its progress with JanSewa.</p></div>
        <Link className="primary-button" to="/submit">＋ Submit a complaint</Link>
      </div>
      <section className="stats-grid" aria-label="Complaint summary">
        <article className="stat-card"><span>Total complaints</span><strong>{complaints.length}</strong><small>Submitted from this browser</small></article>
        <article className="stat-card"><span>Pending</span><strong>{pendingCount}</strong><small>Waiting for review</small></article>
        <article className="stat-card"><span>Resolved</span><strong>{resolvedCount}</strong><small>Marked as resolved</small></article>
      </section>
      <section className="panel">
        <div className="panel-heading"><div><h2>Recent complaints</h2><p>Your latest submissions</p></div><Link to="/my-complaints">View all →</Link></div>
        {complaints.length === 0 ? <div className="empty-state"><span className="empty-icon">☷</span><h3>No complaints submitted yet</h3><p>When you submit a complaint, it will appear here.</p><Link className="secondary-button" to="/submit">Submit your first complaint</Link></div> : (
          <div className="table-wrap"><table><thead><tr><th>Complaint ID</th><th>Title</th><th>Category</th><th>Date</th><th>Status</th></tr></thead>
            <tbody>{complaints.slice(0, 5).map((complaint) => <tr key={complaint.id}><td className="id-cell">{complaint.id}</td><td>{complaint.title}</td><td>{complaint.category}</td><td>{new Date(complaint.createdAt).toLocaleDateString()}</td><td><StatusBadge status={complaint.status} /></td></tr>)}</tbody></table></div>
        )}
      </section>
      <div className="notice"><strong>Need help?</strong> Keep your complaint ID safe so you can track its progress at any time.</div>
    </main>
  );
}
