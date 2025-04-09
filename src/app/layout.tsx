import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import Providers from "@/components/Providers";

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
                <a href="/" className="text-2xl font-bold">Kurt Storey Foundation</a>
                <nav className="space-x-4">
                  <a href="/" className="hover:underline">Home</a>
                  <a href="/why" className="hover:underline">Why Kurt?</a>
                  <a href="/apply" className="hover:underline">Apply</a>
                  <a href="/catalog" className="hover:underline">Catalog</a>
                  {session?.user?.role === 'ADMIN' && (
                    <a href="/admin" className="hover:underline">Admin</a>
                  )}
                  {session ? (
                    <a href="/api/auth/signout" className="hover:underline">Sign Out</a>
                  ) : (
                    <a href="/login" className="hover:underline">Admin Login</a>
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
                    <a href="/governance" className="text-gray-600 hover:text-indigo-700">Governance</a>
                    <a href="/privacy" className="text-gray-600 hover:text-indigo-700">Privacy</a>
                    <a href="/contact" className="text-gray-600 hover:text-indigo-700">Contact</a>
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
