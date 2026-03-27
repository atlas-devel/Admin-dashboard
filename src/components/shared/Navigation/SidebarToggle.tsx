import React from "react";
import { Menu } from "lucide-react";

function SidebarToggle() {
  return (
    <button className="hidden md:block hover:bg-neutral-100 duration-300 cursor-pointer rounded-md shadow-sm p-2">
      <Menu />
    </button>
  );
}

export default SidebarToggle;
