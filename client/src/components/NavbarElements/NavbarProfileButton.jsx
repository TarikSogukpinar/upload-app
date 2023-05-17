"use client";
import React, { useEffect, useState } from "react";
import NavbarLogoutButton from "../NavbarElements/NavbarLogoutButton";
import { getUser } from "../../app/services/authServices";
import Link from "next/link";

export default function NavbarProfileButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [userInfo, setUserInfo] = useState([]);

  const getUserInfo = async () => {
    const res = await getUser(
      userInfo.userName,
      userInfo.email,
      userInfo.password,
      userInfo.confirmPassword,
      userInfo.role
    );
    setUserInfo(res.data);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const toggleProfileDropdown = () => setIsOpen(!isOpen);

  return (
    <div>
      {userInfo.map((userInfos, index) => (
        <div
          key={index}
          className="mt-4 flex flex-col gap-8 sm:mt-0 sm:flex-row sm:items-center"
        >
          <div className="relative">
            <div className="inline-flex items-center overflow-hidden rounded-md border bg-white">
              <Link
                href={"/profile"}
                className="border-e px-4 py-2 text-md/none text-gray-600 hover:bg-gray-50 hover:text-gray-700"
              >
                {userInfos.userName}
              </Link>

              <button
                onClick={toggleProfileDropdown}
                className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
              >
                <span className="sr-only">Menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {isOpen && (
              <div
                className="absolute end-0 z-10 mt-2 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg"
                role="menu"
              >
                <div className="p-2">
                  {/* <strong className="block p-2 text-xs font-medium uppercase text-gray-400">
                General
              </strong> */}

                  <Link
                    href={"/profile"}
                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                  >
                    Profile
                  </Link>

                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                  >
                    Upload File
                  </a>

                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                  >
                    Forget Password
                  </a>

                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                  >
                    Contact Us
                  </a>
                </div>
                <NavbarLogoutButton />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
