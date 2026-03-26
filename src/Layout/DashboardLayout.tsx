import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/shared/Navigation";
import Sidebar from "../components/shared/Sidebar";

function DashboardLayout() {
  return (
    <section className="h-screen max-w-7xl flex p-4 sm: md: lg: ">
      <Sidebar isOpen={false} />
      <div className="flex-1 ">
        <Navigation />
        <Outlet />
      </div>
    </section>
  );
}

export default DashboardLayout;
