import useSidebar from "../../../../hooks/useSidebar";
import SidebarSections from "./SidebarSections";
import { sidebarElements } from "../../../../data/sidebarData";
import AppLogo from "../ui/AppLogo";

function Sidebar() {
  const { isOpen } = useSidebar();

  return (
    <div
      className={`hidden ${isOpen ? "w-[270px]" : "w-20 pt-15"} duration-300 transition-transform  bg-blue-50 dark:bg-background dark:backdrop-blur-3xl  py-6 overflow-auto hide-scrollbar border-r gap-6 border-gray-100 dark:border-gray-100/10 shadow-sm md:flex flex-col h-screen `}
    >
      <AppLogo variants="text-3xl  text-center font-bold " />
      {sidebarElements.map((item, index) => (
        <SidebarSections key={index} items={item.items} />
      ))}
    </div>
  );
}

export default Sidebar;
