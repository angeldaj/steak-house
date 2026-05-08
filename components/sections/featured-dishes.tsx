import Link from "next/link";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, RevealStagger, RevealItem } from "@/components/shared/reveal";
import { DishCard } from "@/components/menu/dish-card";
import { Button } from "@/components/ui/button";
import { dishes, featuredDishIds } from "@/lib/data/dishes";
import { ArrowRight } from "lucide-react";

export function FeaturedDishes() {
  const featured = featuredDishIds
    .map((id) => dishes.find((d) => d.id === id))
    .filter((d): d is NonNullable<typeof d> => Boolean(d));

  return (
    <section className="relative py-20 sm:py-28 bg-surface bg-grain">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Lo que prepara la brasa"
            title="Platos que despiertan recuerdos."
            description="Una pequeña selección de los favoritos. La carta completa te espera con muchos más."
          />
        </Reveal>

        <RevealStagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((dish) => (
            <RevealItem key={dish.id}>
              <DishCard dish={dish} variant="featured" />
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal delay={0.2} className="mt-12 flex justify-center">
          <Button asChild size="lg" variant="gold">
            <Link href="/menu">
              Ver toda la carta
              <ArrowRight aria-hidden />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
