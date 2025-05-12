'use client';

import React from 'react';
import { SignedIn, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import CollapsibleSidebar from '@/components/layouts/collapsible-sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-primary">
            OphthalmoScan-AI
          </Link>
          
          <div className="flex items-center gap-4">
            <SignedIn>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">My Account</span>
                <UserButton 
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "w-10 h-10"
                    }
                  }}
                />
              </div>
            </SignedIn>
          </div>
        </div>
      </header>

      <div className="flex">
        <CollapsibleSidebar />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}