import type { UserTablePaginationProps } from "../../../@types/types";

function UserTablePaginations({
  currentPage,
  totalPages,
  totalusers,
  setCurrentPage,
}: UserTablePaginationProps) {
  return (
    <div className="bg-gray-100 flex items-center justify-between dark:bg-gray-800/50 p-3.5">
      <div>
        <p className="text-sm tracking-wider text-gray-400">
          Showing {currentPage} to {totalPages} of {totalusers} results
        </p>
      </div>
      <div className="flex items-center">
        <button
          aria-label="Show users on Previous page"
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
          className={`border font-medium  border-gray-600 px-3 py-1 rounded-md ml-5   tracking-tight text-sm  ${currentPage === 1 ? "bg-gray-800 text-gray-600  cursor-not-allowed " : "hover:text-gray-100 hover:bg-gray-800/50  cursor-pointer text-gray-300"}`}
        >
          Previous
        </button>
        <div className="flex mx-6 gap-2">
          <span className="w-7 h-7 font-semibold rounded-full bg-linear-to-l from-blue-500 to-blue-800 flex items-center justify-center ">
            1
          </span>
          <span className="w-7 h-7 font-semibold rounded-full bg-linear-to-l from-blue-500 to-blue-800 flex items-center justify-center">
            2
          </span>
        </div>
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages}
          aria-label="Show users on the Next page"
          className={`border font-medium  border-gray-600 px-3 py-1 rounded-md  tracking-tight text-sm  ${currentPage === totalPages ? "bg-gray-800 text-gray-600  cursor-not-allowed " : "hover:text-gray-100 hover:bg-gray-800/50  cursor-pointer text-gray-300"}`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default UserTablePaginations;
