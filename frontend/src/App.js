import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "sonner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Packages from "./pages/Packages";
import Contact from "./pages/Contact";
import { siteInfo } from "./data/siteData";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-swami-web" element={<About />} />
          <Route path="/live-website-preview" element={<Navigate to="/" replace />} />
          <Route path="/package-plans" element={<Packages />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <a
          className="whatsapp-fab"
          href={`https://wa.me/${siteInfo.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19.11 4.93A9.82 9.82 0 0 0 12.03 2c-5.43 0-9.85 4.4-9.85 9.81 0 1.73.45 3.42 1.3 4.91L2 22l5.44-1.42a9.88 9.88 0 0 0 4.58 1.16h.01c5.43 0 9.85-4.4 9.86-9.81a9.72 9.72 0 0 0-2.78-7ZM12.03 20.06h-.01a8.2 8.2 0 0 1-4.17-1.14l-.3-.18-3.23.84.86-3.13-.2-.32a8.1 8.1 0 0 1-1.25-4.31c0-4.5 3.7-8.16 8.26-8.16 2.2 0 4.26.85 5.82 2.4a8.07 8.07 0 0 1 2.42 5.76c0 4.5-3.72 8.16-8.2 8.16Zm4.47-6.11c-.24-.12-1.4-.69-1.62-.77-.21-.08-.36-.12-.52.12-.16.24-.6.77-.73.93-.14.16-.27.18-.5.06-.24-.12-.99-.36-1.89-1.15-.7-.62-1.17-1.39-1.31-1.63-.13-.24-.01-.37.1-.49.1-.1.24-.27.35-.4.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.43-.06-.12-.52-1.25-.71-1.72-.18-.43-.37-.37-.52-.37h-.44c-.16 0-.4.06-.61.3-.2.24-.79.77-.79 1.87 0 1.1.8 2.17.9 2.32.12.16 1.58 2.4 3.82 3.37.54.24.96.38 1.29.49.54.17 1.03.15 1.42.09.43-.06 1.4-.58 1.6-1.13.2-.55.2-1.03.14-1.13-.06-.1-.22-.16-.46-.28Z" />
          </svg>
        </a>
        <Toaster position="top-right" richColors />
      </BrowserRouter>
    </div>
  );
}

export default App;
