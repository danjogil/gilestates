"use client";

import PropertySearch from "@/components/PropertySearch";
import { Button } from "@/components/ui/button";
import Image from "next/image";
// import { useRef } from "react";

export default function Home() {
  // const targetRef = useRef<HTMLDivElement>(null);

  function scrollToTargetAdjusted() {
    let element = document.getElementById("targetElement");
    let headerOffset = 100;
    let elementPosition = element!.getBoundingClientRect().top;
    let offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }

  return (
    <main className="min-h-screen">
      <div className="h-screen flex justify-evenly items-center flex-col">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl">WELCOME TO</h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl">GIL ESTATES</h1>
        </div>

        <Button
          // onClick={() =>
          //   targetRef.current?.scrollIntoView({ behavior: "smooth" })
          // }
          onClick={scrollToTargetAdjusted}
        >
          Start your search
        </Button>
      </div>

      <div id="targetElement">
        <PropertySearch />
      </div>

      <div className="p-4 flex flex-wrap gap-6">
        <div className="relative">
          <Image
            src="/marbella.jpg"
            width={700}
            height={300}
            className="grow"
            alt="marbella"
          />
          <div className="bg-[rgba(0,0,0,.5)] absolute bottom-0 w-full ">
            <p className="text-white font-semibold p-2 uppercase">
              Luxury villas in Marbella
            </p>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/marbella.jpg"
            width={700}
            height={300}
            className="grow"
            alt="marbella"
          />
          <div className="bg-[rgba(0,0,0,.5)] absolute bottom-0 w-full ">
            <p className="text-white font-semibold p-2 uppercase">
              Luxury apartments in Marbella
            </p>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/marbella.jpg"
            width={700}
            height={300}
            className="grow"
            alt="marbella"
          />
          <div className="bg-[rgba(0,0,0,.5)] absolute bottom-0 w-full ">
            <p className="text-white font-semibold p-2 uppercase">
              New Developments
            </p>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/marbella.jpg"
            width={700}
            height={300}
            className="grow"
            alt="marbella"
          />
          <div className="bg-[rgba(0,0,0,.5)] absolute bottom-0 w-full ">
            <p className="text-white font-semibold p-2 uppercase">
              Luxury rentals
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
