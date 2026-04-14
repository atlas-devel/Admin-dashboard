import { SearchIcon } from "lucide-react";

function UsersSearch() {
  return (
    <div className="relative border shadow-inner shadow-gray-50 dark:shadow-none  border-gray-300 dark:border-gray-800  w-full md:max-w-[45%] bg-white  dark:bg-gray-800/60 rounded-2xl overflow-hidden  ">
      <input
        type="text"
        placeholder="Search by name or email..."
        className="relative w-full h-full z-20 placeholder-gray-500  placeholder:font-medium outline-none border-none p-3 pl-10"
      />
      <span className="absolute  p-3 pb-4 -translate-y-0.5 inset-0 text-gray-500">
        <SearchIcon />
      </span>
    </div>
  );
}

export default UsersSearch;
