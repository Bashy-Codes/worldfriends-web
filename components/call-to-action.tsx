'use client';

import { Apple, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

export function CallToAction() {
  return (
    <section className="py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <motion.div
          className="bg-[#818CF8] rounded-[2.5rem] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-indigo-500/30"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Ready to explore the world?
            </h2>
            <p className="text-lg md:text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
              Join the fastest growing international friendship community today. Download the app and start connecting.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold flex items-center justify-center gap-3 transition-transform hover:-translate-y-1 shadow-lg">
                <Apple size={24} />
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider opacity-80">Download on the</div>
                  <div className="text-sm leading-none font-bold">App Store</div>
                </div>
              </button>

              <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold flex items-center justify-center gap-3 transition-transform hover:-translate-y-1 shadow-lg">
                <Smartphone size={24} />
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider opacity-80">Get it on</div>
                  <div className="text-sm leading-none font-bold">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
