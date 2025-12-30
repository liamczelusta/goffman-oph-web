import Link from 'next/link';

export default function Insurance() {
  // Common insurance providers - you can update this list as needed
  const insuranceProviders = [
    'Aetna',
    'Blue Cross Blue Shield',
    'Cigna',
    'Humana',
    'Medicare',
    'Medicaid',
    'UnitedHealthcare',
    'Vision Care Plans',
    'And many more...',
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-700 mb-8 text-center">
            Insurance Accepted
          </h1>

          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6 leading-relaxed text-center text-lg">
                We accept most major insurance plans. Our office staff is happy to help verify your insurance coverage and answer any questions you may have about your benefits.
              </p>

              <div className="bg-slate-100 p-6 rounded-lg mb-6">
                <h2 className="text-2xl font-bold text-slate-700 mb-4 text-center">
                  Insurance Plans We Accept
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {insuranceProviders.map((provider, index) => (
                    <div key={index} className="flex items-center">
                      <span className="text-slate-600 mr-2">✓</span>
                      <span className="text-gray-700">{provider}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-700 mb-4">
                  Verify Your Insurance Coverage
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Before your visit, we recommend calling our office to verify that we accept your specific insurance plan. Our knowledgeable staff can help you understand your coverage and any out-of-pocket costs you may incur.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Please have your insurance card ready when you call, so we can quickly verify your benefits and answer any questions.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h2 className="text-2xl font-bold text-slate-700 mb-4">
                  Don't See Your Insurance Listed?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you don't see your insurance provider listed, please don't hesitate to contact us. We work with many insurance companies and may still be able to accept your plan. Our office staff will be happy to check your specific coverage.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We also offer payment plans and accept various payment methods to help make quality eye care accessible to all our patients.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-600 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">
              Questions About Insurance?
            </h2>
            <p className="mb-6 text-lg">
              Our friendly staff is here to help you understand your coverage and benefits.
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

