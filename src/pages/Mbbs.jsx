import React, { useEffect, useRef, useState } from "react";

function useReveal(threshold = 0.08) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0, className = "", style = {} }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(40px)",
      transition: `opacity 0.8s cubic-bezier(.22,1,.36,1) ${delay}ms, transform 0.8s cubic-bezier(.22,1,.36,1) ${delay}ms`,
      ...style,
    }}>{children}</div>
  );
}

const Icons = {
  Pin: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  ChevronLeft: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6"/>
    </svg>
  ),
  ChevronRight: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  ),
  Star: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  Check: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
};

// ── COLLEGE SLIDES ──
const collegeSlides = [
  {
    name: "AIIMS New Delhi",
    location: "New Delhi, India",
    nirf: "1",
    rating: "5.0/5",
    tag: "Central Institute · Premier",
    img: "AIIMS.png",
    bg: "linear-gradient(135deg,#0a1628,#1a3a6e)",
    accent: "#4a90d9",
  },
  {
    name: "JIPMER Puducherry",
    location: "Puducherry, India",
    nirf: "3",
    rating: "4.8/5",
    tag: "Central Institute · NIRF Top 5",
    img: "/JIPMER.png",
    bg: "linear-gradient(135deg,#0f1f0a,#1a4a0d)",
    accent: "#4ade80",
  },
  {
    name: "Christian Medical College",
    location: "Vellore, Tamil Nadu",
    nirf: "4",
    rating: "4.9/5",
    tag: "Deemed University · Legacy",
    img: "/CMC.png",
    bg: "linear-gradient(135deg,#1a0a0a,#6e1a1a)",
    accent: "#f87171",
  },
  {
    name: "Kasturba Medical College",
    location: "Manipal, Karnataka",
    nirf: "6",
    rating: "4.7/5",
    tag: "Deemed · NAAC A+",
    img: "/KMC.png",
    bg: "linear-gradient(135deg,#0f0c29,#302b63)",
    accent: "#a78bfa",
  },
  {
    name: "Sri Venkateswara Medical College",
    location: "Tirupati, Andhra Pradesh",
    nirf: "—",
    rating: "4.2/5",
    tag: "State Government · AP",
    img: "SVMC.png",
    bg: "linear-gradient(135deg,#1a1000,#5a3c00)",
    accent: "#fbbf24",
  },
  {
    name: "Kurnool Medical College",
    location: "Kurnool, Andhra Pradesh",
    nirf: "—",
    rating: "4.0/5",
    tag: "Government · NTRUHS",
    img: "KMC_AP.png",
    bg: "linear-gradient(135deg,#001a2a,#003d5c)",
    accent: "#38bdf8",
  },
  {
    name: "Osmania Medical College",
    location: "Hyderabad, Telangana",
    nirf: "—",
    rating: "4.1/5",
    tag: "Government · Telangana",
    img: "OSMANIA.png",
    bg: "linear-gradient(135deg,#1a0533,#3d1a6e)",
    accent: "#c084fc",
  },
];

// ── AP & TS MEDICAL COLLEGES TABLE ──
const apColleges = [
  { name: "Sri Venkateswara Medical College", loc: "Tirupati", nirf: "—", rating: 4.2, seats: "150", fee: "Govt fees", tag: "Government" },
  { name: "Andhra Medical College", loc: "Visakhapatnam", nirf: "—", rating: 4.3, seats: "250", fee: "Govt fees", tag: "Government" },
  { name: "Kurnool Medical College", loc: "Kurnool", nirf: "—", rating: 4.0, seats: "200", fee: "Govt fees", tag: "Government" },
  { name: "Guntur Medical College", loc: "Guntur", nirf: "—", rating: 4.1, seats: "200", fee: "Govt fees", tag: "Government" },
  { name: "Narayana Medical College", loc: "Nellore", nirf: "—", rating: 4.2, seats: "150", fee: "6–8L/yr", tag: "Private" },
  { name: "Dr. Pinnamaneni Siddhartha", loc: "Vijayawada", nirf: "—", rating: 4.0, seats: "150", fee: "7–9L/yr", tag: "Private" },
  { name: "GSL Medical College", loc: "Rajahmundry", nirf: "—", rating: 4.1, seats: "150", fee: "6–8L/yr", tag: "Private" },
  { name: "NRI Medical College", loc: "Guntur", nirf: "—", rating: 4.0, seats: "150", fee: "8–10L/yr", tag: "Private" },
  { name: "Anil Neerukonda Medical", loc: "Visakhapatnam", nirf: "—", rating: 4.1, seats: "150", fee: "7–9L/yr", tag: "Private" },
  { name: "KL Deemed Medical", loc: "Vijayawada", nirf: "—", rating: 4.2, seats: "100", fee: "9–12L/yr", tag: "Deemed" },
];

const tsColleges = [
  { name: "Osmania Medical College", loc: "Hyderabad", nirf: "—", rating: 4.1, seats: "250", fee: "Govt fees", tag: "Government" },
  { name: "Gandhi Medical College", loc: "Hyderabad", nirf: "—", rating: 4.0, seats: "200", fee: "Govt fees", tag: "Government" },
  { name: "Kakatiya Medical College", loc: "Warangal", nirf: "—", rating: 4.0, seats: "150", fee: "Govt fees", tag: "Government" },
  { name: "Deccan College of Med Sci", loc: "Hyderabad", nirf: "—", rating: 4.1, seats: "150", fee: "8–10L/yr", tag: "Private" },
  { name: "MNR Medical College", loc: "Sangareddy", nirf: "—", rating: 3.9, seats: "150", fee: "7–9L/yr", tag: "Private" },
  { name: "Kamineni Institute of Med Sci", loc: "Nalgonda", nirf: "—", rating: 4.0, seats: "150", fee: "8–11L/yr", tag: "Private" },
  { name: "Apollo Medical College", loc: "Hyderabad", nirf: "—", rating: 4.2, seats: "150", fee: "10–13L/yr", tag: "Private" },
  { name: "Bhaskar Medical College", loc: "Hyderabad", nirf: "—", rating: 3.9, seats: "150", fee: "7–9L/yr", tag: "Private" },
  { name: "Chalmeda Anand Rao", loc: "Karimnagar", nirf: "—", rating: 3.8, seats: "100", fee: "6–8L/yr", tag: "Private" },
  { name: "Malla Reddy Medical College", loc: "Hyderabad", nirf: "—", rating: 4.0, seats: "150", fee: "8–10L/yr", tag: "Private" },
];

// ── SPECIALISATIONS ──
const specialisations = [
  { name: "General Medicine", code: "MD", demand: 96, avg_pkg: "12–40 LPA", jobs: "Physician, Hospitalist, Consultant" },
  { name: "Surgery (General & Specialty)", code: "MS", demand: 94, avg_pkg: "15–60 LPA", jobs: "Surgeon, Laparoscopy, Trauma" },
  { name: "Paediatrics", code: "MD Paed", demand: 90, avg_pkg: "10–35 LPA", jobs: "Neonatologist, Child Specialist" },
  { name: "Obstetrics & Gynaecology", code: "MS OBG", demand: 92, avg_pkg: "12–45 LPA", jobs: "Obstetrician, IVF Specialist" },
  { name: "Radiology & Imaging", code: "MD Radio", demand: 97, avg_pkg: "18–70 LPA", jobs: "Radiologist, Interventional" },
  { name: "Anaesthesiology", code: "MD Anaes", demand: 88, avg_pkg: "14–50 LPA", jobs: "ICU, Pain Management, OT" },
  { name: "Orthopaedics", code: "MS Ortho", demand: 85, avg_pkg: "12–45 LPA", jobs: "Joint Replacement, Sports Med" },
  { name: "Psychiatry", code: "MD Psych", demand: 80, avg_pkg: "10–30 LPA", jobs: "Mental Health, Rehab, Corporate" },
];

// ── ENTRANCE EXAMS ──
const exams = [
  { name: "NEET-UG", body: "NTA", for: "All MBBS seats India", slots: "May", tip: "650+ score needed for govt MBBS" },
  { name: "NEET-PG", body: "NBE", for: "MD/MS/Diploma PG seats", slots: "Mar", tip: "Top 50 percentile for major colleges" },
  { name: "AIIMS PG", body: "AIIMS", for: "AIIMS PG programs only", slots: "Jan & Jul", tip: "Highly competitive — 700+ target" },
  { name: "AP EAMCET (Med)", body: "APSCHE", for: "AP state MBBS quota", slots: "May", tip: "State quota opens after NEET cutoff" },
  { name: "TS EAMCET (Med)", body: "TSCHE", for: "TS state MBBS quota", slots: "May", tip: "Category-wise allotment via counseling" },
  { name: "INI-CET", body: "AIIMS/JIPMER", for: "Central Institutes PG", slots: "Jan & Jul", tip: "Covers AIIMS, JIPMER, PGI, NIMHANS" },
];

// ── APPLY COLLEGES ──
const applyColleges = [
  { name: "AIIMS New Delhi", loc: "New Delhi", nirf: "1", rating: 5.0, tag: "Central", color: "#1e40af", abbr: "AIIMS", fee: "Nominal", deadline: "Jun 2025" },
  { name: "JIPMER", loc: "Puducherry", nirf: "3", rating: 4.8, tag: "Central", color: "#065f46", abbr: "JIPM", fee: "Nominal", deadline: "Jun 2025" },
  { name: "CMC Vellore", loc: "Tamil Nadu", nirf: "4", rating: 4.9, tag: "Deemed", color: "#7c2d12", abbr: "CMC", fee: "Moderate", deadline: "Jun 2025" },
  { name: "Kasturba Medical College", loc: "Manipal", nirf: "6", rating: 4.7, tag: "Deemed", color: "#4c1d95", abbr: "KMC", fee: "8–12L/yr", deadline: "Rolling" },
  { name: "Narayana Medical College", loc: "Nellore, AP", nirf: "—", rating: 4.2, tag: "Private", color: "#0e7490", abbr: "NMC", fee: "6–8L/yr", deadline: "Jul 2025" },
  { name: "Apollo Medical College", loc: "Hyderabad, TS", nirf: "—", rating: 4.2, tag: "Private", color: "#b91c1c", abbr: "AMC", fee: "10–13L/yr", deadline: "Rolling" },
  { name: "Osmania Medical College", loc: "Hyderabad, TS", nirf: "—", rating: 4.1, tag: "Govt", color: "#374151", abbr: "OMC", fee: "Govt fees", deadline: "Jul 2025" },
  { name: "GSL Medical College", loc: "Rajahmundry, AP", nirf: "—", rating: 4.1, tag: "Private", color: "#166534", abbr: "GSL", fee: "6–8L/yr", deadline: "Jul 2025" },
  { name: "Gandhi Medical College", loc: "Hyderabad, TS", nirf: "—", rating: 4.0, tag: "Govt", color: "#1e3a5f", abbr: "GMC", fee: "Govt fees", deadline: "Jul 2025" },
  { name: "Andhra Medical College", loc: "Vizag, AP", nirf: "—", rating: 4.3, tag: "Govt", color: "#4a1d5e", abbr: "AMC", fee: "Govt fees", deadline: "Jul 2025" },
];

// ── COUNSELING STEPS ──
const counselingSteps = [
  { num: "01", title: "NEET Score Analysis", desc: "We evaluate your NEET score, category, domicile, and branch preference to map realistic college options." },
  { num: "02", title: "College Shortlist", desc: "Category-wise cutoff history for 5 years, seat matrix analysis, and your personal priority ranking." },
  { num: "03", title: "Choice Filling Support", desc: "We're present through every round of NEET-UG counseling — MCC, state, deemed, and central." },
  { num: "04", title: "Seat Lock & Joining", desc: "Complete support for fee payment, original document submission, and joining formalities." },
];

// ── MBBS SERVICES (replaces the Services page content) ──
const mbbsServices = [
  {
    id: "01",
    icon: "🩺",
    label: "NEET Counseling",
    title: "Turn Your NEET Score Into the Right Seat",
    tagline: "MCC · State · Deemed · Central Institutes",
    color: "#1a56db",
    desc: "Every NEET rank has a strategy. Our medical admission specialists have guided 3,000+ students through MCC, AP EAMCET, TS EAMCET, and deemed university counseling rounds — with category-wise cutoff data going back 5 years.",
    points: [
      "All-India Quota (AIQ) counseling via MCC",
      "AP & TS state quota counseling support",
      "Deemed university NEET counseling",
      "Choice filling with rank-wise probability",
      "Round-by-round monitoring and upgrades",
      "Stray vacancy round guidance",
    ],
    stat: { num: "3,000+", label: "Students Admitted" },
  },
  {
    id: "02",
    icon: "📋",
    label: "Document & Verification",
    title: "Zero Errors, Zero Delays in Your Documents",
    tagline: "Eligibility · Certificates · NMC Compliance",
    color: "#059669",
    desc: "Medical admissions require exhaustive documentation — from NEET rank cards and domicile certificates to caste verification, NMC eligibility letters, and anti-ragging undertakings. One error can cost your seat. We handle all of it.",
    points: [
      "NEET rank card and score validation",
      "Domicile, category, and income certificate guidance",
      "NMC eligibility and registration support",
      "College-specific checklist preparation",
      "Original document verification accompaniment",
      "Apostille and attestation for abroad admissions",
    ],
    stat: { num: "0", label: "Seat Loss Due to Docs" },
  },
  {
    id: "03",
    icon: "🌍",
    label: "MBBS Abroad",
    title: "World-Class Medical Education at Accessible Cost",
    tagline: "Russia · Philippines · Georgia · Kazakhstan · Ukraine",
    color: "#d97706",
    desc: "For students targeting MBBS abroad, we provide end-to-end support for MCI/NMC-approved universities across 8 countries — from shortlisting to visa, pre-departure briefing, and FMGE/NExT preparation strategy.",
    points: [
      "NMC-approved university shortlisting",
      "Russia, Philippines, Georgia, Kazakhstan, Kyrgyzstan",
      "Visa documentation and embassy interview prep",
      "University application and admission letter",
      "Forex, travel, and accommodation guidance",
      "FMGE/NExT return exam strategy planning",
    ],
    stat: { num: "8", label: "Countries Covered" },
  },
  {
    id: "04",
    icon: "💰",
    label: "Education Loan & Scholarships",
    title: "Finance Your MBBS Without the Anxiety",
    tagline: "14 lenders · Scholarships · Section 80E",
    color: "#7c3aed",
    desc: "Medical education is a long investment. We build a complete funding plan — combining government scholarships, merit waivers, institutional financial aid, and structured loans with the most favourable interest rates available for medical students.",
    points: [
      "14 banking and NBFC loan partners",
      "PM-YASASVI, state medical scholarships",
      "Collateral and non-collateral options",
      "Loan coverage for India and abroad studies",
      "EMI planning and repayment strategy",
      "Section 80E tax benefit advisory",
    ],
    stat: { num: "14", label: "Loan Partners" },
  },
];

export default function MBBS() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [activeTab, setActiveTab] = useState("AP");
  const slideTimer = useRef(null);

  const startTimer = () => {
    clearInterval(slideTimer.current);
    slideTimer.current = setInterval(() => {
      setActiveSlide(p => (p + 1) % collegeSlides.length);
    }, 5000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(slideTimer.current);
  }, []);

  const goSlide = (i) => {
    if (i === activeSlide || animating) return;
    setAnimating(true);
    setActiveSlide(i);
    setTimeout(() => setAnimating(false), 700);
    startTimer();
  };

  const tableData = activeTab === "AP" ? apColleges : tsColleges;
  const fallbackBgs = [
    "linear-gradient(135deg,#0a1628,#1a3a6e)",
    "linear-gradient(135deg,#0f1f0a,#1a4a0d)",
    "linear-gradient(135deg,#1a0a0a,#6e1a1a)",
    "linear-gradient(135deg,#0f0c29,#302b63)",
    "linear-gradient(135deg,#1a1000,#5a3c00)",
    "linear-gradient(135deg,#001a2a,#003d5c)",
    "linear-gradient(135deg,#1a0533,#3d1a6e)",
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        :root {
          --blue: #1a56db;
          --blue-dark: #1442b5;
          --blue-deep: #0d2d6e;
          --blue-light: #e8f0fe;
          --blue-mid: #3b72f0;
          --red: #dc2626;
          --red-light: #ef4444;
          --red-faint: #fef2f2;
          --white: #ffffff;
          --off: #f8faff;
          --gray: #64748b;
          --gray-light: #e2e8f0;
          --text: #0f172a;
          --text2: #334155;
          --radius: 12px;
        }

        .mbbs * { box-sizing: border-box; }
        .mbbs {
          font-family: 'Space Grotesk', sans-serif;
          background: #fff;
          color: var(--text);
          line-height: 1;
        }

        .mbbs-pill {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--blue-light); color: var(--blue);
          font-size: 11px; font-weight: 700; letter-spacing: 0.14em;
          text-transform: uppercase; padding: 6px 16px; border-radius: 100px;
          margin-bottom: 18px;
        }
        .mbbs-pill-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--blue); }
        .mbbs-pill.red { background: var(--red-faint); color: var(--red); }
        .mbbs-pill.red .mbbs-pill-dot { background: var(--red); }
        .mbbs-pill.white { background: rgba(255,255,255,0.12); color: #fff; }
        .mbbs-pill.white .mbbs-pill-dot { background: #fff; }

        /* ══ FULL-SCREEN SLIDES ══ */
        .mbbs-slides {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 560px;
          max-height: 800px;
          overflow: hidden;
          background: #0a1628;
        }
        .mbbs-slide-layer {
          position: absolute; inset: 0; width: 100%; height: 100%;
          transition: opacity 0.7s ease;
        }
        .mbbs-slide-layer.entering { opacity: 1; }
        .mbbs-slide-layer.exiting { opacity: 0; }
        .mbbs-slide-bg-img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center;
        }
        .mbbs-slide-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0.15) 70%, rgba(0,0,0,0.05) 100%);
        }
        .mbbs-slide-fallback { position: absolute; inset: 0; z-index: 0; }
        .mbbs-slide-content {
          position: absolute; bottom: 0; left: 0; right: 0; z-index: 2;
          padding: 48px 72px 110px;
          display: flex; flex-direction: column; align-items: flex-start; gap: 10px;
        }
        .mbbs-slide-tag-badge {
          display: inline-block;
          font-size: 10px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase;
          padding: 5px 14px; border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.3);
          color: rgba(255,255,255,0.85);
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(4px);
          margin-bottom: 4px;
        }
        .mbbs-slide-name {
          font-family: 'Sora', sans-serif;
          font-size: clamp(28px, 4.5vw, 56px);
          font-weight: 800; color: #fff;
          line-height: 1.08; letter-spacing: -0.02em;
          text-shadow: 0 2px 24px rgba(0,0,0,0.4); margin: 0;
        }
        .mbbs-slide-location {
          display: flex; align-items: center; gap: 6px;
          font-size: 14px; color: rgba(255,255,255,0.65); font-weight: 500; margin-top: 2px;
        }
        .mbbs-slide-location svg { opacity: 0.7; flex-shrink: 0; }
        .mbbs-slide-nirf-badge { display: flex; align-items: center; gap: 8px; margin-top: 6px; }
        .mbbs-slide-nirf {
          font-family: 'Sora', sans-serif;
          font-size: 12px; font-weight: 800; letter-spacing: 0.08em;
          padding: 4px 12px; border-radius: 6px;
          background: rgba(220,38,38,0.2);
          border: 1px solid rgba(220,38,38,0.4);
          color: #f87171;
        }
        .mbbs-slide-rating { font-size: 12px; font-weight: 700; color: rgba(255,255,255,0.55); }

        .mbbs-slides-progress { position: absolute; top: 0; left: 0; right: 0; height: 3px; z-index: 20; background: rgba(255,255,255,0.1); }
        .mbbs-slides-progress-bar {
          height: 100%; background: var(--red);
          animation: slideProgress 5s linear infinite;
        }
        @keyframes slideProgress { from { width: 0%; } to { width: 100%; } }

        .mbbs-slides-nav {
          position: absolute; bottom: 32px; left: 72px; right: 72px; z-index: 10;
          display: flex; align-items: center; gap: 14px;
        }
        .mbbs-slides-dots { display: flex; gap: 6px; align-items: center; }
        .mbbs-slides-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: rgba(255,255,255,0.25); cursor: pointer; border: none;
          transition: all 0.3s; padding: 0;
        }
        .mbbs-slides-dot.active { background: var(--red); width: 26px; border-radius: 4px; }
        .mbbs-slides-counter { font-size: 12px; color: rgba(255,255,255,0.35); font-weight: 700; letter-spacing: 0.06em; font-family: 'Sora', sans-serif; }
        .mbbs-slides-arrows { display: flex; gap: 8px; margin-left: auto; }
        .mbbs-slides-arrow {
          width: 42px; height: 42px; border-radius: 50%;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.18);
          color: #fff; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.2s; backdrop-filter: blur(4px);
        }
        .mbbs-slides-arrow:hover { background: var(--red); border-color: var(--red); }
        .mbbs-slides-arrow svg { width: 16px; height: 16px; }

        /* ══ SERVICES ══ */
        .mbbs-services { background: var(--off); padding: 100px 80px; }
        .mbbs-services-h2 {
          font-family: 'Sora', sans-serif; font-size: clamp(26px, 3vw, 40px);
          font-weight: 800; color: var(--text); margin: 0 0 56px; line-height: 1.15;
        }
        .mbbs-services-h2 span { color: var(--blue); }
        .mbbs-svc-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
        .mbbs-svc-card {
          background: #fff; border: 1.5px solid var(--gray-light);
          border-radius: 16px; padding: 36px 32px;
          transition: all 0.3s; position: relative; overflow: hidden;
        }
        .mbbs-svc-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: var(--svc-color, var(--blue));
          transform: scaleX(0); transform-origin: left; transition: transform 0.4s;
        }
        .mbbs-svc-card:hover { border-color: var(--svc-color, var(--blue)); box-shadow: 0 8px 32px rgba(0,0,0,0.10); }
        .mbbs-svc-card:hover::before { transform: scaleX(1); }
        .mbbs-svc-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 20px; }
        .mbbs-svc-icon {
          width: 52px; height: 52px; border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          font-size: 24px; background: var(--blue-light); flex-shrink: 0;
        }
        .mbbs-svc-stat { text-align: right; }
        .mbbs-svc-stat-num {
          font-family: 'Sora', sans-serif; font-size: 28px; font-weight: 800;
          line-height: 1; color: var(--svc-color, var(--blue));
        }
        .mbbs-svc-stat-label {
          font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--gray); margin-top: 3px;
        }
        .mbbs-svc-label {
          font-size: 10px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase;
          color: var(--svc-color, var(--blue)); margin-bottom: 8px;
        }
        .mbbs-svc-title {
          font-family: 'Sora', sans-serif; font-size: 18px; font-weight: 700;
          color: var(--text); margin-bottom: 12px; line-height: 1.3;
        }
        .mbbs-svc-tagline {
          font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--gray); margin-bottom: 16px;
        }
        .mbbs-svc-desc { font-size: 13.5px; color: var(--text2); line-height: 1.75; margin-bottom: 24px; }
        .mbbs-svc-divider { height: 1px; background: var(--gray-light); margin-bottom: 20px; }
        .mbbs-svc-points { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; }
        .mbbs-svc-point { display: flex; align-items: flex-start; gap: 10px; font-size: 13px; color: var(--text2); line-height: 1.5; }
        .mbbs-svc-check {
          width: 20px; height: 20px; border-radius: 50%; flex-shrink: 0; margin-top: 1px;
          display: flex; align-items: center; justify-content: center;
          background: var(--blue-light); color: var(--blue);
        }

        /* ══ TABLE ══ */
        .mbbs-table-section { background: #fff; padding: 100px 80px; border-bottom: 1px solid var(--gray-light); }
        .mbbs-table-tabs {
          display: flex; gap: 0; border: 1.5px solid var(--gray-light);
          border-radius: 10px; overflow: hidden; margin-bottom: 32px; max-width: 320px;
        }
        .mbbs-table-tab {
          flex: 1; padding: 12px 24px; background: #fff; border: none; cursor: pointer;
          font-family: 'Sora', sans-serif; font-size: 13px; font-weight: 700;
          color: var(--gray); transition: all 0.2s; border-right: 1.5px solid var(--gray-light);
        }
        .mbbs-table-tab:last-child { border-right: none; }
        .mbbs-table-tab.active { background: var(--blue-deep); color: #fff; }

        .mbbs-table { width: 100%; border-collapse: collapse; }
        .mbbs-table thead th {
          font-size: 10px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--gray); padding: 12px 16px; border-bottom: 2px solid var(--gray-light);
          text-align: left; background: var(--off);
        }
        .mbbs-table tbody tr { border-bottom: 1px solid var(--gray-light); transition: background 0.15s; }
        .mbbs-table tbody tr:hover { background: var(--off); }
        .mbbs-table tbody td { padding: 14px 16px; font-size: 13.5px; color: var(--text2); }
        .mbbs-table-name { font-weight: 700; color: var(--text); }
        .mbbs-table-tag {
          display: inline-block; font-size: 9.5px; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          padding: 3px 9px; border-radius: 4px; margin-left: 8px;
        }
        .mbbs-table-tag.govt { background: #f0fdf4; color: #166534; }
        .mbbs-table-tag.private { background: var(--red-faint); color: #991b1b; }
        .mbbs-table-tag.deemed { background: var(--blue-light); color: var(--blue-dark); }
        .mbbs-table-stars { display: flex; gap: 2px; color: #f97316; }
        .mbbs-table-nirf { font-family: 'Sora', sans-serif; font-size: 13px; font-weight: 700; color: var(--blue); }

        /* ══ SPECIALISATIONS ══ */
        .mbbs-specs { background: var(--off); padding: 100px 80px; }
        .mbbs-specs-h2 {
          font-family: 'Sora', sans-serif; font-size: clamp(26px, 3vw, 40px);
          font-weight: 800; color: var(--text); margin: 0 0 48px; line-height: 1.15;
        }
        .mbbs-specs-h2 span { color: var(--blue); }
        .mbbs-specs-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        .mbbs-spec-card {
          background: #fff; border: 1.5px solid var(--gray-light); border-radius: var(--radius);
          padding: 24px 28px; transition: all 0.25s;
        }
        .mbbs-spec-card:hover { border-color: var(--blue); box-shadow: 0 6px 24px rgba(26,86,219,0.10); }
        .mbbs-spec-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
        .mbbs-spec-code {
          font-family: 'Sora', sans-serif; font-size: 11px; font-weight: 800;
          letter-spacing: 0.14em; color: var(--blue); background: var(--blue-light);
          padding: 4px 10px; border-radius: 6px;
        }
        .mbbs-spec-demand { font-size: 12px; font-weight: 700; color: var(--gray); }
        .mbbs-spec-name { font-family: 'Sora', sans-serif; font-size: 15px; font-weight: 700; color: var(--text); margin-bottom: 10px; }
        .mbbs-spec-bar-bg { background: var(--gray-light); border-radius: 4px; height: 4px; margin-bottom: 12px; }
        .mbbs-spec-bar { height: 4px; border-radius: 4px; background: linear-gradient(90deg, var(--blue), var(--red)); }
        .mbbs-spec-meta { display: flex; gap: 20px; }
        .mbbs-spec-meta-item label { font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gray); display: block; margin-bottom: 2px; }
        .mbbs-spec-meta-item span { font-size: 12px; font-weight: 600; color: var(--text2); }

        /* ══ EXAMS ══ */
        .mbbs-exams { background: var(--blue-deep); padding: 100px 80px; }
        .mbbs-exams-h2 {
          font-family: 'Sora', sans-serif; font-size: clamp(26px, 3vw, 40px);
          font-weight: 800; color: #fff; margin: 0 0 48px; line-height: 1.15;
        }
        .mbbs-exams-h2 span { color: #f87171; }
        .mbbs-exams-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .mbbs-exam-card {
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08);
          border-radius: var(--radius); padding: 28px 24px;
          transition: background 0.2s; position: relative; overflow: hidden;
        }
        .mbbs-exam-card::after {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: #f87171; transform: scaleX(0); transform-origin: left; transition: transform 0.35s;
        }
        .mbbs-exam-card:hover { background: rgba(255,255,255,0.08); }
        .mbbs-exam-card:hover::after { transform: scaleX(1); }
        .mbbs-exam-name { font-family: 'Sora', sans-serif; font-size: 18px; font-weight: 800; color: #fff; margin-bottom: 6px; }
        .mbbs-exam-body { font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #f87171; margin-bottom: 14px; }
        .mbbs-exam-row { display: flex; justify-content: space-between; margin-bottom: 6px; }
        .mbbs-exam-row label { font-size: 11px; color: rgba(255,255,255,0.35); font-weight: 600; }
        .mbbs-exam-row span { font-size: 12px; color: rgba(255,255,255,0.7); font-weight: 600; }
        .mbbs-exam-tip {
          margin-top: 16px; padding: 10px 14px; border-radius: 8px;
          background: rgba(248,113,113,0.12); border: 1px solid rgba(248,113,113,0.2);
          font-size: 12px; color: rgba(255,255,255,0.65); line-height: 1.5;
          display: flex; align-items: flex-start; gap: 8px;
        }

        /* ══ APPLY ══ */
        .mbbs-apply { background: #fff; padding: 100px 80px; }
        .mbbs-apply-h2 {
          font-family: 'Sora', sans-serif; font-size: clamp(26px, 3vw, 40px);
          font-weight: 800; color: var(--text); margin: 0 0 48px; line-height: 1.15;
        }
        .mbbs-apply-h2 span { color: var(--blue); }
        .mbbs-apply-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
        .mbbs-apply-card {
          border: 1.5px solid var(--gray-light); border-radius: var(--radius);
          padding: 22px 24px; background: #fff;
          display: flex; align-items: center; justify-content: space-between; gap: 20px;
          transition: all 0.25s; position: relative; overflow: hidden;
        }
        .mbbs-apply-card::before {
          content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
          background: var(--blue); transform: scaleY(0); transform-origin: bottom; transition: transform 0.3s;
        }
        .mbbs-apply-card:hover { border-color: var(--blue); box-shadow: 0 4px 20px rgba(26,86,219,0.10); }
        .mbbs-apply-card:hover::before { transform: scaleY(1); }
        .mbbs-apply-left { display: flex; align-items: center; gap: 14px; }
        .mbbs-apply-logo {
          width: 44px; height: 44px; border-radius: 8px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Sora', sans-serif; font-size: 10px; font-weight: 800; color: #fff;
        }
        .mbbs-apply-name { font-family: 'Sora', sans-serif; font-size: 14px; font-weight: 700; color: var(--text); margin-bottom: 3px; }
        .mbbs-apply-meta { font-size: 12px; color: var(--gray); }
        .mbbs-apply-right { display: flex; flex-direction: column; align-items: flex-end; gap: 6px; flex-shrink: 0; }
        .mbbs-apply-fee { font-size: 12px; font-weight: 600; color: var(--text2); }
        .mbbs-apply-deadline { font-size: 10px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--red); }
        .mbbs-apply-btn {
          font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
          background: var(--blue); color: #fff; border: none;
          padding: 8px 18px; border-radius: 6px; cursor: pointer;
          transition: background 0.2s; text-decoration: none; display: inline-block;
        }
        .mbbs-apply-btn:hover { background: var(--blue-dark); }
        .mbbs-apply-nirf {
          font-family: 'Sora', sans-serif; font-size: 11px; font-weight: 800;
          color: var(--blue); background: var(--blue-light); padding: 2px 8px; border-radius: 4px;
        }

        /* ══ COUNSELING ══ */
        .mbbs-counsel { background: var(--off); padding: 100px 80px; }
        .mbbs-counsel-h2 {
          font-family: 'Sora', sans-serif; font-size: clamp(26px, 3vw, 40px);
          font-weight: 800; color: var(--text); margin: 0 0 48px; line-height: 1.15;
        }
        .mbbs-counsel-h2 span { color: var(--blue); }
        .mbbs-counsel-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        .mbbs-counsel-card {
          background: #fff; border: 1.5px solid var(--gray-light);
          border-radius: var(--radius); padding: 28px 24px;
          position: relative; transition: all 0.25s;
        }
        .mbbs-counsel-card::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, var(--blue), var(--red));
          border-radius: 0 0 var(--radius) var(--radius);
          transform: scaleX(0); transform-origin: left; transition: transform 0.35s;
        }
        .mbbs-counsel-card:hover { border-color: var(--blue); box-shadow: 0 6px 24px rgba(26,86,219,0.10); }
        .mbbs-counsel-card:hover::after { transform: scaleX(1); }
        .mbbs-counsel-num {
          font-family: 'Sora', sans-serif; font-size: 36px; font-weight: 800;
          color: var(--blue-light); line-height: 1; margin-bottom: 14px; letter-spacing: -0.04em;
        }
        .mbbs-counsel-title { font-family: 'Sora', sans-serif; font-size: 15px; font-weight: 700; color: var(--text); margin-bottom: 8px; }
        .mbbs-counsel-desc { font-size: 13px; color: var(--gray); line-height: 1.65; }

        /* ══ STATS BANNER ══ */
        .mbbs-stats { background: var(--blue-deep); padding: 60px 80px; }
        .mbbs-stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; }
        .mbbs-stat-item {
          text-align: center; padding: 0 20px;
          border-right: 1px solid rgba(255,255,255,0.1);
        }
        .mbbs-stat-item:last-child { border-right: none; }
        .mbbs-stat-num {
          font-family: 'Sora', sans-serif; font-size: 40px; font-weight: 800;
          color: #fff; line-height: 1; margin-bottom: 8px; letter-spacing: -0.04em;
        }
        .mbbs-stat-num span { color: #f87171; }
        .mbbs-stat-label { font-size: 12px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: rgba(255,255,255,0.45); }

        /* ══ CTA ══ */
        .mbbs-cta {
          background: var(--blue-deep); padding: 80px 80px;
          text-align: center; position: relative; overflow: hidden;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .mbbs-cta-circle {
          position: absolute; bottom: -150px; left: 50%; transform: translateX(-50%);
          width: 600px; height: 300px; border-radius: 50%;
          background: rgba(220,38,38,0.07); pointer-events: none;
        }
        .mbbs-cta-h2 {
          font-family: 'Sora', sans-serif; font-size: clamp(28px, 4vw, 48px);
          font-weight: 800; color: #fff; margin: 0 0 16px; line-height: 1.1; position: relative; z-index: 1;
        }
        .mbbs-cta-h2 span { color: #f87171; }
        .mbbs-cta-sub { font-size: 15px; color: rgba(255,255,255,0.55); margin: 0 0 36px; max-width: 520px; margin-left: auto; margin-right: auto; position: relative; z-index: 1; line-height: 1.7; }
        .mbbs-cta-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; position: relative; z-index: 1; }
        .mbbs-btn-primary {
          font-family: 'Sora', sans-serif; font-size: 12px; font-weight: 700;
          letter-spacing: 0.07em; text-transform: uppercase;
          background: var(--red); color: #fff; border: none;
          padding: 14px 32px; border-radius: 8px; cursor: pointer;
          transition: all 0.2s; text-decoration: none; display: inline-block;
          box-shadow: 0 4px 20px rgba(220,38,38,0.35);
        }
        .mbbs-btn-primary:hover { background: var(--red-light); transform: translateY(-2px); }
        .mbbs-btn-outline {
          font-family: 'Sora', sans-serif; font-size: 12px; font-weight: 700;
          letter-spacing: 0.07em; text-transform: uppercase;
          background: transparent; color: #fff;
          border: 1.5px solid rgba(255,255,255,0.3); padding: 13px 28px;
          border-radius: 8px; cursor: pointer; transition: all 0.2s;
          text-decoration: none; display: inline-block;
        }
        .mbbs-btn-outline:hover { border-color: #f87171; color: #f87171; }

        .mbbs-wave { display: block; line-height: 0; margin-bottom: -2px; }

        /* ══ RESPONSIVE ══ */
        @media (max-width: 1024px) {
          .mbbs-slide-content { padding: 40px 48px 100px; }
          .mbbs-slides-nav { left: 48px; right: 48px; }
          .mbbs-services, .mbbs-table-section, .mbbs-specs, .mbbs-exams, .mbbs-apply, .mbbs-counsel, .mbbs-cta, .mbbs-stats { padding: 80px 48px; }
          .mbbs-exams-grid { grid-template-columns: 1fr 1fr; }
          .mbbs-counsel-grid { grid-template-columns: 1fr 1fr; }
          .mbbs-stats-grid { grid-template-columns: repeat(2, 1fr); gap: 32px; }
          .mbbs-stat-item { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 32px; }
        }
        @media (max-width: 768px) {
          .mbbs-slides { height: 80vh; min-height: 480px; max-height: 650px; }
          .mbbs-slide-content { padding: 28px 24px 90px; }
          .mbbs-slides-nav { left: 24px; right: 24px; bottom: 24px; }
          .mbbs-slide-name { font-size: clamp(22px, 6vw, 36px); }
          .mbbs-services, .mbbs-table-section, .mbbs-specs, .mbbs-exams, .mbbs-apply, .mbbs-counsel, .mbbs-cta, .mbbs-stats { padding: 64px 24px; }
          .mbbs-svc-grid, .mbbs-specs-grid, .mbbs-apply-grid { grid-template-columns: 1fr; }
          .mbbs-exams-grid, .mbbs-counsel-grid { grid-template-columns: 1fr; }
          .mbbs-stats-grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      <div className="mbbs">

        {/* ══ FULL-SCREEN COLLEGE SLIDES ══ */}
        <section className="mbbs-slides">
          <div className="mbbs-slides-progress" key={activeSlide}>
            <div className="mbbs-slides-progress-bar" />
          </div>

          {collegeSlides.map((s, i) => (
            <div
              key={i}
              className={`mbbs-slide-layer ${i === activeSlide ? "entering" : "exiting"}`}
              style={{ pointerEvents: i === activeSlide ? "auto" : "none" }}
            >
              <div className="mbbs-slide-fallback" style={{ background: fallbackBgs[i % fallbackBgs.length] }} />
              <img
                className="mbbs-slide-bg-img"
                src={s.img}
                alt={s.name}
                onError={e => { e.target.style.display = "none"; }}
              />
              <div className="mbbs-slide-overlay" />
              <div className="mbbs-slide-content">
                <span className="mbbs-slide-tag-badge">{s.tag}</span>
                <h2 className="mbbs-slide-name">{s.name}</h2>
                <div className="mbbs-slide-location">
                  <Icons.Pin />
                  {s.location}
                </div>
                <div className="mbbs-slide-nirf-badge">
                  {s.nirf !== "—" && <span className="mbbs-slide-nirf">NIRF #{s.nirf}</span>}
                  <span className="mbbs-slide-rating">★ {s.rating}</span>
                </div>
              </div>
            </div>
          ))}

          <div className="mbbs-slides-nav">
            <div className="mbbs-slides-dots">
              {collegeSlides.map((_, i) => (
                <button key={i} className={`mbbs-slides-dot${activeSlide === i ? " active" : ""}`} onClick={() => goSlide(i)} />
              ))}
            </div>
            <span className="mbbs-slides-counter">
              {String(activeSlide + 1).padStart(2, "0")} / {String(collegeSlides.length).padStart(2, "0")}
            </span>
            <div className="mbbs-slides-arrows">
              <button className="mbbs-slides-arrow" onClick={() => goSlide((activeSlide - 1 + collegeSlides.length) % collegeSlides.length)}>
                <Icons.ChevronLeft />
              </button>
              <button className="mbbs-slides-arrow" onClick={() => goSlide((activeSlide + 1) % collegeSlides.length)}>
                <Icons.ChevronRight />
              </button>
            </div>
          </div>
        </section>

        {/* ══ STATS BANNER ══ */}
        <section className="mbbs-stats">
          <Reveal>
            <div className="mbbs-stats-grid">
              {[
                { num: "3,000", suffix: "+", label: "Students Admitted" },
                { num: "98", suffix: "%", label: "Top-Choice Seat Rate" },
                { num: "18", suffix: "", label: "States & Countries" },
                { num: "14", suffix: "", label: "Loan Partners" },
              ].map((s, i) => (
                <div key={i} className="mbbs-stat-item">
                  <div className="mbbs-stat-num">{s.num}<span>{s.suffix}</span></div>
                  <div className="mbbs-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ══ MBBS SERVICES ══ */}
        <section className="mbbs-services">
          <Reveal>
            <div className="mbbs-pill"><div className="mbbs-pill-dot" /> Our MBBS Services</div>
            <h2 className="mbbs-services-h2">Everything You Need, <span>Under One Roof</span></h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="mbbs-svc-grid">
              {mbbsServices.map((svc, i) => (
                <div
                  key={svc.id}
                  className="mbbs-svc-card"
                  style={{ "--svc-color": svc.color }}
                >
                  <div className="mbbs-svc-header">
                    <div className="mbbs-svc-icon">{svc.icon}</div>
                    <div className="mbbs-svc-stat">
                      <div className="mbbs-svc-stat-num">{svc.stat.num}</div>
                      <div className="mbbs-svc-stat-label">{svc.stat.label}</div>
                    </div>
                  </div>
                  <div className="mbbs-svc-label">{svc.label}</div>
                  <div className="mbbs-svc-title">{svc.title}</div>
                  <div className="mbbs-svc-tagline">{svc.tagline}</div>
                  <div className="mbbs-svc-desc">{svc.desc}</div>
                  <div className="mbbs-svc-divider" />
                  <ul className="mbbs-svc-points">
                    {svc.points.map((pt, j) => (
                      <li key={j} className="mbbs-svc-point">
                        <span className="mbbs-svc-check"><Icons.Check /></span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ══ AP & TS COLLEGES TABLE ══ */}
        <section className="mbbs-table-section">
          <Reveal>
            <div className="mbbs-pill"><div className="mbbs-pill-dot" /> Colleges by State</div>
            <h2 className="mbbs-specs-h2" style={{fontFamily:"'Sora',sans-serif",fontSize:"clamp(26px,3vw,40px)",fontWeight:800,color:"var(--text)",margin:"0 0 32px",lineHeight:1.15}}>
              AP & TS <span style={{color:"var(--blue)"}}>Medical Colleges</span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="mbbs-table-tabs">
              <button className={`mbbs-table-tab${activeTab === "AP" ? " active" : ""}`} onClick={() => setActiveTab("AP")}>
                Andhra Pradesh
              </button>
              <button className={`mbbs-table-tab${activeTab === "TS" ? " active" : ""}`} onClick={() => setActiveTab("TS")}>
                Telangana
              </button>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table className="mbbs-table">
                <thead>
                  <tr>
                    <th>College</th>
                    <th>Location</th>
                    <th>NIRF Rank</th>
                    <th>Rating</th>
                    <th>MBBS Seats</th>
                    <th>Annual Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((c, i) => (
                    <tr key={i}>
                      <td>
                        <span className="mbbs-table-name">{c.name}</span>
                        <span className={`mbbs-table-tag ${c.tag === "Government" ? "govt" : c.tag === "Deemed" ? "deemed" : "private"}`}>
                          {c.tag}
                        </span>
                      </td>
                      <td>{c.loc}</td>
                      <td><span className="mbbs-table-nirf">{c.nirf}</span></td>
                      <td>
                        <div className="mbbs-table-stars">
                          {[...Array(5)].map((_, j) => (
                            <span key={j} style={{ opacity: j < Math.round(c.rating) ? 1 : 0.2 }}><Icons.Star /></span>
                          ))}
                          <span style={{ fontSize: "12px", color: "var(--gray)", marginLeft: "4px" }}>{c.rating}</span>
                        </div>
                      </td>
                      <td>{c.seats}</td>
                      <td style={{ color: "var(--blue)", fontWeight: 600 }}>{c.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </section>

        {/* ══ PG SPECIALISATIONS ══ */}
        <section className="mbbs-specs">
          <Reveal>
            <div className="mbbs-pill"><div className="mbbs-pill-dot" /> After MBBS</div>
            <h2 className="mbbs-specs-h2">
              Top PG <span>Specialisations</span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="mbbs-specs-grid">
              {specialisations.map((b, i) => (
                <div key={i} className="mbbs-spec-card">
                  <div className="mbbs-spec-top">
                    <span className="mbbs-spec-code">{b.code}</span>
                    <span className="mbbs-spec-demand">Demand: {b.demand}/100</span>
                  </div>
                  <div className="mbbs-spec-name">{b.name}</div>
                  <div className="mbbs-spec-bar-bg">
                    <div className="mbbs-spec-bar" style={{ width: `${b.demand}%` }} />
                  </div>
                  <div className="mbbs-spec-meta">
                    <div className="mbbs-spec-meta-item">
                      <label>Avg Package</label>
                      <span>{b.avg_pkg}</span>
                    </div>
                    <div className="mbbs-spec-meta-item">
                      <label>Top Roles</label>
                      <span>{b.jobs}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ══ WAVE ══ */}
        <svg className="mbbs-wave" viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", background: "var(--blue-deep)" }}>
          <path d="M0 0 C480 48 960 0 1440 48 L1440 48 L0 48 Z" fill="var(--off)" />
        </svg>

        {/* ══ ENTRANCE EXAMS ══ */}
        <section className="mbbs-exams">
          <Reveal>
            <div className="mbbs-pill red"><div className="mbbs-pill-dot" /> Entrance Exams</div>
            <h2 className="mbbs-exams-h2">Key Exams to <span>Know & Clear</span></h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="mbbs-exams-grid">
              {exams.map((ex, i) => (
                <div key={i} className="mbbs-exam-card">
                  <div className="mbbs-exam-name">{ex.name}</div>
                  <div className="mbbs-exam-body">{ex.body}</div>
                  <div className="mbbs-exam-row">
                    <label>For</label>
                    <span>{ex.for}</span>
                  </div>
                  <div className="mbbs-exam-row">
                    <label>Window</label>
                    <span>{ex.slots}</span>
                  </div>
                  <div className="mbbs-exam-tip">
                    <span style={{ color: "#f87171", flexShrink: 0 }}>💡</span>
                    {ex.tip}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ══ WAVE ══ */}
        <svg className="mbbs-wave" viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", background: "#fff" }}>
          <path d="M0 48 C480 0 960 48 1440 0 L1440 0 L0 0 Z" fill="var(--blue-deep)" />
        </svg>

        {/* ══ APPLY SECTION ══ */}
        <section className="mbbs-apply">
          <Reveal>
            <div className="mbbs-pill"><div className="mbbs-pill-dot" /> Apply Now</div>
            <h2 className="mbbs-apply-h2">Top Colleges <span>Open for Applications</span></h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="mbbs-apply-grid">
              {applyColleges.map((c, i) => (
                <div key={i} className="mbbs-apply-card">
                  <div className="mbbs-apply-left">
                    <div className="mbbs-apply-logo" style={{ background: c.color }}>{c.abbr}</div>
                    <div>
                      <div className="mbbs-apply-name">{c.name}</div>
                      <div className="mbbs-apply-meta">
                        {c.loc} &nbsp;·&nbsp;
                        <span className="mbbs-apply-nirf">NIRF {c.nirf}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mbbs-apply-right">
                    <div className="mbbs-apply-fee">{c.fee}</div>
                    <div className="mbbs-apply-deadline">Deadline: {c.deadline}</div>
                    <a href="/contact" className="mbbs-apply-btn">Apply</a>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ══ COUNSELING STEPS ══ */}
        <section className="mbbs-counsel">
          <Reveal>
            <div className="mbbs-pill"><div className="mbbs-pill-dot" /> Our Process</div>
            <h2 className="mbbs-counsel-h2">How We Guide Your <span>NEET Counseling</span></h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="mbbs-counsel-grid">
              {counselingSteps.map((s, i) => (
                <div key={i} className="mbbs-counsel-card">
                  <div className="mbbs-counsel-num">{s.num}</div>
                  <div className="mbbs-counsel-title">{s.title}</div>
                  <div className="mbbs-counsel-desc">{s.desc}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ══ CTA ══ */}
        <section className="mbbs-cta">
          <div className="mbbs-cta-circle" />
          <Reveal>
            <div className="mbbs-pill red" style={{ justifyContent: "center" }}><div className="mbbs-pill-dot" /> Get Started</div>
            <h2 className="mbbs-cta-h2">Your MBBS Seat.<br /><span>Secured with Data.</span></h2>
            <p className="mbbs-cta-sub">
              Book a free counseling session. We'll analyse your NEET score, build your college shortlist, and be present through every round of counseling.
            </p>
            <div className="mbbs-cta-btns">
              <a href="/contact" className="mbbs-btn-primary">Book Free Counseling</a>
              <a href="/about" className="mbbs-btn-outline">About Maharsh</a>
            </div>
          </Reveal>
        </section>

      </div>
    </>
  );
}