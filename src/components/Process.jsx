const steps = [
  { num: "01", title: "Register & Consult", desc: "Contact us via WhatsApp, phone, or visit our office on Haider Road. We'll discuss your goals and available opportunities." },
  { num: "02", title: "Documents & Visa", desc: "We guide you through document collection, passport processing, and visa application with full transparency." },
  { num: "03", title: "Medical & Trade Test", desc: "Coordinate and schedule mandatory medical exams and trade skill assessments required by destination countries." },
  { num: "04", title: "Employer Confirmation", desc: "We verify employer credentials, finalize contracts, and ensure you have a confirmed offer before departure." },
  { num: "05", title: "Ticketing & Departure", desc: "Book your travel, provide pre-departure orientation, and support you until you board your flight." },
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pill */}
        <div className="flex justify-center mb-14">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20">
            HOW IT WORKS
          </span>
        </div>

        {/* Diagonal band */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 -skew-y-2 transform-gpu pointer-events-none"></div>

          <div className="relative space-y-6 max-w-4xl mx-auto">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={step.num}
                  className={`flex items-start gap-6 ${isLeft ? "flex-row" : "flex-row-reverse"} md:gap-10`}
                >
                  {/* Step number */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary text-white font-heading font-extrabold text-lg flex items-center justify-center shadow-lg relative z-10">
                    {step.num}
                  </div>

                  {/* Content card */}
                  <div
                    className={`flex-1 bg-background rounded-xl p-5 md:p-6 shadow-sm border border-primary/10 ${
                      isLeft ? "text-left" : "text-right"
                    }`}
                  >
                    <h3 className="font-heading text-base sm:text-lg font-bold text-ink mb-1">{step.title}</h3>
                    <p className="text-sm text-ink/70 leading-relaxed">{step.desc}</p>
                  </div>

                  {/* Connector line (hidden on mobile, shown via staircase offset) */}
                  <div className="hidden md:block w-0"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}