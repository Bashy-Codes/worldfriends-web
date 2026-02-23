import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WorldFriends - Make Global Connections, Find International Friends, Practice Languages, and Exchange Cultures',
  description: 'Connect with people from 180+ countries. Professional global connections, language exchange, and cultural networking for meaningful international relationships.',
  keywords: 'global connections, professional networking, international friends, language exchange, cultural exchange, make friends online, language partners, chat worldwide',
  metadataBase: new URL('https://worldfriends.app'),
  alternates: {
    canonical: 'https://worldfriends.app',
  },
  openGraph: {
    title: 'WorldFriends - Professional Global Connections | Connect Globally',
    description: 'Discover a professional platform to find friends, practice languages, and exchange cultures with 180+ countries.',
    url: 'https://worldfriends.app',
    siteName: 'WorldFriends',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://worldfriends.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'WorldFriends - Connect with people worldwide',
        type: 'image/png',
      },
      {
        url: 'https://worldfriends.app/og-image-square.png',
        width: 800,
        height: 800,
        alt: 'WorldFriends - Global friendship app',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WorldFriends - Global Connections',
    description: 'Find international connections & practice languages on a professional global platform',
    creator: '@worldfriends',
    images: ['https://worldfriends.app/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  other: {
    'application-name': 'WorldFriends',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'WorldFriends',
    'apple-mobile-web-app-icon': '/logo.png',
    'format-detection': 'telephone=no',
    'theme-color': '#818CF8',
  },
  verification: {
    google: 'AcBPhGVo7N81Jk1F9nqxumQGDEKy0STrNQRecvdo2xE'
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta httpEquiv="x-ua-compatible" content="IE=edge" />

        {/* Google Analytics Tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-DL588488X3" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DL588488X3');
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
