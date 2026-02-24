import { Camera, Dumbbell, Gamepad2, Mountain, Music, Utensils } from "lucide-react"

const hobbies = [
  {
    icon: Mountain,
    title: "Hiking",
    description: "Weekend trail adventures and summit chasing.",
  },
  {
    icon: Gamepad2,
    title: "Gaming",
    description: "Competitive FPS and indie game exploration.",
  },
  {
    icon: Dumbbell,
    title: "Fitness",
    description: "Strength training and functional movement.",
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Street and landscape photography on film.",
  },
  {
    icon: Music,
    title: "Music",
    description: "Vinyl collecting and live concert-goer.",
  },
  {
    icon: Utensils,
    title: "Cooking",
    description: "Experimental recipes and fermentation projects.",
  },
]

export function AfterHoursSection() {
  return (
    <section
      id="after-hours"
      className="relative px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <div className="mb-16 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 max-w-12 bg-primary/50" />
            <span className="font-mono text-xs tracking-widest text-primary uppercase">
              Beyond the Terminal
            </span>
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            After Hours
          </h2>
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            When the CI pipelines are green and the clusters are healthy,
            you can find me out in the real world.
          </p>
        </div>

        {/* Hobby grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-5">
          {hobbies.map((hobby) => {
            const Icon = hobby.icon
            return (
              <div
                key={hobby.title}
                className="glass clay group rounded-2xl p-6 transition-all duration-300 hover:glow-orange-sm hover:scale-[1.02]"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-1 font-semibold text-foreground">
                  {hobby.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {hobby.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
