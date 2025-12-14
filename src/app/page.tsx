export default function HomePage() {
  return (
    <main className="pb-16">
      {/* Section 1: Hero */}
      <section className="mb-16 md:mb-24">
        <div className="bg-deepSlateBlue/90 border border-deepSlateBlue/60 rounded-2xl p-8 md:p-12 lg:p-16 text-warmOffWhite text-center md:text-left relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-honeyGold/40 to-transparent"></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 max-w-3xl mx-auto md:mx-0">
            For the things you want to say,
            without making it a whole thing.
          </h1>
          <p className="text-base md:text-lg text-warmOffWhite/90 mb-3 max-w-2xl leading-relaxed mx-auto md:mx-0">
            Send voice or text echoes to your partner, family, or friends. No scrolling. No pressure. Just moments.
          </p>
          <p className="text-sm md:text-base text-warmOffWhite/70 mb-8 max-w-2xl mx-auto md:mx-0">
            Made for couples, families, and close friends.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <a
              href="#get"
              className="rounded-full bg-honeyGold text-richCharcoal text-sm font-medium px-6 py-3 shadow-soft-card hover:bg-honeyGold/90 transition focus:outline-none focus:ring-2 focus:ring-honeyGold/50"
            >
              Get Echotag
            </a>
            <a
              href="#how"
              className="text-sm text-warmOffWhite/80 hover:text-honeyGold transition underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-honeyGold/30 rounded"
            >
              How it works
            </a>
          </div>
        </div>
      </section>

      {/* Section 2: How it works (Explainer) */}
      <section id="how" className="mb-16 md:mb-24">
        <div className="bg-stoneGray/20 border border-stoneGray/30 rounded-2xl p-8 md:p-10 lg:p-12 text-center md:text-left relative overflow-hidden md:pl-12">
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-honeyGold/60 via-honeyGold/40 to-terracotta/60 rounded-l-2xl"></div>
          <p className="text-xs md:text-sm uppercase tracking-wider text-honeyGold/80 mb-6">
            How it works
          </p>
          <p className="text-base md:text-lg text-warmOffWhite/90 max-w-[65ch] leading-relaxed mb-8 mx-auto md:mx-0">
            Sometimes you want to flirt. Sometimes you want to ask something real. Sometimes you just want to say "this made me think of you."
            Echotag gives you a place for all of that, without the noise.
          </p>
          <ul className="space-y-4 text-base md:text-lg text-warmOffWhite/80 leading-relaxed max-w-[65ch] mx-auto md:mx-0">
            <li>• Fun, flirty, or thoughtful notes to your partner</li>
            <li>• Check-in questions for family that don't feel like homework</li>
            <li>• Small moments with friends that don't belong in a group chat</li>
          </ul>
        </div>
      </section>

      {/* Section 3: FAQ */}
      <section id="faq" className="mb-16 md:mb-24">
        <div className="relative mb-8 md:mb-10">
          <div className="absolute -top-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-honeyGold/30 to-transparent"></div>
          <h2 className="text-2xl md:text-3xl font-semibold text-warmOffWhite text-center md:text-left">
            A few quick questions
          </h2>
        </div>
        <div className="space-y-4 max-w-[65ch] mx-auto md:mx-0">
          <div className="bg-stoneGray/10 border border-stoneGray/20 hover:border-honeyGold/30 rounded-xl p-6 md:p-8 transition-colors">
            <h3 className="text-base md:text-lg font-semibold text-warmOffWhite mb-3">
              <span className="text-honeyGold/80">Q:</span> What is an Echo?
            </h3>
            <p className="text-base md:text-lg text-warmOffWhite/80 leading-relaxed">
              A: An Echo is a voice or text note you send or save when something's on your mind. It can be playful, thoughtful, flirty, or meaningful. You send it when it feels right.
            </p>
          </div>
          <div className="bg-stoneGray/10 border border-stoneGray/20 hover:border-honeyGold/30 rounded-xl p-6 md:p-8 transition-colors">
            <h3 className="text-base md:text-lg font-semibold text-warmOffWhite mb-3">
              <span className="text-honeyGold/80">Q:</span> Do people reply to Echoes?
            </h3>
            <p className="text-base md:text-lg text-warmOffWhite/80 leading-relaxed">
              A: They can. Some Echoes spark back and forth. Others are just nice to receive and come back to later. There's no pressure either way.
            </p>
          </div>
          <div className="bg-stoneGray/10 border border-stoneGray/20 hover:border-honeyGold/30 rounded-xl p-6 md:p-8 transition-colors">
            <h3 className="text-base md:text-lg font-semibold text-warmOffWhite mb-3">
              <span className="text-honeyGold/80">Q:</span> How is this different from texting or DMs?
            </h3>
            <p className="text-base md:text-lg text-warmOffWhite/80 leading-relaxed">
              A: Echoes aren't about keeping a conversation going. They're about sharing something without worrying about timing, tone, or response speed.
            </p>
          </div>
          <div className="bg-stoneGray/10 border border-stoneGray/20 hover:border-honeyGold/30 rounded-xl p-6 md:p-8 transition-colors">
            <h3 className="text-base md:text-lg font-semibold text-warmOffWhite mb-3">
              <span className="text-honeyGold/80">Q:</span> Is Echotag public or social?
            </h3>
            <p className="text-base md:text-lg text-warmOffWhite/80 leading-relaxed">
              A: No. There's no public feed. Echoes are private and shared only with the people you choose.
            </p>
          </div>
          <div className="bg-stoneGray/10 border border-stoneGray/20 hover:border-honeyGold/30 rounded-xl p-6 md:p-8 transition-colors">
            <h3 className="text-base md:text-lg font-semibold text-warmOffWhite mb-3">
              <span className="text-honeyGold/80">Q:</span> Can I use Echotag just for myself?
            </h3>
            <p className="text-base md:text-lg text-warmOffWhite/80 leading-relaxed">
              A: Absolutely. Many people use it to save voice or text moments they want to remember.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Closing CTA */}
      <section id="get" className="mb-16 md:mb-24">
        <div className="bg-deepSlateBlue/40 border border-deepSlateBlue/50 rounded-2xl p-10 md:p-12 lg:p-16 text-center md:text-left relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-terracotta/40 to-transparent"></div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 max-w-2xl text-warmOffWhite leading-tight mx-auto md:mx-0">
            Make space for the moments that matter.
          </h2>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8">
            <a
              href="#get"
              className="rounded-full bg-honeyGold text-richCharcoal text-sm font-medium px-6 py-3 shadow-soft-card hover:bg-honeyGold/90 transition focus:outline-none focus:ring-2 focus:ring-honeyGold/50"
            >
              Get Echotag
            </a>
            <a
              href="/support"
              className="rounded-full border border-stoneGray/50 px-6 py-3 text-sm text-warmOffWhite/80 hover:border-terracotta/60 hover:text-terracotta transition focus:outline-none focus:ring-2 focus:ring-terracotta/30"
            >
              Support
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <button className="rounded-lg bg-stoneGray/30 border border-stoneGray/40 px-6 py-3 text-sm text-warmOffWhite/90 hover:border-deepSlateBlue/60 hover:text-deepSlateBlue/80 transition focus:outline-none focus:ring-2 focus:ring-deepSlateBlue/30">
              iOS (coming soon)
            </button>
            <button className="rounded-lg bg-stoneGray/30 border border-stoneGray/40 px-6 py-3 text-sm text-warmOffWhite/90 hover:border-deepSlateBlue/60 hover:text-deepSlateBlue/80 transition focus:outline-none focus:ring-2 focus:ring-deepSlateBlue/30">
              Android (coming soon)
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
