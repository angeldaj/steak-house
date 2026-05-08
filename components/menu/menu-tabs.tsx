"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { DishCard } from "./dish-card";
import {
  categoryLabels,
  categoryOrder,
  dishes,
  type DishCategory,
} from "@/lib/data/dishes";

export function MenuTabs() {
  const [active, setActive] = useState<DishCategory>(categoryOrder[0]);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return dishes.filter((d) => {
      const matchCat = d.category === active;
      if (!q) return matchCat;
      const matchQuery =
        d.name.toLowerCase().includes(q) ||
        d.description.toLowerCase().includes(q);
      return q ? matchQuery : matchCat && matchQuery;
    });
  }, [active, query]);

  return (
    <Tabs
      value={active}
      onValueChange={(v) => setActive(v as DishCategory)}
      className="w-full"
    >
      <div className="sticky top-16 lg:top-20 z-30 -mx-4 sm:-mx-6 lg:mx-0 bg-base/85 backdrop-blur-md py-4 border-y border-gold/10">
        <div className="px-4 sm:px-6 lg:px-0 flex flex-col lg:flex-row lg:items-center gap-4">
          <div className="overflow-x-auto scrollbar-thin -mx-4 px-4 sm:mx-0 sm:px-0">
            <TabsList className="w-max">
              {categoryOrder.map((cat) => (
                <TabsTrigger key={cat} value={cat}>
                  {categoryLabels[cat]}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div className="relative lg:ml-auto lg:max-w-xs w-full">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted"
              aria-hidden
            />
            <Input
              type="search"
              placeholder="Buscar plato..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-9"
              aria-label="Buscar plato"
            />
          </div>
        </div>
      </div>

      {categoryOrder.map((cat) => (
        <TabsContent key={cat} value={cat}>
          <AnimatePresence mode="wait">
            <motion.div
              key={cat + query}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.length === 0 ? (
                <div className="col-span-full py-16 text-center">
                  <p className="text-muted">
                    No encontramos platos con &ldquo;{query}&rdquo; en{" "}
                    {categoryLabels[cat]}.
                  </p>
                </div>
              ) : (
                filtered.map((dish, i) => (
                  <motion.div
                    key={dish.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.04,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <DishCard dish={dish} />
                  </motion.div>
                ))
              )}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
      ))}
    </Tabs>
  );
}
