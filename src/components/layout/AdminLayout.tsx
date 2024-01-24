import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const AdminLayout = () => {
  return (
    <div>
      <div>
        <div className="flex h-screen">
          <div className="bg-red-600 flex-[1]">
            <Sidebar />
          </div>
          <div className="flex-[5]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
