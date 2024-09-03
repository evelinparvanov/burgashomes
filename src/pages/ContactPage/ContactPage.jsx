import './ContactPage.css';
import ImageContainer from '../../components/ImageContainer/ImageContainer.jsx';
import ContactForm from '../../components/ContactForm/ContactForm.jsx';

const ContactPage = () => {
  return (
    <main>
    <ImageContainer  altText="A beautiful scenery" text="Контакти" />
    <ContactForm />
  </main>
  )
};

export default ContactPage;
