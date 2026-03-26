import { Bell, Menu } from "lucide-react";

function Navigation() {
  return (
    <nav className="flex justify-between ">
      <div className="flex">
        <button className="hidden md:hidden hover:bg-neutral-100 duration-300 cursor-pointer rounded-md shadow-sm p-2">
          <Menu />
        </button>
        <input type="text" />
      </div>
      { /* notification */}
      <div className="flex items-center gap-4">
        <Bell />
      </div>
    </nav>
  );
}

export default Navigation;
