import type { SidebarSectionProps } from "../../../../@types/types";
import SidebarItem from "./SidebarItem";

function SidebarSections({ items }: SidebarSectionProps) {
  return (
    <div className="ml-2 h-full  ">
      <div className="border-t border-gray-100 dark:border-gray-100/10 pb-2 " />
      <SidebarItem items={items} />
    </div>
  );
}

export default SidebarSections;
