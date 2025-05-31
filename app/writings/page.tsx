import { artistInfo } from '@/lib/data'
import { ExternalLink, FileText, Calendar, Clock } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

// Writings data - will be populated with content from t2.world
const writings = [
  {
    id: 1,
    title: 'memory_bank_pedrito1',
    content: 'He stuck his hand in his pocket, took out his keys and inserted them into the doorknob. Recognizing the sound, Pedro gets alerted and raises his head, tuning his ears to the sound of his friend arriving at the door. He pauses in alertness. "Who\'s that?" Pedro looks at her for a sec as if to get confirmation before tuning in again...',
    fullContent: `He stuck his hand in his pocket, took out his keys and inserted them into the doorknob.

Recognizing the sound, Pedro gets alerted and raises his head, tuning his ears to the sound of his friend arriving at the door. He pauses in alertness. "Who's that?" Pedro looks at her for a sec as if to get confirmation before tuning in again. He gets up and starts his way out the bedroom. 

The front door opens, he walks in, closes the door and turns around to the sight of Pedrito walking towards him, wagging his tail, happy to see his friend home and wanting to welcome him.

"Pedritoooo!!!" he says in a high pitched voice that invites all the excitement from his dog friend. "How are you buddy?" He repeats multiple times in a playful manner while he scratches Pedrito's back and neck. "Thank you!" He ends by saying as an expression of gratitude towards his dog friend for the never ending love. And for the face licks.`,
    date: 'Mar 11, 2025',
    readTime: '0 min read',
    t2Url: 'https://app.t2.world/article/cm84a4kxu03q6kjsdjeahhsv7',
    image: 'https://res.cloudinary.com/dxhpzq6ej/image/upload/ar_1.78,c_fill,h_422,w_750/q_auto/f_auto/v1/production/vzOWgAUX9KHQyU_rjzmW3rayzQs?_a=DATAg1AAZAA0',
    tags: ['memory', 'love', 'companionship']
  },
  // Add more writings here
]

export default function WritingsPage() {
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
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Spin_Cycle',_'Orbitron',_monospace] lowercase tracking-wider cosmic-glow">
            cosmic thoughts
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light italic mb-4">
            Exploring the intersections of technology, consciousness, and the cosmos through written word
          </p>
          
          {/* Main t2.world Profile Link */}
          <div className="flex justify-center mt-8">
            <Link
              href="https://app.t2.world/u/eclipsingbinary"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-600/40 to-purple-600/40 border border-white/20 rounded-full backdrop-blur-md hover:from-indigo-500/50 hover:to-purple-500/50 transition-all duration-300"
            >
              <FileText className="w-5 h-5" />
              <span className="font-medium">Read on t2.world</span>
              <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100" />
            </Link>
          </div>
        </div>

        {/* Writings Grid */}
        {writings.length > 0 && writings[0].title !== 'Writing Title' ? (
          <div className="space-y-8">
            {writings.map((writing, index) => (
              <article
                key={writing.id}
                className="group relative bg-gradient-to-br from-indigo-900/20 to-purple-900/20 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all duration-500 hover:scale-[1.02]"
              >
                {/* Cosmic sparkles */}
                <div className="absolute top-4 right-4 w-1 h-1 bg-indigo-400 rounded-full animate-pulse opacity-60" style={{animationDelay: `${index * 0.5}s`}} />
                <div className="absolute bottom-6 left-6 w-0.5 h-0.5 bg-purple-400 rounded-full animate-pulse opacity-80" style={{animationDelay: `${index * 0.7}s`}} />
                
                {/* Writing Header */}
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors mb-3">
                    {writing.title}
                  </h2>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    {writing.readTime && (
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {writing.readTime}
                      </span>
                    )}
                    {writing.tags && (
                      <div className="flex gap-2">
                        {writing.tags.map((tag, i) => (
                          <span key={i} className="px-2 py-1 text-xs bg-indigo-600/30 text-indigo-200 rounded-md border border-indigo-500/30">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Writing Image */}
                {writing.image && (
                  <div className="mb-6">
                    <div className="aspect-video bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-xl overflow-hidden border border-white/10">
                      <Image
                        src={writing.image}
                        alt={writing.title}
                        width={750}
                        height={422}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                )}
                
                {/* Writing Content */}
                <div className="prose prose-invert max-w-none mb-6">
                  <p className="text-gray-300 leading-relaxed">
                    {writing.content || writing.fullContent?.substring(0, 300) + '...'}
                  </p>
                </div>
                
                {/* Read More Link */}
                {writing.t2Url && (
                  <div className="pt-4 border-t border-white/10">
                    <Link
                      href={writing.t2Url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-200 rounded-md transition-colors border border-indigo-500/30 group"
                    >
                      <FileText className="w-4 h-4" />
                      Read Full Post
                      <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                    </Link>
                  </div>
                )}
              </article>
            ))}
          </div>
        ) : (
          /* Placeholder when no writings */
          <div className="text-center py-20">
            <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-md border border-white/10 rounded-2xl p-12 max-w-2xl mx-auto">
              <FileText className="w-16 h-16 text-indigo-400 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-white mb-4">
                Cosmic Thoughts Coming Soon
              </h2>
              <p className="text-gray-300 mb-6">
                Deep explorations of technology, consciousness, and the cosmos are being prepared. 
                In the meantime, explore the existing content on t2.world.
              </p>
              <Link
                href="https://app.t2.world/u/eclipsingbinary"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600/40 to-purple-600/40 border border-white/20 rounded-full backdrop-blur-md hover:from-indigo-500/50 hover:to-purple-500/50 transition-all duration-300 text-white"
              >
                <FileText className="w-4 h-4" />
                Visit t2.world Profile
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Cosmic Atmosphere */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Writing-themed floating elements */}
        <div className="absolute top-1/4 left-1/5 w-3 h-3 bg-indigo-400/30 rounded-full animate-pulse" style={{animationDelay: '1s', animationDuration: '3s'}} />
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-purple-400/25 rounded-full animate-pulse" style={{animationDelay: '2s', animationDuration: '4s'}} />
        <div className="absolute top-2/3 left-1/3 w-4 h-4 bg-indigo-400/20 rounded-full animate-pulse" style={{animationDelay: '0.5s', animationDuration: '5s'}} />
        
        {/* Cosmic dust */}
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl animate-pulse" style={{animationDuration: '6s'}} />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-purple-500/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s', animationDuration: '8s'}} />
      </div>
    </div>
  )
} 