import NotificationBell from "./notification/NotificationBell";
import Search from "./Search/Search";
import SidebarToggle from "./toggleSidebar/SidebarToggle";
import MobileSearch from "./Search/MobileSearch";

function Navigation() {
  return (
    <header>
      <nav className="flex p-4 py-6 dark:bg-backround relative">
        {/* trigger sidebar  */}
        <div className="flex justify-between items-center gap-3 w-full ">
          <div className="flex items-center gap-10 grow">
            {/* menu button hidden in small screen*/}
            <SidebarToggle />
            {/* search on big screens */}
            <Search forMobile={false} />

            <MobileSearch />
          </div>
          {/* notification */}
          <NotificationBell />
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
