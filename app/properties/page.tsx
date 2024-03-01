import Property from "@/components/Property";

async function Page({
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
  // const properties = await fetch(
  //   `https://webapi.resales-online.com/V6/SearchProperties?p_agency_filterid=1&p1=1018186&p2=a6f757f38647f9fed6a748b29c64012a242cae1b&P_sandbox=true&P_Location=${searchParams?.area}&P_PropertyTypes=${searchParams?.propertyType}&P_Beds=${searchParams?.bedrooms}&P_Min=${searchParams?.minPrice}&P_Max=${searchParams?.maxPrice}`
  // )
  //   .then((res) => res.json())
  //   .then((data) => data as any);

  const properties = await fetch(
    `https://webapi.resales-online.com/V6/SearchProperties?p_agency_filterid=1&p1=1018186&p2= 057d095bc4e7c27c3de591fbd536f405f091bbeb&P_sandbox=true&P_Location=${searchParams?.area}&P_PropertyTypes=${searchParams?.propertyType}&P_Beds=${searchParams?.bedrooms}&P_Min=${searchParams?.minPrice}&P_Max=${searchParams?.maxPrice}`
  )
    .then((res) => res.json())
    .then((data) => data as any);

  return (
    <main className="mt-10">
      <div className="flex flex-wrap gap-8 md:gap-20 justify-center">
        {properties?.Property?.map((item: Record<string, any>) => (
          <Property
            key={item.Reference}
            location={item.Location}
            price={item.Price}
            bedrooms={item.Bedrooms}
            bathrooms={item.Bathrooms}
            mainImage={item?.Pictures?.Picture[0]?.PictureURL}
          />
        ))}
      </div>
    </main>
  );
}

export default Page;
