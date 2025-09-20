import { phoneNumber, phoneNumberShort } from "@/utils/phoneNumber";

const CallHeader = () => {
  return (
    <div className="bg-darkBlue flex justify-center text-white">
      <div className="flex w-full max-w-7xl justify-center px-8 md:justify-start">
        <div className="py-3 pr-5 md:border-r md:border-white/20">
          Call Us <span className="md:hidden">/ Whatsapp</span> :{" "}
          <span className="font-semibold">{phoneNumberShort}</span>
        </div>
        <div className="hidden px-7 py-3 md:flex">
          Interested in chatting with us ?
          <span className="px-3 font-semibold text-red-500 underline">
            Whatsapp Now
          </span>
        </div>
      </div>
    </div>
  );
};

export default CallHeader;
