import { SHOW_ALERT, HIDE_ALERT } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        action: action.payload,
      };
    case HIDE_ALERT:
      return {
        action: null,
      };
    default:
      return state;
  }
};
