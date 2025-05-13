'use client';

import { Card } from '@/components/ui/card';
import { UserRole } from '@/lib/auth/clerk-auth';

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-2">User Management</h2>
          <p className="text-gray-600 mb-4">Manage users, roles and permissions</p>
          <a href="/dashboard/admin/users" className="text-blue-600 hover:text-blue-800">
            View Users →
          </a>
        </Card>
        
        <Card className="p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-2">System Analytics</h2>
          <p className="text-gray-600 mb-4">View system usage and performance metrics</p>
          <a href="/dashboard/admin/analytics" className="text-blue-600 hover:text-blue-800">
            View Analytics →
          </a>
        </Card>
        
        <Card className="p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-2">Audit Logs</h2>
          <p className="text-gray-600 mb-4">Review system audit logs and activities</p>
          <a href="/dashboard/admin/logs" className="text-blue-600 hover:text-blue-800">
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