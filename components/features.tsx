'use client';

import { MessageSquare, Users, Share2, Shield, Mic, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function Features() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const features = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Real-time Conversations',
      desc: 'Connect instantly via text, voice messages, media sharing, and GIFs with friends worldwide.',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Groups & Clubs',
      desc: 'Join community groups and group chats focused on shared interests and global topics.',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: 'Posts & Moments',
      desc: 'Share your life through posts, comments, threads, and reactions in a global social feed.',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Safety & Moderation',
      desc: 'Advanced friendship management, preferences, and 24/7 moderation for a safe environment.',
      color: 'bg-red-100 text-red-600',
    },
    {
      icon: <Mic className="w-6 h-6" />,
      title: 'Voice Rooms',
      desc: 'Hop into rich-profile voice rooms for live audio conversations with people from 150+ countries.',
      color: 'bg-orange-100 text-orange-600',
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Smart Translation',
      desc: 'Seamless translation and correction tools built into every chat and post.',
      color: 'bg-indigo-100 text-[#818CF8]',
    },
  ];

  const languages = [
    { code: 'EN', name: 'English', flag: '🇺🇸' },
    { code: 'FR', name: 'French', flag: '🇫🇷' },
    { code: 'DE', name: 'German', flag: '🇩🇪' },
    { code: 'IT', name: 'Italian', flag: '🇮🇹' },
    { code: 'TR', name: 'Turkish', flag: '🇹🇷' },
    { code: 'ES', name: 'Spanish', flag: '🇪🇸' },
    { code: 'JA', name: 'Japanese', flag: '🇯🇵' },
    { code: 'ZH', name: 'Chinese', flag: '🇨🇳' },
    { code: 'KO', name: 'Korean', flag: '🇰🇷' },
    { code: 'RU', name: 'Russian', flag: '🇷🇺' },
  ];

  return (
    <section id="features" className="py-24 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Global tools for <br />
            <span className="text-[#818CF8]">authentic friendship</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need to find and maintain meaningful international friendships, all in one safe space.
          </p>
        </div>

        {/* Languages Showcase */}
        <div className="mb-20">
          <div className="flex flex-wrap justify-center gap-4">
            {languages.map((lang) => (
              <motion.div
                key={lang.code}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center gap-3 px-4 py-2 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-[#818CF8] hover:shadow-md transition-all cursor-default"
              >
                <span className="text-2xl">{lang.flag}</span>
                <span className="font-bold text-slate-700">{lang.code}</span>
                <span className="text-slate-400 text-sm">{lang.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-[2rem] shadow-lg shadow-slate-200/50 border border-slate-50 hover:shadow-xl hover:border-[#818CF8]/20 transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 mb-6 transition-transform group-hover:scale-110 duration-300 ${feature.color}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#818CF8] transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
