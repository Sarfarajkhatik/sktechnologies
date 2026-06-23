function SectionHeader({ title, subtitle, inverted = false }) {
  return (
    <div className="text-center">
      <p className={`text-sm font-semibold uppercase tracking-[0.28em] ${inverted ? 'text-orange-300' : 'text-orange-500'}`}>
        {title}
      </p>
      <h2 className={`mt-4 text-3xl font-semibold ${inverted ? 'text-white' : 'text-slate-950'} sm:text-4xl`}>
        {title}
      </h2>
      {subtitle && <p className={`mt-4 max-w-2xl mx-auto text-base leading-8 ${inverted ? 'text-slate-300' : 'text-slate-600'}`}>{subtitle}</p>}
    </div>
  );
}

export default SectionHeader;
