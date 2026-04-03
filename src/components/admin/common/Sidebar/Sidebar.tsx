import { AnimatePresence, motion } from "framer-motion";
import useSidebar from "../../../../hooks/useSidebar";
import SidebarSections from "./SidebarSections";
import { sidebarElements } from "../../../../data/sidebarData";
import AppLogo from "../ui/AppLogo";

function Sidebar() {
  const { isOpen } = useSidebar();

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ width: isOpen ? 270 : 0, opacity: 1, x: 0 }}
          exit={{ x: -100 }}
          transition={{ ease: "easeInOut", duration: 0.3 }}
          className="hidden bg-white dark:bg-black py-6 overflow-auto hide-scrollbar border-r gap-6 border-gray-100 dark:border-gray-800/90 shadow-sm md:flex flex-col h-screen "
        >
          <AppLogo variants="text-3xl  text-center font-bold " />
          {sidebarElements.map((item) => (
            <SidebarSections
              key={item.title}
              section={item.title}
              items={item.items}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Sidebar;
