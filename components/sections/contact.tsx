import { Mail, Globe, Music, Video, Coins } from "lucide-react"
import { socialLinks, artistInfo } from "@/lib/data"

const iconMap = {
  globe: Globe,
  music: Music,
  video: Video,
  coins: Coins,
}

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect</h2>
            <p className="text-lg text-muted-foreground">
              Follow the journey across platforms and stay updated on new releases
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center mb-12">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <a 
                href={`mailto:${artistInfo.email}`}
                className="text-lg hover:text-primary transition-colors"
              >
                {artistInfo.email}
              </a>
            </div>
            <p className="text-muted-foreground">
              For booking, collaboration, or general inquiries
            </p>
          </div>

          {/* Social Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap] || Globe
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all hover:scale-[1.02]"
                >
                  <Icon className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">{link.name}</h3>
                    <p className="text-sm text-muted-foreground">{link.description}</p>
                  </div>
                </a>
              )
            })}
          </div>

          {/* Website */}
          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground mb-2">Official Website</p>
            <a
              href={artistInfo.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-primary hover:underline"
            >
              {artistInfo.website.replace('https://', '')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 