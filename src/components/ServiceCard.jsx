import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

function ServiceCard({ service }) {
  return (
    <motion.div
      className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-orange-500">{service.title}</p>
        </div>
        <ChevronRight className="h-5 w-5 text-orange-500" />
      </div>
      <div className="mt-6 space-y-3">
        {service.items.map((item) => (
          <p key={item} className="text-slate-600 leading-7">
            • {item}
          </p>
        ))}
      </div>
    </motion.div>
  );
}

export default ServiceCard;
