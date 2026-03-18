import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Activity, Shield, Clock, Users, Star, MapPin, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Medical Facility"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-900/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-800 text-blue-100 text-sm font-semibold tracking-wider mb-6 border border-blue-700">
              TRUSTED DIAGNOSTICS IN BHOPAL
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Advanced Diagnostic Imaging Centre in Bhopal
            </h1>
            <p className="text-xl text-blue-100 mb-10 font-medium">
              MRI | CT Scan | PET CT | Digital X-Ray | Sonography
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/appointment"
                className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-md font-bold text-lg transition-colors duration-200 text-center shadow-lg"
              >
                Book Appointment
              </Link>
              <a
                href="tel:+919685312236"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-md font-bold text-lg transition-colors duration-200 text-center flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">About Adhiraj Scan</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Adhiraj Scan is Bhopal's premier diagnostic imaging center, dedicated to providing accurate, timely, and compassionate medical imaging services. Located near AIIMS Hospital, we are equipped with state-of-the-art technology to ensure the highest quality diagnostics.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Advanced 3T MRI & 128 Slice CT Scanner',
                  'Highly Experienced Radiologists',
                  'Fast & Accurate Reporting',
                  'Patient-Centric Approach'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
              >
                Learn more about us <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Modern Medical Equipment"
                className="rounded-lg shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-lg shadow-xl hidden md:block">
                <div className="text-4xl font-bold mb-1">15+</div>
                <div className="text-sm font-medium opacity-90">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Diagnostic Services</h2>
            <p className="text-lg text-slate-600">
              We offer a comprehensive range of advanced imaging services using the latest technology to ensure precise diagnosis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: 'MRI Scan', id: 'mri', desc: 'High-resolution magnetic resonance imaging for detailed internal views.', icon: Activity },
              { title: 'CT Scan', id: 'ct', desc: 'Advanced computed tomography for quick and accurate cross-sectional images.', icon: Activity },
              { title: 'PET CT Scan', id: 'pet-ct', desc: 'Combined metabolic and anatomic imaging for oncology and neurology.', icon: Activity },
              { title: 'PSMA PET Scan', id: 'psma-pet', desc: 'Specialized imaging for precise detection and staging of prostate cancer.', icon: Activity },
              { title: 'Digital X-Ray', id: 'xray', desc: 'Fast, low-dose digital radiography for bone and chest evaluations.', icon: Activity },
              { title: 'Sonography', id: 'sonography', desc: 'High-definition ultrasound imaging for various medical conditions.', icon: Activity },
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100">
                <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 line-clamp-2">{service.desc}</p>
                <Link to={`/services#${service.id}`} className="text-blue-600 font-semibold hover:text-blue-800 inline-flex items-center">
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Adhiraj Scan?</h2>
            <p className="text-blue-100 text-lg">
              We combine cutting-edge technology with compassionate care to deliver the best diagnostic experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { title: 'Advanced Technology', desc: 'Latest generation scanners for unparalleled image quality.', icon: Activity },
              { title: 'Expert Radiologists', desc: 'Highly qualified specialists ensuring accurate interpretations.', icon: Users },
              { title: 'Fast Reporting', desc: 'Quick turnaround times for urgent medical decisions.', icon: Clock },
              { title: 'Patient Safety', desc: 'Strict protocols and low-dose imaging techniques.', icon: Shield },
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-blue-800/50 rounded-xl backdrop-blur-sm border border-blue-700/50">
                <div className="w-16 h-16 mx-auto bg-blue-700 rounded-full flex items-center justify-center mb-6 text-white">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Patient Testimonials</h2>
            <p className="text-lg text-slate-600">
              Read what our patients have to say about their experience with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { name: 'Rahul Sharma', text: 'Excellent facility. The staff is very cooperative and the MRI process was smooth. Highly recommended in Bhopal.', rating: 5 },
              { name: 'Priya Patel', text: 'Got my CT scan done here. Very clean environment and they delivered the reports exactly on time as promised.', rating: 5 },
              { name: 'Amit Verma', text: 'State of the art equipment and very professional doctors. The best diagnostic center near AIIMS.', rating: 5 },
            ].map((review, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 relative">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic">"{review.text}"</p>
                <div className="font-bold text-slate-900">{review.name}</div>
                <div className="text-sm text-slate-500">Google Review</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
          <div className="mb-8 lg:mb-0 text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-2">Need a Diagnostic Scan?</h2>
            <p className="text-blue-100 text-lg">Book your appointment online and skip the waiting queue.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/appointment"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-md font-bold transition-colors text-center shadow-md"
            >
              Book Now
            </Link>
            <a
              href="https://wa.me/919685312236"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white hover:bg-green-600 px-8 py-3 rounded-md font-bold transition-colors text-center shadow-md flex items-center justify-center"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
