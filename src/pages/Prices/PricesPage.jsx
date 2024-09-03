import image from '../../assets/prehouse1.jpeg'
import ImageContainer from '../../components/ImageContainer/ImageContainer.jsx';
import Pricing from '../../components/PricingContainer/Pricing.jsx';
import './PricesPage.css';

const PricesPage = () => {
  return (
    <main>
    <ImageContainer imageUrl={image} altText="A beautiful scenery" text="Цени" />
    <Pricing />
  </main>
  )
};

export default PricesPage;
