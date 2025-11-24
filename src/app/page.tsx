function Step(props: { label: string; title: string; body: string }) {
  return (
    <div className="bg-slateSoft/70 border border-white/10 rounded-2xl p-4">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-6 h-6 rounded-full bg-honey/20 flex items-center justify-center text-[11px] text-honey font-semibold">
          {props.label}
        </div>
        <div className="text-sm text-textMain">{props.title}</div>
      </div>
      <p className="text-xs text-textMuted">{props.body}</p>
    </div>
  );
}

function MockPersonRow(props: { name: string; relationship: string; color: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-nightSoft/80 border border-white/8 px-3 py-2">
      <div className="flex items-center gap-2">
        <div
          className="w-7 h-7 rounded-full border border-white/40 flex items-center justify-center text-[11px] font-semibold"
          style={{ backgroundColor: props.color }}
        >
          {props.name[0].toUpperCase()}
        </div>
        <div>
          <div className="text-xs text-textMain">{props.name}</div>
          <div className="text-[10px] text-textMuted/80">{props.relationship}</div>
        </div>
      </div>
      <div className="text-[10px] text-textMuted/70">Send echo</div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="pb-16">
      <div className="text-3xl font-bold text-honey mb-4">TAILWIND WORKING</div>
      <section className="grid gap-10 md:grid-cols-[1.3fr,1fr] items-center mb-16">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
            Tiny echoes that keep
            <span className="block text-honey">your people close.</span>
          </h1>
          <p className="text-sm md:text-base text-textMuted mb-6 max-w-xl">
            Echotag makes it easy to send short text or voice prompts to the
            people you care about, and collect their replies in one warm,
            story-like thread. No pressure, no feeds, just real connection.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-3">
            <button className="rounded-full bg-honey text-black text-sm font-medium px-5 py-2 shadow-soft-card">
              Get notified when we launch
            </button>
            <button className="rounded-full border border-white/20 px-4 py-2 text-xs text-textMuted hover:border-honey hover:text-honey transition">
              View the app concept
            </button>
          </div>

          <p className="text-[11px] text-textMuted/70">
            Currently in private beta on iOS and Android.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 bg-honey/10 blur-3xl rounded-full opacity-60" />
          <div className="relative mx-auto w-[260px] h-[520px] rounded-[32px] bg-slateSoft border border-white/8 shadow-soft-card overflow-hidden flex flex-col">
            <div className="h-8 flex items-center justify-center text-[11px] text-textMuted/90 border-b border-white/5">
              Echotag · Home
            </div>
            <div className="flex-1 p-4 flex flex-col gap-3">
              <div className="flex flex-col items-center gap-2 mb-2">
                <div className="w-20 h-20 rounded-3xl bg-honey/10 border border-honey/40 flex items-center justify-center text-2xl">
                  ✨
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-textMuted/80">
                  Today's prompt
                </div>
                <div className="text-sm text-center text-textMain">
                  "What's one tiny moment from this week you don't want to
                  forget?"
                </div>
              </div>

              <div className="mt-2 space-y-2">
                <div className="text-[11px] text-textMuted/80">
                  Your circle
                </div>
                <div className="flex flex-col gap-1.5">
                  <MockPersonRow name="Beth" relationship="Partner" color="#f5c16e" />
                  <MockPersonRow name="Chase" relationship="Kiddo" color="#6dd3ff" />
                  <MockPersonRow name="Mom" relationship="Family" color="#ff9ad9" />
                </div>
              </div>

              <div className="mt-auto pt-2 border-t border-white/5 text-[11px] text-textMuted/80">
                Tap a name to send an echo. They can reply on the app or in their browser.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mb-14">
        <h2 className="text-xl font-semibold mb-3">How Echotag works</h2>
        <div className="grid gap-5 md:grid-cols-3 text-sm text-textMuted">
          <Step
            label="1"
            title="Pick a prompt"
            body="Choose from curated prompts or write your own. Sweet, curious, reflective, silly – whatever fits your people."
          />
          <Step
            label="2"
            title="Send a tiny echo"
            body="Record a short voice note or send a few lines of text. Echotag keeps it lightweight and low pressure."
          />
          <Step
            label="3"
            title="Collect their replies"
            body="Replies show up in a single, cozy thread for each person so you can revisit your shared moments anytime."
          />
        </div>
      </section>

      <section id="for-who" className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Made for the people you miss</h2>
        <p className="text-sm text-textMuted max-w-xl mb-4">
          Echotag is built for long-distance partners, busy families, adult kids,
          grandparents, and close friends who want to feel more present in each
          other's lives without doomscrolling another feed.
        </p>
      </section>

      <footer className="text-[11px] text-textMuted/70">
        Echotag is created by Bandit Innovations. Coming soon to iOS and Android.
      </footer>
    </main>
  );
}
