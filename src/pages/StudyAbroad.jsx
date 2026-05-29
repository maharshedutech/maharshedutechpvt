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
  Check: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  Arrow: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
};

// ── DESTINATION SLIDES ──
const destinations = [
  {
    name: "United States",
    tag: "Most Popular · 4,000+ Universities",
    location: "North America",
    highlight: "World's #1 Research Hub",
    img: "/usa.jpg",
    bg: "linear-gradient(135deg,#0a1628,#1a3a6e)",
    accent: "#4a90d9",
    flag: "🇺🇸",
    intake: "Sep / Jan",
    budget: "₹25–80L/yr",
  },
  {
    name: "United Kingdom",
    tag: "Legacy · Russell Group Universities",
    location: "Europe",
    highlight: "1–2 Year PG Programs",
    img: "/uk.jpg",
    bg: "linear-gradient(135deg,#1a0a0a,#6e1a1a)",
    accent: "#f87171",
    flag: "🇬🇧",
    intake: "Sep / Jan",
    budget: "₹22–60L/yr",
  },
  {
    name: "Canada",
    tag: "PR-Friendly · PGWP Work Permit",
    location: "North America",
    highlight: "Post-Study Work Up to 3 Yrs",
    img: "/canada.jpg",
    bg: "linear-gradient(135deg,#0f1f0a,#1a4a0d)",
    accent: "#4ade80",
    flag: "🇨🇦",
    intake: "Sep / Jan / May",
    budget: "₹20–55L/yr",
  },
  {
    name: "Australia",
    tag: "Group of 8 · Quality Assured",
    location: "Asia-Pacific",
    highlight: "2–4 Yr Post-Study Rights",
    img: "/australia.jpg",
    bg: "linear-gradient(135deg,#1a1000,#5a3c00)",
    accent: "#fbbf24",
    flag: "🇦🇺",
    intake: "Feb / Jul",
    budget: "₹20–50L/yr",
  },
  {
    name: "Germany",
    tag: "Tuition-Free · DAAD Scholarships",
    location: "Europe",
    highlight: "Zero/Low Tuition Public Unis",
    img: "/germany.jpg",
    bg: "linear-gradient(135deg,#0f0c29,#302b63)",
    accent: "#a78bfa",
    flag: "🇩🇪",
    intake: "Oct / Apr",
    budget: "₹4–15L/yr",
  },
  {
    name: "New Zealand",
    tag: "Safe · Student-Friendly Visa",
    location: "Asia-Pacific",
    highlight: "Open Work Rights While Studying",
    img: "/nz.jpg",
    bg: "linear-gradient(135deg,#001a2a,#003d5c)",
    accent: "#38bdf8",
    flag: "🇳🇿",
    intake: "Feb / Jul",
    budget: "₹18–45L/yr",
  },
];

// ── SERVICES ──
const services = [
  {
    id: "01", icon: "🎓", color: "#1a56db",
    label: "University Selection",
    title: "Find Your Perfect University Match",
    tagline: "500+ Partner Universities · All Rankings",
    desc: "We match your profile — GPA, test scores, budget, and career goals — to universities where you'll genuinely thrive, not just get admitted.",
    points: [
      "QS & THE ranked university shortlisting",
      "Course-level admission probability analysis",
      "Scholarship eligibility mapping",
      "Deadline tracking across all universities",
    ],
    stat: { num: "500+", label: "Partner Universities" },
  },
  {
    id: "02", icon: "📝", color: "#059669",
    label: "Application & SOP",
    title: "Applications That Get Accepted",
    tagline: "SOP · LOR · CV · Essays",
    desc: "Our writers and strategists craft SOPs and applications that reflect your unique story — not a template. Every word earns its place.",
    points: [
      "Statement of Purpose writing & review",
      "Letter of Recommendation guidance",
      "CV / Resume crafting for academia",
      "University-specific essay strategies",
    ],
    stat: { num: "94%", label: "Acceptance Rate" },
  },
  {
    id: "03", icon: "🛂", color: "#d97706",
    label: "Visa Assistance",
    title: "Visa Done Right, First Time",
    tagline: "F1 · Tier 4 · Student Visa · Study Permit",
    desc: "Visa rejections are almost always avoidable. We handle documentation, mock interviews, and embassy prep so you arrive — not reapply.",
    points: [
      "Country-specific visa documentation checklist",
      "Financial documents & bank statement review",
      "Mock visa interview preparation",
      "Visa tracking and re-application support",
    ],
    stat: { num: "98%", label: "Visa Success Rate" },
  },
  {
    id: "04", icon: "💰", color: "#7c3aed",
    label: "Scholarships & Loans",
    title: "Finance Your Abroad Dream Smartly",
    tagline: "Scholarships · Education Loans · Section 80E",
    desc: "We identify every scholarship you qualify for — merit, country-specific, and need-based — then build a loan plan for the gap.",
    points: [
      "Merit & country-specific scholarship search",
      "Education loan with 14 banking partners",
      "Collateral-free loan options up to ₹45L",
      "Section 80E tax benefit advisory",
    ],
    stat: { num: "14", label: "Loan Partners" },
  },
];

// ── COURSES ──
const courses = [
  { name: "Engineering & Technology", icon: "⚙️", demand: 96, roles: "Software, AI, Civil, Mechanical" },
  { name: "Business & Management (MBA)", icon: "📊", demand: 94, roles: "Finance, Marketing, Strategy, HR" },
  { name: "Data Science & AI", icon: "🤖", demand: 98, roles: "ML Engineer, Data Analyst, AI Researcher" },
  { name: "Medicine & Healthcare", icon: "🏥", demand: 92, roles: "Clinical, Research, Public Health" },
  { name: "Architecture & Design", icon: "🏛️", demand: 82, roles: "Urban Design, Interior, Landscape" },
  { name: "Law & International Relations", icon: "⚖️", demand: 78, roles: "Corporate Law, Policy, Diplomacy" },
];

// ── PROCESS STEPS ──
const steps = [
  { num: "01", title: "Profile Assessment", desc: "We evaluate your academics, scores, and goals to map the right countries and courses." },
  { num: "02", title: "University Shortlist", desc: "Reach, match, and safety list — built on 5 years of admission data for Indian students." },
  { num: "03", title: "Application & SOP", desc: "We craft every document. You review. We submit before every deadline." },
  { num: "04", title: "Visa & Pre-Departure", desc: "Visa filing, mock interviews, forex, travel insurance — nothing left to chance." },
];

// ── EXAMS ──
const exams = [
  { name: "IELTS", for: "UK, Canada, Australia, NZ", score: "6.5–7.5 band", tip: "B2/C1 English required for most programs" },
  { name: "TOEFL iBT", for: "USA, Canada, Europe", score: "90–110", tip: "Accepted by 11,000+ institutions worldwide" },
  { name: "GRE", for: "USA, Canada (PG)", score: "310–325 target", tip: "Essential for MS/PhD in STEM at top schools" },
  { name: "GMAT", for: "MBA programs globally", score: "650–720 target", tip: "Top B-schools: HBS, Wharton, Booth" },
  { name: "SAT / ACT", for: "USA (UG)", score: "1300+ / 28+", tip: "Many top US colleges are now test-optional" },
  { name: "Duolingo English Test", for: "USA, Canada, UK", score: "110–120", tip: "Fastest & cheapest — accepted by 3,000+ unis" },
];

export default function StudyAbroad() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [animating, setAnimating] = useState(false);
  const slideTimer = useRef(null);

  const startTimer = () => {
    clearInterval(slideTimer.current);
    slideTimer.current = setInterval(() => {
      setActiveSlide(p => (p + 1) % destinations.length);
    }, 5000);
  };

  useEffect(() => { startTimer(); return () => clearInterval(slideTimer.current); }, []);

  const goSlide = (i) => {
    if (i === activeSlide || animating) return;
    setAnimating(true); setActiveSlide(i);
    setTimeout(() => setAnimating(false), 700);
    startTimer();
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        :root {
          --blue: #1a56db; --blue-dark: #1442b5; --blue-deep: #0d2d6e;
          --blue-light: #e8f0fe; --blue-mid: #3b72f0;
          --red: #dc2626; --red-light: #ef4444; --red-faint: #fef2f2;
          --white: #ffffff; --off: #f8faff;
          --gray: #64748b; --gray-light: #e2e8f0;
          --text: #0f172a; --text2: #334155; --radius: 12px;
        }

        .sa * { box-sizing: border-box; }
        .sa { font-family: 'Space Grotesk', sans-serif; background: #fff; color: var(--text); line-height: 1; }

        .sa-pill {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--blue-light); color: var(--blue);
          font-size: 11px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
          padding: 6px 16px; border-radius: 100px; margin-bottom: 18px;
        }
        .sa-pill-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--blue); }
        .sa-pill.red { background: var(--red-faint); color: var(--red); }
        .sa-pill.red .sa-pill-dot { background: var(--red); }

        /* ── HERO SLIDES ── */
        .sa-slides { position: relative; width: 100%; height: 100vh; min-height: 560px; max-height: 800px; overflow: hidden; background: #0a1628; }
        .sa-slide-layer { position: absolute; inset: 0; width: 100%; height: 100%; transition: opacity 0.7s ease; }
        .sa-slide-layer.entering { opacity: 1; }
        .sa-slide-layer.exiting { opacity: 0; }
        .sa-slide-bg-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center; }
        .sa-slide-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.15) 100%); }
        .sa-slide-fallback { position: absolute; inset: 0; z-index: 0; }

        .sa-slide-content { position: absolute; bottom: 0; left: 0; right: 0; z-index: 2; padding: 48px 72px 110px; display: flex; flex-direction: column; align-items: flex-start; gap: 10px; }
        .sa-slide-flag { font-size: 48px; line-height: 1; margin-bottom: 4px; }
        .sa-slide-tag-badge {
          display: inline-block; font-size: 10px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase;
          padding: 5px 14px; border-radius: 100px; border: 1px solid rgba(255,255,255,0.3);
          color: rgba(255,255,255,0.85); background: rgba(255,255,255,0.08); backdrop-filter: blur(4px);
        }
        .sa-slide-name { font-family: 'Sora', sans-serif; font-size: clamp(30px,5vw,60px); font-weight: 800; color: #fff; line-height: 1.05; letter-spacing: -0.02em; text-shadow: 0 2px 24px rgba(0,0,0,0.4); margin: 0; }
        .sa-slide-highlight { font-size: 14px; color: rgba(255,255,255,0.65); font-weight: 600; }
        .sa-slide-meta { display: flex; gap: 20px; margin-top: 6px; }
        .sa-slide-meta-item { display: flex; flex-direction: column; gap: 3px; }
        .sa-slide-meta-label { font-size: 9px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: rgba(255,255,255,0.35); }
        .sa-slide-meta-val { font-size: 13px; font-weight: 700; color: rgba(255,255,255,0.85); }

        .sa-slides-progress { position: absolute; top: 0; left: 0; right: 0; height: 3px; z-index: 20; background: rgba(255,255,255,0.1); }
        .sa-slides-progress-bar { height: 100%; background: var(--red); animation: saProgress 5s linear infinite; }
        @keyframes saProgress { from { width: 0%; } to { width: 100%; } }

        .sa-slides-nav { position: absolute; bottom: 32px; left: 72px; right: 72px; z-index: 10; display: flex; align-items: center; gap: 14px; }
        .sa-slides-dots { display: flex; gap: 6px; }
        .sa-slides-dot { width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,0.25); cursor: pointer; border: none; transition: all 0.3s; padding: 0; }
        .sa-slides-dot.active { background: var(--red); width: 26px; border-radius: 4px; }
        .sa-slides-counter { font-size: 12px; color: rgba(255,255,255,0.35); font-weight: 700; letter-spacing: 0.06em; font-family: 'Sora', sans-serif; }
        .sa-slides-arrows { display: flex; gap: 8px; margin-left: auto; }
        .sa-slides-arrow { width: 42px; height: 42px; border-radius: 50%; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.18); color: #fff; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s; backdrop-filter: blur(4px); }
        .sa-slides-arrow:hover { background: var(--red); border-color: var(--red); }
        .sa-slides-arrow svg { width: 16px; height: 16px; }

        /* ── STATS ── */
        .sa-stats { background: var(--blue-deep); padding: 60px 80px; }
        .sa-stats-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 0; }
        .sa-stat-item { text-align: center; padding: 0 20px; border-right: 1px solid rgba(255,255,255,0.1); }
        .sa-stat-item:last-child { border-right: none; }
        .sa-stat-num { font-family: 'Sora', sans-serif; font-size: 40px; font-weight: 800; color: #fff; line-height: 1; margin-bottom: 8px; letter-spacing: -0.04em; }
        .sa-stat-num span { color: #f87171; }
        .sa-stat-label { font-size: 12px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: rgba(255,255,255,0.45); }

        /* ── SERVICES ── */
        .sa-services { background: var(--off); padding: 100px 80px; }
        .sa-services-h2 { font-family: 'Sora',sans-serif; font-size: clamp(26px,3vw,40px); font-weight: 800; color: var(--text); margin: 0 0 56px; line-height: 1.15; }
        .sa-services-h2 span { color: var(--blue); }
        .sa-svc-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 24px; }
        .sa-svc-card { background: #fff; border: 1.5px solid var(--gray-light); border-radius: 16px; padding: 36px 32px; transition: all 0.3s; position: relative; overflow: hidden; }
        .sa-svc-card::before { content:''; position:absolute; top:0; left:0; right:0; height:3px; background: var(--svc-color,var(--blue)); transform: scaleX(0); transform-origin:left; transition: transform 0.4s; }
        .sa-svc-card:hover { border-color: var(--svc-color,var(--blue)); box-shadow: 0 8px 32px rgba(0,0,0,0.10); }
        .sa-svc-card:hover::before { transform: scaleX(1); }
        .sa-svc-header { display:flex; align-items:flex-start; justify-content:space-between; margin-bottom:20px; }
        .sa-svc-icon { width:52px; height:52px; border-radius:14px; display:flex; align-items:center; justify-content:center; font-size:24px; background:var(--blue-light); flex-shrink:0; }
        .sa-svc-stat { text-align:right; }
        .sa-svc-stat-num { font-family:'Sora',sans-serif; font-size:28px; font-weight:800; line-height:1; color: var(--svc-color,var(--blue)); }
        .sa-svc-stat-label { font-size:10px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:var(--gray); margin-top:3px; }
        .sa-svc-label { font-size:10px; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; color: var(--svc-color,var(--blue)); margin-bottom:8px; }
        .sa-svc-title { font-family:'Sora',sans-serif; font-size:18px; font-weight:700; color:var(--text); margin-bottom:8px; line-height:1.3; }
        .sa-svc-tagline { font-size:11px; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; color:var(--gray); margin-bottom:14px; }
        .sa-svc-desc { font-size:13.5px; color:var(--text2); line-height:1.75; margin-bottom:20px; }
        .sa-svc-divider { height:1px; background:var(--gray-light); margin-bottom:18px; }
        .sa-svc-points { list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:10px; }
        .sa-svc-point { display:flex; align-items:flex-start; gap:10px; font-size:13px; color:var(--text2); line-height:1.5; }
        .sa-svc-check { width:20px; height:20px; border-radius:50%; flex-shrink:0; margin-top:1px; display:flex; align-items:center; justify-content:center; background:var(--blue-light); color:var(--blue); }

        /* ── COURSES ── */
        .sa-courses { background: #fff; padding: 100px 80px; }
        .sa-courses-h2 { font-family:'Sora',sans-serif; font-size:clamp(26px,3vw,40px); font-weight:800; color:var(--text); margin:0 0 48px; line-height:1.15; }
        .sa-courses-h2 span { color: var(--blue); }
        .sa-courses-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:16px; }
        .sa-course-card { background:var(--off); border:1.5px solid var(--gray-light); border-radius:var(--radius); padding:24px 28px; transition:all 0.25s; }
        .sa-course-card:hover { border-color:var(--blue); box-shadow:0 6px 24px rgba(26,86,219,0.10); }
        .sa-course-top { display:flex; align-items:center; gap:12px; margin-bottom:12px; }
        .sa-course-icon { font-size:28px; }
        .sa-course-name { font-family:'Sora',sans-serif; font-size:15px; font-weight:700; color:var(--text); }
        .sa-course-demand { margin-left:auto; font-size:11px; font-weight:700; color:var(--gray); }
        .sa-course-bar-bg { background:var(--gray-light); border-radius:4px; height:4px; margin-bottom:10px; }
        .sa-course-bar { height:4px; border-radius:4px; background:linear-gradient(90deg,var(--blue),var(--red)); }
        .sa-course-roles { font-size:12px; color:var(--gray); font-weight:500; }

        /* ── EXAMS ── */
        .sa-exams { background: var(--blue-deep); padding: 100px 80px; }
        .sa-exams-h2 { font-family:'Sora',sans-serif; font-size:clamp(26px,3vw,40px); font-weight:800; color:#fff; margin:0 0 48px; line-height:1.15; }
        .sa-exams-h2 span { color:#f87171; }
        .sa-exams-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
        .sa-exam-card { background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.08); border-radius:var(--radius); padding:28px 24px; transition:background 0.2s; position:relative; overflow:hidden; }
        .sa-exam-card::after { content:''; position:absolute; top:0; left:0; right:0; height:2px; background:#f87171; transform:scaleX(0); transform-origin:left; transition:transform 0.35s; }
        .sa-exam-card:hover { background:rgba(255,255,255,0.08); }
        .sa-exam-card:hover::after { transform:scaleX(1); }
        .sa-exam-name { font-family:'Sora',sans-serif; font-size:18px; font-weight:800; color:#fff; margin-bottom:4px; }
        .sa-exam-for { font-size:11px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:#f87171; margin-bottom:14px; }
        .sa-exam-row { display:flex; justify-content:space-between; margin-bottom:6px; }
        .sa-exam-row label { font-size:11px; color:rgba(255,255,255,0.35); font-weight:600; }
        .sa-exam-row span { font-size:12px; color:rgba(255,255,255,0.7); font-weight:600; }
        .sa-exam-tip { margin-top:16px; padding:10px 14px; border-radius:8px; background:rgba(248,113,113,0.12); border:1px solid rgba(248,113,113,0.2); font-size:12px; color:rgba(255,255,255,0.65); line-height:1.5; display:flex; align-items:flex-start; gap:8px; }

        /* ── PROCESS ── */
        .sa-process { background: var(--off); padding: 100px 80px; }
        .sa-process-h2 { font-family:'Sora',sans-serif; font-size:clamp(26px,3vw,40px); font-weight:800; color:var(--text); margin:0 0 48px; line-height:1.15; }
        .sa-process-h2 span { color:var(--blue); }
        .sa-process-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:20px; }
        .sa-process-card { background:#fff; border:1.5px solid var(--gray-light); border-radius:var(--radius); padding:28px 24px; position:relative; transition:all 0.25s; }
        .sa-process-card::after { content:''; position:absolute; bottom:0; left:0; right:0; height:3px; background:linear-gradient(90deg,var(--blue),var(--red)); border-radius:0 0 var(--radius) var(--radius); transform:scaleX(0); transform-origin:left; transition:transform 0.35s; }
        .sa-process-card:hover { border-color:var(--blue); box-shadow:0 6px 24px rgba(26,86,219,0.10); }
        .sa-process-card:hover::after { transform:scaleX(1); }
        .sa-process-num { font-family:'Sora',sans-serif; font-size:36px; font-weight:800; color:var(--blue-light); line-height:1; margin-bottom:14px; letter-spacing:-0.04em; }
        .sa-process-title { font-family:'Sora',sans-serif; font-size:15px; font-weight:700; color:var(--text); margin-bottom:8px; }
        .sa-process-desc { font-size:13px; color:var(--gray); line-height:1.65; }

        /* ── CTA ── */
        .sa-cta { background:var(--blue-deep); padding:80px 80px; text-align:center; position:relative; overflow:hidden; border-top:1px solid rgba(255,255,255,0.06); }
        .sa-cta-circle { position:absolute; bottom:-150px; left:50%; transform:translateX(-50%); width:600px; height:300px; border-radius:50%; background:rgba(220,38,38,0.07); pointer-events:none; }
        .sa-cta-h2 { font-family:'Sora',sans-serif; font-size:clamp(28px,4vw,48px); font-weight:800; color:#fff; margin:0 0 16px; line-height:1.1; position:relative; z-index:1; }
        .sa-cta-h2 span { color:#f87171; }
        .sa-cta-sub { font-size:15px; color:rgba(255,255,255,0.55); margin:0 0 36px; max-width:520px; margin-left:auto; margin-right:auto; position:relative; z-index:1; line-height:1.7; }
        .sa-cta-btns { display:flex; gap:12px; justify-content:center; flex-wrap:wrap; position:relative; z-index:1; }
        .sa-btn-primary { font-family:'Sora',sans-serif; font-size:12px; font-weight:700; letter-spacing:0.07em; text-transform:uppercase; background:var(--red); color:#fff; border:none; padding:14px 32px; border-radius:8px; cursor:pointer; transition:all 0.2s; text-decoration:none; display:inline-block; box-shadow:0 4px 20px rgba(220,38,38,0.35); }
        .sa-btn-primary:hover { background:var(--red-light); transform:translateY(-2px); }
        .sa-btn-outline { font-family:'Sora',sans-serif; font-size:12px; font-weight:700; letter-spacing:0.07em; text-transform:uppercase; background:transparent; color:#fff; border:1.5px solid rgba(255,255,255,0.3); padding:13px 28px; border-radius:8px; cursor:pointer; transition:all 0.2s; text-decoration:none; display:inline-block; }
        .sa-btn-outline:hover { border-color:#f87171; color:#f87171; }

        .sa-wave { display:block; line-height:0; margin-bottom:-2px; }

        @media (max-width: 1024px) {
          .sa-slide-content { padding:40px 48px 100px; }
          .sa-slides-nav { left:48px; right:48px; }
          .sa-services,.sa-courses,.sa-exams,.sa-process,.sa-cta,.sa-stats { padding:80px 48px; }
          .sa-exams-grid { grid-template-columns:1fr 1fr; }
          .sa-process-grid { grid-template-columns:1fr 1fr; }
          .sa-stats-grid { grid-template-columns:repeat(2,1fr); gap:32px; }
          .sa-stat-item { border-right:none; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:32px; }
        }
        @media (max-width: 768px) {
          .sa-slides { height:80vh; min-height:480px; max-height:650px; }
          .sa-slide-content { padding:28px 24px 90px; }
          .sa-slides-nav { left:24px; right:24px; bottom:24px; }
          .sa-slide-name { font-size:clamp(24px,6vw,36px); }
          .sa-services,.sa-courses,.sa-exams,.sa-process,.sa-cta,.sa-stats { padding:64px 24px; }
          .sa-svc-grid,.sa-courses-grid { grid-template-columns:1fr; }
          .sa-exams-grid,.sa-process-grid { grid-template-columns:1fr; }
          .sa-stats-grid { grid-template-columns:1fr 1fr; }
        }
      `}</style>

      <div className="sa">

        {/* ── HERO SLIDES ── */}
        <section className="sa-slides">
          <div className="sa-slides-progress" key={activeSlide}>
            <div className="sa-slides-progress-bar" />
          </div>

          {destinations.map((d, i) => (
            <div key={i} className={`sa-slide-layer ${i === activeSlide ? "entering" : "exiting"}`} style={{ pointerEvents: i === activeSlide ? "auto" : "none" }}>
              <div className="sa-slide-fallback" style={{ background: d.bg }} />
              <img className="sa-slide-bg-img" src={d.img} alt={d.name} onError={e => { e.target.style.display = "none"; }} />
              <div className="sa-slide-overlay" />
              <div className="sa-slide-content">
                <div className="sa-slide-flag">{d.flag}</div>
                <span className="sa-slide-tag-badge">{d.tag}</span>
                <h2 className="sa-slide-name">{d.name}</h2>
                <div className="sa-slide-highlight" style={{ color: d.accent }}>✦ {d.highlight}</div>
                <div className="sa-slide-meta">
                  <div className="sa-slide-meta-item">
                    <span className="sa-slide-meta-label">Intake</span>
                    <span className="sa-slide-meta-val">{d.intake}</span>
                  </div>
                  <div className="sa-slide-meta-item">
                    <span className="sa-slide-meta-label">Est. Budget / yr</span>
                    <span className="sa-slide-meta-val">{d.budget}</span>
                  </div>
                  <div className="sa-slide-meta-item">
                    <span className="sa-slide-meta-label">Region</span>
                    <span className="sa-slide-meta-val">{d.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="sa-slides-nav">
            <div className="sa-slides-dots">
              {destinations.map((_, i) => (
                <button key={i} className={`sa-slides-dot${activeSlide === i ? " active" : ""}`} onClick={() => goSlide(i)} />
              ))}
            </div>
            <span className="sa-slides-counter">
              {String(activeSlide + 1).padStart(2, "0")} / {String(destinations.length).padStart(2, "0")}
            </span>
            <div className="sa-slides-arrows">
              <button className="sa-slides-arrow" onClick={() => goSlide((activeSlide - 1 + destinations.length) % destinations.length)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
              </button>
              <button className="sa-slides-arrow" onClick={() => goSlide((activeSlide + 1) % destinations.length)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="sa-stats">
          <Reveal>
            <div className="sa-stats-grid">
              {[
                { num: "500", suffix: "+", label: "Partner Universities" },
                { num: "98", suffix: "%", label: "Visa Success Rate" },
                { num: "6", suffix: "", label: "Countries Covered" },
                { num: "2,500", suffix: "+", label: "Students Placed" },
              ].map((s, i) => (
                <div key={i} className="sa-stat-item">
                  <div className="sa-stat-num">{s.num}<span>{s.suffix}</span></div>
                  <div className="sa-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ── SERVICES ── */}
        <section className="sa-services">
          <Reveal>
            <div className="sa-pill"><div className="sa-pill-dot" /> Our Services</div>
            <h2 className="sa-services-h2">End-to-End Support, <span>Zero Guesswork</span></h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="sa-svc-grid">
              {services.map((svc) => (
                <div key={svc.id} className="sa-svc-card" style={{ "--svc-color": svc.color }}>
                  <div className="sa-svc-header">
                    <div className="sa-svc-icon">{svc.icon}</div>
                    <div className="sa-svc-stat">
                      <div className="sa-svc-stat-num">{svc.stat.num}</div>
                      <div className="sa-svc-stat-label">{svc.stat.label}</div>
                    </div>
                  </div>
                  <div className="sa-svc-label">{svc.label}</div>
                  <div className="sa-svc-title">{svc.title}</div>
                  <div className="sa-svc-tagline">{svc.tagline}</div>
                  <div className="sa-svc-desc">{svc.desc}</div>
                  <div className="sa-svc-divider" />
                  <ul className="sa-svc-points">
                    {svc.points.map((pt, j) => (
                      <li key={j} className="sa-svc-point">
                        <span className="sa-svc-check"><Icons.Check /></span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ── COURSES ── */}
        <section className="sa-courses">
          <Reveal>
            <div className="sa-pill"><div className="sa-pill-dot" /> What You Can Study</div>
            <h2 className="sa-courses-h2">Popular <span>Courses Abroad</span></h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="sa-courses-grid">
              {courses.map((c, i) => (
                <div key={i} className="sa-course-card">
                  <div className="sa-course-top">
                    <span className="sa-course-icon">{c.icon}</span>
                    <span className="sa-course-name">{c.name}</span>
                    <span className="sa-course-demand">Demand: {c.demand}/100</span>
                  </div>
                  <div className="sa-course-bar-bg">
                    <div className="sa-course-bar" style={{ width: `${c.demand}%` }} />
                  </div>
                  <div className="sa-course-roles">Top roles: {c.roles}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ── WAVE ── */}
        <svg className="sa-wave" viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width:"100%", background:"var(--blue-deep)" }}>
          <path d="M0 0 C480 48 960 0 1440 48 L1440 48 L0 48 Z" fill="#fff" />
        </svg>

        {/* ── EXAMS ── */}
        <section className="sa-exams">
          <Reveal>
            <div className="sa-pill red"><div className="sa-pill-dot" /> Entrance Tests</div>
            <h2 className="sa-exams-h2">Exams You <span>Need to Clear</span></h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="sa-exams-grid">
              {exams.map((ex, i) => (
                <div key={i} className="sa-exam-card">
                  <div className="sa-exam-name">{ex.name}</div>
                  <div className="sa-exam-for">{ex.for}</div>
                  <div className="sa-exam-row">
                    <label>Target Score</label>
                    <span>{ex.score}</span>
                  </div>
                  <div className="sa-exam-tip">
                    <span style={{ color:"#f87171", flexShrink:0 }}>💡</span>
                    {ex.tip}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ── WAVE ── */}
        <svg className="sa-wave" viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width:"100%", background:"#f8faff" }}>
          <path d="M0 48 C480 0 960 48 1440 0 L1440 0 L0 0 Z" fill="var(--blue-deep)" />
        </svg>

        {/* ── PROCESS ── */}
        <section className="sa-process">
          <Reveal>
            <div className="sa-pill"><div className="sa-pill-dot" /> Our Process</div>
            <h2 className="sa-process-h2">How We Get You <span>There</span></h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="sa-process-grid">
              {steps.map((s, i) => (
                <div key={i} className="sa-process-card">
                  <div className="sa-process-num">{s.num}</div>
                  <div className="sa-process-title">{s.title}</div>
                  <div className="sa-process-desc">{s.desc}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ── CTA ── */}
        <section className="sa-cta">
          <div className="sa-cta-circle" />
          <Reveal>
            <div className="sa-pill red" style={{ justifyContent:"center" }}><div className="sa-pill-dot" /> Get Started</div>
            <h2 className="sa-cta-h2">Your Dream University.<br /><span>We'll Get You There.</span></h2>
            <p className="sa-cta-sub">
              Book a free counseling session. We'll match your profile to the right countries, courses, and scholarships — and support you all the way to landing.
            </p>
            <div className="sa-cta-btns">
              <a href="/contact" className="sa-btn-primary">Book Free Counseling</a>
              <a href="/about" className="sa-btn-outline">About Maharsh</a>
            </div>
          </Reveal>
        </section>

      </div>
    </>
  );
}