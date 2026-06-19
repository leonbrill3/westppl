import type { ReactNode } from "react";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { Container } from "@/components/layout/Container";
import { DashboardNav } from "@/components/dashboard/DashboardNav";

type DashboardShellProps = {
  eyebrow?: string;
  title: string;
  /** Optional element rendered on the right of the page header (e.g. a CTA). */
  action?: ReactNode;
  children: ReactNode;
};

/**
 * Chrome for all member dashboard pages: fixed header, a persistent side nav,
 * and the shared footer. Keeps every member-app page visually consistent.
 */
export function DashboardShell({
  eyebrow = "Member Dashboard",
  title,
  action,
  children,
}: DashboardShellProps) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <div className="flex-1 pt-24 lg:pt-28 pb-20">
        <Container>
          <div className="grid lg:grid-cols-[220px_1fr] gap-8 lg:gap-12">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <DashboardNav />
            </aside>

            <main>
              <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
                <div>
                  <p className="font-caps text-sm text-pink">{eyebrow}</p>
                  <h1 className="font-headline text-4xl lg:text-5xl mt-2">
                    {title}
                  </h1>
                </div>
                {action}
              </div>
              {children}
            </main>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
