import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Link as LinkIcon } from 'lucide-react';

export default function Services() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Add a small delay to ensure rendering is complete
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const services = [
    {
      id: 'mri',
      title: 'MRI Scan (Magnetic Resonance Imaging)',
      desc: 'Our advanced 3.0T MRI scanner provides exceptionally detailed images of internal organs, tissues, and skeletal system without using ionizing radiation.',
      benefits: ['High-resolution images', 'No radiation exposure', 'Excellent for soft tissue evaluation', 'Comfortable wide-bore design'],
      when: 'Neurological disorders, joint and musculoskeletal issues, spinal problems, and abdominal/pelvic conditions.',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'ct',
      title: 'CT Scan (Computed Tomography)',
      desc: 'Our 128-slice CT scanner delivers rapid, high-quality cross-sectional images of the body, crucial for emergency diagnostics and detailed anatomical studies.',
      benefits: ['Ultra-fast scanning', 'Low dose radiation technology', 'High-definition 3D reconstructions', 'Ideal for trauma cases'],
      when: 'Trauma, chest and lung evaluations, complex bone fractures, detecting tumors or internal bleeding.',
      image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'pet-ct',
      title: 'PET CT Scan',
      desc: 'Combining Positron Emission Tomography (PET) with CT, this advanced imaging technique provides both metabolic and anatomical information in a single scan.',
      benefits: ['Early detection of diseases', 'Accurate staging of cancer', 'Monitoring treatment effectiveness', 'Precise localization of abnormalities'],
      when: 'Oncology (cancer diagnosis and staging), neurology (Alzheimer\'s, epilepsy), and cardiology.',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'psma-pet',
      title: 'PSMA PET Scan',
      desc: 'A highly specialized imaging technique specifically designed for the precise detection, staging, and monitoring of prostate cancer.',
      benefits: ['Superior sensitivity for prostate cancer', 'Detects small metastases', 'Guides targeted therapy', 'Better than conventional imaging'],
      when: 'Initial staging of high-risk prostate cancer, suspected recurrence, or monitoring therapy response.',
      image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'xray',
      title: 'Digital X-Ray',
      desc: 'State-of-the-art digital radiography providing instant, high-quality images with significantly reduced radiation exposure compared to traditional X-rays.',
      benefits: ['Instant image availability', 'Lower radiation dose', 'Enhanced image manipulation', 'Easy sharing with doctors'],
      when: 'Bone fractures, joint dislocations, chest infections (pneumonia), and dental issues.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'sonography',
      title: 'Sonography / Ultrasound',
      desc: 'Non-invasive imaging using high-frequency sound waves to produce real-time images of the inside of the body, including 3D/4D capabilities.',
      benefits: ['Completely safe (no radiation)', 'Real-time imaging', 'Non-invasive and painless', 'Cost-effective diagnostic tool'],
      when: 'Pregnancy monitoring, abdominal pain, pelvic issues, vascular conditions, and soft tissue evaluations.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="bg-slate-50">
      {/* Page Header */}
      <div className="bg-blue-900 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Diagnostic Services</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Comprehensive, accurate, and advanced medical imaging services under one roof.
          </p>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="bg-white border-b border-slate-200 sticky top-[80px] z-40 shadow-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap justify-center gap-8 py-4">
            {services.map((service) => (
              <li key={`nav-${service.id}`}>
                <a 
                  href={`#${service.id}`}
                  className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
                >
                  {service.title.split(' (')[0]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="space-y-16 md:space-y-24">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 md:gap-12 items-center scroll-mt-40`}>
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl font-bold text-slate-900 mb-6 group flex items-center">
                  {service.title}
                  <a 
                    href={`#${service.id}`} 
                    className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400 hover:text-blue-600" 
                    aria-label={`Link to ${service.title}`}
                  >
                    <LinkIcon className="w-6 h-6" />
                  </a>
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {service.desc}
                </p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Benefits:</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-8">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">When is it recommended?</h3>
                  <p className="text-slate-700">{service.when}</p>
                </div>

                <Link
                  to={`/appointment?service=${service.id}`}
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
                >
                  Book this Scan <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
