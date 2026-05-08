import { Hero } from "@/components/sections/hero";
import { Welcome } from "@/components/sections/welcome";
import { Services } from "@/components/sections/services";
import { FeaturedDishes } from "@/components/sections/featured-dishes";
import { DeliveryBanner } from "@/components/sections/delivery-banner";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Welcome />
      <Services />
      <FeaturedDishes />
      <DeliveryBanner />
      <Contact />
    </>
  );
}
