import NotificationBell from "./notification/NotificationBell";
import Search from "./Search/Search";
import SidebarToggle from "./toggleSidebar/SidebarToggle";
import { NavbarProvider } from "../../../../context/NavbarContext";
import Profile from "./profile/Profile";
import LanguageSelection from "./language/LanguageSelection";
import Menubar from "./Menu/Menubar";
import AppLogo from "../ui/AppLogo";

function Navigation() {
  return (
    <NavbarProvider>
      <header>
        <nav className="flex p-4 py-3 dark:bg-backround relative">
          <AppLogo variants="text-2xl uppercase space-x-1 md:hidden text-center font-bold mr-auto my-auto" />

          {/* trigger sidebar  */}
          <div className="flex justify-between items-center gap-10 w-full ">
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
