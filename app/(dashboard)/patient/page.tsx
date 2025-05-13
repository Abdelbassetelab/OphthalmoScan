'use client';

import { Card } from '@/components/ui/card';

export default function PatientDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Patient Dashboard</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-2">My Profile</h2>
          <p className="text-gray-600 mb-4">View and manage your personal information</p>
          <a href="/dashboard/patient/profile" className="text-blue-600 hover:text-blue-800">
            View Profile →
          </a>
        </Card>
        
        <Card className="p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-2">Scan History</h2>
          <p className="text-gray-600 mb-4">View your past scans and results</p>
          <a href="/dashboard/patient/scans" className="text-blue-600 hover:text-blue-800">
            View Scans →
          </a>
        </Card>
        
        <Card className="p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-2">Book Appointment</h2>
          <p className="text-gray-600 mb-4">Schedule a new appointment with a doctor</p>
          <a href="/dashboard/patient/appointments/book" className="text-blue-600 hover:text-blue-800">
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