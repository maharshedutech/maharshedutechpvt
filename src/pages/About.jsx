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
  Check: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
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
  Pin: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  ),
};

// ── COLLEGE SLIDES (7 featured) ──
const collegeSlides = [
  {
    name: "VIT-AP University",
    location: "Amaravati, Andhra Pradesh",
    nirf: "41",
    rating: "4.3/5",
    tag: "Deemed University",
    highlight: "World-class research infrastructure & 100% placement assistance",
    branches: ["CSE", "AI & ML", "ECE", "Mechanical", "Civil", "Data Science"],
    img: "/VITAP.png",
    bg: "linear-gradient(135deg, #0a1628 0%, #1a3a6e 60%, #0d2d6e 100%)",
    accent: "#4a90d9",
  },
  {
    name: "VR Siddhartha Engineering College",
    location: "Vijayawada, Andhra Pradesh",
    nirf: "101-150",
    rating: "4.2/5",
    tag: "Autonomous · NAAC A+",
    highlight: "One of AP's most respected autonomous engineering institutions",
    branches: ["CSE", "ECE", "EEE", "Mechanical", "Civil", "IT"],
    img: "/VR.png",
    bg: "linear-gradient(135deg, #0f0c29 0%, #302b63 60%, #24243e 100%)",
    accent: "#a78bfa",
  },
  {
    name: "Lakki Reddy Bali Reddy College",
    location: "Mylavaram, Andhra Pradesh",
    nirf: "—",
    rating: "4.0/5",
    tag: "JNTUK Affiliated",
    highlight: "Strong rural outreach with quality technical education",
    branches: ["CSE", "ECE", "EEE", "Mechanical", "Civil", "MBA"],
    img: "/LAKKI REDDY.png",
    bg: "linear-gradient(135deg, #1a0533 0%, #3d1a6e 60%, #2d1060 100%)",
    accent: "#c084fc",
  },
  {
    name: "Vishnu Institute of Technology",
    location: "Bhimavaram, Andhra Pradesh",
    nirf: "101-150",
    rating: "4.1/5",
    tag: "Autonomous · NAAC A",
    highlight: "Industry-aligned curriculum with strong placement record",
    branches: ["CSE", "IT", "ECE", "EEE", "Mechanical", "Chemical"],
    img: "/VISHNU.png",
    bg: "linear-gradient(135deg, #003322 0%, #005c3b 60%, #004d32 100%)",
    accent: "#34d399",
  },
  {
    name: "Apollo University",
    location: "Chittoor, Andhra Pradesh",
    nirf: "—",
    rating: "4.0/5",
    tag: "Private University",
    highlight: "Healthcare-tech integrated engineering programs",
    branches: ["CSE", "ECE", "Biomedical", "AI & ML", "Civil", "Mechanical"],
    img: "/APOLLO.png",
    bg: "linear-gradient(135deg, #1a0a00 0%, #7c2d12 60%, #9a3412 100%)",
    accent: "#fb923c",
  },
  {
    name: "SRM University AP",
    location: "Amaravati, Andhra Pradesh",
    nirf: "51",
    rating: "4.4/5",
    tag: "Private University",
    highlight: "Top research output & global academic collaborations",
    branches: ["CSE", "AI & ML", "ECE", "Mechanical", "Civil", "Biotechnology"],
    img: "/SRM AP.png",
    bg: "linear-gradient(135deg, #0a0a1a 0%, #1e1b4b 60%, #312e81 100%)",
    accent: "#818cf8",
  },
  {
    name: "GITAM University",
    location: "Visakhapatnam, Andhra Pradesh",
    nirf: "61",
    rating: "4.2/5",
    tag: "Deemed University",
    highlight: "Established research culture with strong industry connections",
    branches: ["CSE", "ECE", "EEE", "Mechanical", "Civil", "Chemical"],
    img: "/GITAM.png",
    bg: "linear-gradient(135deg, #0f1923 0%, #1a3344 60%, #0d2233 100%)",
    accent: "#38bdf8",
  },
];

// ── AP & TS ENGINEERING COLLEGES ──
const apColleges = [
  { name: "VIT-AP University", loc: "Amaravati", nirf: "41", rating: 4.3, seats: "2,400+", fee: "1.5–2.2L/yr", tag: "Top Ranked" },
  { name: "SRM AP", loc: "Amaravati", nirf: "51", rating: 4.4, seats: "1,800+", fee: "1.8–2.5L/yr", tag: "Top Ranked" },
  { name: "GITAM University", loc: "Vizag", nirf: "61", rating: 4.2, seats: "2,200+", fee: "1.2–1.8L/yr", tag: "Deemed" },
  { name: "Andhra University", loc: "Vizag", nirf: "72", rating: 4.0, seats: "3,000+", fee: "0.3–0.6L/yr", tag: "State Univ" },
  { name: "VR Siddhartha EC", loc: "Vijayawada", nirf: "101-150", rating: 4.2, seats: "900+", fee: "0.6–0.9L/yr", tag: "Autonomous" },
  { name: "Vishnu Inst of Tech", loc: "Bhimavaram", nirf: "101-150", rating: 4.1, seats: "1,200+", fee: "0.5–0.8L/yr", tag: "Autonomous" },
  { name: "KL University", loc: "Vijayawada", nirf: "33", rating: 4.3, seats: "4,000+", fee: "1.2–1.6L/yr", tag: "Deemed" },
  { name: "LBRCE", loc: "Mylavaram", nirf: "—", rating: 4.0, seats: "600+", fee: "0.4–0.6L/yr", tag: "Affiliated" },
  { name: "Apollo University", loc: "Chittoor", nirf: "—", rating: 4.0, seats: "800+", fee: "0.8–1.2L/yr", tag: "Private" },
  { name: "Vignan University", loc: "Guntur", nirf: "81", rating: 4.1, seats: "2,000+", fee: "0.9–1.3L/yr", tag: "Deemed" },
];

const tsColleges = [
  { name: "JNTU Hyderabad", loc: "Hyderabad", nirf: "101-150", rating: 4.0, seats: "3,500+", fee: "0.2–0.4L/yr", tag: "State Univ" },
  { name: "BITS Pilani Hyd", loc: "Hyderabad", nirf: "26", rating: 4.6, seats: "900+", fee: "4.5–5.5L/yr", tag: "Top Ranked" },
  { name: "IIIT Hyderabad", loc: "Hyderabad", nirf: "8", rating: 4.8, seats: "300+", fee: "3.0–4.0L/yr", tag: "Top Ranked" },
  { name: "Osmania University", loc: "Hyderabad", nirf: "91", rating: 4.0, seats: "2,800+", fee: "0.2–0.4L/yr", tag: "State Univ" },
  { name: "Mahindra University", loc: "Hyderabad", nirf: "—", rating: 4.3, seats: "600+", fee: "3.5–4.5L/yr", tag: "Private" },
  { name: "VNR VJIET", loc: "Hyderabad", nirf: "101-150", rating: 4.2, seats: "1,200+", fee: "0.7–1.0L/yr", tag: "Autonomous" },
  { name: "SR Engineering", loc: "Warangal", nirf: "—", rating: 4.0, seats: "900+", fee: "0.4–0.7L/yr", tag: "Autonomous" },
  { name: "RGUKT Basar", loc: "Basar", nirf: "—", rating: 3.9, seats: "1,800+", fee: "0.1–0.2L/yr", tag: "State" },
  { name: "Chaitanya Bharathi", loc: "Hyderabad", nirf: "—", rating: 4.1, seats: "1,400+", fee: "0.5–0.8L/yr", tag: "Autonomous" },
  { name: "CVR College", loc: "Hyderabad", nirf: "—", rating: 4.1, seats: "1,000+", fee: "0.6–0.9L/yr", tag: "Autonomous" },
];

// ── EXAMS ──
const exams = [
  { name: "JEE Main", body: "NTA", for: "NITs, IIITs, Central Univ.", slots: "Jan & Apr", tip: "Aim 90+ percentile for good NITs" },
  { name: "JEE Advanced", body: "IIT", for: "IITs only", slots: "May", tip: "Top 2.5L from JEE Main qualify" },
  { name: "EAPCET (AP)", body: "APSCHE", for: "All AP Engineering", slots: "May", tip: "Cutoff varies by branch & category" },
  { name: "TGEAPCET (TS)", body: "TSCHE", for: "All TS Engineering", slots: "May", tip: "State counseling via TSCHE" },
  { name: "BITSAT", body: "BITS Pilani", for: "BITS campuses", slots: "May", tip: "Score 300+ for CS branches" },
  { name: "VITEEE", body: "VIT", for: "VIT campuses", slots: "Apr", tip: "Top 5K rank for CSE Vellore" },
];

// ── TOP BRANCHES ──
const branches = [
  { name: "Computer Science & Engineering", code: "CSE", demand: 98, avg_pkg: "8–22 LPA", jobs: "Software Dev, Product, SDE" },
  { name: "AI & Machine Learning", code: "AI/ML", demand: 96, avg_pkg: "10–28 LPA", jobs: "ML Engineer, Data Scientist" },
  { name: "Electronics & Communication", code: "ECE", demand: 82, avg_pkg: "5–15 LPA", jobs: "VLSI, Embedded, Telecom" },
  { name: "Electrical & Electronics", code: "EEE", demand: 70, avg_pkg: "4–12 LPA", jobs: "Power, Core Infra, PSU" },
  { name: "Mechanical Engineering", code: "MECH", demand: 65, avg_pkg: "4–10 LPA", jobs: "Manufacturing, Auto, Defence" },
  { name: "Civil Engineering", code: "CIVIL", demand: 60, avg_pkg: "3–9 LPA", jobs: "Infra, Govt, Real Estate" },
  { name: "Data Science", code: "DS", demand: 94, avg_pkg: "9–24 LPA", jobs: "Analytics, BI, Research" },
  { name: "Information Technology", code: "IT", demand: 90, avg_pkg: "7–18 LPA", jobs: "Systems, Dev, Consulting" },
];

// ── APPLY CARDS (10) ──
const applyColleges = [
  { name: "IIIT Hyderabad", loc: "Hyderabad, TS", nirf: "8", rating: 4.8, tag: "Premier", color: "#7c3aed", abbr: "IIITH", fee: "3.0–4.0L/yr", deadline: "May 2025" },
  { name: "BITS Pilani Hyd", loc: "Hyderabad, TS", nirf: "26", rating: 4.6, tag: "Top Ranked", color: "#b91c1c", abbr: "BITS", fee: "4.5–5.5L/yr", deadline: "May 2025" },
  { name: "KL University", loc: "Vijayawada, AP", nirf: "33", rating: 4.3, tag: "Deemed", color: "#c59a00", abbr: "KLU", fee: "1.2–1.6L/yr", deadline: "May 2025" },
  { name: "VIT-AP University", loc: "Amaravati, AP", nirf: "41", rating: 4.3, tag: "Top Ranked", color: "#1e40af", abbr: "VITAP", fee: "1.5–2.2L/yr", deadline: "Rolling" },
  { name: "SRM AP", loc: "Amaravati, AP", nirf: "51", rating: 4.4, tag: "Private", color: "#4338ca", abbr: "SRM", fee: "1.8–2.5L/yr", deadline: "Rolling" },
  { name: "GITAM", loc: "Vizag, AP", nirf: "61", rating: 4.2, tag: "Deemed", color: "#0e7490", abbr: "GITAM", fee: "1.2–1.8L/yr", deadline: "Jun 2025" },
  { name: "Vignan University", loc: "Guntur, AP", nirf: "81", rating: 4.1, tag: "Deemed", color: "#065f46", abbr: "VU", fee: "0.9–1.3L/yr", deadline: "Jun 2025" },
  { name: "VR Siddhartha", loc: "Vijayawada, AP", nirf: "101+", rating: 4.2, tag: "Autonomous", color: "#92400e", abbr: "VRSC", fee: "0.6–0.9L/yr", deadline: "Jul 2025" },
  { name: "Mahindra University", loc: "Hyderabad, TS", nirf: "—", rating: 4.3, tag: "Private", color: "#1d4ed8", abbr: "MU", fee: "3.5–4.5L/yr", deadline: "Rolling" },
  { name: "Vishnu Inst of Tech", loc: "Bhimavaram, AP", nirf: "101+", rating: 4.1, tag: "Autonomous", color: "#166534", abbr: "VITS", fee: "0.5–0.8L/yr", deadline: "Jul 2025" },
];

// ── COUNSELING STEPS ──
const counselingSteps = [
  { num: "01", title: "Rank Analysis", desc: "We analyse your JEE/EAPCET rank, category, home state quota & branch preference." },
  { num: "02", title: "College Shortlist", desc: "Data-driven shortlist of 8–12 colleges with historical cutoff trends." },
  { num: "03", title: "Choice Filling", desc: "Present during every JOSAA, EAPCET & TGEAPCET round — optimised order." },
  { num: "04", title: "Seat Lock & Fees", desc: "We guide fee payment, document submission & seat confirmation." },
];

export default function Engineering() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(null);
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
    setPrevSlide(activeSlide);
    setAnimating(true);
    setActiveSlide(i);
    setTimeout(() => { setPrevSlide(null); setAnimating(false); }, 700);
    startTimer();
  };

  const slide = collegeSlides[activeSlide];
  const tableData = activeTab === "AP" ? apColleges : tsColleges;

  // Fallback gradient backgrounds (used as bg when image fails)
  const fallbackBgs = [
    "linear-gradient(135deg,#0a1628,#1a3a6e)",
    "linear-gradient(135deg,#0f0c29,#302b63)",
    "linear-gradient(135deg,#1a0533,#3d1a6e)",
    "linear-gradient(135deg,#003322,#005c3b)",
    "linear-gradient(135deg,#1a0a00,#7c2d12)",
    "linear-gradient(135deg,#0a0a1a,#312e81)",
    "linear-gradient(135deg,#0f1923,#1a3344)",
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
          --orange: #f97316;
          --orange-light: #fb923c;
          --orange-faint: #fff4ed;
          --white: #ffffff;
          --off: #f8faff;
          --gray: #64748b;
          --gray-light: #e2e8f0;
          --text: #0f172a;
          --text2: #334155;
          --radius: 12px;
        }

        .eng * { box-sizing: border-box; }
        .eng {
          font-family: 'Space Grotesk', sans-serif;
          background: #fff; color: var(--text); line-height: 1;
        }
        .eng-sora { font-family: 'Sora', sans-serif; }

        .eng-pill {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--blue-light); color: var(--blue);
          font-size: 11px; font-weight: 700; letter-spacing: 0.14em;
          text-transform: uppercase; padding: 6px 16px; border-radius: 100px;
          margin-bottom: 18px;
        }
        .eng-pill-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--blue); }
        .eng-pill.orange { background: var(--orange-faint); color: var(--orange); }
        .eng-pill.orange .eng-pill-dot { background: var(--orange); }
        .eng-pill.white { background: rgba(255,255,255,0.12); color: #fff; }
        .eng-pill.white .eng-pill-dot { background: #fff; }

        /* ══ FULL-SCREEN SLIDES ══ */
        .eng-slides {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 560px;
          max-height: 800px;
          overflow: hidden;
          background: #0a1628;
        }

        /* Each slide is a full-screen layer */
        .eng-slide-layer {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          transition: opacity 0.7s ease;
        }
        .eng-slide-layer.entering { opacity: 1; }
        .eng-slide-layer.exiting { opacity: 0; }

        /* Full-bleed background image */
        .eng-slide-bg-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        /* Gradient overlay so text is readable */
        .eng-slide-overlay {
          position: absolute;
          inset: 0;
          /* strong bottom-left gradient for text legibility */
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.82) 0%,
            rgba(0,0,0,0.45) 40%,
            rgba(0,0,0,0.15) 70%,
            rgba(0,0,0,0.05) 100%
          );
        }

        /* Fallback colour bg shown when image errors */
        .eng-slide-fallback {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        /* Content sits above overlay */
        .eng-slide-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 2;
          padding: 48px 72px 110px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
        }

        .eng-slide-tag-badge {
          display: inline-block;
          font-size: 10px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase;
          padding: 5px 14px; border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.3);
          color: rgba(255,255,255,0.85);
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(4px);
          margin-bottom: 4px;
        }

        .eng-slide-college-name {
          font-family: 'Sora', sans-serif;
          font-size: clamp(28px, 4.5vw, 56px);
          font-weight: 800;
          color: #fff;
          line-height: 1.08;
          letter-spacing: -0.02em;
          text-shadow: 0 2px 24px rgba(0,0,0,0.4);
          margin: 0;
        }

        .eng-slide-location {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          color: rgba(255,255,255,0.65);
          font-weight: 500;
          margin-top: 2px;
        }
        .eng-slide-location svg { opacity: 0.7; flex-shrink: 0; }

        /* NIRF badge */
        .eng-slide-nirf-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 6px;
        }
        .eng-slide-nirf {
          font-family: 'Sora', sans-serif;
          font-size: 12px; font-weight: 800; letter-spacing: 0.08em;
          padding: 4px 12px; border-radius: 6px;
          background: rgba(249,115,22,0.18);
          border: 1px solid rgba(249,115,22,0.35);
          color: #fb923c;
        }
        .eng-slide-rating {
          font-size: 12px; font-weight: 700; color: rgba(255,255,255,0.55);
        }

        /* ── Navigation bar at bottom ── */
        .eng-slides-nav {
          position: absolute;
          bottom: 32px;
          left: 72px;
          right: 72px;
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .eng-slides-dots { display: flex; gap: 6px; align-items: center; }
        .eng-slides-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: rgba(255,255,255,0.25); cursor: pointer; border: none;
          transition: all 0.3s; padding: 0;
        }
        .eng-slides-dot.active {
          background: var(--orange); width: 26px; border-radius: 4px;
        }
        .eng-slides-counter {
          font-size: 12px; color: rgba(255,255,255,0.35); font-weight: 700;
          letter-spacing: 0.06em; font-family: 'Sora', sans-serif;
        }
        .eng-slides-arrows { display: flex; gap: 8px; margin-left: auto; }
        .eng-slides-arrow {
          width: 42px; height: 42px; border-radius: 50%;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.18);
          color: #fff; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.2s; backdrop-filter: blur(4px);
        }
        .eng-slides-arrow:hover { background: var(--orange); border-color: var(--orange); }
        .eng-slides-arrow svg { width: 16px; height: 16px; }

        /* Progress bar */
        .eng-slides-progress {
          position: absolute;
          top: 0; left: 0; right: 0; height: 3px; z-index: 20;
          background: rgba(255,255,255,0.1);
        }
        .eng-slides-progress-bar {
          height: 100%;
          background: var(--orange);
          transition: width 0.1s linear;
          animation: slideProgress 5s linear infinite;
        }
        @keyframes slideProgress {
          from { width: 0%; }
          to { width: 100%; }
        }

        /* ══ AP & TS TABLE ══ */
        .eng-table-section {
          background: #fff; padding: 100px 80px;
          border-bottom: 1px solid var(--gray-light);
        }
        .eng-table-tabs {
          display: flex; gap: 0; border: 1.5px solid var(--gray-light);
          border-radius: 10px; overflow: hidden; margin-bottom: 32px;
          max-width: 320px;
        }
        .eng-table-tab {
          flex: 1; padding: 12px 24px; background: #fff;
          border: none; cursor: pointer; font-family: 'Sora', sans-serif;
          font-size: 13px; font-weight: 700; color: var(--gray);
          transition: all 0.2s; border-right: 1.5px solid var(--gray-light);
        }
        .eng-table-tab:last-child { border-right: none; }
        .eng-table-tab.active { background: var(--blue-deep); color: #fff; }

        .eng-table { width: 100%; border-collapse: collapse; }
        .eng-table thead th {
          font-size: 10px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--gray); padding: 12px 16px; border-bottom: 2px solid var(--gray-light);
          text-align: left; background: var(--off);
        }
        .eng-table tbody tr { border-bottom: 1px solid var(--gray-light); transition: background 0.15s; }
        .eng-table tbody tr:hover { background: var(--off); }
        .eng-table tbody td { padding: 14px 16px; font-size: 13.5px; color: var(--text2); }
        .eng-table-name { font-weight: 700; color: var(--text); }
        .eng-table-tag {
          display: inline-block; font-size: 9.5px; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          padding: 3px 9px; border-radius: 4px; margin-left: 8px;
        }
        .eng-table-tag.top { background: #fef3c7; color: #92400e; }
        .eng-table-tag.deemed { background: var(--blue-light); color: var(--blue-dark); }
        .eng-table-tag.state { background: #f0fdf4; color: #166534; }
        .eng-table-tag.auto { background: #fdf4ff; color: #7e22ce; }
        .eng-table-tag.private { background: var(--orange-faint); color: #c2410c; }
        .eng-table-stars { display: flex; gap: 2px; color: var(--orange); }
        .eng-table-nirf {
          font-family: 'Sora', sans-serif; font-size: 13px; font-weight: 700;
          color: var(--blue);
        }

        /* ══ BRANCHES ══ */
        .eng-branches { background: var(--off); padding: 100px 80px; }
        .eng-branches-h2 {
          font-family: 'Sora', sans-serif; font-size: clamp(26px, 3vw, 40px);
          font-weight: 800; color: var(--text); margin: 0 0 48px; line-height: 1.15;
        }
        .eng-branches-h2 span { color: var(--blue); }
        .eng-branches-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        .eng-branch-card {
          background: #fff; border: 1.5px solid var(--gray-light); border-radius: var(--radius);
          padding: 24px 28px; transition: all 0.25s; position: relative;
        }
        .eng-branch-card:hover { border-color: var(--blue); box-shadow: 0 6px 24px rgba(26,86,219,0.10); }
        .eng-branch-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
        .eng-branch-code {
          font-family: 'Sora', sans-serif; font-size: 11px; font-weight: 800;
          letter-spacing: 0.14em; color: var(--blue); background: var(--blue-light);
          padding: 4px 10px; border-radius: 6px;
        }
        .eng-branch-demand { font-size: 12px; font-weight: 700; color: var(--gray); }
        .eng-branch-name {
          font-family: 'Sora', sans-serif; font-size: 15px; font-weight: 700;
          color: var(--text); margin-bottom: 10px;
        }
        .eng-branch-bar-bg { background: var(--gray-light); border-radius: 4px; height: 4px; margin-bottom: 12px; }
        .eng-branch-bar { height: 4px; border-radius: 4px; background: linear-gradient(90deg, var(--blue), var(--orange)); }
        .eng-branch-meta { display: flex; gap: 20px; }
        .eng-branch-meta-item label { font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gray); display: block; margin-bottom: 2px; }
        .eng-branch-meta-item span { font-size: 12px; font-weight: 600; color: var(--text2); }

        /* ══ EXAMS ══ */
        .eng-exams { background: var(--blue-deep); padding: 100px 80px; }
        .eng-exams-h2 {
          font-family: 'Sora', sans-serif; font-size: clamp(26px, 3vw, 40px);
          font-weight: 800; color: #fff; margin: 0 0 48px; line-height: 1.15;
        }
        .eng-exams-h2 span { color: var(--orange); }
        .eng-exams-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .eng-exam-card {
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08);
          border-radius: var(--radius); padding: 28px 24px;
          transition: background 0.2s; position: relative; overflow: hidden;
        }
        .eng-exam-card::after {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: var(--orange); transform: scaleX(0); transform-origin: left; transition: transform 0.35s;
        }
        .eng-exam-card:hover { background: rgba(255,255,255,0.08); }
        .eng-exam-card:hover::after { transform: scaleX(1); }
        .eng-exam-name {
          font-family: 'Sora', sans-serif; font-size: 18px; font-weight: 800;
          color: #fff; margin-bottom: 6px;
        }
        .eng-exam-body { font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--orange); margin-bottom: 14px; }
        .eng-exam-row { display: flex; justify-content: space-between; margin-bottom: 6px; }
        .eng-exam-row label { font-size: 11px; color: rgba(255,255,255,0.35); font-weight: 600; }
        .eng-exam-row span { font-size: 12px; color: rgba(255,255,255,0.7); font-weight: 600; }
        .eng-exam-tip {
          margin-top: 16px; padding: 10px 14px; border-radius: 8px;
          background: rgba(249,115,22,0.12); border: 1px solid rgba(249,115,22,0.2);
          font-size: 12px; color: rgba(255,255,255,0.65); line-height: 1.5;
          display: flex; align-items: flex-start; gap: 8px;
        }
        .eng-exam-tip-icon { color: var(--orange); flex-shrink: 0; font-size: 14px; margin-top: 1px; }

        /* ══ APPLY SECTION ══ */
        .eng-apply { background: #fff; padding: 100px 80px; }
        .eng-apply-h2 {
          font-family: 'Sora', sans-serif; font-size: clamp(26px, 3vw, 40px);
          font-weight: 800; color: var(--text); margin: 0 0 48px; line-height: 1.15;
        }
        .eng-apply-h2 span { color: var(--blue); }
        .eng-apply-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
        .eng-apply-card {
          border: 1.5px solid var(--gray-light); border-radius: var(--radius);
          padding: 22px 24px; background: #fff;
          display: flex; align-items: center; justify-content: space-between; gap: 20px;
          transition: all 0.25s; position: relative; overflow: hidden;
        }
        .eng-apply-card::before {
          content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
          background: var(--blue); transform: scaleY(0); transform-origin: bottom; transition: transform 0.3s;
        }
        .eng-apply-card:hover { border-color: var(--blue); box-shadow: 0 4px 20px rgba(26,86,219,0.10); }
        .eng-apply-card:hover::before { transform: scaleY(1); }
        .eng-apply-left { display: flex; align-items: center; gap: 14px; }
        .eng-apply-logo {
          width: 44px; height: 44px; border-radius: 8px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Sora', sans-serif; font-size: 10px; font-weight: 800; color: #fff;
        }
        .eng-apply-name { font-family: 'Sora', sans-serif; font-size: 14px; font-weight: 700; color: var(--text); margin-bottom: 3px; }
        .eng-apply-meta { font-size: 12px; color: var(--gray); }
        .eng-apply-right { display: flex; flex-direction: column; align-items: flex-end; gap: 6px; flex-shrink: 0; }
        .eng-apply-fee { font-size: 12px; font-weight: 600; color: var(--text2); }
        .eng-apply-deadline { font-size: 10px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--orange); }
        .eng-apply-btn {
          font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
          background: var(--blue); color: #fff; border: none;
          padding: 8px 18px; border-radius: 6px; cursor: pointer;
          transition: background 0.2s; text-decoration: none; display: inline-block;
        }
        .eng-apply-btn:hover { background: var(--blue-dark); }
        .eng-apply-nirf {
          font-family: 'Sora', sans-serif; font-size: 11px; font-weight: 800;
          color: var(--blue); background: var(--blue-light);
          padding: 2px 8px; border-radius: 4px;
        }

        /* ══ COUNSELING ══ */
        .eng-counsel { background: var(--off); padding: 100px 80px; }
        .eng-counsel-h2 {
          font-family: 'Sora', sans-serif; font-size: clamp(26px, 3vw, 40px);
          font-weight: 800; color: var(--text); margin: 0 0 48px; line-height: 1.15;
        }
        .eng-counsel-h2 span { color: var(--blue); }
        .eng-counsel-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        .eng-counsel-card {
          background: #fff; border: 1.5px solid var(--gray-light);
          border-radius: var(--radius); padding: 28px 24px;
          position: relative; transition: all 0.25s;
        }
        .eng-counsel-card::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, var(--blue), var(--orange));
          border-radius: 0 0 var(--radius) var(--radius);
          transform: scaleX(0); transform-origin: left; transition: transform 0.35s;
        }
        .eng-counsel-card:hover { border-color: var(--blue); box-shadow: 0 6px 24px rgba(26,86,219,0.10); }
        .eng-counsel-card:hover::after { transform: scaleX(1); }
        .eng-counsel-num {
          font-family: 'Sora', sans-serif; font-size: 36px; font-weight: 800;
          color: var(--blue-light); line-height: 1; margin-bottom: 14px; letter-spacing: -0.04em;
        }
        .eng-counsel-title {
          font-family: 'Sora', sans-serif; font-size: 15px; font-weight: 700;
          color: var(--text); margin-bottom: 8px;
        }
        .eng-counsel-desc { font-size: 13px; color: var(--gray); line-height: 1.65; }

        /* ══ CTA ══ */
        .eng-cta {
          background: var(--blue-deep); padding: 80px 80px;
          text-align: center; position: relative; overflow: hidden;
        }
        .eng-cta-circle {
          position: absolute; bottom: -150px; left: 50%; transform: translateX(-50%);
          width: 600px; height: 300px; border-radius: 50%;
          background: rgba(249,115,22,0.07); pointer-events: none;
        }
        .eng-cta-h2 {
          font-family: 'Sora', sans-serif; font-size: clamp(28px, 4vw, 48px);
          font-weight: 800; color: #fff; margin: 0 0 16px; line-height: 1.1;
          position: relative; z-index: 1;
        }
        .eng-cta-h2 span { color: var(--orange); }
        .eng-cta-sub { font-size: 15px; color: rgba(255,255,255,0.55); margin: 0 0 36px; max-width: 520px; margin-left: auto; margin-right: auto; position: relative; z-index: 1; line-height: 1.7; }
        .eng-cta-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; position: relative; z-index: 1; }

        .eng-btn-primary {
          font-family: 'Sora', sans-serif; font-size: 12px; font-weight: 700;
          letter-spacing: 0.07em; text-transform: uppercase;
          background: var(--orange); color: #fff; border: none;
          padding: 14px 32px; border-radius: 8px; cursor: pointer;
          transition: all 0.2s; text-decoration: none; display: inline-block;
          box-shadow: 0 4px 20px rgba(249,115,22,0.35);
        }
        .eng-btn-primary:hover { background: var(--orange-light); transform: translateY(-2px); }
        .eng-btn-outline {
          font-family: 'Sora', sans-serif; font-size: 12px; font-weight: 700;
          letter-spacing: 0.07em; text-transform: uppercase;
          background: transparent; color: #fff;
          border: 1.5px solid rgba(255,255,255,0.3); padding: 13px 28px;
          border-radius: 8px; cursor: pointer; transition: all 0.2s;
          text-decoration: none; display: inline-block;
        }
        .eng-btn-outline:hover { border-color: var(--orange); color: var(--orange); }

        /* ══ WAVE ══ */
        .eng-wave { display: block; line-height: 0; margin-bottom: -2px; }

        /* ══ RESPONSIVE ══ */
        @media (max-width: 1024px) {
          .eng-slide-content { padding: 40px 48px 100px; }
          .eng-slides-nav { left: 48px; right: 48px; }
          .eng-table-section, .eng-branches, .eng-exams, .eng-apply, .eng-counsel, .eng-cta { padding: 80px 48px; }
          .eng-exams-grid { grid-template-columns: 1fr 1fr; }
          .eng-counsel-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 768px) {
          .eng-slides { height: 80vh; min-height: 480px; max-height: 650px; }
          .eng-slide-content { padding: 28px 24px 90px; }
          .eng-slides-nav { left: 24px; right: 24px; bottom: 24px; }
          .eng-slide-college-name { font-size: clamp(22px, 6vw, 36px); }
          .eng-table-section, .eng-branches, .eng-exams, .eng-apply, .eng-counsel, .eng-cta { padding: 64px 24px; }
          .eng-branches-grid { grid-template-columns: 1fr; }
          .eng-exams-grid { grid-template-columns: 1fr; }
          .eng-apply-grid { grid-template-columns: 1fr; }
          .eng-counsel-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="eng">

        {/* ══ FULL-SCREEN COLLEGE IMAGE SLIDES ══ */}
        <section className="eng-slides">
          {/* Progress bar animation key resets on slide change */}
          <div className="eng-slides-progress" key={activeSlide}>
            <div className="eng-slides-progress-bar" />
          </div>

          {collegeSlides.map((s, i) => (
            <div
              key={i}
              className={`eng-slide-layer ${i === activeSlide ? 'entering' : 'exiting'}`}
              style={{ pointerEvents: i === activeSlide ? 'auto' : 'none' }}
            >
              {/* Fallback gradient background */}
              <div
                className="eng-slide-fallback"
                style={{ background: fallbackBgs[i % fallbackBgs.length] }}
              />

              {/* Full-bleed image */}
              <img
                className="eng-slide-bg-img"
                src={s.img}
                alt={s.name}
                onError={e => { e.target.style.display = 'none'; }}
              />

              {/* Dark gradient overlay */}
              <div className="eng-slide-overlay" />

              {/* Text content — name + location only */}
              <div className="eng-slide-content">
                <span className="eng-slide-tag-badge">{s.tag}</span>

                <h2 className="eng-slide-college-name">{s.name}</h2>

                <div className="eng-slide-location">
                  <Icons.Pin />
                  {s.location}
                </div>

                <div className="eng-slide-nirf-badge">
                  {s.nirf !== "—" && (
                    <span className="eng-slide-nirf">NIRF #{s.nirf}</span>
                  )}
                  <span className="eng-slide-rating">★ {s.rating}</span>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation */}
          <div className="eng-slides-nav">
            <div className="eng-slides-dots">
              {collegeSlides.map((_, i) => (
                <button
                  key={i}
                  className={`eng-slides-dot${activeSlide === i ? ' active' : ''}`}
                  onClick={() => goSlide(i)}
                />
              ))}
            </div>
            <span className="eng-slides-counter">
              {String(activeSlide + 1).padStart(2, '0')} / {String(collegeSlides.length).padStart(2, '0')}
            </span>
            <div className="eng-slides-arrows">
              <button className="eng-slides-arrow" onClick={() => goSlide((activeSlide - 1 + collegeSlides.length) % collegeSlides.length)}>
                <Icons.ChevronLeft />
              </button>
              <button className="eng-slides-arrow" onClick={() => goSlide((activeSlide + 1) % collegeSlides.length)}>
                <Icons.ChevronRight />
              </button>
            </div>
          </div>
        </section>

        {/* ══ AP & TS COLLEGES TABLE ══ */}
        <section className="eng-table-section">
          <Reveal>
            <div className="eng-pill"><div className="eng-pill-dot" /> Colleges by State</div>
            <h2 className="eng-branches-h2">
              AP & TS <span>Engineering Colleges</span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="eng-table-tabs">
              <button className={`eng-table-tab${activeTab === 'AP' ? ' active' : ''}`} onClick={() => setActiveTab('AP')}>
                Andhra Pradesh
              </button>
              <button className={`eng-table-tab${activeTab === 'TS' ? ' active' : ''}`} onClick={() => setActiveTab('TS')}>
                Telangana
              </button>
            </div>
            <div style={{overflowX:'auto'}}>
              <table className="eng-table">
                <thead>
                  <tr>
                    <th>College</th>
                    <th>Location</th>
                    <th>NIRF Rank</th>
                    <th>Rating</th>
                    <th>Total Seats</th>
                    <th>Annual Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((c, i) => (
                    <tr key={i}>
                      <td>
                        <span className="eng-table-name">{c.name}</span>
                        <span className={`eng-table-tag ${c.tag === 'Top Ranked' ? 'top' : c.tag === 'Deemed' ? 'deemed' : c.tag.includes('State') ? 'state' : c.tag === 'Autonomous' ? 'auto' : 'private'}`}>
                          {c.tag}
                        </span>
                      </td>
                      <td>{c.loc}</td>
                      <td><span className="eng-table-nirf">{c.nirf}</span></td>
                      <td>
                        <div className="eng-table-stars">
                          {[...Array(5)].map((_, j) => (
                            <span key={j} style={{opacity: j < Math.round(c.rating) ? 1 : 0.2}}><Icons.Star /></span>
                          ))}
                          <span style={{fontSize:'12px', color:'var(--gray)', marginLeft:'4px'}}>{c.rating}</span>
                        </div>
                      </td>
                      <td>{c.seats}</td>
                      <td style={{color:'var(--blue)', fontWeight:600}}>{c.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </section>

        {/* ══ TOP BRANCHES ══ */}
        <section className="eng-branches">
          <Reveal>
            <div className="eng-pill"><div className="eng-pill-dot" /> Branch Demand</div>
            <h2 className="eng-branches-h2">
              Top Branches by <span>Market Demand</span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="eng-branches-grid">
              {branches.map((b, i) => (
                <div key={i} className="eng-branch-card">
                  <div className="eng-branch-top">
                    <span className="eng-branch-code">{b.code}</span>
                    <span className="eng-branch-demand">Demand Score: {b.demand}/100</span>
                  </div>
                  <div className="eng-branch-name">{b.name}</div>
                  <div className="eng-branch-bar-bg">
                    <div className="eng-branch-bar" style={{width: `${b.demand}%`}} />
                  </div>
                  <div className="eng-branch-meta">
                    <div className="eng-branch-meta-item">
                      <label>Avg Package</label>
                      <span>{b.avg_pkg}</span>
                    </div>
                    <div className="eng-branch-meta-item">
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
        <svg className="eng-wave" viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%', background:'var(--blue-deep)'}}>
          <path d="M0 0 C480 48 960 0 1440 48 L1440 48 L0 48 Z" fill="var(--off)"/>
        </svg>

        {/* ══ ENTRANCE EXAMS ══ */}
        <section className="eng-exams">
          <Reveal>
            <div className="eng-pill orange"><div className="eng-pill-dot" /> Entrance Exams</div>
            <h2 className="eng-exams-h2">
              Key Exams to <span>Know & Crack</span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="eng-exams-grid">
              {exams.map((ex, i) => (
                <div key={i} className="eng-exam-card">
                  <div className="eng-exam-name">{ex.name}</div>
                  <div className="eng-exam-body">{ex.body}</div>
                  <div className="eng-exam-row">
                    <label>For</label>
                    <span>{ex.for}</span>
                  </div>
                  <div className="eng-exam-row">
                    <label>Window</label>
                    <span>{ex.slots}</span>
                  </div>
                  <div className="eng-exam-tip">
                    <span className="eng-exam-tip-icon">💡</span>
                    {ex.tip}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ══ WAVE ══ */}
        <svg className="eng-wave" viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%', background:'#fff'}}>
          <path d="M0 48 C480 0 960 48 1440 0 L1440 0 L0 0 Z" fill="var(--blue-deep)"/>
        </svg>

        {/* ══ APPLY SECTION ══ */}
        <section className="eng-apply">
          <Reveal>
            <div className="eng-pill"><div className="eng-pill-dot" /> Apply Now</div>
            <h2 className="eng-apply-h2">
              Top Colleges <span>Open for Applications</span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="eng-apply-grid">
              {applyColleges.map((c, i) => (
                <div key={i} className="eng-apply-card">
                  <div className="eng-apply-left">
                    <div className="eng-apply-logo" style={{background: c.color}}>
                      {c.abbr}
                    </div>
                    <div>
                      <div className="eng-apply-name">{c.name}</div>
                      <div className="eng-apply-meta">
                        {c.loc} &nbsp;·&nbsp;
                        <span className="eng-apply-nirf">NIRF {c.nirf}</span>
                      </div>
                    </div>
                  </div>
                  <div className="eng-apply-right">
                    <div className="eng-apply-fee">{c.fee}</div>
                    <div className="eng-apply-deadline">Deadline: {c.deadline}</div>
                    <a href="/contact" className="eng-apply-btn">Apply</a>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ══ COUNSELING STEPS ══ */}
        <section className="eng-counsel">
          <Reveal>
            <div className="eng-pill"><div className="eng-pill-dot" /> Our Process</div>
            <h2 className="eng-counsel-h2">
              How We Guide Your <span>Seat Allotment</span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="eng-counsel-grid">
              {counselingSteps.map((s, i) => (
                <div key={i} className="eng-counsel-card">
                  <div className="eng-counsel-num">{s.num}</div>
                  <div className="eng-counsel-title">{s.title}</div>
                  <div className="eng-counsel-desc">{s.desc}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ══ CTA ══ */}
        <section className="eng-cta">
          <div className="eng-cta-circle" />
          <Reveal>
            <div className="eng-pill orange" style={{justifyContent:'center'}}><div className="eng-pill-dot" /> Get Started</div>
            <h2 className="eng-cta-h2">
              Your Engineering Seat.<br /><span>Secured with Data.</span>
            </h2>
            <p className="eng-cta-sub">
              Book a free counseling session. We'll analyse your rank, build your college list, and be present through every round.
            </p>
            <div className="eng-cta-btns">
              <a href="/contact" className="eng-btn-primary">Book Free Counseling</a>
              <a href="/about" className="eng-btn-outline">About Maharsh</a>
            </div>
          </Reveal>
        </section>

      </div>
    </>
  );
}