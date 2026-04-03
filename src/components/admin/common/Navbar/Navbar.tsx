import NotificationBell from "./notification/NotificationBell";
import Search from "./Search/Search";
import SidebarToggle from "./toggleSidebar/SidebarToggle";
import { NavbarProvider } from "../../../../context/NavbarContext";
import Profile from "./profile/Profile";
import LanguageSelection from "./language/LanguageSelection";
import Menubar from "./Menu/Menubar";
import AppLogo from "../ui/AppLogo";
import useSidebar from "../../../../hooks/useSidebar";

function Navigation() {
  return (
    <NavbarProvider>
      <header>
        <nav
          className={`bg-white dark:bg-black border-b dark:border-gray-800 shadow-sm flex p-4 py-3 dark:bg-backround relative `}
        >
          <AppLogo variants="text-2xl uppercase space-x-1 md:hidden text-center font-bold mr-auto my-auto" />

          {/* trigger sidebar  */}
          <div
            className={`flex justify-between items-center gap-10 w-full  duration-300`}
          >
            <div className="flex items-center gap-10 grow">
              {/* menu button hidden in small screen*/}
              <SidebarToggle />
              {/* search on big screens */}
              <Search forMobile={false} />
            </div>

            <div className="flex items-center gap-3">
              {/* notification */}

              <NotificationBell />
              <LanguageSelection />
              <Profile />
              <Menubar />
            </div>
          </div>
        </nav>
      </header>
    </NavbarProvider>
  );
}

export default Navigation;
