# RelocateTech

> ✈️ The open-source navigator, verified sponsor directory, net salary simulator, and interview mastery platform for tech professionals landing international jobs with visa sponsorship.

[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg?style=flat-square)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-20%2B-teal.svg?style=flat-square)](https://nodejs.org)
[![Zero Dependencies](https://img.shields.io/badge/Dependencies-0-success.svg?style=flat-square)](package.json)
[![Tests Passing](https://img.shields.io/badge/Tests-9%2F9%20Passing-brightgreen.svg?style=flat-square)](tests/relocate.test.js)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-blue.svg?style=flat-square)](https://github.com/aeskafi/relocatetech/pulls)

---

## ⚡ What is RelocateTech?

Relocating internationally as a software engineer or tech specialist should not require thousands of dollars in immigration consultant fees or guesswork. **RelocateTech** transforms raw relocation knowledge into an interactive, zero-dependency Web Application and developer roadmap designed to help engineers:

1. Target verified sponsor countries (Netherlands, Germany, UK, Sweden, Canada, Switzerland, Ireland, Spain, Denmark).
2. Connect directly with **Verified Sponsoring Tech Employers** (Booking.com, Adyen, ASML, Spotify, Klarna, Uber, Stripe, Miro).
3. Simulate **Net Take-Home Pay & Expat Tax Relief** (Dutch 30% ruling, Spanish Beckham Law, German Class 1) against real city rent prices.
4. Pass automated ATS screening with an interactive 13-point scoring checklist, Google XYZ bullet transformer, and exportable report.
5. Master technical take-home assignments with the **MoSCoW Prioritization Framework** and behavioral rounds with the **STAR Method**.
6. Evaluate and negotiate 100% covered expat relocation packages (flights, temporary housing, settling-in allowance, and tax perks).

<p align="center">
  <img src="files/job_offer.jpg" alt="RelocateTech Overview" width="700" style="border-radius: 12px;" />
</p>

---

## ✨ Features

- 🗺️ **Interactive Country & Visa Sponsorship Matrix**:
  - Filter by EU vs Non-EU, tech dev salary benchmarks, minimum salary legal thresholds, visa processing speed, and English proficiency.
  - Direct links to official government registers of licensed sponsoring employers (IND Netherlands, UK Home Office, Germany Make-it-in-Germany, Denmark SIRI).
- 🏢 **Verified Sponsoring Tech Companies Directory**:
  - Direct database of top-tier engineering organizations known for sponsoring work permits (Booking.com, Adyen, ASML, Spotify, Klarna, Delivery Hero, Zalando, Stripe, Databricks, Miro, Personio).
  - Inspect exact relocation packages, primary tech stacks, visa categories, and active careers portals.
- 🧮 **Relocation Net Salary & Expense Simulator**:
  - Calculate realistic monthly take-home net pay in EUR, GBP, or CHF.
  - Factor in real expat tax schemes (Dutch 30% Ruling, Spanish Beckham Law, UK National Insurance, Swiss cantonal rates).
  - Compare estimated net income against average 1-bed apartment rental costs in Amsterdam, Berlin, London, Zurich, and Dublin to project monthly discretionary savings.
- 📄 **Interactive ATS Resume Readiness Auditor**:
  - Dynamic 13-point checklist measuring single-column compliance, keyword clustering, and date standardization.
  - Live percentage score meter with color-coded feedback and persistent `localStorage` progress saving.
  - **Google XYZ Bullet Transformer**: Convert weak task descriptions into high-converting metrics-driven bullets (`Accomplished [X] as measured by [Y] by doing [Z]`).
  - **1-Click ATS Audit Report Exporter**: Copy a structured markdown breakdown of your resume score and pending action items.
- ⏱️ **2-Minute Elevator Pitch Trainer**:
  - Interactive pacing timer with automated milestone cues (Core Stack -> Top Technical Win -> Motivation to Relocate).
- 🎯 **Interview Mastery & Question Bank**:
  - Structured frameworks for 5-minute introductions, behavioral conflict resolution (STAR), event-driven system design architectures, and take-home assignments (MoSCoW).
  - Reverse interview strategy: high-signal questions to ask engineering directors and managers.
- 💼 **Expat Relocation & Package Evaluator**:
  - Standard expat benefit checklist (flight reimbursement, 30-60 days corporate housing, visa attorney fees, settling-in stipend).
  - Automated **Relocation Negotiation Email Generator** with 1-click copy.
- 📚 **Curated Visa-Sponsoring Job Boards**:
  - Direct access to platforms requiring verified relocation packages (Relocate.me, Honeypot, IAmExpat, Landing.Jobs, VanHack, Otta).
- 🚀 **Zero-Dependency Architecture**:
  - Built with native modern Node.js and a responsive Tailwind dashboard. Starts in under 50ms with zero `npm install` footprint required.
  - Can be served via `node server.js`, opened directly as `index.html` in any browser, or deployed to GitHub Pages with 1 click.

---

## 🚀 Quickstart

### 1. Clone the Repository

```bash
git clone https://github.com/aeskafi/relocatetech.git
cd relocatetech
```

### 2. Launch the Application

Zero dependencies needed! Run with native Node.js:

```bash
npm start
```

*Or run directly:*
```bash
node server.js
```

### 3. Open in Your Browser

Navigate to **[http://localhost:3000](http://localhost:3000)** to explore the interactive dashboard.

> Alternatively, you can double-click `index.html` in any modern web browser for instant standalone usage without running a server.

---

## 🧪 Running Automated Tests

Run the automated Node.js native test suite:

```bash
npm test
```

Outputs:
```text
✔ GET /api/health returns ok status
✔ GET /api/data returns complete dataset including sponsors
✔ GET /api/countries returns validated countries array
✔ GET /api/companies returns verified sponsoring tech employers
✔ GET / serves the RelocateTech dashboard HTML with all tabs
✔ Data integrity: ATS checklist items have valid weight and fields
✔ Data integrity: Interview questions have complete response models
✔ Data integrity: Sponsoring employers have valid data structure
✔ Static files routing serves files/ directory assets
ℹ tests 9 | pass 9 | fail 0
```

---

## 🧭 The 5-Step Relocation Framework

```text
[Step 1: Research]    ---> Inspect official sponsor registers (IND, UK Gov) & tax relief (30% ruling)
         │
[Step 2: Resume Audit] ---> Run 13-point ATS check & apply Google XYZ formula
         │
[Step 3: Outreach]     ---> Target verified platforms (Relocate.me, Honeypot) & geo-targeted LinkedIn
         │
[Step 4: Interview]    ---> Deliver 5-min intro, apply STAR behavioral method & MoSCoW coding test
         │
[Step 5: Relocate]     ---> Negotiate flights, temporary housing & visa legal coverage before signing
```

---

## 📁 Repository Structure

```text
relocatetech/
├── index.html                 # Standalone web app (GitHub Pages ready)
├── server.js                  # Zero-dependency native Node.js HTTP server & API
├── package.json               # Project manifest, test scripts & metadata
├── data/
│   └── relocationData.js      # Curated dataset (countries, sponsors, ATS audit, perks)
├── public/
│   └── index.html             # Responsive Tailwind CSS interactive web studio
├── tests/
│   └── relocate.test.js       # Native Node.js test runner test suite
├── files/                     # Infographics, architectural charts & flow diagrams
└── README.md                  # Comprehensive documentation
```

---

## 👨‍💻 Author & Mission

Maintained and curated by **[Arham Eskafi](https://arham.dev)** — Rapid MVP Specialist and Tech Nomad documenting the overland expedition across the globe on **[Walk Cook Live](https://youtube.com/@walkcooklive)**.

Originally created with heart by **[Ario (Coditori)](https://github.com/coditori)** to help talented professionals achieve international mobility and career freedom.

---

## 📄 License

Distributed under the [MIT License](LICENSE). Contributions, translations, and country updates are warmly welcomed!
