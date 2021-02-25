import { data } from "@/shared";

export const getAllEmployeesAction = async ({ commit }, accessToken) => {
  try {
    const employeesToReturn = await data.getAllemployees(accessToken);
    await commit("setCurrentEmployees", employeesToReturn);
    return employeesToReturn;
  } catch (error) {
    return "error";
  }
};

export const deleteEmployeeAction = async ({ commit }, employee) => {
  try {
    await data.deleteEmployee(employee, employee.accessToken);
    await commit("deleteEmployee", employee.id);
  } catch (error) {
    return "error";
  }
};

export const createEmployeeAction = async ({ commit }, employee) => {
  try {
    await data.createEmployee(employee, employee.accessToken);
    await commit("addEmployee", employee);
  } catch (error) {
    return "error";
  }
};

export const editEmployeeAction = async ({ commit }, employee) => {
  try {
    await data.editEmployee(employee, employee.accessToken);
    await commit("updateEmployee", employee);
  } catch (error) {
    return "error";
  }
};
