import FixedCallButtons from "@/components/buttons/FixCallButtons";
import LgFooter from "@/components/sections/lg/LgFooter";
import LgHeader from "@/components/sections/lg/LgHeader";

export const metadata = {
  title: "Lg Repair Center | Appliances Repairs UAE",
  description: "Best home appliance repair service in Dubai and Abu Dhabi",
};

const Bosch = ({ children }) => {
  return (
    <body className="flex flex-col bg-lg-bg select-none">
      <LgHeader />
      {children}
      <LgFooter />
      <FixedCallButtons />
    </body>
  );
};

export default Bosch;
