import { Download } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] rounded-full bg-[#818CF8]/10 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-center">
          {/* Text Content */}
          <div className="w-full max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#818CF8]/10 text-[#818CF8] font-semibold text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#818CF8]" />
              International Friendships Platform
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

            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Find friends from other countries backgrounds. Discover new cultures, make international best friends, and see the world through shared moments.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#6c78f0] text-white font-semibold text-lg shadow-2xl shadow-[#818CF8]/30 -translate-y-1 flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Download App
              </button>
            </div>
            {/* user count removed per request */}
            <div className="mt-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
