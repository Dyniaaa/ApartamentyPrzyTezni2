import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import MainPage from "./pages/MainPage/MainPage";
import Navbar from "./components/Navbar/Navbar";
import Apartments from "./pages/Apartments/Apartments";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ApartmentDetail from "./pages/ApartmentDetail/ApartmentDetail";
import ApartmentData from "./data/apartments.json";
import ScrollToTop from "./components/ScrollToTop";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Routes location={location}>
          <Route path="/" element={<MainPage />} />
          <Route path="/Apartments" element={<Apartments />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />

          {ApartmentData.map((apt, i) => (
            <Route
              key={i}
              path={apt.link}
              element={
                <ApartmentDetail
                  title={apt.title}
                  meters={apt.meters}
                  images={apt.gallery}
                  airConditioner={apt.airConditioner}
                  description={apt.description + apt.description2}
                  sofa={apt.sofa}
                  amountPeople={apt.amountPeople}
                  amountBed={apt.amountBed}
                  amountBathrooms={apt.amountBathrooms}
                />
              }
            />
          ))}
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}

export default App;
