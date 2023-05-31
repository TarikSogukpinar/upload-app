"use client";
import React, { use, useEffect, useState } from "react";
import { notifySuccess, notifyError } from "@/app/utils/notifyUtils";
import { useRouter } from "next/navigation";
import { updatePassword } from "@/app/services/authServices";
import { getUserById } from "@/app/services/userServices";
import jwt_decode from "jwt-decode";

export default function UpdatePasswordSection({ cookie }) {
  const router = useRouter();
  const [password, setPassword] = useState({
    password: "",
    confirmPassword: "",
  });
  const [userInfo, setUserInfo] = useState([]);
  const decoded = jwt_decode(cookie.value);
  const id = decoded.userId;

  useEffect(() => {
    async function getUser() {
      try {
        const response = await getUserById(id);
        setUserInfo(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getUser();
  }, [id]);

  const handlePassword = (e) => {
    setPassword((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUpdatePasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      await updatePassword(
        userInfo._id,
        password.password,
        password.confirmPassword
      )
        .then((res) => {
          if (res.error) {
            return notifyError(res.data.message);
          }

          setTimeout(() => {
            notifySuccess("Password Updated Successfully");
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
      {/* Update User Password */}
      <form action="" onSubmit={handleUpdatePasswordSubmit}>
        <div className="w-full flex justify-start mt-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="antialiased sr-only" htmlFor="email">
                Password
              </label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-lg"
                placeholder="Password"
                type="password"
                id="password"
                name="password"
                value={password.password}
                onChange={handlePassword}
                required
              />
            </div>

            <div>
              <label className="antialiased sr-only" htmlFor="phone">
                Confirm Password
              </label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-lg"
                placeholder="Confirm Password"
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={password.confirmPassword}
                onChange={handlePassword}
                required
              />
            </div>
            <button
              type="submit"
              className="antialiased inline-block rounded-lg bg-indigo-900 px-5 py-3  text-sm font-medium text-white justify-end"
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
