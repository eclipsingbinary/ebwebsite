# RTMP Server Setup Guide

## Option 1: Node Media Server (Recommended for beginners)

### Installation
```bash
mkdir rtmp-server
cd rtmp-server
npm init -y
npm install node-media-server
```

### Server Configuration
```javascript
// server.js
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
    ffmpeg: '/usr/local/bin/ffmpeg', // Path to ffmpeg
    tasks: [
      {
        app: 'live',
        mode: 'push',
        edge: 'rtmp://localhost/hls'
      }
    ]
  }
};

const nms = new NodeMediaServer(config);
nms.run();

console.log('RTMP Server running on rtmp://localhost:1935/live');
console.log('HTTP Server running on http://localhost:8000');
```

### Start Server
```bash
node server.js
```

## Option 2: Nginx RTMP (More advanced)

### Docker Setup (Easier)
```dockerfile
# docker-compose.yml
version: '3'
services:
  nginx-rtmp:
    image: tiangolo/nginx-rtmp
    ports:
      - "1935:1935"  # RTMP
      - "8080:80"    # HTTP
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
```

### Nginx Configuration
```nginx
# nginx.conf
events {
    worker_connections 1024;
}

rtmp {
    server {
        listen 1935;
        chunk_size 4096;
        
        application live {
            live on;
            hls on;
            hls_path /var/www/html/hls;
            hls_fragment 3;
            hls_playlist_length 60;
            
            # Allow publishing from localhost
            allow publish 127.0.0.1;
            deny publish all;
        }
    }
}

http {
    sendfile off;
    tcp_nopush on;
    directio 512;
    
    server {
        listen 80;
        
        location /hls {
            add_header Cache-Control no-cache;
            add_header Access-Control-Allow-Origin *;
            root /var/www/html;
        }
    }
}
```

## OBS Studio Configuration

### Stream Settings
1. **Open OBS Studio**
2. **Settings > Stream**
3. **Service:** Custom
4. **Server:** `rtmp://YOUR_SERVER_IP:1935/live`
5. **Stream Key:** `your-stream-key` (any unique identifier)

### Output Settings
1. **Settings > Output**
2. **Output Mode:** Advanced
3. **Encoder:** x264 (or NVENC if you have Nvidia GPU)
4. **Bitrate:** 2500-6000 kbps (depending on your upload speed)
5. **Keyframe Interval:** 2 seconds

## Embed URL for Website

### For Node Media Server
```javascript
// Your stream will be available at:
// HLS: http://YOUR_SERVER_IP:8000/live/your-stream-key.m3u8
// RTMP: rtmp://YOUR_SERVER_IP:1935/live/your-stream-key

// For website embed:
const streamUrl = 'http://YOUR_SERVER_IP:8000/live/your-stream-key.m3u8';
```

### For Nginx RTMP
```javascript
// HLS stream URL:
const streamUrl = 'http://YOUR_SERVER_IP:8080/hls/your-stream-key.m3u8';
```

## Cost Breakdown

### Self-Hosted (Cheapest)
- **VPS Hosting:** $5-20/month (DigitalOcean, Linode, etc.)
- **Domain:** $10-15/year (optional)
- **SSL Certificate:** Free (Let's Encrypt)
- **Total:** ~$5-20/month

### Cloud Services
- **Cloudflare Stream:** $1/1000 minutes delivered
- **AWS Elemental:** ~$15/month + bandwidth
- **Mux Live:** $0.005/minute streamed

## Security Considerations

### Stream Key Protection
```javascript
// In your RTMP server config, add authentication
const config = {
  auth: {
    play: false,
    publish: true,
    secret: 'your-secret-key'
  }
  // ... rest of config
};
```

### HTTPS for Website
- Use SSL certificate for your domain
- Serve HLS streams over HTTPS
- Restrict CORS to your domain only

## Monitoring & Analytics

### Basic Viewer Count
```javascript
// Add to your Node Media Server
nms.on('preConnect', (id, args) => {
  console.log('[NodeEvent on preConnect]', `id=${id} args=${JSON.stringify(args)}`);
});

nms.on('postConnect', (id, args) => {
  console.log('[NodeEvent on postConnect]', `id=${id} args=${JSON.stringify(args)}`);
});
```

## Troubleshooting

### Common Issues
1. **Firewall:** Ensure ports 1935 (RTMP) and 8000/8080 (HTTP) are open
2. **FFmpeg:** Make sure FFmpeg is installed for transcoding
3. **Upload Speed:** Ensure sufficient bandwidth for your bitrate
4. **Browser Support:** HLS works in most modern browsers, consider Video.js for better compatibility 