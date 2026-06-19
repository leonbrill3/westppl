import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { MemberCard } from "@/components/membership/MemberCard";
import { FlamingoIcon } from "@/components/icons/FlamingoIcon";
import { membershipPerks, memberServices } from "@/lib/data/membership";
import { communities } from "@/lib/mock/communities";

export const metadata = {
  title: "Membership — west | ppl",
  description:
    "An invite-only members community across Miami, LA, and New York — curated events, member perks, concierge, local circles, and a private member app.",
};

export default function MembersPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Invite-Only Membership"
        align="left"
        title="Your People. Your Cities."
        subtitle="West Ppl is a private, invite-only community across Miami, LA, and New York — curated events, member perks, concierge, and local circles, all in one member app."
      />

      {/* CTAs + chapter line */}
      <Section size="sm" className="pt-0">
        <FadeIn onView={false} className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/apply"
              className="btn-primary inline-flex items-center gap-2"
            >
              Apply for Membership
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/login" className="btn-outline">
              Member Sign In
            </Link>
          </div>
          <p className="font-caps text-sm text-pink">
            Miami &bull; Los Angeles &bull; New York
          </p>
        </FadeIn>
      </Section>

      {/* The perks — lead with the community value */}
      <Section bg="dark" border>
        <SectionHeading
          eyebrow="Membership"
          title="What's Included"
          description="Deep connections, unforgettable nights, and a community that has your back in every city."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {membershipPerks.map((perk, i) => (
            <FadeIn key={perk.id} delay={(i % 3) * 0.1} className="h-full">
              <div className="group h-full border border-border p-8 hover:border-pink transition-colors">
                <div className="w-12 h-12 flex items-center justify-center bg-pink/15 text-pink mb-6 group-hover:bg-pink group-hover:text-black transition-colors">
                  <perk.icon className="w-6 h-6" />
                </div>
                <p className="font-caps text-[10px] text-pink mb-2">
                  {perk.tagline}
                </p>
                <h3 className="font-headline text-2xl">{perk.title}</h3>
                <p className="font-body text-sm text-white/60 mt-3">
                  {perk.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Member services */}
      <Section border>
        <SectionHeading
          eyebrow="Member Services"
          title="Everything at Your Fingertips"
          description="From concierge requests to your event calendar — the tools that make membership effortless."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {memberServices.map((service, i) => (
            <FadeIn key={service.id} delay={i * 0.1} className="h-full">
              <Link
                href={service.href}
                className="group flex h-full flex-col border border-border p-6 hover:border-pink transition-colors"
              >
                <service.icon className="w-7 h-7 text-pink mb-5" />
                <h3 className="font-headline text-xl">{service.title}</h3>
                <p className="font-body text-sm text-white/60 mt-2">
                  {service.description}
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Chapters */}
      <Section bg="dark" border>
        <SectionHeading
          eyebrow="The Chapters"
          title="Three Cities, One Community"
          description="Your membership travels with you. Tap into the local circle wherever you land."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {communities.map((chapter, i) => (
            <FadeIn key={chapter.id} delay={i * 0.1} className="h-full">
              <Link
                href={`/community/${chapter.id}`}
                className="group flex h-full flex-col justify-between border border-border p-8 hover:border-pink transition-colors"
              >
                <div>
                  <h3 className="font-headline text-3xl">{chapter.name}</h3>
                  <p className="font-caps text-xs text-white/50 mt-1">
                    {chapter.location}
                  </p>
                  <p className="font-body text-sm text-white/60 mt-4">
                    {chapter.tagline}
                  </p>
                </div>
                <p className="font-caps text-[10px] text-pink mt-8">
                  {chapter.memberCount}+ Members
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Member access pass — small, digital-first, de-emphasized */}
      <Section border>
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center">
          <FadeIn>
            <p className="font-caps text-sm text-pink mb-2">
              Member Access Pass
            </p>
            <h2 className="font-headline text-3xl lg:text-4xl">
              One Pass, Every Door
            </h2>
            <p className="font-body text-white/60 mt-6 max-w-md">
              Your West Ppl pass unlocks events, perks, concierge access, and
              chapter benefits across Miami, LA, and New York. It lives in your
              member app — with a physical card if you want one.
            </p>
          </FadeIn>
          <FadeIn delay={0.15} className="max-w-xs mx-auto w-full lg:mx-0 lg:ml-auto">
            <MemberCard />
          </FadeIn>
        </div>
      </Section>

      {/* CTA */}
      <Section bg="dark" border width="narrow" className="text-center">
        <FadeIn className="text-center">
          <FlamingoIcon className="w-8 h-10 text-pink mx-auto mb-6" />
          <h2 className="font-headline text-4xl lg:text-5xl">Ready to Join?</h2>
          <p className="font-body text-xl text-white/60 mt-4 max-w-2xl mx-auto">
            Our membership committee reviews every application personally. We&apos;re
            looking for people who&apos;ll add to the community as much as they get
            from it.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Link
              href="/apply"
              className="btn-primary inline-flex items-center gap-2"
            >
              Start Your Application
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/login" className="btn-outline">
              Member Sign In
            </Link>
          </div>
        </FadeIn>
      </Section>
    </PageShell>
  );
}
