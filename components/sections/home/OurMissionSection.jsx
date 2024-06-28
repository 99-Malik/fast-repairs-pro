import Image from "next/image";

const OurMissionSection = () => {
  return (
    <div className="flex justify-center">
      <div className="flex w-full max-w-7xl flex-col gap-10 px-5 py-20 lg:flex-row">
        <div className="flex flex-col gap-y-5 lg:w-1/2">
          <div className="flex items-center gap-x-1">
            <Image src="/home/line.svg" width={25} height={25} alt="line" />
            <span className="text-sm font-semibold uppercase text-[#285EB2]">
              Our mission
            </span>
          </div>
          <span className="text-[2.5rem] font-extrabold leading-[3.0rem]">
            We Comes To Taking Care Of Your Appliances
          </span>

          <span className="font-light">
            At the end of the day, going forward, a new normal that has evolved
            from generation X is on the runway heading towards a streamlined
            cloud solution. strategies to ensure proactive domination.
          </span>
        </div>
        <div className="flex flex-col gap-y-5 lg:w-1/4">
          <div className="flex items-center gap-x-1">
            <Image src="/home/line.svg" width={25} height={25} alt="line" />
            <span className="text-sm font-semibold uppercase text-[#285EB2]">
              Our vision
            </span>
          </div>
          <span className="font-light">
            At Service Center UAE, our vision is to redefine the standards
            of excellence in appliance repair services across Dubai and Abu
            Dhabi. We envision a future where our agile methodologies, fueled by
            workplace diversity and empowerment, drive continuous innovation and
            unparalleled customer satisfaction.
          </span>
        </div>
        <div className="flex flex-col gap-y-5 lg:w-1/4">
          <div className="flex items-center gap-x-1">
            <Image src="/home/line.svg" width={25} height={25} alt="line" />
            <span className="text-sm font-semibold uppercase text-[#285EB2]">
              Our goal
            </span>
          </div>
          <span className="font-light">
            Our goal at Service Center UAE is to establish ourselves as
            the premier provider of appliance repair services in Dubai and Abu
            Dhabi within the next five years. We aim to achieve this by
            consistently delivering exceptional quality repairs, exceeding
            industry standards, and earning the trust and loyalty of our
            customers.
          </span>
        </div>
      </div>
    </div>
  );
};

export default OurMissionSection;
