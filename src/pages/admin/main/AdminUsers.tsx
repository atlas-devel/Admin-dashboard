import UsersTable from "../../../components/admin/users/UsersTable";
import UserSearchFilter from "../../../components/admin/users/UserSearchFilter";

function AdminUsers() {
  return (
    <section className="w-full p-4 md:p-6 lg:py-2 lg:p-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
          Users Management
        </h1>
      </div>
      <UserSearchFilter />
      <UsersTable />
    </section>
  );
}

export default AdminUsers;
