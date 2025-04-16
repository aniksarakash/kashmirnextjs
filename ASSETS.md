# Assets Guide for Kashmir Landing Page

This guide provides detailed instructions for organizing, formatting, and placing image and video assets in the Kashmir Landing Page project.

## Directory Structure

All static assets should be placed in the appropriate directories under the `public` folder:

```
new-kashmir-landing-page/
└── public/
    ├── images/
    │   ├── logo/
    │   ├── hero/
    │   ├── packages/
    │   ├── gallery/
    │   ├── testimonials/
    │   └── backgrounds/
    └── videos/
        └── hero/
```

## Image Assets

### Required Images

1. **Logo**
   - Path: `public/images/logo/logo.png`
   - Format: PNG with transparent background
   - Size: 200x80px (recommended)
   - Also provide a white version for dark backgrounds: `logo-white.png`

2. **Hero Section**
   - Path: `public/images/hero/hero-bg.jpg`
   - Format: JPEG or WebP
   - Size: 1920x1080px (16:9 ratio)
   - Used as a fallback when video doesn't load

3. **Package Cards**
   - Path: `public/images/packages/package-[name].jpg`
   - Format: JPEG or WebP
   - Size: 600x400px
   - Required images:
     - `package-basic.jpg`
     - `package-standard.jpg`
     - `package-premium.jpg`
     - `package-luxury.jpg`

4. **Gallery Images**
   - Path: `public/images/gallery/gallery-[number].jpg`
   - Format: JPEG or WebP
   - Size: 800x600px (landscape) or 600x800px (portrait)
   - Provide at least 6-8 high-quality images of Kashmir landscapes

5. **Testimonial Authors**
   - Path: `public/images/testimonials/testimonial-[number].jpg`
   - Format: JPEG or WebP
   - Size: 100x100px (1:1 ratio)
   - Should be cropped to show faces clearly

6. **Background Images**
   - Path: `public/images/backgrounds/[section]-bg.jpg`
   - Format: JPEG or WebP
   - Size: 1920x1080px
   - Examples:
     - `cta-bg.jpg` - Call to action section background
     - `contact-bg.jpg` - Contact section background

7. **Favicon**
   - Path: `public/favicon.ico`
   - Also provide additional sizes in `public/`:
     - `favicon-16x16.png`
     - `favicon-32x32.png`
     - `apple-touch-icon.png` (180x180px)

## Video Assets

### Hero Video

- Path: `public/videos/hero/kashmir-landscape.mp4`
- Format: MP4 (H.264 codec)
- Resolution: 1920x1080px (Full HD)
- Duration: 15-30 seconds (looping)
- Size: Optimize to less than 10MB
- Content: Scenic Kashmir landscapes, preferably with slow, smooth camera movements

## Image Optimization Guidelines

For better performance and user experience:

1. **Compression**
   - Compress all images using tools like [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
   - Aim for a balance between quality and file size

2. **Modern Formats**
   - Use WebP format where possible for better compression
   - Provide JPEG/PNG fallbacks for older browsers

3. **Responsive Images**
   - The project uses Next.js Image component which handles responsive sizing
   - Provide images at the largest size needed, and Next.js will optimize them

4. **Lazy Loading**
   - Images below the fold are automatically lazy-loaded by Next.js Image component

## Video Optimization Guidelines

1. **Compression**
   - Compress videos using tools like [Handbrake](https://handbrake.fr/) or online services
   - Target bitrate: 2-3 Mbps for 1080p

2. **Autoplay Considerations**
   - Hero videos are muted to allow autoplay on most browsers
   - Keep videos short and loop them for continuous playback

3. **Fallbacks**
   - Always provide a poster/thumbnail image for videos
   - The site will gracefully fall back to static images if videos fail to load

## Implementation in Code

### Using Images in Components

```jsx
import Image from 'next/image';

// In your component:
<Image
  src="/images/hero/hero-bg.jpg"
  alt="Kashmir mountains"
  width={1920}
  height={1080}
  priority // Use for above-the-fold images
  className="object-cover"
/>
```

### Using Videos in Components

```jsx
// In your VideoBackground component:
<video
  ref={videoRef}
  className="absolute top-0 left-0 w-full h-full object-cover"
  poster="/images/hero/hero-bg.jpg"
  playsInline
  muted
  loop
  autoPlay
>
  <source src="/videos/hero/kashmir-landscape.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

## Placeholder Usage

The current implementation uses placeholder images from `via.placeholder.com`. These should be replaced with actual images following the guidelines above.

Example of current placeholder in code:
```jsx
posterSrc="https://via.placeholder.com/1920x1080?text=Kashmir+Landscape"
```

Should be replaced with:
```jsx
posterSrc="/images/hero/hero-bg.jpg"
```

## Next.js Configuration

The project's `next.config.js` has been configured to handle images from external domains and optimize them:

```js
images: {
  domains: ['via.placeholder.com'],
  unoptimized: true,
},
```

When adding your own images to the `public` folder, you won't need the `domains` configuration for those images.

## Developer Notes

- **Anik Sarker Akash** - Created comprehensive assets guide for image and video placement
