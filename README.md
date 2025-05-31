# Eclipsing Binary - Official Website

A modern, responsive website for electronic music artist Eclipsing Binary, built with Next.js 14+ and optimized for Vercel's free tier.

## 🎵 About Eclipsing Binary

Eclipsing Binary creates immersive electronic soundscapes that blend ambient textures with experimental beats. Drawing inspiration from cosmic phenomena and digital landscapes, each track is a journey through sound and space.

## 🚀 Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel
- **Audio**: HTML5 audio elements & embedded players

## 📁 Project Structure

```
/app                    # Next.js App Router pages
  /globals.css         # Global styles with Tailwind
  /layout.tsx          # Root layout with metadata
  /page.tsx           # Homepage
  /about/page.tsx     # About page
  /music/page.tsx     # Music/discography page
  /shows/page.tsx     # Shows/events page
  /contact/page.tsx   # Contact page
/components            # Reusable React components
  /ui/               # shadcn/ui components
  /sections/         # Page sections (Hero, About, etc.)
  /navigation.tsx    # Site navigation
  /footer.tsx        # Site footer
/lib                  # Utility functions and data
  /utils.ts          # Helper functions
  /data.ts           # Static site data
/public              # Static assets
  /images/           # Optimized images
  /audio/           # Audio files (if self-hosting)
```

## 🛠️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ebwebsite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Social Media Links

- **Minds**: https://www.minds.com/eclipsingbinary/
- **T2**: https://app.t2.world/u/eclipsingbinary
- **Arena Social**: https://arena.social/EclipsingB
- **Bandcamp**: https://eclipsingbinary.bandcamp.com/
- **Warpcast**: https://warpcast.com/eclipsingbinary
- **Hey.xyz**: https://hey.xyz/u/eclipsingbinary
- **MintMe**: https://www.mintme.com/token/ECLIPSE
- **Grill**: https://grillapp.net/@eclipsingbinary?ref=4913
- **Spinamp**: https://app.spinamp.xyz/artist/eclipsing-binary-1701854521560
- **Gleev Music**: https://gleev.xyz/channel/7731?tab=Videos
- **Gleev Extra**: https://gleev.xyz/channel/7693?tab=Videos

## 🌐 Domain

Official website: **https://eclipsingbinary.net/**

## 🎯 Features

- ✅ Responsive design (mobile-first)
- ✅ Dark/light mode toggle
- ✅ Optimized for Vercel free tier
- ✅ SEO optimized with proper metadata
- ✅ Audio player integration
- ✅ Social media integration
- ✅ Performance optimized (Core Web Vitals)
- ✅ Accessibility compliant
- ✅ TypeScript for type safety

## 📊 Performance Targets

- **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Lighthouse Score**: 90+ in all categories
- **Bundle Size**: < 200KB main bundle
- **Load Time**: First contentful paint < 1.5s

## 🚀 Deployment

This project is optimized for Vercel deployment:

1. **Connect to Vercel**
   - Import project to Vercel
   - Connect your GitHub repository
   - Configure domain (eclipsingbinary.net)

2. **Environment Variables**
   ```
   GOOGLE_SITE_VERIFICATION=your_verification_code
   ```

3. **Build & Deploy**
   ```bash
   npm run build
   ```

## 📝 Content Management

All site content is managed through static files in `/lib/data.ts`:

- Artist information
- Social media links
- Music releases
- Show dates
- Navigation menu

## 🎨 Customization

The design system uses Tailwind CSS with custom CSS variables for theming. Colors and spacing can be customized in:

- `tailwind.config.js` - Tailwind configuration
- `app/globals.css` - CSS custom properties
- `/lib/data.ts` - Site content and data

## 🔧 Development Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
npm run type-check # Run TypeScript type checking
```

## 📄 License

This project is for Eclipsing Binary's official website. All music and content rights reserved.

---

Built with ❤️ for the electronic music community 