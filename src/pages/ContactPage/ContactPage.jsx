import './ContactPage.css';
import image from '../../assets/prehouse1.jpeg'
import ImageContainer from '../../components/ImageContainer/ImageContainer.jsx';
import ContactForm from '../../components/ContactForm/ContactForm.jsx';

const ContactPage = () => {
  return (
    <main>
    <ImageContainer imageUrl={image} altText="A beautiful scenery" text="КОНТАКТИ" />
    <ContactForm />
  </main>
  )
};

export default ContactPage;
