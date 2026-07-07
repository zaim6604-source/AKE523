const services = [
  {
    title: "Practical Trade Testing",
    desc: "Hands-on assessment of your trade skills in a real workshop environment under expert supervision.",
    icon: "fa-toolbox",
  },
  {
    title: "Skill Assessment & Grading",
    desc: "Detailed evaluation of your performance with a graded report highlighting strengths and areas for improvement.",
    icon: "fa-clipboard-check",
  },
  {
    title: "Trade Test Certificate",
    desc: "Receive an official certificate recognised by overseas employers, verifying your skill level.",
    icon: "fa-certificate",
  },
  {
    title: "Video / Photo Test Records",
    desc: "Video and photographic documentation of your test performance to share with potential employers.",
    icon: "fa-video",
  },
  {
    title: "Employer-Specific Setups",
    desc: "Tests customised to match the specific requirements and standards of recruiting employers.",
    icon: "fa-gear",
  },
  {
    title: "Pre-Departure Skill Prep",
    desc: "Orientation and skill refresher sessions to prepare you for the specific demands of overseas jobs.",
    icon: "fa-chalkboard-user",
  },
];

export default function WhatYouGet() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-14">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20">
            OUR SERVICES
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-primary/10 hover:border-primary/30"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <i className={`fas ${s.icon} text-primary text-lg`}></i>
              </div>
              <h3 className="font-heading font-bold text-ink mb-2">{s.title}</h3>
              <p className="text-sm text-ink/70 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}