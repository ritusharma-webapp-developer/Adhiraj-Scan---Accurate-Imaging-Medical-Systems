import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-blue-900 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            We are here to answer your questions and assist you with your diagnostic needs.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Get in Touch</h2>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              Whether you need to book an appointment, inquire about a specific scan, or request your reports, our dedicated team is ready to help.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-slate-900">Our Location</h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">
                    H. No. 2-C/177, Saket Nagar,<br />
                    Near AIIMS Hospital,<br />
                    Bhopal, Madhya Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-slate-900">Phone Numbers</h3>
                  <p className="mt-2 text-slate-600">
                    <a href="tel:+919876543210" className="hover:text-blue-600 transition-colors">+91 98765 43210</a><br />
                    <a href="tel:+919876543211" className="hover:text-blue-600 transition-colors">+91 98765 43211</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-slate-900">Email Address</h3>
                  <p className="mt-2 text-slate-600">
                    <a href="mailto:info@adhirajscan.com" className="hover:text-blue-600 transition-colors">info@adhirajscan.com</a><br />
                    <a href="mailto:reports@adhirajscan.com" className="hover:text-blue-600 transition-colors">reports@adhirajscan.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-slate-900">Operating Hours</h3>
                  <p className="mt-2 text-slate-600">
                    Monday - Saturday: 8:00 AM - 8:00 PM<br />
                    Sunday: Closed (Emergency scans available on call)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                <input type="text" id="name" className="w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border bg-slate-50" required />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                <input type="email" id="email" className="w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border bg-slate-50" required />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                <input type="tel" id="phone" className="w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border bg-slate-50" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Subject *</label>
                <input type="text" id="subject" className="w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border bg-slate-50" required />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message *</label>
                <textarea id="message" rows={5} className="w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border bg-slate-50" required></textarea>
              </div>

              <button type="submit" className="w-full flex justify-center items-center bg-blue-600 text-white px-6 py-3 rounded-md font-bold hover:bg-blue-700 transition-colors">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="w-full h-96 bg-slate-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.273754961556!2d77.4567!3d23.2045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c424100000000%3A0x0!2sAIIMS%20Bhopal!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          title="Adhiraj Scan Location"
        ></iframe>
      </div>
    </div>
  );
}
