import Image from "next/image";
import Link from "next/link";

const BoschFooter = () => {
  return (
    <footer className="flex justify-center bg-[#363636] text-white">
      <div className="mt-5 flex w-full max-w-[78rem] flex-col gap-y-5 px-5 py-10">
        <div className="flex items-center gap-x-1">
          <Image src="/logo.svg" width={50} height={50} alt="LOGO" />
          <div className="flex flex-col justify-between px-2">
            <span className="text-3xl font-bold uppercase">Service</span>
            <span className="text-xs uppercase text-white">
              Center UAE
            </span>
          </div>
        </div>
        <span className="text-sm font-light ">
          An authorized service provider specialized in appliance repair and maintenance services in
          Dubai and Abu Dhabi of all the bosch home appliances.
        </span>
        <div className="flex flex-col gap-y-5 ">
          <span className="hover:underline">Home</span>
          <span className="hover:underline">About Us</span>
          <span className="hover:underline">Services</span>
          <span className="hover:underline">Terms of use</span>
          <span className="hover:underline">Privacy Policy</span>
        </div>
        <span className="border-t border-[#c2c4c4] pt-5 text-center text-xs">
          © 2024 Service Center Center. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default BoschFooter;

