import { Bell } from "lucide-react";

function NotificationBell() {
  return (
    <div className="max-md:hidden relative ">
      <Bell className="fill-secondary-color text-secondary-color text-3xl" />
      <span className="p-[9px] absolute -top-2 font-medium -right-1 bg-destructive w-4 h-4 flex items-center justify-center text-white rounded-full">
        0
      </span>
    </div>
  );
}

export default NotificationBell;
