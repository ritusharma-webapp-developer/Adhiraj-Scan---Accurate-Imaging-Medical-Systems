import { CheckCircle2, Award, Users, Activity } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-blue-900 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">About Adhiraj Scan</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Committed to delivering precise diagnostics with advanced technology and compassionate care.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center mb-12 md:mb-20">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story & Mission</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Adhiraj Scan – Accurate Imaging & Medical Systems was established with a singular vision: to bring world-class diagnostic imaging services to the people of Bhopal and central India. Located strategically near AIIMS Hospital, we serve as a crucial diagnostic partner for patients and healthcare providers alike.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our mission is to provide accurate, timely, and reliable diagnostic reports that empower doctors to make informed treatment decisions. We believe that a correct diagnosis is the first and most critical step towards effective healing.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-sm font-medium text-slate-700">Years Experience</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">50k+</div>
                <div className="text-sm font-medium text-slate-700">Happy Patients</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Medical Professionals"
              className="rounded-xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-12 md:mb-20">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Accuracy', desc: 'We employ the latest technology and rigorous quality control to ensure every report is precise and reliable.', icon: Activity },
              { title: 'Compassion', desc: 'We understand that medical tests can be stressful. Our staff is trained to provide a comforting and supportive environment.', icon: Users },
              { title: 'Excellence', desc: 'We continuously upgrade our skills and equipment to stay at the forefront of diagnostic medicine.', icon: Award },
            ].map((value, index) => (
              <div key={index} className="text-center p-8 bg-slate-50 rounded-xl border border-slate-100">
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology */}
        <div className="bg-blue-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-white mb-6">State-of-the-Art Technology</h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                We invest heavily in the latest medical imaging technology to ensure our patients receive the best possible care. Our advanced scanners provide higher resolution images, faster scan times, and lower radiation doses.
              </p>
              <ul className="space-y-4">
                {[
                  'Advanced 3.0 Tesla MRI System',
                  '128-Slice CT Scanner for rapid imaging',
                  'High-definition Digital X-Ray systems',
                  'Premium 3D/4D Ultrasound machines',
                  'Dedicated PET CT for Oncology'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />
                    <span className="text-white font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-64 lg:h-auto">
              <img
                src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="MRI Machine"
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
