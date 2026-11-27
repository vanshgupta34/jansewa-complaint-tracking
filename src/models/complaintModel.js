// Build a new complaint record. Data is kept only in React state for this session.
export function createComplaint(formValues) {
  const complaintId = `JS-${Date.now().toString().slice(-8)}`;
  return {
    ...formValues,
    id: complaintId,
    status: 'Pending',
    adminRemarks: '',
    createdAt: new Date().toISOString(),
  };
}
