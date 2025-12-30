import Link from 'next/link';

export default function Sitemap() {
  const pages = [
    { href: '/', title: 'Home' },
    { href: '/about-us', title: 'About Us' },
    { href: '/services', title: 'Our Services' },
    { href: '/eyewear', title: 'Eyewear' },
    { href: '/insurance', title: 'Insurance Accepted' },
    { href: '/patient-forms', title: 'New Patient Forms' },
    { href: '/contact', title: 'Contact Us' },
    { href: '/privacy', title: 'Privacy Policy' },
    { href: '/sitemap', title: 'Site Map' },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-700 mb-8">
            Site Map
          </h1>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <ul className="space-y-3">
              {pages.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="text-slate-600 hover:text-slate-800 text-lg font-medium"
                  >
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

