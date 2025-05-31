import { shows } from "@/lib/data"

export function Shows() {
  return (
    <section id="shows" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Shows & Events</h2>
            <p className="text-lg text-muted-foreground">
              Upcoming performances and virtual events
            </p>
          </div>

          {/* Shows List */}
          <div className="space-y-6">
            {shows.map((show) => (
              <div
                key={show.id}
                className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 rounded-lg border bg-card text-card-foreground shadow-sm"
              >
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                    <span className="text-lg font-semibold">{show.date}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-lg">{show.venue}</span>
                  </div>
                  <p className="text-muted-foreground">{show.location}</p>
                  <p className="text-sm text-muted-foreground mt-2">{show.description}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2">
                    Details TBA
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 