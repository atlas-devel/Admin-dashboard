import type { SidebarInfo } from "../../../../@types/types";
import { NavLink } from "react-router-dom";
import useSidebar from "../../../../hooks/useSidebar";

function SidebarItem({ items }: { items: SidebarInfo[] }) {
  const { isOpen } = useSidebar();

  return (
    <div className=" overflow-auto flex-1 ">
      {items.map(({ id, name, link, Icon }: SidebarInfo) => (
        <div key={id} className="flex items-center group cursor-pointer ">
          {isOpen && (
            <div className="hidden  transition-colors ease-in-out duration-400 dark:group-hover:bg-gradient-to-l from-blue-300 to-blue-600 group-hover:block bg-secondary-color h-full w-1 text-transparent py-6 rounded-r-xl" />
          )}
          <NavLink
            to={link}
            className={({ isActive }) =>
              `flex  items-center gap-4  transform-all duration-300  hover:bg-gradient-to-l from-blue-300 to-blue-600 dark:text-gray-100  mb-1 text-gray-700  group-hover:bg-secondary-color group-hover:text-white py-3 w-full ${isOpen && "mx-4"} duration-300 overflow-hidden rounded-md px-3 ${
                isActive
                  ? "bg-gradient-to-l from-blue-100 to-blue-600 text-white "
                  : " dark:hover:text-white hover:bg-blue-500 hover:text-white"
              }`
            }
          >
            <span className="text-sm pl-3">
              <Icon width={20} height={20} />
            </span>
            {isOpen && <p className="text-[15px] font-semibold">{name}</p>}
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default SidebarItem;
