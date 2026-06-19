import type { ReactNode } from "react";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { cn } from "@/lib/utils";

type PageShellProps = {
  children: ReactNode;
  /** Hide the global footer (e.g. focused auth screens). */
  footer?: boolean;
  className?: string;
};

/**
 * Page chrome: fixed Header, a flex-1 main so the footer always sits at the
 * bottom, and the shared Footer. Wrap every page's content in this.
 */
export function PageShell({
  children,
  footer = true,
  className,
}: PageShellProps) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className={cn("flex-1", className)}>{children}</main>
      {footer && <Footer />}
    </div>
  );
}
