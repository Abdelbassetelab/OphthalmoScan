'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAuth, useUser } from '@clerk/nextjs';
import { UserRole } from '@/lib/auth/clerk-auth';

interface AuthContextType {
  isLoading: boolean;
  isAuthenticated: boolean;
  userId: string | null;
  userRole: UserRole;
  userFullName: string | null;
  userEmail: string | null;
}

const AuthContext = createContext<AuthContextType>({
  isLoading: true,
  isAuthenticated: false,
  userId: null,
  userRole: 'patient',
  userFullName: null,
  userEmail: null,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { isLoaded: isAuthLoaded, userId, isSignedIn } = useAuth();
  const { user, isLoaded: isUserLoaded } = useUser();
  const [authState, setAuthState] = useState<AuthContextType>({
    isLoading: true,
    isAuthenticated: false,
    userId: null,
    userRole: 'patient',
    userFullName: null,
    userEmail: null,
  });

  useEffect(() => {
    // Only update the auth state once both auth and user are loaded
    if (isAuthLoaded && isUserLoaded) {
      setAuthState({
        isLoading: false,
        isAuthenticated: !!isSignedIn,
        userId: userId || null,
        userRole: (user?.publicMetadata?.role as UserRole) || 'patient',
        userFullName: user ? `${user.firstName} ${user.lastName}` : null,
        userEmail: user?.primaryEmailAddress?.emailAddress || null,
      });
    }
  }, [isAuthLoaded, isUserLoaded, isSignedIn, userId, user]);

  return (
    <AuthContext.Provider value={authState}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);