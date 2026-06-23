import { motion } from 'framer-motion';

function PortfolioCard({ item }) {
  return (
    <motion.article
      className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft"
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
    >
      <p className="text-sm uppercase tracking-[0.28em] text-orange-500">Project</p>
      <h3 className="mt-4 text-2xl font-semibold text-slate-950">{item.title}</h3>
      <p className="mt-4 text-slate-600 leading-7">{item.description}</p>
    </motion.article>
  );
}

export default PortfolioCard;
