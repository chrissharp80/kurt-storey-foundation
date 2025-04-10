import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function WhyPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Why Kurt?</h1>
        <p className="text-xl text-gray-600">
          This foundation &mdash; and this platform &mdash; exists because Kurt Storey lived music as a way of giving.
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
        <div className="prose prose-lg max-w-none">
          <p className="text-lg">
            Kurt Storey didn&apos;t care about status. He cared about helping musicians sound their best and reach their full potential.
            He didn&apos;t wait for permission. He acted &mdash; with heart, with hustle, and with humility.
          </p>
          
          <blockquote className="border-l-4 border-amber-700 pl-4 italic my-8 bg-amber-50 p-4 rounded-r">
            &quot;Kurt&apos;s technical expertise was matched only by his generosity of spirit. He made everyone sound better, both on stage and in the studio.&quot;
          </blockquote>
          
          <p>
            The platform reflects that ethos. It&apos;s not just a website. It&apos;s a tool to:
          </p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>Support artists and musicians with the same care Kurt showed</li>
            <li>Connect people with musical opportunities and mentorship</li>
            <li>Preserve Kurt&apos;s legacy of technical excellence and personal connection</li>
            <li>Continue his mission of helping musicians develop their craft</li>
          </ul>
          
          <p className="mt-6">
            This page &mdash; /why &mdash; reminds us why the rest exists.
          </p>
        </div>
      </section>

      <section className="bg-amber-50 p-8 rounded-lg border-t-4 border-amber-700">
        <h2 className="text-3xl font-bold mb-6 text-amber-800">Kurt&apos;s Story</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4">
              Kurt Storey was a respected sound engineer, accomplished musician (fiddler and upright bass player), and beloved mentor in the Nashville music scene.
              Throughout his career at Nashville&apos;s Station Inn and on tours with renowned artists like Mark O&apos;Connor, Victor Wooten, and Michael Cleveland,
              Kurt helped countless musicians sound their best and develop their craft.
            </p>
            <p>
              His approach combined technical mastery with genuine human connection. Kurt provided expert sound engineering, thoughtful mentorship, 
              and created opportunities for musicians to collaborate and grow. He was deeply connected to the Nashville music community until his passing 
              at age 64 from pancreatic cancer.
            </p>
          </div>
          <div className="relative h-64 bg-white rounded-lg shadow-md overflow-hidden">
            <Image 
              src="/images/kurt-family.png" 
              alt="Kurt with his family" 
              fill 
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 text-amber-800">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-700">
            <p className="italic mb-4">
              &quot;Kurt&apos;s ear was legendary. He could make any musician sound better than they thought possible.
              His technical skills were matched only by his patience and genuine desire to help artists grow.&quot;
            </p>
            <p className="font-semibold">&mdash; Michael Torres, Session Musician</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-700">
            <p className="italic mb-4">
              &quot;What made Kurt special wasn&apos;t just his technical expertise &mdash; it was how he made you feel
              like your music mattered. He treated every performer, from beginners to professionals, with the same respect and care.&quot;
            </p>
            <p className="font-semibold">&mdash; Sarah Johnson, Professional Musician</p>
          </div>
        </div>
      </section>

      <section className="bg-amber-800 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-6">Carry the Mission Forward</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">Support</h3>
            <p className="mb-4">Contribute to programs that help musicians develop their craft.</p>
            <Link href="/donate" className="inline-block bg-white text-amber-800 px-4 py-2 rounded hover:bg-amber-50">
              Support Now
            </Link>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">Mentor</h3>
            <p className="mb-4">Share your musical knowledge with the next generation.</p>
            <Link href="/mentor" className="inline-block bg-white text-amber-800 px-4 py-2 rounded hover:bg-amber-50">
              Become a Mentor
            </Link>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">Spread the Word</h3>
            <p className="mb-4">Help us connect with more communities and expand our reach.</p>
            <Link href="/share" className="inline-block bg-white text-amber-800 px-4 py-2 rounded hover:bg-amber-50">
              Share Our Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
