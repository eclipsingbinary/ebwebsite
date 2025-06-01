#!/bin/bash
# Local RTMP Server Setup Script

echo "Setting up local RTMP server for testing..."

# Create project directory
mkdir -p rtmp-local-server
cd rtmp-local-server

# Initialize Node.js project
npm init -y
npm install node-media-server

# Create server.js
cat > server.js << 'EOF'
const NodeMediaServer = require('node-media-server');

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8000,
    allow_origin: '*',
    mediaroot: './media',
  },
  relay: {
    ffmpeg: 'ffmpeg', // Make sure ffmpeg is in PATH
    tasks: [
      {
        app: 'live',
        mode: 'push',
        edge: 'rtmp://localhost/live'
      }
    ]
  }
};

const nms = new NodeMediaServer(config);
nms.run();

console.log('\n=== RTMP Server Started ===');
console.log('RTMP URL for OBS: rtmp://localhost:1935/live');
console.log('Stream Key: cosmic-live-stream');
console.log('Full OBS Server: rtmp://localhost:1935/live/cosmic-live-stream');
console.log('View Stream at: http://localhost:8000/live/cosmic-live-stream.m3u8');
console.log('===============================\n');
EOF

echo "Local RTMP server setup complete!"
echo ""
echo "To start the server:"
echo "  cd rtmp-local-server"
echo "  node server.js"
echo ""
echo "Then configure OBS with:"
echo "  Server: rtmp://localhost:1935/live"
echo "  Stream Key: cosmic-live-stream" 