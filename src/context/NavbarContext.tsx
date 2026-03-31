import { createContext, useRef, type ReactNode, type RefObject } from "react";

interface NavbarContextProps {
  focusInput: RefObject<null | HTMLDivElement>;
}

export const NavbarContext = createContext<undefined | NavbarContextProps>(
  undefined,
);

export const NavbarProvider = ({ children }: { children: ReactNode }) => {
  const focusInput = useRef<HTMLDivElement | null>(null);

  const value = { focusInput };

  return (
    <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>
  );
};
