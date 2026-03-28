import { Search } from "lucide-react";
export interface SidebarInfo {
  id: number;
  name: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  link: string;
}

export interface SidebarContextType {
  isOpen: boolean;
  setisOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleSidebar: () => void;
}

export interface SearchProps {
  forMobile: boolean;
}
