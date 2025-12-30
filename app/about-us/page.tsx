import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-700 mb-8 text-center">
            About Us
          </h1>

          {/* Image Section */}
          <div className="relative h-64 mb-8 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=400&fit=crop"
              alt="Modern ophthalmology practice"
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-slate-100 p-8 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-slate-700 mb-4">
                Houston Ophthalmology - Serving Houston for More Than 35 Years
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Trust your eyesight to Dr. Goffman and his highly trained staff, dedicated to providing you with access to the latest in medical technology so that your vision receives the best possible care.
              </p>
              <p className="text-gray-700 leading-relaxed">
                For more than 35 years, the office of Joel Goffman, M.D., P.A. has been providing Houston with exceptional vision care for a wide range of eye conditions.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-700 mb-4">
                Our Practice
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                At Dr. Goffman's vision center, you can take comfort in his knowledgeable and experienced staff. When you enter Dr. Goffman's office, you are always greeted with cheer, and his friendly staff goes out of their way to make sure you feel comfortable and secure.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We are committed to preserving the highest level of safety, comfort and efficiency for all your ophthalmology needs.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-slate-700 mb-4">
                State of the Art Technology
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Dr. Goffman provides his patients with the latest technology available. His team is active in the medical community, staying up-to-date on the latest advances in the field and bringing you the most current techniques and treatments for a variety of vision care requirements.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Advances in vision correction technology have made glasses-free vision possible for nearly everyone. We utilize cutting-edge diagnostic equipment and surgical techniques to ensure the best outcomes for our patients.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-700 mb-4">
                Personalized Care
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                From your exam to the fitting of your lenses, you will work directly with Dr. Goffman the entire time. We believe in providing personalized care tailored to each patient's unique needs and goals.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Your safety is Dr. Goffman's priority. Dr. Goffman and his team work hard to protect one of the most treasured senses of your body. You depend daily on your vision to function, and when something threatens your eyesight, you need immediate medical attention.
              </p>
            </div>

            <div className="bg-slate-600 text-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">
                Schedule Your Appointment
              </h2>
              <p className="mb-4 text-lg">
                For your convenience, Dr. Goffman offers same day appointments. Contact our office to book an appointment today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:7134670990"
                  className="bg-white text-slate-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center"
                >
                  Call (713) 467-0990
                </a>
                <a
                  href="tel:7134618056"
                  className="bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-500 transition text-center border-2 border-white"
                >
                  Call (713) 461-8056
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
