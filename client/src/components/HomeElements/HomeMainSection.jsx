"use client";
import React, { useState } from "react";
import { uploadFile } from "../../app/services/uploadServices";

export default function HomeMainSection() {
  const [file, setFile] = useState(null);

  const handleFileInput = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file, file.name);
    try {
      const res = await uploadFile(formData);

      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleOnChange = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  return (
    <section>
      <form action="form" onSubmit={handleFileInput}>
        <button
          type="submit"
          className="border-xl group mt-4 xs:mt-3 s:mt-2 m:mt-1 sm:mt-0 flex w-full items-center justify-center gap-5 rounded-md bg-rose-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:w-auto mx-auto"
        >
          <span
            type="file"
            className="text-xs xs:text-sm s:text-base m:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-medium"
          >
            {" "}
            Upload File{" "}
          </span>
        </button>
        <input className="relative" type="file" onChange={handleOnChange} />
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl mt-5">
          File upload limit 5 MB
        </h2>

        <p className="hidden text-gray-900 sm:mt-4 sm:block">
          Accepted file types JPG,PNG,PDF
        </p>
      </form>
    </section>
  );
}
