'use client';

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type Application = {
  id: string;
  status: string;
  instrumentPreference: string;
  message: string;
  createdAt: string;
  user?: {
    name: string;
    email: string;
  };
};

type Instrument = {
  id: string;
  type: string;
  brand: string;
  condition: string;
  status: string;
};

type AuditLog = {
  id: string;
  action: string;
  details: string;
  entityType: string;
  entityId: string;
  createdAt: string;
  user: {
    name: string;
  };
};

export default function AdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  const [activeTab, setActiveTab] = useState('applications');
  const [applications, setApplications] = useState<Application[]>([]);
  const [instruments, setInstruments] = useState<Instrument[]>([]);
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    } else if (status === 'authenticated' && session?.user?.role !== 'ADMIN') {
      router.push('/');
    }
  }, [status, session, router]);

  useEffect(() => {
    if (status === 'authenticated' && session?.user?.role === 'ADMIN') {
      fetchData();
    }
  }, [status, session, activeTab]);

  const fetchData = async () => {
    setLoading(true);
    setError('');
    
    try {
      if (activeTab === 'applications') {
        const response = await fetch('/api/admin/applications');
        if (!response.ok) throw new Error('Failed to fetch applications');
        const data = await response.json();
        setApplications(data.applications);
      } 
      else if (activeTab === 'instruments') {
        const response = await fetch('/api/admin/instruments');
        if (!response.ok) throw new Error('Failed to fetch instruments');
        const data = await response.json();
        setInstruments(data.instruments);
      } 
      else if (activeTab === 'audit') {
        const response = await fetch('/api/admin/audit');
        if (!response.ok) throw new Error('Failed to fetch audit logs');
        const data = await response.json();
        setAuditLogs(data.auditLogs);
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred while fetching data');
    } finally {
      setLoading(false);
    }
  };

  const handleAssignInstrument = async (applicationId: string, instrumentId: string) => {
    try {
      const response = await fetch('/api/admin/assign', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ applicationId, instrumentId }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to assign instrument');
      }
      
      fetchData();
    } catch (err: any) {
      setError(err.message || 'An error occurred while assigning the instrument');
    }
  };

  const handleUpdateApplicationStatus = async (applicationId: string, status: string) => {
    try {
      const response = await fetch(`/api/admin/applications/${applicationId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update application status');
      }
      
      fetchData();
    } catch (err: any) {
      setError(err.message || 'An error occurred while updating the application');
    }
  };

  const handleRetryEmail = async (emailId: string) => {
    try {
      const response = await fetch(`/api/admin/emails/${emailId}/retry`, {
        method: 'POST',
      });
      
      if (!response.ok) {
        throw new Error('Failed to retry email');
      }
      
      fetchData();
    } catch (err: any) {
      setError(err.message || 'An error occurred while retrying the email');
    }
  };

  if (status === 'loading' || (status === 'authenticated' && loading)) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        </div>
      </div>
    );
  }

  if (status === 'authenticated' && session?.user?.role !== 'ADMIN') {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Access Denied</h1>
        <p className="text-red-600">You do not have permission to access this page.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          <p>{error}</p>
        </div>
      )}
      
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('applications')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'applications'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Applications
            </button>
            <button
              onClick={() => setActiveTab('instruments')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'instruments'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Instruments
            </button>
            <button
              onClick={() => setActiveTab('audit')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'audit'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Audit Logs
            </button>
          </nav>
        </div>
      </div>
      
      {activeTab === 'applications' && (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Applications</h2>
            <Link 
              href="/admin/applications/new" 
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            >
              Add Application
            </Link>
          </div>
          
          {applications.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Applicant
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Instrument
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {applications.map((application) => (
                    <tr key={application.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {application.user?.name || 'Unknown'}
                        </div>
                        <div className="text-sm text-gray-500">
                          {application.user?.email || 'No email'}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {application.instrumentPreference}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          application.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
                          application.status === 'APPROVED' ? 'bg-blue-100 text-blue-800' :
                          application.status === 'REJECTED' ? 'bg-red-100 text-red-800' :
                          application.status === 'ASSIGNED' ? 'bg-green-100 text-green-800' :
                          application.status === 'COMPLETED' ? 'bg-purple-100 text-purple-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {application.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(application.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Link 
                          href={`/admin/applications/${application.id}`}
                          className="text-indigo-600 hover:text-indigo-900 mr-3"
                        >
                          View
                        </Link>
                        <button 
                          onClick={() => handleUpdateApplicationStatus(application.id, 'APPROVED')}
                          className="text-green-600 hover:text-green-900 mr-3"
                          disabled={application.status !== 'PENDING'}
                        >
                          Approve
                        </button>
                        <button 
                          onClick={() => handleUpdateApplicationStatus(application.id, 'REJECTED')}
                          className="text-red-600 hover:text-red-900"
                          disabled={application.status !== 'PENDING'}
                        >
                          Reject
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="bg-gray-50 p-4 rounded text-center">
              <p className="text-gray-500">No applications found.</p>
            </div>
          )}
        </div>
      )}
      
      {activeTab === 'instruments' && (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Instruments</h2>
            <Link 
              href="/admin/instruments/new" 
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            >
              Add Instrument
            </Link>
          </div>
          
          {instruments.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Brand
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Condition
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {instruments.map((instrument) => (
                    <tr key={instrument.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {instrument.type}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {instrument.brand}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          instrument.condition === 'EXCELLENT' ? 'bg-green-100 text-green-800' :
                          instrument.condition === 'GOOD' ? 'bg-blue-100 text-blue-800' :
                          instrument.condition === 'FAIR' ? 'bg-yellow-100 text-yellow-800' :
                          instrument.condition === 'NEEDS_REPAIR' ? 'bg-red-100 text-red-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {instrument.condition}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          instrument.status === 'AVAILABLE' ? 'bg-green-100 text-green-800' :
                          instrument.status === 'ASSIGNED' ? 'bg-blue-100 text-blue-800' :
                          instrument.status === 'REVOKED' ? 'bg-yellow-100 text-yellow-800' :
                          instrument.status === 'NEEDS_REPAIR' ? 'bg-red-100 text-red-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {instrument.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Link 
                          href={`/admin/instruments/${instrument.id}`}
                          className="text-indigo-600 hover:text-indigo-900 mr-3"
                        >
                          View
                        </Link>
                        <button 
                          className="text-red-600 hover:text-red-900"
                          onClick={() => {
                          }}
                        >
                          {instrument.status === 'AVAILABLE' ? 'Mark Unavailable' : 'Mark Available'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="bg-gray-50 p-4 rounded text-center">
              <p className="text-gray-500">No instruments found.</p>
            </div>
          )}
        </div>
      )}
      
      {activeTab === 'audit' && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Audit Logs</h2>
          
          {auditLogs.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Details
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Entity
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      User
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {auditLogs.map((log) => (
                    <tr key={log.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {log.action}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {log.details}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {log.entityType} ({log.entityId})
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {log.user.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(log.createdAt).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="bg-gray-50 p-4 rounded text-center">
              <p className="text-gray-500">No audit logs found.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
