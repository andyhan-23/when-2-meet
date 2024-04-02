import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="mx-auto">
      <Outlet />
    </div>
  );
};

export default Layout;
