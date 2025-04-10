import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4 text-amber-800">Kurt Storey Foundation</h1>
        <p className="text-xl max-w-3xl mx-auto text-gray-600">
          Supporting musicians and artists through mentorship and technical expertise, continuing Kurt&apos;s legacy of musical excellence.
        </p>
      </section>

      <section className="relative">
        <div className="w-full h-96 relative mb-8">
          <Image 
            src="/images/kurt-station-console.png" 
            alt="Kurt Storey at his sound engineering console at Station Inn" 
            fill 
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      </section>

      <section className="bg-amber-50 p-8 rounded-lg border-t-4 border-amber-700">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-amber-800">Our Mission</h2>
          <p className="text-lg mb-6">
            The Kurt Storey Foundation exists to support musicians and artists through mentorship, technical assistance, and community building,
            carrying forward Kurt&apos;s passion for music and his dedication to helping others develop their craft.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-700">
              <h3 className="text-xl font-semibold mb-3 text-amber-800">Apply for Support</h3>
              <p className="mb-4">Need musical assistance or mentorship? We&apos;re here to help. Apply today.</p>
              <Link href="/apply" className="inline-block bg-amber-700 text-white px-4 py-2 rounded hover:bg-amber-800">
                Apply Now
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-700">
              <h3 className="text-xl font-semibold mb-3 text-amber-800">Browse Our Catalog</h3>
              <p className="mb-4">See what resources and opportunities are currently available.</p>
              <Link href="/catalog" className="inline-block bg-amber-700 text-white px-4 py-2 rounded hover:bg-amber-800">
                View Catalog
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-700">
              <h3 className="text-xl font-semibold mb-3 text-amber-800">Learn About Kurt</h3>
              <p className="mb-4">Discover the story behind our foundation and Kurt&apos;s legacy as a sound engineer and mentor.</p>
              <Link href="/why" className="inline-block bg-amber-700 text-white px-4 py-2 rounded hover:bg-amber-800">
                Why Kurt?
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-amber-800">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-amber-700">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-amber-800">Apply</h3>
            <p>Fill out our simple application form to request support or mentorship.</p>
          </div>
          <div className="text-center">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-amber-700">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-amber-800">Connect</h3>
            <p>Our team reviews applications and connects you with the right resources and mentors.</p>
          </div>
          <div className="text-center">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-amber-700">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-amber-800">Grow</h3>
            <p>Develop your musical craft with the support of our community, just as Kurt would have wanted.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
