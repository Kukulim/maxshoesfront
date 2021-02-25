import { data } from "@/shared";

export const getAllEmployeesAction = async ({ commit }, accessToken) => {
  try {
    const employeesToReturn = await data.getAllemployees(
      accessToken
    );
    await commit("setCurrentEmployees", employeesToReturn);
    return employeesToReturn;
  } catch (error) {
    return "error";
  }
};

export const deleteEmployeeAction = async ({ commit },employee) => {
  console.log(employee.accessToken)
  try {
     await data.deleteEmployee(employee,
      employee.accessToken
    );
    await commit("deleteEmployee", employee.id);

  } catch (error) {
    return "error";
  }
};

