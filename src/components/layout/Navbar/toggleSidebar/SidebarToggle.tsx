import React from "react";
import { Menu } from "lucide-react";
import useSidebar from "../../../../hooks/useSidebar";

function SidebarToggle() {
  const { toggleSidebar } = useSidebar();
  return (
    <button
      onClick={toggleSidebar}
      className="hidden md:block  hover:bg-neutral-100 duration-300 cursor-pointer rounded-md shadow-sm p-2"
    >
      <Menu />
    </button>
  );
}

export default SidebarToggle;
