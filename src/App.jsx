import "./App.scss";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  return (
    <>
      <QueryClientProvider client={new QueryClient()}>
        <RouterProvider router={router} />
        <ToastContainer position="bottom-right" theme="dark" />
      </QueryClientProvider>
    </>
  );
}

export default App;
