import React from "react";
import HomeButtonSection from "@/components/HomeElements/HomeButtonSection";
import HomeUploadButtonSection from "@/components/HomeElements/HomeUploadButtonSection";
import { cookies } from "next/headers";

export default function Home() {
  const cookieStore = cookies().get("token");

  return (
    <div>
      <section className=" bg-slate-50 md:min-h-screen m:min-h-screen s:min-h-screen xs:min-h-screen">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              The simplest way to
              <strong className="font-extrabold text-indigo-700 sm:block">
                upload files
              </strong>
            </h1>
            {!cookieStore ? <HomeButtonSection /> : <HomeUploadButtonSection />}
          </div>
        </div>
      </section>
    </div>
  );
}
