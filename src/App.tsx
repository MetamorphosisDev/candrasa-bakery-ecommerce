import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Navbar from "./components/Navbar";

const Beranda = lazy(() => import("./pages/beranda"));
const Lokasi = lazy(() => import("./pages/lokasi"));
const NewsAndPromo = lazy(() => import("./pages/newsandpromo"));
const FAQCustomer = lazy(() => import("./pages/faqcustomer"));
const About = lazy(() => import("./pages/about"));
const Login_user = lazy(() => import("./User_Account/login"));

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Suspense
        fallback={
          <div className="flex h-screen items-center justify-center bg-gray-50">
            <div className="flex flex-col items-center gap-5">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-purple"></div>
              <p className="text-sm font-medium text-gray-600 tracking-wide">
                Loading...
              </p>
            </div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/lokasi" element={<Lokasi />} />
          <Route path="/newsandpromo" element={<NewsAndPromo />} />
          <Route path="/faq" element={<FAQCustomer />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login_user />} />
        </Routes>
      </Suspense>

    </BrowserRouter>
  );
}

export default App;