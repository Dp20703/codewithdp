import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import ContactSection from "../components/sections/ContactSection";

const Contact = () => {
    document.title = "Contact | codewithdp";
  return (
    <>
      <Navbar />
      <ContactSection />
      <Footer/>
    </>
  );
};

export default Contact;
