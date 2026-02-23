'use client';

import { MessageCircle, Users, Globe } from 'lucide-react';

export function ValueProp() {

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-[#818CF8] font-semibold tracking-wider uppercase text-sm">Why WorldFriends?</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mt-2 mb-4">
            More than just a social app
          </h2>
          <p className="text-slate-600 text-lg">
            We bridge the gap between continents. Find friends from other countries, share stories, and build a global network.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#818CF8]/20 scale-105 -translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500 mb-6 scale-110">
              <MessageCircle size={28} />
            </div>
            <h3 className="text-xl font-bold text-[#818CF8] mb-3">Real Conversations</h3>
            <p className="text-slate-600 leading-relaxed">
              Ditch the textbooks. Learn slang, idioms, and natural phrasing by chatting with native speakers who want to learn your language too.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#818CF8]/20 scale-105 -translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-purple-50 flex items-center justify-center text-purple-500 mb-6 scale-110">
              <Users size={28} />
            </div>
            <h3 className="text-xl font-bold text-[#818CF8] mb-3">Cultural Exchange</h3>
            <p className="text-slate-600 leading-relaxed">
              Don't just learn the language; understand the culture. Share photos, moments, and stories to see the world through someone else's eyes.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#818CF8]/20 scale-105 -translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-pink-50 flex items-center justify-center text-pink-500 mb-6 scale-110">
              <Globe size={28} />
            </div>
            <h3 className="text-xl font-bold text-[#818CF8] mb-3">Global Community</h3>
            <p className="text-slate-600 leading-relaxed">
              Join a global community from 180+ countries. Whether you're interested in Korean, Spanish, or French, your perfect language partner is waiting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
