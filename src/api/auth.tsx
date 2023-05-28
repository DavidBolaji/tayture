import axios from "axios";

let url = import.meta.env.VITE_LOCAL_URL;
if (import.meta.env.VITE_ENV === "prod") {
  url = import.meta.env.VITE_PROD_URL;
}

const token = localStorage.getItem("authToken");

const Axios = axios.create({
  baseURL: url,
  headers: {
    Authorization: "Bearer " + token,
  },
});

export default Axios;
