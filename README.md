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

### Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

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

### Assets Organization and Structure

A comprehensive guide for organizing and formatting image and video assets has been created. The guide includes:

1. Directory structure for assets
2. Required image specifications (sizes, formats)
3. Video optimization guidelines
4. Implementation examples in code

See [ASSETS.md](./ASSETS.md) for detailed instructions.

### Hero Section Alignment Fix

The hero section has been updated to ensure proper vertical and horizontal centering of content. The following changes were made:

1. Removed unnecessary top padding in the Hero section
2. Eliminated negative margins in the content container
3. Improved content positioning in VideoBackground component

These changes ensure consistent alignment across different screen sizes and browsers.

## Developer Notes

- **Anik Sarker Akash** - Fixed hero section alignment issues and improved responsive behavior
- **Anik Sarker Akash** - Created comprehensive assets guide for image and video placement

## License

This project is licensed under the MIT License.
