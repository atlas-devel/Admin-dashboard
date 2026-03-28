import React from "react";
import type { SidebarInfo } from "../../../@types/types";
import { Link } from "react-router-dom";

function SidebarItem({ items }: { items: SidebarInfo[] }) {
  return (
    <div className=" overflow-auto flex-1 ">
      {items.map(({ id, name, link, Icon }: SidebarInfo) => (
        <div key={id} className="flex items-center group cursor-pointer ">
          <div className="hidden  transition-colors ease-in-out duration-400 group-hover:block bg-secondary-color h-full w-1 text-transparent py-4 rounded-r-xl">
            .
          </div>
          <div className="flex  items-center gap-4 transition-opacity duration-400  mb-1 text-primary-text group-hover:bg-secondary-color group-hover:text-white py-4 w-full mx-5 rounded-md px-3">
            <span className="text-sm">
              <Icon width={20} height={20} />
            </span>
            <Link className="text-[15px] " to={link}>
              {name}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SidebarItem;
