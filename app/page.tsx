import { artistInfo, socialLinks } from '@/lib/data'
import { Globe, Music, Video, Coins } from 'lucide-react'
import Image from 'next/image'

const iconMap = {
  globe: Globe,
  music: Music,
  video: Video,
  coins: Coins,
}

// Platform logos that we have available
const platformLogos: Record<string, string> = {
  'Spotify': '/images/logos/spotify.svg',
  'Spinamp': '/images/logos/spinamp.jpg',
  'Hey': '/images/logos/hey.png',
  'Farcaster': '/images/logos/farcaster.svg',
  'Arena': '/images/logos/arena.svg',
  'X': '/images/logos/x.svg',
}

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* GIF Background */}
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
      <div className="relative z-10 text-center space-y-8 px-4">
        {/* Main Title with Enhanced Cosmic Glow */}
        <div className="relative">
          {/* Multiple glow layers for depth */}
          <h1 className="absolute inset-0 text-4xl md:text-6xl lg:text-7xl font-bold text-cyan-400 mb-4 font-['Spin_Cycle',_'Orbitron',_monospace] lowercase tracking-wider blur-sm opacity-50">
            {artistInfo.name}
          </h1>
          <h1 className="absolute inset-0 text-4xl md:text-6xl lg:text-7xl font-bold text-purple-400 mb-4 font-['Spin_Cycle',_'Orbitron',_monospace] lowercase tracking-wider blur-md opacity-30">
            {artistInfo.name}
          </h1>
          <h1 className="relative text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 font-['Spin_Cycle',_'Orbitron',_monospace] lowercase tracking-wider drop-shadow-2xl">
          {artistInfo.name}
        </h1>
          
          {/* Constellation stars around title */}
          <div className="absolute -top-4 -left-4 w-2 h-2 bg-cyan-300 rounded-full animate-twinkle opacity-80" />
          <div className="absolute -top-8 right-12 w-1 h-1 bg-purple-300 rounded-full animate-twinkle opacity-60" style={{animationDelay: '1s'}} />
          <div className="absolute -bottom-4 -right-4 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-twinkle opacity-70" style={{animationDelay: '2s'}} />
          <div className="absolute -bottom-8 left-8 w-1 h-1 bg-pink-300 rounded-full animate-twinkle opacity-50" style={{animationDelay: '0.5s'}} />
        </div>
        
        {/* Enhanced Tagline */}
        <div className="relative">
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto font-light italic font-bold drop-shadow-lg">
          {artistInfo.tagline}
        </p>
          {/* Subtle glow behind tagline */}
          <div className="absolute inset-0 text-lg md:text-xl lg:text-2xl text-cyan-400 max-w-2xl mx-auto font-light italic font-bold blur-sm opacity-20">
            {artistInfo.tagline}
          </div>
        </div>
        
        {/* Silicon Overlords Promotion Section - Enhanced */}
        <div className="mt-16 mb-24">
          <div className="relative bg-gradient-to-br from-cyan-900/40 via-purple-900/40 to-pink-900/40 backdrop-blur-xl border-2 border-cyan-400/30 rounded-3xl p-8 max-w-6xl mx-auto shadow-2xl shadow-cyan-500/20">
            {/* Enhanced cosmic effects */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 rounded-3xl blur-sm" />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent rounded-3xl" />
            
            {/* Dynamic sparkles */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-300 rounded-full animate-twinkle opacity-80" />
            <div className="absolute top-8 right-12 w-1 h-1 bg-purple-300 rounded-full animate-twinkle opacity-60" style={{animationDelay: '1s'}} />
            <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-pink-300 rounded-full animate-twinkle opacity-70" style={{animationDelay: '2s'}} />
            <div className="absolute bottom-12 left-12 w-1 h-1 bg-emerald-300 rounded-full animate-twinkle opacity-50" style={{animationDelay: '0.5s'}} />
            
            {/* Promotional Text */}
            <div className="relative text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-['Spin_Cycle',_'Orbitron',_monospace] lowercase tracking-wider drop-shadow-lg">
                🌌 LATEST TRANSMISSION 🌌
              </h2>
              <h3 className="text-xl md:text-2xl text-cyan-300 mb-4 font-semibold drop-shadow-md">
                Silicon Overlords
              </h3>
              <p className="text-lg text-gray-200 italic drop-shadow-sm">
                "Humans no more, it's the grand algorithm that has figured it all out..."
              </p>
            </div>
            
            {/* Embedded Content with Enhanced Effects */}
            <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
              {/* Song Embed - Enhanced */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500" />
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/40 to-blue-400/40 rounded-xl blur-sm animate-pulse" />
                <div className="relative bg-black/40 rounded-xl p-3 border-2 border-cyan-400/50 shadow-2xl shadow-cyan-500/30 group-hover:border-cyan-300/70 transition-all duration-500">
                  <iframe 
                    src="https://app.spinamp.xyz/embed/player/silicon-overlords-indie-rock-version-1711228227807" 
                    frameBorder="0" 
                    scrolling="no" 
                    allow="autoplay; fullscreen; web-share" 
                    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-presentation" 
                    width="350" 
                    height="650"
                    className="rounded-lg"
                  />
                </div>
                {/* Collect Button for Song - Enhanced */}
                <div className="mt-6 text-center">
                  <a
                    href="https://app.spinamp.xyz/track/silicon-overlords-indie-rock-version-1711228227807"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600/60 to-blue-600/60 border-2 border-cyan-400/60 rounded-full backdrop-blur-md hover:from-cyan-500/80 hover:to-blue-500/80 hover:border-cyan-300/80 transition-all duration-300 text-white font-bold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-full" />
                    <Coins className="w-5 h-5 group-hover/btn:scale-110 group-hover/btn:rotate-12 transition-transform duration-300" />
                    <span className="relative">Collect on Spinamp</span>
                    <div className="w-2 h-2 bg-cyan-300 rounded-full animate-twinkle opacity-70" />
                  </a>
                </div>
              </div>
              
              {/* Video Embed - Enhanced */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-red-500/30 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500" />
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-400/40 to-pink-400/40 rounded-xl blur-sm animate-pulse" style={{animationDelay: '1s'}} />
                <div className="relative bg-black/40 rounded-xl p-3 border-2 border-purple-400/50 shadow-2xl shadow-purple-500/30 group-hover:border-purple-300/70 transition-all duration-500">
                  <iframe 
                    src="https://gleev.xyz/embedded/video/21136" 
                    scrolling="no" 
                    height="400" 
                    width="600" 
                    allowFullScreen
                    className="rounded-lg"
                  />
                </div>
                {/* Collect Button for Video - Enhanced */}
                <div className="mt-6 text-center">
                  <a
                    href="https://gleev.xyz/video/21136"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600/60 to-pink-600/60 border-2 border-purple-400/60 rounded-full backdrop-blur-md hover:from-purple-500/80 hover:to-pink-500/80 hover:border-purple-300/80 transition-all duration-300 text-white font-bold shadow-lg shadow-purple-500/30 hover:shadow-purple-400/50 hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-full" />
                    <Video className="w-5 h-5 group-hover/btn:scale-110 group-hover/btn:rotate-12 transition-transform duration-300" />
                    <span className="relative">Collect on Gleev</span>
                    <div className="w-2 h-2 bg-purple-300 rounded-full animate-twinkle opacity-70" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Cosmic Social Media Constellation */}
        <div className="mt-16 space-y-12">
          {/* Music Platforms Row (Top Tier) - Enhanced */}
          <div className="flex justify-center gap-12 relative">
            {/* Enhanced Music Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: -1}}>
              <defs>
                <linearGradient id="musicGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6"/>
                  <stop offset="50%" stopColor="#a855f7" stopOpacity="0.4"/>
                  <stop offset="100%" stopColor="#ec4899" stopOpacity="0.6"/>
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <path d="M 20% 50% Q 50% 20% 80% 50%" stroke="url(#musicGradient)" strokeWidth="4" fill="none" filter="url(#glow)" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
              <path d="M 25% 55% Q 50% 25% 75% 55%" stroke="url(#musicGradient)" strokeWidth="2" fill="none" opacity="0.5" className="animate-pulse" style={{animationDelay: '1s'}}/>
            </svg>

            {socialLinks.filter(link => link.type === 'music').map((link, index) => {
              const IconComponent = iconMap[link.icon as keyof typeof iconMap]
              const hasLogo = platformLogos[link.name]
              
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative transform hover:scale-110 transition-all duration-500"
                  title={link.description}
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
                      {hasLogo ? (
                        <Image
                          src={hasLogo}
                          alt={`${link.name} logo`}
                          width={32}
                          height={32}
                          className="w-8 h-8 group-hover:scale-110 transition-all duration-300 drop-shadow-lg"
                        />
                      ) : (
                        <IconComponent className="w-8 h-8 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
                      )}
                      
                      {/* Platform Name */}
                      <span className="text-sm font-semibold mt-2 font-medium opacity-90 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md">
                        {link.name}
                      </span>
                    </div>

                    {/* Enhanced Cosmic Sparkles */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-300 rounded-full animate-twinkle opacity-80" style={{animationDelay: '0s'}} />
                    <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-purple-300 rounded-full animate-twinkle opacity-70" style={{animationDelay: '1s'}} />
                    <div className="absolute top-3 left-2 w-1 h-1 bg-pink-300 rounded-full animate-twinkle opacity-60" style={{animationDelay: '2s'}} />
                    <div className="absolute bottom-2 right-3 w-1 h-1 bg-emerald-300 rounded-full animate-twinkle opacity-50" style={{animationDelay: '1.5s'}} />
                  </div>
                </a>
              )
            })}
          </div>

          {/* Social Platforms Row (Bottom Tier) - Enhanced */}
          <div className="flex flex-wrap justify-center gap-8 relative">
            {/* Enhanced Social Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: -1}}>
              <defs>
                <linearGradient id="socialGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" stopOpacity="0.5"/>
                  <stop offset="25%" stopColor="#06b6d4" stopOpacity="0.3"/>
                  <stop offset="75%" stopColor="#10b981" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#ec4899" stopOpacity="0.5"/>
                </linearGradient>
              </defs>
              <path d="M 10% 50% Q 30% 20% 50% 50% Q 70% 80% 90% 50%" stroke="url(#socialGradient)" strokeWidth="2" fill="none" filter="url(#glow)" className="animate-pulse"/>
              <path d="M 15% 55% Q 35% 25% 50% 55% Q 65% 85% 85% 55%" stroke="url(#socialGradient)" strokeWidth="1" fill="none" opacity="0.4" className="animate-pulse" style={{animationDelay: '1s'}}/>
            </svg>

            {socialLinks.filter(link => link.type === 'social').map((link, index) => {
              const IconComponent = iconMap[link.icon as keyof typeof iconMap]
              const hasLogo = platformLogos[link.name]
              
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative transform hover:scale-110 transition-all duration-500"
                  title={link.description}
                >
                  {/* Enhanced Orbital Rings for Social */}
                  <div className="absolute inset-0 rounded-full border-2 border-purple-400/40 animate-spin-slow group-hover:border-emerald-400/60 transition-colors duration-700" 
                       style={{
                         animationDuration: '8s', 
                         transform: 'scale(2.2)'
                       }} />
                  <div className="absolute inset-0 rounded-full border border-cyan-400/30 animate-spin-slow group-hover:border-pink-400/50 transition-colors duration-700" 
                       style={{
                         animationDuration: '12s', 
                         animationDirection: 'reverse', 
                         transform: 'scale(1.8)'
                       }} />
                  
                  {/* Enhanced Pulse Effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-radial from-purple-400/15 via-cyan-400/10 to-transparent group-hover:from-purple-300/25 group-hover:via-cyan-300/15 animate-pulse transition-all duration-700"
                       style={{
                         animationDuration: '3s', 
                         transform: 'scale(1.4)'
                       }} />
                  
                  {/* Main Button - Enhanced */}
                  <div className="relative flex items-center justify-center w-24 h-24 rounded-full 
                                bg-gradient-to-br from-purple-900/50 via-cyan-900/50 to-emerald-900/50 
                                backdrop-blur-xl border-2 border-white/25
                                group-hover:from-purple-800/70 group-hover:via-cyan-800/70 group-hover:to-emerald-800/70
                                group-hover:border-white/40 group-hover:scale-110
                                transition-all duration-500 ease-out
                                shadow-xl shadow-purple-500/25 group-hover:shadow-emerald-500/40">
                    
                    {/* Enhanced Inner Glow */}
                    <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/8 via-purple-300/5 to-cyan-300/5 group-hover:from-white/15 group-hover:via-purple-300/8 group-hover:to-cyan-300/8 transition-all duration-500" />
                    
                    {/* Icon/Logo Container */}
                    <div className="relative z-10 flex flex-col items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {hasLogo ? (
                        <Image
                          src={hasLogo}
                          alt={`${link.name} logo`}
                          width={28}
                          height={28}
                          className="w-7 h-7 group-hover:scale-110 transition-all duration-300 drop-shadow-lg"
                        />
                      ) : (
                        <IconComponent className="w-7 h-7 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
                      )}
                      
                      {/* Platform Name */}
                      <span className="text-xs mt-1.5 font-medium opacity-85 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-sm">
                        {link.name}
                      </span>
                    </div>

                    {/* Enhanced Cosmic Sparkles */}
                    <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-purple-300 rounded-full animate-twinkle opacity-70" style={{animationDelay: '0s'}} />
                    <div className="absolute bottom-3 left-3 w-1 h-1 bg-cyan-300 rounded-full animate-twinkle opacity-60" style={{animationDelay: '1s'}} />
                    <div className="absolute top-3 left-2 w-1 h-1 bg-emerald-300 rounded-full animate-twinkle opacity-50" style={{animationDelay: '2s'}} />
                  </div>
                </a>
              )
            })}
          </div>
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
        
        {/* Nebula Clouds */}
        <div className="absolute top-1/5 left-1/5 w-40 h-40 bg-gradient-radial from-cyan-500/10 via-blue-500/5 to-transparent rounded-full blur-2xl animate-pulse" style={{animationDuration: '8s'}} />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-radial from-purple-500/10 via-pink-500/5 to-transparent rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s', animationDuration: '10s'}} />
        <div className="absolute top-2/3 left-1/2 w-36 h-36 bg-gradient-radial from-emerald-500/8 via-teal-500/4 to-transparent rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s', animationDuration: '12s'}} />
        
        {/* Energy Waves */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent animate-pulse" style={{animationDelay: '1s'}} />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent animate-pulse" style={{animationDelay: '3s', transform: 'translateY(20px)'}} />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-400/25 to-transparent animate-pulse" style={{animationDelay: '2s', transform: 'translateY(-20px)'}} />
      </div>
    </div>
  )
} 