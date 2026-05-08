import Link from "next/link";
import { MessageCircle, MapPin, Clock, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/shared/icons";
import { Logo } from "@/components/shared/logo";
import {
  WHATSAPP_DISPLAY,
  instagramLink,
  whatsappLink,
} from "@/lib/utils";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-gold/15 bg-surface bg-grain">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              Parrilla a leña, cortes premium y un ambiente cálido bajo el techo
              de madera.
            </p>
            <div className="flex gap-2">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="grid h-10 w-10 place-items-center rounded-full border border-gold/20 text-cream/80 hover:border-gold hover:text-gold transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-gold/20 text-cream/80 hover:border-gold hover:text-gold transition-colors"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg text-cream">Explora</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted hover:text-gold">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-muted hover:text-gold">
                  Menú
                </Link>
              </li>
              <li>
                <Link href="/#servicios" className="text-muted hover:text-gold">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/#contacto" className="text-muted hover:text-gold">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg text-cream">Horarios</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 shrink-0 text-gold-soft" />
                <span>
                  Lun – Jue: 12:00 – 22:00
                  <br />
                  Vie – Sáb: 12:00 – 23:30
                  <br />
                  Dom: 12:00 – 21:00
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg text-cream">Contacto</h3>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 shrink-0 text-gold-soft" />
                <a href={whatsappLink()} className="hover:text-gold">
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <InstagramIcon className="h-4 w-4 mt-0.5 shrink-0 text-gold-soft" />
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  @lacabanasteakhouse
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold-soft" />
                <span>Av. Principal, La Ciudad</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gold/10 pt-6">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} La Cabaña Steak House. Todos los
            derechos reservados.
          </p>
          <p className="font-script text-gold text-xl leading-none">
            Hecho con fuego y paciencia.
          </p>
        </div>
      </div>
    </footer>
  );
}
