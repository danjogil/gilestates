"use client";

import PropertySearch from "@/components/PropertySearch";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="h-20 md:h-36 bg-stone-950 flex justify-center items-center">
        <h2 className="text-white uppercase font-semibold text-xl sm:text-2xl md:text-4xl">
          Properties
        </h2>
      </div>
      <PropertySearch />
      <div>{children}</div>
    </div>
  );
}

export default Layout;
