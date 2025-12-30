import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Practice Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Joel H. Goffman, M.D., P.A.</h3>
            <p className="text-gray-300 mb-2">Houston Ophthalmology</p>
            <p className="text-gray-300 mb-2">
              8588 Katy Freeway, Suite 101<br />
              Houston, TX 77024
            </p>
            <Link href="/contact" className="text-slate-400 hover:text-slate-300">
              View Map
            </Link>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Call Today</h3>
            <p className="text-gray-300 mb-2">
              <a href="tel:7134670990" className="hover:text-slate-300 transition">
                713.467.0990
              </a>
            </p>
            <p className="text-gray-300">
              <a href="tel:7134618056" className="hover:text-slate-300 transition">
                (713) 461-8056
              </a>
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-slate-300 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-gray-300 hover:text-slate-300 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-slate-300 transition">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-slate-300 transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy" className="hover:text-slate-300 transition">
              Privacy Policy
            </Link>
            <Link href="/sitemap" className="hover:text-slate-300 transition">
              Site Map
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

