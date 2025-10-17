import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Navbar from "./components/Navbar/Navbar";
import Apartments from "./pages/Apartments/Apartments";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ApartmentDetail from "./pages/ApartmentDetail/ApartmentDetail";
import ApartmentData from "./Data/apartments.json";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Apartments" element={<Apartments />} />
        <Route path="/Contact" element={<Contact />} />
        <Route
          path={ApartmentData[0].link}
          element={
            <ApartmentDetail
              title={ApartmentData[0].title}
              price={ApartmentData[0].price}
              meters={ApartmentData[0].meters}
              images={ApartmentData[0].gallery}
            />
          }
        />
        <Route
          path={ApartmentData[1].link}
          element={
            <ApartmentDetail
              title={ApartmentData[1].title}
              price={ApartmentData[1].price}
              meters={ApartmentData[1].meters}
              images={ApartmentData[1].gallery}
            />
          }
        />
        <Route
          path={ApartmentData[2].link}
          element={
            <ApartmentDetail
              title={ApartmentData[2].title}
              price={ApartmentData[2].price}
              meters={ApartmentData[2].meters}
              images={ApartmentData[2].gallery}
            />
          }
        />
        <Route
          path={ApartmentData[3].link}
          element={
            <ApartmentDetail
              title={ApartmentData[3].title}
              price={ApartmentData[3].price}
              meters={ApartmentData[3].meters}
              images={ApartmentData[3].gallery}
            />
          }
        />
        <Route
          path={ApartmentData[4].link}
          element={
            <ApartmentDetail
              title={ApartmentData[4].title}
              price={ApartmentData[4].price}
              meters={ApartmentData[4].meters}
              images={ApartmentData[4].gallery}
            />
          }
        />
        <Route
          path={ApartmentData[5].link}
          element={
            <ApartmentDetail
              title={ApartmentData[5].title}
              price={ApartmentData[5].price}
              meters={ApartmentData[5].meters}
              images={ApartmentData[5].gallery}
            />
          }
        />
        <Route
          path={ApartmentData[6].link}
          element={
            <ApartmentDetail
              title={ApartmentData[6].title}
              price={ApartmentData[6].price}
              meters={ApartmentData[6].meters}
              images={ApartmentData[6].gallery}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
