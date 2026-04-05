import { createContext, useEffect, useState, type ReactNode } from "react";
import type { SidebarContextType } from "../@types/types";

/* eslint-disable react-refresh/only-export-components */

export const SidebarContext = createContext<SidebarContextType | undefined>(
  undefined,
);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setisOpen] = useState<boolean>(false);
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  // toggle sidebar function

  const toggleSidebar = () => {
    setisOpen((prev) => !prev);
    console.log(isOpen);
  };

  // function to close sidebar automatically when size is small

  const closeSidebar = () => {
    if (screenWidth < 800) {
      setisOpen(false);
    }
  };
  // listen to screen size in real time
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    () => closeSidebar();

    return () => window.removeEventListener("resize", handleResize);
  }, [screenWidth]);

  const value = {
    isOpen,
    setisOpen,
    toggleSidebar,
  };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
