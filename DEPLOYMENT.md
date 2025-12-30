# Deployment Guide

## Quick Start - Deploying to Vercel

### Option 1: Deploy via GitHub (Recommended)

1. **Install Node.js** (if not already installed)
   - Download from [nodejs.org](https://nodejs.org/)
   - Install version 18 or higher

2. **Create a GitHub account** (if you don't have one)
   - Go to [github.com](https://github.com) and sign up (free)

3. **Install Git** (if not already installed)
   - macOS: `brew install git` (if you have Homebrew)
   - Or download from [git-scm.com](https://git-scm.com/)

4. **Initialize Git repository and push to GitHub:**
   ```bash
   cd /Users/liamczelusta/Desktop/GoffmanOphWeb
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   # Create a new repository on GitHub, then:
   git remote add origin https://github.com/YOUR_USERNAME/goffman-oph-web.git
   git push -u origin main
   ```

5. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up (free) - you can use your GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"
   - Your site will be live in ~2 minutes!

6. **Future updates:**
   - Make changes to files
   - Commit and push to GitHub
   - Vercel automatically deploys updates

### Option 2: Deploy via Vercel CLI

1. **Install Node.js** (if not already installed)

2. **Install dependencies:**
   ```bash
   cd /Users/liamczelusta/Desktop/GoffmanOphWeb
   npm install
   ```

3. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

4. **Deploy:**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Sign up/login if needed
   - Your site will be deployed!

### Option 3: Drag & Drop to Netlify (Alternative)

1. **Build the site:**
   ```bash
   npm install
   npm run build
   ```

2. **Create a zip of the `.next` and `public` folders**

3. **Go to [netlify.com](https://netlify.com)** and drag & drop

## Testing Locally First

Before deploying, test the site locally:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000 in your browser
```

## Custom Domain (Optional)

After deploying to Vercel:
1. Go to your project settings in Vercel
2. Click "Domains"
3. Add your custom domain (e.g., eyemdhouston.com)
4. Follow DNS setup instructions

## Making Changes After Deployment

### Simple text/content changes:
1. Edit the file (e.g., `app/page.tsx`)
2. Commit and push to GitHub
3. Vercel automatically redeploys

### Adding PDF forms:
1. Put PDF files in the `public/` folder
2. Update links in `app/patient-forms/page.tsx`:
   ```tsx
   <a href="/your-form.pdf" download>Download Form</a>
   ```

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Contact: The code is structured so changes are easy to make

