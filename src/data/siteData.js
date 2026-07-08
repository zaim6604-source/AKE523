export const COMPANY = {
  name: 'Azi Khel Recruiting Agency',
  shortName: 'Azi Khel',
  license: '2283/MLK',
  tagline: 'Two Offices, One Universe of Opportunity',
  heroTagline: 'Your trusted gateway to overseas employment — from Khwaza Khela, Swat and Rawalpindi.',
  whatsapp: '0310-4444351',
  whatsappLink: 'https://wa.me/923104444351',
  email: 'info@azikhel.pk',
  offices: {
    head: {
      title: 'Head Office — Khwaza Khela',
      address: 'Office No. 03, 1st Floor, Ibrahim Plaza, Khwaza Khela, Swat, KPK',
      phone: '0946-744177',
      coords: { lat: 34.93853385391515, lng: 72.46900942883572 },
      mapQuery: '34.93853385391515,72.46900942883572',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=34.93853385391515,72.46900942883572',
      mapEmbed: 'https://www.google.com/maps?q=34.93853385391515,72.46900942883572&output=embed',
    },
    branch: {
      title: 'Branch Office — Rawalpindi',
      address: 'Flat No. 10, 1st Floor, Arcade, A-Block Town, Rawalpindi',
      phone: '051-4933242',
      mapQuery: 'A+Block+Town+Rawalpindi',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=A+Block+Town+Rawalpindi',
      mapEmbed: 'https://www.google.com/maps?q=A+Block+Town+Rawalpindi&output=embed',
    },
  },
}

export const STATS = [
  { label: 'Candidates Placed', value: '1000+', icon: 'fa-user-check' },
  { label: 'Partner Employers', value: '80+', icon: 'fa-building' },
  { label: 'Destination Countries', value: '9', icon: 'fa-globe' },
  { label: 'Years of Service', value: '8+', icon: 'fa-star' },
]

export const SERVICES = [
  { icon: 'fa-briefcase', title: 'Job Placement', desc: 'We connect you with verified employers across the Middle East, Europe, and Asia.' },
  { icon: 'fa-file-signature', title: 'Visa Processing', desc: 'End-to-end visa assistance including work visas, medical, and documentation.' },
  { icon: 'fa-passport', title: 'Documentation', desc: 'Guidance on passport applications, attestations, and legal paperwork.' },
  { icon: 'fa-language', title: 'Language Training', desc: 'Basic language courses for German, Arabic, and other destination languages.' },
  { icon: 'fa-plane-departure', title: 'Pre-Departure Orientation', desc: 'Cultural awareness, travel tips, and work readiness sessions before you leave.' },
  { icon: 'fa-handshake', title: 'Employer Liaison', desc: 'Direct coordination with overseas employers to ensure smooth job offers.' },
  { icon: 'fa-scale-balanced', title: 'Legal Assistance', desc: 'Contract review, labor law guidance, and rights protection for overseas workers.' },
  { icon: 'fa-headset', title: 'Post-Placement Support', desc: 'We stay connected even after you land — support whenever you need it.' },
]

export const PROCESS_STEPS = [
  { step: 1, title: 'Registration & Inquiry', desc: 'Visit either of our offices or contact us via phone or WhatsApp. Share your qualifications and preferences.', icon: 'fa-clipboard-list' },
  { step: 2, title: 'Documentation & Verification', desc: 'Submit your passport, educational documents, and experience certificates. We verify everything.', icon: 'fa-file-circle-check' },
  { step: 3, title: 'Job Matching & Interview', desc: 'We match you with suitable overseas employers and coordinate interviews.', icon: 'fa-people-arrows' },
  { step: 4, title: 'Visa & Medical Processing', desc: 'We handle visa applications, medical tests, and all official formalities.', icon: 'fa-plane' },
  { step: 5, title: 'Departure & Follow-Up', desc: 'Pre-departure briefing, travel arrangements, and ongoing support after you arrive.', icon: 'fa-graduation-cap' },
]

export const COUNTRIES = [
  {
    slug: 'saudi-arabia',
    name: 'Saudi Arabia',
    flag: '🇸🇦',
    description: 'Construction, logistics, and oil & gas opportunities across the Kingdom.',
    landmark: 'Masjid Al-Haram, Makkah',
    roles: ['Construction Worker', 'Driver', 'Electrician', 'Plumber', 'Heavy Machinery Operator', 'Salesman'],
    requirements: ['Valid passport (6+ months)', 'Minimum education: Middle/Matric', 'Age 22-45', 'Medical fitness certificate', 'Clean police record'],
  },
  {
    slug: 'uae',
    name: 'UAE',
    flag: '🇦🇪',
    description: 'World-class jobs in Dubai, Abu Dhabi, and across the Emirates.',
    landmark: 'Burj Khalifa, Dubai',
    roles: ['Driver', 'Delivery Rider', 'Sales Associate', 'Waiter', 'Electrician', 'AC Technician'],
    requirements: ['Valid passport (6+ months)', 'Minimum education: Matric', 'Age 21-40', 'English proficiency preferred', 'Medical fitness certificate'],
  },
  {
    slug: 'qatar',
    name: 'Qatar',
    flag: '🇶🇦',
    description: 'Lucrative positions in construction, oil & gas, and hospitality.',
    landmark: 'Museum of Islamic Art, Doha',
    roles: ['Oil & Gas Technician', 'Rigger', 'Scaffolder', 'Driver', 'Safety Officer', 'Steel Fixer'],
    requirements: ['Valid passport (6+ months)', 'Relevant trade certification', 'Age 24-45', 'Medical fitness certificate', 'Experience letter preferred'],
  },
  {
    slug: 'oman',
    name: 'Oman',
    flag: '🇴🇲',
    description: 'Steady demand in construction, logistics, and service sectors.',
    landmark: 'Sultan Qaboos Grand Mosque, Muscat',
    roles: ['Driver', 'Mason', 'Carpenter', 'Painter', 'Warehouse Worker', 'Heavy Driver'],
    requirements: ['Valid passport (6+ months)', 'Minimum education: Middle', 'Age 22-45', 'Medical fitness certificate', 'Clean police record'],
  },
  {
    slug: 'kuwait',
    name: 'Kuwait',
    flag: '🇰🇼',
    description: 'Strong demand in oil & gas, engineering, and healthcare sectors.',
    landmark: 'Kuwait Towers, Kuwait City',
    roles: ['Oil & Gas Technician', 'Safety Officer', 'Driver', 'Electrician', 'Plumber', 'Salesman'],
    requirements: ['Valid passport (6+ months)', 'Minimum education: Matric', 'Age 22-45', 'Medical fitness certificate', 'Clean police record'],
  },
  {
    slug: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    description: 'Skilled worker visas in healthcare, IT, and engineering.',
    landmark: 'Brandenburg Gate, Berlin',
    roles: ['Nurse', 'Elderly Caregiver', 'Software Engineer', 'Electrician', 'Mechanical Engineer', 'Chef'],
    requirements: ['Valid passport (6+ months)', 'Degree or relevant certification', 'Age 22-40', 'German language A2/B1 preferred', 'Work experience (2+ years)'],
  },
  {
    slug: 'poland',
    name: 'Poland',
    flag: '🇵🇱',
    description: 'Growing demand for industrial and service workers.',
    landmark: 'Wawel Castle, Kraków',
    roles: ['Factory Worker', 'Warehouse Associate', 'Welder', 'Driver', 'Construction Worker', 'Chef'],
    requirements: ['Valid passport (6+ months)', 'Minimum education: Matric', 'Age 22-45', 'Medical fitness certificate', 'Basic English'],
  },
  {
    slug: 'romania',
    name: 'Romania',
    flag: '🇷🇴',
    description: 'Rising opportunities in manufacturing, construction, and IT.',
    landmark: 'Palace of the Parliament, Bucharest',
    roles: ['Factory Worker', 'Construction Worker', 'Driver', 'Welder', 'Warehouse Associate', 'Chef'],
    requirements: ['Valid passport (6+ months)', 'Minimum education: Matric', 'Age 22-45', 'Medical fitness certificate', 'Basic English'],
  },
  {
    slug: 'malaysia',
    name: 'Malaysia',
    flag: '🇲🇾',
    description: 'Growing opportunities in manufacturing, palm oil, and hospitality.',
    landmark: 'Petronas Towers, Kuala Lumpur',
    roles: ['Factory Worker', 'Palm Oil Plantation Worker', 'Driver', 'Warehouse Worker', 'Construction Worker', 'Waiter'],
    requirements: ['Valid passport (6+ months)', 'Minimum education: Matric', 'Age 22-45', 'Medical fitness certificate', 'Basic English'],
  },
]

export const FAQS = [
  {
    q: 'What documents do I need to apply?',
    a: 'You will need a valid passport (6+ months validity), educational certificates, experience letters (if any), and a clean police record. We guide you through the full list during your visit to either of our offices.',
  },
  {
    q: 'How long does the visa process take?',
    a: 'Processing times vary by country. Gulf countries typically take 2-6 weeks, while European processes may take 2-4 months. We keep you updated at every step.',
  },
  {
    q: 'Do you provide language training?',
    a: 'Yes, we offer basic language courses for candidates heading to Germany, Arabic-speaking countries, and other non-English destinations. Training is included in select packages.',
  },
  {
    q: 'Is there any age limit?',
    a: 'Most opportunities are for candidates aged 22-45. Some roles may have different age requirements based on the employer and country.',
  },
  {
    q: 'What are your service charges?',
    a: 'Our fee structure is transparent with no hidden charges. Please visit either of our offices or contact us for a detailed breakdown based on your chosen destination.',
  },
  {
    q: 'Do you guarantee job placement?',
    a: 'We work with verified employers and have a strong track record. While we cannot guarantee specific outcomes, we strive to find the best match for your profile.',
  },
  {
    q: 'Where are your offices located?',
    a: 'We have two offices: Head Office at Khwaza Khela, Swat (0946-744177) and Branch Office at Rawalpindi (051-4933242). You can visit either location.',
  },
  {
    q: 'Can I apply if I live outside Swat?',
    a: 'Absolutely! We serve candidates from across KPK and Punjab. You can apply via WhatsApp or visit either of our offices for a consultation.',
  },
]