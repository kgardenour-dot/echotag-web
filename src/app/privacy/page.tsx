export default function PrivacyPage() {
  return (
    <main className="pb-16">
      <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-honey">
        Privacy Policy
      </h1>
      <div className="max-w-2xl space-y-4 text-sm md:text-base text-textMuted">
        <p>
          Echotag is designed to be calm, private, and intentional. This page will describe what data we collect, why we collect it, and how we protect it.
        </p>
        <p>
          For now, if you have questions about privacy, contact us at:{" "}
          <a href="mailto:support@echotag.app" className="text-honey hover:underline">
            support@echotag.app
          </a>
        </p>
      </div>
    </main>
  );
}

