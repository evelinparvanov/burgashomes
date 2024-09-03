import image from '../../assets/prehouse1.jpeg'
import ImageContainer from '../../components/ImageContainer/ImageContainer.jsx';
import './ServicesPage.css';

const ServicesPage = () => {
  return (
    <main>
    <ImageContainer imageUrl={image} altText="A beautiful scenery" text="Услуги" />
  </main>
  )
};

export default ServicesPage;
