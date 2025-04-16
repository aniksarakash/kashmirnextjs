// This is a simple 404 page for the Pages Router
// The App Router has its own not-found handling

import Link from 'next/link';

export default function Custom404() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '1rem'
    }}>
      <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>404 - Page Not Found</h1>
      <p style={{ marginBottom: '2rem' }}>The page you are looking for does not exist.</p>
      <Link href="/" style={{
        backgroundColor: '#3b82f6',
        color: 'white',
        fontWeight: 'bold',
        padding: '0.5rem 1rem',
        borderRadius: '0.25rem',
        textDecoration: 'none'
      }}>
        Return to Home
      </Link>
    </div>
  );
}
