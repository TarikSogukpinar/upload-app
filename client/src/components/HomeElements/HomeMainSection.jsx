"use client";
import React, { useState } from "react";
import { uploadFile } from "../../app/services/uploadServices";
import { notifySuccess, notifyError } from "@/app/utils/notifyUtils";
import { Toaster } from "react-hot-toast";

export default function HomeMainSection() {
  const [file, setFile] = useState(null);

  const handleFileInput = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      if (!file) {
        notifyError("Please select a file");
        return;
      }

      if (!file.name) {
        notifyError("Please select a file");
        return;
      }

      formData.append("file", file, file.name);

      const res = await uploadFile(formData)
        .then((res) => {
          if (res.error) {
            return notifyError(error.res.data.message);
          }
          notifySuccess(res.data.message);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
          notifyError(error.res.data.message);
        });
    } catch (error) {
      console.log(error.message);
      notifyError(error.message);
    }
  };

  const handleOnChange = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  return (
    <section>
      <Toaster />
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <header className="text-center">
              <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
                Your Files
              </h1>
            </header>

            <div className="mt-8">
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <div>
                    <h3 className="text-sm text-gray-900">Example.pdf</h3>

                    <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                      <div>
                        <dt className="inline">Type: PDF</dt>
                        <dd className="inline">Size: 5mb</dd>
                      </div>
                    </dl>
                  </div>

                  <div className="flex flex-1 items-center justify-end gap-2">
                    <form>
                      <label htmlFor="Line1Qty" className="sr-only">
                        {" "}
                        Quantity{" "}
                      </label>

                      <input
                        type="number"
                        min="1"
                        id="Line1Qty"
                        className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                      />
                    </form>

                    <button className="text-gray-600 transition hover:text-red-600">
                      <span className="sr-only">Remove item</span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                </li>

                <li className="flex items-center gap-4">
                  <div>
                    <h3 className="text-sm text-gray-900">Example.pdf</h3>

                    <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                      <div>
                        <dt className="inline">Type: PDF</dt>
                        <dd className="inline">Size: 5mb</dd>
                      </div>
                    </dl>
                  </div>

                  <div className="flex flex-1 items-center justify-end gap-2">
                    <form>
                      <label htmlFor="Line2Qty" className="sr-only">
                        {" "}
                        Quantity{" "}
                      </label>

                      <input
                        type="number"
                        min="1"
                        id="Line2Qty"
                        className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                      />
                    </form>

                    <button className="text-gray-600 transition hover:text-red-600">
                      <span className="sr-only">Remove item</span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                </li>

                <li className="flex items-center gap-4">
                  <div>
                    <h3 className="text-sm text-gray-900">Example.pdf</h3>

                    <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                      <div>
                        <dt className="inline">Type: PDF</dt>
                        <dd className="inline">Size: 5mb</dd>
                      </div>
                    </dl>
                  </div>

                  <div className="flex flex-1 items-center justify-end gap-2">
                    <form>
                      <label htmlFor="Line3Qty" className="sr-only">
                        {" "}
                        Quantity{" "}
                      </label>

                      <input
                        type="number"
                        min="1"
                        id="Line3Qty"
                        className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                      />
                    </form>

                    <button className="text-gray-600 transition hover:text-red-600">
                      <span className="sr-only">Remove item</span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                </li>
              </ul>

              <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                <div className="w-screen max-w-lg space-y-4">
                  <dl className="space-y-0.5 text-sm text-gray-700">
                    <div className="flex justify-between">
                      <dt>Total Files</dt>
                      <dd>1</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <form action="form" onSubmit={handleFileInput}>
        <input
          type="file"
          name="small-file-input"
          onChange={handleOnChange}
          id="small-file-input"
          className="block mb-1 w-full border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 
          file:bg-transparent file:border-0
        file:bg-gray-100 file:mr-4
          file:py-2 file:px-4
        dark:file:bg-gray-700 dark:file:text-gray-400"
        />
        <button
          type="submit"
          className="block w-full p-2 border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 hover:bg-indigo-800 dark:text-white"
        >
          <span
            type="file"
            className="text-xs xs:text-sm s:text-base m:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-medium"
          >
            {" "}
            Upload File{" "}
          </span>
        </button>

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
