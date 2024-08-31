import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/HomePage/HomePage';
import About from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import PrefabricatedHousesPage from './pages/PrefabHousesPage/PrefabHousesPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage/PrivacyPolicyPage';
import GeneralConditionsPage from './pages/GeneralConditions/GeneralConditionsPage';
import './App.css';
import './index.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prefab-houses" element={<PrefabricatedHousesPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/general-conditions" element={<GeneralConditionsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
