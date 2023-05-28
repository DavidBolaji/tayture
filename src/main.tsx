import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import { GoogleOAuthProvider } from "@react-oauth/google";
console.log(import.meta.env.VITE_GOOGLE_CLIENT_ID);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // </GoogleOAuthProvider>
);
