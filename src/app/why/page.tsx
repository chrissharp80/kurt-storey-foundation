import React from 'react';

export default function WhyPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Why Kurt?</h1>
        <p className="text-xl text-gray-600">
          This foundation — and this platform — exists because Kurt Storey lived music as a way of giving.
        </p>
      </section>

      <section>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg">
            Kurt Storey didn't care about status. He cared about getting instruments to kids who couldn't afford them.
            He didn't wait for permission. He acted — with heart, with hustle, and with humility.
          </p>
          
          <blockquote className="border-l-4 border-indigo-500 pl-4 italic my-8">
            "Kurt never talked about access. He just handed someone a guitar and said, 'Play.'"
          </blockquote>
          
          <p>
            The platform reflects that ethos. It's not just a website. It's a tool to:
          </p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>Receive help requests with dignity</li>
            <li>Get instruments to kids quickly</li>
            <li>Make sure no one gets forgotten</li>
            <li>Track every decision without red tape</li>
          </ul>
          
          <p className="mt-6">
            This page — /why — reminds us why the rest exists.
          </p>
        </div>
      </section>

      <section className="bg-indigo-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-6">Kurt's Story</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4">
              Kurt Storey was a musician, mentor, and community builder who believed that music could change lives.
              Throughout his life, he collected instruments and connected them with young people who showed interest
              but lacked resources.
            </p>
            <p>
              His approach was simple but profound: remove barriers, provide opportunities, and let the music do the rest.
              Kurt never sought recognition for his generosity - he simply wanted to share the joy of music with others.
            </p>
          </div>
          <div className="bg-gray-200 rounded-lg flex items-center justify-center h-64">
            <p className="text-gray-500 italic">Photo of Kurt with students</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="italic mb-4">
              "Kurt gave me my first guitar when I was 12. I couldn't afford lessons, so he taught me himself.
              Twenty years later, I'm teaching music to kids in the same neighborhood."
            </p>
            <p className="font-semibold">— Michael Torres, Music Teacher</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="italic mb-4">
              "What made Kurt special wasn't just that he gave instruments away - it was how he made you feel
              like you deserved them. Like making music wasn't a privilege, but a right."
            </p>
            <p className="font-semibold">— Sarah Johnson, Professional Musician</p>
          </div>
        </div>
      </section>

      <section className="bg-indigo-700 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-6">Carry the Mission Forward</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">Donate</h3>
            <p className="mb-4">Contribute instruments or funds to help us reach more children.</p>
            <a href="/donate" className="inline-block bg-white text-indigo-700 px-4 py-2 rounded hover:bg-gray-100">
              Donate Now
            </a>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">Mentor</h3>
            <p className="mb-4">Share your musical knowledge with the next generation.</p>
            <a href="/mentor" className="inline-block bg-white text-indigo-700 px-4 py-2 rounded hover:bg-gray-100">
              Become a Mentor
            </a>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">Spread the Word</h3>
            <p className="mb-4">Help us connect with more communities and expand our reach.</p>
            <a href="/share" className="inline-block bg-white text-indigo-700 px-4 py-2 rounded hover:bg-gray-100">
              Share Our Story
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
