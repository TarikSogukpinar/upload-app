"use client";
import React, { useEffect, useState } from "react";
import { notifySuccess, notifyError } from "@/app/utils/notifyUtils";
import { useRouter } from "next/navigation";
import { updatePassword } from "@/app/services/authServices";
import { getUser } from "@/app/services/userServices";

export default function UpdatePasswordSection() {
  const router = useRouter();
  const [password, setPassword] = useState({
    password: "",
    confirmPassword: "",
  });
  const [userInfo, setUserInfo] = useState([]);

  const getUserInfo = async () => {
    const res = await getUser(userInfo._id);
    setUserInfo(res.data[0]);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const handlePassword = (e) => {
    setPassword((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
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
    <p className="mt-4 px-4 leading-relaxed text-gray-700 text-lg">
      {/* Update User Password */}
      <form action="" onSubmit={handleSubmit}>
        <div className="w-full flex justify-start mt-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="antialiased sr-only" for="email">
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
              <label className="antialiased sr-only" for="phone">
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
              className="antialiased inline-block rounded-lg bg-indigo-900 px-5 py-3 text-sm font-medium text-white justify-end"
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </p>
  );
}
