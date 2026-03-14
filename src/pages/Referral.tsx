import { Stethoscope, FileText, FastForward, Users } from 'lucide-react';

export default function Referral() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-blue-900 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">For Referring Doctors</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Partnering with healthcare professionals to deliver accurate and timely diagnostic insights.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center mb-12 md:mb-20">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">A Trusted Diagnostic Partner</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              At Adhiraj Scan, we understand that accurate diagnosis is the cornerstone of effective treatment. We are committed to providing referring physicians with the highest quality imaging and precise reports to aid in patient management.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our team of experienced radiologists is always available for consultation and case discussions, ensuring a collaborative approach to patient care.
            </p>
            
            <div className="space-y-6">
              {[
                { title: 'Fast Turnaround Time', desc: 'Urgent reports delivered within hours, routine reports within 24 hours.', icon: FastForward },
                { title: 'Expert Radiologists', desc: 'Sub-specialty trained radiologists for accurate interpretation.', icon: Stethoscope },
                { title: 'Digital Access', desc: 'Secure online portal for immediate access to images and reports.', icon: FileText },
                { title: 'Collaborative Approach', desc: 'Direct line to our radiologists for case discussions.', icon: Users },
              ].map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
                    <p className="mt-1 text-slate-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Refer a Patient</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Doctor's Name *</label>
                  <input type="text" className="w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border bg-white" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Clinic/Hospital Name</label>
                  <input type="text" className="w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border bg-white" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Patient's Name *</label>
                  <input type="text" className="w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border bg-white" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Patient's Phone *</label>
                  <input type="tel" className="w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border bg-white" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Investigation Required *</label>
                <input type="text" className="w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border bg-white" placeholder="e.g., MRI Brain with Contrast" required />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Clinical History / Notes</label>
                <textarea rows={4} className="w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border bg-white"></textarea>
              </div>

              <button type="submit" className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-bold hover:bg-blue-700 transition-colors">
                Submit Referral
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
