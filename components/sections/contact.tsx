import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { WhatsAppCTA } from "@/components/shared/whatsapp-cta";
import { Button } from "@/components/ui/button";
import {
  WHATSAPP_DISPLAY,
  instagramLink,
  whatsappLink,
} from "@/lib/utils";
import { Clock, MapPin, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/shared/icons";

const info = [
  {
    icon: MapPin,
    label: "Visítanos",
    value: "Av. Principal, La Ciudad",
    sub: "Estacionamiento disponible",
  },
  {
    icon: Clock,
    label: "Horarios",
    value: "Lun – Jue: 12:00 – 22:00",
    sub: "Vie – Sáb: 12:00 – 23:30 · Dom: 12:00 – 21:00",
  },
  {
    icon: Phone,
    label: "Reservas y delivery",
    value: WHATSAPP_DISPLAY,
    sub: "Respondemos rápido por WhatsApp",
  },
];

export function Contact() {
  return (
    <section
      id="contacto"
      className="relative py-20 sm:py-28 scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Visítanos"
            title="Reserva tu lugar junto al fuego."
            description="Pasa por el salón o escríbenos. Estamos listos para recibirte."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-full min-h-[320px] rounded-lg overflow-hidden border border-gold/20 bg-elevated">
              <div
                className="absolute inset-0 opacity-50"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 50%, rgba(168,129,79,0.18) 0%, transparent 60%)",
                  backgroundColor: "var(--surface)",
                }}
              />
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(168,129,79,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(168,129,79,0.08) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
              <div className="absolute inset-0 grid place-items-center">
                <div className="flex flex-col items-center gap-3 text-center px-6">
                  <MapPin className="h-10 w-10 text-ember-bright" />
                  <p className="font-display text-xl text-cream">
                    Av. Principal, La Ciudad
                  </p>
                  <p className="text-sm text-muted max-w-sm">
                    Mapa interactivo próximamente. Mientras tanto, escríbenos y
                    te enviamos la ubicación.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-2 flex flex-col gap-4">
            {info.map((item, i) => (
              <Reveal key={item.label} delay={0.1 * i}>
                <div className="flex gap-4 rounded-lg border border-gold/15 bg-elevated/50 p-5">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-ember/15 border border-ember/30 text-ember-bright">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[11px] uppercase tracking-[0.25em] text-gold-soft">
                      {item.label}
                    </p>
                    <p className="font-display text-lg text-cream">
                      {item.value}
                    </p>
                    <p className="text-xs text-muted">{item.sub}</p>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <WhatsAppCTA
                  className="flex-1"
                  message="¡Hola! Quiero hacer una reserva"
                  label="Reservar por WhatsApp"
                />
                <Button asChild variant="outline" size="lg" className="flex-1">
                  <a
                    href={instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon className="h-4 w-4" />
                    Instagram
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
