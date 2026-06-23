import { MessageCircle, Mail, MapPin, Smartphone } from 'lucide-react';

function ContactSection() {
  return (
    <section id="contact" className="bg-slate-100 py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_0.95fr] lg:items-start">
          <div className="rounded-[32px] bg-slate-950 p-10 text-white shadow-soft">
            <p className="font-semibold uppercase tracking-[0.28em] text-orange-300">Contact</p>
            <h2 className="mt-5 text-4xl font-semibold">Start your digital transformation.</h2>
            <p className="mt-5 max-w-xl leading-8 text-slate-300">
              Fill out the form or connect with us directly through email, WhatsApp, or remote consultation.
            </p>
            <div className="mt-10 space-y-4 text-slate-200">
              <div className="flex items-center gap-3 rounded-3xl border border-slate-700/50 bg-slate-900/80 p-5">
                <Mail className="h-5 w-5 text-orange-400" />
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Email</p>
                  <p className="mt-1 text-base font-semibold">info@sktechnologies.in</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-3xl border border-slate-700/50 bg-slate-900/80 p-5">
                <MapPin className="h-5 w-5 text-orange-400" />
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Location</p>
                  <p className="mt-1 text-base font-semibold">Mumbai, Maharashtra, India</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-3xl border border-slate-700/50 bg-slate-900/80 p-5">
                <Smartphone className="h-5 w-5 text-orange-400" />
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Remote Support</p>
                  <p className="mt-1 text-base font-semibold">Worldwide</p>
                </div>
              </div>
            </div>
            <a
              href="https://wa.me/919876543210"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-400"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>

          <form
            className="rounded-[32px] bg-white p-10 shadow-soft border border-slate-200"
            action="mailto:info@sktechnologies.in"
            method="post"
            encType="text/plain"
          >
            <div className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Name</label>
                <input className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm focus:border-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-100" type="text" name="name" placeholder="Your name" required />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
                <input className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm focus:border-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-100" type="email" name="email" placeholder="Email address" required />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Company</label>
                <input className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm focus:border-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-100" type="text" name="company" placeholder="Company name" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Message</label>
                <textarea className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm focus:border-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-100" name="message" rows="5" placeholder="How can we help you?" required />
              </div>
              <button type="submit" className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-400">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
