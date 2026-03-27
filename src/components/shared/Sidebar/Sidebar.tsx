import { motion } from "framer-motion";
import type { SidebarProps } from "../../../@types/types";

function Sidebar({ isOpen }: SidebarProps) {
  return (
    <motion.div
      initial={{ width: isOpen ? 700 : 150 }}
      className="hidden bg-blue-300 md:block h-full border-red-400 "
    >
      <h1>Sidebar</h1>
    </motion.div>
  );
}

export default Sidebar;
