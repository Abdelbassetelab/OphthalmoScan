'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth, useUser } from '@clerk/nextjs';
import { Card } from '@/components/ui/card';
import CollapsibleSidebar from '@/components/layouts/collapsible-sidebar';
import { Navbar } from '@/components/layouts/Navbar';

// Admin Dashboard Component
function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-2">User Management</h2>
          <p className="text-gray-600 mb-4">Manage users, roles and permissions</p>
          <a href="/management/users" className="text-blue-600 hover:text-blue-800">
            View Users →
          </a>
        </Card>
        
        <Card className="p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-2">System Analytics</h2>
          <p className="text-gray-600 mb-4">View system usage and performance metrics</p>
          <a href="/dashboard/analytics" className="text-blue-600 hover:text-blue-800">
            View Analytics →
          </a>
        </Card>
        
        <Card className="p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-2">Audit Logs</h2>
          <p className="text-gray-600 mb-4">Review system audit logs and activities</p>
          <a href="/dashboard/logs" className="text-blue-600 hover:text-blue-800">
            View Logs →
          </a>
        </Card>
      </div>
      
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600">No recent activity to display</p>
        </div>
      </div>
    </div>
  );
}

// Doctor Dashboard Component
function DoctorDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Doctor Dashboard</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-2">Patient Management</h2>
          <p className="text-gray-600 mb-4">View and manage your patients</p>
          <a href="/dashboard/patients" className="text-blue-600 hover:text-blue-800">
            View Patients →
          </a>
        </Card>
        
        <Card className="p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-2">Scan Analysis</h2>
          <p className="text-gray-600 mb-4">Analyze and review patient scan results</p>
          <a href="/dashboard/scans" className="text-blue-600 hover:text-blue-800">
            View Scans →
          </a>
        </Card>
        
        <Card className="p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-2">Appointments</h2>
          <p className="text-gray-600 mb-4">Manage your appointment schedule</p>
          <a href="/dashboard/appointments" className="text-blue-600 hover:text-blue-800">
            View Schedule →
          </a>
        </Card>
      </div>
      
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Recent Patients</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600">No recent patients to display</p>
        </div>
      </div>
    </div>
  );
}

// Patient Dashboard Component
function PatientDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Patient Dashboard</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-2">My Profile</h2>
          <p className="text-gray-600 mb-4">View and manage your personal information</p>
          <a href="/dashboard/profile" className="text-blue-600 hover:text-blue-800">
            View Profile →
          </a>
        </Card>
        
        <Card className="p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-2">Scan History</h2>
          <p className="text-gray-600 mb-4">View your past scans and results</p>
          <a href="/dashboard/scans" className="text-blue-600 hover:text-blue-800">
            View Scans →
          </a>
        </Card>
        
        <Card className="p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-2">Book Appointment</h2>
          <p className="text-gray-600 mb-4">Schedule a new appointment with a doctor</p>
          <a href="/dashboard/appointments/book" className="text-blue-600 hover:text-blue-800">
            Book Now →
          </a>
        </Card>
      </div>
      
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Upcoming Appointments</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600">No upcoming appointments scheduled</p>
        </div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const { isSignedIn, isLoaded: isAuthLoaded } = useAuth();
  const { user, isLoaded: isUserLoaded } = useUser();
  const router = useRouter();
  const [userRole, setUserRole] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    // Only proceed when both auth and user data are loaded
    if (!isAuthLoaded || !isUserLoaded) return;

    // If not signed in, redirect to login
    if (!isSignedIn) {
      router.replace('/login');
      return;
    }

    // Get user role from Clerk metadata
    const role = user?.publicMetadata?.role as string || 'patient';
    setUserRole(role);
    setIsLoading(false);
  }, [isAuthLoaded, isUserLoaded, isSignedIn, user, router]);

  // Handle sidebar toggle
  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  // Show loading state while determining role
  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-t-4 border-blue-600 border-solid rounded-full animate-spin mb-4 mx-auto"></div>
          <h2 className="text-xl font-medium text-gray-700">Loading your dashboard</h2>
        </div>
      </div>
    );
  }

  // Render dashboard with sidebar based on user role
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Sidebar */}
      <CollapsibleSidebar userRole={userRole || 'patient'} />
      
      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Navbar */}
        <Navbar onToggleSidebar={toggleSidebar} sidebarCollapsed={sidebarCollapsed} />
        
        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-6">
          {userRole === 'admin' && <AdminDashboard />}
          {userRole === 'doctor' && <DoctorDashboard />}
          {userRole === 'patient' && <PatientDashboard />}
          {!userRole && <p className="text-red-500">Error: User role not found</p>}
        </main>
      </div>
    </div>
  );
}