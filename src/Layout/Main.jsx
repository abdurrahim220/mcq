import React, { useState } from "react";
import Sidebar from "../components/SideBar/Sidebar";

import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      
      <div className="flex justify-center">
        <div className="w-[15%] border h-screen">
          <Sidebar />
        </div>
        <div className="w-[85%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
