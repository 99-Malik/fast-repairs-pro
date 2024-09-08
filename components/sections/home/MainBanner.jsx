import { phoneNumber } from "@/libs/phoneNumber";
import Link from "next/link";
import React from "react";

const SamsungMain = () => {
  return (
    <div className="flex h-auto w-full  bg-[url('/main-banner.jpg')] bg-cover bg-fixed bg-center bg-no-repeat md:h-[90vh]">
      <div className="flex h-full w-full items-center justify-center bg-black/70">
        <div className="flex h-auto w-full max-w-7xl flex-col justify-center gap-y-10 px-5 py-5 text-white">
          <div className="flex flex-col  gap-y-5">
            <h1 className="text-4xl mt-6 font-black sm:text-5xl">
             Your appliances deserve the best: <br />
              <span className="text-white/75">
                Fast, reliable repairs for a hassle-free home.
              </span>
            </h1>
            <p>
              Our skilled technicians are committed to restoring your appliances
              to peak performance, ensuring your comfort and convenience. From
              fixing minor glitches to tackling major breakdowns, we've got you
              covered. Experience top-notch service that keeps your household
              running smoothly!
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={`tel:${phoneNumber}`}
              target="_blank"
              className="flex flex-shrink-0 justify-center rounded bg-white px-14 py-2.5 text-black transition duration-300 ease-in-out hover:bg-black hover:text-white hover:border hover:border-white"
            >
              Call Us
            </Link>
            <Link
              href={`https://wa.me/${phoneNumber}?text=Hello%20I%20need%20your%20help%20with%20my%20appliance%20repairs`}
              target="_blank"
              className="flex flex-shrink-0 justify-center rounded border bg-black/50 px-14 py-2.5 text-white transition duration-300 ease-in-out hover:bg-white hover:text-black"
            >
              WhatsApp Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SamsungMain;
