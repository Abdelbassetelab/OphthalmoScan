'use client';

import { SignIn } from '@clerk/nextjs';
import { useAuth, useUser } from '@clerk/nextjs';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const { isSignedIn } = useAuth();
  const { user, isLoaded } = useUser();
  const router = useRouter();

  // Redirect admin users to admin dashboard after login
  useEffect(() => {
    if (isLoaded && isSignedIn && user?.publicMetadata?.role === 'admin') {
      router.push('/admin');
    }
  }, [isLoaded, isSignedIn, user, router]);

  return (
    <div className="flex items-center justify-center min-h-screen py-12 bg-gray-50">
      <SignIn path="/login" routing="path" signUpUrl="/register" afterSignInUrl="/admin" />
    </div>
  );
}