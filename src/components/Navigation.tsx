import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { isAdmin } from '../lib/auth/types';

export default function Navigation() {
  const pathname = usePathname();
  const { data: session } = useSession();
  
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-indigo-600">
                Kurt Storey Foundation
              </Link>
            </div>
            <nav className="ml-6 flex space-x-8">
              <Link
                href="/"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/') 
                    ? 'border-indigo-500 text-gray-900' 
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                Home
              </Link>
              <Link
                href="/why"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/why') 
                    ? 'border-indigo-500 text-gray-900' 
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                Why Kurt?
              </Link>
              <Link
                href="/apply"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/apply') 
                    ? 'border-indigo-500 text-gray-900' 
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                Apply
              </Link>
              <Link
                href="/catalog"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/catalog') 
                    ? 'border-indigo-500 text-gray-900' 
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                Catalog
              </Link>
            </nav>
          </div>
          <div className="flex items-center">
            {isAdmin(session) ? (
              <Link
                href="/admin"
                className={`inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md ${
                  isActive('/admin')
                    ? 'bg-indigo-600 text-white'
                    : 'text-indigo-600 bg-indigo-50 hover:bg-indigo-100'
                }`}
              >
                Admin Dashboard
              </Link>
            ) : (
              <Link
                href="/login"
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-indigo-50 hover:bg-indigo-100"
              >
                Admin Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
