import ImageContainer from "../../components/ImageContainer/ImageContainer.jsx";
import image from '../../assets/prehouse1.jpeg'

const TechnologyPage = () => {
  return (
    <>
      <ImageContainer
        imageUrl={image}
        altText="A beautiful scenery"
        text="Технология"
      />
    </>
  );
};

export default TechnologyPage;
