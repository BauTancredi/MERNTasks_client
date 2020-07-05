import React, { useReducer } from "react";
import authReducer from "./authReducer";
import authContext from "./authContext";

import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  OBTAIN_USER,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGN_OUT,
} from "../../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    authenticated: null,
    user: null,
    message: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <authContext.Provider
      value={{
        token: state.token,
        authenticated: state.authenticated,
        user: state.user,
        message: state.message,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
