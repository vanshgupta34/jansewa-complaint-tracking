import { NavLink, Outlet } from 'react-router-dom';

const navigationLinks = [
  { to: '/', label: 'Dashboard', end: true },
  { to: '/submit', label: 'Submit complaint' },
  { to: '/my-complaints', label: 'My complaints' },
  { to: '/track', label: 'Track complaint' },
  { to: '/admin', label: 'Admin' },
];

export default function SiteLayout() {
  return (
    <div className="app-shell">
      <div className="utility-bar">Government of India <span>•</span> Citizen Grievance Portal</div>
      <header className="site-header">
        <NavLink className="brand" to="/" aria-label="JanSewa home">
          <span className="brand-mark" aria-hidden="true">JS</span>
          <span><strong>JanSewa</strong><small>Public Service. Your Voice.</small></span>
        </NavLink>
        <nav aria-label="Main navigation">
          {navigationLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end}>{link.label}</NavLink>
          ))}
        </nav>
      </header>
      <Outlet />
      <footer>JanSewa <span>•</span> A citizen-focused complaint tracking demonstration</footer>
    </div>
  );
}
