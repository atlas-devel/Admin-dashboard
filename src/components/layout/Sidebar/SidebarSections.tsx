import { Link } from "react-router-dom";
import type { SidebarSectionProps } from "../../../@types/types";
import SidebarItem from "./SidebarItem";

function SidebarSections({ section, items }: SidebarSectionProps) {
  return (
    <div className="ml-2 h-full  ">
      {section && (
        <div className="border-t border-primary-muted py-4 ">
          <h1 className=" block uppercase text-neutral-400 font-semibold pl-2">
            {section}
          </h1>
        </div>
      )}
      <SidebarItem items={items} />
    </div>
  );
}

export default SidebarSections;
