import type { ReactNode } from "react";
import { Sidebar } from "./Sidebar";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-ink-50">
      <Sidebar />
      <main className="flex-1 overflow-y-auto px-8 py-7">
        <div className="mx-auto max-w-3xl">{children}</div>
      </main>
    </div>
  );
}
