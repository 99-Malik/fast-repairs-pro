import FixedCallButtons from "@/components/buttons/FixCallButtons";
import LgFooter from "@/components/sections/lg/LgFooter";
import LgHeader from "@/components/sections/lg/LgHeader";
import Header from "@/components/headers/Header";
import Footer from "@/components/sections/home/Footer";

export const metadata = {
  title: "Lg Repair Center | Service Center UAE",
  description: "Best home appliance repair service in Dubai and Abu Dhabi",
};

const Bosch = ({ children }) => {
  return (
    <body className="flex flex-col bg-lg-bg select-none">
      {/* <LgHeader /> */}
      <Header/>
      {children}
      {/* <LgFooter /> */}
      <Footer/>
      <FixedCallButtons />
    </body>
  );
};

export default Bosch;
