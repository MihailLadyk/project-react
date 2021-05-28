import { combineReducers, createReducer } from "@reduxjs/toolkit";
import * as actions from "./authActions";
const tokenReducer = createReducer(null, {
  [actions.loginSuccess]: (state, action) => action.payload.token,
  [actions.registerSuccess]: (state, action) => action.payload.token,
  [actions.logout]: () => null,
  [actions.fetchUserDataError]: () => null,
});

const defaultUserState = {
  email: null,
  name: null,
  createdAt: null,
  updatedAt: null,
  id: null,
};

const userReducer = createReducer(defaultUserState, {
  [actions.loginSuccess]: (state, action) => action.payload.user,
  [actions.registerSuccess]: (state, action) => action.payload.user,
  [actions.fetchUserDataSuccess]: (state, action) => action.payload,
  [actions.logout]: () => defaultUserState,
  [actions.fetchUserDataError]: () => defaultUserState,
});

const loadingReducer = createReducer(false, {
  [actions.fetchUserDataRequest]: () => true,
  [actions.fetchUserDataSuccess]: () => false,
  [actions.fetchUserDataError]: () => false,

  [actions.loginRequest]: () => true,
  [actions.loginSuccess]: () => false,
  [actions.loginError]: () => false,

  [actions.registerRequest]: () => true,
  [actions.registerSuccess]: () => false,
  [actions.registerError]: () => false,
});

export default combineReducers({
  token: tokenReducer,
  user: userReducer,
  loading: loadingReducer,
});
