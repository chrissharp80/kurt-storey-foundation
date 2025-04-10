import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import Providers from "../components/Providers";
import Link from "next/link";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kurt Storey Foundation",
  description: "Connecting instruments with kids who need them",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <header className="bg-indigo-700 text-white shadow-md">
              <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">Kurt Storey Foundation</Link>
                <nav className="space-x-4">
                  <Link href="/" className="hover:underline">Home</Link>
                  <Link href="/why" className="hover:underline">Why Kurt?</Link>
                  <Link href="/apply" className="hover:underline">Apply</Link>
                  <Link href="/catalog" className="hover:underline">Catalog</Link>
                  {session?.user?.role === 'ADMIN' && (
                    <Link href="/admin" className="hover:underline">Admin</Link>
                  )}
                  {session ? (
                    <Link href="/api/auth/signout" className="hover:underline">Sign Out</Link>
                  ) : (
                    <Link href="/login" className="hover:underline">Admin Login</Link>
                  )}
                </nav>
              </div>
            </header>
            <main className="flex-grow container mx-auto px-4 py-8">
              {children}
            </main>
            <footer className="bg-gray-100 py-6">
              <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="mb-4 md:mb-0">
                    <p className="text-gray-600">© {new Date().getFullYear()} Kurt Storey Foundation</p>
                  </div>
                  <div className="flex space-x-4">
                    <Link href="/governance" className="text-gray-600 hover:text-indigo-700">Governance</Link>
                    <Link href="/privacy" className="text-gray-600 hover:text-indigo-700">Privacy</Link>
                    <Link href="/contact" className="text-gray-600 hover:text-indigo-700">Contact</Link>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
