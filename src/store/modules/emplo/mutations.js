export default {
  setCurrentEmployees(state, tempEmployees) {
    state.employees = tempEmployees;
  },
  deleteEmployee(state, employeeId) {
    state.employees = [...state.employees.filter(p => p.id !== employeeId)];
  },
  addEmployee(state, employee) {
    state.employees.push(employee);
  },
  updateEmployee(state, employee) {
    const index = state.employees.findIndex(h => h.id === employee.id);
    state.employees.splice(index, 1, employee);
    state.employees = [...state.employees];
  }
};
