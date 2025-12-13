export default function HomePage() {
  return (
    <main className="pb-16">
      {/* Section A: Hero */}
      <section className="mb-20 md:mb-24 bg-deepSlateBlue rounded-2xl p-8 md:p-12 text-warmOffWhite">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 max-w-3xl">
          A quiet place for moments you don't want to forget
        </h1>
        <p className="text-base md:text-lg text-warmOffWhite/90 mb-8 max-w-2xl leading-relaxed">
          Record voice or text echoes for yourself or the people closest to you. No feeds. No replies. No pressure.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#get"
            className="rounded-full bg-terracotta text-white text-sm font-medium px-6 py-3 shadow-soft-card hover:bg-terracotta/90 transition"
          >
            Get Echotag
          </a>
          <a
            href="#how-it-works"
            className="text-sm text-warmOffWhite/80 hover:text-honeyGold transition underline underline-offset-4"
          >
            How it works
          </a>
        </div>
      </section>

      {/* Section B: What Echotag is */}
      <section id="how-it-works" className="mb-20 md:mb-24">
        <p className="text-base md:text-lg text-warmOffWhite/80 max-w-2xl leading-relaxed mb-4">
          Echotag treats communication as presence, not conversation. An echo is something you send or save when it matters, not something that demands a response.
        </p>
        <p className="text-base md:text-lg text-warmOffWhite/80 max-w-2xl leading-relaxed">
          Echoes are saved and revisitable, so the moment stays with you.
        </p>
      </section>

      {/* Section C: How people use it */}
      <section className="mb-20 md:mb-24">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-stoneGray border border-stoneGray/50 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-richCharcoal mb-3">Journal mode</h3>
            <p className="text-sm text-richCharcoal/70 leading-relaxed">
              Private reflections you can speak or write in seconds.
            </p>
          </div>
          <div className="bg-stoneGray border border-stoneGray/50 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-richCharcoal mb-3">Couples</h3>
            <p className="text-sm text-richCharcoal/70 leading-relaxed">
              Shared moments without the gravity of a conversation thread.
            </p>
          </div>
          <div className="bg-stoneGray border border-stoneGray/50 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-richCharcoal mb-3">Family and Close Friends</h3>
            <p className="text-sm text-richCharcoal/70 leading-relaxed">
              A quieter space than group chats for memories and updates.
            </p>
          </div>
        </div>
      </section>

      {/* Section D: What it feels like */}
      <section className="mb-20 md:mb-24">
        <p className="text-base md:text-lg text-warmOffWhite/80 max-w-2xl leading-relaxed mb-3">
          Calm. Human. Unpressured. Reflective. Memory oriented.
        </p>
        <p className="text-sm text-warmOffWhite/70 max-w-2xl leading-relaxed">
          Designed to help you keep what matters, not keep up.
        </p>
      </section>

      {/* Section E: Privacy and emotional safety */}
      <section className="mb-20 md:mb-24">
        <p className="text-base md:text-lg text-warmOffWhite/80 max-w-2xl leading-relaxed">
          Echotag is not public. There is no feed to perform in. You choose what to save and who to share with.{" "}
          <a href="/privacy" className="text-sageGreen hover:text-honeyGold hover:underline underline-offset-4 transition">
            Privacy
          </a>
          {" "}·{" "}
          <a href="/terms" className="text-sageGreen hover:text-honeyGold hover:underline underline-offset-4 transition">
            Terms
          </a>
        </p>
      </section>

      {/* Section F: Closing CTA */}
      <section id="get" className="mb-20 md:mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 max-w-2xl text-warmOffWhite">
          Make space for the moments that matter.
        </h2>
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <a
            href="#get"
            className="rounded-full bg-terracotta text-white text-sm font-medium px-6 py-3 shadow-soft-card hover:bg-terracotta/90 transition"
          >
            Get Echotag
          </a>
          <a
            href="/support"
            className="rounded-full border border-stoneGray px-6 py-3 text-sm text-warmOffWhite/80 hover:border-honeyGold hover:text-honeyGold transition"
          >
            Support
          </a>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <button className="rounded-lg bg-stoneGray border border-stoneGray/50 px-6 py-3 text-sm text-richCharcoal hover:border-honeyGold hover:text-honeyGold transition">
            iOS (coming soon)
          </button>
          <button className="rounded-lg bg-stoneGray border border-stoneGray/50 px-6 py-3 text-sm text-richCharcoal hover:border-honeyGold hover:text-honeyGold transition">
            Android (coming soon)
          </button>
        </div>
      </section>
    </main>
  );
}
