import { Camera } from "lucide-react";
import {
  districts,
  registrationRoles,
} from "../../../data/registrationFormData";

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
            <div className="relative flex items-center justify-center shrink-0 w-18 h-18 md:w-24 md:h-24 border-2 border-dashed border-gray-400 dark:border-gray-500 rounded-2xl bg-gray-100 dark:bg-gray-800/30">
              <span className="text-gray-400 dark:text-gray-500">
                <Camera size={28} />
              </span>
              <input
                className="absolute w-full h-full text-transparent inset-0"
                type="file"
                name="profile_image"
              />
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
            <div className="max-md:mb-9 max-md:mt-2 grid max-md:grid-cols-1 grid-cols-2 gap-5 md:gap-8 ">
              <div className="flex flex-col gap-1 w-full  text-gray-900 dark:text-gray-300 ">
                <label
                  htmlFor="full_name"
                  className="tracking-wider uppercase text-xs font-semibold mb-2 "
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
              <div className="flex flex-col gap-1 w-full ">
                <label
                  htmlFor="email"
                  className="tracking-wider uppercase text-xs font-semibold mb-2"
                >
                  Email:
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="e.g example@gmail.com"
                  className="p-3 bg-gray-100 rounded-lg dark:bg-gray-800/20 dark:backdrop-blur-3xl border-gray-100 shadow-sm border dark:border-gray-100/20 outline-none"
                />
              </div>
              <div className="flex flex-col gap-1 w-full ">
                <label
                  htmlFor="phone"
                  className="tracking-wider uppercase text-xs font-semibold mb-2"
                >
                  phone number:
                </label>

                <input
                  id="phone"
                  type="text"
                  placeholder="phone number"
                  className="p-3 bg-gray-100 rounded-lg dark:bg-gray-800/20 dark:backdrop-blur-3xl border-gray-100 shadow-sm border dark:border-gray-100/20 outline-none"
                />
              </div>
              <div className="flex flex-col gap-1 w-full ">
                <label
                  htmlFor="id"
                  className="tracking-wider uppercase text-xs font-semibold mb-2"
                >
                  national id:
                </label>

                <input
                  id="id"
                  type="text"
                  placeholder="national id"
                  className="p-3 bg-gray-100 rounded-lg dark:bg-gray-800/20 dark:backdrop-blur-3xl border-gray-100 shadow-sm border dark:border-gray-100/20 outline-none"
                />
              </div>
              <div className="flex flex-col gap-1 w-full ">
                <label
                  htmlFor="country_issue"
                  className="tracking-wider uppercase text-xs font-semibold mb-2"
                >
                  issuing country:
                </label>

                <input
                  id="country_issue"
                  type="text"
                  placeholder="Rwanda"
                  className="p-3 bg-gray-100 rounded-lg dark:bg-gray-800/20 dark:backdrop-blur-3xl border-gray-100 shadow-sm border dark:border-gray-100/20 outline-none"
                />
              </div>
            </div>
          </div>

          {/* assigned roles */}
          <div>
            <h1 className="pb-2 max-md:mb-4 max-md:mt-2 md:mt-12 border-b border-gray-100 dark:border-gray-700/20 text-gray-900  dark:text-gray-300 text-sm font-mono font-semibold tracking-wider">
              ASSIGNED ROLES
            </h1>
            <div className="flex flex-col md:flex-row gap-3 md:gap-6 mt-4">
              {registrationRoles.map(({ id, role, Icon, description }) => (
                <div
                  key={id}
                  className="md:w-full md:p-6 p-4 bg-gray-100 rounded-lg dark:bg-gray-800/40 dark:backdrop-blur-3xl border-gray-100 shadow-sm border dark:border-gray-100/6"
                >
                  <div className="flex items-center justify-between">
                    <span>
                      <Icon />
                    </span>
                    <span>
                      <input
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                        type="radio"
                        name="admin"
                      />
                    </span>
                  </div>
                  <h1 className="tracking-wider font-semibold md:py-2">
                    {role}
                  </h1>
                  <p className="text-xs text-gray-500">{description}</p>
                </div>
              ))}
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
                className="uppercase text-xs font-semibold tracking-wider mb-2"
              >
                Password:
              </label>

              <input
                id="full_name"
                type="password"
                placeholder="password"
                className="p-3 bg-gray-100 rounded-lg dark:bg-gray-800/20 dark:backdrop-blur-3xl max-w-md border-gray-100 shadow-sm border dark:border-gray-100/20 outline-none"
              />
            </div>
          </div>
          {/* Basic information */}
          <div className="flex flex-col gap-4">
            <h1 className="pb-2 max-md:mt-10 md:mt-12 border-b border-gray-100 dark:border-gray-700/20 text-gray-900 dark:text-gray-300 text-sm font-mono font-semibold tracking-wider">
              ADDRESS INFO
            </h1>
            <div className="max-md:mb-9 max-md:mt-2 grid max-md:grid-cols-1 grid-cols-2 gap-5 md:gap-8 ">
              <div className="flex flex-col gap-1 w-full  text-gray-900 dark:text-gray-300  ">
                <label
                  htmlFor="country"
                  className="tracking-wider uppercase text-xs font-semibold mb-2"
                >
                  country:
                </label>

                <input
                  id="country"
                  type="text"
                  placeholder="Rwanda"
                  className="p-3 bg-gray-100 rounded-lg dark:bg-gray-800/20 dark:backdrop-blur-3xl border-gray-100 shadow-sm border dark:border-gray-100/20 outline-none"
                />
              </div>

              <div className="flex flex-col gap-1 w-full ">
                <label
                  htmlFor="city"
                  className="tracking-wider uppercase text-xs font-semibold mb-2"
                >
                  city:
                </label>

                <input
                  id="city"
                  type="text"
                  placeholder="Kigali city"
                  className="p-3 bg-gray-100 rounded-lg dark:bg-gray-800/20 dark:backdrop-blur-3xl border-gray-100 shadow-sm border dark:border-gray-100/20 outline-none"
                />
              </div>
              <div className="flex flex-col gap-1 w-full ">
                <label
                  htmlFor="province"
                  className="tracking-wider uppercase text-xs font-semibold mb-2"
                >
                  province:
                </label>

                <select
                  name="province"
                  id="province"
                  className="p-3 bg-gray-100 rounded-lg dark:bg-gray-800/20 dark:backdrop-blur-3xl border-gray-100 shadow-sm border dark:border-gray-100/20 outline-none"
                >
                  <option className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-300">
                    Kigali city
                  </option>
                  <option
                    className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-300"
                    defaultValue=""
                  >
                    Western Province
                  </option>
                  <option className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-300">
                    Eastern Province
                  </option>
                  <option className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-300">
                    Northern Province
                  </option>
                  <option className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-300">
                    Southern Province
                  </option>
                </select>
              </div>
              <div className="flex flex-col gap-1 w-full ">
                <label
                  htmlFor="district"
                  className="tracking-wider uppercase text-xs font-semibold mb-2"
                >
                  district:
                </label>

                <select
                  name="district"
                  id="district"
                  className="p-3 bg-gray-100 rounded-lg dark:bg-gray-800/20 dark:backdrop-blur-3xl border-gray-100 shadow-sm border dark:border-gray-100/20 outline-none"
                >
                  {districts.map((location) => (
                    <option
                      key={location.id}
                      className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-300"
                    >
                      {location.district}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-1 w-full ">
                <label
                  htmlFor="sector"
                  className="tracking-wider uppercase text-xs font-semibold mb-2"
                >
                  sector:
                </label>

                <input
                  id="sector"
                  type="text"
                  placeholder="Muhima"
                  className="p-3 bg-gray-100 rounded-lg dark:bg-gray-800/20 dark:backdrop-blur-3xl border-gray-100 shadow-sm border dark:border-gray-100/20 outline-none"
                />
              </div>
              <div className="flex flex-col gap-1 w-full ">
                <label
                  htmlFor="cell"
                  className="tracking-wider uppercase text-xs font-semibold mb-2"
                >
                  cell:
                </label>

                <input
                  id="cell"
                  type="text"
                  placeholder="kabeza"
                  className="p-3 bg-gray-100 rounded-lg dark:bg-gray-800/20 dark:backdrop-blur-3xl border-gray-100 shadow-sm border dark:border-gray-100/20 outline-none"
                />
              </div>
              <div className="flex flex-col gap-1 w-full ">
                <label
                  htmlFor="address"
                  className="tracking-wider uppercase text-xs font-semibold mb-2"
                >
                  address:
                </label>

                <input
                  id="address"
                  type="text"
                  placeholder="kabeza"
                  className="p-3 bg-gray-100 rounded-lg dark:bg-gray-800/20 dark:backdrop-blur-3xl border-gray-100 shadow-sm border dark:border-gray-100/20 outline-none"
                />
              </div>
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
