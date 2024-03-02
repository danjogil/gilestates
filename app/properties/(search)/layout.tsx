import PropertySearch from "@/components/PropertySearch";
import { Suspense } from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="h-20 md:h-36 bg-stone-950 flex justify-center items-center">
        <h2 className="text-white uppercase font-semibold text-xl sm:text-2xl md:text-4xl">
          Properties
        </h2>
      </div>
      <Suspense fallback={<p>Looooooading....</p>}>
        <PropertySearch />
      </Suspense>
      <div>{children}</div>
    </div>
  );
}

export default Layout;
