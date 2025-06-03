import { artistInfo } from '@/lib/data'
import { ExternalLink, FileText, Calendar, Clock } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

// Writings data - will be populated with content from t2.world
const writings = [
  {
    id: 2,
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
  {
    id: 1,
    title: 'Furorem',
    content: 'He felt it take over. At this point he was no longer himself. He felt like a vessel that was being piloted by another. He knew it wasn\'t going to end well. Words came out of his mouth like swords. It was as if he was in a battle that needed to be won. To inflict a deadly wound was the only purpose at that point.',
    fullContent: `He felt it take over. At this point he was no longer himself. He felt like a vessel that was being piloted by another. He knew it wasn't going to end well. 

Words came out of his mouth like swords. It was as if he was in a battle that needed to be won. To inflict a deadly wound was the only purpose at that point. 

"STOP!" Said Observer Mind from deep within his head. "I hope you hear me this time around before it's too late. You know the battle must be had within and not out there. As you do not love yourself. Anger is a little bitch". 

As hyper awareness happens mid fit, Observer Mind takes over vision and he can now see his own movement. Observer Mind judges again. "Look at you. Look at how silly you look waving your arms around. And why are you yelling at her? She can hear you, you know? What a dummy, so insecure. Anger is a little bitch".

"It's happening again" she says and he immediately becomes self conscious and brings his arms to a halt, then puts them down. The expression on his face changes from one of rage to one of sadness and disappointment. A strong feeling of heartache. His words did in fact inflict a wound. He hurt her.

"Thank you" he says to her. "I'm sorry". He adds with the most sincerity and regret, lifting his head to look at her directly into her eyes. 

She accepts his apology with a gentle nod and a tiny smile following with a few words. "We did it together. We stopped her. We stopped Anger. She did not win today". 

They both take one deep breath and proceed to go once more around the park, now holding hands.

As they begin their walk in silence, he turns his inner eye towards Observer Mind. "Thank you... I'm sorry" he says with his inner voice. "We did it together" replied Observer Mind.`,
    date: 'Feb 6, 2025',
    readTime: '1 min read',
    t2Url: 'https://app.t2.world/article/cm6ttzlbf558598t7mcdx1xdabc',
    image: 'https://res.cloudinary.com/dxhpzq6ej/image/upload/ar_1.75,c_fill,h_429,w_750/q_auto/f_auto/v1/production/cm6tu2h4m002lt7mc5ge07as6?_a=DATAg1AAZAA0',
    tags: ['consciousness', 'mindfulness', 'inner dialogue']
  },
  {
    id: 3,
    title: 'Web3Nomad: Algorithms',
    content: 'Algorithms govern our digital reality. Everyone is embedded in them regardless of what service you use. My question after many years of working with and seeing all the different content types is, at what cost? One thing that people missed early on about implementing algorithms was the behavioral change that would cascade on society.',
    fullContent: `Algorithms govern our digital reality. Everyone is embedded in them regardless of what service you use. Even if you are a spammer polluting peoples inboxes and feeds, you have been rewarded or punished by the algorithms. 

Why did we create them? We believe it was to surface better content. 

My question after many years of working with and seeing all the different content types to be seen and all of the spammers' games and tricks is, at what cost?

"There are no solutions, there are only trade-offs". - Thomas Sowell

One thing that people missed early on about implementing algorithms was the behavioral change that would cascade on society.

The social media and video app algos turned creators from all different types of niches, from all over the world, who were doing their own thing, and flattened them and standardized them to where no matter what you were making, the style was the same.

Same editing types, same thumbnails designs, same intros and outros, full of free ads in the form of social media logos. Creators went from creating for themselves to creating for the algos. Creating for themselves was not an option that would compete. People can still create what they want really, but you have to behave a certain way for the algo to pick it up. Algos didn't just change our content, they changed us. And they reward and punish all the behavior you see online.

This is a sentence that has spun in my mind for years the more I worked with content. Something that my peers and supervisors also missed. We say that algorithms are used to surface content, but it's quite the opposite. It is used to hide most of the content that ever gets published. And your content will never see the light of day unless you meet the standards of the people who design the algos.

Some people that have put some thought into this believe that it should be you. Your social media profile should have an algo section full of toggles and properties that you, the user, should be able to control. Turn on and off, or simply put it on auto and let the app do it for you if you so choose.

That way, people don't have to create to "hack" any specific algorithm. They can go back to creating for themselves and let people really choose what content they engage with.`,
    date: 'Dec 21, 2024',
    readTime: '4 min read',
    t2Url: 'https://app.t2.world/article/cm4xfeg0x1366139tnmc13xh98f2',
    image: 'https://res.cloudinary.com/dxhpzq6ej/image/upload/ar_1.78,c_fill,h_422,w_750/q_auto/f_auto/v1/production/cm4xffpo3001ptnmcacl2fw3p?_a=DATAg1AAZAA0',
    tags: ['web3', 'algorithms', 'technology', 'decentralization']
  },
  {
    id: 4,
    title: 'To Patagonia Part 1: Toledo',
    content: 'The journey begins not with the destination, but with the decision to leave. Toledo - a city suspended between past and future, where cobblestone streets echo with memories and dreams of distant lands. Here, in this ancient Spanish city, the first seeds of adventure are planted.',
    date: 'Dec 15, 2024',
    readTime: '3 min read',
    t2Url: 'https://app.t2.world/article/cm4q0srxu1325956tbmc6fgf5cgm',
    image: 'https://res.cloudinary.com/dxhpzq6ej/image/upload/ar_1.75,c_fill,h_429,w_750/q_auto/f_auto/v1/production/cm4q1f8rs0029tbmcft6ecg9m?_a=DATAg1AAZAA0',
    tags: ['travel', 'journey', 'patagonia', 'adventure']
  },
  {
    id: 5,
    title: 'Non-Dystopian',
    content: 'What if the future we\'re building isn\'t the nightmare we fear? In a world saturated with dystopian narratives, we explore the possibility of technology serving humanity rather than enslaving it. The path forward requires intentional design and conscious choices.',
    date: 'Nov 10, 2024',
    readTime: '3 min read',
    t2Url: 'https://app.t2.world/article/cm3j6yo4u70940620mcuco81oue',
    image: 'https://res.cloudinary.com/dxhpzq6ej/image/upload/ar_1.78,c_fill,h_422,w_750/q_auto/f_auto/v1/production/cm3j86g2w001020mc42t7a290?_a=DATAg1AAZAA0',
    tags: ['future', 'technology', 'optimism', 'society']
  },
  {
    id: 6,
    title: 'Peter and the upward spiral',
    content: 'Sometimes the most profound transformations begin with the smallest shifts in perspective. Peter\'s story is one of momentum - how positive changes compound and create an upward spiral that lifts not just the individual, but everyone around them.',
    date: 'Oct 28, 2024',
    readTime: '4 min read',
    t2Url: 'https://app.t2.world/article/cm3522p84114116720mcnwayclv5',
    image: 'https://res.cloudinary.com/dxhpzq6ej/image/upload/ar_1.78,c_fill,h_422,w_750/q_auto/f_auto/v1/production/cm3524elu002k20mc465a7e9s?_a=DATAg1AAZAA0',
    tags: ['personal growth', 'positive psychology', 'transformation', 'momentum']
  },
  {
    id: 7,
    title: 'Web3Nomad: A very brief introduction',
    content: 'Welcome to the intersection of technology and wanderlust. In this brief introduction, we explore what it means to be a digital nomad in the age of decentralized systems, blockchain technology, and the emerging web3 landscape.',
    date: 'Oct 15, 2024',
    readTime: '2 min read',
    t2Url: 'https://app.t2.world/article/cm2uh6l6e185981ymc5qa1tc9m',
    image: 'https://res.cloudinary.com/dxhpzq6ej/image/upload/ar_1.75,c_fill,h_429,w_750/q_auto/f_auto/v1/production/cm2uh9gos00011ymc022995zg?_a=DATAg1AAZAA0',
    tags: ['web3', 'digital nomad', 'introduction', 'decentralization']
  },
  {
    id: 8,
    title: 'El Espíritu Creativo',
    content: 'El espíritu creativo vive en cada uno de nosotros, esperando ser despertado. Es esa chispa que transforma lo ordinario en extraordinario, que encuentra belleza en el caos y que nos conecta con algo más grande que nosotros mismos.',
    date: 'Oct 8, 2024',
    readTime: '3 min read',
    t2Url: 'https://app.t2.world/article/cm2q720d835908422mcjvxvxxf7',
    image: 'https://res.cloudinary.com/dxhpzq6ej/image/upload/ar_1.78,c_fill,h_422,w_750/q_auto/f_auto/v1/production/cm2q73cyw002022mc0o97gyjm?_a=DATAg1AAZAA0',
    tags: ['creativity', 'spirit', 'art', 'inspiration']
  },
  {
    id: 9,
    title: 'Web3Nomad: A Cathedral Without The Art Is Just A Building',
    content: 'Technology without soul is merely infrastructure. Just as a cathedral\'s true beauty lies not in its stones but in its art and spirit, web3 and decentralized systems are only as meaningful as the human creativity and values we embed within them.',
    date: 'Oct 1, 2024',
    readTime: '5 min read',
    t2Url: 'https://app.t2.world/article/cm2nbra7m304191gmctrggj71z',
    image: 'https://res.cloudinary.com/dxhpzq6ej/image/upload/ar_1.75,c_fill,h_429,w_750/q_auto/f_auto/v1/production/cm2nbtl1a00011gmc6scr4ox5?_a=DATAg1AAZAA0',
    tags: ['web3', 'philosophy', 'art', 'technology', 'humanity']
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
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="relative">
            {/* Enhanced Multiple glow layers for depth */}
            <h1 className="absolute inset-0 text-4xl md:text-6xl font-bold text-cyan-400 mb-6 font-['Spin_Cycle',_'Orbitron',_monospace] lowercase tracking-wider blur-2xl opacity-60 animate-pulse">
              inner thoughts
            </h1>
            <h1 className="absolute inset-0 text-4xl md:text-6xl font-bold text-purple-400 mb-6 font-['Spin_Cycle',_'Orbitron',_monospace] lowercase tracking-wider blur-xl opacity-50 animate-pulse" style={{animationDelay: '1s'}}>
              inner thoughts
            </h1>
            <h1 className="absolute inset-0 text-4xl md:text-6xl font-bold text-cyan-300 mb-6 font-['Spin_Cycle',_'Orbitron',_monospace] lowercase tracking-wider blur-lg opacity-40 animate-pulse" style={{animationDelay: '0.5s'}}>
              inner thoughts
            </h1>
            <h1 className="absolute inset-0 text-4xl md:text-6xl font-bold text-pink-400 mb-6 font-['Spin_Cycle',_'Orbitron',_monospace] lowercase tracking-wider blur-md opacity-30 animate-pulse" style={{animationDelay: '1.5s'}}>
              inner thoughts
            </h1>
            <h1 className="relative text-4xl md:text-6xl font-bold text-white mb-6 font-['Spin_Cycle',_'Orbitron',_monospace] lowercase tracking-wider drop-shadow-2xl" style={{
              textShadow: '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(96, 165, 250, 0.3), 0 0 60px rgba(168, 85, 247, 0.2)'
            }}>
              inner thoughts
            </h1>
            
            {/* Constellation stars around title */}
            <div className="absolute -top-4 -left-4 w-2 h-2 bg-cyan-300 rounded-full animate-twinkle opacity-80" />
            <div className="absolute -top-8 right-12 w-1 h-1 bg-purple-300 rounded-full animate-twinkle opacity-60" style={{animationDelay: '1s'}} />
            <div className="absolute -bottom-4 -right-4 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-twinkle opacity-70" style={{animationDelay: '2s'}} />
            <div className="absolute -bottom-8 left-8 w-1 h-1 bg-pink-300 rounded-full animate-twinkle opacity-50" style={{animationDelay: '0.5s'}} />
          </div>
          
          <div className="relative">
            <p className="text-xl text-gray-200 max-w-3xl mx-auto font-light italic mb-4 drop-shadow-lg">
              "A cathedral without the art is just a building"
            </p>
            {/* Enhanced glow behind tagline */}
            <div className="absolute inset-0 text-xl text-cyan-400 max-w-3xl mx-auto font-light italic blur-lg opacity-30 animate-pulse">
              "A cathedral without the art is just a building"
            </div>
            <div className="absolute inset-0 text-xl text-purple-400 max-w-3xl mx-auto font-light italic blur-md opacity-20 animate-pulse" style={{animationDelay: '1s'}}>
              "A cathedral without the art is just a building"
            </div>
          </div>
          
          {/* Enhanced Main t2.world Profile Link */}
          <div className="flex justify-center mt-8">
            <Link
              href="https://app.t2.world/u/eclipsingbinary"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600/60 to-purple-600/60 border-2 border-indigo-400/60 rounded-full backdrop-blur-md hover:from-indigo-500/80 hover:to-purple-500/80 hover:border-indigo-300/80 transition-all duration-300 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-400/50 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-full pointer-events-none" />
              {/* t2.world Logo */}
              <div className="w-5 h-5 group-hover:scale-110 transition-transform duration-300 rounded-full overflow-hidden">
                <img
                  src="https://pbs.twimg.com/profile_images/1800186430725009408/S9_EQ9Ie_400x400.jpg"
                  alt="t2.world"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="relative font-medium">Read on t2.world</span>
              <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>
        </div>

        {/* Enhanced Writings Grid */}
        {writings.length > 0 && writings[0].title !== 'Writing Title' ? (
          <div className="space-y-12">
            {writings.map((writing, index) => (
              <article
                key={writing.id}
                className="group relative bg-gradient-to-br from-cyan-900/30 via-indigo-900/30 to-purple-900/30 backdrop-blur-xl border-2 border-indigo-400/20 rounded-3xl p-8 hover:border-indigo-300/40 transition-all duration-300 shadow-xl shadow-indigo-500/10"
              >
                {/* Enhanced cosmic effects */}
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400/10 via-purple-400/10 to-cyan-400/10 rounded-3xl blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/3 to-transparent rounded-3xl" />
                
                {/* Dynamic sparkles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-indigo-300 rounded-full animate-twinkle opacity-80" style={{animationDelay: `${index * 0.5}s`}} />
                <div className="absolute top-8 right-12 w-1 h-1 bg-purple-300 rounded-full animate-twinkle opacity-60" style={{animationDelay: `${index * 0.7 + 1}s`}} />
                <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-twinkle opacity-70" style={{animationDelay: `${index * 0.7}s`}} />
                <div className="absolute bottom-12 left-12 w-1 h-1 bg-emerald-300 rounded-full animate-twinkle opacity-50" style={{animationDelay: `${index * 0.5 + 0.5}s`}} />
                
                {/* Enhanced Writing Header */}
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-300 mb-3 drop-shadow-md">
                    {writing.title}
                  </h2>
                  
                  {/* Mobile-optimized metadata layout */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-gray-300">
                    {writing.readTime && (
                      <span className="flex items-center gap-1 shrink-0">
                        <Clock className="w-3 h-3" />
                        {writing.readTime}
                      </span>
                    )}
                    {writing.tags && (
                      <div className="flex flex-wrap gap-2">
                        {writing.tags.map((tag, i) => (
                          <span key={i} className="px-3 py-1.5 text-xs bg-indigo-600/40 text-indigo-200 rounded-lg border border-indigo-500/40 drop-shadow-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Enhanced Writing Image */}
                {writing.image && (
                  <div className="mb-6">
                    <div className="relative aspect-video bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-white/20 transition-colors duration-300">
                      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-2xl blur-sm" />
                      <Image
                        src={writing.image}
                        alt={writing.title}
                        width={750}
                        height={422}
                        className="relative w-full h-full object-cover transition-transform duration-300"
                      />
                    </div>
                  </div>
                )}
                
                {/* Enhanced Writing Content */}
                <div className="prose prose-invert max-w-none mb-6">
                  <p className="text-gray-200 leading-relaxed drop-shadow-sm">
                    {writing.content || writing.fullContent?.substring(0, 300) + '...'}
                  </p>
                </div>
                
                {/* Enhanced Read More Link */}
                {writing.t2Url && (
                  <div className="pt-4 border-t border-white/10">
                    <Link
                      href={writing.t2Url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2 px-4 py-2 text-sm bg-gradient-to-r from-indigo-600/60 to-purple-600/60 hover:from-indigo-500/80 hover:to-purple-500/80 text-indigo-200 rounded-lg transition-all duration-300 border border-indigo-500/40 hover:border-indigo-400/60 shadow-lg shadow-indigo-500/20 hover:scale-105"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-lg pointer-events-none" />
                      {/* t2.world Logo */}
                      <div className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300 rounded-full overflow-hidden">
                        <img
                          src="https://pbs.twimg.com/profile_images/1800186430725009408/S9_EQ9Ie_400x400.jpg"
                          alt="t2.world"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="relative">Read Full Post</span>
                      <ExternalLink className="w-3 h-3 opacity-60 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </div>
                )}
              </article>
            ))}
          </div>
        ) : (
          /* Enhanced Placeholder when no writings */
          <div className="text-center py-20">
            <div className="relative bg-gradient-to-br from-cyan-900/40 via-indigo-900/40 to-purple-900/40 backdrop-blur-xl border-2 border-indigo-400/30 rounded-3xl p-12 max-w-2xl mx-auto shadow-2xl shadow-indigo-500/20">
              {/* Enhanced cosmic effects */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400/20 via-purple-400/20 to-cyan-400/20 rounded-3xl blur-sm" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent rounded-3xl" />
              
              {/* Dynamic sparkles */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-indigo-300 rounded-full animate-twinkle opacity-80" />
              <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-purple-300 rounded-full animate-twinkle opacity-70" style={{animationDelay: '1s'}} />
              
              <div className="relative">
                <FileText className="w-16 h-16 text-indigo-400 mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">
                  Cosmic Thoughts Coming Soon
                </h2>
                <p className="text-gray-200 mb-6 drop-shadow-sm">
                  Deep explorations of technology, consciousness, and the cosmos are being prepared. 
                  In the meantime, explore the existing content on t2.world.
                </p>
                <Link
                  href="https://app.t2.world/u/eclipsingbinary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600/60 to-purple-600/60 border-2 border-indigo-400/60 rounded-full backdrop-blur-md hover:from-indigo-500/80 hover:to-purple-500/80 hover:border-indigo-300/80 transition-all duration-300 text-white shadow-lg shadow-indigo-500/30 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-full pointer-events-none" />
                  {/* t2.world Logo */}
                  <div className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300 rounded-full overflow-hidden">
                    <img
                      src="https://pbs.twimg.com/profile_images/1800186430725009408/S9_EQ9Ie_400x400.jpg"
                      alt="t2.world"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="relative">Visit t2.world Profile</span>
                  <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        )}
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
        
        {/* Thought Nebula Clouds */}
        <div className="absolute top-1/5 left-1/5 w-40 h-40 bg-gradient-radial from-indigo-500/10 via-purple-500/5 to-transparent rounded-full blur-2xl animate-pulse" style={{animationDuration: '8s'}} />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-radial from-cyan-500/10 via-indigo-500/5 to-transparent rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s', animationDuration: '10s'}} />
        <div className="absolute top-2/3 left-1/2 w-36 h-36 bg-gradient-radial from-emerald-500/8 via-teal-500/4 to-transparent rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s', animationDuration: '12s'}} />
        
        {/* Thought Waves */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent animate-pulse" style={{animationDelay: '1s'}} />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent animate-pulse" style={{animationDelay: '3s', transform: 'translateY(20px)'}} />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent animate-pulse" style={{animationDelay: '2s', transform: 'translateY(-20px)'}} />
      </div>
    </div>
  )
} 