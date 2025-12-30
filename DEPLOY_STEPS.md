# Deployment Steps - Quick Guide

## Step 1: Create GitHub Account (if you don't have one)
1. Go to https://github.com
2. Click "Sign up" (top right)
3. Follow the prompts to create your account (free)

## Step 2: Create a New Repository on GitHub
1. After signing in, click the "+" icon (top right)
2. Select "New repository"
3. Name it: `goffman-oph-web` (or any name you like)
4. Leave it as **Public** (free, and fine for this project)
5. **DON'T** check "Initialize with README" (we already have files)
6. Click "Create repository"

## Step 3: Push Your Code to GitHub
Open Terminal and run these commands (copy/paste one at a time):

```bash
cd /Users/liamczelusta/Desktop/GoffmanOphWeb

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - Dr. Goffman website"

# Connect to GitHub (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/goffman-oph-web.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Note:** When you run `git push`, GitHub will ask you to authenticate:
- You might need to create a Personal Access Token
- Or use GitHub Desktop app (easier option)

**Easier Alternative:** If the command line is confusing, download GitHub Desktop:
- Go to https://desktop.github.com
- Install it
- Sign in with your GitHub account
- Click "Add" → "Add Existing Repository"
- Select the `/Users/liamczelusta/Desktop/GoffmanOphWeb` folder
- Click "Publish repository"

## Step 4: Deploy to Vercel
1. Go to https://vercel.com
2. Click "Sign up" (top right)
3. Choose "Continue with GitHub" (easiest option)
4. Authorize Vercel to access your GitHub account
5. Click "Add New..." → "Project"
6. Find your repository (`goffman-oph-web`) in the list
7. Click "Import"
8. Vercel will auto-detect Next.js settings - **don't change anything**
9. Click "Deploy"
10. Wait 1-2 minutes for it to build
11. Your site will be live! You'll get a URL like: `goffman-oph-web.vercel.app`

## Step 5: Making Changes Later
1. Edit files locally
2. Commit and push to GitHub (or use GitHub Desktop)
3. Vercel automatically redeploys! ✨

## That's it!
Your website is now live and you can share the URL with Dr. Goffman!

