import { createComplaint } from '../models/complaintModel.js';

export function addComplaint(formValues) {
  return createComplaint(formValues);
}

export function updateComplaint(complaints, complaintId, updates) {
  return complaints.map((complaint) =>
    complaint.id === complaintId ? { ...complaint, ...updates } : complaint,
  );
}
