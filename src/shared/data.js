import * as axios from "axios";
import { API_LOCATION } from "../../config";

const login = async function(currentUser) {
  try {
    const response = await axios.post(
      `${API_LOCATION}/account/login/`,
      currentUser,
      {
        headers: { "Content-Type": "application/json" }
      }
    );
    const userToReturn = response.data;
    return userToReturn;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const register = async function(currentUser) {
  try {
    await axios.post(`${API_LOCATION}/account/register/`, currentUser, {
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error(error);
    return "error";
  }
};

const refreshToken = async function(currentRefreshToken, currentAccesToken) {
  try {
    const refreashTokenJason = {
      refreshToken: currentRefreshToken
    };
    const response = await axios.post(
      `${API_LOCATION}/account/refresh-token/`,
      refreashTokenJason,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${currentAccesToken}`
        }
      }
    );
    const userToReturn = response.data;
    return userToReturn;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const sendConfirmEmail = async function(currentUser, currentAccesToken) {
  try {
    await axios.post(`${API_LOCATION}/account/sendConfirmEmail/`, currentUser, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${currentAccesToken}`
      }
    });
  } catch (error) {
    console.error(error);
    return null;
  }
};

const sendPasswordResetEmail = async function(UserEmail) {
  try {
    await axios.post(
      `${API_LOCATION}/account/SendPasswordResetEmail/`,
      UserEmail,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    console.error(error);
    return null;
  }
};

const saveContact = async function(currentUser, currentAccesToken) {
  try {
    await axios.post(`${API_LOCATION}/account/editcontact`, currentUser, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${currentAccesToken}`
      }
    });
  } catch (error) {
    console.error(error);
  }
};

const changePassword = async function(
  changePasswordRequest,
  currentAccesToken
) {
  console.log(changePasswordRequest);
  try {
    await axios.post(
      `${API_LOCATION}/account/changepassword`,
      changePasswordRequest,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${currentAccesToken}`
        }
      }
    );
  } catch (error) {
    console.error(error);
  }
};

const createNotification = async function(notification, currentAccesToken) {
  try {
    const response = await axios.post(
      `${API_LOCATION}/notification/createnotification`,
      notification,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${currentAccesToken}`
        }
      }
    );
    const notificationToReturn = response.data;
    return notificationToReturn;
  } catch (error) {
    console.error(error);
  }
};

const getAllemployees = async function(currentAccesToken) {
  try {
    const response = await axios.get(
      `${API_LOCATION}/employee/getallemployee`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${currentAccesToken}`
        }
      }
    );
    const notificationToReturn = response.data;
    return notificationToReturn;
  } catch (error) {
    console.error(error);
  }
};

const deleteEmployee = async function(employee, currentAccesToken) {
  try {
    await axios.post(`${API_LOCATION}/account/remove`, employee, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${currentAccesToken}`
      }
    });
  } catch (error) {
    console.error(error);
  }
};

const createEmployee = async function(employee, currentAccesToken) {
  try {
    await axios.post(`${API_LOCATION}/employee/createemployee`, employee, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${currentAccesToken}`
      }
    });
  } catch (error) {
    console.error(error);
  }
};

const editEmployee = async function(employee, currentAccesToken) {
  try {
    await axios.post(`${API_LOCATION}/employee/editemployee`, employee, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${currentAccesToken}`
      }
    });
  } catch (error) {
    console.error(error);
  }
};

export const data = {
  login,
  register,
  refreshToken,
  sendConfirmEmail,
  sendPasswordResetEmail,
  saveContact,
  changePassword,
  createNotification,
  getAllemployees,
  deleteEmployee,
  createEmployee,
  editEmployee
};
