'use client';

import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    location: 'United Kingdom',
    role: 'Learning Spanish',
    quote: 'I tried so many apps, but WorldFriends is the only one where I made actual friends. Now I speak Spanish every day!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces',
  },
  {
    name: 'Carlos Mendez',
    location: 'Spain',
    role: 'Learning English',
    quote: 'The community is so supportive. People genuinely help you correct your mistakes without making you feel embarrassed.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces',
  },
  {
    name: 'Yuki Tanaka',
    location: 'Japan',
    role: 'Learning French',
    quote: 'I love the voice rooms! It helped me overcome my fear of speaking. WorldFriends changed my life.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4">
            Stories from our community
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See how WorldFriends is helping people around the globe connect and learn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col">
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="text-slate-700 text-lg leading-relaxed mb-8 flex-grow italic">
                {`"${t.quote}"`}
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <img src={t.avatar || "/placeholder.svg"} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md" />
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-xs text-slate-500 font-medium">
                    {t.location} • {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
