import { useState } from 'react';
import FadeIn from '../components/FadeIn';
import { countries } from '../data/countries';

const trades = [
  'Construction', 'Transport', 'Hospitality', 'Technical',
  'Security', 'Healthcare', 'Manufacturing', 'Agriculture',
  'IT', 'General Labour',
];

export default function Eligibility() {
  const [step, setStep] = useState(1);
  const [selectedTrade, setSelectedTrade] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [form, setForm] = useState({ name: '', phone: '', experience: '' });

  const progress = ((step - 1) / 3) * 100;

  const handleSubmit = () => {
    const text = encodeURIComponent(
      `Eligibility Check - Fowzan Traders%0A%0AName: ${form.name}%0APhone: ${form.phone}%0ATrade: ${selectedTrade}%0APreferred Country: ${selectedCountry}%0AExperience: ${form.experience || 'Not specified'}`
    );
    window.open(`https://wa.me/923006162506?text=${text}`, '_blank');
  };

  const canProceed = () => {
    if (step === 1) return !!selectedTrade;
    if (step === 2) return !!selectedCountry;
    if (step === 3) return form.name && form.phone;
    return true;
  };

  return (
    <div>
      {/* Hero */}
      <section className="pt-24 pb-16 md:pb-20" style={{ backgroundColor: '#006D77' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#FFDD00' }}>
              <i className="fa-solid fa-clipboard-check" />
              Eligibility Check
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>Check Your Eligibility</h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Answer a few quick questions and we'll help you find the right opportunity.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Wizard */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Progress Bar */}
        <div className="mb-10">
          <div className="flex justify-between mb-2">
            <span className="text-xs font-semibold" style={{ color: '#006D77' }}>Trade</span>
            <span className="text-xs font-semibold" style={{ color: '#006D77' }}>Country</span>
            <span className="text-xs font-semibold" style={{ color: '#006D77' }}>Details</span>
            <span className="text-xs font-semibold" style={{ color: '#006D77' }}>WhatsApp</span>
          </div>
          <div className="w-full h-2 bg-[#EDF6F9] rounded-full overflow-hidden">
            <div className="h-full rounded-full transition-all duration-500 ease-out" style={{ width: `${progress}%`, backgroundColor: '#E29578' }} />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border p-6 sm:p-8 md:p-10" style={{ borderColor: '#83C5BE' }}>
          {/* Step 1: Trade */}
          {step === 1 && (
            <FadeIn key="step1">
              <div className="text-center mb-6">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#006D7710' }}>
                  <i className="fas fa-toolbox text-2xl" style={{ color: '#006D77' }} />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#003844' }}>Select Your Trade</h3>
                <p className="text-sm" style={{ color: '#006D77' }}>Choose the field that matches your skills and experience.</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {trades.map((trade) => (
                  <button
                    key={trade}
                    onClick={() => setSelectedTrade(trade)}
                    className={`p-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer border ${
                      selectedTrade === trade ? 'text-white shadow-md' : 'hover:bg-[#EDF6F9]'
                    }`}
                    style={{
                      backgroundColor: selectedTrade === trade ? '#006D77' : 'transparent',
                      borderColor: selectedTrade === trade ? '#006D77' : '#83C5BE',
                      color: selectedTrade === trade ? 'white' : '#003844',
                    }}
                  >
                    {trade}
                  </button>
                ))}
              </div>
            </FadeIn>
          )}

          {/* Step 2: Country */}
          {step === 2 && (
            <FadeIn key="step2">
              <div className="text-center mb-6">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#006D7710' }}>
                  <i className="fas fa-globe text-2xl" style={{ color: '#006D77' }} />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#003844' }}>Select Preferred Country</h3>
                <p className="text-sm" style={{ color: '#006D77' }}>Where would you like to work?</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {countries.map((c) => (
                  <button
                    key={c.slug}
                    onClick={() => setSelectedCountry(c.name)}
                    className={`p-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer border ${
                      selectedCountry === c.name ? 'text-white shadow-md' : 'hover:bg-[#EDF6F9]'
                    }`}
                    style={{
                      backgroundColor: selectedCountry === c.name ? '#006D77' : 'transparent',
                      borderColor: selectedCountry === c.name ? '#006D77' : '#83C5BE',
                      color: selectedCountry === c.name ? 'white' : '#003844',
                    }}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </FadeIn>
          )}

          {/* Step 3: Details */}
          {step === 3 && (
            <FadeIn key="step3">
              <div className="text-center mb-6">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#006D7710' }}>
                  <i className="fas fa-user-pen text-2xl" style={{ color: '#006D77' }} />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#003844' }}>Your Details</h3>
                <p className="text-sm" style={{ color: '#006D77' }}>Please provide your contact information.</p>
              </div>
              <div className="space-y-4 max-w-md mx-auto">
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: '#003844' }}>Full Name <span style={{ color: '#E29578' }}>*</span></label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all"
                    style={{ borderColor: '#83C5BE', color: '#003844' }}
                    onFocus={(e) => e.target.style.borderColor = '#006D77'}
                    onBlur={(e) => e.target.style.borderColor = '#83C5BE'}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: '#003844' }}>Phone Number <span style={{ color: '#E29578' }}>*</span></label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="03XX-XXXXXXX"
                    className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all"
                    style={{ borderColor: '#83C5BE', color: '#003844' }}
                    onFocus={(e) => e.target.style.borderColor = '#006D77'}
                    onBlur={(e) => e.target.style.borderColor = '#83C5BE'}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: '#003844' }}>Years of Experience</label>
                  <input
                    type="text"
                    value={form.experience}
                    onChange={(e) => setForm({ ...form, experience: e.target.value })}
                    placeholder="e.g. 3 years"
                    className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all"
                    style={{ borderColor: '#83C5BE', color: '#003844' }}
                    onFocus={(e) => e.target.style.borderColor = '#006D77'}
                    onBlur={(e) => e.target.style.borderColor = '#83C5BE'}
                  />
                </div>
              </div>
            </FadeIn>
          )}

          {/* Step 4: Summary & Submit */}
          {step === 4 && (
            <FadeIn key="step4">
              <div className="text-center mb-6">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#006D7710' }}>
                  <i className="fab fa-whatsapp text-2xl" style={{ color: '#25D366' }} />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#003844' }}>Ready to Submit</h3>
                <p className="text-sm" style={{ color: '#006D77' }}>Review your information and submit via WhatsApp.</p>
              </div>

              <div className="max-w-md mx-auto bg-[#EDF6F9] rounded-xl p-5 mb-6 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="font-semibold" style={{ color: '#003844' }}>Trade:</span>
                  <span style={{ color: '#006D77' }}>{selectedTrade}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-semibold" style={{ color: '#003844' }}>Country:</span>
                  <span style={{ color: '#006D77' }}>{selectedCountry}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-semibold" style={{ color: '#003844' }}>Name:</span>
                  <span style={{ color: '#006D77' }}>{form.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-semibold" style={{ color: '#003844' }}>Phone:</span>
                  <span style={{ color: '#006D77' }}>{form.phone}</span>
                </div>
                {form.experience && (
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold" style={{ color: '#003844' }}>Experience:</span>
                    <span style={{ color: '#006D77' }}>{form.experience}</span>
                  </div>
                )}
              </div>

              <button
                onClick={handleSubmit}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-base font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-0"
                style={{ backgroundColor: '#25D366' }}
              >
                <i className="fab fa-whatsapp" />
                Submit via WhatsApp
              </button>
            </FadeIn>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-6 border-t" style={{ borderColor: '#EDF6F9' }}>
            {step > 1 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border-2 transition-all cursor-pointer"
                style={{ borderColor: '#006D77', color: '#006D77' }}
              >
                <i className="fas fa-arrow-left" /> Back
              </button>
            ) : <div />}
            {step < 4 ? (
              <button
                onClick={() => setStep(step + 1)}
                disabled={!canProceed()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                style={{ backgroundColor: '#006D77' }}
              >
                Next <i className="fas fa-arrow-right" />
              </button>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
}
