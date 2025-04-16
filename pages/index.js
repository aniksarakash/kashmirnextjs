import { useEffect } from 'react';
import { useRouter } from 'next/router';

// This is a simple redirect component that will redirect to the app directory's page
export default function Home() {
  const router = useRouter();
  
  useEffect(() => {
    // Redirect to the app directory's page
    router.push('/');
  }, [router]);
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );
}
