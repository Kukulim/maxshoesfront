export default {
  setCurrentNotifications(state, tempNotify) {
    state.notifications = tempNotify;
  },
  updateNotification(state, notification) {
    const index = state.notifications.findIndex(h => h.id === notification.id);
    state.notifications.splice(index, 1, notification);
    state.notifications = [...state.notifications];
  },
};
