export default function SupportPage() {
  return (
    <main className="pb-16">
      <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-honey">
        Support
      </h1>
      <div className="max-w-2xl space-y-6 text-sm md:text-base text-textMuted">
        <p>
          If you need help with Echotag, email:{" "}
          <a href="mailto:support@echotag.app" className="text-honey hover:underline">
            support@echotag.app
          </a>
        </p>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4 text-textMain">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-slateSoft/70 border border-white/10 rounded-2xl p-4">
              <h3 className="text-sm font-semibold text-textMain mb-2">
                I cannot sign in
              </h3>
              <p className="text-xs text-textMuted">
                Please email us at{" "}
                <a href="mailto:support@echotag.app" className="text-honey hover:underline">
                  support@echotag.app
                </a>{" "}
                and we'll help you get back into your account.
              </p>
            </div>

            <div className="bg-slateSoft/70 border border-white/10 rounded-2xl p-4">
              <h3 className="text-sm font-semibold text-textMain mb-2">
                I cannot hear audio playback
              </h3>
              <p className="text-xs text-textMuted">
                Check your device volume settings and make sure you've granted audio permissions to the app. If the issue persists, contact{" "}
                <a href="mailto:support@echotag.app" className="text-honey hover:underline">
                  support@echotag.app
                </a>.
              </p>
            </div>

            <div className="bg-slateSoft/70 border border-white/10 rounded-2xl p-4">
              <h3 className="text-sm font-semibold text-textMain mb-2">
                I have feedback or a feature idea
              </h3>
              <p className="text-xs text-textMuted">
                We'd love to hear from you! Send your thoughts to{" "}
                <a href="mailto:support@echotag.app" className="text-honey hover:underline">
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

