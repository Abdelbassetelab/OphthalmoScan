import React from "react";
import { useAuth } from "@clerk/nextjs";
import { UserRole } from "@/lib/auth/clerk-auth";

type RoleRestrictedProps = {
  children: React.ReactNode;
  allowedRoles: UserRole[];
  fallback?: React.ReactNode;
};

export function RoleRestricted({ 
  children, 
  allowedRoles,
  fallback = null 
}: RoleRestrictedProps) {
  const { isLoaded, userId, user } = useAuth();
  
  // While auth is loading, show nothing
  if (!isLoaded) return null;
  
  // If user isn't authenticated, show fallback
  if (!userId) return <>{fallback}</>;
  
  // Get user role from metadata
  const userRole = (user?.publicMetadata?.role as UserRole) || "patient";
  
  // If user doesn't have required role, show fallback
  if (!allowedRoles.includes(userRole)) return <>{fallback}</>;
  
  // User has required role, show children
  return <>{children}</>;
}