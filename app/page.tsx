import Link from 'next/link';
import Image from 'next/image';
import { 
  BeakerIcon, 
  UserIcon, 
  CalendarIcon, 
  HeartIcon,
  ShieldCheckIcon,
  BriefcaseIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-600 to-slate-500 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Houston Ophthalmology
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Serving Houston for More Than 35 Years
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
            <a
              href="tel:7134670990"
              className="bg-white text-slate-700 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition text-lg shadow-lg hover:shadow-xl text-center"
            >
              Call (713) 467-0990
            </a>
            <Link
              href="/contact"
              className="bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-900 transition text-lg shadow-lg hover:shadow-xl text-center"
            >
              Make an Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <BeakerIcon className="w-12 h-12 text-slate-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-700 mb-2">
                Laser Vision Correction Surgery
              </h3>
              <p className="text-gray-600">
                With many years of experience, Dr. Goffman provides his patients with the latest technology available.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <UserIcon className="w-12 h-12 text-slate-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-700 mb-2">
                Work With Dr. Goffman from Start to Finish
              </h3>
              <p className="text-gray-600">
                From your exam to the fitting of your lenses, you will work directly with the doctor the entire time.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <CalendarIcon className="w-12 h-12 text-slate-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-700 mb-2">
                Same Day Appointments Available!
              </h3>
              <p className="text-gray-600">
                Contact our office to book an appointment today.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <HeartIcon className="w-12 h-12 text-slate-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-700 mb-2">
                Committed to Our Patients
              </h3>
              <p className="text-gray-600">
                We preserve the highest level of safety, comfort and efficiency for all your ophthalmology needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&fit=crop"
                alt="Professional eye examination at Dr. Goffman's office"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-700 mb-6 text-center">
              Expert Eye Care You Can Trust
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              For more than 35 years, Dr. Joel Goffman and his highly trained staff have been providing Houston with exceptional vision care. We are dedicated to offering you access to the latest medical technology so your vision receives the best possible treatment.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              When you visit our office, our knowledgeable and experienced staff will welcome you with warmth and professionalism. We go out of our way to ensure you feel comfortable and secure throughout your visit.
            </p>

            <div className="bg-slate-100 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-slate-700 mb-4">
                Vision Care Services We Offer:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center">
                  <span className="text-slate-600 mr-2">✓</span>
                  <span>Laser Vision Correction</span>
                </div>
                <div className="flex items-center">
                  <span className="text-slate-600 mr-2">✓</span>
                  <span>Cataract Surgery</span>
                </div>
                <div className="flex items-center">
                  <span className="text-slate-600 mr-2">✓</span>
                  <span>Contact Lenses</span>
                </div>
                <div className="flex items-center">
                  <span className="text-slate-600 mr-2">✓</span>
                  <span>Eyewear</span>
                </div>
                <div className="flex items-center">
                  <span className="text-slate-600 mr-2">✓</span>
                  <span>Cosmetic Procedures</span>
                </div>
                <div className="flex items-center">
                  <span className="text-slate-600 mr-2">✓</span>
                  <span>Upper Eyelid Surgery</span>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-700 mb-4">
                Advanced Laser Vision Correction
              </h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Ready to reduce or eliminate your dependence on glasses or contacts? Visit Dr. Goffman's office to experience the latest in vision correction technology. Our LASIK and PRK procedures can help you achieve clear vision without the daily maintenance of contact lenses.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our team stays current with the latest advances in the field through active participation in the medical community, ensuring you receive the most up-to-date techniques and treatments available.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-slate-700 mb-4">
                Your Safety is Our Priority
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Dr. Goffman and his team are committed to protecting your vision. We understand that you rely on your eyesight every day, and when your vision is at risk, you need immediate, expert care. Our office provides a safe and comfortable environment where you can confidently address all your vision care needs. For your convenience, we offer same-day appointments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-slate-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <BeakerIcon className="w-10 h-10" />
              </div>
              <p className="font-semibold text-sm">Modern Technology</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <ShieldCheckIcon className="w-10 h-10" />
              </div>
              <p className="font-semibold text-sm">Highest Level of Safety, Comfort & Efficiency</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <UserIcon className="w-10 h-10" />
              </div>
              <p className="font-semibold text-sm">Highly Qualified and Trained Specialist</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <BriefcaseIcon className="w-10 h-10" />
              </div>
              <p className="font-semibold text-sm">Knowledgeable and Friendly Staff</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <ClockIcon className="w-10 h-10" />
              </div>
              <p className="font-semibold text-sm">Same Day Appointments Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-slate-700 mb-3">
                Advanced Technology
              </h3>
              <p className="text-gray-600 mb-4">
                Advances in vision correction technology have made glasses-free vision possible for nearly everyone.
              </p>
              <Link href="/services" className="text-slate-600 hover:text-slate-800 font-semibold">
                Our Services →
              </Link>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-slate-700 mb-3">
                Eyewear Options
              </h3>
              <p className="text-gray-600 mb-4">
                Southwest Optical, located adjacent to our office, offers a wide selection of designer eyewear brands.
              </p>
              <Link href="/eyewear" className="text-slate-600 hover:text-slate-800 font-semibold">
                Learn More →
              </Link>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-slate-700 mb-3">
                New Patient Forms
              </h3>
              <p className="text-gray-600 mb-4">
                Complete your forms before your visit to save time at your appointment.
              </p>
              <Link href="/patient-forms" className="text-slate-600 hover:text-slate-800 font-semibold">
                Download Forms →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
