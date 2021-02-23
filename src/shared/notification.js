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


export const notification = {
  getAllNotifications

};
