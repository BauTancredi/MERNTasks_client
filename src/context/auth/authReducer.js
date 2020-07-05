import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  OBTAIN_USER,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGN_OUT,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        alert: action.payload,
      };
    case HIDE_ALERT:
      return {
        alert: null,
      };
    default:
      return state;
  }
};
