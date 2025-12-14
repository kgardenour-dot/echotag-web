import Link from 'next/link';
import BackButton from '../components/BackButton';

export default function SupportPage() {
  return (
    <main className="pb-16">
      <div className="flex items-center gap-4 mb-6">
        <BackButton />
        <Link
          href="/"
          className="text-sm text-warmOffWhite/80 hover:text-honeyGold transition underline underline-offset-4"
        >
          Home
        </Link>
      </div>
      <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-terracotta">
        Support
      </h1>
      <div className="max-w-2xl space-y-6 text-sm md:text-base text-warmOffWhite/80">
        <p>
          If you need help with Echotag, email:{" "}
          <a href="mailto:support@echotag.app" className="text-sageGreen hover:text-honeyGold hover:underline transition">
            support@echotag.app
          </a>
        </p>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4 text-warmOffWhite">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-stoneGray border border-stoneGray/50 rounded-2xl p-4">
              <h3 className="text-sm font-semibold text-richCharcoal mb-2">
                I cannot sign in
              </h3>
              <p className="text-xs text-richCharcoal/80">
                Please email us at{" "}
                <a href="mailto:support@echotag.app" className="text-richCharcoal hover:text-honeyGold hover:underline transition font-medium">
                  support@echotag.app
                </a>{" "}
                and we'll help you get back into your account.
              </p>
            </div>

            <div className="bg-stoneGray border border-stoneGray/50 rounded-2xl p-4">
              <h3 className="text-sm font-semibold text-richCharcoal mb-2">
                I cannot hear audio playback
              </h3>
              <p className="text-xs text-richCharcoal/80">
                Check your device volume settings and make sure you've granted audio permissions to the app. If the issue persists, contact{" "}
                <a href="mailto:support@echotag.app" className="text-richCharcoal hover:text-honeyGold hover:underline transition font-medium">
                  support@echotag.app
                </a>.
              </p>
            </div>

            <div className="bg-stoneGray border border-stoneGray/50 rounded-2xl p-4">
              <h3 className="text-sm font-semibold text-richCharcoal mb-2">
                I have feedback or a feature idea
              </h3>
              <p className="text-xs text-richCharcoal/80">
                We'd love to hear from you! Send your thoughts to{" "}
                <a href="mailto:support@echotag.app" className="text-richCharcoal hover:text-honeyGold hover:underline transition font-medium">
                  support@echotag.app
                </a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

