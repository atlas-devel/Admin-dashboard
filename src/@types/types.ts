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

export interface Language {
  flag: string;
  language: "Kinyarwanda" | "English" | "French";
}

export interface StatsCardProps {
  title: string;
  number: number;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  bgColor: string;
  color: string;
  rate: number;
}
