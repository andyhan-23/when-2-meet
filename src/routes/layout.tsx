import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="max-w-3xl mx-auto flex flex-col justify-center">
      <Outlet />
    </div>
  );
};

export default Layout;
