export default function TermsPage() {
  return (
    <main className="pb-16">
      <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-terracotta">
        Terms of Service
      </h1>
      <div className="max-w-2xl space-y-4 text-sm md:text-base text-warmOffWhite/80">
        <p>
          By using Echotag, you agree to use the app responsibly and respectfully. This page will describe acceptable use, limitations, and other terms.
        </p>
        <p>
          For now, if you have questions about terms, contact us at:{" "}
          <a href="mailto:support@echotag.app" className="text-sageGreen hover:text-honeyGold hover:underline transition">
            support@echotag.app
          </a>
        </p>
      </div>
    </main>
  );
}

