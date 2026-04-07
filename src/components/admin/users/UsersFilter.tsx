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
    <div className="flex items-center gap-8 max-md:hidden">
      {/* filter by role */}
      <div className="max-w-130 bg-gray-800/60 rounded-lg p-0.5 px-1">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="text-gray-400 font-medium tracking-wider">
              All Roles <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-background">
            <DropdownMenuItem className="dark:hover:bg-secondary-color ">
              Admin
            </DropdownMenuItem>
            <DropdownMenuItem className="dark:hover:bg-secondary-color ">
              Agent
            </DropdownMenuItem>
            <DropdownMenuItem className="dark:hover:bg-secondary-color ">
              Landlord
            </DropdownMenuItem>
            <DropdownMenuItem className="dark:hover:bg-secondary-color ">
              Renter
            </DropdownMenuItem>
            <DropdownMenuItem className="dark:hover:bg-secondary-color ">
              Guest
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* filter by status */}

      <div className="max-w-130 bg-gray-800/60 rounded-lg p-0.5 px-1">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="text-gray-400 font-medium tracking-wider">
              All Status <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-background">
            <DropdownMenuItem className="dark:hover:bg-secondary-color ">
              Active
            </DropdownMenuItem>
            <DropdownMenuItem className="dark:hover:bg-secondary-color ">
              Banned
            </DropdownMenuItem>
            <DropdownMenuItem className="dark:hover:bg-secondary-color ">
              Deactivate
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default UsersFilter;
