import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/RootPage";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/blog", element: <BlogPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
