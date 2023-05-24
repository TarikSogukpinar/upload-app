"use client";
import React, { useEffect, useState } from "react";
import { getUser } from "../../app/services/userServices";
import UpdatePasswordSection from "./UpdatePasswordSection";

export default function AccountSection() {
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

  return (
    <div>
      {userInfo.map((userInfos, index) => (
        <div key={index}>
          <h3 className="antialiased text-3xl leading-6 font-medium text-gray-900 mt-8 mb-2">
            Account Settings
           
          </h3> 
          <h2 className="antialiased text-sm mt-2">Manage your account</h2>
          <div className="space-y-4">
            <div
              className="group [&_summary::-webkit-details-marker]:hidden"
              open
            >
              <summary className="antialiased flex cursor-pointer items-center justify-start gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                <h2 className="font-medium text-lg antialiased">
                  Profile Information
                </h2>

                <svg
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
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

              <div className="mt-1 mb-1 px-4 leading-relaxed text-gray-700 antialiased">
                <button
                  type="button"
                  className="antialiased flex  rounded-lg hover:bg-gray-50 px-8 py-1 text-lg font-medium text-dark transition  active:bg-indigo-500 mt-5 "
                >
                  Email addresses : {userInfos.email}
                </button>
                <button
                  type="button"
                  className="antialiased flex  rounded-lg bg-gray-50 px-8 py-1 text-lg font-medium text-dark transition  active:bg-indigo-500 mt-5 "
                >
                  User Name: {userInfos.userName}
                </button>
                <button
                  type="button"
                  className="antialiased flex  rounded-lg bg-gray-50 px-8 py-1 text-lg font-medium text-dark transition  active:bg-indigo-500 mt-5 "
                >
                  System Role :{" "}
                  {userInfos.roles === "user" ? "Users " : "Admin"}
                </button>
                <button
                  type="button"
                  className="antialiased flex  rounded-lg bg-gray-50 px-8 py-1 text-lg font-medium text-dark transition  active:bg-indigo-500 mt-5 "
                >
                  Created Date : {userInfos.createdAt}
                </button>
              </div>
            </div>

            <div>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-start gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                  <h2 className="antialiased font-medium text-lg">
                    Update Password
                  </h2>

                  <svg
                    className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
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

                <UpdatePasswordSection />
              </details>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
