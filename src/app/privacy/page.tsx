export default function PrivacyPage() {
  return (
    <main className="pb-16">
      <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-terracotta">
        Privacy Policy
      </h1>
      <div className="max-w-2xl space-y-4 text-sm md:text-base text-warmOffWhite/80">
        <p>
          Echotag is designed to be calm, private, and intentional. This page will describe what data we collect, why we collect it, and how we protect it.
        </p>
        <p>
          For now, if you have questions about privacy, contact us at:{" "}
          <a href="mailto:support@echotag.app" className="text-sageGreen hover:text-honeyGold hover:underline transition">
            support@echotag.app
          </a>
        </p>
      </div>
    </main>
  );
}

