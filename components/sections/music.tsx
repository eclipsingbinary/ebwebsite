import { musicPlatforms } from "@/lib/data"

export function Music() {
  return (
    <section id="music" className="py-16 md:py-24 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Music</h2>
            <p className="text-lg text-muted-foreground">
              Explore the latest releases and immersive soundscapes
            </p>
          </div>

          {/* Music Platforms */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {musicPlatforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-lg mb-2">{platform.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {platform.description}
                </p>
                <span className="text-sm text-primary hover:underline">
                  Listen Now →
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 