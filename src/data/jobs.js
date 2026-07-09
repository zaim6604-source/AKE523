export const jobs = [
  {
    id: "saudi-construction-01",
    country: "Saudi Arabia", countrySlug: "saudi-arabia", flag: "\u{1F1F8}\u{1F1E6}",
    image: "./images/saudi.jpg",
    role: "Construction Workers", category: "Gulf", trade: "Construction",
    salary: "SAR 1,200 – 1,800", contract: "2 years", openings: 150,
    requirements: ["Valid passport (min 6 months)", "Min 2 years construction experience", "Age 22–45 years", "Medical fitness certificate", "Clean police record"],
    description: "Large-scale construction projects across the Kingdom require skilled construction workers. Competitive salary with accommodation and transportation provided."
  },
  {
    id: "saudi-driver-02",
    country: "Saudi Arabia", countrySlug: "saudi-arabia", flag: "\u{1F1F8}\u{1F1E6}",
    image: "./images/saudi.jpg",
    role: "Heavy Vehicle Drivers", category: "Gulf", trade: "Transport",
    salary: "SAR 1,500 – 2,200", contract: "2 years", openings: 80,
    requirements: ["Valid heavy vehicle license", "Min 3 years experience", "Age 25–45 years", "Medical fitness", "Clean driving record"],
    description: "Experienced heavy vehicle drivers needed for transport companies in Riyadh, Jeddah, and Dammam. Free accommodation and health insurance provided."
  },
  {
    id: "uae-hospitality-03",
    country: "UAE", countrySlug: "uae", flag: "\u{1F1E6}\u{1F1EA}",
    image: "./images/uae.jpg",
    role: "Hospitality Staff", category: "Gulf", trade: "Hospitality",
    salary: "AED 1,500 – 2,500", contract: "2 years", openings: 100,
    requirements: ["Valid passport", "Hospitality experience preferred", "Age 22–38 years", "Good communication", "Basic English"],
    description: "Leading hotels in Dubai and Abu Dhabi hiring waitstaff, room attendants, and front desk personnel. Tax-free salary with accommodation and meals."
  },
  {
    id: "uae-technician-04",
    country: "UAE", countrySlug: "uae", flag: "\u{1F1E6}\u{1F1EA}",
    image: "./images/uae.jpg",
    role: "AC & Refrigeration Technicians", category: "Gulf", trade: "Technical",
    salary: "AED 2,000 – 3,500", contract: "2 years", openings: 60,
    requirements: ["Valid passport", "Technical certification", "Min 3 years exp", "Age 24–45 years", "Trade test clearance"],
    description: "Maintenance companies in Dubai require experienced AC and refrigeration technicians. Attractive salary with overtime and medical coverage."
  },
  {
    id: "qatar-construction-05",
    country: "Qatar", countrySlug: "qatar", flag: "\u{1F1F6}\u{1F1E6}",
    image: "./images/qatar.jpg",
    role: "Site Supervisors", category: "Gulf", trade: "Construction",
    salary: "QAR 3,000 – 4,500", contract: "2 years", openings: 40,
    requirements: ["Valid passport", "Engineering diploma", "Min 5 years exp", "Age 28–50 years", "English proficiency"],
    description: "Post-World Cup infrastructure projects require experienced site supervisors. Excellent compensation with family accommodation options."
  },
  {
    id: "oman-security-06",
    country: "Oman", countrySlug: "oman", flag: "\u{1F1F4}\u{1F1F2}",
    image: "./images/oman.jpg",
    role: "Security Guards", category: "Gulf", trade: "Security",
    salary: "OMR 180 – 250", contract: "2 years", openings: 120,
    requirements: ["Valid passport", "Min height 5'6\"", "Age 22–40 years", "Medical clearance", "Security exp preferred"],
    description: "Security companies in Muscat require professional guards. Uniform, accommodation, and transportation provided."
  },
  {
    id: "kuwait-driver-07",
    country: "Kuwait", countrySlug: "kuwait", flag: "\u{1F1F0}\u{1F1FC}",
    image: "./images/kuwait.jpg",
    role: "Heavy Vehicle Drivers", category: "Gulf", trade: "Transport",
    salary: "KWD 150 – 220", contract: "2 years", openings: 60,
    requirements: ["Valid passport", "Heavy vehicle license", "Min 3 years exp", "Age 25–45 years", "Medical fitness"],
    description: "Transport companies in Kuwait require experienced heavy vehicle drivers. Competitive salary with accommodation."
  },
  {
    id: "germany-nurse-08",
    country: "Germany", countrySlug: "germany", flag: "\u{1F1E9}\u{1F1EA}",
    image: "./images/germany.jpg",
    role: "Registered Nurses", category: "Europe", trade: "Healthcare",
    salary: "€2,500 – 3,500", contract: "Permanent", openings: 30,
    requirements: ["Valid passport", "Nursing degree", "German A2/B1", "Min 2 years exp", "Visa interview"],
    description: "German hospitals seek qualified nurses. Language training support, competitive salary, pathway to permanent residency."
  },
  {
    id: "poland-manufacturing-09",
    country: "Poland", countrySlug: "poland", flag: "\u{1F1F5}\u{1F1F1}",
    image: "./images/poland.jpg",
    role: "Manufacturing Workers", category: "Europe", trade: "Manufacturing",
    salary: "€1,200 – 1,800", contract: "2 years", openings: 200,
    requirements: ["Valid passport", "Basic education", "Medical fitness", "Age 22–40 years", "Shift work willingness"],
    description: "Manufacturing plants in Poland need production line workers. EU standards, overtime, and accommodation provided."
  },
  {
    id: "romania-manufacturing-10",
    country: "Romania", countrySlug: "romania", flag: "\u{1F1F7}\u{1F1F4}",
    image: "./images/romania.jpg",
    role: "Assembly Line Workers", category: "Europe", trade: "Manufacturing",
    salary: "€1,000 – 1,500", contract: "2 years", openings: 150,
    requirements: ["Valid passport", "Basic education", "Medical fitness", "Age 22–40 years", "Willingness to train"],
    description: "Romanian manufacturers require assembly line workers for electronics and automotive production. EU labor standards."
  },
  {
    id: "malaysia-manufacturing-11",
    country: "Malaysia", countrySlug: "malaysia", flag: "\u{1F1F2}\u{1F1FE}",
    image: "./images/malaysia.jpg",
    role: "Manufacturing Workers", category: "Asia", trade: "Manufacturing",
    salary: "MYR 1,800 – 2,500", contract: "2 years", openings: 120,
    requirements: ["Valid passport (18 months)", "Basic education", "Medical fitness", "Age 22–40 years", "Willingness to train"],
    description: "Malaysian manufacturing companies require production workers. Affordable cost of living and diverse culture."
  }
];

export const categories = ["All", "Gulf", "Europe", "Asia"];
export const trades = ["All", "Construction", "Transport", "Hospitality", "Technical", "Security", "Healthcare", "Manufacturing"];

export const testimonials = [
  { name: "Muhammad Ali", role: "Construction Worker – Saudi Arabia", avatar: "./images/avatar-1.jpg", text: "Al Khaliq Enterprises made the entire process smooth and transparent. From documentation to departure, they guided me at every step. I'm now working in Riyadh with a great salary package.", rating: 5 },
  { name: "Ahmed Raza", role: "Driver – UAE", avatar: "./images/avatar-2.jpg", text: "I was hesitant about working abroad, but the team at Al Khaliq addressed all my concerns. They found me a legitimate driving job in Dubai. Highly recommended!", rating: 5 },
  { name: "Usman Khan", role: "Security Guard – Oman", avatar: "./images/avatar-3.jpg", text: "Professional and trustworthy. They helped me get a security job in Muscat within weeks. The accommodation and benefits are better than I expected.", rating: 5 },
  { name: "Bilal Hussain", role: "Nurse – Germany", avatar: "./images/avatar-4.jpg", text: "The German nursing program through Al Khaliq is excellent. They arranged language classes and helped with the visa process. Now I'm working in Berlin!", rating: 5 },
  { name: "Farhan Sheikh", role: "Factory Worker – Poland", avatar: "./images/avatar-5.jpg", text: "I applied through Al Khaliq and was placed in a manufacturing plant in Warsaw within 2 months. The salary is good and the working conditions are excellent.", rating: 5 },
  { name: "Sajid Mehmood", role: "Electrician – Qatar", avatar: "./images/avatar-6.jpg", text: "Best decision I ever made. Al Khaliq found me a skilled electrician position in Doha. The entire team is professional and responsive.", rating: 5 }
];
