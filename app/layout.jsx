import './globals.css';
import './swiper-custom.css';

export const metadata = {
  title: 'Kashmir Paradise - Exclusive Travel Packages 2025',
  description: 'Discover breathtaking landscapes, serene lakes, and majestic mountains with our specially curated Kashmir trips.',
  metadataBase: new URL('https://example.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Kashmir Paradise - Exclusive Travel Packages 2025',
    description: 'Discover breathtaking landscapes, serene lakes, and majestic mountains with our specially curated Kashmir trips.',
    url: 'https://example.com',
    siteName: 'Kashmir Paradise Tours',
    images: [
      {
        url: '/images/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'Kashmir Paradise Tours',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kashmir Paradise - Exclusive Travel Packages 2025',
    description: 'Discover breathtaking landscapes, serene lakes, and majestic mountains with our specially curated Kashmir trips.',
    images: ['/images/hero-bg.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
