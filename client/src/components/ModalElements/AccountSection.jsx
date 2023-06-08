"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { getUserById } from "../../app/services/userServices";
import jwt_decode from "jwt-decode";
import { notifyError } from "@/app/utils/notifyUtils";

const UpdatePasswordSection = dynamic(() => import("./UpdatePasswordSection"));

export default function AccountSection({ cookie }) {
  const [userInfo, setUserInfo] = useState([]);

  const token = cookie.value;
  const decoded = jwt_decode(token);
  const id = decoded.userId;

  const getUser = async () => {
    try {
      const res = await getUserById(id)
        .then((res) => {
          if (res.error) {
            return notifyError(error.res.data.message);
          }
          setUserInfo(res.data);
        })
        .catch((error) => {
          console.log(error);
          notifyError(error.res.data.message);
        });
    } catch (error) {
      console.log(error);
      notifyError(error.res.data.message);
    }
  };

  useEffect(() => {
    getUser();
  });

  return (
    <div>
      <div>
        <h3 className="antialiased text-2xl sm:text-3xl md:text-4xl leading-6 font-medium text-gray-900 mt-8 mb-2">
          Account Settings
        </h3>
        <h2 className="antialiased text-sm mt-2">Manage your account</h2>
        <div className="space-y-4">
          <div
            className="group [&_summary::-webkit-details-marker]:hidden"
            open
          >
            <summary className="antialiased flex cursor-pointer items-center justify-start gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
              <h2 className="font-bold text-lg sm:text-xl md:text-2xl antialiased ">
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
                className="antialiased flex  rounded-lg hover:bg-gray-50 px-6 sm:px-8 py-1 text-md sm:text-lg font-bold text-dark transition  active:bg-indigo-500 mt-5 "
              >
                Email addresses : {userInfo.email}
              </button>
              <button
                type="button"
                className="antialiased flex  rounded-lg bg-gray-50 px-6 sm:px-8 py-1 text-md sm:text-lg font-bold text-dark transition  active:bg-indigo-500 mt-5 "
              >
                User Name: {userInfo.userName}
              </button>
              <button
                type="button"
                className="antialiased flex  rounded-lg bg-gray-50 px-6 sm:px-8 py-1 text-md sm:text-lg font-bold text-dark transition  active:bg-indigo-500 mt-5 "
              >
                System Role : {userInfo.roles === "user" ? "Users " : "Admin"}
              </button>
              <button
                type="button"
                className="antialiased flex  rounded-lg bg-gray-50 px-6 sm:px-8 py-1 text-md sm:text-lg font-bold text-dark transition  active:bg-indigo-500 mt-5 "
              >
                Created Date : {userInfo.createdAt}
              </button>
            </div>
          </div>

          <div>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-start gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                <h2 className="antialiased font-bold text-lg sm:text-xl md:text-2xl">
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

              <UpdatePasswordSection cookie={cookie} />
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
