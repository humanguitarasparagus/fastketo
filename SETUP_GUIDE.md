# FastKeto Setup Guide - Start Here! 🚀

Welcome to your FastKeto project! This guide will walk you through getting it running locally, pushing to GitHub, and deploying to Vercel.

## 📦 What's Included

Your project structure:
```
fastketo/
├── app/                    # All pages (homepage, chain pages, etc.)
├── data/                   # Chain data (McDonald's template included)
├── lib/                    # TypeScript types
├── public/                 # Static files (add logos here later)
├── README.md               # Full documentation
├── DATA_TEMPLATE.csv       # Google Sheets template for data collection
└── package.json            # Dependencies
```

---

## 🎯 Step 1: Get It Running Locally (10 mins)

### Download the Project

1. Download the `fastketo` folder from this chat
2. Unzip it somewhere on your computer (e.g., `~/Projects/fastketo`)
3. Open Terminal (Mac) or Command Prompt (Windows)
4. Navigate to the folder:
   ```bash
   cd ~/Projects/fastketo
   ```

### Install Dependencies

```bash
npm install
```

This downloads Next.js, React, Tailwind, and TypeScript. Takes 2-3 minutes.

### Start the Development Server

```bash
npm run dev
```

You should see:
```
  ▲ Next.js 14.2.0
  - Local:        http://localhost:3000
```

### View the Site

Open your browser and go to: **http://localhost:3000**

You should see:
- Clean homepage with FastKeto branding
- McDonald's listed as the only chain
- Top keto picks displayed
- Working navigation

**Try this:**
- Click on "McDonald's" → See the full chain page with all menu items
- Click "Chains" in nav → See chains directory
- Everything should look clean and fast!

---

## 🎨 Step 2: Test & Iterate on Design (20 mins)

### Make Some Changes

The beauty of this setup: **every time you save a file, the browser auto-refreshes.**

**Try editing the homepage:**

1. Open `app/page.tsx` in your code editor
2. Change line 27 (the h1 text):
   ```tsx
   <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-900 mb-4">
     Your New Headline Here
   </h1>
   ```
3. Save the file
4. Browser refreshes automatically - you'll see your change!

**Try changing colors:**

1. Open `tailwind.config.ts`
2. Change the primary green color (line 20):
   ```typescript
   500: '#1D4F2F', // Try a darker green
   ```
3. Save → All primary colors update instantly!

### Experiment Freely

- All files are well-commented
- Can't break anything (just reload if something goes wrong)
- Use `Cmd+Z` / `Ctrl+Z` to undo changes

**Things to try:**
- Adjust spacing in `app/globals.css`
- Change font sizes in homepage
- Modify card layouts
- Test mobile view (shrink browser window)

---

## 📊 Step 3: Set Up Data Collection (15 mins)

### Import the Google Sheets Template

1. Open Google Sheets
2. Create new spreadsheet
3. Open the `DATA_TEMPLATE.csv` file from the project
4. Copy all content (Cmd+A, Cmd+C)
5. Paste into Google Sheet (Cmd+V)

You should see:
- Column headers for all data fields
- 3 sample McDonald's items (already filled in)
- Formula in "Net Carbs (AUTO)" column
- Instructions at the bottom

### Test the Template

Try adding a new item:
1. Add a new row
2. Fill in: KFC, Grilled Chicken (No Skin), chicken, etc.
3. Enter: Total Carbs = 2, Fiber = 0
4. The Net Carbs column auto-calculates: 2g ✓

**This is your working spreadsheet.** Keep it open as you research chains.

---

## 🐙 Step 4: Push to GitHub (15 mins)

### Create GitHub Repo

1. Go to github.com (create account if needed)
2. Click "+" → "New repository"
3. Name it: `fastketo`
4. Make it **Private**
5. Don't initialize with README (you already have one)
6. Click "Create repository"

### Link Your Local Project

GitHub will show you commands. Run these in Terminal:

```bash
# Still in your fastketo folder
git init
git add .
git commit -m "Initial FastKeto build"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/fastketo.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

**First time using git?** You might need to:
```bash
git config --global user.email "your@email.com"
git config --global user.name "Your Name"
```

### Verify It Worked

Refresh your GitHub repo page - you should see all your files!

---

## 🚀 Step 5: Deploy to Vercel (10 mins)

### Connect Vercel to GitHub

1. Go to **vercel.com**
2. Click "Sign Up" → Choose "Continue with GitHub"
3. Authorize Vercel to access your GitHub
4. Click "Import Project"
5. Find your `fastketo` repo → Click "Import"

### Configure Project

Vercel auto-detects Next.js. Just:
- Project Name: `fastketo` ✓
- Framework Preset: Next.js ✓
- Root Directory: `./` ✓
- Click **"Deploy"**

Vercel builds your site (takes 2-3 minutes).

### Your Site Is Live!

When done, Vercel shows:
```
🎉 Congratulations! Your project is live.
```

You'll get a URL like: `fastketo-abc123.vercel.app`

**Click it** - your site is now on the internet!

### Connect Your Domain

1. In Vercel dashboard → Go to your project
2. Click "Settings" → "Domains"
3. Add domain: `fastketo.co`
4. Vercel gives you DNS instructions
5. Go to your Vercel domain settings (where you bought the domain)
6. Update the DNS records as Vercel instructs
7. Wait 10-60 minutes for DNS to propagate

**Then `fastketo.co` will show your site!**

---

## 🎯 Step 6: Your First Update (Test the Workflow)

Let's add a simple update to see the full cycle:

### Make a Small Change

1. Open `app/page.tsx` locally
2. Change something small (e.g., update a text string)
3. Save the file

### Push to GitHub

```bash
git add .
git commit -m "Update homepage text"
git push
```

### Watch Vercel Auto-Deploy

1. Go to vercel.com → Your project
2. You'll see a new deployment starting automatically
3. Wait 1-2 minutes
4. Your live site updates!

**This is your workflow:**
- Edit files locally
- Test at localhost:3000
- When happy: `git push`
- Vercel auto-deploys
- Live site updates

---

## ✅ You're All Set!

### What You've Accomplished:

✓ Project running locally  
✓ Design iterated and tested  
✓ Data template ready  
✓ Code on GitHub  
✓ Site live on Vercel  
✓ Domain connected (or will be soon)

### Next Steps (Your Choice):

**Option A: Add More Chains (Recommended First)**
1. Research KFC nutrition data
2. Fill in Google Sheet template
3. Copy data to new `data/kfc.ts` file
4. Import in `data/index.ts`
5. Push to GitHub → Auto-deploys!

**Option B: Polish Design**
- Add actual chain logos (SVG files in `public/logos/`)
- Adjust colors/spacing
- Test mobile experience
- Add favicon

**Option C: SEO Setup**
- Create Google Search Console account
- Submit sitemap
- Add Google Analytics
- Write meta descriptions

---

## 🆘 Troubleshooting

### "npm command not found"

You need to install Node.js:
1. Go to nodejs.org
2. Download LTS version
3. Install it
4. Restart Terminal
5. Try `npm install` again

### "Port 3000 already in use"

Something else is using that port:
```bash
npm run dev -- -p 3001
```
Then go to `localhost:3001`

### Site looks broken after changes

1. Stop server (Ctrl+C in Terminal)
2. Delete `.next` folder
3. Run `npm run dev` again

### Git errors

If git commands fail:
```bash
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```

---

## 📝 Quick Reference

**Start dev server:**
```bash
npm run dev
```

**Build for production:**
```bash
npm run build
```

**Push changes:**
```bash
git add .
git commit -m "Description of changes"
git push
```

**Key files to edit:**
- `app/page.tsx` - Homepage
- `data/[chain].ts` - Chain data
- `tailwind.config.ts` - Colors/design
- `app/chains/[slug]/page.tsx` - Chain page template

---

## 🎓 Resources

- **Next.js Docs:** nextjs.org/docs
- **Tailwind CSS:** tailwindcss.com/docs
- **Vercel Help:** vercel.com/docs
- **Project README:** See `README.md` in your project

---

## 💬 Questions?

Reference the full `README.md` file in your project for:
- Detailed adding new chains instructions
- Design system reference
- Component documentation
- Advanced features

**You've got this!** The hard part (setup) is done. Now it's just data entry and iteration.

Ready to add KFC? Open that Google Sheet! 🍗
