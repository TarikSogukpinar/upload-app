"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import {
  getUserLocationInformation,
  getUserOperatingSystemType,
} from "@/app/services/userServices";
import { FaWindows, FaApple, FaLinux } from "react-icons/fa";

const DeleteAccountSection = dynamic(() => import("./DeleteAccountSection"));

export default function SecuritySection({ cookie }) {
  const [userInformation, setUserInformation] = useState({});
  const [userIpInformation, setUserIpInformation] = useState(null);
  const [userOsInformation, setUserOsInformation] = useState({});

  const getUserInformation = async () => {
    const res = await getUserLocationInformation();
    setUserInformation(res.data.getLocation);
    setUserIpInformation(res.data.getIp);
  };

  const getUserOSType = async () => {
    const res = await getUserOperatingSystemType();
    setUserOsInformation(res.data);
  };

  useEffect(() => {
    getUserInformation();
    getUserOSType();
  }, []);

  return (
    <div>
      <div className="px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16">
        <div>
          <h1 className="antialiased text-2xl sm:text-3xl leading-6 font-medium text-gray-900 mt-2 sm:mt-8 mb-1 sm:mb-2">
            Security Settings
          </h1>
          <h2 className="antialiased text-xs sm:text-sm mt-1 sm:mt-2">
            Manage your security settings
          </h2>
          <div className="space-y-2 sm:space-y-4">
            <div
              className="group [&_summary::-webkit-details-marker]:hidden"
              open={false}
            >
              <summary className="antialiased flex cursor-pointer items-center justify-start gap-1 sm:gap-1.5 rounded-lg bg-gray-50 p-2 sm:p-4 text-gray-900">
                <h2 className="font-bold text-md sm:text-lg antialiased">
                  Location Information
                </h2>

                <svg
                  className="h-3 sm:h-5 w-3 sm:w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>

              <div className="mt-1 mb-1 px-2 sm:px-4 leading-relaxed text-gray-700 antialiased">
                <button
                  type="button"
                  className="antialiased flex  rounded-lg hover:bg-gray-50 px-4 sm:px-8 py-1 text-md sm:text-lg font-bold text-dark transition  active:bg-indigo-500 mt-2 sm:mt-5 "
                >
                  Location :{" "}
                  <span className="font-bold"> {userInformation.city}</span>
                </button>
                <button
                  type="button"
                  className="antialiased flex rounded-lg bg-gray-50 px-4 sm:px-8 py-1 text-md sm:text-lg font-bold text-dark transition  active:bg-indigo-500 mt-2 sm:mt-5 "
                >
                  Ip Address:{" "}
                  <span className="font-bold"> {userIpInformation}</span>
                </button>
                <button
                  type="button"
                  className="antialiased flex  rounded-lg bg-gray-50 px-4 sm:px-8 py-1 text-md sm:text-lg font-bold text-dark transition  active:bg-indigo-500 mt-2 sm:mt-5 "
                >
                  Time Zone :{" "}
                  <span className="font-bold"> {userInformation.timezone}</span>
                </button>
                <button
                  type="button"
                  className="antialiased flex  rounded-lg bg-gray-50 px-4 sm:px-8 py-1 text-md sm:text-lg font-bold text-dark transition  active:bg-indigo-500 mt-2 sm:mt-5 "
                >
                  Operating System
                  <span className="font-bold ml-3 mb-1">
                  {userOsInformation.getUserOperatingSystemType ===
                  "Windows" ? (
                    <FaWindows fontSize={"30"} />
                  ) : userOsInformation.getUserOperatingSystemType ===
                    "MacOS" ? (
                    <FaApple fontSize={"30"} />
                  ) : userOsInformation.getUserOperatingSystemType ===
                    "Linux" ? (
                    <FaLinux fontSize={"30"} />
                  ) : (
                    userOsInformation.getUserOperatingSystemType
                  )}
                </span>
                </button>
              </div>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-start gap-1 sm:gap-1.5 rounded-lg bg-gray-50 p-2 sm:p-4 text-gray-900">
                  <h2 className="antialiased font-bold text-md sm:text-lg">
                    Delete Account
                  </h2>

                  <svg
                    className="h-3 sm:h-5 w-3 sm:w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <DeleteAccountSection cookie={cookie} />
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
