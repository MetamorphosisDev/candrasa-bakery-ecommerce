import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Beranda from "./pages/beranda";
import Lokasi from "./pages/lokasi";
import NewsAndPromo from "./pages/newsandpromo";
import FAQCustomer from "./pages/faqcustomer";
import About from "./pages/about";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/lokasi" element={<Lokasi />} />
        <Route path="/newsandpromo" element={<NewsAndPromo />} />
        <Route path="/faq" element={<FAQCustomer />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;