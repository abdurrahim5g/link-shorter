import { Link, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Redirect from "../layout/Redirect";

const router = createBrowserRouter([
  { path: "/", element: <Main /> },
  { path: "/:id", element: <Redirect /> },
  {
    path: "*",
    element: (
      <h2 className="text-center mt-10 text-2xl">
        Error page{" "}
        <Link to="/" className="text-blue-500">
          Go to home
        </Link>
      </h2>
    ),
  },
]);

export default router;
