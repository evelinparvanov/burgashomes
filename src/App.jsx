import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/HomePage/HomePage";
import TechnologyPage from "./pages/TechnologyPage/TechnologyPage";
import About from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import PrefabHousesPage from "./pages/PrefabHousesPage/PrefabHousesPage";
import PricesPage from "./pages/Prices/PricesPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage/PrivacyPolicyPage";
import GeneralConditionsPage from "./pages/GeneralConditions/GeneralConditionsPage";
import "./App.css";
import "./index.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prefab-houses" element={<PrefabHousesPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="/prices" element={<PricesPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/general-conditions" element={<GeneralConditionsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
