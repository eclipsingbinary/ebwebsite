import { artistInfo } from '@/lib/data'
import { Play, ExternalLink, Music2, Volume2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

// Platform logos that we have available
const platformLogos: Record<string, string> = {
  'Spotify': '/images/logos/spotify.svg',
  'Spinamp': '/images/logos/spinamp.jpg',
}

// Music releases data based on the artist's discography
const releases = [
  {
    id: 1,
    title: 'Silicon Overlords',
    year: '2023',
    type: 'Single',
    description: 'Humans no more, it\'s the grand algorithm that has figure it all out, meet your silicon overlords.',
    tracks: ['Silicon Overlords (Indie Rock Version)', 'Silicon Overlords (Screamo Version)'],
    albumArt: 'https://content.spinamp.xyz/image/upload/c_fill,w_500/ipfs_image/QmUfqR6893PnvHMjtkvw4ZcqN1TtNH91cxN1pn2PbvYavW',
    streamingLinks: {
      spinamp: 'https://app.spinamp.xyz/playlist/eblfKXw4l8Z3STFh6nGg',
      spotify: 'https://open.spotify.com/album/33JEKp6wNaQ2mffeZeGPHU'
    }
  },
  {
    id: 2,
    title: 'Non-Dystopian',
    year: '2023',
    type: 'EP',
    description: 'A Sci-Fi Horror music trilogy of mini songs that explores the idea of AI sidekicks if they acted in the best interest of humans.',
    tracks: ['Part 1: The Communal', 'Part 2: The Romantic Ideal', 'Part 3: Agency'],
    albumArt: 'https://f4.bcbits.com/img/a4130162969_16.jpg',
    streamingLinks: {
      spinamp: 'https://app.spinamp.xyz/playlist/Yp35pI1cwQtyw42pzRck',
      spotify: 'https://open.spotify.com/album/2BsvljthDoa1F72wsb4CXk'
    }
  },
  {
    id: 3,
    title: 'Imagined Futures',
    year: '2020',
    type: 'EP',
    description: 'As our job changed from saving the world, to doing palliative care, what would the difference look like?',
    tracks: ['Imagined Futures', 'Life Outside Our Solar System', 'On Avoiding Apocalypses'],
    albumArt: 'https://content.spinamp.xyz/image/upload/c_fill,w_500/ipfs_image/QmUK2f5aTGJi96VvPTPy3gJG6n16JHBWXPCupZR8Rv8rxf',
    streamingLinks: {
      spinamp: 'https://app.spinamp.xyz/playlist/gOcBita6DNJ0feHnlPUL',
      spotify: 'https://open.spotify.com/album/0xunrs8Z4Cvj1dlRNtRMDf'
    }
  },
  {
    id: 4,
    title: 'The Quest For Meaning',
    year: '2019',
    type: 'EP',
    description: 'The observer, conscious of the whole, captain of the ship, converting chaos into order.',
    tracks: ['Overview Effect', 'Good Is Also Real', 'Trifid', 'Interplanetary', 'Raindrop'],
    albumArt: 'https://content.spinamp.xyz/image/upload/c_fill,w_500/ipfs_image/Qmcct2o1DqS3SYyAdDX6mDJcYoXHBcqvi7DDvEwq31cThW',
    streamingLinks: {
      spinamp: 'https://app.spinamp.xyz/playlist/PebD9bFR1PWAHqO9pxfT',
      spotify: 'https://open.spotify.com/album/3wuZGMJcvTMDhpe5YnR8vv'
    }
  },
  {
    id: 5,
    title: 'Constant Turnover Of Matter',
    year: '2017',
    type: 'Album',
    description: 'Singing about the cosmos, society and love.',
    tracks: ['The Getaway', 'When We Are There (Getaway Pt II)', 'On The Concept Of Money', 'Is It Not Our Choice?', 'Transcend', 'Empathy And Love', 'The Eclipse'],
    albumArt: 'https://content.spinamp.xyz/image/upload/c_fill,w_500/ipfs_image/Qmbooj33gcqJVzcib1At21zDJRASY2c8KB33daCWPjkfxo',
    streamingLinks: {
      spinamp: 'https://app.spinamp.xyz/playlist/7l9F7EB3Y1pNNm4fs4vu',
      spotify: 'https://open.spotify.com/album/6syOwU01fFelrZqNUZvqq3'
    }
  }
]

export default function MusicPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Cosmic Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/background.gif)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Enhanced Dark overlay with aurora effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-purple-900/20 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-cyan-900/30" />
      
      {/* Dynamic Aurora Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-cyan-400/40 via-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-purple-400/40 via-pink-500/20 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '6s', animationDelay: '1s'}} />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-radial from-emerald-400/30 via-teal-500/15 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '8s', animationDelay: '2s'}} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="relative">
            {/* Enhanced Multiple glow layers for depth */}
            <h1 className="absolute inset-0 text-4xl md:text-6xl font-bold text-cyan-400 mb-6 font-['Spin_Cycle',_'Orbitron',_monospace] lowercase tracking-wider blur-2xl opacity-60 animate-pulse">
              Musical Journey
            </h1>
            <h1 className="absolute inset-0 text-4xl md:text-6xl font-bold text-purple-400 mb-6 font-['Spin_Cycle',_'Orbitron',_monospace] lowercase tracking-wider blur-xl opacity-50 animate-pulse" style={{animationDelay: '1s'}}>
              Musical Journey
            </h1>
            <h1 className="absolute inset-0 text-4xl md:text-6xl font-bold text-cyan-300 mb-6 font-['Spin_Cycle',_'Orbitron',_monospace] lowercase tracking-wider blur-lg opacity-40 animate-pulse" style={{animationDelay: '0.5s'}}>
              Musical Journey
            </h1>
            <h1 className="absolute inset-0 text-4xl md:text-6xl font-bold text-pink-400 mb-6 font-['Spin_Cycle',_'Orbitron',_monospace] lowercase tracking-wider blur-md opacity-30 animate-pulse" style={{animationDelay: '1.5s'}}>
              Musical Journey
            </h1>
            <h1 className="relative text-4xl md:text-6xl font-bold text-white mb-6 font-['Spin_Cycle',_'Orbitron',_monospace] lowercase tracking-wider drop-shadow-2xl" style={{
              textShadow: '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(96, 165, 250, 0.3), 0 0 60px rgba(168, 85, 247, 0.2)'
            }}>
              Musical Journey
            </h1>
            
            {/* Constellation stars around title */}
            <div className="absolute -top-4 -left-4 w-2 h-2 bg-cyan-300 rounded-full animate-twinkle opacity-80" />
            <div className="absolute -top-8 right-12 w-1 h-1 bg-purple-300 rounded-full animate-twinkle opacity-60" style={{animationDelay: '1s'}} />
            <div className="absolute -bottom-4 -right-4 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-twinkle opacity-70" style={{animationDelay: '2s'}} />
            <div className="absolute -bottom-8 left-8 w-1 h-1 bg-pink-300 rounded-full animate-twinkle opacity-50" style={{animationDelay: '0.5s'}} />
          </div>
          
          <div className="relative">
            <p className="text-xl text-gray-200 max-w-3xl mx-auto font-light italic drop-shadow-lg">
              Oneness with all the things
            </p>
            {/* Enhanced glow behind tagline */}
            <div className="absolute inset-0 text-xl text-cyan-400 max-w-3xl mx-auto font-light italic blur-lg opacity-30 animate-pulse">
              Oneness with all the things
            </div>
            <div className="absolute inset-0 text-xl text-purple-400 max-w-3xl mx-auto font-light italic blur-md opacity-20 animate-pulse" style={{animationDelay: '1s'}}>
              Oneness with all the things
            </div>
          </div>
          
          {/* Enhanced Main Streaming Links */}
          <div className="flex justify-center gap-12 mt-8">
            {/* Enhanced Spinamp Button */}
            <a
              href="https://app.spinamp.xyz/artist/eclipsing-binary-1701854521560"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative transform hover:scale-110 transition-all duration-500"
              title="Stream on Spinamp"
            >
              {/* Enhanced Multi-layer Orbital Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400/50 animate-spin-slow group-hover:border-pink-400/70 transition-colors duration-700" 
                   style={{
                     animationDuration: '6s', 
                     transform: 'scale(2.8)'
                   }} />
              <div className="absolute inset-0 rounded-full border border-purple-400/40 animate-spin-slow group-hover:border-cyan-400/60 transition-colors duration-700" 
                   style={{
                     animationDuration: '10s', 
                     animationDirection: 'reverse', 
                     transform: 'scale(2.2)'
                   }} />
              <div className="absolute inset-0 rounded-full border border-pink-400/30 animate-spin-slow group-hover:border-purple-400/50 transition-colors duration-700" 
                   style={{
                     animationDuration: '14s', 
                     transform: 'scale(1.8)'
                   }} />
              
              {/* Enhanced Pulse Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-radial from-cyan-400/20 via-purple-400/10 to-transparent group-hover:from-cyan-300/30 group-hover:via-purple-300/20 animate-pulse transition-all duration-700"
                   style={{
                     animationDuration: '2s', 
                     transform: 'scale(1.6)'
                   }} />
              
              {/* Main Button - Enhanced */}
              <div className="relative flex items-center justify-center w-28 h-28 rounded-full 
                            bg-gradient-to-br from-cyan-900/60 via-purple-900/60 to-pink-900/60 
                            backdrop-blur-xl border-2 border-white/30
                            group-hover:from-cyan-800/80 group-hover:via-purple-800/80 group-hover:to-pink-800/80
                            group-hover:border-white/50 group-hover:scale-110
                            transition-all duration-500 ease-out
                            shadow-2xl shadow-cyan-500/30 group-hover:shadow-pink-500/50">
                
                {/* Enhanced Inner Glow */}
                <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/10 via-cyan-300/5 to-purple-300/5 group-hover:from-white/20 group-hover:via-cyan-300/10 group-hover:to-purple-300/10 transition-all duration-500" />
                
                {/* Icon/Logo Container */}
                <div className="relative z-10 flex flex-col items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={platformLogos['Spinamp']}
                    alt="Spinamp logo"
                    width={32}
                    height={32}
                    className="w-8 h-8 group-hover:scale-110 transition-all duration-300 drop-shadow-lg"
                  />
                  
                  {/* Platform Name */}
                  <span className="text-sm font-semibold mt-2 font-medium opacity-90 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md">
                    Spinamp
                  </span>
                </div>

                {/* Enhanced Cosmic Sparkles */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-300 rounded-full animate-twinkle opacity-80" style={{animationDelay: '0s'}} />
                <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-purple-300 rounded-full animate-twinkle opacity-70" style={{animationDelay: '1s'}} />
                <div className="absolute top-3 left-2 w-1 h-1 bg-pink-300 rounded-full animate-twinkle opacity-60" style={{animationDelay: '2s'}} />
                <div className="absolute bottom-2 right-3 w-1 h-1 bg-emerald-300 rounded-full animate-twinkle opacity-50" style={{animationDelay: '1.5s'}} />
              </div>
            </a>
            
            {/* Enhanced Spotify Button */}
            <a
              href="https://open.spotify.com/artist/3GwU5dEfyoFPUqQIIcYSmW"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative transform hover:scale-110 transition-all duration-500"
              title="Listen on Spotify"
            >
              {/* Enhanced Multi-layer Orbital Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400/50 animate-spin-slow group-hover:border-pink-400/70 transition-colors duration-700" 
                   style={{
                     animationDuration: '6s', 
                     transform: 'scale(2.8)'
                   }} />
              <div className="absolute inset-0 rounded-full border border-purple-400/40 animate-spin-slow group-hover:border-cyan-400/60 transition-colors duration-700" 
                   style={{
                     animationDuration: '10s', 
                     animationDirection: 'reverse', 
                     transform: 'scale(2.2)'
                   }} />
              <div className="absolute inset-0 rounded-full border border-pink-400/30 animate-spin-slow group-hover:border-purple-400/50 transition-colors duration-700" 
                   style={{
                     animationDuration: '14s', 
                     transform: 'scale(1.8)'
                   }} />
              
              {/* Enhanced Pulse Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-radial from-cyan-400/20 via-purple-400/10 to-transparent group-hover:from-cyan-300/30 group-hover:via-purple-300/20 animate-pulse transition-all duration-700"
                   style={{
                     animationDuration: '2s', 
                     transform: 'scale(1.6)'
                   }} />
              
              {/* Main Button - Enhanced */}
              <div className="relative flex items-center justify-center w-28 h-28 rounded-full 
                            bg-gradient-to-br from-cyan-900/60 via-purple-900/60 to-pink-900/60 
                            backdrop-blur-xl border-2 border-white/30
                            group-hover:from-cyan-800/80 group-hover:via-purple-800/80 group-hover:to-pink-800/80
                            group-hover:border-white/50 group-hover:scale-110
                            transition-all duration-500 ease-out
                            shadow-2xl shadow-cyan-500/30 group-hover:shadow-pink-500/50">
                
                {/* Enhanced Inner Glow */}
                <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/10 via-cyan-300/5 to-purple-300/5 group-hover:from-white/20 group-hover:via-cyan-300/10 group-hover:to-purple-300/10 transition-all duration-500" />
                
                {/* Icon/Logo Container */}
                <div className="relative z-10 flex flex-col items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={platformLogos['Spotify']}
                    alt="Spotify logo"
                    width={32}
                    height={32}
                    className="w-8 h-8 group-hover:scale-110 transition-all duration-300 drop-shadow-lg"
                  />
                  
                  {/* Platform Name */}
                  <span className="text-sm font-semibold mt-2 font-medium opacity-90 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md">
                    Spotify
                  </span>
                </div>

                {/* Enhanced Cosmic Sparkles */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-300 rounded-full animate-twinkle opacity-80" style={{animationDelay: '0s'}} />
                <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-purple-300 rounded-full animate-twinkle opacity-70" style={{animationDelay: '1s'}} />
                <div className="absolute top-3 left-2 w-1 h-1 bg-pink-300 rounded-full animate-twinkle opacity-60" style={{animationDelay: '2s'}} />
                <div className="absolute bottom-2 right-3 w-1 h-1 bg-emerald-300 rounded-full animate-twinkle opacity-50" style={{animationDelay: '1.5s'}} />
              </div>
            </a>
          </div>
        </div>

        {/* Enhanced Releases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {releases.map((release, index) => (
            <div
              key={release.id}
              className="group relative bg-gradient-to-br from-cyan-900/30 via-purple-900/30 to-pink-900/30 backdrop-blur-xl border-2 border-cyan-400/20 rounded-3xl p-6 hover:border-cyan-300/40 transition-all duration-500 hover:scale-105 shadow-xl shadow-cyan-500/10"
            >
              {/* Enhanced cosmic effects */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/10 via-purple-400/10 to-pink-400/10 rounded-3xl blur-sm" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/3 to-transparent rounded-3xl" />
              
              {/* Dynamic sparkles */}
              <div className="absolute top-3 right-3 w-2 h-2 bg-cyan-300 rounded-full animate-twinkle opacity-80" style={{animationDelay: `${index * 0.5}s`}} />
              <div className="absolute top-6 right-8 w-1 h-1 bg-purple-300 rounded-full animate-twinkle opacity-60" style={{animationDelay: `${index * 0.7 + 1}s`}} />
              <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-pink-300 rounded-full animate-twinkle opacity-70" style={{animationDelay: `${index * 0.7}s`}} />
              <div className="absolute bottom-8 left-8 w-1 h-1 bg-emerald-300 rounded-full animate-twinkle opacity-50" style={{animationDelay: `${index * 0.5 + 0.5}s`}} />
              
              {/* Conditional rendering: All releases get embedded players */}
              {release.id === 1 ? (
                /* Silicon Overlords - Restructured Layout */
                <>
                  {/* 1. Embedded Player */}
                  <div className="mb-6">
                    {/* Enhanced Spinamp Player Container */}
                    <div className="relative bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl p-3 border-2 border-white/10 overflow-hidden group-hover:border-white/20 transition-colors duration-500">
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-2xl blur-sm" />
                      <div className="relative">
                        <iframe 
                          src="https://app.spinamp.xyz/embed/playlist/eblfKXw4l8Z3STFh6nGg?colors=%7B%22primaryLight%22%3A%22%2322d3ee%22%2C%22primary%22%3A%22%2306b6d4%22%2C%22primaryDark%22%3A%22%230891b2%22%2C%22backgroundLight%22%3A%22%23030712%22%2C%22background%22%3A%22%230f172a%22%2C%22backgroundDark%22%3A%22%231e293b%22%2C%22backdrop%22%3A%22rgba%2815%2C23%2C42%2C0.8%29%22%2C%22borderColor%22%3A%22%2306b6d4%22%2C%22invertedBorderColor%22%3A%22%2322d3ee%22%2C%22textColor%22%3A%22%23f1f5f9%22%2C%22invertedTextColor%22%3A%22%23cbd5e1%22%2C%22active%22%3A%22%23a855f7%22%2C%22activeBorder%22%3A%22%2306b6d4%22%2C%22activeText%22%3A%22%23f1f5f9%22%2C%22favoritesColor%22%3A%22%23ec4899%22%7D" 
                          frameBorder="0" 
                          scrolling="no" 
                          allow="autoplay; fullscreen; web-share" 
                          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-presentation" 
                          width="100%" 
                          height="400"
                          className="rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* 2. Description */}
                  <div className="relative mb-6">
                    <p className="text-sm text-gray-200 leading-relaxed drop-shadow-sm">
                      {release.description}
                    </p>
                  </div>
                  
                  {/* 3. Platform Logos */}
                  <div className="flex justify-center gap-6">
                    {/* Spinamp Logo Link */}
                    <Link
                      href={release.streamingLinks.spinamp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/logo relative"
                      title="Listen on Spinamp"
                    >
                      <div className="relative flex items-center justify-center w-16 h-16 rounded-full 
                                    bg-gradient-to-br from-cyan-900/60 via-purple-900/60 to-pink-900/60 
                                    backdrop-blur-xl border-2 border-cyan-400/30
                                    group-hover/logo:from-cyan-800/80 group-hover/logo:via-purple-800/80 group-hover/logo:to-pink-800/80
                                    group-hover/logo:border-cyan-300/50 group-hover/logo:scale-110
                                    transition-all duration-300 ease-out
                                    shadow-lg shadow-cyan-500/20 group-hover/logo:shadow-cyan-400/40">
                        
                        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/10 via-cyan-300/5 to-purple-300/5 group-hover/logo:from-white/20 group-hover/logo:via-cyan-300/10 group-hover/logo:to-purple-300/10 transition-all duration-300" />
                        
                        <Image
                          src={platformLogos['Spinamp']}
                          alt="Spinamp"
                          width={24}
                          height={24}
                          className="relative w-6 h-6 group-hover/logo:scale-110 transition-transform duration-300 drop-shadow-lg"
                        />
                        
                        <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-twinkle opacity-70" />
                      </div>
                    </Link>
                    
                    {/* Spotify Logo Link */}
                    <Link
                      href={release.streamingLinks.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/logo relative"
                      title="Listen on Spotify"
                    >
                      <div className="relative flex items-center justify-center w-16 h-16 rounded-full 
                                    bg-gradient-to-br from-emerald-900/60 via-green-900/60 to-teal-900/60 
                                    backdrop-blur-xl border-2 border-emerald-400/30
                                    group-hover/logo:from-emerald-800/80 group-hover/logo:via-green-800/80 group-hover/logo:to-teal-800/80
                                    group-hover/logo:border-emerald-300/50 group-hover/logo:scale-110
                                    transition-all duration-300 ease-out
                                    shadow-lg shadow-emerald-500/20 group-hover/logo:shadow-emerald-400/40">
                        
                        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/10 via-emerald-300/5 to-green-300/5 group-hover/logo:from-white/20 group-hover/logo:via-emerald-300/10 group-hover/logo:to-green-300/10 transition-all duration-300" />
                        
                        <Image
                          src={platformLogos['Spotify']}
                          alt="Spotify"
                          width={24}
                          height={24}
                          className="relative w-6 h-6 group-hover/logo:scale-110 transition-transform duration-300 drop-shadow-lg"
                        />
                        
                        <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-twinkle opacity-70" style={{animationDelay: '0.5s'}} />
                      </div>
                    </Link>
                  </div>
                </>
              ) : release.id === 2 ? (
                /* Non-Dystopian - Embedded Player Layout */
                <>
                  {/* 1. Embedded Player */}
                  <div className="mb-6">
                    {/* Enhanced Spinamp Player Container */}
                    <div className="relative bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl p-3 border-2 border-white/10 overflow-hidden group-hover:border-white/20 transition-colors duration-500">
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-2xl blur-sm" />
                      <div className="relative">
                        <iframe 
                          src="https://app.spinamp.xyz/embed/playlist/Yp35pI1cwQtyw42pzRck?colors=%7B%22primaryLight%22%3A%22%2322d3ee%22%2C%22primary%22%3A%22%2306b6d4%22%2C%22primaryDark%22%3A%22%230891b2%22%2C%22backgroundLight%22%3A%22%23030712%22%2C%22background%22%3A%22%230f172a%22%2C%22backgroundDark%22%3A%22%231e293b%22%2C%22backdrop%22%3A%22rgba%2815%2C23%2C42%2C0.8%29%22%2C%22borderColor%22%3A%22%2306b6d4%22%2C%22invertedBorderColor%22%3A%22%2322d3ee%22%2C%22textColor%22%3A%22%23f1f5f9%22%2C%22invertedTextColor%22%3A%22%23cbd5e1%22%2C%22active%22%3A%22%23a855f7%22%2C%22activeBorder%22%3A%22%2306b6d4%22%2C%22activeText%22%3A%22%23f1f5f9%22%2C%22favoritesColor%22%3A%22%23ec4899%22%7D" 
                          frameBorder="0" 
                          scrolling="no" 
                          allow="autoplay; fullscreen; web-share" 
                          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-presentation" 
                          width="100%" 
                          height="400"
                          className="rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* 2. Description */}
                  <div className="relative mb-6">
                    <p className="text-sm text-gray-200 leading-relaxed drop-shadow-sm">
                      {release.description}
                    </p>
                  </div>
                  
                  {/* 3. Platform Logos */}
                  <div className="flex justify-center gap-6">
                    {/* Spinamp Logo Link */}
                    <Link
                      href={release.streamingLinks.spinamp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/logo relative"
                      title="Listen on Spinamp"
                    >
                      <div className="relative flex items-center justify-center w-16 h-16 rounded-full 
                                    bg-gradient-to-br from-cyan-900/60 via-purple-900/60 to-pink-900/60 
                                    backdrop-blur-xl border-2 border-cyan-400/30
                                    group-hover/logo:from-cyan-800/80 group-hover/logo:via-purple-800/80 group-hover/logo:to-pink-800/80
                                    group-hover/logo:border-cyan-300/50 group-hover/logo:scale-110
                                    transition-all duration-300 ease-out
                                    shadow-lg shadow-cyan-500/20 group-hover/logo:shadow-cyan-400/40">
                        
                        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/10 via-cyan-300/5 to-purple-300/5 group-hover/logo:from-white/20 group-hover/logo:via-cyan-300/10 group-hover/logo:to-purple-300/10 transition-all duration-300" />
                        
                        <Image
                          src={platformLogos['Spinamp']}
                          alt="Spinamp"
                          width={24}
                          height={24}
                          className="relative w-6 h-6 group-hover/logo:scale-110 transition-transform duration-300 drop-shadow-lg"
                        />
                        
                        <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-twinkle opacity-70" />
                      </div>
                    </Link>
                    
                    {/* Spotify Logo Link */}
                    <Link
                      href={release.streamingLinks.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/logo relative"
                      title="Listen on Spotify"
                    >
                      <div className="relative flex items-center justify-center w-16 h-16 rounded-full 
                                    bg-gradient-to-br from-emerald-900/60 via-green-900/60 to-teal-900/60 
                                    backdrop-blur-xl border-2 border-emerald-400/30
                                    group-hover/logo:from-emerald-800/80 group-hover/logo:via-green-800/80 group-hover/logo:to-teal-800/80
                                    group-hover/logo:border-emerald-300/50 group-hover/logo:scale-110
                                    transition-all duration-300 ease-out
                                    shadow-lg shadow-emerald-500/20 group-hover/logo:shadow-emerald-400/40">
                        
                        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/10 via-emerald-300/5 to-green-300/5 group-hover/logo:from-white/20 group-hover/logo:via-emerald-300/10 group-hover/logo:to-green-300/10 transition-all duration-300" />
                        
                        <Image
                          src={platformLogos['Spotify']}
                          alt="Spotify"
                          width={24}
                          height={24}
                          className="relative w-6 h-6 group-hover/logo:scale-110 transition-transform duration-300 drop-shadow-lg"
                        />
                        
                        <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-twinkle opacity-70" style={{animationDelay: '0.5s'}} />
                      </div>
                    </Link>
                  </div>
                </>
              ) : release.id === 3 ? (
                /* Imagined Futures - Embedded Player Layout */
                <>
                  {/* 1. Embedded Player */}
                  <div className="mb-6">
                    {/* Enhanced Spinamp Player Container */}
                    <div className="relative bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl p-3 border-2 border-white/10 overflow-hidden group-hover:border-white/20 transition-colors duration-500">
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-2xl blur-sm" />
                      <div className="relative">
                        <iframe 
                          src="https://app.spinamp.xyz/embed/playlist/gOcBita6DNJ0feHnlPUL?colors=%7B%22primaryLight%22%3A%22%2322d3ee%22%2C%22primary%22%3A%22%2306b6d4%22%2C%22primaryDark%22%3A%22%230891b2%22%2C%22backgroundLight%22%3A%22%23030712%22%2C%22background%22%3A%22%230f172a%22%2C%22backgroundDark%22%3A%22%231e293b%22%2C%22backdrop%22%3A%22rgba%2815%2C23%2C42%2C0.8%29%22%2C%22borderColor%22%3A%22%2306b6d4%22%2C%22invertedBorderColor%22%3A%22%2322d3ee%22%2C%22textColor%22%3A%22%23f1f5f9%22%2C%22invertedTextColor%22%3A%22%23cbd5e1%22%2C%22active%22%3A%22%23a855f7%22%2C%22activeBorder%22%3A%22%2306b6d4%22%2C%22activeText%22%3A%22%23f1f5f9%22%2C%22favoritesColor%22%3A%22%23ec4899%22%7D" 
                          frameBorder="0" 
                          scrolling="no" 
                          allow="autoplay; fullscreen; web-share" 
                          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-presentation" 
                          width="100%" 
                          height="400"
                          className="rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* 2. Description */}
                  <div className="relative mb-6">
                    <p className="text-sm text-gray-200 leading-relaxed drop-shadow-sm">
                      {release.description}
                    </p>
                  </div>
                  
                  {/* 3. Platform Logos */}
                  <div className="flex justify-center gap-6">
                    {/* Spinamp Logo Link */}
                    <Link
                      href={release.streamingLinks.spinamp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/logo relative"
                      title="Listen on Spinamp"
                    >
                      <div className="relative flex items-center justify-center w-16 h-16 rounded-full 
                                    bg-gradient-to-br from-cyan-900/60 via-purple-900/60 to-pink-900/60 
                                    backdrop-blur-xl border-2 border-cyan-400/30
                                    group-hover/logo:from-cyan-800/80 group-hover/logo:via-purple-800/80 group-hover/logo:to-pink-800/80
                                    group-hover/logo:border-cyan-300/50 group-hover/logo:scale-110
                                    transition-all duration-300 ease-out
                                    shadow-lg shadow-cyan-500/20 group-hover/logo:shadow-cyan-400/40">
                        
                        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/10 via-cyan-300/5 to-purple-300/5 group-hover/logo:from-white/20 group-hover/logo:via-cyan-300/10 group-hover/logo:to-purple-300/10 transition-all duration-300" />
                        
                        <Image
                          src={platformLogos['Spinamp']}
                          alt="Spinamp"
                          width={24}
                          height={24}
                          className="relative w-6 h-6 group-hover/logo:scale-110 transition-transform duration-300 drop-shadow-lg"
                        />
                        
                        <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-twinkle opacity-70" />
                      </div>
                    </Link>
                    
                    {/* Spotify Logo Link */}
                    <Link
                      href={release.streamingLinks.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/logo relative"
                      title="Listen on Spotify"
                    >
                      <div className="relative flex items-center justify-center w-16 h-16 rounded-full 
                                    bg-gradient-to-br from-emerald-900/60 via-green-900/60 to-teal-900/60 
                                    backdrop-blur-xl border-2 border-emerald-400/30
                                    group-hover/logo:from-emerald-800/80 group-hover/logo:via-green-800/80 group-hover/logo:to-teal-800/80
                                    group-hover/logo:border-emerald-300/50 group-hover/logo:scale-110
                                    transition-all duration-300 ease-out
                                    shadow-lg shadow-emerald-500/20 group-hover/logo:shadow-emerald-400/40">
                        
                        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/10 via-emerald-300/5 to-green-300/5 group-hover/logo:from-white/20 group-hover/logo:via-emerald-300/10 group-hover/logo:to-green-300/10 transition-all duration-300" />
                        
                        <Image
                          src={platformLogos['Spotify']}
                          alt="Spotify"
                          width={24}
                          height={24}
                          className="relative w-6 h-6 group-hover/logo:scale-110 transition-transform duration-300 drop-shadow-lg"
                        />
                        
                        <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-twinkle opacity-70" style={{animationDelay: '0.5s'}} />
                      </div>
                    </Link>
                  </div>
                </>
              ) : release.id === 4 ? (
                /* The Quest For Meaning - Embedded Player Layout */
                <>
                  {/* 1. Embedded Player */}
                  <div className="mb-6">
                    {/* Enhanced Spinamp Player Container */}
                    <div className="relative bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl p-3 border-2 border-white/10 overflow-hidden group-hover:border-white/20 transition-colors duration-500">
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-2xl blur-sm" />
                      <div className="relative">
                        <iframe 
                          src="https://app.spinamp.xyz/embed/playlist/PebD9bFR1PWAHqO9pxfT?colors=%7B%22primaryLight%22%3A%22%2322d3ee%22%2C%22primary%22%3A%22%2306b6d4%22%2C%22primaryDark%22%3A%22%230891b2%22%2C%22backgroundLight%22%3A%22%23030712%22%2C%22background%22%3A%22%230f172a%22%2C%22backgroundDark%22%3A%22%231e293b%22%2C%22backdrop%22%3A%22rgba%2815%2C23%2C42%2C0.8%29%22%2C%22borderColor%22%3A%22%2306b6d4%22%2C%22invertedBorderColor%22%3A%22%2322d3ee%22%2C%22textColor%22%3A%22%23f1f5f9%22%2C%22invertedTextColor%22%3A%22%23cbd5e1%22%2C%22active%22%3A%22%23a855f7%22%2C%22activeBorder%22%3A%22%2306b6d4%22%2C%22activeText%22%3A%22%23f1f5f9%22%2C%22favoritesColor%22%3A%22%23ec4899%22%7D" 
                          frameBorder="0" 
                          scrolling="no" 
                          allow="autoplay; fullscreen; web-share" 
                          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-presentation" 
                          width="100%" 
                          height="400"
                          className="rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* 2. Description */}
                  <div className="relative mb-6">
                    <p className="text-sm text-gray-200 leading-relaxed drop-shadow-sm">
                      {release.description}
                    </p>
                  </div>
                  
                  {/* 3. Platform Logos */}
                  <div className="flex justify-center gap-6">
                    {/* Spinamp Logo Link */}
                    <Link
                      href={release.streamingLinks.spinamp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/logo relative"
                      title="Listen on Spinamp"
                    >
                      <div className="relative flex items-center justify-center w-16 h-16 rounded-full 
                                    bg-gradient-to-br from-cyan-900/60 via-purple-900/60 to-pink-900/60 
                                    backdrop-blur-xl border-2 border-cyan-400/30
                                    group-hover/logo:from-cyan-800/80 group-hover/logo:via-purple-800/80 group-hover/logo:to-pink-800/80
                                    group-hover/logo:border-cyan-300/50 group-hover/logo:scale-110
                                    transition-all duration-300 ease-out
                                    shadow-lg shadow-cyan-500/20 group-hover/logo:shadow-cyan-400/40">
                        
                        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/10 via-cyan-300/5 to-purple-300/5 group-hover/logo:from-white/20 group-hover/logo:via-cyan-300/10 group-hover/logo:to-purple-300/10 transition-all duration-300" />
                        
                        <Image
                          src={platformLogos['Spinamp']}
                          alt="Spinamp"
                          width={24}
                          height={24}
                          className="relative w-6 h-6 group-hover/logo:scale-110 transition-transform duration-300 drop-shadow-lg"
                        />
                        
                        <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-twinkle opacity-70" />
                      </div>
                    </Link>
                    
                    {/* Spotify Logo Link */}
                    <Link
                      href={release.streamingLinks.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/logo relative"
                      title="Listen on Spotify"
                    >
                      <div className="relative flex items-center justify-center w-16 h-16 rounded-full 
                                    bg-gradient-to-br from-emerald-900/60 via-green-900/60 to-teal-900/60 
                                    backdrop-blur-xl border-2 border-emerald-400/30
                                    group-hover/logo:from-emerald-800/80 group-hover/logo:via-green-800/80 group-hover/logo:to-teal-800/80
                                    group-hover/logo:border-emerald-300/50 group-hover/logo:scale-110
                                    transition-all duration-300 ease-out
                                    shadow-lg shadow-emerald-500/20 group-hover/logo:shadow-emerald-400/40">
                        
                        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/10 via-emerald-300/5 to-green-300/5 group-hover/logo:from-white/20 group-hover/logo:via-emerald-300/10 group-hover/logo:to-green-300/10 transition-all duration-300" />
                        
                        <Image
                          src={platformLogos['Spotify']}
                          alt="Spotify"
                          width={24}
                          height={24}
                          className="relative w-6 h-6 group-hover/logo:scale-110 transition-transform duration-300 drop-shadow-lg"
                        />
                        
                        <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-twinkle opacity-70" style={{animationDelay: '0.5s'}} />
                      </div>
                    </Link>
                  </div>
                </>
              ) : release.id === 5 ? (
                /* Constant Turnover Of Matter - Embedded Player Layout */
                <>
                  {/* 1. Embedded Player */}
                  <div className="mb-6">
                    {/* Enhanced Spinamp Player Container */}
                    <div className="relative bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl p-3 border-2 border-white/10 overflow-hidden group-hover:border-white/20 transition-colors duration-500">
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-2xl blur-sm" />
                      <div className="relative">
                        <iframe 
                          src="https://app.spinamp.xyz/embed/playlist/7l9F7EB3Y1pNNm4fs4vu?colors=%7B%22primaryLight%22%3A%22%2322d3ee%22%2C%22primary%22%3A%22%2306b6d4%22%2C%22primaryDark%22%3A%22%230891b2%22%2C%22backgroundLight%22%3A%22%23030712%22%2C%22background%22%3A%22%230f172a%22%2C%22backgroundDark%22%3A%22%231e293b%22%2C%22backdrop%22%3A%22rgba%2815%2C23%2C42%2C0.8%29%22%2C%22borderColor%22%3A%22%2306b6d4%22%2C%22invertedBorderColor%22%3A%22%2322d3ee%22%2C%22textColor%22%3A%22%23f1f5f9%22%2C%22invertedTextColor%22%3A%22%23cbd5e1%22%2C%22active%22%3A%22%23a855f7%22%2C%22activeBorder%22%3A%22%2306b6d4%22%2C%22activeText%22%3A%22%23f1f5f9%22%2C%22favoritesColor%22%3A%22%23ec4899%22%7D" 
                          frameBorder="0" 
                          scrolling="no" 
                          allow="autoplay; fullscreen; web-share" 
                          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-presentation" 
                          width="100%" 
                          height="400"
                          className="rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* 2. Description */}
                  <div className="relative mb-6">
                    <p className="text-sm text-gray-200 leading-relaxed drop-shadow-sm">
                      {release.description}
                    </p>
                  </div>
                  
                  {/* 3. Platform Logos */}
                  <div className="flex justify-center gap-6">
                    {/* Spinamp Logo Link */}
                    <Link
                      href={release.streamingLinks.spinamp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/logo relative"
                      title="Listen on Spinamp"
                    >
                      <div className="relative flex items-center justify-center w-16 h-16 rounded-full 
                                    bg-gradient-to-br from-cyan-900/60 via-purple-900/60 to-pink-900/60 
                                    backdrop-blur-xl border-2 border-cyan-400/30
                                    group-hover/logo:from-cyan-800/80 group-hover/logo:via-purple-800/80 group-hover/logo:to-pink-800/80
                                    group-hover/logo:border-cyan-300/50 group-hover/logo:scale-110
                                    transition-all duration-300 ease-out
                                    shadow-lg shadow-cyan-500/20 group-hover/logo:shadow-cyan-400/40">
                        
                        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/10 via-cyan-300/5 to-purple-300/5 group-hover/logo:from-white/20 group-hover/logo:via-cyan-300/10 group-hover/logo:to-purple-300/10 transition-all duration-300" />
                        
                        <Image
                          src={platformLogos['Spinamp']}
                          alt="Spinamp"
                          width={24}
                          height={24}
                          className="relative w-6 h-6 group-hover/logo:scale-110 transition-transform duration-300 drop-shadow-lg"
                        />
                        
                        <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-twinkle opacity-70" />
                      </div>
                    </Link>
                    
                    {/* Spotify Logo Link */}
                    <Link
                      href={release.streamingLinks.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/logo relative"
                      title="Listen on Spotify"
                    >
                      <div className="relative flex items-center justify-center w-16 h-16 rounded-full 
                                    bg-gradient-to-br from-emerald-900/60 via-green-900/60 to-teal-900/60 
                                    backdrop-blur-xl border-2 border-emerald-400/30
                                    group-hover/logo:from-emerald-800/80 group-hover/logo:via-green-800/80 group-hover/logo:to-teal-800/80
                                    group-hover/logo:border-emerald-300/50 group-hover/logo:scale-110
                                    transition-all duration-300 ease-out
                                    shadow-lg shadow-emerald-500/20 group-hover/logo:shadow-emerald-400/40">
                        
                        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/10 via-emerald-300/5 to-green-300/5 group-hover/logo:from-white/20 group-hover/logo:via-emerald-300/10 group-hover/logo:to-green-300/10 transition-all duration-300" />
                        
                        <Image
                          src={platformLogos['Spotify']}
                          alt="Spotify"
                          width={24}
                          height={24}
                          className="relative w-6 h-6 group-hover/logo:scale-110 transition-transform duration-300 drop-shadow-lg"
                        />
                        
                        <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-twinkle opacity-70" style={{animationDelay: '0.5s'}} />
                      </div>
                    </Link>
                  </div>
                </>
              ) : (
                /* Fallback - Should not be reached */
                <div className="relative space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors drop-shadow-md">
                    {release.title}
                  </h3>
                    <span className="text-sm text-gray-300 drop-shadow-sm">{release.year}</span>
                </div>
                
                  <span className="inline-block px-3 py-1.5 text-sm font-medium bg-purple-600/40 text-purple-200 rounded-full border border-purple-400/40 drop-shadow-sm">
                  {release.type}
                </span>
                
                  <p className="text-sm text-gray-200 leading-relaxed drop-shadow-sm">
                  {release.description}
                </p>
                
                  {/* Enhanced track listing */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-white drop-shadow-sm">Tracks:</h4>
                    <ul className="space-y-1.5">
                    {release.tracks.map((track, trackIndex) => (
                        <li key={trackIndex} className="text-xs text-gray-300 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-twinkle opacity-60" style={{animationDelay: `${trackIndex * 0.2}s`}} />
                        {track}
                      </li>
                    ))}
                  </ul>
                </div>
                
                  {/* Enhanced streaming links */}
                  <div className="flex gap-3 pt-3">
                  <Link
                    href={release.streamingLinks.spinamp}
                    target="_blank"
                    rel="noopener noreferrer"
                      className="group/btn flex items-center gap-2 px-4 py-2 text-sm bg-gradient-to-r from-cyan-600/60 to-blue-600/60 hover:from-cyan-500/80 hover:to-blue-500/80 text-cyan-200 rounded-lg transition-all duration-300 border border-cyan-400/40 hover:border-cyan-300/60 shadow-lg shadow-cyan-500/20 hover:scale-105"
                  >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-lg" />
                      <Play className="w-3 h-3 group-hover/btn:scale-110 transition-transform duration-300" />
                      <span className="relative">Spinamp</span>
                  </Link>
                  <Link
                    href={release.streamingLinks.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                      className="group/btn flex items-center gap-2 px-4 py-2 text-sm bg-gradient-to-r from-emerald-600/60 to-green-600/60 hover:from-emerald-500/80 hover:to-green-500/80 text-emerald-200 rounded-lg transition-all duration-300 border border-emerald-400/40 hover:border-emerald-300/60 shadow-lg shadow-emerald-500/20 hover:scale-105"
                  >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-lg" />
                      <Play className="w-3 h-3 group-hover/btn:scale-110 transition-transform duration-300" />
                      <span className="relative">Spotify</span>
                  </Link>
                </div>
              </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Dramatically Enhanced Cosmic Atmosphere */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Constellation Patterns */}
        <div className="absolute top-1/6 left-1/6 w-1 h-1 bg-cyan-300 rounded-full animate-twinkle opacity-80" />
        <div className="absolute top-1/5 left-1/4 w-0.5 h-0.5 bg-purple-300 rounded-full animate-twinkle opacity-60" style={{animationDelay: '0.5s'}} />
        <div className="absolute top-1/4 left-1/5 w-1.5 h-1.5 bg-pink-300 rounded-full animate-twinkle opacity-70" style={{animationDelay: '1s'}} />
        
        <div className="absolute top-1/3 right-1/6 w-1 h-1 bg-emerald-300 rounded-full animate-twinkle opacity-75" style={{animationDelay: '1.5s'}} />
        <div className="absolute top-1/4 right-1/4 w-0.5 h-0.5 bg-cyan-300 rounded-full animate-twinkle opacity-55" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/5 right-1/5 w-1.5 h-1.5 bg-purple-300 rounded-full animate-twinkle opacity-65" style={{animationDelay: '2.5s'}} />
        
        <div className="absolute bottom-1/6 left-1/3 w-1 h-1 bg-pink-300 rounded-full animate-twinkle opacity-70" style={{animationDelay: '3s'}} />
        <div className="absolute bottom-1/5 left-1/6 w-0.5 h-0.5 bg-emerald-300 rounded-full animate-twinkle opacity-50" style={{animationDelay: '3.5s'}} />
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-twinkle opacity-75" style={{animationDelay: '4s'}} />
        
        {/* Shooting Stars */}
        <div className="absolute top-1/4 left-0 w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 animate-shooting-star" />
        <div className="absolute top-3/4 right-0 w-24 h-0.5 bg-gradient-to-l from-transparent via-purple-400 to-transparent opacity-0 animate-shooting-star" style={{animationDelay: '5s'}} />
        
        {/* Musical Nebula Clouds */}
        <div className="absolute top-1/5 left-1/5 w-40 h-40 bg-gradient-radial from-cyan-500/10 via-blue-500/5 to-transparent rounded-full blur-2xl animate-pulse" style={{animationDuration: '8s'}} />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-radial from-purple-500/10 via-pink-500/5 to-transparent rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s', animationDuration: '10s'}} />
        <div className="absolute top-2/3 left-1/2 w-36 h-36 bg-gradient-radial from-emerald-500/8 via-teal-500/4 to-transparent rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s', animationDuration: '12s'}} />
        
        {/* Sound Waves */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent animate-pulse" style={{animationDelay: '1s'}} />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent animate-pulse" style={{animationDelay: '3s', transform: 'translateY(20px)'}} />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-400/25 to-transparent animate-pulse" style={{animationDelay: '2s', transform: 'translateY(-20px)'}} />
      </div>
    </div>
  )
} 