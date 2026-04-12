import { createContext, useEffect, useState, type ReactNode } from "react";
import type { SidebarContextType } from "../@types/types";

/* eslint-disable react-refresh/only-export-components */

export const SidebarContext = createContext<SidebarContextType | undefined>(
  undefined,
);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setisOpen] = useState<boolean>(false);
 
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  // toggle sidebar function

  const toggleSidebar = () => {
    setisOpen((prev) => !prev);
    console.log(isOpen);
  };

  // function to close sidebar automatically when size is small

  // listen to screen size in real time

  useEffect(() => {
    console.log("rendered");
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      setScreenWidth(currentWidth);

      if (currentWidth < 800) {
        setisOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const value = {
    isOpen,
    setisOpen,
    toggleSidebar,
  };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
