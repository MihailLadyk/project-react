export const getToken = (state) => state.auth.token;
export const getUser = (state) => state.auth.user;
export const getLoading = (state) => state.auth.loading;
export const getError = (state) => state.auth.error;
export const isAuthenticated = (state) => !!state.auth.token;
