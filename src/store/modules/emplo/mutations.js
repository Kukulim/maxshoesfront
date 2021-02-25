export default {
  setCurrentEmployees(state, tempEmployees) {
    state.employees = tempEmployees;
  },
  deleteEmployee(state, employeeId) {
    state.employees = [...state.employees.filter(p => p.id !== employeeId)];
  },
};
