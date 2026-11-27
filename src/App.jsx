import { Navigate, Route, Routes } from 'react-router-dom';
import { ComplaintProvider } from './controllers/ComplaintContext.jsx';
import SiteLayout from './components/SiteLayout.jsx';
import DashboardPage from './views/DashboardPage.jsx';
import SubmitComplaintPage from './views/SubmitComplaintPage.jsx';
import MyComplaintsPage from './views/MyComplaintsPage.jsx';
import TrackComplaintPage from './views/TrackComplaintPage.jsx';
import AdminDashboardPage from './views/AdminDashboardPage.jsx';

export default function App() {
  return (
    <ComplaintProvider>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/submit" element={<SubmitComplaintPage />} />
          <Route path="/my-complaints" element={<MyComplaintsPage />} />
          <Route path="/track" element={<TrackComplaintPage />} />
          <Route path="/admin" element={<AdminDashboardPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </ComplaintProvider>
  );
}
