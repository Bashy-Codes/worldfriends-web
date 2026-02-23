'use client';

import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
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
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              WorldFriends helps you build real friendships across borders. Discover new cultures,
              practice languages, and share experiences with people who are curious about the world.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#818CF8] flex items-center justify-center text-white">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#818CF8] flex items-center justify-center text-white">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#818CF8] flex items-center justify-center text-white">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#818CF8] flex items-center justify-center text-white">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="text-[#818CF8]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-[#818CF8]">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-[#818CF8]">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-[#818CF8]">
                  Press Kit
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="text-[#818CF8]">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-[#818CF8]">
                  Safety Center
                </a>
              </li>
              <li>
                <a href="#" className="text-[#818CF8]">
                  Community Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="text-[#818CF8]">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>


        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">{`© ${new Date().getFullYear()} WorldFriends. All rights reserved.`}</p>
          <div className="flex gap-6 text-xs text-slate-500">
            <a href="#" className="text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-white">
              Terms of Service
            </a>
            <a href="#" className="text-white">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
