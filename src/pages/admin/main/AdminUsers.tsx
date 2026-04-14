import UsersTable from "../../../components/admin/users/UsersTable";
import UserSearchFilter from "../../../components/admin/users/UserSearchFilter";
import { UserManagementProvider } from "../../../context/user_management_context/UserManagementProvider";

function AdminUsers() {
  return (
    <UserManagementProvider>
      <section className="w-full p-4 md:p-6 lg:py-2 lg:p-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
            Users Management
          </h1>
        </div>
        <UserSearchFilter />
        <UsersTable />
      </section>
    </UserManagementProvider>
  );
}

export default AdminUsers;
