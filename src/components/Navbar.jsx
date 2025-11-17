import { Menu, CreditCard, Bell } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 bg-slate-900/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-xl ring-1 ring-white/20">
              <CreditCard className="h-5 w-5 text-white" />
            </div>
            <span className="text-white font-semibold tracking-tight">BillSpark</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-slate-300 hover:text-white transition">Features</a>
            <a href="#how" className="text-slate-300 hover:text-white transition">How it works</a>
            <a href="#pricing" className="text-slate-300 hover:text-white transition">Pricing</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#cta" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/10 transition">
              <Bell className="h-4 w-4" />
              Get reminders
            </a>
            <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-white/10 text-white">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
