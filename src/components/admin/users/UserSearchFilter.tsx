import UsersFilter from "./UsersFilter";
import UsersSearch from "./UsersSearch";

function UserSearchFilter() {
  return (
    <div className="bg-gray-800/30 w-full p-4  md:p-6 lg:p-8 mt-4 rounded-md flex items-center justify-between gap-10">
      <UsersSearch />
      <UsersFilter />
    </div>
  );
}

export default UserSearchFilter;
