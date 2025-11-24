import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Echotag",
  description: "Tiny messages. Big connection.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-night to-nightSoft text-textMain">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <header className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-slateSoft flex items-center justify-center border border-white/10">
                <span className="text-lg font-semibold tracking-tight">e</span>
              </div>
              <div>
                <div className="text-sm font-semibold tracking-wide uppercase text-textMuted">
                  Echotag
                </div>
                <div className="text-xs text-textMuted/80">
                  Tiny messages. Big connection.
                </div>
              </div>
            </div>

            <nav className="flex items-center gap-4 text-xs text-textMuted">
              <a href="#how-it-works" className="hover:text-textMain transition">
                How it works
              </a>
              <a href="#for-who" className="hover:text-textMain transition">
                Who it’s for
              </a>
              <button className="rounded-full border border-white/15 px-3 py-1 text-[11px] hover:border-honey hover:text-honey transition">
                Get the app (coming soon)
              </button>
            </nav>
          </header>

          {children}
        </div>
      </body>
    </html>
  );
}
