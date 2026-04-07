import { Bell } from "lucide-react";

function NotificationBell() {
  return (
    <div className="max-md:hidden relative  cursor-pointer p-1 ">
      <Bell
        size={20}
        className=" dark:text-gray-500 dark:fill-gray-500 text-gray-black"
      />
      <span className="p-[9px] absolute -top-2 font-medium -right-1 bg-destructive w-4 h-4 flex items-center justify-center text-white rounded-full">
        0
      </span>
    </div>
  );
}

export default NotificationBell;
