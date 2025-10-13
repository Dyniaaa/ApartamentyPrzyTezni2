import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Navbar from "./components/Navbar/Navbar";
import Apartments from "./pages/Apartments/Apartments";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ApartmentDetail from "./pages/ApartmentDetail/ApartmentDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Apartments" element={<Apartments />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Apartament0.1" element={<ApartmentDetail />} />
        <Route path="/Apartament0.2" element={<ApartmentDetail />} />
        <Route path="/Apartament2.1" element={<ApartmentDetail />} />
        <Route path="/Apartament2.2" element={<ApartmentDetail />} />
        <Route path="/Apartament2.3" element={<ApartmentDetail />} />
        <Route path="/Apartament3.1" element={<ApartmentDetail />} />
        <Route path="/Apartament3.1" element={<ApartmentDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
