import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <main className="bg-purple-50 min-h-[calc(100vh-64px)]">
      {/* Top Banner Section */}
      <section className="bg-purple-100 py-10 sm:py-16 px-4 sm:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            About BitLinks
          </h1>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            We built BitLinks with one simple goal: to provide the fastest, cleanest, and most privacy-focused URL shortener without forcing you to create an account.
          </p>
        </div>
      </section>

      {/* Core Values / Features Grid */}
      <section className="max-w-5xl mx-auto py-10 sm:py-16 px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-purple-100 p-5 sm:p-6 rounded-xl shadow-sm border border-purple-200">
            <h2 className="text-lg sm:text-xl font-bold text-purple-800 mb-2">
              Zero Tracking
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Unlike other platforms that log your IP, browser data, and clicks to sell analytics, we respect your privacy completely.
            </p>
          </div>

          <div className="bg-purple-100 p-5 sm:p-6 rounded-xl shadow-sm border border-purple-200">
            <h2 className="text-lg sm:text-xl font-bold text-purple-800 mb-2">
              No Login Required
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Skip the tedious sign-up forms. Paste your long link, choose your custom alias, and generate a short URL in seconds.
            </p>
          </div>

          <div className="bg-purple-100 p-5 sm:p-6 rounded-xl shadow-sm border border-purple-200 sm:col-span-2 md:col-span-1">
            <h2 className="text-lg sm:text-xl font-bold text-purple-800 mb-2">
              Custom Aliases
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Create memorable, clean, and shareable links tailored to your needs instead of random confusing characters.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 sm:mt-14 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            Ready to shorten your first link?
          </h3>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
            <Link href="/shorten" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-purple-500 hover:bg-purple-600 active:scale-95 text-white font-bold py-2.5 px-6 rounded-lg shadow-md transition cursor-pointer">
                Try Now
              </button>
            </Link>
            <Link href="https://github.com" target="_blank" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-purple-500 hover:bg-purple-600 active:scale-95 text-white font-bold py-2.5 px-6 rounded-lg shadow-md transition cursor-pointer">
                GitHub
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;