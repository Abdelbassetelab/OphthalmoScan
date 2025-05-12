'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/register/');
  }, [router]);
  
  return (
    <div className="flex items-center justify-center min-h-screen py-12 bg-gray-50">
      <p>Redirecting to register...</p>
    </div>
  );
}