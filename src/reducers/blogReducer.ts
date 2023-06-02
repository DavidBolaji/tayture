import { Action } from "redux";
import {
  BLOG_LIST_ERROR,
  BLOG_LIST_REMOVE_SUCCESS,
  BLOG_LIST_REQUEST,
  BLOG_LIST_SUCCESS,
  BLOG_SINGLE_ERROR,
  BLOG_SINGLE_REQUEST,
  BLOG_SINGLE_SUCCESS,
} from "../constants/constants";

export interface IBlog {
  _id?: string;
  title: string;
  image: string;
  content: string;
  date?: string;
  length?: string;
}

export interface ProductListState {
  loading: boolean;
  blogs: IBlog[]; // Change 'any' to the appropriate type for your blogs
  error?: string;
  blog: IBlog;
}

interface ProductListAction extends Action {
  payload?: any; // Change 'any' to the appropriate type for your payload
}

const initialState = {
  _id: "",
  title: "",
  image: "",
  content: "",
  date: "",
  length: "",
} as IBlog;

export const blogListReducer = (
  state: ProductListState = { loading: false, blogs: [], blog: initialState },
  action: ProductListAction
): ProductListState => {
  switch (action.type) {
    case BLOG_LIST_REQUEST:
      return {
        loading: true,
        blogs: [...state.blogs],
        blog: { ...state.blog },
      };
    case BLOG_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        blogs: [...action.payload],
      };
    case BLOG_LIST_ERROR:
      return { ...state, loading: false, error: action.payload };
    case BLOG_LIST_REMOVE_SUCCESS:
      const blogs = state.blogs!.filter(
        (product: IBlog) => product._id !== action.payload._id
      );
      return {
        ...state,
        loading: false,
        blogs: [...blogs],
      };
    case BLOG_SINGLE_REQUEST:
      return { loading: true, blogs: state.blogs, blog: state.blog };
    case BLOG_SINGLE_SUCCESS:
      return {
        ...state,
        loading: false,
        blog: { ...action.payload },
      };
    case BLOG_SINGLE_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
