import { Outlet } from "react-router-dom";
import Navigation from "../components/admin/common/Navbar/Navbar";
import { SidebarProvider } from "../context/SidebarContext";
import Sidebar from "../components/admin/common/Sidebar/Sidebar";

function AdminLayout() {
  return (
    <SidebarProvider>
      <section className="h-screen max-w-[2000px] mx-auto flex overflow-hidden bg-secondary-color/2">
        <Sidebar />
        <div className="flex-1 ">
          <Navigation />
          <main className="h-[calc(100vh-80px)] hide-scrollbar  overflow-y-auto  mx-auto p-4 md:p-6 lg:p-8  ">
            <Outlet />
          </main>
        </div>
      </section>
    </SidebarProvider>
  );
}

export default AdminLayout;
