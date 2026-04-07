import { Moon, Sun } from "lucide-react";
import type { ThemeProps } from "../../../../../@types/types";

function Theme({ theme, changeTheme }: ThemeProps) {
  return (
    <div
      onClick={changeTheme}
      className="hidden md:block ml-3 w-14 px-1.5 bg-white dark:bg-secondary-color/14 py-[1px] cursor-pointer border  border-gray-200 dark:border-secondary-color/40 rounded-full "
    >
      <span
        className={`bg-black  rounded-full h-4 w-4  flex items-center justify-center ${theme === "light" && "ml-auto bg-white"}`}
      >
        {theme === "dark" ? <Moon size={14} /> : <Sun />}
      </span>
    </div>
  );
}

export default Theme;
