export default function CTA() {
  return (
    <section id="cta" className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur p-8 sm:p-12">
          <div className="pointer-events-none absolute -inset-20 bg-gradient-to-tr from-cyan-500/20 via-indigo-500/10 to-transparent blur-3xl" />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                Start sending smart invoices today
              </h3>
              <p className="mt-2 text-slate-300/90 max-w-xl">
                Create your first invoice in minutes. No credit card required. Free for individuals.
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <a href="#" className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-gradient-to-br from-blue-500 to-cyan-400 text-white font-medium shadow-lg shadow-cyan-500/20 ring-1 ring-white/20">
                Create an account
              </a>
              <a href="#pricing" className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-white/10 text-white font-medium ring-1 ring-white/20 hover:bg-white/20">
                View pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
