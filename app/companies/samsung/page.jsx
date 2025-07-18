import AboutSection from "@/components/sections/home/AboutSection";
import OurMissionSection from "@/components/sections/home/OurMissionSection";
import QualitySection from "@/components/sections/home/QualitySection";
import ServicesSection from "@/components/sections/home/ServicesSection";
import SamsungBanner from "@/components/sections/samsung/SamsungBanner";
import HomeQuality from "../../../components/sections/samsung/HomeQuality"
import Feature from "../../../components/sections/samsung/feature"
import MainBanner from "@/components/sections/home/MainBanner";


const SamsungServiceCenterPage = () => {
  return (
    <div className="flex flex-col ">
      {/* <SamsungBanner /> */}
            <MainBanner/>

      <QualitySection />
      <AboutSection />
      <HomeQuality/>
      <Feature/>
      <ServicesSection />
      <OurMissionSection />
    </div>
  );
};

export default SamsungServiceCenterPage;
