import Link from "next/link"
import { Globe, Music, Video, Coins } from "lucide-react"
import { socialLinks, artistInfo } from "@/lib/data"

const iconMap = {
  globe: Globe,
  music: Music,
  video: Video,
  coins: Coins,
}

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Artist Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{artistInfo.name}</h3>
            <p className="text-sm text-muted-foreground">
              {artistInfo.tagline}
            </p>
            <p className="text-sm text-muted-foreground">
              Creating immersive electronic soundscapes and innovative audio experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/music" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Music
              </Link>
              <Link href="/shows" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Shows
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="grid grid-cols-2 gap-2">
              {socialLinks.slice(0, 8).map((link) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap] || Globe
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                    <span>{link.name}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {artistInfo.name}. All rights reserved.
            </div>
            <div className="flex items-center space-x-4">
              <a
                href={artistInfo.website}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {artistInfo.website.replace('https://', '')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 