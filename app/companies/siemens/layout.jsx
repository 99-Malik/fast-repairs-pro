import FixedCallButtons from "@/components/buttons/FixCallButtons";
import SiemensFixedContactButton from "@/components/sections/siemens/SiemensFixedContactButton";
import SiemensFooter from "@/components/sections/siemens/SiemensFooter";
import SiemensHeader from "@/components/sections/siemens/SiemensHeader";

export const metadata = {
  title: "Siemens Repair Center | Service Center UAE",
  description: "Best home appliance repair service in Dubai and Abu Dhabi",
};

const SiemensLayout = ({ children }) => {
  return (
    <body className="flex flex-col text-black">
      <SiemensHeader />
      {children}
      <SiemensFooter />
      <FixedCallButtons />
    </body>
  );
};

export default SiemensLayout;
