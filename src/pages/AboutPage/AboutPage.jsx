import ImageContainer from "../../components/ImageContainer/ImageContainer.jsx";
import CompanyOverview from "../../components/AboutUsComponents/CompanyOverview.jsx";
import OurTeam from "../../components/AboutUsComponents/WhyChooseUs.jsx";
import BenefitsOfPrefabHouses from "../../components/AboutUsComponents/BenefitsOfPrefabHouses.jsx";

const AboutPage = () => {
  return (
    <>
      <ImageContainer
        altText="A beautiful scenery"
        text="За Нас"
      />
      <CompanyOverview />
      <OurTeam />
      <BenefitsOfPrefabHouses />
    </>
  );
};

export default AboutPage;
