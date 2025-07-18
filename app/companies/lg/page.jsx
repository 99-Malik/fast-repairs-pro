import AboutSection from "@/components/sections/home/AboutSection";
import OurMissionSection from "@/components/sections/home/OurMissionSection";
import LgBanner from "@/components/sections/lg/LgBanner";
import LgQualitySection from "@/components/sections/lg/LgQualitySection";
import LgServices from "@/components/sections/lg/LgServices";
import HomeQuality from "../../../components/sections/lg/HomeQuality"
import Feature from "../../../components/sections/lg/feature"

import MainBanner from "@/components/sections/home/MainBanner";


const LgServiceCenterPage = () => {
  return (
    <div className="flex flex-col">
      {/* <LgBanner /> */}
      <MainBanner/>
      <LgQualitySection />
      <AboutSection />
      <HomeQuality/>
      <Feature/>
      <LgServices />
      <OurMissionSection />
    </div>
  );
};

export default LgServiceCenterPage;
