import { artistInfo } from '@/lib/data'
import { Play, ExternalLink, Video, Calendar, Sparkles } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

// Video data - will be populated with embed codes and details
const videos = [
  {
    id: 1,
    title: 'Dude Where Is My Wallet (teaser)',
    description: '"Dude Where\'s My Wallet" is a wild ride through the world of decentralized technology and psychedelic consciousness. Dan and Mike, our intrepid heroes, find themselves on a quest to uncover the secrets of the Imagination Network, a decentralized AI protocol that holds the key to unlocking the infinite potential of the human mind.',
    uploadDate: '2017',
    embedCode: '<iframe src="https://gleev.xyz/embedded/video/7184" scrolling="no" height="400px" width="600px" allowfullscreen></iframe>',
    gleevUrl: 'https://gleev.xyz/video/7184'
  },
  {
    id: 2,
    title: 'A Mis Padres',
    description: 'No ha habido un segundo aburrido en este viaje. Lleno de amor, alegría, tristeza, caos y risa',
    uploadDate: '2018',
    embedCode: '<iframe src="https://gleev.xyz/embedded/video/19784" scrolling="no" height="400px" width="600px" allowfullscreen></iframe>',
    gleevUrl: 'https://gleev.xyz/video/19784'
  },
  // Add more videos here
]

export default function VideosPage() {
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
            visual cosmos nfts
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light italic mb-4">
            Experience the universe through sound and vision - cosmic journeys in motion
          </p>
          
          {/* Main Gleev Channel Link */}
          <div className="flex justify-center mt-8">
            <Link
              href="https://gleev.xyz/channel/7731?tab=Videos"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600/40 to-cyan-600/40 border border-white/20 rounded-full backdrop-blur-md hover:from-purple-500/50 hover:to-cyan-500/50 transition-all duration-300"
            >
              <Video className="w-5 h-5" />
              <span className="font-medium">Watch on Gleev</span>
              <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100" />
            </Link>
          </div>
        </div>

        {/* Videos Grid */}
        {videos.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <div
                key={video.id}
                className="group relative bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-all duration-500 hover:scale-105"
              >
                {/* Cosmic sparkles */}
                <div className="absolute top-3 right-3 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-60" style={{animationDelay: `${index * 0.5}s`}} />
                <div className="absolute bottom-4 left-4 w-0.5 h-0.5 bg-cyan-400 rounded-full animate-pulse opacity-80" style={{animationDelay: `${index * 0.7}s`}} />
                
                {/* Video Embed Container */}
                <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl mb-4 flex items-center justify-center border border-white/10 overflow-hidden relative">
                  
                  {/* NFT Badge */}
                  <div className="absolute top-2 left-2 z-10 flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-amber-600/80 to-amber-500/80 backdrop-blur-md rounded-md border border-amber-400/50">
                    <Sparkles className="w-3 h-3 text-amber-200" />
                    <span className="text-xs font-semibold text-amber-100">NFT</span>
                  </div>
                  
                  {video.embedCode ? (
                    <div 
                      className="w-full h-full"
                      dangerouslySetInnerHTML={{ __html: video.embedCode }}
                    />
                  ) : (
                    <div className="flex flex-col items-center text-white/60">
                      <Video className="w-12 h-12 mb-2" />
                      <span className="text-sm">Video embed coming soon</span>
                    </div>
                  )}
                </div>
                
                {/* Video info */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {video.title}
                    </h3>
                    {/* Removed date display
                    <span className="text-sm text-gray-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {video.uploadDate}
                    </span>
                    */}
                  </div>
                  
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {video.description}
                  </p>
                  
                  {/* Watch on Gleev Link */}
                  {video.gleevUrl && (
                    <div className="pt-2">
                      <Link
                        href={video.gleevUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1.5 text-xs bg-purple-600/30 hover:bg-purple-600/50 text-purple-200 rounded-md transition-colors border border-purple-500/30"
                      >
                        <Play className="w-3 h-3" />
                        Watch on Gleev
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Placeholder when no videos */
          <div className="text-center py-20">
            <div className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 backdrop-blur-md border border-white/10 rounded-2xl p-12 max-w-2xl mx-auto">
              <Video className="w-16 h-16 text-purple-400 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-white mb-4">
                Cosmic Videos Coming Soon
              </h2>
              <p className="text-gray-300 mb-6">
                The visual journey through space and time is being prepared. 
                In the meantime, explore the cosmic soundscapes on the music page.
              </p>
              <Link
                href="https://gleev.xyz/channel/7731?tab=Videos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600/40 to-cyan-600/40 border border-white/20 rounded-full backdrop-blur-md hover:from-purple-500/50 hover:to-cyan-500/50 transition-all duration-300 text-white"
              >
                <Video className="w-4 h-4" />
                Visit Gleev Channel
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Cosmic Atmosphere */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Video-themed floating elements */}
        <div className="absolute top-1/4 left-1/5 w-3 h-3 bg-purple-400/30 rounded-full animate-pulse" style={{animationDelay: '1s', animationDuration: '3s'}} />
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-cyan-400/25 rounded-full animate-pulse" style={{animationDelay: '2s', animationDuration: '4s'}} />
        <div className="absolute top-2/3 left-1/3 w-4 h-4 bg-purple-400/20 rounded-full animate-pulse" style={{animationDelay: '0.5s', animationDuration: '5s'}} />
        
        {/* Cosmic dust */}
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl animate-pulse" style={{animationDuration: '6s'}} />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-cyan-500/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s', animationDuration: '8s'}} />
      </div>
    </div>
  )
} 