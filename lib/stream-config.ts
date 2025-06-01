// Stream configuration
// Update these values when setting up your RTMP server

export const streamConfig = {
  // Set to true when you want to go live
  isLive: false,
  
  // Local development (for testing)
  local: {
    streamUrl: 'http://localhost:8000/live/cosmic-live-stream.m3u8',
    rtmpServer: 'rtmp://localhost:1935/live',
  },
  
  // Production (your VPS server)
  production: {
    streamUrl: 'http://YOUR_SERVER_IP:8000/live/cosmic-live-stream.m3u8', // Update YOUR_SERVER_IP
    rtmpServer: 'rtmp://YOUR_SERVER_IP:1935/live', // Update YOUR_SERVER_IP
  },
  
  // Stream settings
  streamKey: 'cosmic-live-stream',
  title: 'Cosmic Journey Live Session',
  viewers: 0, // Current viewer count
  
  // Use local for testing, production for live streaming
  environment: 'local' as 'local' | 'production'
}

// Helper function to get current stream URL
export const getStreamUrl = () => {
  if (!streamConfig.isLive) return ''
  return streamConfig.environment === 'local' 
    ? streamConfig.local.streamUrl 
    : streamConfig.production.streamUrl
}

// Helper function to get RTMP server (for your reference, not public)
export const getRtmpServer = () => {
  return streamConfig.environment === 'local'
    ? streamConfig.local.rtmpServer
    : streamConfig.production.rtmpServer
} 