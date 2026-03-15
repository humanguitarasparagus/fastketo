# FastKeto UK

A clean, simple guide to keto-friendly options at UK fast food chains.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## 📁 Project Structure

```
fastketo/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout with nav/footer
│   ├── globals.css        # Global styles + Tailwind
│   └── chains/[slug]/     # Dynamic chain pages
├── components/            # Reusable React components (add as needed)
├── data/                  # Chain data files
│   ├── index.ts          # Central data export
│   └── mcdonalds.ts      # McDonald's data (template)
├── lib/                   # Utilities and types
│   └── types.ts          # TypeScript interfaces
└── public/               # Static files (logos, images)
```

## 📝 Adding New Chains

### Step 1: Create Data File

Copy `data/mcdonalds.ts` as a template:

```bash
cp data/mcdonalds.ts data/kfc.ts
```

### Step 2: Update Chain Data

Edit the new file with your chain's information. Use the Google Sheets template (see below) to collect data first.

### Step 3: Import in Central File

Add to `data/index.ts`:

```typescript
import { kfcData } from './kfc';

export const chains: Chain[] = [
  mcdonaldsData,
  kfcData,  // Add here
];
```

That's it! The chain will automatically appear on the homepage and have its own page at `/chains/kfc`.

## 📊 Data Collection Workflow

### Use the Google Sheets Template

1. Make a copy of the template (link below)
2. Fill in chain details and menu items
3. Export as CSV or copy data manually to TypeScript file

**Template columns:**
- Chain Name, Item Name, Category, Net Carbs, Protein, Fat, Calories
- Customization Notes, Pro Tips, Price Range, etc.

### Verification Checklist

- [ ] Get data from official chain nutrition calculator
- [ ] Screenshot for records
- [ ] Note source URL and date verified
- [ ] Double-check net carbs calculation (total carbs - fiber)

## 🎨 Design System

### Colors

```css
Primary Green: #2D5F3F (for headers, buttons)
Accent Orange: #FF6B35 (for highlights, CTAs)
Success Green: #7CB342 (for excellent keto ratings)
Neutral Grays: #F5F5F5 to #333333 (backgrounds, text)
```

### Keto Rating System

- **Excellent** (0-5g net carbs): ⭐⭐⭐⭐⭐ Green badge
- **Good** (6-10g net carbs): ⭐⭐⭐⭐ Blue badge
- **Moderate** (11-15g net carbs): ⭐⭐⭐ Orange badge
- **Avoid** (15g+ net carbs): ⭐ Red badge

### Component Classes

Use Tailwind utility classes defined in `globals.css`:

- `.btn-primary` - Primary green button
- `.btn-secondary` - Outlined button
- `.card` - White card with shadow
- `.badge-excellent` - Green badge for excellent keto rating
- `.container-custom` - Centered content container

## 🚢 Deploying to Vercel

### First Time Setup

1. Push code to GitHub:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repo
5. Vercel auto-detects Next.js - just click "Deploy"

### Connect Your Domain

1. In Vercel dashboard, go to your project
2. Settings → Domains
3. Add `fastketo.co`
4. Follow Vercel's instructions to update DNS

### Auto-Deploys

Every time you push to `main`, Vercel automatically rebuilds and deploys. No manual steps needed!

## 📈 Next Steps (After MVP Launch)

### Week 1-2: Core Chains
- [ ] Add KFC data
- [ ] Add Burger King data
- [ ] Add Nando's data
- [ ] Add Five Guys data
- [ ] Add Subway data

### Week 3: Polish
- [ ] Add actual chain logos to `/public/logos/`
- [ ] Create first guide page (Keto Basics)
- [ ] Set up Google AdSense
- [ ] Add Google Analytics

### Week 4: SEO
- [ ] Submit sitemap to Google Search Console
- [ ] Add schema markup to chain pages (FAQ, Menu schemas)
- [ ] Create "Best" comparison pages
- [ ] Write meta descriptions for all pages

### Month 2+
- [ ] Add remaining chains (Starbucks, Costa, etc.)
- [ ] Build search functionality
- [ ] Add filtering by category
- [ ] Consider adding user accounts (save favorites)

## 📄 Files You'll Edit Most

- `data/[chain].ts` - Add new chains here
- `app/page.tsx` - Edit homepage content
- `app/chains/[slug]/page.tsx` - Edit chain page template
- `tailwind.config.ts` - Customize colors/design

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Hosting:** Vercel
- **Data:** JSON/TypeScript files (no database)
- **Analytics:** Google Analytics 4 (to be added)

## 📞 Need Help?

Common issues:

- **Port already in use:** Run `npm run dev -- -p 3001` to use different port
- **Styling not working:** Make sure `globals.css` is imported in `layout.tsx`
- **Data not showing:** Check that chain is exported in `data/index.ts`

## 📜 License

Private project - all rights reserved.
