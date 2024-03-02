import Image from "next/image";
import { useRouter } from "next/navigation";

interface PropertyProps {
  location: string;
  price: string;
  bedrooms: string;
  bathrooms: string;
  //   propertyType: string;
  // description: string;
  //   pictures: [];
  mainImage: string;
  id: string;
}

function Property({
  location,
  price,
  bedrooms,
  bathrooms,
  //   propertyType,
  // description,
  //   pictures,
  mainImage,
  id,
}: PropertyProps) {
  const router = useRouter();

  function handleClick() {
    router.push(`/properties/${id}`);
  }

  return (
    <div className="relative flex justify-center h-[50vw] md:h-[25vw] w-[75%] md:w-[40%]">
      <Image src={mainImage} fill alt="marbella" />
      <div
        className="bg-[rgba(0,0,0,.4)] absolute top-0 bottom-0 m-auto h-[70%] w-[70%] cursor-pointer transition-all hover:h-[100%] hover:w-[100%] flex flex-col items-center justify-center gap-2 divide-y-2"
        onClick={handleClick}
      >
        <p className="text-white font-semibold uppercase sm:text-lg md:text-xl lg:text-2xl">
          {location}
        </p>
        <p className="text-white font-semibold uppercase text-sm pt-2 sm:text-sm md:text-md lg:text-lg">
          {bedrooms} beds {bathrooms} baths
        </p>
        <p className="text-white font-semibold pt-2 sm:text-lg md:text-xl lg:text-2xl">
          ${price}
        </p>
      </div>
    </div>
  );
}

export default Property;
