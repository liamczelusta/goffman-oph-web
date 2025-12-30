import Link from 'next/link';
import Image from 'next/image';
import {
  EyeIcon,
  BeakerIcon,
  MagnifyingGlassIcon,
  RectangleStackIcon,
  SparklesIcon,
  HeartIcon,
  ShieldCheckIcon,
  BeakerIcon as LabIcon,
} from '@heroicons/react/24/outline';

export default function Services() {
  const services = [
    {
      title: 'Laser Vision Correction',
      description: 'Dr. Goffman brings years of experience and the latest technology to help you achieve clear vision. LASIK and PRK procedures can correct nearsightedness, farsightedness, and astigmatism, making glasses-free vision possible for many patients.',
      icon: EyeIcon,
    },
    {
      title: 'Cataract Surgery',
      description: 'State-of-the-art cataract surgery using the latest techniques and premium intraocular lenses. Dr. Goffman specializes in restoring clear vision through advanced cataract removal and lens replacement procedures.',
      icon: BeakerIcon,
    },
    {
      title: 'Contact Lenses',
      description: 'From your exam to the fitting of your lenses, you will work directly with Dr. Goffman the entire time. Comprehensive contact lens fitting services for all types of vision correction needs.',
      icon: MagnifyingGlassIcon,
    },
    {
      title: 'Eyewear',
      description: 'Southwest Optical, located adjacent to our office, offers a wide selection of designer eyewear brands. Find the perfect frames to complement your prescription and personal style.',
      icon: RectangleStackIcon,
    },
    {
      title: 'Cosmetic Procedures',
      description: 'Enhance your appearance with our range of cosmetic eye procedures. Professional treatments to address aesthetic concerns around the eyes.',
      icon: SparklesIcon,
    },
    {
      title: 'Upper Eyelid Surgery',
      description: 'Blepharoplasty (upper eyelid surgery) to improve vision and appearance. Dr. Goffman provides expert surgical correction for drooping or excess skin on the upper eyelids.',
      icon: HeartIcon,
    },
    {
      title: 'Shingrix Vaccine for Shingles',
      description: 'Protect yourself from shingles with the Shingrix vaccine. Available at our office to help prevent this painful condition.',
      icon: ShieldCheckIcon,
    },
    {
      title: 'Skinceuticals',
      description: 'Premium skincare products available at our office. Skinceuticals offers advanced formulations for healthy, youthful-looking skin.',
      icon: LabIcon,
    },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-700 mb-4 text-center">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Comprehensive eye care services using the latest technology
          </p>

          {/* Services Image */}
          <div className="relative h-64 mb-12 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1594824476968-48aa8a9d4ccf?w=1200&h=400&fit=crop"
              alt="Ophthalmology services"
              fill
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
                >
                  <div className="flex justify-center mb-4">
                    <IconComponent className="w-12 h-12 text-slate-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-700 mb-3">
                    {service.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-slate-100 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-slate-700 mb-4 text-center">
              The Latest Diagnostic Technology
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed text-center">
              Dr. Goffman's office is equipped with the latest diagnostic technology to ensure accurate assessments and the best possible outcomes for all procedures.
            </p>
            <p className="text-gray-700 leading-relaxed text-center">
              His team is active in the medical community, staying up-to-date on the latest advances in the field and bringing you the most current techniques and treatments for a variety of vision care requirements.
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-700 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-700 mb-6">
              Contact our office to schedule a consultation and learn more about which services are right for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:7134670990"
                className="bg-slate-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-700 transition"
              >
                Call (713) 467-0990
              </a>
              <Link
                href="/contact"
                className="bg-white text-slate-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition border-2 border-slate-600"
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
