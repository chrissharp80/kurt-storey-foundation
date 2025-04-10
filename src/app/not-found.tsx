import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-4xl font-bold text-indigo-700 mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="space-y-4">
        <p className="text-gray-600">You might want to check out these pages instead:</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            href="/"
            className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            Home
          </Link>
          <Link 
            href="/why"
            className="px-6 py-2 bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200 transition-colors"
          >
            Why Kurt?
          </Link>
          <Link 
            href="/apply"
            className="px-6 py-2 bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200 transition-colors"
          >
            Apply
          </Link>
          <Link 
            href="/catalog"
            className="px-6 py-2 bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200 transition-colors"
          >
            Catalog
          </Link>
        </div>
      </div>
    </div>
  );
}
