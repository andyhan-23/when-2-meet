import { createBrowserRouter } from "react-router-dom";
import { PATH } from "./constatns";
import { MainPage, LoginPage, EventPage } from "@/pages";
import Layout from "./layout";

const router = createBrowserRouter([
  {
    path: PATH.main,
    element: <Layout />,
    children: [{ path: PATH.main, element: <MainPage /> }],
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
