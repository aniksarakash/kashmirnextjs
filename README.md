# Kashmir Landing Page

A modern, responsive landing page for Kashmir tourism packages built with Next.js and Tailwind CSS.

## Features

- Responsive design for all device sizes
- Fast loading with optimized images
- SEO-friendly structure
- Contact form with validation
- WhatsApp integration
- Modern UI with animations
- Properly centered hero content with video background

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

To build the application for production:

```bash
npm run build
# or
yarn build
```

The output will be in the `out` directory, ready for deployment.

## Deployment

### GitHub Pages (Current Deployment)

This project is currently deployed on GitHub Pages. The deployment is automated using GitHub Actions.

1. Push your code to the GitHub repository
2. GitHub Actions will automatically build and deploy the site
3. The site will be available at `https://aniksarakash.github.io/kashmirnextjs/`

To set up GitHub Pages deployment:

1. Create a `.github/workflows/deploy.yml` file with the appropriate GitHub Actions configuration
2. Configure `next.config.js` with the correct `basePath` and `assetPrefix`
3. Push the changes to GitHub

### Vercel

Alternatively, you can deploy your Next.js app using the [Vercel Platform](https://vercel.com/new).

1. Push your code to a Git repository (GitHub, GitLab, BitBucket)
2. Import the project in Vercel
3. Vercel will detect Next.js and set up the optimal build settings automatically

### Netlify

1. Push your code to a Git repository
2. Sign up or log in to Netlify
3. Import your repository
4. Set build command to `npm run build` and publish directory to `out`
5. Click "Deploy site"

### cPanel

1. Build the project locally with `npm run build`
2. Upload the contents of the `out` directory to your hosting via FTP or cPanel File Manager
3. Configure .htaccess if needed

## WordPress Integration

This landing page can be integrated with WordPress in several ways:

1. **Headless WordPress**: Use WP REST API to fetch content
2. **Subdomain/Separate Hosting**: Host the Next.js app on a subdomain
3. **Reverse Proxy**: Configure server to serve the Next.js app under a specific path

## Customization

### Changing Colors

Edit the `tailwind.config.js` file to update the color scheme:

```js
theme: {
  extend: {
    colors: {
      primary: '#0078C7',  // Change this to your primary color
      secondary: '#32A852', // Change this to your secondary color
    },
  },
},
```

### Updating Content

Most content can be updated directly in the `app/page.jsx` file.

## Recent Updates

### UI/UX Improvements (April 2025)

1. Fixed styling issues with text elements on colored backgrounds
2. Improved readability by adding semi-transparent backgrounds with backdrop blur
3. Created a new FAQ component with better styling and accessibility
4. Enhanced section titles and subtitles to work well on any background
5. Standardized color usage across the site for better consistency

### GitHub Pages Deployment Fixes (March 2025)

Several fixes have been implemented to ensure proper deployment on GitHub Pages:

1. Added placeholder files for missing media assets to prevent 404 errors
2. Modified the VideoBackground component to gracefully handle missing files
3. Updated webpack configuration in next.config.js to fix JavaScript loading issues
4. Added custom pages directory with _app.js, _document.js, and 404.js for better routing
5. Configured proper asset paths for GitHub Pages deployment

## Image and Video Guide

This comprehensive guide provides detailed instructions for formatting, optimizing, and placing images and videos in the Kashmir Next.js project.

### Directory Structure

All media assets should be organized in the `public` directory as follows:

```
public/
├── images/
│   ├── hero/
│   │   ├── hero-bg.jpg
│   │   └── hero-mobile.jpg
│   ├── packages/
│   │   ├── package1.jpg
│   │   ├── package2.jpg
│   │   └── package3.jpg
│   ├── gallery/
│   │   ├── gallery1.jpg
│   │   ├── gallery2.jpg
│   │   └── ...
│   ├── testimonials/
│   │   ├── person1.jpg
│   │   ├── person2.jpg
│   │   └── ...
│   └── icons/
│       ├── icon1.svg
│       └── ...
├── videos/
│   ├── hero-bg.mp4
│   ├── hero-bg.webm
│   └── ...
└── favicon.ico
```

### Image Specifications

#### Hero Section Images

| Image | Dimensions | Format | File Size | Purpose |
|-------|------------|--------|-----------|----------|
| hero-bg.jpg | 1920×1080px | JPEG | < 300KB | Desktop hero background |
| hero-mobile.jpg | 768×1024px | JPEG | < 150KB | Mobile hero background |

#### Package Images

| Image | Dimensions | Format | File Size | Purpose |
|-------|------------|--------|-----------|----------|
| package1.jpg | 600×400px | JPEG | < 100KB | Package card image |
| package2.jpg | 600×400px | JPEG | < 100KB | Package card image |
| package3.jpg | 600×400px | JPEG | < 100KB | Package card image |

#### Gallery Images

| Image | Dimensions | Format | File Size | Purpose |
|-------|------------|--------|-----------|----------|
| gallery1.jpg | 800×600px | JPEG | < 150KB | Gallery image |
| gallery2.jpg | 800×600px | JPEG | < 150KB | Gallery image |
| gallery3.jpg | 800×600px | JPEG | < 150KB | Gallery image |

#### Testimonial Images

| Image | Dimensions | Format | File Size | Purpose |
|-------|------------|--------|-----------|----------|
| person1.jpg | 150×150px | JPEG | < 50KB | Testimonial avatar |
| person2.jpg | 150×150px | JPEG | < 50KB | Testimonial avatar |

#### Icons

| Image | Dimensions | Format | File Size | Purpose |
|-------|------------|--------|-----------|----------|
| icon1.svg | Varies | SVG | < 10KB | UI icons |

### Image Optimization Guidelines

1. **Use Next.js Image Component**: Always use the Next.js `Image` component for optimal loading:

```jsx
import Image from 'next/image';

<Image
  src="/images/packages/package1.jpg"
  alt="Kashmir Package"
  width={600}
  height={400}
  className="rounded-lg"
/>
```

2. **Image Formats**:
   - Use JPEG for photographs
   - Use PNG for images requiring transparency
   - Use SVG for icons and simple graphics
   - Use WebP when possible for better compression (with JPEG/PNG fallbacks)

3. **Responsive Images**: Provide multiple sizes for different viewports:

```jsx
<Image
  src="/images/hero/hero-bg.jpg"
  alt="Kashmir Mountains"
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  priority
  className="object-cover"
/>
```

4. **Lazy Loading**: Most images are lazy-loaded by default with the Next.js Image component. Use `priority` attribute only for above-the-fold images.

5. **Image Compression Tools**:
   - [TinyPNG](https://tinypng.com/) - For PNG and JPEG compression
   - [Squoosh](https://squoosh.app/) - For advanced image compression
   - [SVGOMG](https://jakearchibald.github.io/svgomg/) - For SVG optimization

### Video Specifications

#### Hero Background Video

| Video | Dimensions | Format | File Size | Duration | Purpose |
|-------|------------|--------|-----------|----------|----------|
| hero-bg.mp4 | 1920×1080px | MP4 (H.264) | < 5MB | 10-15 sec | Desktop hero background |
| hero-bg.webm | 1920×1080px | WebM (VP9) | < 3MB | 10-15 sec | Desktop hero background (alternative format) |
| hero-mobile.mp4 | 768×1024px | MP4 (H.264) | < 3MB | 10-15 sec | Mobile hero background |

### Video Optimization Guidelines

1. **Video Compression**:
   - Use H.264 codec for MP4 files
   - Use VP9 codec for WebM files
   - Target bitrate: 1500-2500 kbps for 1080p
   - Audio: AAC, 128 kbps, stereo (or remove audio for background videos)

2. **Video Implementation**:

```jsx
const VideoBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/videos/hero-bg.webm" type="video/webm" />
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
        {/* Fallback image if video doesn't load */}
        <Image
          src="/images/hero/hero-bg.jpg"
          alt="Kashmir Mountains"
          fill
          className="object-cover"
          priority
        />
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    </div>
  );
};
```

3. **Video Compression Tools**:
   - [HandBrake](https://handbrake.fr/) - Free and open-source video transcoder
   - [FFmpeg](https://ffmpeg.org/) - Command-line tool for video processing
   - [Shotcut](https://www.shotcut.org/) - Free, open-source video editor

4. **Performance Considerations**:
   - Always include a poster image
   - Use `preload="none"` for non-critical videos
   - Consider not loading videos on mobile devices or slow connections
   - Keep videos short and loop them instead of using long videos
   - Implement lazy loading for videos below the fold

### Responsive Image Implementation

#### For Hero Section

```jsx
const Hero = () => {
  return (
    <section className="relative h-screen">
      {/* Desktop Image */}
      <div className="hidden md:block relative w-full h-full">
        <Image
          src="/images/hero/hero-bg.jpg"
          alt="Kashmir Mountains"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Mobile Image */}
      <div className="block md:hidden relative w-full h-full">
        <Image
          src="/images/hero/hero-mobile.jpg"
          alt="Kashmir Mountains"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover Kashmir</h1>
          <p className="text-xl mb-8">Experience the paradise on earth</p>
          <button className="btn-primary">Explore Packages</button>
        </div>
      </div>
    </section>
  );
};
```

### Image Placeholder Strategy

Use blur placeholders for a better user experience while images load:

```jsx
import Image from 'next/image';

<Image
  src="/images/packages/package1.jpg"
  alt="Kashmir Package"
  width={600}
  height={400}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AL+AD//Z"
  className="rounded-lg"
/>
```

### Common Issues and Solutions

1. **Images Not Loading**:
   - Check file paths are correct
   - Verify image exists in the public directory
   - Ensure proper dimensions are specified

2. **Slow Image Loading**:
   - Compress images further
   - Use WebP format
   - Implement proper lazy loading
   - Consider using a CDN

3. **Videos Not Playing**:
   - Ensure video formats are supported by the browser
   - Check autoPlay, muted, and playsInline attributes
   - Verify file paths
   - Provide fallback image

4. **Mobile Performance Issues**:
   - Use smaller images for mobile devices
   - Consider not loading videos on mobile
   - Implement responsive image loading

### Best Practices Summary

1. **Always optimize images** before adding them to the project
2. **Use appropriate dimensions** for each context
3. **Implement responsive images** with different sizes for different viewports
4. **Use Next.js Image component** for automatic optimization
5. **Provide WebP alternatives** when possible
6. **Keep videos short and optimized** for web delivery
7. **Include fallbacks** for videos and modern image formats
8. **Use SVGs for icons** and simple graphics
9. **Implement blur placeholders** for better loading experience
10. **Consider accessibility** by providing proper alt text for all images

### Hero Section Alignment Fix

The hero section has been updated to ensure proper vertical and horizontal centering of content. The following changes were made:

1. Removed unnecessary top padding in the Hero section
2. Eliminated negative margins in the content container
3. Improved content positioning in VideoBackground component

These changes ensure consistent alignment across different screen sizes and browsers.

## Developer Notes

- **Anik Sarker Akash** - Fixed UI/UX issues with text on colored backgrounds (April 2025)
- **Anik Sarker Akash** - Implemented GitHub Pages deployment fixes and optimizations (March 2025)
- **Anik Sarker Akash** - Fixed hero section alignment issues and improved responsive behavior
- **Anik Sarker Akash** - Created comprehensive assets guide for image and video placement

## License

This project is licensed under the MIT License.
