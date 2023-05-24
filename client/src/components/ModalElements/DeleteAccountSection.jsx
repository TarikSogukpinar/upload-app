import React from "react";

export default function DeleteAccountSection() {
  return (
    <div className="mt-4 px-4 leading-relaxed text-gray-700 text-lg">
      <form action="">
        <div className="w-full flex justify-start mt-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <button
              type="submit"
              className="antialiased inline-block rounded-lg bg-indigo-900 px-5 py-3 text-sm font-medium text-white justify-end"
            >
              Delete Account
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
