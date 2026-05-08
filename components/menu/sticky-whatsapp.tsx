"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/utils";

export function StickyWhatsApp() {
  return (
    <motion.a
      href={whatsappLink("¡Hola! Quiero hacer un pedido")}
      target="_blank"
      rel="noopener noreferrer"
      className="lg:hidden fixed bottom-4 left-4 right-4 z-40 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-medium text-white shadow-2xl shadow-[#25D366]/30 min-h-[52px]"
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <MessageCircle className="h-5 w-5" />
      Pedir por WhatsApp
    </motion.a>
  );
}
