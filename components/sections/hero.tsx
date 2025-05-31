import Link from "next/link"
import { Play, ExternalLink } from "lucide-react"
import { artistInfo, musicPlatforms } from "@/lib/data"

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/10">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Artist Name */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              {artistInfo.name}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              {artistInfo.tagline}
            </p>
          </div>

          {/* Bio */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {artistInfo.bio}
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={musicPlatforms[0]?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              <Play className="mr-2 h-4 w-4" />
              Listen Now
            </a>
            <Link
              href="/music"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Explore Music
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Music Platforms */}
          <div className="pt-8">
            <p className="text-sm text-muted-foreground mb-4">Available on:</p>
            <div className="flex flex-wrap justify-center gap-4">
              {musicPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors underline"
                >
                  {platform.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>
    </section>
  )
} 