import UserSearchFilter from "../../../components/admin/users/UserSearchFilter";
import UsersTable from "../../../components/admin/users/UsersTable";

function AdminUsers() {
  return (
    <section className="p-4 md:p-6 lg:py-2 lg:p-8">
      <div>
        <h1 className="ext-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
          All Users
        </h1>
      </div>
      <UserSearchFilter />
      <UsersTable />
    </section>
  );
}

export default AdminUsers;
