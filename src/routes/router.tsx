import { createBrowserRouter } from "react-router-dom";
import { PATH } from "./constatns";
import { MainPage, LoginPage, EventPage } from "@/pages";

const router = createBrowserRouter([
  {
    path: PATH.main,
    element: <MainPage />,
  },
  {
    path: PATH.login,
    element: <LoginPage />,
  },
  {
    path: PATH.event,
    element: <EventPage />,
  },
]);

export default router;
