import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useComplaints } from '../controllers/ComplaintContext.jsx';

const initialValues = { citizenName: '', mobile: '', title: '', category: '', description: '', address: '' };
const categories = ['Road', 'Water', 'Electricity', 'Garbage', 'Drainage', 'Streetlight'];

export default function SubmitComplaintPage() {
  const [formValues, setFormValues] = useState(initialValues);
  const [submittedId, setSubmittedId] = useState('');
  const navigate = useNavigate();
  const { addComplaint } = useComplaints();

  function handleChange(event) {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const complaint = addComplaint(formValues);
    setSubmittedId(complaint.id);
    setFormValues(initialValues);
  }

  return (
    <main className="page-content narrow-content">
      <p className="eyebrow">CITIZEN SERVICES</p><h1>Submit a complaint</h1>
      <p className="intro">Share the details below. Fields marked with * are required.</p>
      {submittedId && <div className="success-message" role="status"><strong>Complaint submitted successfully.</strong><br />Your complaint ID is <b>{submittedId}</b>. Save it to track your complaint.</div>}
      <form className="panel complaint-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <label>Citizen name *<input name="citizenName" value={formValues.citizenName} onChange={handleChange} required maxLength="80" placeholder="Enter your full name" /></label>
          <label>Mobile number *<input name="mobile" value={formValues.mobile} onChange={handleChange} required type="tel" pattern="[0-9+() -]{8,15}" placeholder="Enter your mobile number" /></label>
          <label className="full-width">Complaint title *<input name="title" value={formValues.title} onChange={handleChange} required maxLength="100" placeholder="Briefly describe the issue" /></label>
          <label>Complaint category *<select name="category" value={formValues.category} onChange={handleChange} required><option value="">Choose a category</option>{categories.map((category) => <option key={category}>{category}</option>)}</select></label>
          <label className="full-width">Complaint description *<textarea name="description" value={formValues.description} onChange={handleChange} required rows="4" maxLength="1000" placeholder="Provide details that will help us understand the issue" /></label>
          <label className="full-width">Address *<textarea name="address" value={formValues.address} onChange={handleChange} required rows="2" maxLength="250" placeholder="Where is the issue located?" /></label>
        </div>
        <div className="form-actions"><button className="primary-button" type="submit">Submit complaint</button><button className="text-button" type="button" onClick={() => navigate('/')}>Cancel</button></div>
      </form>
    </main>
  );
}
