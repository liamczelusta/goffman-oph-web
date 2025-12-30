import Link from 'next/link';

export default function PatientForms() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-700 mb-8 text-center">
            New Patient Forms
          </h1>

          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6 leading-relaxed text-center text-lg">
                Get situated with all the necessary forms before you ever visit our office to save you time.
              </p>

              <div className="bg-slate-100 p-6 rounded-lg mb-6">
                <h2 className="text-2xl font-bold text-slate-700 mb-4 text-center">
                  Download Patient Forms
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed text-center">
                  Please download, print, and complete these forms before your appointment. Bringing completed forms to your visit will help us serve you more efficiently.
                </p>
                
                {/* Placeholder for forms - you can add actual PDF links later */}
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg border-2 border-slate-300 hover:border-slate-500 transition">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900">New Patient Registration Form</h3>
                        <p className="text-sm text-gray-600">Complete your personal and insurance information</p>
                      </div>
                      <div className="text-slate-600 font-semibold">PDF</div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border-2 border-slate-300 hover:border-slate-500 transition">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900">Medical History Form</h3>
                        <p className="text-sm text-gray-600">Your medical and eye health history</p>
                      </div>
                      <div className="text-slate-600 font-semibold">PDF</div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg border-2 border-slate-300 hover:border-slate-500 transition">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900">Notice of Privacy Practices</h3>
                        <p className="text-sm text-gray-600">HIPAA privacy information</p>
                      </div>
                      <div className="text-slate-600 font-semibold">PDF</div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mt-4 text-center italic">
                  Note: Actual PDF forms will be available here. You can upload them to the public folder and link them when ready.
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-700 mb-4">
                  What to Bring to Your Appointment
                </h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-slate-600 mr-2 mt-1">✓</span>
                    <span>Completed new patient forms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-600 mr-2 mt-1">✓</span>
                    <span>Valid photo ID</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-600 mr-2 mt-1">✓</span>
                    <span>Insurance card(s)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-600 mr-2 mt-1">✓</span>
                    <span>List of current medications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-600 mr-2 mt-1">✓</span>
                    <span>Previous eye exam records (if available)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-600 mr-2 mt-1">✓</span>
                    <span>Your current glasses or contact lenses</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h2 className="text-2xl font-bold text-slate-700 mb-4">
                  Running Late or Need Help?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you're unable to complete the forms before your appointment, don't worry! You can arrive 15-20 minutes early to fill them out in our office. Our friendly staff is always available to assist you.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  For questions about which forms you need or help completing them, please call our office and we'll be happy to assist you.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-600 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Schedule Your Appointment?
            </h2>
            <p className="mb-6 text-lg">
              Download your forms and call us to schedule your visit today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:7134670990"
                className="bg-white text-slate-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition"
              >
                Call (713) 467-0990
              </a>
              <Link
                href="/contact"
                className="bg-slate-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-500 transition border-2 border-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

