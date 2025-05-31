# Eclipsing Binary Website Setup Guide

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Environment Variables

Create a `.env.local` file in the root directory with:

```
GOOGLE_SITE_VERIFICATION=your_verification_code_here
NEXT_PUBLIC_GA_ID=your_google_analytics_id (optional)
```

## Next Steps

1. **Add your content** - Update `/lib/data.ts` with your information
2. **Add images** - Place optimized images in `/public/images/`
3. **Customize styling** - Modify colors in `tailwind.config.js` and `app/globals.css`
4. **Deploy to Vercel** - Connect your GitHub repository to Vercel

## Important Notes

- All social media links are already configured in `/lib/data.ts`
- The site is optimized for Vercel's free tier
- Audio files should be compressed (MP3, AAC) and placed in `/public/audio/`
- Prefer embedded players (Bandcamp, Spotify) over self-hosting audio

## Domain Configuration

The site is configured for **https://eclipsingbinary.net/**

Update the domain in:
- `app/layout.tsx` (metadata)
- Vercel dashboard (custom domain settings) 