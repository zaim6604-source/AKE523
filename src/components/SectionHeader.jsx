export default function SectionHeader({ tag, title, sub, light }) {
  return (
    <div className="text-center mb-14">
      <span className="section-pill">{tag}</span>
      <h2 className={`text-3xl sm:text-4xl font-extrabold leading-tight ${light ? 'text-white' : 'text-[#0B2545]'}`}>
        {title}
      </h2>
      <div className="gold-divider mt-4" />
      {sub && (
        <p className={`text-sm mt-4 max-w-xl mx-auto leading-relaxed ${light ? 'text-white/60' : 'text-gray-500'}`}>
          {sub}
        </p>
      )}
    </div>
  );
}