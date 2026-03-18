/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Appointment from './pages/Appointment';
import Referral from './pages/Referral';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import DoctorPortal from './pages/DoctorPortal';
import FloatingActions from './components/FloatingActions';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans text-slate-800 bg-slate-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/referral" element={<Referral />} />
            <Route path="/doctor-portal" element={<DoctorPortal />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </Router>
  );
}
