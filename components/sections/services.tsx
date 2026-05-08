import Link from "next/link";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, RevealStagger, RevealItem } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data/services";
import { whatsappLink } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

export function Services() {
  return (
    <section
      id="servicios"
      className="relative py-20 sm:py-28 scroll-mt-20"
    >
      <div
        className="absolute inset-0 -z-10 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(138,52,16,0.1) 0%, transparent 60%)",
        }}
        aria-hidden
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Cómo te servimos"
            title="Tres formas de disfrutar La Cabaña"
            description="Vente al salón, llévatela a casa o pídenos hacerlo memorable. Hagas lo que hagas, la brasa va contigo."
          />
        </Reveal>

        <RevealStagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            const isWa = service.cta.href === "whatsapp";
            const href = isWa ? whatsappLink() : service.cta.href;
            return (
              <RevealItem key={service.id}>
                <article className="group relative h-full flex flex-col gap-5 rounded-lg border border-gold/15 bg-elevated/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-2xl hover:shadow-ember/10">
                  <div className="flex items-center justify-between">
                    <div className="grid h-14 w-14 place-items-center rounded-lg bg-ember/15 border border-ember/30 text-ember-bright">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.25em] text-gold-soft">
                      {service.eyebrow}
                    </span>
                  </div>
                  <div className="space-y-3 flex-1">
                    <h3 className="font-display text-2xl text-cream">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="self-start -ml-3 text-gold hover:text-cream"
                  >
                    <Link
                      href={href}
                      target={isWa ? "_blank" : undefined}
                      rel={isWa ? "noopener noreferrer" : undefined}
                    >
                      {service.cta.label}
                      <ArrowUpRight aria-hidden />
                    </Link>
                  </Button>
                </article>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
