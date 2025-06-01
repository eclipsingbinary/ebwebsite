'use client'

import { artistInfo } from '@/lib/data'
import { streamConfig, getStreamUrl } from '@/lib/stream-config'
import { ExternalLink, Radio, Users, MessageCircle, Share2, Video, Play } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function LivePage() {
  const [isLive, setIsLive] = useState(streamConfig.isLive)
  const [streamUrl, setStreamUrl] = useState(getStreamUrl())

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
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Enhanced Header */}
        <div className="text-center mb-12">
          <div className="relative">
            {/* Multiple glow layers for depth */}
            <h1 className="absolute inset-0 text-4xl md:text-6xl font-bold text-cyan-400 mb-6 font-['Spin_Cycle',_'Orbitron',_monospace] lowercase tracking-wider blur-sm opacity-50">
              live stream
            </h1>
            <h1 className="absolute inset-0 text-4xl md:text-6xl font-bold text-purple-400 mb-6 font-['Spin_Cycle',_'Orbitron',_monospace] lowercase tracking-wider blur-md opacity-30">
              live stream
            </h1>
            <h1 className="relative text-4xl md:text-6xl font-bold text-white mb-6 font-['Spin_Cycle',_'Orbitron',_monospace] lowercase tracking-wider drop-shadow-2xl">
              live stream
            </h1>
            
            {/* Constellation stars around title */}
            <div className="absolute -top-4 -left-4 w-2 h-2 bg-cyan-300 rounded-full animate-twinkle opacity-80" />
            <div className="absolute -top-8 right-12 w-1 h-1 bg-purple-300 rounded-full animate-twinkle opacity-60" style={{animationDelay: '1s'}} />
            <div className="absolute -bottom-4 -right-4 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-twinkle opacity-70" style={{animationDelay: '2s'}} />
            <div className="absolute -bottom-8 left-8 w-1 h-1 bg-pink-300 rounded-full animate-twinkle opacity-50" style={{animationDelay: '0.5s'}} />
          </div>
          
          {/* Live Status Indicator */}
          <div className="relative mb-8">
            <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 backdrop-blur-md transition-all duration-300 ${
              isLive 
                ? 'bg-gradient-to-r from-red-600/60 to-pink-600/60 border-red-400/60 animate-pulse' 
                : 'bg-gradient-to-r from-gray-600/60 to-slate-600/60 border-gray-400/60'
            }`}>
              <Radio className={`w-5 h-5 ${isLive ? 'text-red-200 animate-pulse' : 'text-gray-300'}`} />
              <span className="text-lg font-medium">
                {isLive ? 'LIVE NOW' : 'OFFLINE'}
              </span>
              {isLive && (
                <div className="w-3 h-3 bg-red-400 rounded-full animate-ping" />
              )}
            </div>
          </div>
          
          <p className="text-xl text-gray-200 max-w-3xl mx-auto font-light italic mb-4 drop-shadow-lg">
            "Broadcasting cosmic vibrations across the digital universe"
          </p>
        </div>

        {/* Main Stream and Chat Layout */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Main Stream Area */}
          <div className="lg:col-span-2">
            <div className="relative bg-gradient-to-br from-cyan-900/30 via-indigo-900/30 to-purple-900/30 backdrop-blur-xl border-2 border-indigo-400/20 rounded-3xl p-8 shadow-xl shadow-indigo-500/10">
              {/* Enhanced cosmic effects */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400/10 via-purple-400/10 to-cyan-400/10 rounded-3xl blur-sm" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/3 to-transparent rounded-3xl" />
              
              {/* Dynamic sparkles */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-indigo-300 rounded-full animate-twinkle opacity-80" />
              <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-twinkle opacity-70" style={{animationDelay: '1s'}} />
              
              <div className="relative">
                {/* Stream Area */}
                <div className="relative aspect-video bg-gradient-to-br from-gray-900/60 to-black/60 rounded-2xl overflow-hidden border-2 border-white/10 mb-6">
                  {isLive && streamUrl ? (
                    // HLS Video Player for RTMP streams
                    <video 
                      className="w-full h-full rounded-xl object-cover"
                      controls
                      autoPlay
                      muted
                      playsInline
                    >
                      <source src={streamUrl} type="application/x-mpegURL" />
                      <p className="text-white p-4">
                        Your browser doesn't support HLS streaming. 
                        <br />
                        Try using a modern browser like Chrome, Firefox, or Safari.
                      </p>
                    </video>
                  ) : isLive ? (
                    <div className="w-full h-full flex flex-col items-center justify-center text-center p-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-full flex items-center justify-center mb-4 animate-pulse">
                        <Radio className="w-10 h-10 text-red-400" />
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2">Live Stream Active</h3>
                      <p className="text-gray-300 mb-4 text-lg">
                        {streamConfig.title}
                      </p>
                      <div className="flex items-center gap-4 text-gray-300">
                        <span className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          {streamConfig.viewers} viewers
                        </span>
                        <span className="flex items-center gap-2">
                          <Radio className="w-4 h-4 animate-pulse text-red-400" />
                          Broadcasting
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 mt-4">
                        Setting up stream player...
                      </p>
                    </div>
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-center p-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-gray-500/20 to-slate-500/20 rounded-full flex items-center justify-center mb-6">
                        <Video className="w-10 h-10 text-gray-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Stream Currently Offline</h3>
                      <p className="text-gray-300 mb-6">
                        Check back later for live cosmic performances and interactive sessions
                      </p>
                      <div className="text-sm text-gray-400">
                        Follow us on social media for live stream notifications
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Stream Controls */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">
                        {isLive ? `${streamConfig.viewers} viewers` : 'No active stream'}
                      </span>
                    </div>
                    {isLive && (
                      <div className="flex items-center gap-2 text-gray-300">
                        <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                        <span className="text-sm">Live</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    <button className="group/btn inline-flex items-center gap-2 px-4 py-2 text-sm bg-gradient-to-r from-purple-600/60 to-pink-600/60 hover:from-purple-500/80 hover:to-pink-500/80 text-purple-200 rounded-lg transition-all duration-300 border border-purple-500/40 hover:border-purple-400/60 shadow-lg shadow-purple-500/20 hover:scale-105">
                      <Play className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                      <span className="relative">Watch Stream</span>
                    </button>
                    
                    <button className="group/btn inline-flex items-center gap-2 px-4 py-2 text-sm bg-gradient-to-r from-indigo-600/60 to-cyan-600/60 hover:from-indigo-500/80 hover:to-cyan-500/80 text-indigo-200 rounded-lg transition-all duration-300 border border-indigo-500/40 hover:border-indigo-400/60 shadow-lg shadow-indigo-500/20 hover:scale-105">
                      <Share2 className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                      <span className="relative">Share Stream</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Live Chat Area */}
          <div className="lg:col-span-1">
            <div className="relative bg-gradient-to-br from-purple-900/30 via-indigo-900/30 to-cyan-900/30 backdrop-blur-xl border-2 border-purple-400/20 rounded-3xl p-6 shadow-xl shadow-purple-500/10 h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/10 via-indigo-400/10 to-cyan-400/10 rounded-3xl blur-sm" />
              
              <div className="relative h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-bold text-white">Live Chat</h3>
                </div>
                
                <div className="flex-1 bg-gradient-to-br from-gray-900/60 to-black/60 rounded-xl border border-white/10 flex items-center justify-center min-h-[600px]">
                  {isLive ? (
                    <div className="text-center text-gray-300">
                      <MessageCircle className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="text-lg mb-2">Chat will appear when stream is live</p>
                      <p className="text-sm opacity-75">Connect your chat platform here</p>
                    </div>
                  ) : (
                    <div className="text-center text-gray-400">
                      <MessageCircle className="w-16 h-16 mx-auto mb-4 opacity-30" />
                      <p className="text-lg mb-2">Chat is offline</p>
                      <p className="text-sm">Join when the stream goes live!</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Cosmic Atmosphere for Live Streaming */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Radio Wave Patterns */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-pulse" style={{animationDelay: '0s'}} />
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/25 to-transparent animate-pulse" style={{animationDelay: '1s'}} />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-400/20 to-transparent animate-pulse" style={{animationDelay: '2s'}} />
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/25 to-transparent animate-pulse" style={{animationDelay: '1.5s'}} />
        
        {/* Streaming Signal Indicators */}
        <div className="absolute top-1/6 left-1/6 w-1 h-1 bg-cyan-300 rounded-full animate-twinkle opacity-80" />
        <div className="absolute top-1/5 right-1/6 w-0.5 h-0.5 bg-purple-300 rounded-full animate-twinkle opacity-60" style={{animationDelay: '0.7s'}} />
        <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-pink-300 rounded-full animate-twinkle opacity-70" style={{animationDelay: '1.2s'}} />
        <div className="absolute bottom-1/6 right-1/4 w-1 h-1 bg-emerald-300 rounded-full animate-twinkle opacity-75" style={{animationDelay: '1.8s'}} />
      </div>
    </div>
  )
} 