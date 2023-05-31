"use client";
import React, { useEffect, useState } from "react";
import {
  getUser,
  userAccountDeleted,
  getUserById,
} from "@/app/services/userServices";
import { logoutUser } from "@/app/services/authServices";
import { notifySuccess, notifyError } from "@/app/utils/notifyUtils";
import { useRouter } from "next/navigation";
import jwt_decode from "jwt-decode";

export default function DeleteAccountSection({ cookie }) {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState([]);
  console.log("deleteaccountcookie", cookie.value);

  const decoded = jwt_decode(cookie.value);
  const id = decoded.userId

  useEffect(() => {
    async function getUserInfo() {
      try {
        const response = await getUserById(id);
        setUserInfo(response.data);
      } catch (error) {
        console.log(error)
      }
    }
    getUserInfo();
  }, [id]);


  const handleDeleteAccount = async (e) => {
    e.preventDefault();
    console.log("deleteaccount", userInfo._id)
    try {
      await userAccountDeleted(userInfo._id)
        .then((res) => {
          if (res.error) {
            return notifyError(res.data.message);
          }

          setTimeout(() => {
            notifySuccess("Account Deleted Successfully");
            logoutUser();
            router.push("/");
          }, 3000);
        })
        .catch((error) => {
          console.error(error.message);
          notifyError(error.response.data.message);
        });
    } catch (error) {
      console.error(error.message);
      notifyError(error.response.data.message);
    }
  };

  return (
    <div className="mt-4 px-4 leading-relaxed text-gray-700 text-lg">
      <form action="">
        <div className="w-full flex justify-start mt-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <button
              type="submit"
              onClick={handleDeleteAccount}
              className="antialiased inline-block rounded-lg bg-indigo-900 px-5 py-3 text-sm font-bold text-white justify-end"
            >
              Delete Account
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
