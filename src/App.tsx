import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AOS from "aos";

import RootPage from "./pages/RootPage";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import BlogMainPage from "./pages/BlogMainPage";
import "aos/dist/aos.css";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/blog",
        // @ts-ignore
        element: <BlogMainPage />,
      },
      { path: "/blog/:id", element: <BlogPage /> },
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
