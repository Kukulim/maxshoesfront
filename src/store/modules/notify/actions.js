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
