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
              Connect with people from 180+ countries. Master any language through real conversations and build friendships that last a lifetime.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#818CF8] hover:text-white transition-all duration-200">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#818CF8] hover:text-white transition-all duration-200">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#818CF8] hover:text-white transition-all duration-200">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#818CF8] hover:text-white transition-all duration-200">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="hover:text-[#818CF8] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#818CF8] transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#818CF8] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#818CF8] transition-colors">
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
                <a href="#" className="hover:text-[#818CF8] transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#818CF8] transition-colors">
                  Safety Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#818CF8] transition-colors">
                  Community Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#818CF8] transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>


        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">{`© ${new Date().getFullYear()} WorldFriends. All rights reserved.`}</p>
          <div className="flex gap-6 text-xs text-slate-500">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
