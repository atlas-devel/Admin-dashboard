import { rwandaUsersData } from "../../../data/AdminUsersData";
import { Trash, Eye, Pencil } from "lucide-react";
import prifileImage from "@/assets/images/profile.jpeg";

function UsersTable({ start = 0, end = 10 }) {
  return (
    <div  >
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

        {/* Table Body (Rows) */}
        <div className="divide-y divide-gray-100 dark:divide-gray-800 ">
          {rwandaUsersData.slice(start, end).map((user) => (
            <div
              key={user.id}
              className="grid grid-cols-4 lg:grid-cols-6 px-4 py-3 text-sm items-center text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
            >
              {/* Name Column */}
              <div className="flex items-center gap-3 min-w-">
                <img
                  height={25}
                  width={25}
                  className="rounded-full"
                  src={prifileImage}
                  loading="lazy"
                  alt="profile image"
                />
                <div className="font-medium text-gray-900 dark:text-white truncate pr-2   ">
                  {user.name}
                </div>
              </div>

              {/* Role Column */}
              <div className="capitalize ">{user.role}</div>

              {/* Group Column */}
              <div>{user.group}</div>

              {/* Status Column */}
              <div>
                <span
                  className={`inline-flex items-center justify-center px-3 py-1 text-xs font-medium rounded-full ${
                    user.status === "Active"
                      ? "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400"
                      : user.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400"
                        : "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400"
                  }`}
                >
                  {user.status}
                </span>
              </div>

              {/* Actions Column */}
              <div className="flex items-center gap-6 max-lg:hidden">
                <div className="bg-gray-100 dark:bg-gray-200/10 dark:hover:bg-gray-200  dark:hover:text-black  hover:bg-gray-300 cursor-pointer p-2 duraion-300 rounded-sm">
                  <Eye size={20} />
                </div>
                <div className="bg-label-blue/15 text-blue-700 hover:bg-label-blue hover:text-white duration-300 cursor-pointer p-2 rounded-sm">
                  <Pencil size={20} />
                </div>
                <div className="bg-destructive/15 hover:bg-destructive hover:text-white duration-300 text-destructive cursor-pointer p-2 rounded-sm">
                  <Trash size={20} />
                </div>
              </div>

              {/* Created At Column */}
              <div className="text-gray-500 dark:text-gray-400 text-xs max-lg:hidden">
                {new Date(user.createdAt).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
        {/* paginations */}
        <div className="bg-gray-100 flex items-center justify-between dark:bg-gray-800/50 p-3.5">
          <div>
            <p className="text-sm tracking-wider text-gray-400">
              Showing 1 to 8 of 10 results
            </p>
          </div>
          <div className="flex items-center">
            <button
              disabled={true}
              className="hover:bg-gray-800/50 border font-medium  border-gray-600 px-3 py-1 rounded-md ml-5 text-gray-300 tracking-tight text-sm hover:text-gray-100 cursor-pointer"
            >
              Previous
            </button>
            <div className="flex mx-6 gap-2">
              <span className="w-7 h-7 font-semibold rounded-full bg-linear-to-l from-blue-500 to-blue-800 flex items-center justify-center">
                1
              </span>
              <span className="w-7 h-7 font-semibold rounded-full bg-linear-to-l from-blue-500 to-blue-800 flex items-center justify-center">
                2
              </span>
            </div>
            <button className="hover:bg-gray-800/50 border font-medium border-gray-600 px-3 py-1 rounded-md text-gray-300 tracking-tight text-sm hover:text-gray-100 cursor-pointer">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersTable;
