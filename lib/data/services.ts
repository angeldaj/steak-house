import { Flame, Bike, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  eyebrow: string;
  description: string;
  cta: { label: string; href: string };
};

export const services: Service[] = [
  {
    id: "salon",
    icon: Flame,
    eyebrow: "Salón",
    title: "Cena en La Cabaña",
    description:
      "Vive la experiencia de la parrilla a leña en un ambiente cálido bajo el techo de madera. Mesas para parejas, familias y grupos.",
    cta: { label: "Reserva una mesa", href: "#contacto" },
  },
  {
    id: "delivery",
    icon: Bike,
    eyebrow: "Delivery",
    title: "Llegamos a tu puerta",
    description:
      "Pide tus cortes favoritos y disfruta en casa. Empacado con cuidado para que llegue caliente y en su punto.",
    cta: { label: "Pedir por WhatsApp", href: "whatsapp" },
  },
  {
    id: "eventos",
    icon: Sparkles,
    eyebrow: "Eventos",
    title: "Ocasiones especiales",
    description:
      "Cumpleaños, aniversarios, cenas privadas y menús especiales. Hacemos de tu fecha una velada inolvidable.",
    cta: { label: "Conversemos tu evento", href: "whatsapp" },
  },
];
