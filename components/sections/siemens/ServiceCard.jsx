"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const ServiceCard = ({ iconImgPath, heading, description, id }) => {
  const router = useRouter();
  return (
    <div className="flex max-w-[300px] flex-col gap-y-5 border border-gray-400/60 p-10 bg-white shadow-lg rounded-2xl">
      <button
        className="group relative h-fit min-w-[20%]"
        onClick={() => router.push("/service/" + id)}
      >
        <div className="absolute -bottom-3 -left-5 -z-10 h-12 w-12 rounded-full bg-yellow-400 duration-1000  group-hover:scale-125"></div>
        <Image
          src={iconImgPath}
          width={70}
          height={70}
          alt="repair person icon"
          className="transition-transform duration-1000 group-hover:scale-90"
        />
      </button>
      <button
        onClick={() => router.push("/service/" + id)}
        className="mt-5 w-fit text-2xl font-bold transition-all duration-300 text-gray-900 hover:text-blue-600"
      >
        {heading}
      </button>
      <span className="leading-6 text-gray-700">{description}</span>
      <button className="w-fit font-bold uppercase text-blue-600 hover:text-blue-800">
        call us +
      </button>
    </div>
  );
};

export default ServiceCard;
