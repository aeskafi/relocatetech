// RelocateTech - Comprehensive Global Tech Relocation & Sponsorship Dataset

export const countries = [
  {
    id: 'netherlands',
    name: 'Netherlands',
    code: 'NL',
    flag: '🇳🇱',
    region: 'Europe (EU)',
    avgSalaryDev: '€78,000 - €115,000',
    salaryNumeric: 85000,
    currency: 'EUR',
    visaEase: 'Very High',
    primaryVisa: 'Highly Skilled Migrant (Kennismigrant) / EU Blue Card',
    minSalaryRequirement: '€5,689/mo (Age 30+) | €4,172/mo (Under 30)',
    taxScheme: '30% Ruling (Tax-free allowance for qualifying expats)',
    taxReliefDescription: '30% of gross salary exempt from Dutch Box 1 income tax for up to 5 years.',
    effectiveTaxRate: '~24% (with 30% ruling) / ~38% (standard)',
    avgRent1Bed: '€1,850 - €2,250/mo (Amsterdam) | €1,400 (Rotterdam)',
    englishRank: 'Very High (#1 in EF EPI non-native)',
    englishProficiency: '93%',
    livingCostIndex: 'Medium-High',
    keyTechHubs: ['Amsterdam', 'Eindhoven', 'Rotterdam', 'Utrecht'],
    officialSponsorRegistry: 'https://ind.nl/en/public-register-recognised-sponsors',
    highlights: [
      'Fast 2-4 week visa processing through over 10,000 recognized IND sponsor companies',
      '30% Tax exemption dramatically increases monthly net savings',
      'Unrivaled cycling infrastructure & family-friendly work-life balance (36-40 hr work week)',
      'Home to Booking.com, Adyen, ASML, Uber EMEA, Databricks, and Miro'
    ],
    prYears: 5
  },
  {
    id: 'germany',
    name: 'Germany',
    code: 'DE',
    flag: '🇩🇪',
    region: 'Europe (EU)',
    avgSalaryDev: '€72,000 - €105,000',
    salaryNumeric: 78000,
    currency: 'EUR',
    visaEase: 'High',
    primaryVisa: 'EU Blue Card / Opportunity Card (Chancenkarte)',
    minSalaryRequirement: '€41,042/year (IT Shortage Occupations) | €45,300 standard',
    taxScheme: 'Progressive Tax Class 1 (14% - 42% + Solidarity)',
    taxReliefDescription: 'Generous child allowances and social security coverage; no special expat flat rate.',
    effectiveTaxRate: '~39% - 42% (including pension, health & unemployment)',
    avgRent1Bed: '€1,200 - €1,600/mo (Berlin) | €1,600 - €1,950/mo (Munich)',
    englishRank: 'High',
    englishProficiency: '62%',
    livingCostIndex: 'Moderate (Lower living costs than UK or Netherlands)',
    keyTechHubs: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg'],
    officialSponsorRegistry: 'https://www.make-it-in-germany.com/en/',
    highlights: [
      'Fast-track Permanent Residency in as little as 21 months with German B1 (or 27 months with A1)',
      'Opportunity Card (Chancenkarte) permits up to 1-year in-country points-based job seeking',
      'Berlin is one of Europe\'s most vibrant nomad & startup tech capitals',
      'Strong employee protection laws and 25-30 statutory vacation days'
    ],
    prYears: 3
  },
  {
    id: 'united-kingdom',
    name: 'United Kingdom',
    code: 'GB',
    flag: '🇬🇧',
    region: 'Europe (Non-EU)',
    avgSalaryDev: '£65,000 - £120,000',
    salaryNumeric: 90000,
    currency: 'GBP',
    visaEase: 'High',
    primaryVisa: 'Skilled Worker Visa / Global Talent Visa (Tech Nation)',
    minSalaryRequirement: '£38,700/year (or going rate for code 2136 Software Developers)',
    taxScheme: 'Progressive (20% Basic, 40% Higher, 45% Additional)',
    taxReliefDescription: '£12,570 tax-free Personal Allowance; non-dom rules revised in 2025.',
    effectiveTaxRate: '~32% - 37% (Income tax + National Insurance Class 1)',
    avgRent1Bed: '£1,800 - £2,400/mo (London) | £1,050 - £1,400/mo (Manchester)',
    englishRank: 'Native',
    englishProficiency: '100%',
    livingCostIndex: 'High (London) / Moderate (Regions)',
    keyTechHubs: ['London', 'Manchester', 'Edinburgh', 'Cambridge'],
    officialSponsorRegistry: 'https://www.gov.uk/government/publications/register-of-licensed-sponsors-workers',
    highlights: [
      'Largest venture capital ecosystem and fintech capital in Europe',
      'Global Talent Visa offers complete freedom to switch employers or freelance',
      'Over 70,000 licensed sponsoring companies registered on the Home Office list',
      'Indefinite Leave to Remain (ILR) accessible after 3-5 years'
    ],
    prYears: 5
  },
  {
    id: 'sweden',
    name: 'Sweden',
    code: 'SE',
    flag: '🇸🇪',
    region: 'Europe (EU)',
    avgSalaryDev: '55,000 - 80,000 SEK/mo (€60k - €85k)',
    salaryNumeric: 72000,
    currency: 'SEK',
    visaEase: 'High',
    primaryVisa: 'Swedish Work Permit (Certified Employer Fast-Track)',
    minSalaryRequirement: '28,480+ SEK/mo (80% median salary rule)',
    taxScheme: 'Progressive (~32% municipal + state tax over 598,500 SEK)',
    taxReliefDescription: 'Expert tax relief (Forskarskatt) for top-tier key experts (25% tax-free income for 5 years).',
    effectiveTaxRate: '~33% - 38%',
    avgRent1Bed: '12,000 - 16,500 SEK/mo (Stockholm)',
    englishRank: 'Very High',
    englishProficiency: '86%',
    livingCostIndex: 'Medium-High',
    keyTechHubs: ['Stockholm', 'Gothenburg', 'Malmö'],
    officialSponsorRegistry: 'https://www.migrationsverket.se/English.html',
    highlights: [
      'World-famous unicorn factory: Spotify, Klarna, King, Mojang',
      '480 days paid parental leave per child and generous vacation (25-30 days)',
      'Flat organizational hierarchies and culture of psychological safety',
      'Permanent residency eligible after 4 years on a work permit'
    ],
    prYears: 4
  },
  {
    id: 'switzerland',
    name: 'Switzerland',
    code: 'CH',
    flag: '🇨🇭',
    region: 'Europe (Non-EU)',
    avgSalaryDev: 'CHF 125,000 - CHF 185,000',
    salaryNumeric: 145000,
    currency: 'CHF',
    visaEase: 'Moderate (Quota system for non-EU/EFTA)',
    primaryVisa: 'Permit B (Residence & Work Permit)',
    minSalaryRequirement: 'Market rate standard (~CHF 110,000+ for senior engineers)',
    taxScheme: 'Low cantonal & federal rates (15% - 25% effective in Zurich/Zug)',
    taxReliefDescription: 'World-renowned low tax jurisdiction with strong local purchasing power.',
    effectiveTaxRate: '~18% - 24% (combined federal, cantonal, municipal & social)',
    avgRent1Bed: 'CHF 2,100 - CHF 2,800/mo (Zurich/Geneva)',
    englishRank: 'High (Multilingual: DE, FR, IT, EN)',
    englishProficiency: '70%',
    livingCostIndex: 'Very High',
    keyTechHubs: ['Zurich', 'Geneva', 'Basel', 'Lausanne'],
    officialSponsorRegistry: 'https://www.sem.admin.ch/sem/en/home.html',
    highlights: [
      'Highest gross and net tech salaries across the entire European continent',
      'Google Zurich is Google\'s largest engineering research lab outside Mountain View',
      'Superlative purchasing power despite high nominal living expenses',
      'Unmatched alpine nature, safety, and pristine infrastructure'
    ],
    prYears: 5
  },
  {
    id: 'canada',
    name: 'Canada',
    code: 'CA',
    flag: '🇨🇦',
    region: 'North America',
    avgSalaryDev: 'CAD $105,000 - $165,000',
    salaryNumeric: 95000,
    currency: 'CAD',
    visaEase: 'Very High',
    primaryVisa: 'Global Skills Strategy (GSS 2-week processing) / Express Entry',
    minSalaryRequirement: 'Prevailing median wage for NOC code 21231/21232',
    taxScheme: 'Progressive Federal & Provincial (26% - 48%)',
    taxReliefDescription: 'TFSA and RRSP tax-deferred savings accounts; standard progressive rates.',
    effectiveTaxRate: '~29% - 33% (in Ontario / British Columbia)',
    avgRent1Bed: 'CAD $2,100 - CAD $2,600/mo (Toronto/Vancouver)',
    englishRank: 'Native',
    englishProficiency: '100%',
    livingCostIndex: 'High (Toronto, Vancouver) / Moderate (Montreal, Calgary)',
    keyTechHubs: ['Toronto', 'Vancouver', 'Montreal', 'Waterloo'],
    officialSponsorRegistry: 'https://www.canada.ca/en/immigration-refugees-citizenship.html',
    highlights: [
      'Dedicated 2-week expedited visa processing under the Global Skills Strategy',
      'Direct, transparent transition to Canadian Permanent Residence via Express Entry STEM category',
      'North American time zone alignment with Amazon, Microsoft, Shopify, and top AI institutes',
      'Welcoming multicultural society with universal healthcare'
    ],
    prYears: 3
  },
  {
    id: 'ireland',
    name: 'Ireland',
    code: 'IE',
    flag: '🇮🇪',
    region: 'Europe (EU)',
    avgSalaryDev: '€75,000 - €125,000',
    salaryNumeric: 88000,
    currency: 'EUR',
    visaEase: 'High',
    primaryVisa: 'Critical Skills Employment Permit (CSEP)',
    minSalaryRequirement: '€38,000/yr (with recognized degree) or €64,000/yr (all occupations)',
    taxScheme: 'Standard 20% / Higher 40% band + USC (0.5% - 8%) + PRSI (4%)',
    taxReliefDescription: 'SARP (Special Assignee Relief Programme) for eligible transfers; standard bands otherwise.',
    effectiveTaxRate: '~36% - 40%',
    avgRent1Bed: '€1,850 - €2,300/mo (Dublin)',
    englishRank: 'Native (Only English-speaking eurozone country)',
    englishProficiency: '100%',
    livingCostIndex: 'High (Dublin housing pressure)',
    keyTechHubs: ['Dublin (Silicon Docks)', 'Cork', 'Galway'],
    officialSponsorRegistry: 'https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/',
    highlights: [
      'European headquarters for Apple, Google, Meta, Stripe, Pfizer, and TikTok',
      'Fast-track Stamp 4 permanent residency after just 2 years on CSEP',
      'Unrestricted spousal work rights upon visa issuance',
      'Single gateway connecting EU single market with English language'
    ],
    prYears: 2
  },
  {
    id: 'spain',
    name: 'Spain',
    code: 'ES',
    flag: '🇪🇸',
    region: 'Europe (EU)',
    avgSalaryDev: '€55,000 - €85,000',
    salaryNumeric: 65000,
    currency: 'EUR',
    visaEase: 'Very High',
    primaryVisa: 'Highly Qualified Professional (HQP) / Startup Law Visa',
    minSalaryRequirement: '~€40,077/yr for technical specialists',
    taxScheme: 'Beckham Law (Special Expat Tax Regime: 24% flat up to €600k)',
    taxReliefDescription: 'Flat 24% income tax rate for up to 6 consecutive tax years for relocating engineers.',
    effectiveTaxRate: '~24% flat (with Beckham Law) + capped social security',
    avgRent1Bed: '€1,100 - €1,500/mo (Barcelona/Madrid)',
    englishRank: 'Moderate (High in tech hubs)',
    englishProficiency: '58%',
    livingCostIndex: 'Moderate-Low (Outstanding cost-to-lifestyle ratio)',
    keyTechHubs: ['Barcelona', 'Madrid', 'Valencia', 'Málaga'],
    officialSponsorRegistry: 'https://www.exteriores.gob.es/',
    highlights: [
      'Beckham Law flat 24% tax rate offers exceptional savings in Southern Europe',
      'Rapidly booming tech ecosystem in Barcelona (@22 tech district) and Madrid',
      'Mediterranean climate, vibrant culinary culture, and low living expenses',
      'Fast-track 20-day visa resolution under Law 14/2013 for international specialists'
    ],
    prYears: 5
  },
  {
    id: 'denmark',
    name: 'Denmark',
    code: 'DK',
    flag: '🇩🇰',
    region: 'Europe (EU)',
    avgSalaryDev: 'DKK 55,000 - 85,000/mo (€80k - €120k)',
    salaryNumeric: 88000,
    currency: 'DKK',
    visaEase: 'High',
    primaryVisa: 'Fast-Track Scheme / Pay Limit Scheme',
    minSalaryRequirement: 'DKK 487,000/year (~€65,300)',
    taxScheme: 'Researcher Tax Scheme (32.84% flat for 7 years) or progressive',
    taxReliefDescription: 'Special 32.84% flat rate for qualifying high-earning foreign specialists.',
    effectiveTaxRate: '~32.84% (with expat scheme) / ~43% (standard)',
    avgRent1Bed: 'DKK 9,500 - 13,500/mo (€1,275 - €1,800)',
    englishRank: 'Very High',
    englishProficiency: '86%',
    livingCostIndex: 'High',
    keyTechHubs: ['Copenhagen', 'Aarhus'],
    officialSponsorRegistry: 'https://nyidanmark.dk/en-GB/Words%20and%20Concepts%20Front%20Page/SIRI/List%20certified%20companies',
    highlights: [
      'Consistently ranked top 3 globally in the World Happiness Report',
      'Special 32.84% expat tax rate available for highly-paid researchers and specialists',
      'Strict 37-hour work week culture with zero expectation of overtime',
      'Official SIRI certified company register with rapid paperless approvals'
    ],
    prYears: 4
  }
];

export const topSponsoringCompanies = [
  {
    name: 'Booking.com',
    hq: 'Amsterdam, Netherlands',
    locations: 'Amsterdam, London',
    visaType: 'Kennismigrant (NL) / Skilled Worker (UK)',
    relocationPerks: '100% flights, 2 months corporate apartment, €5,000 relocation stipend, full tax & visa handling',
    stack: 'Java, Go, Perl, Python, React, Kubernetes',
    careersUrl: 'https://careers.booking.com/'
  },
  {
    name: 'Adyen',
    hq: 'Amsterdam, Netherlands',
    locations: 'Amsterdam, Madrid, Berlin, London',
    visaType: 'Kennismigrant / EU Blue Card',
    relocationPerks: 'Comprehensive relocation bonus, temporary housing, 30% ruling processing',
    stack: 'Java, PostgreSQL, React, TypeScript',
    careersUrl: 'https://careers.adyen.com/'
  },
  {
    name: 'ASML',
    hq: 'Veldhoven, Netherlands',
    locations: 'Eindhoven, Veldhoven, Berlin',
    visaType: 'Kennismigrant / EU Blue Card',
    relocationPerks: 'Relocation package, housing search support, 30% ruling assistance, spousal career support',
    stack: 'C++, C, Python, Embedded, Linux',
    careersUrl: 'https://www.asml.com/en/careers'
  },
  {
    name: 'Uber EMEA',
    hq: 'Amsterdam, Netherlands',
    locations: 'Amsterdam, London, Sofia',
    visaType: 'Kennismigrant / Skilled Worker',
    relocationPerks: 'Top-tier relocation lump sum, flights, 60 days furnished housing, immigration legal counsel',
    stack: 'Go, Java, Python, React, Kafka',
    careersUrl: 'https://www.uber.com/us/en/careers/'
  },
  {
    name: 'Spotify',
    hq: 'Stockholm, Sweden',
    locations: 'Stockholm, London, Remote EMEA',
    visaType: 'Swedish Work Permit / UK Skilled Worker',
    relocationPerks: 'Full relocation service, temporary housing, flights, flexible Work from Anywhere policy',
    stack: 'Java, Python, C++, TypeScript, GCP',
    careersUrl: 'https://www.lifeatspotify.com/'
  },
  {
    name: 'Klarna',
    hq: 'Stockholm, Sweden',
    locations: 'Stockholm, Berlin, London, Milan',
    visaType: 'Swedish Work Permit / EU Blue Card',
    relocationPerks: 'Relocation package, visa lawyer handling, settling-in allowance',
    stack: 'Node.js, TypeScript, React, Python, AWS',
    careersUrl: 'https://www.klarna.com/careers/'
  },
  {
    name: 'Delivery Hero',
    hq: 'Berlin, Germany',
    locations: 'Berlin (over 100 nationalities)',
    visaType: 'EU Blue Card',
    relocationPerks: 'In-house dedicated relocation specialists, visa filing, temporary apartment, German classes',
    stack: 'Go, Python, Kotlin, React, Kubernetes',
    careersUrl: 'https://careers.deliveryhero.com/'
  },
  {
    name: 'Zalando',
    hq: 'Berlin, Germany',
    locations: 'Berlin, Dortmund, Dublin, Helsinki',
    visaType: 'EU Blue Card',
    relocationPerks: 'Relocation allowance, flight tickets, temporary apartment for 4-8 weeks, visa support',
    stack: 'Scala, Java, Python, React, AWS',
    careersUrl: 'https://jobs.zalando.com/'
  },
  {
    name: 'Stripe',
    hq: 'Dublin, Ireland / San Francisco',
    locations: 'Dublin, London, Remote EU',
    visaType: 'Critical Skills Employment Permit (IE) / UK Skilled Worker',
    relocationPerks: 'Comprehensive relocation lump sum, immigration attorney, premium health insurance',
    stack: 'Ruby, Go, Java, TypeScript, React',
    careersUrl: 'https://stripe.com/jobs'
  },
  {
    name: 'Databricks',
    hq: 'Amsterdam / London',
    locations: 'Amsterdam, London, Munich',
    visaType: 'Kennismigrant / Skilled Worker',
    relocationPerks: 'Premium relocation tier, top quartile equity (RSUs), 30% ruling processing',
    stack: 'Scala, C++, Python, Go, Spark',
    careersUrl: 'https://www.databricks.com/company/careers'
  },
  {
    name: 'Miro',
    hq: 'Amsterdam, Netherlands',
    locations: 'Amsterdam, Berlin, London',
    visaType: 'Kennismigrant / EU Blue Card',
    relocationPerks: 'Full relocation assistance, flights, temporary housing, 30% ruling support',
    stack: 'TypeScript, React, Java, AWS',
    careersUrl: 'https://miro.com/careers/'
  },
  {
    name: 'Personio',
    hq: 'Munich, Germany',
    locations: 'Munich, Madrid, Amsterdam, London',
    visaType: 'EU Blue Card / Beckham Law / Kennismigrant',
    relocationPerks: 'Visa sponsorship, relocation bonus, temporary accommodation, public transit passes',
    stack: 'Kotlin, Go, TypeScript, React, Python',
    careersUrl: 'https://www.personio.com/about-personio/careers/'
  }
];

export const atsChecklist = [
  {
    id: 'single_column',
    category: 'Format & Layout',
    title: 'Strict Single-Column Layout',
    description: 'Avoid multi-column tables, sidebars, or floating text boxes. Modern ATS parsers read linearly from left to right.',
    weight: 8,
    action: 'Remove side columns, tables, and nested graphic boxes.'
  },
  {
    id: 'clean_typography',
    category: 'Format & Layout',
    title: 'Standard Cross-Platform Fonts',
    description: 'Use ATS-safe web fonts such as Inter, Calibri, Arial, Helvetica, or Roboto. Avoid fancy decorative scripts.',
    weight: 5,
    action: 'Select standard sans-serif or serif fonts with consistent 10-12pt body sizing.'
  },
  {
    id: 'page_length',
    category: 'Length & Conciseness',
    title: '1-Page Rule for < 10 Years Experience',
    description: 'Senior hiring managers scan resumes in 6-10 seconds. Keep content focused exclusively on relevant technical impact.',
    weight: 8,
    action: 'Trim older or irrelevant roles and condense spacing to fit 1 solid page.'
  },
  {
    id: 'standard_headings',
    category: 'Format & Layout',
    title: 'Conventional Section Headings',
    description: 'Use standard keywords: "Work Experience", "Technical Skills", "Education", "Projects". Custom names like "Where I\'ve Been" confuse parsers.',
    weight: 7,
    action: 'Rename unique headers to standard industry categories.'
  },
  {
    id: 'google_xyz',
    category: 'Content & Impact',
    title: 'Google XYZ Bullet Formula',
    description: 'Formula: Accomplished [X], as measured by [Y], by doing [Z]. Every bullet must demonstrate tangible business or performance impact.',
    weight: 12,
    action: 'Rewrite descriptive bullets into quantifiable metric-driven accomplishments.'
  },
  {
    id: 'action_verbs',
    category: 'Content & Impact',
    title: 'Strong Action Verbs (No Passive Voice)',
    description: 'Begin each bullet with active past-tense verbs: Engineered, Optimized, Architected, Spearheaded, Reduced, Automated.',
    weight: 8,
    action: 'Replace "Responsible for" or "Helped with" with decisive action verbs.'
  },
  {
    id: 'skills_matrix',
    category: 'Keywords & Skills',
    title: 'Categorized Technical Skills Section',
    description: 'Group skills by domain: Languages (TypeScript, Go, Python), Frameworks (React, Node.js), Cloud/DevOps (AWS, Docker, K8s), Databases (PostgreSQL, Redis).',
    weight: 9,
    action: 'Cluster keywords into distinct categories so ATS parsers match role requirements.'
  },
  {
    id: 'no_soft_skills_dump',
    category: 'Keywords & Skills',
    title: 'Demonstrate Soft Skills Rather Than Listing Them',
    description: 'Do not write "Problem solver" or "Team player" in skills lists. Show them through collaboration and cross-functional leadership bullets.',
    weight: 6,
    action: 'Eliminate isolated soft-skill buzzwords and embed teamwork into project narratives.'
  },
  {
    id: 'contact_links',
    category: 'Contact & Portfolio',
    title: 'Active LinkedIn & Polished GitHub Links',
    description: 'Include clean URLs to your LinkedIn and GitHub. Only link profiles that showcase active contributions or pinned MVPs.',
    weight: 7,
    action: 'Add full URLs with working HTTPS links to your portfolio and LinkedIn.'
  },
  {
    id: 'date_consistency',
    category: 'Format & Layout',
    title: 'Consistent Date Formats (MM/YYYY)',
    description: 'Use uniform dates like "03/2021 – Present" or "Mar 2021 – Present". Irregular date formatting breaks tenure calculation engines.',
    weight: 6,
    action: 'Standardize all employment date ranges across every role.'
  },
  {
    id: 'no_graphics_photos',
    category: 'Format & Layout',
    title: 'Zero Graphics, Icons, or Headshots',
    description: 'Graphics, star rating bars (e.g. "React: 4/5 stars"), and profile photos often corrupt ATS text scrapers and risk discrimination bias in US/UK/EU hiring.',
    weight: 8,
    action: 'Remove skill proficiency bars, headshots, and embedded logos.'
  },
  {
    id: 'visa_clarity',
    category: 'International Hiring',
    title: 'Clear Relocation & Visa Status Note',
    description: 'Explicitly state: "Seeking relocation opportunities / Requires visa sponsorship" in the header or cover note so recruiters route you properly.',
    weight: 9,
    action: 'Add a subtle 1-line relocation badge in your header.'
  },
  {
    id: 'job_keywords',
    category: 'Keywords & Skills',
    title: 'Tailored Match for Destination Job Postings',
    description: 'Compare your resume with 3 job specs from your target country using keyword tools to ensure technical overlap exceeds 70%.',
    weight: 8,
    action: 'Align phrasing with destination job descriptions (e.g. "CI/CD pipelines", "RESTful microservices").'
  }
];

export const interviewQuestions = [
  {
    id: 'q-intro-1',
    category: 'HR & Introduction',
    title: 'Tell Me About Yourself (The 5-Minute Framework)',
    question: 'Can you walk me through your background and why you\'re interested in this role?',
    strategy: 'Use the Present-Past-Future framework: 1) Who you are & your current core technical focus (1-2 mins), 2) Past technical highlights and scaling challenges (1 min), 3) Why this company and why you are excited to relocate now (1-2 mins).',
    modelAnswer: 'I am a Full-Stack Engineer with over 6 years of experience specializing in scalable TypeScript, React, and Node.js microservices. In my current role at [Company], I led the refactoring of our core payment gateway, reducing p99 latency by 35% across 2M daily transactions. Prior to that, I built high-velocity MVPs from scratch. Outside of work, I\'m deeply passionate about open-source and modern cloud architecture. I\'ve been intentionally planning my move to [Country] because of the thriving tech hub, and your team\'s work on [Specific Product Problem] is the exact distributed systems challenge I\'m eager to tackle.',
    pitfalls: 'Don\'t recite your resume chronologically starting from high school. Avoid generic statements like "I am a hard worker". Keep it under 4-5 minutes.'
  },
  {
    id: 'q-behavioral-star',
    category: 'Behavioral & Culture',
    title: 'Handling Technical Disagreements (STAR Method)',
    question: 'Describe a situation where you had a strong disagreement with an architect or team member on a technical decision. How did you resolve it?',
    strategy: 'Follow STAR: Situation, Task, Action, Result. Focus on data, objective benchmarking, empathy, and collective ownership rather than personal ego.',
    modelAnswer: 'Situation: During a platform redesign, our team debated whether to adopt GraphQL or stick with REST for our mobile client APIs. Task: We needed to settle on an architecture within 2 weeks to avoid delaying sprint deliveries. Action: Rather than relying on opinion, I proposed an objective proof-of-concept benchmark measuring payload size, network overhead on 3G connections, and developer onboarding friction. I presented the metrics openly to the team, highlighting that while GraphQL solved over-fetching, our current caching layer would require a costly rewrite. Result: The team unanimously agreed to adopt a lightweight REST approach with sparse fieldsets. We shipped on schedule and maintained 99.98% uptime.',
    pitfalls: 'Never paint the other person as foolish or stubborn. Show that you can "disagree and commit" gracefully when the team decides.'
  },
  {
    id: 'q-sysdesign-micro',
    category: 'System Design',
    title: 'Designing High-Throughput Event-Driven Systems',
    question: 'How would you architect a distributed notification service that delivers 50,000 real-time alerts per second without dropping messages during peak spikes?',
    strategy: 'Start with clarifying functional vs non-functional requirements. Establish back-of-the-envelope math. Break down components: API Gateway, Rate Limiter, Message Broker (Kafka/RabbitMQ), Worker Pool, Caching (Redis), and Idempotent Consumers.',
    modelAnswer: 'First, I clarify delivery semantics: at-least-once delivery with deduplication is optimal. Architecture: Clients push alerts to an Express/Go API gateway protected by a token-bucket rate limiter. Instead of synchronous processing, events are partitioned into an Apache Kafka or Amazon SQS queue keyed by user ID to guarantee ordering. A cluster of horizontally scaled asynchronous worker nodes consumes from the partitions, batching requests to external push/email gateways. To prevent duplicate notifications, each event carries a unique UUID verified against Redis with a 24-hour TTL before sending. If a downstream provider fails, workers retry with exponential backoff and jitter, directing stubborn errors to a Dead Letter Queue (DLQ) with Prometheus alerting.',
    pitfalls: 'Don\'t jump straight into drawing boxes without clarifying SLA, latency expectations, and failure edge cases.'
  },
  {
    id: 'q-assignment-moscow',
    category: 'Take-Home & Coding',
    title: 'Mastering the MoSCoW Prioritization Framework',
    question: 'When receiving a 48-hour take-home assignment, how do you decide what to implement and what to leave for documentation?',
    strategy: 'Divide requirements into Must-Have (core working happy path + unit tests), Should-Have (input validation, error handling), Could-Have (bonus filters, animations), and Won\'t-Have (production Kubernetes manifests). A clean, well-tested 80% is worth 10x more than a buggy 100%.',
    modelAnswer: 'I strictly apply the MoSCoW model: First, I build and thoroughly test the "Must Have" core business logic using TDD. Second, I implement clean error boundaries, status codes (400, 404, 500), and input validation. Third, rather than rushing through complex optional features, I document them in a dedicated "Production Readiness & Next Steps" section in the README, explaining trade-offs, potential caching layers, DB indexes, and horizontal scaling strategies. Interviewers evaluate architectural judgment, testing habits, and code clarity far more than raw feature count.',
    pitfalls: 'Submitting zero automated tests or skipping the README. Interviewers will instantly reject untested code.'
  },
  {
    id: 'q-reverse-questions',
    category: 'Reverse Interview (Questions to Ask)',
    title: 'Reverse Interview: Strategic Questions for the Hiring Team',
    question: 'What high-signal questions should you ask the engineering director or hiring manager at the end of the interview?',
    strategy: 'Demonstrate that you evaluate the company as an equal peer. Ask about developer ergonomics, technical debt management, incident post-mortems, and on-call culture.',
    modelAnswer: '1. "How does the engineering organization balance roadmap feature delivery against technical debt and architectural refactoring?"\n2. "What does your on-call rotation look like, and how do you handle post-mortems after high-severity incidents?"\n3. "What would a successful first 90 days look like for the engineer stepping into this role?"\n4. "What has surprised engineers the most after relocating to join your team in [City]?"',
    pitfalls: 'Never say "I don\'t have any questions". It signals disinterest or lack of intellectual curiosity.'
  }
];

export const relocationPackageChecklist = [
  {
    id: 'flights',
    item: 'Relocation Flight Reimbursement',
    typicalValue: '100% covered for employee, spouse, and dependents',
    priority: 'Essential',
    tips: 'Ensure tickets include flexible baggage allowances (2-3 checked bags per person).'
  },
  {
    id: 'temporary_housing',
    item: 'Temporary Furnished Accommodation',
    typicalValue: '1 to 2 months furnished corporate apartment or Airbnb',
    priority: 'Essential',
    tips: 'Finding a long-term rental in Amsterdam, London, Dublin, or Berlin takes 4-8 weeks. 60 days is ideal.'
  },
  {
    id: 'relocation_allowance',
    item: 'Settling-In Cash Allowance (Lump Sum)',
    typicalValue: '€3,000 – €8,000 (tax-free or grossed up)',
    priority: 'High',
    tips: 'Used to cover rental deposits (often 2-3 months rent), agency fees, and initial furniture setup.'
  },
  {
    id: 'immigration_legal',
    item: 'Visa & Immigration Legal Services',
    typicalValue: 'All government fees + dedicated immigration attorney',
    priority: 'Essential',
    tips: 'The company should assign an agency (e.g. Fragomen, Deloitte, KPMG) to handle document apostilles and filings.'
  },
  {
    id: 'shipping_allowance',
    item: 'Container / Shipping Allowance',
    typicalValue: '€1,500 – €5,000 or physical moving service',
    priority: 'Medium',
    tips: 'Can often be converted to an extra cash lump sum if you prefer to travel light as a nomad.'
  },
  {
    id: 'tax_consultation',
    item: 'Expat Tax Advisory Session',
    typicalValue: '1-2 hour consultation with certified international CPA',
    priority: 'High',
    tips: 'Crucial for filing the Netherlands 30% ruling, double taxation treaties, or foreign bank reporting.'
  },
  {
    id: 'remote_start',
    item: 'Remote Start Flexibility',
    typicalValue: 'Start 1-3 months remotely prior to visa stamping',
    priority: 'Medium',
    tips: 'Allows you to start earning and integrating with the team while embassy appointments are pending.'
  }
];

export const verifiedJobBoards = [
  {
    name: 'Relocate.me',
    url: 'https://relocate.me/',
    category: 'Relocation Specialist',
    description: 'Every single listing includes visa sponsorship and verified relocation packages.',
    verifiedVisaFilter: true,
    countries: 'Netherlands, Germany, UK, Sweden, Canada, and more'
  },
  {
    name: 'Honeypot.io',
    url: 'https://www.honeypot.io/',
    category: 'Reverse Recruiting',
    description: 'Tech hiring platform where European companies apply to you, with explicit visa filters for Germany, Austria, and Netherlands.',
    verifiedVisaFilter: true,
    countries: 'Germany, Netherlands, Austria, Switzerland'
  },
  {
    name: 'IAmExpat Netherlands',
    url: 'https://www.iamexpat.nl/career/jobs-netherlands',
    category: 'Local Expat Hub',
    description: 'The top English-language job and relocation board for the Netherlands with dedicated expat vacancies.',
    verifiedVisaFilter: true,
    countries: 'Netherlands'
  },
  {
    name: 'Landing.Jobs',
    url: 'https://landing.jobs/',
    category: 'Relocation Specialist',
    description: 'European tech career platform with dedicated relocation assistance and remote-friendly filters.',
    verifiedVisaFilter: true,
    countries: 'Portugal, Spain, Germany, UK, Netherlands'
  },
  {
    name: 'VanHack',
    url: 'https://vanhack.com/',
    category: 'Global Talent Pipeline',
    description: 'Connects global software engineers with tech companies in Canada, Europe, and the US that sponsor visas.',
    verifiedVisaFilter: true,
    countries: 'Canada, Germany, UK, Ireland'
  },
  {
    name: 'Otta (by Welcome to the Jungle)',
    url: 'https://otta.com/',
    category: 'Curated Tech Jobs',
    description: 'Smart job matching platform for high-growth tech startups in London, Berlin, Amsterdam, and New York with visa filters.',
    verifiedVisaFilter: true,
    countries: 'UK, EU, USA'
  }
];
