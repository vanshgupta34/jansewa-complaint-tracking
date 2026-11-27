import { createContext, useContext, useState } from 'react';
import { addComplaint as makeComplaint, updateComplaint as updateComplaintList } from './complaintController.js';

const ComplaintContext = createContext(null);

export function ComplaintProvider({ children }) {
  // This state is shared while the app is open, but is not saved after refresh.
  const [complaints, setComplaints] = useState([]);

  function addComplaint(formValues) {
    const complaint = makeComplaint(formValues);
    setComplaints((currentComplaints) => [complaint, ...currentComplaints]);
    return complaint;
  }

  function updateComplaint(complaintId, updates) {
    setComplaints((currentComplaints) => updateComplaintList(currentComplaints, complaintId, updates));
  }

  return (
    <ComplaintContext.Provider value={{ complaints, addComplaint, updateComplaint }}>
      {children}
    </ComplaintContext.Provider>
  );
}

export function useComplaints() {
  const context = useContext(ComplaintContext);
  if (!context) throw new Error('useComplaints must be used inside ComplaintProvider');
  return context;
}
