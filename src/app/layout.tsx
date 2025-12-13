import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Echotag | Connection without pressure",
  description: "Capture voice or text echoes for yourself or the people closest to you. No feeds. No replies. No pressure.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-night to-nightSoft text-textMain">
        <div className="max-w-5xl mx-auto px-4 py-6 md:py-8">
          <header className="flex items-center justify-between mb-12 md:mb-16">
            <div className="flex items-center gap-3">
              <div className="text-lg font-semibold tracking-tight text-textMain">
                Echotag
              </div>
            </div>

            <nav className="flex items-center gap-4 md:gap-6 text-sm text-textMuted">
              <a href="#how-it-works" className="hover:text-honey transition">
                How it works
              </a>
              <a href="/privacy" className="hover:text-honey transition">
                Privacy
              </a>
              <a href="/support" className="hover:text-honey transition">
                Support
              </a>
            </nav>
          </header>

          {children}

          <footer className="mt-20 md:mt-24 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-textMuted/80">
              <div>
                © {currentYear} Echotag
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <a href="/privacy" className="hover:text-honey transition">
                  Privacy
                </a>
                <a href="/terms" className="hover:text-honey transition">
                  Terms
                </a>
                <a href="/support" className="hover:text-honey transition">
                  Support
                </a>
                <a href="mailto:support@echotag.app" className="hover:text-honey transition">
                  support@echotag.app
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
