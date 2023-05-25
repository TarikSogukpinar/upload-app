import React from "react";
import { logoutUser } from "@/app/services/authServices";
import { useRouter } from "next/navigation";
import { Toaster } from "react-hot-toast";
import { notifySuccess, notifyError } from "@/app/utils/notifyUtils";

export default function NavbarLogoutButton() {
  const router = useRouter();
 
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await logoutUser()
        .then((res) => {
          if (res.error) {
            return notifyError(res.data.message);
          }
          notifySuccess("Logout Successfull");
          setTimeout(() => {
            router.push("/");
            router.refresh();
          }, 1000);
        })
        .catch((error) => {
          console.log(error);
          notifyError(error.response.data.message);
        });
    } catch (error) {
      console.log(error);
      notifyError(error.response.data.message);
    }
  };

  return (
    <div className="p-2">
      <Toaster />
      <button
        onClick={handleLogout}
        type="submit"
        className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-indigo-50"
        role="menuitem"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
        Logout
      </button>
    </div>
  );
}
