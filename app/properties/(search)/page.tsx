"use client";

import Property from "@/components/Property";
import { useEffect, useState } from "react";
import axios from "axios";

function Page({
  searchParams,
}: {
  searchParams?: {
    area?: string;
    propertyType?: string;
    bedrooms?: string;
    minPrice?: string;
    maxPrice?: string;
  };
}) {
  const [properties, setProperties] = useState<any>({});

  useEffect(
    function () {
      async function getProperties() {
        try {
          const res = await axios.get(
            `https://quiet-earth-83836-d3ae8f1c6d7f.herokuapp.com/https://webapi.resales-online.com/V6/SearchProperties?p_agency_filterid=1&p1=1018186&p2=057d095bc4e7c27c3de591fbd536f405f091bbeb&P_sandbox=true&P_Location=${searchParams?.area}&P_PropertyTypes=${searchParams?.propertyType}&P_Beds=${searchParams?.bedrooms}&P_Min=${searchParams?.minPrice}&P_Max=${searchParams?.maxPrice}`
          );

          const data = res.data || [];
          setProperties(data);
        } catch {
          console.log("oops");
        }
      }
      getProperties();
    },
    [
      searchParams?.area,
      searchParams?.bedrooms,
      searchParams?.maxPrice,
      searchParams?.minPrice,
      searchParams?.propertyType,
    ]
  );

  return (
    <main className="my-10">
      <div className="flex flex-wrap gap-8 md:gap-10 justify-center">
        {properties?.Property?.map((item: Record<string, any>) => (
          <Property
            key={item.Reference}
            location={item.Location}
            price={item.Price}
            bedrooms={item.Bedrooms}
            bathrooms={item.Bathrooms}
            mainImage={item?.Pictures?.Picture[0]?.PictureURL}
            id={item.Reference}
          />
        ))}
      </div>
    </main>
  );
}

export default Page;
