import { USER_FAILED, REQUEST, USER_SUCCESS } from "../constants/constants";

export const blogReducer = (state = { blogs: [] }, action: any) => {
  switch (action.type) {
    case REQUEST:
      return { ...state, loading: true };
    case USER_SUCCESS:
      return {
        loading: false,
        blogs: action.payload,
      };
    case USER_FAILED:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
