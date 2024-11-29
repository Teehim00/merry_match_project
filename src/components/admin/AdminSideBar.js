import { IoCubeSharp } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { IoIosWarning } from "react-icons/io";

export function AdminSideBar() {
  return (
    <aside className="w-64 border-r bg-white">
      <div className="flex flex-col items-center justify-center p-6">
        <h1 className="text-2xl font-bold text-utility-second">
          Merry<span className="text-primary-500">Match</span>
        </h1>
        <h2 className="text-xs leading-9 text-fourth-700">
          Admin panel Control
        </h2>
      </div>
      <nav>
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="flex items-center rounded-lg bg-gray-200 px-6 py-3 text-gray-700"
            >
              <IoCubeSharp className="text-2xl text-primary-200" />
              <span className="ml-3 font-extrabold">Merry Package</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center rounded-lg px-6 py-3 text-gray-600 hover:bg-gray-100"
            >
              <IoIosWarning className="text-2xl text-primary-200" />
              <span className="ml-3 font-extrabold">Complaint</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="mt-80 flex items-center rounded-lg border-t border-gray-300 px-5 py-6 text-gray-600 hover:bg-gray-100"
            >
              <MdLogout className="text-2xl text-primary-200" />

              <span className="ml-3 font-extrabold">Log out</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}