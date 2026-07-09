import { useState } from 'react';
import FadeUp from './FadeUp';
import SectionBadge from './SectionBadge';

const TRADES = [
  'Construction Worker', 'Electrician', 'Plumber', 'Welder', 'Driver',
  'Security Guard', 'Hotel Staff', 'Chef', 'Nurse', 'AC Technician',
  'Heavy Equipment Operator', 'Mason', 'Painter', 'Steel Fixer',
  'Carpenter', 'Warehouse Worker', 'Textile Worker', 'Other',
];

const COUNTRIES = [
  'Saudi Arabia', 'UAE', 'Qatar', 'Kuwait', 'Oman',
  'Germany', 'Poland', 'South Korea', 'Turkey',
];

export default function EligibilityWizard() {
  const [step, setStep] = useState(0);
  const [trade, setTrade] = useState('');
  const [country, setCountry] = useState('');
  const [details, setDetails] = useState({ name: '', phone: '', age: '', experience: '' });

  const handleNext = () => {
    if (step < 2) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleSubmit = () => {
    const msg = `Eligibility Check:%0A%0AName: ${details.name}%0APhone: ${details.phone}%0AAge: ${details.age}%0AExperience: ${details.experience} years%0ATrade: ${trade}%0ACountry: ${country}`;
    window.open(`https://wa.me/923009050416?text=${msg}`, '_blank');
  };

  const canProceed = step === 0 ? trade : step === 1 ? country : details.name && details.phone;

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-10">
          <SectionBadge text="ELIGIBILITY CHECK" color="bg-[#E10600]" />
          <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C1C1C]">
            Check Your Eligibility
          </h2>
          <p className="text-[#1C1C1C]/60 mt-3">
            Find out if you qualify for overseas employment in 3 quick steps.
          </p>
        </FadeUp>

        <FadeUp>
          <div className="bg-[#F5F5F5] rounded-2xl p-6 sm:p-8 shadow-md">
            {/* Steps indicator */}
            <div className="flex items-center justify-center gap-2 mb-8">
              {[0, 1, 2].map((s) => (
                <div key={s} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    step >= s ? 'bg-[#E10600] text-white' : 'bg-[#1C1C1C]/10 text-[#1C1C1C]/40'
                  }`}>
                    {s + 1}
                  </div>
                  {s < 2 && <div className={`w-8 sm:w-16 h-1 mx-1 rounded transition-all ${
                    step > s ? 'bg-[#E10600]' : 'bg-[#1C1C1C]/10'
                  }`}></div>}
                </div>
              ))}
            </div>

            {/* Step 0: Trade */}
            {step === 0 && (
              <div>
                <h3 className="font-poppins font-bold text-[#1C1C1C] text-lg mb-4">Select Your Trade</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {TRADES.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTrade(t)}
                      className={`text-sm font-medium py-2.5 px-3 rounded-xl border-2 transition-all ${
                        trade === t
                          ? 'border-[#E10600] bg-[#E10600]/10 text-[#E10600]'
                          : 'border-[#1C1C1C]/10 bg-white text-[#1C1C1C]/70 hover:border-[#E10600]/30'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 1: Country */}
            {step === 1 && (
              <div>
                <h3 className="font-poppins font-bold text-[#1C1C1C] text-lg mb-4">Select Your Preferred Country</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {COUNTRIES.map((c) => (
                    <button
                      key={c}
                      onClick={() => setCountry(c)}
                      className={`text-sm font-medium py-2.5 px-3 rounded-xl border-2 transition-all ${
                        country === c
                          ? 'border-[#E10600] bg-[#E10600]/10 text-[#E10600]'
                          : 'border-[#1C1C1C]/10 bg-white text-[#1C1C1C]/70 hover:border-[#E10600]/30'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Details */}
            {step === 2 && (
              <div>
                <h3 className="font-poppins font-bold text-[#1C1C1C] text-lg mb-4">Your Details</h3>
                <div className="space-y-4 max-w-md mx-auto">
                  <div>
                    <label className="block text-sm font-medium text-[#1C1C1C]/70 mb-1">Full Name *</label>
                    <input
                      type="text"
                      value={details.name}
                      onChange={(e) => setDetails({ ...details, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-[#E10600]/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E10600]/30 text-sm"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1C1C1C]/70 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      value={details.phone}
                      onChange={(e) => setDetails({ ...details, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-[#E10600]/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E10600]/30 text-sm"
                      placeholder="03XX-XXXXXXX"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#1C1C1C]/70 mb-1">Age</label>
                      <input
                        type="number"
                        value={details.age}
                        onChange={(e) => setDetails({ ...details, age: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-[#E10600]/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E10600]/30 text-sm"
                        placeholder="25"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1C1C1C]/70 mb-1">Experience (years)</label>
                      <input
                        type="number"
                        value={details.experience}
                        onChange={(e) => setDetails({ ...details, experience: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-[#E10600]/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E10600]/30 text-sm"
                        placeholder="3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <button
                onClick={handleBack}
                className={`text-sm font-semibold px-6 py-3 rounded-full transition-all ${
                  step === 0
                    ? 'text-[#1C1C1C]/30 cursor-not-allowed'
                    : 'text-[#1C1C1C]/60 hover:text-[#1C1C1C] border border-[#1C1C1C]/20 hover:border-[#1C1C1C]/40'
                }`}
                disabled={step === 0}
              >
                <i className="fa-solid fa-arrow-left mr-1.5"></i>Back
              </button>
              {step < 2 ? (
                <button
                  onClick={handleNext}
                  disabled={!canProceed}
                  className={`text-sm font-bold px-8 py-3 rounded-full transition-all ${
                    canProceed
                      ? 'bg-[#E10600] text-white hover:bg-[#A30000]'
                      : 'bg-[#1C1C1C]/10 text-[#1C1C1C]/30 cursor-not-allowed'
                  }`}
                >
                  Next <i className="fa-solid fa-arrow-right ml-1.5"></i>
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!canProceed}
                  className="text-sm font-bold px-8 py-3 rounded-full bg-[#FFD500] text-[#141414] hover:bg-[#E10600] hover:text-white transition-all"
                >
                  <i className="fa-brands fa-whatsapp mr-1.5"></i>Check on WhatsApp
                </button>
              )}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}