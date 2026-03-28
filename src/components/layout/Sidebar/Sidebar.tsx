import { AnimatePresence, motion } from "framer-motion";
import useSidebar from "../../../hooks/useSidebar";

function Sidebar() {
  const { isOpen } = useSidebar();

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ width: isOpen ? 300 : 0, opacity: 1, x: 0 }}
          exit={{ x: -100 }}
          transition={{ ease: "easeInOut", duration: 0.3 }}
          className="hidden bg-blue-400 md:block h-full border-red-400 "
        >
          <h1>Sidebar</h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Sidebar;
