import React from 'react';
import Link from 'next/link';
import prisma from '../../lib/prisma';

type Instrument = {
  id: string;
  type: string;
  brand: string;
  condition: string;
  status: string;
};

export default async function CatalogPage() {
  const instruments = await prisma.instrument.findMany({
    where: {
      status: 'AVAILABLE',
    },
    orderBy: {
      type: 'asc',
    },
  });

  const typedInstruments = instruments as Instrument[];
  
  const groupedInstruments = typedInstruments.reduce<Record<string, Instrument[]>>((acc, instrument) => {
    if (!acc[instrument.type]) {
      acc[instrument.type] = [];
    }
    acc[instrument.type].push(instrument);
    return acc;
  }, {});

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Instrument Catalog</h1>
      
      <p className="mb-8 text-gray-600">
        Browse our available instruments. These instruments have been donated to the Kurt Storey Foundation
        and are available for applicants. If you&apos;d like to request an instrument, please 
        <Link href="/apply" className="text-indigo-600 hover:underline mx-1">apply here</Link>.
      </p>
      
      {Object.keys(groupedInstruments).length > 0 ? (
        <div className="space-y-10">
          {Object.entries(groupedInstruments).map(([type, instruments]) => (
            <div key={type}>
              <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 pb-2">{type}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {instruments.map((instrument: Instrument) => (
                  <div key={instrument.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="bg-indigo-50 h-48 flex items-center justify-center">
                      <div className="text-4xl text-indigo-300">🎵</div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">{instrument.brand}</h3>
                      <p className="text-gray-600 mb-2">{instrument.type}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                          {instrument.condition}
                        </span>
                        <Link 
                          href="/apply" 
                          className="text-indigo-600 hover:underline text-sm"
                        >
                          Request this instrument
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <p className="text-lg text-gray-600 mb-4">No instruments are currently available.</p>
          <p className="text-gray-600">
            Please check back later or&nbsp;
            <Link href="/donate" className="text-indigo-600 hover:underline mx-1">
              consider donating an instrument
            </Link>
            &nbsp;to help our cause.
          </p>
        </div>
      )}
      
      <div className="mt-12 bg-indigo-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Have an instrument to donate?</h2>
        <p className="mb-4">
          If you have an instrument you&apos;d like to donate to the Kurt Storey Foundation,
          we&apos;d love to hear from you. Your donation can help a child discover the joy of music.
        </p>
        <Link 
          href="/donate" 
          className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Donate an Instrument
        </Link>
      </div>
    </div>
  );
}
