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
    <main className="min-h-screen bg-stone-50">
      <div className="h-screen flex justify-evenly items-center flex-col">
        <div className="absolute w-full h-screen">
          <Image
            src="/apartment-1.jpg"
            fill
            alt="marbella"
            className="object-cover hidden md:block"
          />
          <Image
            src="/mobile-photo.jpg"
            fill
            alt="marbella"
            className="object-cover block md:hidden"
          />
        </div>
        <div className="flex flex-col items-center text-white drop-shadow-md">
          <h1 className="text-5xl sm:text-6xl md:text-8xl z-10">WELCOME TO</h1>
          <h1 className="text-5xl sm:text-6xl md:text-8xl z-10">GIL ESTATES</h1>
        </div>

        <Button
          onClick={() =>
            targetRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "center",
            })
          }
          className="z-10 md:p-6 md:text-lg shadow-md uppercase cursor-pointer"
          variant="secondary"
          // onClick={scrollToTargetAdjusted}
        >
          Start your search
        </Button>
      </div>

      <div ref={targetRef} id="targetElement">
        <PropertySearch />
      </div>

      <div className="px-4 md:py-4 flex gap-6 justify-center mt-10 md:w-full items-center">
        <div className="hidden md:block md:border-t-2 md:border-black md:grow md:ml-10"></div>
        <h2 className="uppercase text-xl font-semibold sm:text-2xl md:text-3xl border-b-2 md:border-b-0 border-black text-center grow md:[flex-grow:0] mx-4">
          Latest listings
        </h2>
        <div className="hidden md:block md:border-t-2 md:border-black md:grow md:mr-10"></div>
      </div>

      <div className="p-4 flex flex-wrap gap-6 md:gap-10 justify-center">
        <div className="flex flex-col md:flex-row w-[90%] h-[100vw] md:h-[30vw] gap-6 md:gap-10">
          <div className="relative grow flex justify-center">
            <Image src="/villa-1.jpg" fill alt="marbella" />
            <div className="bg-[rgba(0,0,0,.4)] absolute top-0 bottom-0 m-auto h-[70%] w-[70%] cursor-pointer transition-all hover:h-[100%] hover:w-[100%] flex flex-col items-center justify-center gap-2 divide-y-2">
              <p className="text-white font-semibold uppercase sm:text-lg md:text-xl lg:text-2xl">
                Nueva Andalucia
              </p>
              <p className="text-white font-semibold uppercase text-sm pt-2 sm:text-sm md:text-md lg:text-lg">
                4 beds 3 baths
              </p>
              <p className="text-white font-semibold pt-2 sm:text-lg md:text-xl lg:text-2xl">
                $1,200,000
              </p>
            </div>
          </div>

          <div className="relative grow flex justify-center">
            <Image src="/apartment-1.jpg" fill alt="marbella" />
            <div className="bg-[rgba(0,0,0,.4)] absolute top-0 bottom-0 m-auto h-[70%] w-[70%] flex flex-col items-center justify-center gap-2 divide-y-2 cursor-pointer transition-all hover:h-[100%] hover:w-[100%]">
              <p className="text-white font-semibold uppercase sm:text-lg md:text-xl lg:text-2xl">
                Sierra Blanca
              </p>
              <p className="text-white font-semibold uppercase text-sm pt-2 sm:text-sm md:text-md lg:text-lg">
                3 beds 3 baths
              </p>
              <p className="text-white font-semibold pt-2 sm:text-lg md:text-xl lg:text-2xl">
                $900,000
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-[90%] h-[100vw] md:h-[30vw] gap-6 md:gap-10">
          <div className="relative grow flex justify-center">
            <Image src="/villa-2.jpg" fill alt="marbella" />
            <div className="bg-[rgba(0,0,0,.4)] absolute top-0 bottom-0 m-auto h-[70%] w-[70%] flex flex-col items-center justify-center gap-2 divide-y-2 cursor-pointer transition-all hover:h-[100%] hover:w-[100%]">
              <p className="text-white font-semibold uppercase sm:text-lg md:text-xl lg:text-2xl">
                Marbella
              </p>
              <p className="text-white font-semibold uppercase text-sm pt-2 sm:text-sm md:text-md lg:text-lg">
                5 beds 4 baths
              </p>
              <p className="text-white font-semibold pt-2 sm:text-lg md:text-xl lg:text-2xl">
                $2,500,000
              </p>
            </div>
          </div>

          <div className="relative grow flex justify-center">
            <Image src="/apartment-2.jpg" fill alt="marbella" />
            <div className="bg-[rgba(0,0,0,.4)] absolute top-0 bottom-0 m-auto h-[70%] w-[70%] flex flex-col items-center justify-center gap-2 divide-y-2 cursor-pointer transition-all hover:h-[100%] hover:w-[100%]">
              <p className="text-white font-semibold uppercase sm:text-lg md:text-xl lg:text-2xl">
                The Golden Mile
              </p>
              <p className="text-white font-semibold uppercase text-sm pt-2 sm:text-sm md:text-md lg:text-lg">
                3 beds 2 baths
              </p>
              <p className="text-white font-semibold pt-2 sm:text-lg md:text-xl lg:text-2xl">
                $750,000
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 md:py-4 flex gap-6 justify-center mt-10 md:w-full items-center">
        <div className="hidden md:block md:border-t-2 md:border-black md:grow md:ml-10"></div>
        <h2 className="uppercase text-xl font-semibold sm:text-2xl md:text-3xl border-b-2 md:border-b-0 border-black text-center grow md:[flex-grow:0] mx-4">
          Our properties
        </h2>
        <div className="hidden md:block md:border-t-2 md:border-black md:grow md:mr-10"></div>
      </div>

      <div className="p-4 flex flex-wrap gap-6 md:gap-10 justify-center">
        <div className="flex flex-col md:flex-row w-[90%] h-[100vw] md:h-[30vw] gap-6 md:gap-10">
          <div className="relative grow flex justify-center cursor-pointer hover:opacity-80 transition-all">
            <Image src="/villa-1.jpg" fill alt="marbella" className="" />
            <div className="bg-[rgba(0,0,0,.4)] absolute bottom-0 h-[15%] w-full flex flex-col items-center justify-center gap-2 divide-y-2">
              <p className="text-white font-semibold uppercase text-lg sm:text-xl lg:text-2xl">
                Luxury Villas
              </p>
            </div>
          </div>

          <div className="relative grow flex justify-center cursor-pointer hover:opacity-80 transition-all">
            <Image src="/apartment-1.jpg" fill alt="marbella" />
            <div className="bg-[rgba(0,0,0,.4)] absolute bottom-0 h-[15%] w-full flex flex-col items-center justify-center gap-2 divide-y-2">
              <p className="text-white font-semibold uppercase text-lg sm:text-xl lg:text-2xl">
                Luxury Apartments
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-[90%] h-[100vw] md:h-[30vw] gap-6 md:gap-10">
          <div className="relative grow flex justify-center cursor-pointer hover:opacity-80 transition-all">
            <Image src="/villa-2.jpg" fill alt="marbella" />
            <div className="bg-[rgba(0,0,0,.4)] absolute bottom-0 h-[15%] w-full flex flex-col items-center justify-center gap-2 divide-y-2">
              <p className="text-white font-semibold uppercase text-lg sm:text-xl lg:text-2xl">
                New Developments
              </p>
            </div>
          </div>

          <div className="relative grow flex justify-center cursor-pointer hover:opacity-80 transition-all">
            <Image src="/apartment-2.jpg" fill alt="marbella" />
            <div className="bg-[rgba(0,0,0,.4)] absolute bottom-0 h-[15%] w-full flex flex-col items-center justify-center gap-2 divide-y-2">
              <p className="text-white font-semibold uppercase text-lg sm:text-xl lg:text-2xl">
                Luxury Rentals
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="my-10 px-4 py-8 md:px-10 flex flex-col items-center bg-stone-950 text-stone-200 divide-y-2">
        <h2 className="uppercase font-semibold text-xl sm:text-2xl md:text-3xl pb-4">
          About us
        </h2>
        <div className="pt-4 px-4 flex flex-col gap-4">
          <p className="text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            molestiae numquam dignissimos facilis commodi ipsa consequuntur
            eveniet consequatur? Minus sequi dicta eum officiis corrupti nobis
            doloribus provident eos repudiandae temporibus. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Consectetur molestiae numquam
            dignissimos facilis commodi ipsa consequuntur eveniet consequatur?
          </p>
          <p>
            Minus sequi dicta eum officiis corrupti nobis doloribus provident
            eos repudiandae temporibus. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Iusto delectus, accusantium, quaerat et nihil
            explicabo a eos at voluptatum similique culpa. Labore rem eveniet
            odit ea quis culpa, suscipit expedita. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Recusandae repellendus, quibusdam
            impedit dignissimos placeat, iste quidem veritatis asperiores unde
            molestiae aspernatur obcaecati aut ipsam facere voluptas at magni
            explicabo ut?
          </p>
        </div>
      </div>

      <footer className="bg-black text-slate-200 h-[75px] p-4">
        contact us
      </footer>
    </main>
  );
}
