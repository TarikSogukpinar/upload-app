import React from "react";
import Link from "next/link";
import NavbarLoginButton from "@/components/NavbarElements/NavbarLoginButton";
import NavbarProfileButton from "@/components/NavbarElements/NavbarProfileButton";
import { cookies } from "next/headers";

export default async function Navbar() {
  const cookieStore = cookies().get("token");
  // console.log(cookieStore.value);

  return (
    <header aria-label="Page Header" className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              <Link className="antialiased hover:text-indigo-900" href={"/"}>
                {" "}
                Upload App
              </Link>
            </h1>

            <p className="mt-1.5 text-sm text-gray-900 antialiased hover:text-indigo-800">
              <Link href={"/"}> Let's upload something! 🎉</Link>
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-8 sm:mt-0 sm:flex-row sm:items-center">
            {!cookieStore ? <NavbarLoginButton /> : <NavbarProfileButton />}
          </div>
        </div>
      </div>
    </header>
  );
}
