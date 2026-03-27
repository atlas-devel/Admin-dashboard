import React from "react";
import { Search } from "lucide-react";

function DesktopSearch() {
  return (
    <div className="hidden md:block relative border border-primary-muted rounded-full dark:bg-primary-muted bg-white grow max-w-xl ">
      <div className="absolute inset-y-0 text-ring flex items-center pl-3 ">
        <Search />
      </div>
      <input
        type="text"
        name="browse"
        className="placeholder:text-ring w-full pl-10 py-2 border-none focus:outline-none focus:ring-1 focus:ring-primary-muted rounded-full "
        placeholder="Search"
      />
    </div>
  );
}

export default DesktopSearch;
