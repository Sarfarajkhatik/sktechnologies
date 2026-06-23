import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const stats = [
  { label: 'Zoho CRM', detail: 'Implementation & Customization' },
  { label: 'Creator Apps', detail: 'Custom Business Workflows' },
  { label: 'Analytics', detail: 'Insights & KPIs' },
];

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.18),_transparent_38%),linear-gradient(180deg,rgba(15,23,42,0.92),rgba(15,23,42,0.94))]" />
      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.9fr] lg:items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
          >
            <span className="inline-flex rounded-full bg-orange-500/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">
              Digital Transformation & Business Solutions
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Transform Your Business with Smart Digital Solutions
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Zoho consulting, automation, analytics, web development, and integration services designed to improve operational efficiency and business performance.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-orange-500/20 transition hover:bg-orange-400"
              >
                Get Free Consultation
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/90 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-orange-400 hover:text-orange-400"
              >
                View Portfolio
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-soft-backdrop backdrop-blur-xl"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="grid gap-4">
              {stats.map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                  <p className="text-sm uppercase tracking-[0.28em] text-orange-300">{item.label}</p>
                  <p className="mt-3 text-lg font-semibold text-white">{item.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
