export default {
  isLoggedIn(state) {
    return !!state.accessToken;
  },
  getCurrentUser(state) {
    return state.user;
  },
  getCurrentaccessToken(state) {
    return state.accessToken;
  },
  getCurrentRefreshToken(state) {
    return state.refreshToken;
  },
  getCurrentUserContact(state) {
    return state.contact;
  },
  getCurrentUserRole(state) {
    return state.user.role;
  }
};
