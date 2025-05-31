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
  'Hey.xyz': '/images/logos/hey.png',
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
      
      {/* Dark overlay for text readability - increased opacity */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Content */}
      <div className="relative z-10 text-center space-y-8 px-4">
        {/* Main Title with Cosmic Glow */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 font-['Spin_Cycle',_'Orbitron',_monospace] lowercase tracking-wider cosmic-glow">
          {artistInfo.name}
        </h1>
        
        {/* Tagline */}
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto font-light italic font-bold">
          {artistInfo.tagline}
        </p>
        
        {/* Cosmic Social Media Constellation */}
        <div className="mt-16 space-y-8">
          {/* Music Platforms Row (Top Tier) */}
          <div className="flex justify-center gap-8 relative">
            {/* Music Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: -1}}>
              <defs>
                <linearGradient id="musicGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4"/>
                  <stop offset="50%" stopColor="#a855f7" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.4"/>
                </linearGradient>
              </defs>
              {/* Special music connection lines */}
              <path d="M 25% 50% Q 50% 30% 75% 50%" stroke="url(#musicGradient)" strokeWidth="3" fill="none" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
            </svg>

            {socialLinks.filter(link => link.type === 'music').map((link, index) => {
              const IconComponent = iconMap[link.icon as keyof typeof iconMap]
              const hasLogo = platformLogos[link.name]
              const isMusicPlatform = true
              
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  title={link.description}
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
                      {hasLogo ? (
                        <Image
                          src={hasLogo}
                          alt={`${link.name} logo`}
                          width={28}
                          height={28}
                          className="w-7 h-7 group-hover:scale-110 transition-all duration-300"
                        />
                      ) : (
                        <IconComponent className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
                      )}
                      
                      {/* Platform Name */}
                      <span className="text-xs font-semibold mt-1 font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                        {link.name}
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
              )
            })}
          </div>

          {/* Social Platforms Row (Bottom Tier) */}
          <div className="flex flex-wrap justify-center gap-6 relative">
            {/* Social Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: -1}}>
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3"/>
                  <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.2"/>
                  <stop offset="100%" stopColor="#a855f7" stopOpacity="0.3"/>
                </linearGradient>
              </defs>
              {/* Connection lines between buttons */}
              <path d="M 15% 50% Q 50% 30% 85% 50%" stroke="url(#connectionGradient)" strokeWidth="1" fill="none" className="animate-pulse"/>
            </svg>

            {socialLinks.filter(link => link.type === 'social').map((link, index) => {
              const IconComponent = iconMap[link.icon as keyof typeof iconMap]
              const hasLogo = platformLogos[link.name]
              const isMusicPlatform = false
              
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  title={link.description}
                >
                  {/* Standard Orbital Rings for Social Platforms */}
                  <div className="absolute inset-0 rounded-full border border-purple-400/30 animate-spin-slow group-hover:border-cyan-400/50 transition-colors duration-700" 
                       style={{
                         animationDuration: '8s', 
                         transform: 'scale(1.8)'
                       }} />
                  
                  {/* Secondary Ring */}
                  <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-spin-slow group-hover:border-purple-400/40 transition-colors duration-700" 
                       style={{
                         animationDuration: '12s', 
                         animationDirection: 'reverse', 
                         transform: 'scale(1.4)'
                       }} />
                  
                  {/* Love Heart Pulse - Standard for Social */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 group-hover:from-pink-400/20 group-hover:to-purple-400/20 animate-pulse transition-all duration-700"
                       style={{
                         animationDuration: '3s', 
                         transform: 'scale(1.2)'
                       }} />
                  
                  {/* Main Button - Standard for Social Platforms */}
                  <div className="relative flex items-center justify-center w-20 h-20 rounded-full 
                                bg-gradient-to-br from-purple-900/40 to-cyan-900/40 
                                backdrop-blur-md border border-white/20
                                group-hover:from-purple-800/60 group-hover:to-cyan-800/60
                                group-hover:border-white/40 group-hover:scale-110
                                transition-all duration-500 ease-out
                                shadow-lg group-hover:shadow-2xl group-hover:shadow-purple-500/25">
                    
                    {/* Inner Glow */}
                    <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/5 to-transparent group-hover:from-white/10 transition-all duration-500" />
                    
                    {/* Icon/Logo Container */}
                    <div className="relative z-10 flex flex-col items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {hasLogo ? (
                        <Image
                          src={hasLogo}
                          alt={`${link.name} logo`}
                          width={24}
                          height={24}
                          className="w-6 h-6 group-hover:scale-110 transition-all duration-300"
                        />
                      ) : (
                        <IconComponent className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                      )}
                      
                      {/* Platform Name */}
                      <span className="text-xs mt-1 font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                        {link.name}
                      </span>
                    </div>

                    {/* Standard Cosmic Sparkles for Social */}
                    <div className="absolute top-2 right-2 w-1 h-1 bg-white rounded-full animate-pulse opacity-60" style={{animationDelay: '0s'}} />
                    <div className="absolute bottom-3 left-3 w-0.5 h-0.5 bg-cyan-400 rounded-full animate-pulse opacity-80" style={{animationDelay: '1s'}} />
                    <div className="absolute top-3 left-2 w-0.5 h-0.5 bg-purple-400 rounded-full animate-pulse opacity-70" style={{animationDelay: '2s'}} />
                  </div>

                  {/* Social Connection Lines (visible on hover) */}
                  <div className="absolute -z-10 opacity-0 group-hover:opacity-30 transition-opacity duration-700">
                    <div className="absolute top-1/2 left-full w-8 h-px bg-gradient-to-r from-purple-400 to-transparent" />
                    <div className="absolute top-1/2 right-full w-8 h-px bg-gradient-to-l from-cyan-400 to-transparent" />
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>

      {/* Enhanced Cosmic Atmosphere */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Love Hearts */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rotate-45 bg-pink-400/20 animate-bounce" style={{animationDelay: '0s', animationDuration: '4s'}} />
        <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 rotate-45 bg-pink-300/30 animate-bounce" style={{animationDelay: '2s', animationDuration: '5s'}} />
        
        {/* Music Notes for Music Platforms */}
        <div className="absolute top-1/5 left-1/5 w-3 h-3 bg-amber-400/30 rounded-full animate-pulse" style={{animationDelay: '1s', animationDuration: '3s'}} />
        <div className="absolute bottom-1/5 right-1/5 w-2 h-2 bg-amber-300/25 rounded-full animate-pulse" style={{animationDelay: '3s', animationDuration: '4s'}} />
        
        {/* Cosmic Dust */}
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl animate-pulse" style={{animationDuration: '6s'}} />
        <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-cyan-500/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s', animationDuration: '8s'}} />
        
        {/* Singing Waves */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent animate-pulse" style={{animationDelay: '1s'}} />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-pulse" style={{animationDelay: '3s', transform: 'translateY(20px)'}} />
      </div>
    </div>
  )
} 