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

export interface SidebarItemsProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  name: string;
}
export interface SidebarSectionProps {
  section: string;
  items: SidebarInfo[];
}
