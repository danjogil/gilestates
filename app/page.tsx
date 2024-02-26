"use client";

import PropertySearch from "@/components/PropertySearch";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);

  return (
    <main className="min-h-screen">
      <div className="h-screen flex justify-evenly items-center flex-col">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl">WELCOME TO</h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl">GIL ESTATES</h1>
        </div>

        <Button
          onClick={() =>
            targetRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Start your search
        </Button>
      </div>

      <div ref={targetRef}>
        <PropertySearch />
      </div>
    </main>
  );
}
