'use client';

import { MessageCircle, Users, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function ValueProp() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 bg-slate-50" ref={ref}>
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

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Feature 1 */}
          <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-lg shadow-slate-200/50 hover:shadow-xl transition-shadow border border-slate-100">
            <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500 mb-6">
              <MessageCircle size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Real Conversations</h3>
            <p className="text-slate-600 leading-relaxed">
              Ditch the textbooks. Learn slang, idioms, and natural phrasing by chatting with native speakers who want to learn your language too.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-lg shadow-slate-200/50 hover:shadow-xl transition-shadow border border-slate-100">
            <div className="w-14 h-14 rounded-xl bg-purple-50 flex items-center justify-center text-purple-500 mb-6">
              <Users size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Cultural Exchange</h3>
            <p className="text-slate-600 leading-relaxed">
              Don't just learn the language; understand the culture. Share photos, moments, and stories to see the world through someone else's eyes.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-lg shadow-slate-200/50 hover:shadow-xl transition-shadow border border-slate-100">
            <div className="w-14 h-14 rounded-xl bg-pink-50 flex items-center justify-center text-pink-500 mb-6">
              <Globe size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Global Community</h3>
            <p className="text-slate-600 leading-relaxed">
              Join millions of users from over 180 countries. Whether you're interested in Korean, Spanish, or French, your perfect language partner is waiting.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
