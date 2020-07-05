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
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        authenticated: true,
        message: null,
      };

    case OBTAIN_USER:
      return {
        ...state,
        user: action.payload,
      };

    case LOGIN_ERROR:
    case REGISTER_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        message: action.payload,
      };
    default:
      return state;
  }
};
