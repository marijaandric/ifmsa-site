import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NavBar from "./components/Navbar/Navbar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer/Footer";
import WhoAreWePage from "./pages/WhoAreWePage/WhoAreWePage";
import IFMSAPage from "./pages/IFMSAPage/IFMSAPage";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/whoAreWe" element={<WhoAreWePage />} />
        <Route path="/ifmsa" element={<IFMSAPage />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
