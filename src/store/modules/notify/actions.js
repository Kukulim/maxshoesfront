import { notification } from "@/shared";

export const getNotificationAction = async ({ commit }, accessToken) => {
  try {
    const notificationsToReturn = await notification.getAllNotifications(
      accessToken
    );
    await commit("setCurrentNotifications", notificationsToReturn);
    return notificationsToReturn;
  } catch (error) {
    return "error";
  }
};

export const updateNotificationAction = async ({ commit }, notify) => {
  console.log(notify);
  try {
    const notificationToReturn = await notification.editNotification(
      notify,
      notify.accessToken
    );
    await commit("updateNotification", notificationToReturn);
  } catch (error) {
    return "error";
  }
};
