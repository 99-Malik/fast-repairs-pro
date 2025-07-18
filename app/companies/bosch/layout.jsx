import FixedCallButtons from "@/components/buttons/FixCallButtons";
import BoschFooter from "@/components/sections/bosch/BoschFooter";
import BoschHeader from "@/components/sections/bosch/BoschHeader";
import SiemensFixedContactButton from "@/components/sections/siemens/SiemensFixedContactButton";
import Header from "@/components/headers/Header";
import Footer from "@/components/sections/home/Footer";

export const metadata = {
  title: "Bosch Repair Center | Service Center UAE",
  description: "Best home appliance repair service in Dubai and Abu Dhabi",
};

const Bosch = ({ children }) => {
  return (
    <body className="flex flex-col">
            <Header />

      {/* <BoschHeader /> */}
      {children}
      {/* <BoschFooter /> */}
      <Footer/>
      <FixedCallButtons />
    </body>
  );
};

export default Bosch;
