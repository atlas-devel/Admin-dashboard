import { createContext, useEffect, useRef, useState } from "react";
import type { SidebarContextType } from "../@types/types";
import type { ReactNode } from "react";
import { number } from "framer-motion";

export const SidebarContext = createContext<SidebarContextType | undefined>(
  undefined,
);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setisOpen] = useState<boolean>(false);
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  // function to toggle sidebar
  const toggleSidebar = () => setisOpen((prev) => !prev);

  // auto close sidebar when small screen
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    if (screenWidth < 800) {
      setisOpen(false);
    }
    return () => window.removeEventListener("resize", handleResize);
  }, [screenWidth]);

  const value: SidebarContextType = {
    isOpen,
    setisOpen,
    toggleSidebar,
  };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
