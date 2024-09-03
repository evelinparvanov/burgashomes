import image from "../../assets/prehouse1.jpeg";
import ImageContainer from "../../components/ImageContainer/ImageContainer.jsx";
import "./PrefabHousesPage.css";

const PrefabHousesPage = () => {
  return (
    <main>
      <ImageContainer
        imageUrl={image}
        altText="A beautiful scenery"
        text="Дървени Къщи"
      />
    </main>
  );
};

export default PrefabHousesPage;
