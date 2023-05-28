import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/RootPage";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";

import BlogMainPage from "./pages/BlogMainPage";

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
  return <RouterProvider router={router} />;
}

export default App;
