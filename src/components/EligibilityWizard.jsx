import { useState } from 'react';
import SectionWrapper from './SectionWrapper';

const questions = [
  { id: 'age', label: 'What is your age range?', options: ['18–24', '25–35', '36–45', '46+'] },
  { id: 'education', label: 'What is your education level?', options: ['Matric or below', 'Intermediate', 'Graduate', 'Post-Graduate', 'Technical/Vocational'] },
  { id: 'experience', label: 'Years of work experience?', options: ['None / Fresher', '1–2 years', '3–5 years', '6–10 years', '10+ years'] },
  { id: 'preference', label: 'Which region do you prefer?', options: ['Gulf (Saudi Arabia, UAE, Qatar)', 'Europe (Germany, Poland, etc.)', 'Asia (Malaysia)', 'Any'] },
];

export default function EligibilityWizard() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer) => {
    const newAnswers = { ...answers, [questions[step].id]: answer };
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setAnswers(newAnswers);
      setShowResult(true);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setShowResult(false);
  };

  if (showResult) {
    const eligible = answers.preference?.includes('Gulf') || answers.experience?.includes('3');
    return (
      <SectionWrapper id="eligibility" badge="ELIGIBILITY CHECK" badgeColor="accent">
        <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-2 font-display">
          Your Results
        </h2>
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center text-4xl mx-auto mb-4">
            <i className={`fas ${eligible ? 'fa-check-circle text-accent' : 'fa-info-circle text-primary'}`} />
          </div>
          <h3 className="text-2xl font-bold text-ink mb-3">
            {eligible ? 'You May Be Eligible!' : 'Let Us Help You Find the Right Fit'}
          </h3>
          <p className="text-ink/60 mb-6">
            Based on your profile, we have opportunities that may match your background.
            Contact us for a personalized consultation.
          </p>
          <div className="bg-ink/5 rounded-xl p-4 mb-6 text-left text-sm text-ink/70 space-y-1">
            {Object.entries(answers).map(([key, val]) => (
              <div key={key} className="flex justify-between">
                <span className="font-medium capitalize">{key}:</span>
                <span>{val}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-3 justify-center">
            <button onClick={reset} className="border border-ink/20 text-ink px-6 py-2.5 rounded-full font-semibold hover:bg-ink/5 transition-all">
              Retake Quiz
            </button>
            <a
              href="https://wa.me/923335020040"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-2.5 rounded-full font-bold hover:brightness-110 transition-all inline-flex items-center gap-2"
            >
              <i className="fab fa-whatsapp" /> Apply Now
            </a>
          </div>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="eligibility" badge="ELIGIBILITY CHECK" badgeColor="accent">
      <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-2 font-display">
        Are You Eligible?
      </h2>
      <p className="text-ink/60 mb-8 max-w-2xl">
        Answer a few quick questions to find out which overseas opportunities match your profile.
      </p>

      <div className="max-w-xl mx-auto">
        <div className="flex gap-2 mb-8">
          {questions.map((q, i) => (
            <div key={q.id} className={`flex-1 h-2 rounded-full transition-all ${i <= step ? 'bg-primary' : 'bg-ink/10'}`} />
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
            Step {step + 1} of {questions.length}
          </span>
          <h3 className="text-xl font-bold text-ink mt-4 mb-6">{questions[step].label}</h3>
          <div className="space-y-3">
            {questions[step].options.map((opt) => (
              <button
                key={opt}
                onClick={() => handleAnswer(opt)}
                className="w-full text-left px-5 py-4 rounded-xl border border-ink/10 hover:border-primary hover:bg-primary/5 transition-all font-medium text-ink/80 hover:text-primary"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
