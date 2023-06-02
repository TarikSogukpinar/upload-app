import React from "react";
import HomeMainSection from "@/components/HomeElements/HomeMainSection";

export default function Home() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center md:h-screen">
        <div className="mx-auto max-w-xl text-center">
          <HomeMainSection />
        </div>
      </div>
    </section>
  );
}
