'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

type ApplicationStatus = {
  id: string;
  status: string;
  instrumentPreference: string;
  createdAt: string;
  assignments: Array<{
    id: string;
    status: string;
    instrument: {
      type: string;
      brand: string;
    };
  }>;
};

export default function StatusPage() {
  const params = useParams();
  const token = params.token as string;
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [application, setApplication] = useState<ApplicationStatus | null>(null);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch(`/api/applications/status/${token}`);
        
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Application not found or token has expired');
          }
          throw new Error('Failed to fetch application status');
        }
        
        const data = await response.json();
        setApplication(data.application);
      } catch (err: any) {
        setError(err.message || 'An error occurred while fetching your application status');
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
  }, [token]);

  const getStatusBadge = (status: string) => {
    const statusMap: Record<string, { color: string; text: string }> = {
      PENDING: { color: 'bg-yellow-100 text-yellow-800', text: 'Pending Review' },
      APPROVED: { color: 'bg-blue-100 text-blue-800', text: 'Approved' },
      REJECTED: { color: 'bg-red-100 text-red-800', text: 'Not Approved' },
      ASSIGNED: { color: 'bg-green-100 text-green-800', text: 'Instrument Assigned' },
      COMPLETED: { color: 'bg-purple-100 text-purple-800', text: 'Completed' },
    };

    const statusInfo = statusMap[status] || { color: 'bg-gray-100 text-gray-800', text: status };
    
    return (
      <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusInfo.color}`}>
        {statusInfo.text}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto text-center py-12">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4 mx-auto"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">Error</h3>
              <div className="mt-2 text-sm text-red-700">
                <p>{error}</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center">
          <Link href="/apply" className="text-indigo-600 hover:underline">
            Return to application form
          </Link>
        </p>
      </div>
    );
  }

  if (!application) {
    return (
      <div className="max-w-3xl mx-auto text-center py-12">
        <h1 className="text-3xl font-bold mb-4">Application Not Found</h1>
        <p className="mb-6 text-gray-600">
          We couldn&apos;t find an application with this token. It may have expired or been removed.
        </p>
        <Link 
          href="/apply" 
          className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Submit a New Application
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Application Status</h1>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Application Details</h2>
            {getStatusBadge(application.status)}
          </div>
        </div>
        
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-sm font-medium text-gray-500">Instrument Requested</h3>
            <p className="mt-1 text-lg">{application.instrumentPreference}</p>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-gray-500">Application Date</h3>
            <p className="mt-1">
              {new Date(application.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
          
          {application.status === 'PENDING' && (
            <div className="bg-yellow-50 p-4 rounded-md">
              <p className="text-sm text-yellow-800">
                Your application is currently being reviewed. We&apos;ll update this status when there&apos;s any change.
              </p>
            </div>
          )}
          
          {application.status === 'APPROVED' && (
            <div className="bg-blue-50 p-4 rounded-md">
              <p className="text-sm text-blue-800">
                Good news! Your application has been approved. We&apos;re now working on matching you with an instrument.
              </p>
            </div>
          )}
          
          {application.status === 'REJECTED' && (
            <div className="bg-red-50 p-4 rounded-md">
              <p className="text-sm text-red-800">
                We&apos;re sorry, but we&apos;re unable to fulfill your request at this time. Please feel free to apply again in the future.
              </p>
            </div>
          )}
          
          {application.status === 'ASSIGNED' && application.assignments && application.assignments.length > 0 && (
            <div className="bg-green-50 p-4 rounded-md">
              <h3 className="font-medium text-green-800 mb-2">Instrument Assignment</h3>
              <p className="text-sm text-green-800 mb-4">
                An instrument has been assigned to you! Our team will contact you soon with pickup/delivery details.
              </p>
              
              <div className="bg-white p-3 rounded border border-green-200">
                <h4 className="font-medium text-sm">Assigned Instrument:</h4>
                <p className="mt-1">
                  {application.assignments[0].instrument.brand} {application.assignments[0].instrument.type}
                </p>
              </div>
            </div>
          )}
          
          {application.status === 'COMPLETED' && (
            <div className="bg-purple-50 p-4 rounded-md">
              <p className="text-sm text-purple-800">
                This application has been completed. We hope you&apos;re enjoying your instrument!
              </p>
            </div>
          )}
        </div>
      </div>
      
      <div className="text-center">
        <p className="text-sm text-gray-500 mb-4">
          Keep this page bookmarked to check your application status. You can also return to this page using the link sent to your email.
        </p>
        <Link 
          href="/" 
          className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
