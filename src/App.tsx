import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AOS from "aos";

import RootPage from "./pages/RootPage";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import BlogMainPage from "./pages/BlogMainPage";
import "aos/dist/aos.css";
import BlogsAdmin from "./pages/BlogsAdmin";
import AuthLayer from "./AdminService/AuthLayer";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/admin",
        element: (
          <AuthLayer>
            <BlogsAdmin />
          </AuthLayer>
        ),
      },
      {
        path: "/blog",
        element: <BlogMainPage />,
      },
      {
        path: "/:id",
        element: <BlogPage />,
      },
    ],
  },
]);

function App() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
