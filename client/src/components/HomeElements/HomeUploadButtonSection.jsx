import React from "react";
import Link from "next/link";

export default function HomeUploadButtonSection() {
  return (
    <div>
      <p className="mt-4 sm:text-xl/relaxed">
        The fastest way to upload your files
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4 ">
        <Link
          className="block w-full rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-black focus:outline-none focus:ring active:bg-black sm:w-auto"
          href={"/home"}
        >
          Upload File
        </Link>

        <Link
          className="block w-full rounded px-12 py-3 text-sm font-medium text-indigo-600 shadow hover:text-black focus:outline-none focus:ring active:text-black sm:w-auto"
          href={"/docs"}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
