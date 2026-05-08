import type { Metadata } from "next";
import { MenuTabs } from "@/components/menu/menu-tabs";
import { StickyWhatsApp } from "@/components/menu/sticky-whatsapp";
import { CabinDivider } from "@/components/shared/cabin-divider";

export const metadata: Metadata = {
  title: "Nuestra Carta — La Cabaña Steak House",
  description:
    "Cortes premium a la leña, mariscos, pastas y postres. Conoce toda la carta de La Cabaña Steak House.",
};

export default function MenuPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden py-20 sm:py-28 bg-grain">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-surface via-base to-base" />
        <div
          className="absolute inset-0 -z-10 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(138,52,16,0.22) 0%, transparent 55%)",
          }}
          aria-hidden
        />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-script text-gold text-2xl sm:text-3xl">
            Bienvenido a la mesa
          </span>
          <h1 className="mt-3 font-display text-fluid-hero text-cream">
            Nuestra Carta
          </h1>
          <CabinDivider variant="full" className="mx-auto max-w-md mt-6" />
          <p className="mt-6 mx-auto max-w-2xl text-base sm:text-lg text-cream/80 leading-relaxed">
            Cortes a la leña, mariscos frescos, pastas hechas en casa y postres
            que cierran la noche con calma. Elige tu categoría y déjate llevar.
          </p>
        </div>
      </section>

      <section className="pb-32 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MenuTabs />
        </div>
      </section>

      <StickyWhatsApp />
    </>
  );
}
