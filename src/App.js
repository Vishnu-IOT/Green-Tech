import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Government from "./components/Government";
import Certifications from "./components/Certifications";
import Gallery from "./components/Gallery";
import GetQuote from "./components/GetQuote";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import PageLoader from "./components/Pageloader";
import ScrollTopButton from "./components/ScrollTopButton";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <PageLoader />
      <ScrollToTop />
      <ScrollTopButton />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/government" element={<Government />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/getquote" element={<GetQuote />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
