'use client';

import { Card } from '@/components/ui/card';

export default function DoctorDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Doctor Dashboard</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-2">Patient Management</h2>
          <p className="text-gray-600 mb-4">View and manage your patients</p>
          <a href="/dashboard/doctor/patients" className="text-blue-600 hover:text-blue-800">
            View Patients →
          </a>
        </Card>
        
        <Card className="p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-2">Scan Analysis</h2>
          <p className="text-gray-600 mb-4">Analyze and review patient scan results</p>
          <a href="/dashboard/doctor/scans" className="text-blue-600 hover:text-blue-800">
            View Scans →
          </a>
        </Card>
        
        <Card className="p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-2">Appointments</h2>
          <p className="text-gray-600 mb-4">Manage your appointment schedule</p>
          <a href="/dashboard/doctor/appointments" className="text-blue-600 hover:text-blue-800">
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