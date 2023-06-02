import { Dispatch } from "redux";
import {
  BLOG_LIST_ERROR,
  //   BLOG_LIST_REMOVE_SUCCESS,
  BLOG_LIST_REQUEST,
  BLOG_LIST_SUCCESS,
  BLOG_SINGLE_ERROR,
  BLOG_SINGLE_SUCCESS,
} from "../constants/constants";
import Axios from "../api/auth";

export const getBlogs = () => async (dispatch: Dispatch) => {
  dispatch({
    type: BLOG_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get("/post/read");
    dispatch({
      type: BLOG_LIST_SUCCESS,
      payload: data.data,
    });
  } catch (err: any) {
    dispatch({
      type: BLOG_LIST_ERROR,
      payload: err?.response?.data?.message,
    });
  }
};

export const getSingleBlog = (id: string) => async (dispatch: Dispatch) => {
  dispatch({
    type: BLOG_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/post/read/${id}`);
    dispatch({
      type: BLOG_SINGLE_SUCCESS,
      payload: data.data,
    });
  } catch (err: any) {
    dispatch({
      type: BLOG_SINGLE_ERROR,
      payload: err?.response?.data?.message,
    });
  }
};

export const createBlogs =
  (value: any, cb: (res: string, state: "success" | "error") => void) =>
  async (dispatch: Dispatch) => {
    const { image, _id, content, title } = value;
    dispatch({
      type: BLOG_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.post("/post/create", {
        image,
        _id,
        content,
        title,
      });

      // dispatch({
      //   type: Blog_LIST_SUCCESS,
      //   payload: data?.data,
      // });
      return cb(data.message, "success");
    } catch (err: any) {
      dispatch({
        type: BLOG_LIST_ERROR,
        payload: err?.response?.data?.message,
      });
      cb(err?.response?.data?.message, "error");
    }
  };
