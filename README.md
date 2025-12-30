# Joel H. Goffman, M.D., P.A. - Ophthalmology Website

Modern website for Dr. Joel Goffman's ophthalmology practice in Houston, TX.

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

1. Create a free account at [vercel.com](https://vercel.com)
2. Install Vercel CLI (optional):
```bash
npm i -g vercel
```

3. Deploy:
   - Option A: Push to GitHub and connect repo to Vercel (recommended)
   - Option B: Use Vercel CLI: `vercel`

The site will automatically deploy and you'll get a URL like `your-site.vercel.app`

## Making Changes

All content is in the `app/` directory:
- `app/page.tsx` - Home page
- `app/about-us/page.tsx` - About page
- `app/services/page.tsx` - Services page
- `app/contact/page.tsx` - Contact page
- `app/eyewear/page.tsx` - Eyewear page
- `app/insurance/page.tsx` - Insurance page
- `app/patient-forms/page.tsx` - Patient forms page

Components are in the `components/` directory:
- `components/Header.tsx` - Navigation header
- `components/Footer.tsx` - Footer

To update content, simply edit the relevant page files and redeploy.

## Project Structure

```
.
├── app/              # Next.js app directory (pages)
├── components/       # React components
├── public/          # Static files (add PDF forms here)
├── package.json     # Dependencies
└── README.md        # This file
```

## Technologies

- Next.js 14 (React framework)
- TypeScript
- Tailwind CSS
- Responsive design

## Contact Information

- Phone: (713) 467-0990, (713) 461-8056
- Address: 8588 Katy Freeway, Suite 101, Houston, TX 77024

