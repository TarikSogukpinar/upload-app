
import React from "react";
import Link from "next/link";

export default function NavbarLoginButton() {
  return (
    <Link href={"/login"}>
      <button
        className="border-box block rounded-lg bg-indigo-600  shadow hover:bg-red-700  active:bg-red-500 sm:w-auto px-5 py-3 text-sm font-medium text-white transition  focus:outline-none focus:ring"
        type="button"
        to="/login"
      >
        Login
      </button>
    </Link>
  );
}
