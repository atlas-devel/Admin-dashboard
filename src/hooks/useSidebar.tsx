import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";

function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("sidebar does not exist at useSidebar hook");
  }

  return {
    isOpen: context.isOpen,
    setisOpen: context.setisOpen,
    toggleSidebar: context.toggleSidebar,
  };
}

export default useSidebar;
