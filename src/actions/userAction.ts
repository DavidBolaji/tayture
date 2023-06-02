import { Dispatch } from "redux";
import { REQUEST, USER_FAILED, USER_SUCCESS } from "../constants/constants";
import Axios from "../api/auth";

export const login = (response: any) => async (dispatch: Dispatch) => {
  console.log(response);
  dispatch({
    type: REQUEST,
  });
  try {
    const res = await Axios.post("/user/register", {
      token: response.id,
      role: response.role,
      phone: response.phone,
    });
    console.log(res);
    dispatch({
      type: USER_SUCCESS,
      payload: res.data.data,
    });
  } catch (err: any) {
    dispatch({
      type: USER_FAILED,
      payload: { err: err?.response?.data?.message },
    });
  }
};
