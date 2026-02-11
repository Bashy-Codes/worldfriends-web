'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] rounded-full bg-[#818CF8]/10 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#818CF8]/10 text-[#818CF8] font-semibold text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#818CF8] animate-pulse" />
              #1 International Friendships App
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
              Connect with the{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#818CF8] to-purple-600">
                  World
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  width="100%"
                  height="12"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 8C45.5 2.5 154.5 2.5 196 8" stroke="#818CF8" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Find friends from other countries backgrounds. Discover new cultures, make international best friends, and see the world through shared moments.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#818CF8] hover:bg-[#6c78f0] text-white font-semibold text-lg shadow-xl shadow-[#818CF8]/25 hover:shadow-2xl hover:shadow-[#818CF8]/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group">
                <Download className="w-5 h-5" />
                Download App
              </button>
            </div>
          </motion.div>

          {/* User Profile Card */}
          <motion.div
            className="flex-1 relative w-full max-w-[400px]"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/20 border-0 bg-white w-full max-w-[360px] mx-auto">
              {/* Profile Header Image */}
              <div className="relative w-full h-48 bg-gradient-to-br from-[#818CF8] to-purple-500">
                <Image
                  src="https://images.unsplash.com/photo-1645042027566-4c61f1fffc7e?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Profile"
                  width={360}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Profile Content */}
              <div className="p-6 space-y-5">
                {/* Name, Gender, Age, Country */}
                <div>
                  <h3 className="text-2xl font-display font-bold text-slate-900">Kayla Johnson, 24</h3>
                  <p className="text-slate-600 text-sm mt-1">
                    <span className="font-semibold">From:</span> San Francisco, USA
                  </p>
                </div>

                {/* Languages */}
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Languages</p>
                  <div className="space-y-2">
                    <div>
                      <p className="text-sm font-medium text-slate-700">Learning: Spanish, French</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-700">Speaks: English, Mandarin</p>
                    </div>
                  </div>
                </div>

                {/* About Me */}
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">About Me</p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Passionate traveler and language enthusiast. Love exploring new cultures and making friends worldwide. Coffee lover ☕
                  </p>
                </div>

                {/* Interests */}
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Interests</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#818CF8]/10 text-[#818CF8] text-xs font-medium rounded-full">Travel</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">Photography</span>
                    <span className="px-3 py-1 bg-[#818CF8]/10 text-[#818CF8] text-xs font-medium rounded-full">Cooking</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">Music</span>
                    <span className="px-3 py-1 bg-[#818CF8]/10 text-[#818CF8] text-xs font-medium rounded-full">Hiking</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">Movies</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards Decorative */}
            <motion.div
              className="absolute -left-8 top-1/4 bg-white p-4 rounded-2xl shadow-xl z-20 hidden md:flex items-center gap-3"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-xl">👋</div>
              <div>
                <p className="font-bold text-slate-800 text-sm">New Match!</p>
                <p className="text-xs text-slate-500">Sarah from UK</p>
              </div>
            </motion.div>

            <motion.div
              className="absolute -right-8 bottom-1/4 bg-white p-4 rounded-2xl shadow-xl z-20 hidden md:flex items-center gap-3"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-xl">🌎</div>
              <div>
                <p className="font-bold text-slate-800 text-sm">Global Reach</p>
                <p className="text-xs text-slate-500">150+ Countries</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
