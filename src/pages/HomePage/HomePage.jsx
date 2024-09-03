import ImageSlider from '../../components/ImageSlider/ImageSlider.jsx';
import ContactForm from '../../components/ContactForm/ContactForm.jsx';
import WhyChooseUs from '../../components/AboutUsComponents/WhyChooseUs.jsx';
import InfoSection from '../../components/InfoSection/InfoSection.jsx';
import BurgasHomesNumbers from '../../components/BurgasHomesNumbers/BurgasHomesNumbers.jsx';

const HomePage = () => {
  return (
    <main className='home-page'>
    <ImageSlider />
    <InfoSection />
    <BurgasHomesNumbers />
    <WhyChooseUs />
    <ContactForm />
    </main>
  );
};

export default HomePage;
