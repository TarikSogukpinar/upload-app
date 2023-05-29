import React, { useEffect, useState } from "react";
import { getUser, userAccountDeleted } from "@/app/services/userServices";
import { logoutUser } from "@/app/services/authServices";

export default function DeleteAccountSection() {
  const [userInfo, setUserInfo] = useState([]);
  
  const getUserInfo = async () => {
    const res = await getUser(userInfo._id);
    setUserInfo(res.data[0]);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const handleDeleteAccount = async (e) => {
    e.preventDefault();
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
