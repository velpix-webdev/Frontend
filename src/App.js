import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ServiceDetailPage from './pages/ServiceDetailPage';
import Home from "./pages/Home"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Whatsapp from "./components/whatsapp-float-button"
import Scroll from "./components/scroll-to-top-button"
export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/services/:id" element={<ServiceDetailPage />} />
      </Routes>
      <Footer />
      <Whatsapp />
      <Scroll />
    </Router>
  );
}