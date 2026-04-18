import { Camera } from "lucide-react";

function AddUser() {
  return (
    <div className="w-full p-4 md:p-6 lg:py-2 lg:p-8 bg-background dark:bg-gray-800/30 border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm shadow-secondary-color/10">
      <h1 className="py-8  font-semibold text-xl text-gray-900 dark:text-gray-300">
        Add New User
      </h1>
      <form action="">
        <div>
          <h1 className="text-gray-900 dark:text-gray-300 text-sm font-mono font-semibold tracking-wider md:border-b-2 md:border-gray-100 dark:border-gray-700/20 pb-2 mb-2 md:mb-6">
            IDENTITY PRESENCE
          </h1>
          <div className="flex items-center gap-4 ">
            <div className="flex items-center justify-center shrink-0 w-18 h-18 md:w-24 md:h-24 border-2 border-dashed border-gray-400 dark:border-gray-500 rounded-2xl bg-gray-100 dark:bg-gray-800/30">
              <span className="text-gray-400 dark:text-gray-500">
                <Camera size={28} />
              </span>
            </div>
            <div className="space-y-1">
              <h1 className="font-semibold text-gray-900 dark:text-gray-300">
                Profile Photo
              </h1>
              <p className="text-xs  text-gray-700 dark:text-gray-500">
                A clear proffesional headshot helps to identify each other.{" "}
                <br className="max-md:hidden" />
                JPEG or PNG, max 5MB.
              </p>
            </div>
          </div>
        </div>

        <div>
          {/* Basic information */}
          <div className="flex flex-col gap-4">
            <h1 className="pb-2 max-md:mt-10 md:mt-12 border-b border-gray-100 dark:border-gray-700/20 text-gray-900 dark:text-gray-300 text-sm font-mono font-semibold tracking-wider">
              BASIC INFORMATION
            </h1>
            <div className="max-md:mb-9 max-md:mt-2 flex flex-col md:flex-row md:justify-between gap-5 md:gap-10 ">
              <div className="flex flex-col gap-1 w-full md:max-w-[48%] text-gray-900 dark:text-gray-300 ">
                <label
                  htmlFor="full_name"
                  className="tracking-wider uppercase text-xs font-semibold "
                >
                  Full Name:
                </label>

                <input
                  id="full_name"
                  type="text"
                  placeholder="e.g Irakarama leon"
                  className="p-3 bg-gray-100 rounded-lg dark:bg-gray-800/20 dark:backdrop-blur-3xl border-gray-100 shadow-sm border dark:border-gray-100/20 outline-none"
                />
              </div>
              <div className="flex flex-col gap-1 w-full md:max-w-[48%]">
                <label
                  htmlFor="email"
                  className="tracking-wider uppercase text-xs font-semibold"
                >
                  Email:
                </label>

                <input
                  id="email"
                  type="text"
                  placeholder="e.g example@gmail.com"
                  className="p-3 bg-gray-100 rounded-lg dark:bg-gray-800/20 dark:backdrop-blur-3xl border-gray-100 shadow-sm border dark:border-gray-100/20 outline-none"
                />
              </div>
              <div className="flex flex-col gap-1 w-full md:max-w-[48%]">
                <label
                  htmlFor="email"
                  className="tracking-wider uppercase text-xs font-semibold"
                >
                  Email:
                </label>

                <input
                  id="email"
                  type="text"
                  placeholder="e.g example@gmail.com"
                  className="p-3 bg-gray-100 rounded-lg dark:bg-gray-800/20 dark:backdrop-blur-3xl border-gray-100 shadow-sm border dark:border-gray-100/20 outline-none"
                />
              </div>
              <div className="flex flex-col gap-1 w-full md:max-w-[48%]">
                <label
                  htmlFor="email"
                  className="tracking-wider uppercase text-xs font-semibold"
                >
                  Email:
                </label>

                <input
                  id="email"
                  type="text"
                  placeholder="e.g example@gmail.com"
                  className="p-3 bg-gray-100 rounded-lg dark:bg-gray-800/20 dark:backdrop-blur-3xl border-gray-100 shadow-sm border dark:border-gray-100/20 outline-none"
                />
              </div>
            </div>
          </div>

          {/* assigned roles */}
          <div className="flex flex-col gap-3">
            <h1 className="pb-2 max-md:mb-4 max-md:mt-2 md:mt-12 border-b border-gray-100 dark:border-gray-700/20 text-gray-900  dark:text-gray-300 text-sm font-mono font-semibold tracking-wider">
              ASSIGNED ROLES
            </h1>
            <div className="p-4 bg-gray-100 rounded-lg dark:bg-gray-800/40 dark:backdrop-blur-3xl border-gray-100 shadow-sm border dark:border-gray-100/6">
              <h1 className="tracking-wider font-semibold">Admin</h1>
              <p className="text-xs text-gray-500">
                Full System access and data oversight.
              </p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg dark:bg-gray-800/40 dark:backdrop-blur-3xl border-gray-100 shadow-sm border dark:border-gray-100/6">
              <h1 className="tracking-wider font-semibold">Agent</h1>
              <p className="text-xs text-gray-500">
                Full System access and data oversight.
              </p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg dark:bg-gray-800/40 dark:backdrop-blur-3xl border-gray-100 shadow-sm border dark:border-gray-100/6">
              <h1 className="tracking-wider font-semibold">Landlord</h1>
              <p className="text-xs text-gray-500">
                Full System access and data oversight.
              </p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg dark:bg-gray-800/40 dark:backdrop-blur-3xl border-gray-100 shadow-sm border dark:border-gray-100/6">
              <h1 className="tracking-wider font-semibold">Renter</h1>
              <p className="text-xs text-gray-500">
                Full System access and data oversight.
              </p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg dark:bg-gray-800/40 dark:backdrop-blur-3xl border-gray-100 shadow-sm border dark:border-gray-100/6">
              <h1 className="tracking-wider font-semibold">Guest</h1>
              <p className="text-xs text-gray-500">
                Full System access and data oversight.
              </p>
            </div>
          </div>
          {/* security Credentials */}
          <div>
            <h1 className="pb-2 mb-6 max-md:mt-10 md:mt-12 border-b border-gray-100  dark:border-gray-700/20 text-gray-900 dark:text-gray-300 text-sm font-mono font-semibold tracking-wider">
              SECURITY CREDENTIALS
            </h1>

            <div className="flex flex-col gap-1  ">
              <label
                htmlFor="full_name"
                className="uppercase text-xs font-semibold tracking-wider"
              >
                Password:
              </label>

              <input
                id="full_name"
                type="password"
                placeholder="password"
                className="p-3 bg-gray-100 rounded-lg dark:bg-gray-800/20 dark:backdrop-blur-3xl"
              />
            </div>
          </div>
        </div>
        <div className="max-w-40 p-2 rounded-lg text-white text-center capitalize font-semibold ml-auto my-8 mb-3 bg-blue-600">
          <button type="submit">create</button>
        </div>
      </form>
    </div>
  );
}

export default AddUser;
