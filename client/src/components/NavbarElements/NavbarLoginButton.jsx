import React from "react";
import Link from "next/link";

export default function NavbarLoginButton() {
  return (
    <Link href={"/login"}>
      <button
        className="border-box block rounded-lg bg-indigo-600 shadow hover:text-gray-950  active:text-gray-950 w-full sm:w-auto px-4 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm font-medium text-white transition focus:outline-none focus:ring"
        type="button"
        to="/login"
      >
        Login
      </button>
    </Link>
  );
}
