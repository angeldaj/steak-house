"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Flame } from "lucide-react";
import { CabinDivider } from "@/components/shared/cabin-divider";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden min-h-[88vh] sm:min-h-[92vh] flex items-center">
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10"
        initial={{ scale: 1 }}
        animate={reduce ? undefined : { scale: 1.08 }}
        transition={{ duration: 18, repeat: Infinity, repeatType: "mirror" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-base via-surface to-elevated" />
        <div
          className="absolute inset-0 opacity-30 mix-blend-screen"
          style={{
            background:
              "radial-gradient(ellipse at 30% 40%, rgba(138, 52, 16, 0.4) 0%, transparent 55%), radial-gradient(ellipse at 70% 70%, rgba(168, 129, 79, 0.18) 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "repeating-linear-gradient(180deg, transparent 0 14px, rgba(0,0,0,0.25) 14px 16px), repeating-linear-gradient(90deg, transparent 0 80px, rgba(0,0,0,0.18) 80px 84px)",
          }}
        />
      </motion.div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-base -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-3xl">
          <motion.span
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-base/40 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-gold"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Flame className="h-3.5 w-3.5" />
            Parrilla a leña
          </motion.span>

          <motion.h1
            className="mt-6 font-display text-fluid-hero text-cream tracking-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Donde el fuego{" "}
            <span className="text-ember-bright">cuenta historias</span> y la
            carne las{" "}
            <span className="font-script text-gold">recuerda.</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-base sm:text-lg text-cream/80 leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            Cortes premium asados a la leña bajo nuestro techo de madera. Vive
            la experiencia en el salón o pídela a casa, que de eso también
            sabemos.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Button asChild size="xl" variant="primary">
              <Link href="/menu">
                Ver el menú
                <ArrowRight aria-hidden />
              </Link>
            </Button>
            <Button asChild size="xl" variant="outline">
              <Link href="#delivery">Pedir delivery</Link>
            </Button>
          </motion.div>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <CabinDivider variant="full" className="max-w-md" />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gold/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        aria-hidden
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Desliza</span>
        <motion.span
          className="block h-6 w-px bg-gradient-to-b from-gold/60 to-transparent"
          animate={reduce ? undefined : { scaleY: [0.4, 1, 0.4] }}
          style={{ transformOrigin: "top" }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
