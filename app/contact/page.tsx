export default function Contact() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-700 mb-8 text-center">
            Contact Us
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-slate-700 mb-6">
                Office Information
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-700">
                    8588 Katy Freeway, Suite 101<br />
                    Houston, TX 77024
                  </p>
                  <a
                    href="https://maps.google.com/?q=8588+Katy+Freeway,+Suite+101,+Houston,+TX+77024"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-slate-800 mt-2 inline-block"
                  >
                    View on Google Maps →
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Phone Numbers</h3>
                  <p className="text-gray-700 mb-2">
                    <a
                      href="tel:7134670990"
                      className="text-slate-600 hover:text-slate-800 font-semibold"
                    >
                      (713) 467-0990
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <a
                      href="tel:7134618056"
                      className="text-slate-600 hover:text-slate-800 font-semibold"
                    >
                      (713) 461-8056
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Appointments</h3>
                  <p className="text-gray-700">
                    Same day appointments available!<br />
                    Call us today to schedule your visit.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-slate-600 text-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">
                Call Today to Make an Appointment
              </h2>
              <p className="mb-6 text-lg">
                We're here to help with all your vision care needs. Contact our friendly staff to schedule your appointment.
              </p>
              
              <div className="space-y-4">
                <a
                  href="tel:7134670990"
                  className="block bg-white text-slate-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center"
                >
                  Call (713) 467-0990
                </a>
                <a
                  href="tel:7134618056"
                  className="block bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-500 transition text-center border-2 border-white"
                >
                  Call (713) 461-8056
                </a>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="bg-gray-100 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-slate-700 mb-4 text-center">
              Our Location
            </h2>
            <div className="bg-white p-4 rounded-lg">
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-600 mb-4">
                    8588 Katy Freeway, Suite 101<br />
                    Houston, TX 77024
                  </p>
                  <a
                    href="https://maps.google.com/?q=8588+Katy+Freeway,+Suite+101,+Houston,+TX+77024"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-600 text-white px-6 py-2 rounded-lg hover:bg-slate-700 transition inline-block"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
              {/* Note: You can embed an actual Google Map here by adding an iframe with the embed URL */}
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-slate-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-slate-700 mb-4">
              We're Here to Help
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              When you enter Dr. Goffman's office, you are always greeted with cheer, and his friendly staff goes out of their way to make sure you feel comfortable and secure.
            </p>
            <p className="text-gray-700 leading-relaxed">
              For more than 35 years, we've been providing Houston with exceptional vision care. Your vision is our priority, and we're committed to providing you with the best possible care using the latest technology and techniques.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

