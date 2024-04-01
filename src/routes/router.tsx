import { createBrowserRouter } from "react-router-dom";
import { PATH } from "./constatns";
import { InitPage, LoginPage, EventPage } from "@/pages";
import Layout from "./layout";

const router = createBrowserRouter([
  {
    path: PATH.main,
    element: <Layout />,
    children: [{ path: PATH.main, element: <InitPage /> }],
  },
  {
    path: PATH.login,
    element: <Layout />,
    children: [{ path: PATH.login, element: <LoginPage /> }],
  },
  {
    path: PATH.event,
    element: <Layout />,
    children: [{ path: PATH.event, element: <EventPage /> }],
  },
]);

export default router;
