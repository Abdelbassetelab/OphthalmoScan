'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/login/');
  }, [router]);
  
  return (
    <div className="flex items-center justify-center min-h-screen py-12 bg-gray-50">
      <p>Redirecting to login...</p>
    </div>
  );
}