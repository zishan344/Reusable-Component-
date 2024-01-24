import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <div>
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
