import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./reducers/userReducer";
import { blogListReducer } from "./reducers/blogReducer";

// const cartLocalStorage = localStorage.getItem("cartItems")
//   ? JSON.parse(localStorage.getItem("cartItems")!)
//   : [];

// const addressLocalStorage = localStorage.getItem("user")
//   ? JSON.parse(localStorage.getItem("user")!)
//   : {};

//   user: { cartItems: cartLocalStorage },
//   blogList: { address: addressLocalStorage },

const initialState = {};
const middlewares = [thunk];
const reducer = combineReducers({
  user: userReducer,
  blogList: blogListReducer,
  //   cart: cartReducer,
  //   address: addressReducer,
  //   orderz: orderReducer,
});

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
