import { ChevronDown } from "lucide-react";
import { Button } from "../common/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../common/ui/dropdown-menu";

function UsersFilter() {
  return (
    <div className="flex items-center gap-8 ">
      {/* filter by role */}
      <div className="max-md:w-full md:max-w-130 dark:bg-gray-800/60 rounded-lg p-0.5 px-1">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="w-full  text-gray-600 border border-gray-600 dark:border-none dark:text-gray-400 font-medium tracking-wider ">
              <span> All Roles </span>{" "}
              <span className="ml-auto  ">
                <ChevronDown />
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-background  text-gray-600 border border-gray-600 dark:border-none dark:text-gray-400 ">
            <DropdownMenuItem className="dark:hover:bg-secondary-color dark:hover:text-white ">
              Admin
            </DropdownMenuItem>
            <DropdownMenuItem className="dark:hover:bg-secondary-color dark:hover:text-white">
              Agent
            </DropdownMenuItem>
            <DropdownMenuItem className="dark:hover:bg-secondary-color dark:hover:text-white">
              Landlord
            </DropdownMenuItem>
            <DropdownMenuItem className="dark:hover:bg-secondary-color dark:hover:text-white">
              Renter
            </DropdownMenuItem>
            <DropdownMenuItem className="dark:hover:bg-secondary-color dark:hover:text-white">
              Guest
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* filter by status */}

      <div className="max-md:w-full md:max-w-130 dark:bg-gray-800/60 rounded-lg p-0.5 px-1">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="w-full  text-gray-600 border border-gray-600 dark:border-none dark:text-gray-400 font-medium tracking-wider ">
              <span> All Status </span>{" "}
              <span className="ml-auto  ">
                <ChevronDown />
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-background text-gray-600 border border-gray-600 dark:border-none dark:text-gray-400 ">
            <DropdownMenuItem className="dark:hover:bg-secondary-color dark:hover:text-white">
              Active
            </DropdownMenuItem>
            <DropdownMenuItem className="dark:hover:bg-secondary-color dark:hover:text-white">
              Banned
            </DropdownMenuItem>
            <DropdownMenuItem className="dark:hover:bg-secondary-color dark:hover:text-white">
              Deactivate
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default UsersFilter;
