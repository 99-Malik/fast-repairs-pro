"use client";

import SamsungBannerCallButton from "@/components/sections/samsung/SamsungBannerCallButton";
import SamsungWhatsappButton from "@/components/sections/samsung/SamsungWhatsappButton";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ServicePage = ({ params }) => {
  const router = useRouter();
  const services = [
    "washing-machine",
    "refrigerator",
    "diswasher",
    "stove-cooker",
    "gas-oven",
    "dryer",
    "televison",
  ];

  if (!services.includes(params.service)) router.push("/");

  const service =
    params.service === "washing-machine"
      ? "Washing Machine"
      : params.service === "refrigerator"
        ? "Refrigerator"
        : params.service === "diswasher"
          ? "Dishwasher"
          : params.service === "stove-cooker"
            ? "Stove / Cooker"
            : params.service === "gas-oven"
              ? "Gas Oven"
              : params.service === "dryer"
                ? "Dryer"
                : params.service === "televison"
                  ? "Television"
                  : "Unknown";
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-center gap-y-5 bg-[#eff1f2] py-28 text-[#071125]">
        <span className="text-4xl font-bold">{service}</span>
        <span className="text-center">Siemens / Services / {service}</span>
      </div>
      <div className="flex justify-center">
        <div className="grid w-full max-w-7xl grid-cols-2 gap-x-14 px-5 py-10">
          <div className="flex w-full justify-center">
            <Image
              src="/rapid-logo.png"
              width={500}
              height={500}
              alt="service image"
            />
          </div>
          <div className="flex flex-col gap-y-5">
            <div className="flex items-center gap-x-1">
              <Image src="/home/line.svg" width={25} height={25} alt="line" />
              <span className="text-sm font-semibold uppercase text-[#285EB2]">
                Service details
              </span>
            </div>
            <span className="text-4xl font-bold text-blue-950">
              {service} Repair
            </span>
            <span className="text-">
              Our {service} service at Service Center UAE guarantees
              meticulous attention to detail, ensuring your appliance operates
              at peak performance. With skilled technicians and state-of-the-art
              equipment, we diagnose and resolve washing machine issues swiftly,
              restoring convenience to your daily routine. From routine
              maintenance to complex repairs, trust Service Center UAE to
              provide dependable washing machine services that extend the
              lifespan of your appliance.
            </span>
            <span className="text-">
              We specialize in handling a diverse range of {service} brands and
              models, offering comprehensive solutions tailored to your specific
              needs.
            </span>
            <div className="flex flex-col gap-2 sm:flex-row">
              <SamsungBannerCallButton />
              <SamsungWhatsappButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
