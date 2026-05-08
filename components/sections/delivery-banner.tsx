"use client";

import { motion, useReducedMotion } from "framer-motion";
import { WhatsAppCTA } from "@/components/shared/whatsapp-cta";
import { Reveal } from "@/components/shared/reveal";
import { Bike } from "lucide-react";

export function DeliveryBanner() {
  const reduce = useReducedMotion();

  return (
    <section
      id="delivery"
      className="relative isolate overflow-hidden py-24 sm:py-32 scroll-mt-20"
    >
      <div className="absolute inset-0 -z-10 bg-base">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, rgba(138,52,16,0.3) 0%, transparent 55%), radial-gradient(ellipse at 80% 50%, rgba(168,129,79,0.14) 0%, transparent 55%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-25 mix-blend-overlay"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent 0 60px, rgba(0,0,0,0.4) 60px 62px)",
          }}
        />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-base/40 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-gold">
            <Bike className="h-3.5 w-3.5" />
            Tenemos delivery
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-6 font-display text-fluid-h2 text-cream">
            No importa dónde estés,{" "}
            <span className="font-script text-gold whitespace-nowrap">
              nosotros llegamos a ti.
            </span>
          </h2>
          <p className="mt-5 mx-auto max-w-2xl text-base sm:text-lg text-cream/80 leading-relaxed">
            Empacamos cada pedido como si fuera para nosotros: caliente, en su
            punto y con la misma intención del salón. Llevamos a toda la
            ciudad.
          </p>
        </Reveal>

        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, scale: 0.85, rotate: reduce ? 0 : -8 }}
          whileInView={{ opacity: 1, scale: 1, rotate: reduce ? 0 : -4 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative">
            <div className="rounded-full border-[3px] border-double border-gold px-7 py-3 text-gold uppercase tracking-[0.3em] text-xs sm:text-sm font-semibold">
              A toda la ciudad
            </div>
            <div className="absolute -inset-2 rounded-full border border-gold/30" />
          </div>
        </motion.div>

        <Reveal delay={0.3}>
          <div className="mt-10 flex justify-center">
            <WhatsAppCTA
              size="xl"
              label="Pedir ahora por WhatsApp"
              message="¡Hola! Me gustaría hacer un pedido para delivery 🍖"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
