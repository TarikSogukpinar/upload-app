import React from "react";
import Link from "next/link";
export default function HomeUploadButtonSection() {
  return (
    <div>
      <p className="mt-4 sm:text-xl/relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
        tenetur fuga ducimus numquam ea!
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          className="block w-full rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          href={"/register"}
        >
          Upload File
        </Link>

        <Link
          className="block w-full rounded px-12 py-3 text-sm font-medium text-indigo-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
          href={"/docs"}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
