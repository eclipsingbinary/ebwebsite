'use client'

import { artistInfo } from '@/lib/data'
import { Play, ExternalLink, Video, Calendar, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

// Music Videos data
const musicVideos = [
  // Priority videos (first 3)
  {
    id: 1,
    title: 'Non-Dystopian Part 1: The Communal',
    description: 'In this first part of the trilogy Harari speaks about optimizing A.I sidekicks to help humans have better connections with their communities.',
    year: '2024',
    embedCode: '<iframe src="https://gleev.xyz/embedded/video/19991" scrolling="no" class="w-full h-full" allowfullscreen></iframe>',
    gleevUrl: 'https://gleev.xyz/video/19991'
  },
  {
    id: 2,
    title: 'Non-Dystopian Part2: The Romantic Ideal',
    description: 'In this second part of the trilogy Yuval Noah Harari speaks about optimizing A.I sidekicks to help humans with romantic relationships.',
    year: '2024',
    embedCode: '<iframe src="https://gleev.xyz/embedded/video/20004" scrolling="no" class="w-full h-full" allowfullscreen></iframe>',
    gleevUrl: 'https://gleev.xyz/video/20004'
  },
  {
    id: 3,
    title: 'Non-Dystopian Part 3: Agency',
    description: 'In this third part of the trilogy Harari tells the story that even if A.I. sidekicks act in your best interest, you still lose agency over your life.',
    year: '2024',
    embedCode: '<iframe src="https://gleev.xyz/embedded/video/21135" scrolling="no" class="w-full h-full" allowfullscreen></iframe>',
    gleevUrl: 'https://gleev.xyz/video/21135'
  },
  // Additional videos
  {
    id: 4,
    title: 'Silicon Overlords',
    description: 'Humans no more. It\'s the grand algorithm that has figure it all out. Meet your Silicon Overlords.',
    year: '2024',
    embedCode: '<iframe src="https://gleev.xyz/embedded/video/21136" scrolling="no" class="w-full h-full" allowfullscreen></iframe>',
    gleevUrl: 'https://gleev.xyz/video/21136'
  },
  {
    id: 5,
    title: 'Far Simple Than We Are',
    description: 'Psychiatrist, writer, and former Oxford literary scholar, Iain McGilchrist tells us a few differences between machines and humans.',
    year: '2024',
    embedCode: '<iframe src="https://gleev.xyz/embedded/video/21142" scrolling="no" class="w-full h-full" allowfullscreen></iframe>',
    gleevUrl: 'https://gleev.xyz/video/21142'
  },
  {
    id: 6,
    title: 'Bard Spell 1 - aDAOptation',
    description: 'It feels like a grieving process.\nWe are letting go of an old way of doing things.\nIt\'s a kind of death and so we\'ll mourn.',
    year: '2024',
    embedCode: '<iframe src="https://gleev.xyz/embedded/video/23003" scrolling="no" class="w-full h-full" allowfullscreen></iframe>',
    gleevUrl: 'https://gleev.xyz/video/23003'
  },
  {
    id: 7,
    title: 'The Eclipse',
    description: 'Can you feel the energy as we learn where we\'re in this universe?',
    year: '2024',
    embedCode: '<iframe src="https://gleev.xyz/embedded/video/799868" scrolling="no" class="w-full h-full" allowfullscreen></iframe>',
    gleevUrl: 'https://gleev.xyz/video/799868'
  },
  {
    id: 8,
    title: 'My Eyes (Dr. Horrible Cover)',
    description: 'This is a cover of My Eyes, a song featured on Dr. Horrible\'s Sing-Along Blog',
    year: '2024',
    embedCode: '<iframe src="https://gleev.xyz/embedded/video/799870" scrolling="no" class="w-full h-full" allowfullscreen></iframe>',
    gleevUrl: 'https://gleev.xyz/video/799870'
  },
  {
    id: 9,
    title: 'Life Outside Our Solar System',
    description: 'This song was inspired by a conversation between AI researcher and podcast host Lex Fridman and Astrophysicist and Planetary Scientist Sara Seager where they speak about the possibility of visiting other worlds or at least finding other habitable worlds.',
    year: '2024',
    embedCode: '<iframe src="https://gleev.xyz/embedded/video/19989" scrolling="no" class="w-full h-full" allowfullscreen></iframe>',
    gleevUrl: 'https://gleev.xyz/video/19989'
  },
  {
    id: 10,
    title: 'Imagined Futures',
    description: 'Imagined Futures paints a story of both utopic and dystopic futures.',
    year: '2024',
    embedCode: '<iframe src="https://gleev.xyz/embedded/video/19988" scrolling="no" class="w-full h-full" allowfullscreen></iframe>',
    gleevUrl: 'https://gleev.xyz/video/19988'
  },
  {
    id: 11,
    title: 'Overview Effect',
    description: 'This is home. She can provide for all. We must give it in return, love.. love.',
    year: '2024',
    embedCode: '<iframe src="https://gleev.xyz/embedded/video/19895" scrolling="no" class="w-full h-full" allowfullscreen></iframe>',
    gleevUrl: 'https://gleev.xyz/video/19895'
  },
  {
    id: 12,
    title: 'Raindrop',
    description: 'The one thing to appreciate is the beauty in the scenery. Lovely creatures, lively colors - all form part of this crazy journey.',
    year: '2024',
    embedCode: '<iframe src="https://gleev.xyz/embedded/video/19891" scrolling="no" class="w-full h-full" allowfullscreen></iframe>',
    gleevUrl: 'https://gleev.xyz/video/19891'
  },
  {
    id: 13,
    title: 'A Mis Padres',
    description: 'No ha habido un segundo aburrido en este viaje. Lleno de amor, alegría, tristeza, caos y risa',
    year: '2018',
    embedCode: '<iframe src="https://gleev.xyz/embedded/video/19784" scrolling="no" class="w-full h-full" allowfullscreen></iframe>',
    gleevUrl: 'https://gleev.xyz/video/19784'
  },
  {
    id: 14,
    title: 'Dude Where Is My Wallet (teaser)',
    description: 'Dude Where\'s My Wallet" is a wild ride through the world of decentralized technology and psychedelic consciousness. Dan and Mike, our intrepid heroes, find themselves on a quest to uncover the secrets of the Imagination Network, a decentralized AI protocol that holds the key to unlocking the infinite potential of the human mind.',
    year: '2024',
    embedCode: '<iframe src="https://gleev.xyz/embedded/video/7184" scrolling="no" class="w-full h-full" allowfullscreen></iframe>',
    gleevUrl: 'https://gleev.xyz/video/7184'
  },
  {
    id: 15,
    title: 'Interplanetary',
    description: 'We shoot ourselves into the cosmos, seeding planets and moons with life. There is nothing that can stop this deep need to become interplanetary.',
    year: '2024',
    embedCode: '<iframe src="https://gleev.xyz/embedded/video/19896" scrolling="no" class="w-full h-full" allowfullscreen></iframe>',
    gleevUrl: 'https://gleev.xyz/video/19896'
  }
]

// NFT Shorts data
const nftShorts = [
  // Individual shorts
  {
    id: 1,
    title: 'The Communal Playful Clip',
    embedCode: '<iframe src="https://gleev.xyz/embedded/video/1587509" scrolling="no" class="w-full h-full" allowfullscreen></iframe>',
    gleevUrl: 'https://gleev.xyz/video/1587509'
  },
  // Mirrors series
  {
    id: 2,
    title: 'Mirrors #1',
    embedCode: '<iframe src="https://gleev.xyz/embedded/video/1026576" scrolling="no" class="w-full h-full" allowfullscreen></iframe>',
    gleevUrl: 'https://gleev.xyz/video/1026576'
  },
  {
    id: 3,
    title: 'Mirrors #2',
    embedCode: '<iframe src="https://gleev.xyz/embedded/video/1064721" scrolling="no" class="w-full h-full" allowfullscreen></iframe>',
    gleevUrl: 'https://gleev.xyz/video/1064721'
  },
  {
    id: 4,
    title: 'Mirrors #3',
    embedCode: '<iframe src="https://gleev.xyz/embedded/video/1199068" scrolling="no" class="w-full h-full" allowfullscreen></iframe>',
    gleevUrl: 'https://gleev.xyz/video/1199068'
  },
  {
    id: 5,
    title: 'Mirrors #6',
    embedCode: '<iframe src="https://gleev.xyz/embedded/video/1419490" scrolling="no" class="w-full h-full" allowfullscreen></iframe>',
    gleevUrl: 'https://gleev.xyz/video/1419490'
  },
  // Other individual shorts
  {
    id: 6,
    title: 'Down The Joystream #9',
    embedCode: '<iframe src="https://gleev.xyz/embedded/video/759938" scrolling="no" class="w-full h-full" allowfullscreen></iframe>',
    gleevUrl: 'https://gleev.xyz/video/759938'
  },
  {
    id: 7,
    title: 'Eclipsing Binary #5',
    embedCode: '<iframe src="https://gleev.xyz/embedded/video/722508" scrolling="no" class="w-full h-full" allowfullscreen></iframe>',
    gleevUrl: 'https://gleev.xyz/video/722508'
  },
  {
    id: 8,
    title: 'Web3Nomad #2 - @bedeho - Joystream Lightpaper Part1 - The Problem',
    embedCode: '<iframe src="https://gleev.xyz/embedded/video/3639" scrolling="no" class="w-full h-full" allowfullscreen></iframe>',
    gleevUrl: 'https://gleev.xyz/video/3639'
  },
  // Ode To The Sun series (in order)
  {
    id: 9,
    title: 'Ode To The Sun #3',
    embedCode: '<iframe src="https://gleev.xyz/embedded/video/995054" scrolling="no" class="w-full h-full" allowfullscreen></iframe>',
    gleevUrl: 'https://gleev.xyz/video/995054'
  },
  {
    id: 10,
    title: 'Ode To The Sun #4',
    embedCode: '<iframe src="https://gleev.xyz/embedded/video/1033493" scrolling="no" class="w-full h-full" allowfullscreen></iframe>',
    gleevUrl: 'https://gleev.xyz/video/1033493'
  },
  {
    id: 11,
    title: 'Ode To The Sun #5',
    embedCode: '<iframe src="https://gleev.xyz/embedded/video/1047937" scrolling="no" class="w-full h-full" allowfullscreen></iframe>',
    gleevUrl: 'https://gleev.xyz/video/1047937'
  },
  {
    id: 12,
    title: 'Ode To The Sun #6',
    embedCode: '<iframe src="https://gleev.xyz/embedded/video/1061022" scrolling="no" class="w-full h-full" allowfullscreen></iframe>',
    gleevUrl: 'https://gleev.xyz/video/1061022'
  },
  {
    id: 13,
    title: 'Ode To The Sun #7',
    embedCode: '<iframe src="https://gleev.xyz/embedded/video/1100345" scrolling="no" class="w-full h-full" allowfullscreen></iframe>',
    gleevUrl: 'https://gleev.xyz/video/1100345'
  },
  {
    id: 14,
    title: 'Ode To The Sun #8',
    embedCode: '<iframe src="https://gleev.xyz/embedded/video/1110472" scrolling="no" class="w-full h-full" allowfullscreen></iframe>',
    gleevUrl: 'https://gleev.xyz/video/1110472'
  },
  {
    id: 15,
    title: 'Ode To The Sun #9',
    embedCode: '<iframe src="https://gleev.xyz/embedded/video/1179933" scrolling="no" class="w-full h-full" allowfullscreen></iframe>',
    gleevUrl: 'https://gleev.xyz/video/1179933'
  },
  {
    id: 16,
    title: 'Ode To The Sun #10',
    embedCode: '<iframe src="https://gleev.xyz/embedded/video/1219418" scrolling="no" class="w-full h-full" allowfullscreen></iframe>',
    gleevUrl: 'https://gleev.xyz/video/1219418'
  },
  {
    id: 17,
    title: 'Ode To The Sun #16',
    embedCode: '<iframe src="https://gleev.xyz/embedded/video/1377116" scrolling="no" class="w-full h-full" allowfullscreen></iframe>',
    gleevUrl: 'https://gleev.xyz/video/1377116'
  },
  {
    id: 18,
    title: 'Ode To The Sun #17',
    embedCode: '<iframe src="https://gleev.xyz/embedded/video/1411934" scrolling="no" class="w-full h-full" allowfullscreen></iframe>',
    gleevUrl: 'https://gleev.xyz/video/1411934'
  },
  {
    id: 19,
    title: 'Ode To The Sun #18',
    embedCode: '<iframe src="https://gleev.xyz/embedded/video/1412471" scrolling="no" class="w-full h-full" allowfullscreen></iframe>',
    gleevUrl: 'https://gleev.xyz/video/1412471'
  },
  {
    id: 20,
    title: 'Ode To The Sun #19',
    embedCode: '<iframe src="https://gleev.xyz/embedded/video/1422224" scrolling="no" class="w-full h-full" allowfullscreen></iframe>',
    gleevUrl: 'https://gleev.xyz/video/1422224'
  },
  {
    id: 21,
    title: 'Ode To The Sun #20',
    embedCode: '<iframe src="https://gleev.xyz/embedded/video/1424717" scrolling="no" class="w-full h-full" allowfullscreen></iframe>',
    gleevUrl: 'https://gleev.xyz/video/1424717'
  }
]

export default function VideosPage() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const currentVideo = musicVideos[currentVideoIndex]

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % musicVideos.length)
  }

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + musicVideos.length) % musicVideos.length)
  }

  const selectVideo = (index: number) => {
    setCurrentVideoIndex(index)
  }

  const getPrevVideo = () => {
    const prevIndex = (currentVideoIndex - 1 + musicVideos.length) % musicVideos.length
    return musicVideos[prevIndex]
  }

  const getNextVideo = () => {
    const nextIndex = (currentVideoIndex + 1) % musicVideos.length
    return musicVideos[nextIndex]
  }

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
      <div className="relative z-10 py-16">
        {/* Enhanced Header */}
        <div className="text-center mb-16 px-4">
          <div className="relative">
            {/* Enhanced Multiple glow layers for depth */}
            <h1 className="absolute inset-0 text-4xl md:text-6xl font-bold text-cyan-400 mb-6 font-['Spin_Cycle',_'Orbitron',_monospace] lowercase tracking-wider blur-2xl opacity-60 animate-pulse">
              visual cosmos NFTs
            </h1>
            <h1 className="absolute inset-0 text-4xl md:text-6xl font-bold text-purple-400 mb-6 font-['Spin_Cycle',_'Orbitron',_monospace] lowercase tracking-wider blur-xl opacity-50 animate-pulse" style={{animationDelay: '1s'}}>
              visual cosmos NFTs
            </h1>
            <h1 className="absolute inset-0 text-4xl md:text-6xl font-bold text-cyan-300 mb-6 font-['Spin_Cycle',_'Orbitron',_monospace] lowercase tracking-wider blur-lg opacity-40 animate-pulse" style={{animationDelay: '0.5s'}}>
              visual cosmos NFTs
            </h1>
            <h1 className="absolute inset-0 text-4xl md:text-6xl font-bold text-pink-400 mb-6 font-['Spin_Cycle',_'Orbitron',_monospace] lowercase tracking-wider blur-md opacity-30 animate-pulse" style={{animationDelay: '1.5s'}}>
              visual cosmos NFTs
            </h1>
            <h1 className="relative text-4xl md:text-6xl font-bold text-white mb-6 font-['Spin_Cycle',_'Orbitron',_monospace] lowercase tracking-wider drop-shadow-2xl" style={{
              textShadow: '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(96, 165, 250, 0.3), 0 0 60px rgba(168, 85, 247, 0.2)'
            }}>
              visual cosmos NFTs
            </h1>
            
            {/* Constellation stars around title */}
            <div className="absolute -top-4 -left-4 w-2 h-2 bg-cyan-300 rounded-full animate-twinkle opacity-80" />
            <div className="absolute -top-8 right-12 w-1 h-1 bg-purple-300 rounded-full animate-twinkle opacity-60" style={{animationDelay: '1s'}} />
            <div className="absolute -bottom-4 -right-4 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-twinkle opacity-70" style={{animationDelay: '2s'}} />
            <div className="absolute -bottom-8 left-8 w-1 h-1 bg-pink-300 rounded-full animate-twinkle opacity-50" style={{animationDelay: '0.5s'}} />
          </div>
          
          <div className="relative">
            <p className="text-xl text-gray-200 max-w-3xl mx-auto font-light italic mb-4 drop-shadow-lg">
              The essence, the light. Immaterial, intangible.
            </p>
            {/* Enhanced glow behind tagline */}
            <div className="absolute inset-0 text-xl text-cyan-400 max-w-3xl mx-auto font-light italic blur-lg opacity-30 animate-pulse">
              The essence, the light. Immaterial, intangible.
            </div>
            <div className="absolute inset-0 text-xl text-purple-400 max-w-3xl mx-auto font-light italic blur-md opacity-20 animate-pulse" style={{animationDelay: '1s'}}>
              The essence, the light. Immaterial, intangible.
            </div>
          </div>
        </div>

        {/* Gleev-Style Full Width Video Carousel */}
        <div className="relative w-full overflow-hidden">
          {/* Video Carousel Container - Gleev Style */}
          <div className="relative flex items-center justify-center h-auto">
            {/* Previous Video (Partial View - Same Height) */}
            <div className="absolute left-0 z-10 w-80 md:w-96 transform -translate-x-1/2 opacity-60 hover:opacity-80 transition-opacity duration-300">
              <div className="aspect-video bg-gradient-to-br from-purple-500/20 via-cyan-500/20 to-pink-500/20 rounded-lg overflow-hidden border border-white/10">
                {getPrevVideo().embedCode ? (
                  <div 
                    className="w-full h-full rounded-lg overflow-hidden cursor-pointer"
                    onClick={() => prevVideo()}
                    dangerouslySetInnerHTML={{ __html: getPrevVideo().embedCode }}
                  />
                ) : (
                  <div className="flex items-center justify-center text-white/60 h-full">
                    <Video className="w-8 h-8" />
                  </div>
                )}
              </div>
            </div>

            {/* Next Video (Partial View - Same Height) */}
            <div className="absolute right-0 z-10 w-80 md:w-96 transform translate-x-1/2 opacity-60 hover:opacity-80 transition-opacity duration-300">
              <div className="aspect-video bg-gradient-to-br from-purple-500/20 via-cyan-500/20 to-pink-500/20 rounded-lg overflow-hidden border border-white/10">
                {getNextVideo().embedCode ? (
                  <div 
                    className="w-full h-full rounded-lg overflow-hidden cursor-pointer"
                    onClick={() => nextVideo()}
                    dangerouslySetInnerHTML={{ __html: getNextVideo().embedCode }}
                  />
                ) : (
                  <div className="flex items-center justify-center text-white/60 h-full">
                    <Video className="w-8 h-8" />
                  </div>
                )}
              </div>
            </div>

            {/* Main Current Video - Medium Size Center */}
            <div className="relative z-20 w-full max-w-2xl md:max-w-4xl mx-auto px-4">
              <div className="relative">
                {/* NFT Badge */}
                <div className="absolute top-4 left-4 z-30 flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-amber-600/90 to-amber-500/90 backdrop-blur-md rounded-lg border border-amber-400/60 shadow-lg shadow-amber-500/30">
                  <Sparkles className="w-5 h-5 text-amber-200 animate-twinkle" />
                  <span className="text-base font-bold text-amber-100 drop-shadow-sm">NFT</span>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevVideo}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-purple-600/80 to-cyan-600/80 backdrop-blur-md rounded-full border-2 border-purple-400/60 flex items-center justify-center opacity-70 hover:opacity-100 hover:scale-110 hover:from-purple-500/90 hover:to-cyan-500/90 transition-all duration-300 shadow-lg shadow-purple-500/30"
                >
                  <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </button>

                <button
                  onClick={nextVideo}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-purple-600/80 to-cyan-600/80 backdrop-blur-md rounded-full border-2 border-purple-400/60 flex items-center justify-center opacity-70 hover:opacity-100 hover:scale-110 hover:from-purple-500/90 hover:to-cyan-500/90 transition-all duration-300 shadow-lg shadow-purple-500/30"
                >
                  <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </button>

                {/* Main Video Player - Medium Size */}
                <div className="relative aspect-video bg-gradient-to-br from-purple-500/20 via-cyan-500/20 to-pink-500/20 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl shadow-purple-500/20">
                  {currentVideo.embedCode ? (
                    <div 
                      key={currentVideo.id}
                      className="w-full h-full rounded-2xl overflow-hidden"
                      dangerouslySetInnerHTML={{ __html: currentVideo.embedCode }}
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-white/60 h-full">
                      <Video className="w-12 h-12 mb-2" />
                      <span className="text-sm">Video embed coming soon</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Video Information Below - Contained */}
          <div className="max-w-4xl mx-auto px-4 mt-8">
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-md">
                  {currentVideo.title}
                </h3>
                <p className="text-base text-gray-200 leading-relaxed drop-shadow-sm">
                  {currentVideo.description}
                </p>
              </div>
              
              {/* Enhanced Collect on Gleev Link */}
              {currentVideo.gleevUrl && (
                <div className="flex justify-center pt-4">
                  <Link
                    href={currentVideo.gleevUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-3 px-8 py-4 text-base bg-gradient-to-r from-purple-600/60 to-cyan-600/60 hover:from-purple-500/80 hover:to-cyan-500/80 text-purple-200 rounded-lg transition-all duration-300 border border-purple-400/40 hover:border-purple-300/60 shadow-lg shadow-purple-500/20 hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-lg" />
                    {/* Gleev Logo */}
                    <div className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300">
                      <Image
                        src="/images/logos/gleev.svg"
                        alt="Gleev"
                        width={20}
                        height={20}
                        className="w-full h-full"
                      />
                    </div>
                    <span className="relative">Collect on Gleev</span>
                    <ExternalLink className="w-4 h-4 opacity-60 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* NFT Shorts Section */}
        <div className="mt-24 max-w-7xl mx-auto px-4">
          {/* Enhanced Section Header */}
          <div className="text-center mb-16">
            <div className="relative">
              {/* Enhanced Multiple glow layers for depth */}
              <h2 className="absolute inset-0 text-3xl md:text-5xl font-bold text-cyan-400 mb-6 font-['Spin_Cycle',_'Orbitron',_monospace] lowercase tracking-wider blur-2xl opacity-60 animate-pulse">
                nft shorts
              </h2>
              <h2 className="absolute inset-0 text-3xl md:text-5xl font-bold text-purple-400 mb-6 font-['Spin_Cycle',_'Orbitron',_monospace] lowercase tracking-wider blur-xl opacity-50 animate-pulse" style={{animationDelay: '1s'}}>
                nft shorts
              </h2>
              <h2 className="absolute inset-0 text-3xl md:text-5xl font-bold text-cyan-300 mb-6 font-['Spin_Cycle',_'Orbitron',_monospace] lowercase tracking-wider blur-lg opacity-40 animate-pulse" style={{animationDelay: '0.5s'}}>
                nft shorts
              </h2>
              <h2 className="absolute inset-0 text-3xl md:text-5xl font-bold text-pink-400 mb-6 font-['Spin_Cycle',_'Orbitron',_monospace] lowercase tracking-wider blur-md opacity-30 animate-pulse" style={{animationDelay: '1.5s'}}>
                nft shorts
              </h2>
              <h2 className="relative text-3xl md:text-5xl font-bold text-white mb-6 font-['Spin_Cycle',_'Orbitron',_monospace] lowercase tracking-wider drop-shadow-2xl" style={{
                textShadow: '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(96, 165, 250, 0.3), 0 0 60px rgba(168, 85, 247, 0.2)'
              }}>
                nft shorts
              </h2>
              
              {/* Constellation stars around title */}
              <div className="absolute -top-2 -left-2 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-twinkle opacity-80" />
              <div className="absolute -top-4 right-8 w-1 h-1 bg-purple-300 rounded-full animate-twinkle opacity-60" style={{animationDelay: '1s'}} />
              <div className="absolute -bottom-2 -right-2 w-1 h-1 bg-emerald-300 rounded-full animate-twinkle opacity-70" style={{animationDelay: '2s'}} />
              <div className="absolute -bottom-4 left-6 w-0.5 h-0.5 bg-pink-300 rounded-full animate-twinkle opacity-50" style={{animationDelay: '0.5s'}} />
            </div>
            
            <div className="relative">
              <p className="text-lg text-gray-200 max-w-2xl mx-auto font-light italic drop-shadow-lg">
                Bite-sized cosmic visions and experimental shorts
              </p>
              {/* Enhanced glow behind tagline */}
              <div className="absolute inset-0 text-lg text-cyan-400 max-w-2xl mx-auto font-light italic blur-lg opacity-30 animate-pulse">
                Bite-sized cosmic visions and experimental shorts
              </div>
              <div className="absolute inset-0 text-lg text-purple-400 max-w-2xl mx-auto font-light italic blur-md opacity-20 animate-pulse" style={{animationDelay: '1s'}}>
                Bite-sized cosmic visions and experimental shorts
              </div>
            </div>
          </div>

          {/* NFT Shorts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {nftShorts.map((short, index) => (
              <div
                key={short.id}
                className="group relative bg-gradient-to-br from-cyan-900/30 via-purple-900/30 to-pink-900/30 backdrop-blur-xl border-2 border-purple-400/20 rounded-2xl p-6 hover:border-purple-300/40 transition-all duration-500 hover:scale-105 shadow-xl shadow-purple-500/10"
              >
                {/* Enhanced cosmic effects */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400/10 via-cyan-400/10 to-pink-400/10 rounded-2xl blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/3 to-transparent rounded-2xl" />
                
                {/* Dynamic sparkles */}
                <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-purple-300 rounded-full animate-twinkle opacity-80" style={{animationDelay: `${index * 0.3}s`}} />
                <div className="absolute bottom-3 left-3 w-1 h-1 bg-cyan-300 rounded-full animate-twinkle opacity-60" style={{animationDelay: `${index * 0.3 + 1}s`}} />
                
                {/* Mini NFT Badge */}
                <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-amber-600/90 to-amber-500/90 backdrop-blur-md rounded-md border border-amber-400/60 shadow-lg shadow-amber-500/30">
                  <Sparkles className="w-4 h-4 text-amber-200 animate-twinkle" />
                  <span className="text-sm font-bold text-amber-100 drop-shadow-sm">NFT</span>
                </div>

                {/* Video Player */}
                <div className="relative aspect-video bg-gradient-to-br from-purple-500/20 via-cyan-500/20 to-pink-500/20 rounded-xl mb-6 flex items-center justify-center border border-white/10 overflow-hidden group-hover:border-white/20 transition-colors duration-500">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400/20 to-cyan-400/20 rounded-xl blur-sm" />
                  
                  {/* Actual video embed */}
                  {short.embedCode ? (
                    <div 
                      className="relative w-full h-full rounded-lg overflow-hidden"
                      dangerouslySetInnerHTML={{ __html: short.embedCode }}
                    />
                  ) : (
                    <div className="relative flex flex-col items-center text-white/60">
                      <Video className="w-10 h-10 mb-2" />
                      <span className="text-sm">Loading...</span>
                    </div>
                  )}
                </div>
                
                {/* Video Info */}
                <div className="relative space-y-4">
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors drop-shadow-md line-clamp-2">
                    {short.title}
                  </h3>
                  
                  {/* Enhanced Collect Button */}
                  <Link
                    href={short.gleevUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2 px-5 py-3 text-sm bg-gradient-to-r from-purple-600/60 to-cyan-600/60 hover:from-purple-500/80 hover:to-cyan-500/80 text-purple-200 rounded-md transition-all duration-300 border border-purple-400/40 hover:border-purple-300/60 shadow-lg shadow-purple-500/20 hover:scale-105 w-full justify-center"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-md" />
                    {/* Gleev Logo */}
                    <div className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300">
                      <Image
                        src="/images/logos/gleev.svg"
                        alt="Gleev"
                        width={16}
                        height={16}
                        className="w-full h-full"
                      />
                    </div>
                    <span className="relative">Collect</span>
                    <ExternalLink className="w-4 h-4 opacity-60 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  </Link>
                </div>
              </div>
            ))}
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
        
        {/* Visual Nebula Clouds */}
        <div className="absolute top-1/5 left-1/5 w-40 h-40 bg-gradient-radial from-purple-500/10 via-cyan-500/5 to-transparent rounded-full blur-2xl animate-pulse" style={{animationDuration: '8s'}} />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-radial from-cyan-500/10 via-pink-500/5 to-transparent rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s', animationDuration: '10s'}} />
        <div className="absolute top-2/3 left-1/2 w-36 h-36 bg-gradient-radial from-emerald-500/8 via-teal-500/4 to-transparent rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s', animationDuration: '12s'}} />
        
        {/* Visual Waves */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent animate-pulse" style={{animationDelay: '1s'}} />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-pulse" style={{animationDelay: '3s', transform: 'translateY(20px)'}} />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-400/25 to-transparent animate-pulse" style={{animationDelay: '2s', transform: 'translateY(-20px)'}} />
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
} 