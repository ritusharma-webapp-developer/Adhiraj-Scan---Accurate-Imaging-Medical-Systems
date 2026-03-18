import { Link } from 'react-router-dom';
import { Activity, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center mb-6">
              <Activity className="h-8 w-8 text-blue-400 mr-2" />
              <div>
                <h2 className="text-xl font-bold text-white leading-tight">Adhiraj Scan</h2>
                <p className="text-xs text-slate-400 font-medium tracking-wide">Accurate Imaging & Medical Systems</p>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Bhopal's premier diagnostic imaging center, equipped with advanced technology and experienced radiologists for accurate and timely diagnosis.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/adhirajscan" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/adhirajscan" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/adhirajscan" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-500 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/adhirajscan" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-slate-700 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Our Services</Link></li>
              <li><Link to="/appointment" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Book Appointment</Link></li>
              <li><Link to="/referral" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Doctor Referral</Link></li>
              <li><Link to="/doctor-portal" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Doctor Portal</Link></li>
              <li><Link to="/blog" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Health Blog</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-slate-700 pb-2 inline-block">Our Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services#mri" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">MRI Scan</Link></li>
              <li><Link to="/services#ct" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">CT Scan</Link></li>
              <li><Link to="/services#pet-ct" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">PET CT Scan</Link></li>
              <li><Link to="/services#psma-pet" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">PSMA PET Scan</Link></li>
              <li><Link to="/services#xray" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Digital X-Ray</Link></li>
              <li><Link to="/services#sonography" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Sonography / Ultrasound</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-slate-700 pb-2 inline-block">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400 text-sm leading-relaxed">
                  H. No. 2-C/177, Saket Nagar,<br />
                  Near AIIMS Hospital,<br />
                  Bhopal, Madhya Pradesh, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-slate-400 text-sm">+91 9685312236</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-slate-400 text-sm">info@adhirajscan.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Adhiraj Scan. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
