import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";

function useSidebar() {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error("   use sidebar must be used in sidebar provider");
  }

  return {
    isOpen: context.isOpen,
    setisOpen: context.setisOpen,
    toggleSidebar: context.toggleSidebar,
  };
}
export default useSidebar;
