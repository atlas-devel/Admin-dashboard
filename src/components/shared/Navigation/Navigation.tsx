import NotificationBell from "./NotificationBell";
import DesktopSearch from "./DesktopSearch";
import SidebarToggle from "./SidebarToggle";

function Navigation() {
  return (
    <nav className="flex   p-4 dark:bg-backround">
      {/* trigger sidebar  */}
      <div className="flex justify-between items-center gap-3 w-full ">
        <div className="flex items-center gap-10 grow">
          {/* menu button hidden in small screen*/}
          <SidebarToggle />
          {/* search on big screens */}
          <DesktopSearch />
        </div>
        {/* notification */}
        <NotificationBell />
      </div>
    </nav>
  );
}

export default Navigation;
