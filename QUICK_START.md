# Quick Start Guide

## Step 1: Install Node.js

1. Go to **https://nodejs.org/**
2. Download the **LTS version** (Long Term Support - the green button)
3. Run the installer and follow the prompts
4. After installation, **restart your terminal**

## Step 2: Verify Installation

Open Terminal and run:
```bash
node --version
npm --version
```

You should see version numbers (e.g., v18.17.0)

## Step 3: Install Dependencies

In Terminal, navigate to the project folder:
```bash
cd /Users/liamczelusta/Desktop/GoffmanOphWeb
npm install
```

This will install all the packages needed. It may take 1-2 minutes.

## Step 4: Test Locally (Optional but Recommended)

Run the development server:
```bash
npm run dev
```

You should see: "Ready - started server on 0.0.0.0:3000"

Open your browser and go to: **http://localhost:3000**

You should see the website! Press `Ctrl+C` in the terminal to stop the server.

## Step 5: Deploy to Vercel

### Option A: Via GitHub (Recommended - Easiest)

1. **Create a GitHub account** (if you don't have one):
   - Go to https://github.com and sign up (free)

2. **Initialize Git and push to GitHub:**
   ```bash
   cd /Users/liamczelusta/Desktop/GoffmanOphWeb
   git init
   git add .
   git commit -m "Initial commit"
   ```
   
   Then create a new repository on GitHub:
   - Go to github.com, click the "+" icon → "New repository"
   - Name it "goffman-oph-web" (or any name)
   - Don't initialize with README
   - Copy the repository URL (e.g., https://github.com/YOUR_USERNAME/goffman-oph-web.git)
   
   Back in Terminal:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/goffman-oph-web.git
   git branch -M main
   git push -u origin main
   ```
   (You'll need to authenticate - GitHub will guide you)

3. **Deploy to Vercel:**
   - Go to https://vercel.com
   - Sign up (free) - you can use "Continue with GitHub"
   - Click "Add New..." → "Project"
   - Import your repository (goffman-oph-web)
   - Click "Deploy" (leave all settings as default)
   - Wait 1-2 minutes
   - Your site will be live! You'll get a URL like: your-site.vercel.app

### Option B: Via Vercel CLI (Alternative)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   cd /Users/liamczelusta/Desktop/GoffmanOphWeb
   vercel
   ```
   - Follow the prompts
   - Sign up/login if needed
   - Your site will deploy!

## Step 6: Making Changes Later

1. Edit files in the `app/` folder
2. Test locally: `npm run dev`
3. Commit and push to GitHub (if using Option A)
4. Vercel will automatically redeploy!

## Need Help?

- The website files are in the `app/` folder
- Edit any `.tsx` file to change content
- All changes are easy to make

