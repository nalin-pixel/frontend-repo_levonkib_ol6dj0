import { ShieldCheck, Clock, Mail, Sparkles, CalendarDays, Receipt } from 'lucide-react'

const features = [
  {
    icon: Receipt,
    title: '1-click invoicing',
    desc: 'Create branded, glassmorphic invoices that look stunning on web and PDF.'
  },
  {
    icon: Clock,
    title: 'Smart follow-ups',
    desc: 'Automated, friendly reminders that escalate tone as due dates approach.'
  },
  {
    icon: CalendarDays,
    title: 'Recurring schedules',
    desc: 'Set-and-forget billing for retainers and subscriptions.'
  },
  {
    icon: Mail,
    title: 'Status tracking',
    desc: 'Know when an invoice is viewed, bounced, or paid in real time.'
  },
  {
    icon: ShieldCheck,
    title: 'Secure payments',
    desc: 'Stripe-ready checkout with optional late fees and discounts.'
  },
  {
    icon: Sparkles,
    title: 'AI message drafts',
    desc: 'Auto-generate polite nudges and payment confirmations.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Do less. Get paid more.</h2>
          <p className="mt-3 text-slate-300/90">Everything you need to create, send, and collect invoices — with reminders that actually work.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 transition">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 ring-1 ring-white/20 flex items-center justify-center shadow-lg">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-300/90">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
