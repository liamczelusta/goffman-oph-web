export default function Privacy() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-700 mb-8">
            Privacy Policy
          </h1>

          <div className="bg-white p-8 rounded-lg shadow-md prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4">
              Last updated: {new Date().getFullYear()}
            </p>

            <h2 className="text-2xl font-bold text-slate-700 mt-8 mb-4">
              Notice of Privacy Practices
            </h2>
            <p className="text-gray-700 mb-4">
              Joel H. Goffman, M.D., P.A. is committed to protecting your privacy and the confidentiality of your health information. This notice describes how medical information about you may be used and disclosed and how you can get access to this information.
            </p>

            <h2 className="text-2xl font-bold text-slate-700 mt-8 mb-4">
              Your Health Information Rights
            </h2>
            <p className="text-gray-700 mb-4">
              You have the right to request restrictions on certain uses and disclosures of your health information, request amendments to your health information, and request an accounting of disclosures of your health information.
            </p>

            <h2 className="text-2xl font-bold text-slate-700 mt-8 mb-4">
              Contact Information
            </h2>
            <p className="text-gray-700 mb-4">
              If you have questions about this privacy policy or wish to exercise your rights regarding your health information, please contact our office at (713) 467-0990.
            </p>

            <p className="text-gray-600 text-sm italic mt-8">
              This is a placeholder privacy policy. Please update with your actual HIPAA-compliant privacy policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

