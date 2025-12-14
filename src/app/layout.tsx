import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
      <body className="min-h-screen bg-richCharcoal text-warmOffWhite">
        <div className="max-w-5xl mx-auto px-4 py-6 md:py-8">
          <header className="flex items-center justify-between mb-12 md:mb-16">
            <Link href="/" className="flex items-center hover:opacity-80 transition">
              <Image
                src="/echotag_logo_text.png"
                alt="Echotag"
                width={313}
                height={313}
                className="w-[312.5px] h-[312.5px]"
                priority
              />
            </Link>

            <nav className="hidden md:flex items-center gap-4 md:gap-6 text-sm text-warmOffWhite/80">
              <a href="#how" className="hover:text-honeyGold transition">
                How it works
              </a>
              <a href="/privacy" className="hover:text-honeyGold transition">
                Privacy
              </a>
              <a href="/support" className="hover:text-honeyGold transition">
                Support
              </a>
            </nav>
          </header>

          {children}

          <footer className="mt-20 md:mt-24 pt-8 border-t border-stoneGray/30">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-warmOffWhite/70">
              <div>
                © {currentYear} Echotag
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <a href="/privacy" className="hover:text-honeyGold transition">
                  Privacy
                </a>
                <a href="/terms" className="hover:text-honeyGold transition">
                  Terms
                </a>
                <a href="/support" className="hover:text-honeyGold transition">
                  Support
                </a>
                <a href="mailto:support@echotag.app" className="hover:text-honeyGold transition">
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
