import FixedCallButtons from "@/components/buttons/FixCallButtons";
import BoschFooter from "@/components/sections/bosch/BoschFooter";
import BoschHeader from "@/components/sections/bosch/BoschHeader";
import SiemensFixedContactButton from "@/components/sections/siemens/SiemensFixedContactButton";

export const metadata = {
  title: "Bosch Repair Center | Appliances Repairs UAE",
  description: "Best home appliance repair service in Dubai and Abu Dhabi",
};

const Bosch = ({ children }) => {
  return (
    <body className="flex flex-col">
      <BoschHeader />
      {children}
      <BoschFooter />
      <FixedCallButtons />
    </body>
  );
};

export default Bosch;
