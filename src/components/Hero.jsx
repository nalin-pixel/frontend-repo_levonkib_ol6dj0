import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(56,189,248,0.35),transparent),radial-gradient(800px_400px_at_10%_60%,rgba(99,102,241,0.25),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-10 md:pt-28 md:pb-0">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
              New • Smart invoices + automatic reminders
            </div>

            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              Get paid faster with glassmorphic invoices
            </h1>
            <p className="mt-4 text-slate-200/90 text-lg">
              Create beautiful invoices in seconds, send them automatically, and let smart reminders nudge clients so you never chase payments again.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-gradient-to-br from-blue-500 to-cyan-400 text-white font-medium shadow-lg shadow-cyan-500/20 ring-1 ring-white/20">
                Start free
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-white/10 text-white font-medium ring-1 ring-white/20 hover:bg-white/20">
                See features
              </a>
            </div>

            <div className="mt-6 flex items-center gap-6 text-sm text-slate-300/80">
              <div>
                <div className="text-white font-semibold">2 min</div>
                Setup
              </div>
              <div>
                <div className="text-white font-semibold">Auto</div>
                Reminders
              </div>
              <div>
                <div className="text-white font-semibold">0%</div>
                Late fees optional
              </div>
            </div>
          </div>

          <div className="relative h-[480px] md:h-[640px]">
            <div className="absolute inset-0 rounded-[28px] overflow-hidden ring-1 ring-white/10">
              <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>

            {/* Glow accents */}
            <div className="pointer-events-none absolute -inset-20 bg-gradient-to-tr from-cyan-500/20 via-indigo-500/10 to-transparent blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
