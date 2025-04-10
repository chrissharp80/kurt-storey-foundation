'use client';

import React from 'react';
import Link from 'next/link';

export default function Error({ error, reset }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-4xl font-bold text-indigo-700 mb-4">Something went wrong</h1>
      <p className="text-lg text-gray-600 mb-8">
        {error?.message || 'An unexpected error occurred'}
      </p>
      <div className="space-y-4">
        <button
          onClick={() => reset()}
          className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
        >
          Try again
        </button>
        <div className="pt-4">
          <Link 
            href="/"
            className="text-indigo-600 hover:underline"
          >
            Return to home page
          </Link>
        </div>
      </div>
    </div>
  );
}
