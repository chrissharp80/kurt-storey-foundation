import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Kurt Storey Foundation</h1>
        <p className="text-xl max-w-3xl mx-auto text-gray-600">
          Connecting instruments with kids who need them, continuing Kurt&apos;s legacy of giving.
        </p>
      </section>

      <section className="bg-indigo-50 p-8 rounded-lg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg mb-6">
            The Kurt Storey Foundation exists to provide musical instruments to children who cannot afford them,
            carrying forward Kurt&apos;s passion for music and giving.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Request an Instrument</h3>
              <p className="mb-4">Need an instrument? We&apos;re here to help. Apply today.</p>
              <Link href="/apply" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
                Apply Now
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Browse Our Catalog</h3>
              <p className="mb-4">See what instruments are currently available in our inventory.</p>
              <Link href="/catalog" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
                View Catalog
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Learn About Kurt</h3>
              <p className="mb-4">Discover the story behind our foundation and Kurt&apos;s legacy.</p>
              <Link href="/why" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
                Why Kurt?
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-indigo-700">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Apply</h3>
            <p>Fill out our simple application form to request an instrument.</p>
          </div>
          <div className="text-center">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-indigo-700">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Review</h3>
            <p>Our team reviews applications and matches them with available instruments.</p>
          </div>
          <div className="text-center">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-indigo-700">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Receive</h3>
            <p>Approved applicants receive their instruments and start making music!</p>
          </div>
        </div>
      </section>
    </div>
  );
}
