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
    description: 'Visions of tomorrow through sound, bridging the gap between technological advancement and spiritual understanding.',
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
    description: 'An introspective journey into the fundamental questions of existence, representing the "Spiritual" side of the binary.',
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
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Spin_Cycle',_'Orbitron',_monospace] lowercase tracking-wider cosmic-glow">
            Musical Journey
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light italic">
            Traversing the cosmos through sound - where Space and Tech meets Spiritual and Ancient
          </p>
          
          {/* Main Streaming Links */}
          <div className="flex justify-center gap-8 mt-8">
            {/* Spinamp Button */}
            <a
              href="https://app.spinamp.xyz/artist/eclipsing-binary-1701854521560"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              title="Stream on Spinamp"
            >
              {/* Enhanced Orbital Rings for Music Platforms */}
              <div className="absolute inset-0 rounded-full border border-amber-400/40 animate-spin-slow group-hover:border-purple-400/60 transition-colors duration-700" 
                   style={{
                     animationDuration: '6s', 
                     transform: 'scale(2.2)'
                   }} />
              
              {/* Secondary Ring */}
              <div className="absolute inset-0 rounded-full border border-purple-400/30 animate-spin-slow group-hover:border-amber-400/50 transition-colors duration-700" 
                   style={{
                     animationDuration: '10s', 
                     animationDirection: 'reverse', 
                     transform: 'scale(1.8)'
                   }} />
              
              {/* Love Heart Pulse - Enhanced for Music */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500/15 to-purple-500/15 group-hover:from-amber-400/25 group-hover:to-purple-400/25 animate-pulse transition-all duration-700"
                   style={{
                     animationDuration: '2s', 
                     transform: 'scale(1.4)'
                   }} />
              
              {/* Main Button - Larger for Music Platforms */}
              <div className="relative flex items-center justify-center w-24 h-24 rounded-full 
                            bg-gradient-to-br from-amber-900/50 to-purple-900/50 
                            backdrop-blur-md border border-white/20
                            group-hover:from-amber-800/70 group-hover:to-purple-800/70
                            group-hover:border-white/40 group-hover:scale-110
                            transition-all duration-500 ease-out
                            shadow-lg group-hover:shadow-2xl group-hover:shadow-amber-500/30">
                
                {/* Inner Glow */}
                <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/5 to-transparent group-hover:from-white/10 transition-all duration-500" />
                
                {/* Icon/Logo Container */}
                <div className="relative z-10 flex flex-col items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={platformLogos['Spinamp']}
                    alt="Spinamp logo"
                    width={28}
                    height={28}
                    className="w-7 h-7 group-hover:scale-110 transition-all duration-300"
                  />
                  
                  {/* Platform Name */}
                  <span className="text-xs font-semibold mt-1 font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    Spinamp
                  </span>
                </div>

                {/* Enhanced Cosmic Sparkles for Music */}
                <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-amber-300 rounded-full animate-pulse opacity-60" style={{animationDelay: '0s'}} />
                <div className="absolute bottom-3 left-3 w-1 h-1 bg-purple-300 rounded-full animate-pulse opacity-80" style={{animationDelay: '1s'}} />
                <div className="absolute top-3 left-2 w-1 h-1 bg-amber-400 rounded-full animate-pulse opacity-70" style={{animationDelay: '2s'}} />
              </div>

              {/* Musical Connection Lines (visible on hover) */}
              <div className="absolute -z-10 opacity-0 group-hover:opacity-30 transition-opacity duration-700">
                <div className="absolute top-1/2 left-full w-8 h-px bg-gradient-to-r from-amber-400 to-transparent" />
                <div className="absolute top-1/2 right-full w-8 h-px bg-gradient-to-l from-purple-400 to-transparent" />
              </div>
            </a>
            
            {/* Spotify Button */}
            <a
              href="https://open.spotify.com/artist/3GwU5dEfyoFPUqQIIcYSmW"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              title="Listen on Spotify"
            >
              {/* Enhanced Orbital Rings for Music Platforms */}
              <div className="absolute inset-0 rounded-full border border-amber-400/40 animate-spin-slow group-hover:border-purple-400/60 transition-colors duration-700" 
                   style={{
                     animationDuration: '6s', 
                     transform: 'scale(2.2)'
                   }} />
              
              {/* Secondary Ring */}
              <div className="absolute inset-0 rounded-full border border-purple-400/30 animate-spin-slow group-hover:border-amber-400/50 transition-colors duration-700" 
                   style={{
                     animationDuration: '10s', 
                     animationDirection: 'reverse', 
                     transform: 'scale(1.8)'
                   }} />
              
              {/* Love Heart Pulse - Enhanced for Music */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500/15 to-purple-500/15 group-hover:from-amber-400/25 group-hover:to-purple-400/25 animate-pulse transition-all duration-700"
                   style={{
                     animationDuration: '2s', 
                     transform: 'scale(1.4)'
                   }} />
              
              {/* Main Button - Larger for Music Platforms */}
              <div className="relative flex items-center justify-center w-24 h-24 rounded-full 
                            bg-gradient-to-br from-amber-900/50 to-purple-900/50 
                            backdrop-blur-md border border-white/20
                            group-hover:from-amber-800/70 group-hover:to-purple-800/70
                            group-hover:border-white/40 group-hover:scale-110
                            transition-all duration-500 ease-out
                            shadow-lg group-hover:shadow-2xl group-hover:shadow-amber-500/30">
                
                {/* Inner Glow */}
                <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/5 to-transparent group-hover:from-white/10 transition-all duration-500" />
                
                {/* Icon/Logo Container */}
                <div className="relative z-10 flex flex-col items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={platformLogos['Spotify']}
                    alt="Spotify logo"
                    width={28}
                    height={28}
                    className="w-7 h-7 group-hover:scale-110 transition-all duration-300"
                  />
                  
                  {/* Platform Name */}
                  <span className="text-xs font-semibold mt-1 font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    Spotify
                  </span>
                </div>

                {/* Enhanced Cosmic Sparkles for Music */}
                <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-amber-300 rounded-full animate-pulse opacity-60" style={{animationDelay: '0s'}} />
                <div className="absolute bottom-3 left-3 w-1 h-1 bg-purple-300 rounded-full animate-pulse opacity-80" style={{animationDelay: '1s'}} />
                <div className="absolute top-3 left-2 w-1 h-1 bg-amber-400 rounded-full animate-pulse opacity-70" style={{animationDelay: '2s'}} />
              </div>

              {/* Musical Connection Lines (visible on hover) */}
              <div className="absolute -z-10 opacity-0 group-hover:opacity-30 transition-opacity duration-700">
                <div className="absolute top-1/2 left-full w-8 h-px bg-gradient-to-r from-amber-400 to-transparent" />
                <div className="absolute top-1/2 right-full w-8 h-px bg-gradient-to-l from-purple-400 to-transparent" />
              </div>
            </a>
          </div>
        </div>

        {/* Releases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {releases.map((release, index) => (
            <div
              key={release.id}
              className="group relative bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-all duration-500 hover:scale-105"
            >
              {/* Cosmic sparkles */}
              <div className="absolute top-3 right-3 w-1 h-1 bg-amber-400 rounded-full animate-pulse opacity-60" style={{animationDelay: `${index * 0.5}s`}} />
              <div className="absolute bottom-4 left-4 w-0.5 h-0.5 bg-purple-400 rounded-full animate-pulse opacity-80" style={{animationDelay: `${index * 0.7}s`}} />
              
              {/* Release artwork */}
              <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl mb-4 flex items-center justify-center border border-white/10 overflow-hidden">
                {release.albumArt ? (
                  <Image
                    src={release.albumArt}
                    alt={`${release.title} album cover`}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-xl"
                  />
                ) : (
                  <Music2 className="w-12 h-12 text-white/60" />
                )}
              </div>
              
              {/* Release info */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {release.title}
                  </h3>
                  <span className="text-sm text-gray-400">{release.year}</span>
                </div>
                
                <span className="inline-block px-3 py-1 text-xs font-medium bg-purple-600/30 text-purple-200 rounded-full border border-purple-500/30">
                  {release.type}
                </span>
                
                <p className="text-sm text-gray-300 leading-relaxed">
                  {release.description}
                </p>
                
                {/* Track listing */}
                <div className="space-y-1">
                  <h4 className="text-sm font-medium text-white">Tracks:</h4>
                  <ul className="space-y-1">
                    {release.tracks.map((track, trackIndex) => (
                      <li key={trackIndex} className="text-xs text-gray-400 flex items-center gap-2">
                        <div className="w-1 h-1 bg-purple-400 rounded-full" />
                        {track}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Streaming links */}
                <div className="flex gap-2 pt-2">
                  <Link
                    href={release.streamingLinks.spinamp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1.5 text-xs bg-amber-600/30 hover:bg-amber-600/50 text-amber-200 rounded-md transition-colors border border-amber-500/30"
                  >
                    <Play className="w-3 h-3" />
                    Spinamp
                  </Link>
                  <Link
                    href={release.streamingLinks.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1.5 text-xs bg-green-600/30 hover:bg-green-600/50 text-green-200 rounded-md transition-colors border border-green-500/30"
                  >
                    <Play className="w-3 h-3" />
                    Spotify
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Cosmic Atmosphere */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Musical notes floating */}
        <div className="absolute top-1/4 left-1/5 w-3 h-3 bg-amber-400/30 rounded-full animate-pulse" style={{animationDelay: '1s', animationDuration: '3s'}} />
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-purple-400/25 rounded-full animate-pulse" style={{animationDelay: '2s', animationDuration: '4s'}} />
        <div className="absolute top-2/3 left-1/3 w-4 h-4 bg-cyan-400/20 rounded-full animate-pulse" style={{animationDelay: '0.5s', animationDuration: '5s'}} />
        
        {/* Cosmic dust */}
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl animate-pulse" style={{animationDuration: '6s'}} />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-amber-500/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s', animationDuration: '8s'}} />
      </div>
    </div>
  )
} 