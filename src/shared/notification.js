import * as axios from "axios";
import { API_LOCATION } from "../../config";

const getAllNotifications = async function(currentAccesToken) {
  try {
    const response = await axios.get(`${API_LOCATION}/notification/getall`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${currentAccesToken}`
      }
    });
    const notificationsToReturn = response.data;
    return notificationsToReturn;
  } catch (error) {
    console.error(error);
  }
};

const updateFile = async function(image,currentAccesToken) {
  try {
    const response = await axios.post(`${API_LOCATION}/notification/UploadFile`, image, {
      headers: {
        'Content-Type' : 'image/jpeg,application/pdf',
        Authorization: `Bearer ${currentAccesToken}`
      }, 
    });
    return response.data;

  } catch (error) {
    console.error(error);
    return null;
  }
};

const editNotification = async function(notification,currentAccesToken) {
  try {
    const response = await axios.post(`${API_LOCATION}/notification/editnotification`, notification, {
      headers: {
        'Content-Type' : "application/json",
        Authorization: `Bearer ${currentAccesToken}`
      }, 
    });
    return response.data;

  } catch (error) {
    console.error(error);
    return null;
  }
};


export const notification = {
  getAllNotifications,
  updateFile,
  editNotification
};
