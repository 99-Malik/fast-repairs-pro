import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="flex justify-center">
      <div className="flex w-full max-w-7xl flex-col gap-10 px-5 py-20 lg:flex-row">
        <div className="flex flex-col gap-y-5 lg:w-1/2">
          <div className="flex items-center gap-x-1">
            <Image src="/home/line.svg" width={25} height={25} alt="line" />
            <span className="text-sm font-semibold uppercase text-[#285EB2]">
              About Company
            </span>
          </div>
          <span className="text-[2.5rem] font-extrabold leading-[3.0rem]">
            The Repairing Experts You've <br /> Trusted For Over 30 Years.
          </span>
          <span className="text-lg font-semibold text-black/70">
            Commercial & Residential Clients across Dubai and Abu Dhabi Home
            Appliances for their fast and reliable 24 hour repairing services.
          </span>
          <span className="font-light">
            Service Center UAE, serving Dubai and Abu Dhabi, adopts agile
            frameworks to offer a comprehensive overview of our services. Our
            iterative approach to corporate strategy encourages collaborative
            thinking, enhancing our overall value proposition. We believe in
            organically cultivating a holistic worldview of disruptive
            innovation through workplace diversity and empowerment.
          </span>
          <div className="grid sm:grid-cols-2 gap-x-14 gap-y-3">
            <div className="flex items-center gap-x-2">
              <Image src="/home/tick.svg" width={20} height={20} alt="tick" />
              <span className="text-medium">Qualified Team</span>
            </div>
            <div className="flex items-center gap-x-2">
              <Image src="/home/tick.svg" width={20} height={20} alt="tick" />
              <span className="text-medium">Punctuality</span>
            </div>
            <div className="flex items-center gap-x-2">
              <Image src="/home/tick.svg" width={20} height={20} alt="tick" />
              <span className="text-medium">Affordable Pricing</span>
            </div>
            <div className="flex items-center gap-x-2">
              <Image src="/home/tick.svg" width={20} height={20} alt="tick" />
              <span className="text-medium">24/7 Service</span>
            </div>
          </div>
        </div>
        <div className="relative flex h-fit lg:w-[50%] justify-end ml-24 bg-red-100">
          <Image
            src="/samsung/repair.webp"
            width={500}
            height={500}
            alt="repair image"
            className="w-full"
          />
          <div className="absolute -bottom-20 -left-20 flex flex-col gap-y-2 rounded-xl bg-[#285EB2] px-10 py-3 text-center text-white">
            <span className="text-5xl font-bold">3.4K+</span>
            <span className="text-lg">
              Satisfied Clients <br /> In Our Locality
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
