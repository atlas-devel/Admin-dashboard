import { Search as SearchIcon } from "lucide-react";
import type { SearchProps } from "../../../../@types/types";

function Search({ forMobile }: SearchProps) {
  return (
    <div
      className={`${!forMobile && "max-md:hidden"} relative border border-primary-muted rounded-full dark:bg-primary-muted bg-white grow max-w-xl `}
    >
      <div className="absolute inset-y-0 text-ring flex items-center pl-3 ">
        <SearchIcon />
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

export default Search;
