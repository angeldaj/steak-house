import { Reveal } from "@/components/shared/reveal";
import { CabinIcon } from "@/components/shared/cabin-divider";
import { Flame, Trees, Heart } from "lucide-react";

const pillars = [
  {
    icon: Flame,
    title: "Brasa lenta",
    text: "Leña noble que perfuma cada corte sin disfrazarlo.",
  },
  {
    icon: Trees,
    title: "Refugio cálido",
    text: "Techo de madera, luz baja y sobremesas largas.",
  },
  {
    icon: Heart,
    title: "Cocina con alma",
    text: "Equipo que atiende como en casa, porque eso somos.",
  },
];

export function Welcome() {
  return (
    <section className="relative py-20 sm:py-28 bg-grain">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden border border-gold/20 bg-gradient-to-br from-elevated via-surface to-base relative">
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    background:
                      "radial-gradient(ellipse at 60% 40%, rgba(138,52,16,0.3) 0%, transparent 60%)",
                  }}
                />
                <div className="absolute inset-0 grid place-items-center">
                  <CabinIcon className="h-32 w-48 text-gold/30" />
                </div>
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(180deg, transparent 0 18px, rgba(0,0,0,0.25) 18px 20px)",
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -right-4 sm:-right-8 max-w-[240px] rounded-lg border border-gold/30 bg-base/90 backdrop-blur p-5 shadow-2xl">
                <p className="font-script text-2xl text-gold leading-tight">
                  Más que un restaurante,
                </p>
                <p className="font-display text-cream text-lg mt-1">
                  un refugio con olor a brasa.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="space-y-8">
            <Reveal delay={0.1}>
              <span className="font-script text-gold text-2xl">
                Bienvenidos
              </span>
              <h2 className="font-display text-fluid-h2 text-cream mt-2">
                Una cabaña construida alrededor del fuego.
              </h2>
              <p className="mt-5 text-cream/80 leading-relaxed text-base sm:text-lg">
                Nacimos con una idea sencilla: hacer del fuego el centro de la
                mesa. Cada corte pasa por la leña, cada salsa se cocina sin
                prisa, y cada plato sale con la calma de quien sabe que las
                cosas buenas piden su tiempo.
              </p>
            </Reveal>

            <ul className="grid sm:grid-cols-3 gap-5">
              {pillars.map((p, i) => (
                <Reveal key={p.title} delay={0.2 + i * 0.1} as="li">
                  <div className="flex flex-col gap-2 rounded-lg border border-gold/15 bg-elevated/40 p-5 h-full">
                    <p.icon
                      className="h-6 w-6 text-ember-bright"
                      aria-hidden
                    />
                    <h3 className="font-display text-lg text-cream">
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {p.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
