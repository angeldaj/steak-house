import { Button, type ButtonProps } from "@/components/ui/button";
import { whatsappLink } from "@/lib/utils";
import { MessageCircle } from "lucide-react";

type Props = Omit<ButtonProps, "asChild" | "children"> & {
  message?: string;
  label?: string;
  showIcon?: boolean;
};

export function WhatsAppCTA({
  message,
  label = "Pedir por WhatsApp",
  variant = "whatsapp",
  size = "lg",
  showIcon = true,
  className,
  ...rest
}: Props) {
  return (
    <Button asChild variant={variant} size={size} className={className} {...rest}>
      <a
        href={whatsappLink(message)}
        target="_blank"
        rel="noopener noreferrer"
      >
        {showIcon ? <MessageCircle aria-hidden /> : null}
        {label}
      </a>
    </Button>
  );
}
