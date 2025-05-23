import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="bg-gray-400 max-w-screen-md mx-auto min-h-screen">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
