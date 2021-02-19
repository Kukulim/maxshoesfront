export default {
  setCurrentUser(state, user) {
    state.user = user;
  },
  setCurrentAccessToken(state, accessToken) {
    state.accessToken = accessToken;
  },
  setCurrentRefreshToken(state, refreshToken) {
    state.refreshToken = refreshToken;
  },
  setRemainingTokenTime(state, remainingTokenTime) {
    state.remainingTokenTime = remainingTokenTime;
  },
  removeTokens(state) {
    state.user = null;
    state.accessToken = null;
    state.refreshToken = null;
  },
  setCurrentUserContact(state, tempContact) {
    state.contact = tempContact;
  }
};
