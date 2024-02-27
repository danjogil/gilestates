"use client";

import PropertySearch from "@/components/PropertySearch";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);

  // function scrollToTargetAdjusted() {
  //   let element = document.getElementById("targetElement");
  //   let headerOffset = 100;
  //   let elementPosition = element!.getBoundingClientRect().top;
  //   let offsetPosition = elementPosition + window.scrollY - headerOffset;

  //   window.scrollTo({
  //     top: offsetPosition,
  //     behavior: "smooth",
  //   });
  // }

  return (
    <main className="min-h-screen">
      <div className="h-screen flex justify-evenly items-center flex-col">
        <Image
          src="/marbella.jpg"
          fill
          className="z-0 object-cover object-left"
          alt="marbella"
        />
        <div className="flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl z-10">WELCOME TO</h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl z-10">GIL ESTATES</h1>
        </div>

        <Button
          onClick={() =>
            targetRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "center",
            })
          }
          className="z-10"
          // onClick={scrollToTargetAdjusted}
        >
          Start your search
        </Button>
      </div>

      <div ref={targetRef} id="targetElement">
        <PropertySearch />
      </div>

      <div className="px-4 md:py-4 flex flex-wrap gap-6 justify-center mt-10">
        <h2 className="uppercase text-lg font-semibold sm:text-2xl md:text-3xl">
          Latest listings
        </h2>
      </div>

      <div className="p-4 flex flex-wrap gap-6 justify-center">
        <div className="relative">
          <Image
            src="/marbella.jpg"
            width={700}
            height={300}
            className="grow"
            alt="marbella"
          />
          <div className="bg-[rgba(0,0,0,.5)] absolute bottom-0 w-full ">
            <p className="text-white font-semibold p-2 uppercase sm:text-xl md:text-2xl">
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
            <p className="text-white font-semibold p-2 uppercase sm:text-xl md:text-2xl">
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
            <p className="text-white font-semibold p-2 uppercase sm:text-xl md:text-2xl">
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
            <p className="text-white font-semibold p-2 uppercase sm:text-xl md:text-2xl">
              Luxury rentals
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 md:py-4 flex flex-wrap gap-6 justify-center mt-10">
        <h2 className="uppercase text-lg font-semibold sm:text-2xl md:text-3xl">
          Our villas and apartments
        </h2>
      </div>

      <div className="p-4 flex flex-wrap gap-6 justify-center">
        <div className="relative">
          <Image
            src="/marbella.jpg"
            width={700}
            height={300}
            className="grow"
            alt="marbella"
          />
          <div className="bg-[rgba(0,0,0,.5)] absolute bottom-0 w-full ">
            <p className="text-white font-semibold p-2 uppercase sm:text-xl md:text-2xl">
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
            <p className="text-white font-semibold p-2 uppercase sm:text-xl md:text-2xl">
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
            <p className="text-white font-semibold p-2 uppercase sm:text-xl md:text-2xl">
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
            <p className="text-white font-semibold p-2 uppercase sm:text-xl md:text-2xl">
              Luxury rentals
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
