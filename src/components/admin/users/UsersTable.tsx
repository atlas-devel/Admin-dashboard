import { useState } from "react";
import UserTablePaginations from "./UserTablePaginations";
import UserTableRow from "./UserTableRow";
import { rwandaUsersData } from "../../../data/AdminUsersData";

function UsersTable() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalUsers = rwandaUsersData.length;
  const totalPages = Math.ceil(totalUsers / 10);
  const start = (currentPage - 1) * 10;
  const end = start + 10;

  return (
    <div>
      {/* Table Container */}
      <div className="mt-6 border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-800/30 overflow-hidden shadow-sm shadow-secondary-color/10">
        {/* Table Header */}
        <div className=" grid grid-cols-4 lg:grid-cols-6 bg-gray-50 dark:bg-gray-800/50 uppercase font-semibold text-xs tracking-wider text-gray-500 dark:text-gray-400 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
          <div>Name</div>
          <div>Role</div>
          <div>Group</div>
          <div>Status</div>
          <div className="max-lg:hidden">Actions</div>
          <div className="max-lg:hidden">Created At</div>
        </div>

        <UserTableRow start={start} end={end} />
        <UserTablePaginations
          currentPage={currentPage}
          totalPages={totalPages}
          totalusers={totalUsers}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default UsersTable;
