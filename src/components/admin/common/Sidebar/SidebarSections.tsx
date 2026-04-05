import type { SidebarSectionProps } from "../../../../@types/types";
import SidebarItem from "./SidebarItem";

function SidebarSections({ section, items }: SidebarSectionProps) {
  return (
    <div className="ml-2 h-full  ">
      {section && (
        <div className="border-t border-gray-400 dark:border-gray-100/10 py-4 ">
          <h1 className=" block uppercase text-neutral-400 text-sm font-medium pl-4">
            {section}
          </h1>
        </div>
      )}
      <SidebarItem items={items} />
    </div>
  );
}

export default SidebarSections;
