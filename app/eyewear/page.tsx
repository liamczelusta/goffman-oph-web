import Link from 'next/link';
import Image from 'next/image';
import { RectangleStackIcon } from '@heroicons/react/24/outline';

export default function Eyewear() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-700 mb-8 text-center">
            Eyewear Options
          </h1>

          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <RectangleStackIcon className="w-16 h-16 text-slate-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-700 mb-4">
                Southwest Optical
              </h2>
              <p className="text-xl text-gray-600">
                Adjacent to our office
              </p>
            </div>

            {/* Image */}
            <div className="relative h-48 mb-6 rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800&h=400&fit=crop"
                alt="Designer eyewear selection"
                fill
                className="object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6 leading-relaxed text-center">
                <strong>Southwest Optical</strong>, located adjacent to our office, offers a wide selection of designer eyewear brands.
              </p>

              <div className="bg-slate-100 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-slate-700 mb-3">
                  Designer Eyewear Selection
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Southwest Optical provides a wide selection of designer frames to complement your prescription. Whether you're looking for the latest trends or classic styles, they have options to suit every taste and budget.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-700 mb-3">
                  Convenient Location
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Since Southwest Optical is located adjacent to Dr. Goffman's office, you can easily transition from your eye exam to selecting your perfect frames all in one convenient location.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  From your exam to the fitting of your lenses, you will work directly with Dr. Goffman the entire time. After your prescription is determined, you can conveniently visit Southwest Optical to find the perfect frames.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-bold text-slate-700 mb-4">
                  Getting Your Prescription
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dr. Goffman will provide you with your prescription after your comprehensive eye examination. Once you have your prescription, you can visit Southwest Optical to choose from their extensive selection of designer eyewear.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our staff can help coordinate your visit to ensure a seamless experience from exam to eyewear selection.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-600 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Schedule Your Eye Exam?
            </h2>
            <p className="mb-6 text-lg">
              Start your journey to better vision and great eyewear today.
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
