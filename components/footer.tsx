import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 max-w-3xl">
          <Link href="/" className="flex items-center gap-2 mb-6">
            <img
              src="/logo.png"
              alt="WorldFriends"
              width={40}
              height={40}
              className="w-10 h-10 rounded-lg"
            />
            <span className="text-xl font-bold font-display text-white tracking-tight">
              WorldFriends
            </span>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed">
            WorldFriends is a platform for global friendships and language exchange.
            Connect with people worldwide, practice languages naturally, and build genuine
            cross-cultural relationships in one safe community.
          </p>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">{`© ${new Date().getFullYear()} WorldFriends. All rights reserved.`}</p>
          <p className="text-xs text-slate-500">Built for international friendships.</p>
        </div>
      </div>
    </footer>
  );
}
