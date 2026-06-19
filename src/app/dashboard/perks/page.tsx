"use client";

import Link from "next/link";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { FadeIn } from "@/components/motion/FadeIn";
import { Pill } from "@/components/ui/Pill";
import { membershipPerks, memberServices } from "@/lib/data/membership";
import { partnerDeals } from "@/lib/mock/member";

export default function DashboardPerksPage() {
  return (
    <DashboardShell title="Perks & Services">
      {/* Perks */}
      <h2 className="font-headline text-2xl mb-6">Membership Perks</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {membershipPerks.map((perk, i) => (
          <FadeIn key={perk.id} onView={false} delay={(i % 3) * 0.08} className="h-full">
            <div className="group h-full border border-border p-6 hover:border-pink transition-colors">
              <div className="w-11 h-11 flex items-center justify-center bg-pink/15 text-pink mb-4 group-hover:bg-pink group-hover:text-black transition-colors">
                <perk.icon className="w-5 h-5" />
              </div>
              <p className="font-caps text-[10px] text-pink mb-1">
                {perk.tagline}
              </p>
              <h3 className="font-headline text-xl">{perk.title}</h3>
              <p className="font-body text-sm text-white/60 mt-2">
                {perk.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Services */}
      <h2 className="font-headline text-2xl mt-14 mb-6">Member Services</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {memberServices.map((service, i) => (
          <FadeIn key={service.id} onView={false} delay={i * 0.08} className="h-full">
            <Link
              href={service.href}
              className="group flex h-full flex-col border border-border p-6 hover:border-pink transition-colors"
            >
              <service.icon className="w-6 h-6 text-pink mb-4" />
              <h3 className="font-headline text-lg">{service.title}</h3>
              <p className="font-body text-sm text-white/60 mt-2">
                {service.description}
              </p>
            </Link>
          </FadeIn>
        ))}
      </div>

      {/* Partner deals */}
      <h2 className="font-headline text-2xl mt-14 mb-6">Partner Deals</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {partnerDeals.map((deal, i) => (
          <FadeIn key={deal.id} onView={false} delay={(i % 2) * 0.08} className="h-full">
            <div className="flex h-full items-start justify-between gap-4 border border-border p-6">
              <div>
                <h3 className="font-headline text-xl">{deal.brand}</h3>
                <p className="font-body text-sm text-white/60 mt-1">
                  {deal.offer}
                </p>
              </div>
              <Pill variant="outline">{deal.category}</Pill>
            </div>
          </FadeIn>
        ))}
      </div>
    </DashboardShell>
  );
}
