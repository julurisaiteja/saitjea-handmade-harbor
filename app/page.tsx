"use client";
import Link from "next/link";
import data from "@/lib/data.json";
import { ProductCard } from "@/components/ProductCard";
import { NicheTool } from "@/components/NicheTool";
import { HeroFilm } from "@/components/HeroFilm";
import type { Product } from "@/lib/types";
import { Marquee } from "@/components/Marquee";
import { StatRow } from "@/components/StatRow";
import { FilmStrip } from "@/components/FilmStrip";
import { Newsletter } from "@/components/Newsletter";
import { MotionReveal } from "@/components/MotionReveal";
import { OfferSpot } from "@/components/OfferSpot";
import { ReviewRail } from "@/components/ReviewRail";
import { FaqBlock } from "@/components/FaqBlock";

const brand = data.brand;
const products = data.products as Product[];

export default function HomePage() {
  return (
    <>
      <Marquee />
      <section className="tc-hero-bleed">
        <div className="collage-hero-frame">
          <HeroFilm video={brand.heroVideo} image={brand.heroImage} className="!relative min-h-[92svh]" />
        </div>
        <div className="tc-hero-copy mx-auto max-w-6xl md:px-6">
          <h1 className="font-display text-5xl leading-[1.02] md:text-7xl">{brand.name}</h1>
          <p className="mt-3 max-w-xl text-lg" style={{ color: "var(--muted)" }}>{brand.tagline}</p>
          <p className="font-script mt-2 text-2xl" style={{ color: "var(--accent2)" }}>makers · clay · cloth · wood</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/shop" className="rounded-md px-5 py-3 text-sm font-semibold text-white" style={{ background: "var(--accent)" }}>Browse makers</Link>
            <Link href="/makers" className="rounded-md border px-5 py-3 text-sm font-semibold" style={{ borderColor: "var(--border)" }}>Maker wall</Link>
          </div>
        </div>
      </section>

      <section id="wall" className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-4xl">Pinned maker goods</h2>
            <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>Masonry collage — {products.length} pieces in the harbor catalog.</p>
          </div>
          <Link href="/shop" style={{ color: "var(--accent)" }}>Shop all →</Link>
        </div>
        <div className="mt-8 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {products.slice(0, 9).map((p, i) => (
            <MotionReveal key={p.id} delay={i * 40} className={"maker-tile mb-5 break-inside-avoid " + (i % 2 ? "mt-6" : "")}>
              <ProductCard product={p} />
            </MotionReveal>
          ))}
        </div>
        <div className="mt-12"><NicheTool /></div>
      </section>
      <OfferSpot />
      <StatRow />
      <FilmStrip />
      <ReviewRail />
      <FaqBlock />
      <MotionReveal className="mx-auto max-w-6xl px-4 pb-16 md:px-6"><Newsletter /></MotionReveal>
    </>
  );
}
