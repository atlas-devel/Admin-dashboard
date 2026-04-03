import type { SidebarInfo } from "../../../../@types/types";
import { NavLink } from "react-router-dom";

function SidebarItem({ items }: { items: SidebarInfo[] }) {
  return (
    <div className=" overflow-auto flex-1 ">
      {items.map(({ id, name, link, Icon }: SidebarInfo) => (
        <div key={id} className="flex items-center group cursor-pointer ">
          <div className="hidden  transition-colors ease-in-out duration-400 group-hover:block bg-secondary-color h-full w-1 text-transparent py-6 rounded-r-xl" />
          <NavLink
            to={link}
            className={({ isActive }) =>
              `flex  items-center gap-4  duration-200  mb-1 text-primary-text group-hover:bg-secondary-color group-hover:text-white py-3 w-full mx-4 rounded-md px-3 ${
                isActive
                  ? "bg-secondary-color text-white "
                  : "text-primary-text hover:bg-blue-500 hover:text-white"
              }`
            }
          >
            <span className="text-sm pl-3">
              <Icon width={20} height={20} />
            </span>
            <p className="text-[15px] font-medium">{name}</p>
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default SidebarItem;
