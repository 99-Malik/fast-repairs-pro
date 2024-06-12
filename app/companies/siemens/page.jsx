import AboutSection from "@/components/sections/home/AboutSection";
import MainBanner from "@/components/sections/home/MainBanner";
import OurMissionSection from "@/components/sections/home/OurMissionSection";
import QualitySection from "@/components/sections/home/QualitySection";
import ServicesSection from "@/components/sections/home/ServicesSection";
import SiemensAboutSection from "@/components/sections/siemens/SiemensAboutSection";
import SiemensBanner from "@/components/sections/siemens/SiemensBanner";
import SiemensMissionSection from "@/components/sections/siemens/SiemensMissionSection";
import SiemensQualitySection from "@/components/sections/siemens/SiemensQualitySection";
import SiemensServices from "@/components/sections/siemens/SiemensServices";
import HomeQuality from "../../../components/sections/siemens/HomeQuality"
import Feature from "../../../components/sections/siemens/feature"

const SiemensServiceCenterPage = () => {
  return (
    <div className="flex flex-col">
      <SiemensBanner />
      <QualitySection />
      <AboutSection />
      <HomeQuality/>
      <Feature/>
      <ServicesSection />
      <OurMissionSection />
    </div>
  );
};

export default SiemensServiceCenterPage;
