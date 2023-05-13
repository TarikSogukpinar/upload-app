import React from "react";
import Link from "next/link";
import { cookies } from "next/headers";
// import Cookies from "cookies";

async function getData() {
  const cookieStore = cookies();
  // console.log(cookieStore);
  return cookieStore.getAll().map((cookie) => {
    console.log("adı",cookie.name, "değer",cookie.value, cookie.options);
  });
}

export default async function Navbar() {
  const data = await getData();
  return (
    <header aria-label="Page Header" className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              <Link href={"/"}>Upload App</Link>
            </h1>

            <p className="mt-1.5 text-sm text-gray-500">
              <Link href={"/"}>Let's upload something! 🎉 {data.name}</Link>
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-8 sm:mt-0 sm:flex-row sm:items-center">
            <Link href={"/login"}>
              <button
                className="block rounded-lg bg-indigo-600  shadow hover:bg-red-700  active:bg-red-500 sm:w-auto px-5 py-3 text-sm font-medium text-white transition  focus:outline-none focus:ring"
                type="button"
                to="/login"
              >
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
