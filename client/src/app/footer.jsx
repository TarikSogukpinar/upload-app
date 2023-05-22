import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
export default function Footer() {
  return (
    <footer
      aria-label="Site Footer"
      className="bg-gray-50 absolute bottom-0 left-0 right-0"
    >
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 ">
        <div className="sm:flex sm:items-center sm:justify-end">
          {/* <div className="flex justify-center text-teal-600 sm:justify-start">
            <FaGithub className="antialiased text-2xl text-gray-900 hover:text-indigo-900" />
            <BsLinkedin className="antialiased text-2xl text-gray-900 hover:text-indigo-900" />
          </div> */}

          <p className="flex antialiased mt-4 m text-center text-base font-semibold text-gray-500 hover:text-indigo-900 lg:mt-0 lg:text-right">
            Copyright &copy; 2022. All rights reserved.
            <FaGithub className="mr-1 ml-1 antialiased text-2xl text-gray-500 hover:text-indigo-900" />
            <BsLinkedin className="mr-1 ml-1 antialiased text-2xl text-gray-500 hover:text-indigo-900" />
          </p>
        </div>
      </div>
    </footer>
  );
}
