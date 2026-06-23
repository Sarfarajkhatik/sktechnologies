import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

function FeatureList({ features }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {features.map((feature) => (
        <motion.div
          key={feature}
          className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-100"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <CheckCircle2 className="mt-1 h-6 w-6 text-orange-400" />
          <p className="text-base leading-7">{feature}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default FeatureList;
