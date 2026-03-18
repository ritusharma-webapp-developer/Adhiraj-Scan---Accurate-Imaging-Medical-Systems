import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Calendar, Clock, User, Phone, FileText, Send } from 'lucide-react';

export default function Appointment() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    testRequired: '',
    preferredDate: '',
    message: ''
  });

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const service = searchParams.get('service');
    if (service) {
      setFormData(prev => ({ ...prev, testRequired: service }));
    }
  }, [location]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    console.log('Form submitted:', formData);
    alert('Thank you! Your appointment request has been received. We will contact you shortly to confirm.');
    setFormData({
      name: '',
      phone: '',
      testRequired: '',
      preferredDate: '',
      message: ''
    });
  };

  return (
    <div className="bg-slate-50 py-12 md:py-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Book an Appointment</h1>
          <p className="text-lg text-slate-600">
            Fill out the form below to request an appointment. Our team will get back to you to confirm the time.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-5">
            {/* Contact Info Sidebar */}
            <div className="bg-blue-900 text-white p-6 md:p-10 md:col-span-2 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="text-blue-100 mb-10 leading-relaxed">
                  Need immediate assistance? Call us directly or visit our center.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-blue-400 mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg">Phone</h4>
                      <p className="text-blue-200">+91 9685312236</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-blue-400 mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg">Working Hours</h4>
                      <p className="text-blue-200">Mon - Sat: 8:00 AM - 8:00 PM</p>
                      <p className="text-blue-200">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <a
                  href="https://wa.me/919685312236"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-bold transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Booking Form */}
            <div className="p-6 md:p-10 md:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="pl-10 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-3 border bg-slate-50"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="pl-10 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-3 border bg-slate-50"
                      placeholder="+91 9685312236"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="testRequired" className="block text-sm font-medium text-slate-700 mb-2">Test Required *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FileText className="h-5 w-5 text-slate-400" />
                    </div>
                    <select
                      id="testRequired"
                      name="testRequired"
                      required
                      value={formData.testRequired}
                      onChange={handleChange}
                      className="pl-10 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-3 border bg-slate-50"
                    >
                      <option value="">Select a test</option>
                      <option value="mri">MRI Scan</option>
                      <option value="ct">CT Scan</option>
                      <option value="pet-ct">PET CT Scan</option>
                      <option value="psma-pet">PSMA PET Scan</option>
                      <option value="xray">Digital X-Ray</option>
                      <option value="sonography">Sonography / Ultrasound</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-slate-700 mb-2">Preferred Date *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      required
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="pl-10 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-3 border bg-slate-50"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Additional Message (Optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border bg-slate-50"
                    placeholder="Any specific instructions or symptoms?"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Request Appointment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
