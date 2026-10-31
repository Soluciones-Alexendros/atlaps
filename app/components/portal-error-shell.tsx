import Link from "next/link";
import type { ReactNode } from "react";
import { PortalErrorChrome } from "./portal-error-chrome";

type PortalErrorShellProps = {
  children: ReactNode;
};

/** Cáscara de error con next/link (404 / error.tsx). */
export function PortalErrorShell({ children }: PortalErrorShellProps) {
  return (
    <PortalErrorChrome
      brand={
        <Link href="/" className="text-[var(--surface-fg)] no-underline hover:underline">
          Atlaps
        </Link>
      }
      repo={
        <a
          href="https://github.com/Alexendros/Atlaps"
          className="text-[var(--surface-link)] underline"
        >
          github.com/Alexendros/Atlaps
        </a>
      }
    >
      {children}
    </PortalErrorChrome>
  );
}
