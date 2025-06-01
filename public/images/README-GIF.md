# GIF Background Setup

## How to Add Your GIF Background

1. **Save your GIF file** as `background.gif` in this folder (`/public/images/`)

2. **GIF Optimization Tips:**
   - **File size**: Keep under 5MB for good loading performance
   - **Dimensions**: Recommended 1920x1080 or higher for full-screen coverage
   - **Frame rate**: 15-24 fps is usually sufficient
   - **Loop**: Make sure it loops seamlessly
   - **Colors**: Reduce color palette if possible to decrease file size

## Current Setup

The page is configured to look for: `/public/images/background.gif`

If the GIF doesn't load, it will fallback to a gradient background.

## Suggested GIF Themes for "Eclipsing Binary"

- **Cosmic themes**: Nebulae, star fields, galaxy rotation
- **Abstract geometric**: Flowing particles, digital patterns
- **Space-time concepts**: Wormholes, cosmic phenomena
- **Electronic/Digital**: Circuit patterns, data flows, glitch effects

## Tools for GIF Optimization

- **Online**: ezgif.com, giphy.com
- **Software**: After Effects, Photoshop, GIMP
- **Command line**: ffmpeg, gifsicle

## Testing

After adding your GIF:
1. Refresh the page at http://localhost:3000
2. Check browser dev tools for any loading errors
3. Test on different screen sizes
4. Verify text remains readable

## Fallback

If no GIF is added, the page will show a purple gradient background automatically. 