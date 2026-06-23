import { motion } from 'framer-motion';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import SectionHeader from './components/SectionHeader.jsx';
import ServiceCard from './components/ServiceCard.jsx';
import PortfolioCard from './components/PortfolioCard.jsx';
import FeatureList from './components/FeatureList.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';
import { services, portfolioItems, whyItems, founder } from './data/content.js';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function App() {
  return (
    <div className="bg-slate-50 text-slate-900 overflow-x-hidden">
      <Header />
      <main>
        <Hero />

        <section id="about" className="bg-slate-50 py-24">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <SectionHeader
              title="About SK Technologies"
              subtitle="A Digital Transformation, Zoho Consulting, and Business Automation partner for growth-focused organizations."
            />

            <motion.div
              className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              variants={fadeUp}
            >
              <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
                <p className="text-lg leading-8 text-slate-700">
                  SK Technologies delivers strategic digital transformation and Zoho consulting services that streamline business operations, improve customer engagement, and drive measurable efficiency.
                  We create tailored automation, CRM, web, analytics, and integration solutions that support commercial teams, operations, and management decision-making.
                </p>
              </div>
              <div className="grid gap-5">
                <div className="rounded-[32px] bg-slate-950/95 p-8 text-white shadow-soft">
                  <h3 className="text-xl font-semibold">Digital Transformation</h3>
                  <p className="mt-4 text-slate-200 leading-7">
                    We modernize processes with Zoho CRM, Creator, Forms and Analytics so your business can scale with consistent data, automation and customer visibility.
                  </p>
                </div>
                <div className="rounded-[32px] bg-white p-8 shadow-soft border border-slate-200">
                  <h3 className="text-xl font-semibold text-slate-900">Business Automation</h3>
                  <p className="mt-4 text-slate-600 leading-7">
                    Our focus is on removing manual touchpoints and integrating systems across sales, service, finance and marketing to deliver measurable efficiency gains.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="services" className="py-24 bg-gradient-to-b from-slate-50 via-slate-100 to-slate-50">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <SectionHeader
              title="Our Services"
              subtitle="Professional Zoho, automation, analytics, development, and business process solutions for enterprise and growing companies."
            />

            <div className="grid gap-6 xl:grid-cols-2">
              {services.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-24 bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <SectionHeader
              title="Portfolio Highlights"
              subtitle="Selected engagements that showcase our ability to deliver scalable automation and integration solutions."
            />

            <div className="grid gap-6 lg:grid-cols-3">
              {portfolioItems.map((item) => (
                <PortfolioCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="py-24 bg-slate-950 text-white">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <SectionHeader
                  title="Why Choose Us"
                  subtitle="Certified Zoho expertise and business-first solutions that scale with your organization."
                  inverted
                />
              </div>
              <FeatureList features={whyItems} />
            </div>
          </div>
        </section>

        <section id="founder" className="py-24 bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_0.95fr] lg:items-center">
              <div className="rounded-[32px] bg-white p-10 shadow-soft border border-slate-200">
                <p className="text-sm uppercase tracking-[0.24em] text-orange-500">Founder & Lead Consultant</p>
                <h2 className="mt-4 text-4xl font-semibold text-slate-950">Sarfaraj Khatik</h2>
                <p className="mt-4 max-w-xl text-lg leading-8 text-slate-700">
                  Zoho Developer & Business Automation Consultant with experience delivering CRM implementations, custom Zoho Creator apps, analytics dashboards and automation workflows.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-slate-200 bg-slate-100 p-6">
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Location</p>
                    <p className="mt-3 text-lg font-semibold text-slate-900">Mumbai, India</p>
                  </div>
                  <div className="rounded-3xl border border-slate-200 bg-slate-100 p-6">
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Support</p>
                    <p className="mt-3 text-lg font-semibold text-slate-900">Remote Worldwide</p>
                  </div>
                </div>
              </div>
              <div className="rounded-[32px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-10 shadow-soft text-white">
                <p className="text-sm uppercase tracking-[0.24em] text-orange-400">Professional Experience</p>
                <h3 className="mt-4 text-3xl font-semibold">Creating results through automation and analytics.</h3>
                <p className="mt-6 text-slate-200 leading-8">
                  Sarfaraj specializes in transforming business processes with Zoho CRM, Zoho Creator, API integrations, workflow automation and performance reporting.
                </p>
                <div className="mt-8 space-y-4 text-slate-200">
                  <p>• Zoho certified implementations</p>
                  <p>• Custom low-code application development</p>
                  <p>• Data-driven growth strategies</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
