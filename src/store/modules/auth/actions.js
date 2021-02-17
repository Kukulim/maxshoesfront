import { data } from "@/shared";

export const loginAction = async ({ dispatch }, currentUser) => {
  try {
    const logedUser = await data.login(currentUser);
    await dispatch("authorizeAction", logedUser);
  } catch (error) {
    return "error";
  }
};
export const authorizeAction = async ({ commit, dispatch }, currentUser) => {
  await commit("setCurrentUser", currentUser);
  await commit("setCurrentAccessToken", currentUser.accessToken);
  await commit("setCurrentRefreshToken", currentUser.refreshToken);
  return dispatch("refreshToken");
};

export const refreshAction = async ({ dispatch, state }) => {
  const logedUser = await data.refreshToken(
    state.refreshToken,
    state.accessToken
  );
  console.log(logedUser.refreshToken);
  dispatch("authorizeAction", logedUser);
};
export const refreshToken = async ({ commit, dispatch, state }) => {
  commit("setRemainingTokenTime", 1000 * 60 * 19);
  setTimeout(() => {
    dispatch("refreshAction");
  }, state.remainingTokenTime);
};

