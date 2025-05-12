'use client';

import { SignIn } from '@clerk/nextjs';

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen py-12 bg-gray-50">
      <SignIn path="/login" routing="path" signUpUrl="/register" />
    </div>
  );
}