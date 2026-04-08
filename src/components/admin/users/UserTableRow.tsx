import { rwandaUsersData } from "../../../data/AdminUsersData";
import profileImage from "@/assets/images/profile.jpeg";
import { Trash, Eye, Pencil } from "lucide-react";

function UserTableRow({ start = 0, end = 10 }: { start: number; end: number }) {
  return (
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
              src={profileImage}
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
  );
}

export default UserTableRow;
