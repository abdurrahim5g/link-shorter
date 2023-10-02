import { Link, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Redirect from "../layout/Redirect";
import axios from "axios";

const router = createBrowserRouter([
  { path: "/", element: <Main /> },
  {
    path: "/:id",
    element: <Redirect />,
    loader: ({ params }) =>
      axios(`https://link-shorter-server-c75qcfiuo-f-rahim.vercel.app/url?shortId=${params.id}`),
  },
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
