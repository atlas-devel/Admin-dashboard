import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navbar/Navbar";
import { SidebarProvider } from "../../context/SidebarContext";
import Sidebar from "./Sidebar/Sidebar";

function DashboardLayout() {
  return (
    <SidebarProvider>
      <section className="h-screen  flex overflow-hidden ">
        <Sidebar />
        <div className="flex-1 ">
          <Navigation />
          <main className=" bg-content-back h-full overflow-y-auto mx-auto p-4 md:p-6 lg:p-8 ">
            <Outlet />
          </main>
        </div>
      </section>
    </SidebarProvider>
  );
}

export default DashboardLayout;
