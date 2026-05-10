// src/pages/Home.jsx
import Hero from "../components/Hero";
import React, { useEffect, useRef, useState } from "react";

function useReveal(threshold = 0.1) {
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

function RevealSection({ children, className = "", style = {}, delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(40px)",
      transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
      ...style,
    }}>{children}</div>
  );
}

/* ─── SVG Icons ─── */
const Icons = {
  CompassRose: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/>
    </svg>
  ),
  ScrollDoc: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
    </svg>
  ),
  GlobePin: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  CreditCard: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>
    </svg>
  ),
  Check: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  Star: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  Phone: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  Mail: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
  MapPin: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
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
  ArrowRight: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
};

const regionalColleges = [
  { name: "JNTU Hyderabad", short: "JNTU", state: "TS", image: "/images/colleges/jntu.png" },
  { name: "Osmania University", short: "OU", state: "TS", image: "/images/colleges/osmania.png" },
  { name: "University of Hyderabad", short: "UoH", state: "TS", image: "/images/colleges/uoh.png" },
  { name: "BITS Pilani Hyderabad", short: "BITS", state: "TS", image: "/images/colleges/bits-hyd.png" },
  { name: "IIIT Hyderabad", short: "IIITH", state: "TS", image: "/images/colleges/iiit-hyd.png" },
  { name: "SR Engineering", short: "SREC", state: "TS", image: "/images/colleges/srec.png" },
  { name: "VNR Vignana Jyothi", short: "VNRVJIET", state: "TS", image: "/images/colleges/vnr.png" },
  { name: "Mahindra University", short: "MU", state: "TS", image: "/images/colleges/mahindra.png" },
  { name: "Andhra University", short: "AU", state: "AP", image: "/images/colleges/au.png" },
  { name: "JNTU Kakinada", short: "JNTUK", state: "AP", image: "/images/colleges/jntuk.png" },
  { name: "SRM AP", short: "SRMAP", state: "AP", image: "/images/colleges/srmap.png" },
  { name: "VIT AP", short: "VITAP", state: "AP", image: "/images/colleges/vitap.png" },
  { name: "Amrita Amaravati", short: "Amrita", state: "AP", image: "/images/colleges/amrita.png" },
  { name: "RGUKT Basar", short: "RGUKT", state: "TS", image: "/images/colleges/rgukt.png" },
  { name: "Vignan University", short: "VU", state: "AP", image: "/images/colleges/vignan.png" },
  { name: "KL University", short: "KLU", state: "AP", image: "/images/colleges/klu.png" },
];

const nationalColleges = [
  { name: "IIT Bombay", short: "IITB", color: "#003366" },
  { name: "IIT Delhi", short: "IITD", color: "#1a1a6e" },
  { name: "IIT Madras", short: "IITM", color: "#7b1513" },
  { name: "AIIMS Delhi", short: "AIIMS", color: "#8b0000" },
  { name: "IIM Ahmedabad", short: "IIMA", color: "#003d1f" },
  { name: "NIT Warangal", short: "NITW", color: "#003366" },
  { name: "BITS Pilani", short: "BITS", color: "#b71c1c" },
  { name: "Manipal", short: "MU", color: "#2c5f2e" },
  { name: "Ashoka Univ.", short: "AU", color: "#4a0072" },
  { name: "VIT Vellore", short: "VIT", color: "#c9a227" },
];

const services = [
  {
    icon: "CompassRose",
    num: "01",
    title: "Career Counseling",
    subtitle: "Discover Your Direction",
    points: [
      "Psychometric & aptitude assessment",
      "90-min one-on-one deep-dive session",
      "Written career report — 3 pathway projections",
      "Salary benchmarks & growth data",
      "Available in Telugu, Tamil, Hindi & more",
      "Post-session follow-up & revision",
    ],
  },
  {
    icon: "ScrollDoc",
    num: "02",
    title: "Application Support",
    subtitle: "Every Document, Perfected",
    points: [
      "SOP drafting — 4 rounds of expert review",
      "LOR strategy, structure & drafting",
      "Personal essay coaching",
      "Resume & CV for student profiles",
      "Mock interviews with senior counselors",
      "University-specific application alignment",
    ],
  },
  {
    icon: "GlobePin",
    num: "03",
    title: "India & Abroad Admissions",
    subtitle: "From Shortlist to Enrollment",
    points: [
      "250+ partner institutions across India",
      "Engineering, Medical, MBA, Law, Design",
      "JEE, NEET, CLAT, NIFT, NATA, CAT counseling",
      "18 countries for international placements",
      "Visa documentation & embassy prep",
      "Pre-departure briefing & post-arrival check-in",
    ],
  },
  {
    icon: "CreditCard",
    num: "04",
    title: "Education Loan Assistance",
    subtitle: "Fund Your Future Wisely",
    points: [
      "14 banking & NBFC partners",
      "Collateral & non-collateral loan options",
      "Full funding plan: scholarship + loan combo",
      "Complete documentation & bank liaison",
      "EMI calculation & repayment strategy",
      "Section 80E tax benefit advisory",
    ],
  },
];

const processSteps = [
  { num: "01", title: "Free Discovery Session", desc: "30-min honest conversation about your goals, worries & aspirations.", badge: "Free · 30 min" },
  { num: "02", title: "Psychometric Assessment", desc: "Aptitude, personality, career values & learning style — scientifically validated.", badge: "In-depth · 90 min" },
  { num: "03", title: "Career & College Roadmap", desc: "20–30 page written report: 3 career paths, college shortlist, exam strategy & financial plan.", badge: "Written Report · 72 hrs" },
  { num: "04", title: "Application Building", desc: "SOP, LOR, essays, CV, document submission — fully managed by our specialist team.", badge: "Managed · 4–8 weeks" },
  { num: "05", title: "Counseling Rounds & Enrollment", desc: "Present through every JEE/NEET/state round. Coordinate until offer letter is confirmed.", badge: "In-person · Variable" },
  { num: "06", title: "Post-Enrollment Support", desc: "Hostel shortlisting, peer community, semester check-ins & mentorship during first year.", badge: "Ongoing · Year 1" },
];

const aboutStats = [
  { num: "12+", label: "Years of Operation" },
  { num: "5,000+", label: "Students Guided" },
  { num: "250+", label: "Partner Institutions" },
  { num: "18", label: "Countries for Abroad" },
  { num: "98%", label: "Admission Success Rate" },
  { num: "14", label: "Loan Partner Banks" },
];

// ── NEW: bullet points for the About section ──
const aboutPoints = [
  "Founded with one conviction: every student deserves the same quality of guidance previously available only to the well-connected",
  "12 years of honest, outcome-driven counseling — rooted in AP & Telangana, grown into a national presence",
  "40 certified counselors, application specialists, financial advisors & visa experts operating as one integrated unit",
  "No commissions from colleges. No referral payments. Revenue only from transparent service fees",
  "Collectively accountable for every student's outcome — from discovery call to enrollment confirmation",
];

const whyUs = [
  { num: "01", title: "Certified Career Counselors", desc: "NCDA/GCDF certified with 5+ years of hands-on admissions experience. No freshers with scripts." },
  { num: "02", title: "Zero Commission, Zero Conflict", desc: "No referral fees from colleges, lenders, or institutes. Revenue only from transparent service fees." },
  { num: "03", title: "End-to-End Accountability", desc: "Same senior counselor owns your file from discovery to enrollment. No handoffs to juniors." },
  { num: "04", title: "Data-Driven Recommendations", desc: "Proprietary database of cutoff trends, salary benchmarks & alumni outcomes — updated annually." },
  { num: "05", title: "Regional Language Depth", desc: "Serve students in Telugu, Tamil, Malayalam, Hindi, Kannada & Marathi with full nuance." },
  { num: "06", title: "Transparent Outcome Tracking", desc: "98% of 5,000+ students secured one of their top three choices. We publish our outcome data annually." },
];

const testimonials = [
  {
    name: "Arjun Mehta", institution: "IIT Hyderabad", program: "B.Tech Computer Science, 2024",
    instColor: "#1a56db", instAbbr: "IIT", rating: 5,
    headline: "Secured IIT Hyderabad — CS in Round 1 of JOSAA",
    points: ["Complete clarity on JEE rank vs options in 45 minutes", "Data-driven JOSAA choice-filling strategy", "Counselor reachable even late at night during rounds"],
  },
  {
    name: "Priya Nair", institution: "University of Toronto", program: "MSc Data Science, 2023",
    instColor: "#002145", instAbbr: "UoT", rating: 5,
    headline: "University of Toronto with partial scholarship",
    points: ["Week-by-week execution calendar from day one", "SOP through 4 expert review rounds", "3 scholarships identified that she hadn't found independently"],
  },
  {
    name: "Rahul Sharma", institution: "AIIMS New Delhi", program: "MBBS, 2023",
    instColor: "#8b0000", instAbbr: "AIIMS", rating: 5,
    headline: "AIIMS Delhi — Round 1 of NEET counseling",
    points: ["Multi-year cutoff data per institution & category", "Risk-adjusted probability for each choice", "Family prepared for emotional volatility of round results"],
  },
  {
    name: "Sneha Reddy", institution: "Manipal University", program: "BDS + MBA Healthcare, 2024",
    instColor: "#2c5f2e", instAbbr: "MU", rating: 5,
    headline: "Clarity between dentistry & pharmacy — and loan secured",
    points: ["Psychometric showed strong patient-care orientation", "Real salary & scope-of-practice comparison", "Education loan assistance made it financially feasible"],
  },
  {
    name: "Karthik Iyer", institution: "BITS Pilani — Goa", program: "B.E. Electronics, 2024",
    instColor: "#b71c1c", instAbbr: "BITS", rating: 5,
    headline: "Right BITS campus & branch — chosen with data, not prestige bias",
    points: ["Placement stats disaggregated by campus & branch", "Alumni network density in target sector", "Honest advice even when it contradicted prestige ranking"],
  },
  {
    name: "Ananya Bose", institution: "ISB Hyderabad", program: "PGP, 2023",
    instColor: "#1a56db", instAbbr: "ISB", rating: 5,
    headline: "Operations professional to ISB — positioning that worked",
    points: ["Counselors challenged whether MBA was the right path", "Narrative built around genuine career history", "Offers from 3 top MBA programs"],
  },
  {
    name: "Vikram Naidu", institution: "Purdue University", program: "MS Mechanical Engg, 2024",
    instColor: "#CEB888", instAbbr: "PU", rating: 5,
    headline: "Purdue MS with graduate fellowship",
    points: ["Faculty-aligned shortlist — not just QS rankings", "SOP rewritten 3 times for research specificity", "RA opportunity identified that led to fellowship"],
  },
  {
    name: "Divya Krishnamurthy", institution: "NLSIU Bangalore", program: "B.A. LL.B., 2023",
    instColor: "#003366", instAbbr: "NLS", rating: 5,
    headline: "CLAT Rank 34 — chose NLSIU with conviction",
    points: ["NLU-by-NLU breakdown of clinical legal education quality", "Placement data for specific target firms", "Made the choice with data, not just ranking tables"],
  },
];

export default function Home() {
  const [activeService, setActiveService] = useState(0);
  const [activeStep, setActiveStep] = useState(null);
  const [activeTesti, setActiveTesti] = useState(0);
  const timerRef = useRef(null);

  // ── CHANGE: testimonials now rotate every 3500ms (was 6000ms) ──
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActiveTesti(p => (p + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(timerRef.current);
  }, []);

  const goTesti = (i) => {
    clearInterval(timerRef.current);
    setActiveTesti(i);
    timerRef.current = setInterval(() => {
      setActiveTesti(p => (p + 1) % testimonials.length);
    }, 3500);
  };

  return (
    <>
      <Hero />

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

        .h * { box-sizing: border-box; }
        .h {
          font-family: 'Space Grotesk', sans-serif;
          background: #fff;
          color: var(--text);
          line-height: 1;
        }

        .h-sora { font-family: 'Sora', sans-serif; }

        /* ── Section label pill ── */
        .h-pill {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--blue-light); color: var(--blue);
          font-size: 11px; font-weight: 700; letter-spacing: 0.14em;
          text-transform: uppercase; padding: 6px 16px; border-radius: 100px;
          margin-bottom: 18px;
        }
        .h-pill-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--blue); }
        .h-pill.orange { background: var(--orange-faint); color: var(--orange); }
        .h-pill.orange .h-pill-dot { background: var(--orange); }

        /* ═══ COLLEGE STRIP ═══ */
        .h-strip-wrap { background: var(--off); border-top: 1px solid var(--gray-light); border-bottom: 1px solid var(--gray-light); }
        .h-strip { padding: 12px 0; overflow: hidden; position: relative; }
        .h-strip::before, .h-strip::after {
          content: ''; position: absolute; top: 0; bottom: 0; width: 100px; z-index: 2; pointer-events: none;
        }
        .h-strip::before { left: 0; background: linear-gradient(to right, var(--off), transparent); }
        .h-strip::after { right: 0; background: linear-gradient(to left, var(--off), transparent); }
        .h-strip-track {
          display: flex; gap: 0; width: max-content;
          animation: stripScroll 36s linear infinite;
        }
        .h-strip-track:hover { animation-play-state: paused; }
        @keyframes stripScroll { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .h-strip-item {
          display: flex; align-items: center; gap: 10px;
          padding: 0 24px; border-right: 1px solid var(--gray-light); flex-shrink: 0;
        }
        .h-strip-logo {
          width: 32px; height: 32px; border-radius: 6px; flex-shrink: 0; overflow: hidden;
          border: 1px solid var(--gray-light); background: #fff;
          display: flex; align-items: center; justify-content: center;
        }
        .h-strip-logo img { width: 100%; height: 100%; object-fit: contain; padding: 3px; }
        .h-strip-logo-text { font-family: 'Sora', sans-serif; font-size: 8px; font-weight: 800; color: var(--blue-dark); }
        .h-strip-name { font-size: 12px; font-weight: 500; color: var(--text2); white-space: nowrap; }
        .h-strip-state {
          font-size: 9px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--blue); background: var(--blue-light); padding: 2px 7px; border-radius: 4px;
        }
        .h-strip-label {
          display: inline-flex; align-items: center;
          font-size: 9px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--gray); padding: 4px 0;
        }

        /* ═══ ABOUT ═══ */
        .h-about {
          background: #fff;
          padding: 100px 80px;
          position: relative; overflow: hidden;
        }
        .h-about-decor {
          position: absolute; top: -120px; right: -120px;
          width: 500px; height: 500px;
          background: linear-gradient(135deg, var(--blue-light) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          opacity: 0.7;
        }
        .h-about-decor2 {
          position: absolute; bottom: -80px; left: -80px;
          width: 320px; height: 320px;
          background: linear-gradient(135deg, var(--orange-faint) 0%, transparent 70%);
          border-radius: 50%; pointer-events: none; opacity: 0.9;
        }

        /* ── NEW: About layout — full-width founder photo on top, then two-col below ── */
        .h-about-inner { max-width: 1200px; margin: 0 auto; position: relative; z-index: 1; }

        /* Founder hero image — large, spanning full width like the counselor image */
        .h-founder-hero {
          width: 100%;
          border-radius: var(--radius);
          overflow: hidden;
          margin-bottom: 60px;
          position: relative;
          background: var(--blue-light);
          box-shadow: 0 16px 64px rgba(26,86,219,0.12);
        }
        .h-founder-hero img {
          width: 100%;
          height: 480px;
          object-fit: cover;
          object-position: center top;
          display: block;
        }
        /* Gradient overlay at bottom for name/title */
        .h-founder-hero-overlay {
          position: absolute; bottom: 0; left: 0; right: 0;
          padding: 48px 48px 36px;
          background: linear-gradient(to top, rgba(13,45,110,0.92) 0%, transparent 100%);
          display: flex; align-items: flex-end; justify-content: space-between; gap: 24px;
        }
        .h-founder-hero-name {
          font-family: 'Sora', sans-serif; font-size: 28px; font-weight: 800;
          color: #fff; margin-bottom: 6px; line-height: 1.1;
        }
        .h-founder-hero-title {
          font-size: 12px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--orange);
        }
        .h-founder-hero-badge {
          flex-shrink: 0; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);
          border-radius: 10px; padding: 12px 20px; backdrop-filter: blur(8px);
          font-size: 12px; color: rgba(255,255,255,0.8); font-weight: 600; text-align: center; line-height: 1.5;
        }
        /* Placeholder for when image doesn't load */
        .h-founder-hero-placeholder {
          width: 100%; height: 480px;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 16px; background: var(--blue-light);
        }
        .h-founder-hero-placeholder-icon {
          width: 80px; height: 80px; border-radius: 50%; background: var(--blue);
          display: flex; align-items: center; justify-content: center;
        }
        .h-founder-hero-placeholder-text {
          font-family: 'Sora', sans-serif; font-size: 14px; font-weight: 600;
          color: var(--blue); letter-spacing: 0.08em;
        }

        /* Two-col below the founder photo */
        .h-about-grid {
          display: grid; grid-template-columns: 1.1fr 0.9fr;
          gap: 80px; align-items: start;
        }

        .h-about-h2 {
          font-family: 'Sora', sans-serif;
          font-size: clamp(30px, 3.5vw, 48px); font-weight: 800; line-height: 1.15;
          margin: 0 0 24px; color: var(--text);
        }
        .h-about-h2 span { color: var(--blue); }

        /* ── NEW: bullet points list for About ── */
        .h-about-points {
          list-style: none; padding: 0; margin: 0;
          display: flex; flex-direction: column; gap: 14px;
        }
        .h-about-point {
          display: flex; align-items: flex-start; gap: 12px;
          font-size: 15px; color: var(--text2); line-height: 1.65;
        }
        .h-about-point-dot {
          width: 22px; height: 22px; border-radius: 50%; flex-shrink: 0;
          background: var(--blue-light); border: 1.5px solid var(--blue);
          display: flex; align-items: center; justify-content: center;
          color: var(--blue); margin-top: 2px;
        }
        .h-about-point-dot svg { width: 11px; height: 11px; }

        .h-stats-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 16px;
        }
        .h-stat-box {
          border: 1.5px solid var(--gray-light); border-radius: var(--radius);
          padding: 28px 24px; background: #fff; position: relative; overflow: hidden;
          transition: border-color 0.25s, box-shadow 0.25s;
        }
        .h-stat-box::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, var(--blue), var(--orange)); transform: scaleX(0);
          transform-origin: left; transition: transform 0.4s ease;
        }
        .h-stat-box:hover { border-color: var(--blue-mid); box-shadow: 0 4px 20px rgba(26,86,219,0.10); }
        .h-stat-box:hover::before { transform: scaleX(1); }
        .h-stat-num {
          font-family: 'Sora', sans-serif; font-size: 36px; font-weight: 800;
          color: var(--blue); line-height: 1; margin-bottom: 8px;
        }
        .h-stat-label { font-size: 12px; font-weight: 500; color: var(--gray); line-height: 1.4; }
        .h-stat-bg-num {
          position: absolute; bottom: -8px; right: 12px; font-family: 'Sora', sans-serif;
          font-size: 72px; font-weight: 800; color: var(--blue-light); line-height: 1;
          pointer-events: none; letter-spacing: -0.04em;
        }

        .h-wave { display: block; line-height: 0; margin-bottom: -2px; }

        /* ═══ SERVICES ═══ */
        .h-services {
          background: var(--blue-deep);
          padding: 100px 80px;
          position: relative; overflow: hidden;
        }
        .h-svc-circle1 {
          position: absolute; top: -100px; right: -100px;
          width: 500px; height: 500px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.05);
          pointer-events: none;
        }
        .h-svc-circle2 {
          position: absolute; bottom: -150px; left: -80px;
          width: 400px; height: 400px; border-radius: 50%;
          background: rgba(249,115,22,0.06); pointer-events: none;
        }
        .h-svc-circle3 {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 700px; height: 700px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.03);
          pointer-events: none;
        }

        .h-svc-head-h2 {
          font-family: 'Sora', sans-serif; font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 800; color: #fff; margin: 0 0 12px; line-height: 1.15;
        }
        .h-svc-head-sub { font-size: 15px; color: rgba(255,255,255,0.6); line-height: 1.75; max-width: 520px; }
        .h-svc-head { position: relative; z-index: 1; margin-bottom: 52px; }

        .h-svc-tabs {
          display: flex; gap: 0; border-radius: 10px; overflow: hidden;
          border: 1px solid rgba(255,255,255,0.1); margin-bottom: 0;
          position: relative; z-index: 1;
        }
        .h-svc-tab {
          flex: 1; padding: 18px 12px; background: rgba(255,255,255,0.04);
          border: none; border-right: 1px solid rgba(255,255,255,0.08);
          cursor: pointer; display: flex; align-items: center; gap: 10px;
          text-align: left; transition: background 0.2s;
        }
        .h-svc-tab:last-child { border-right: none; }
        .h-svc-tab.active { background: rgba(249,115,22,0.15); }
        .h-svc-tab:hover:not(.active) { background: rgba(255,255,255,0.07); }
        .h-svc-tab-num {
          font-family: 'Sora', sans-serif; font-size: 11px; font-weight: 700;
          color: var(--orange); opacity: 0.7; flex-shrink: 0;
        }
        .h-svc-tab.active .h-svc-tab-num { opacity: 1; }
        .h-svc-tab-icon { color: rgba(255,255,255,0.4); flex-shrink: 0; }
        .h-svc-tab.active .h-svc-tab-icon { color: var(--orange); }
        .h-svc-tab-icon svg { width: 16px; height: 16px; }
        .h-svc-tab-label {
          font-size: 12px; font-weight: 600; color: rgba(255,255,255,0.5); line-height: 1.3;
        }
        .h-svc-tab.active .h-svc-tab-label { color: #fff; }

        /* ─── SERVICE PANEL ─── */
        .h-svc-panel {
          border: 1px solid rgba(255,255,255,0.1); border-top: 2px solid var(--orange);
          border-radius: 0 0 12px 12px; background: rgba(255,255,255,0.03);
          display: grid;
          grid-template-columns: 1fr 1fr 420px;
          gap: 0;
          align-items: stretch;
          position: relative; z-index: 1;
          overflow: hidden;
        }

        /* Content columns get padding */
        .h-svc-content-col {
          padding: 48px 52px;
        }
        .h-svc-content-col:first-child {
          border-right: 1px solid rgba(255,255,255,0.07);
        }

        /* ─── COUNSELOR IMAGE: large, no box, flush to panel edge ─── */
        .h-svc-counselor-img-wrap {
          position: relative;
          display: block;
          overflow: hidden;
          /* No border, no background, no border-radius on sides touching panel edge */
          border-radius: 0 0 12px 0;
        }
        .h-svc-counselor-img {
          width: 100%;
          height: 100%;
          min-height: 480px;
          object-fit: cover;
          object-position: center top;
          display: block;
          /* Remove white bg from PNG */
          mix-blend-mode: luminosity;
          filter: brightness(1.1) contrast(1.05);
          transition: transform 0.6s ease;
        }
        .h-svc-counselor-img-wrap:hover .h-svc-counselor-img {
          transform: scale(1.04);
        }

        .h-svc-panel-title {
          font-family: 'Sora', sans-serif; font-size: 26px; font-weight: 800;
          color: #fff; margin: 0 0 6px; line-height: 1.2;
        }
        .h-svc-panel-sub {
          font-size: 11px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--orange); margin-bottom: 28px;
        }
        .h-svc-points { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 14px; }
        .h-svc-point { display: flex; align-items: flex-start; gap: 12px; font-size: 14px; color: rgba(255,255,255,0.75); line-height: 1.5; }
        .h-svc-check {
          width: 20px; height: 20px; flex-shrink: 0; border-radius: 50%;
          background: rgba(249,115,22,0.15); border: 1px solid rgba(249,115,22,0.4);
          display: flex; align-items: center; justify-content: center; color: var(--orange); margin-top: 1px;
        }
        .h-svc-check svg { width: 10px; height: 10px; }
        .h-svc-icon-big {
          width: 56px; height: 56px; border-radius: 12px;
          background: rgba(249,115,22,0.1); border: 1px solid rgba(249,115,22,0.2);
          display: flex; align-items: center; justify-content: center; color: var(--orange); margin-bottom: 20px;
        }
        .h-svc-icon-big svg { width: 24px; height: 24px; }

        /* ═══ PROCESS — Flowchart ═══ */
        .h-process {
          background: var(--off);
          padding: 100px 80px;
          position: relative; overflow: hidden;
        }
        .h-proc-diag {
          position: absolute; top: 0; right: 0; bottom: 0;
          width: 40%;
          background: linear-gradient(135deg, transparent 40%, rgba(26,86,219,0.04) 100%);
          pointer-events: none;
        }
        .h-proc-diag2 {
          position: absolute; top: -50px; left: -50px;
          width: 200px; height: 200px; border-radius: 50%;
          border: 1.5px solid var(--blue-light); pointer-events: none;
        }

        .h-proc-head { position: relative; z-index: 1; margin-bottom: 60px; }
        .h-proc-h2 {
          font-family: 'Sora', sans-serif; font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 800; color: var(--text); margin: 0 0 12px; line-height: 1.15;
        }
        .h-proc-sub { font-size: 15px; color: var(--text2); line-height: 1.75; max-width: 520px; }

        .h-flow { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; position: relative; z-index: 1; }
        .h-flow-card {
          background: #fff; border: 1.5px solid var(--gray-light); border-radius: var(--radius);
          padding: 28px 24px; cursor: pointer; transition: all 0.25s; position: relative; overflow: hidden;
        }
        .h-flow-card::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, var(--blue), var(--orange));
          transform: scaleX(0); transform-origin: left; transition: transform 0.35s;
        }
        .h-flow-card.active, .h-flow-card:hover {
          border-color: var(--blue); box-shadow: 0 8px 32px rgba(26,86,219,0.12);
        }
        .h-flow-card.active::after, .h-flow-card:hover::after { transform: scaleX(1); }
        .h-flow-num {
          font-family: 'Sora', sans-serif; font-size: 13px; font-weight: 800;
          color: var(--blue); margin-bottom: 10px; letter-spacing: 0.06em;
        }
        .h-flow-title {
          font-family: 'Sora', sans-serif; font-size: 15px; font-weight: 700;
          color: var(--text); margin-bottom: 8px; line-height: 1.3;
        }
        .h-flow-badge {
          display: inline-block; font-size: 10px; font-weight: 600; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--orange); background: var(--orange-faint);
          padding: 3px 10px; border-radius: 100px; margin-bottom: 12px;
        }
        .h-flow-desc { font-size: 13px; color: var(--gray); line-height: 1.65; margin: 0; }

        .h-flow-connector {
          display: flex; align-items: center; justify-content: center;
          color: var(--blue); opacity: 0.35;
          grid-column: 1 / -1;
        }
        .h-flow-connector svg { width: 20px; height: 20px; }
        
        .h-flow-detail {
          grid-column: 1 / -1; background: var(--blue-deep); border-radius: var(--radius);
          padding: 32px 36px; color: #fff; margin-top: -8px;
          border: 1.5px solid rgba(255,255,255,0.08);
        }
        .h-flow-detail-title {
          font-family: 'Sora', sans-serif; font-size: 17px; font-weight: 700;
          color: #fff; margin-bottom: 16px;
        }
        .h-flow-detail-text { font-size: 14px; color: rgba(255,255,255,0.7); line-height: 1.75; }

        /* ═══ WHY US ═══ */
        .h-why {
          background: #fff; padding: 100px 80px;
          position: relative; overflow: hidden;
        }
        .h-why-decor {
          position: absolute; top: -120px; right: 60px;
          width: 400px; height: 400px; border-radius: 50%;
          border: 1.5px solid var(--gray-light); pointer-events: none;
        }
        .h-why-decor2 {
          position: absolute; bottom: -80px; right: -80px;
          width: 300px; height: 300px; border-radius: 50%;
          background: var(--blue-light); opacity: 0.5; pointer-events: none;
        }
        .h-why-h2 {
          font-family: 'Sora', sans-serif; font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 800; color: var(--text); margin: 0 0 12px; line-height: 1.15;
        }
        .h-why-h2 span { color: var(--blue); }
        .h-why-sub { font-size: 15px; color: var(--text2); line-height: 1.75; max-width: 520px; margin: 0 0 56px; }
        .h-why-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 20px; position: relative; z-index: 1;
        }
        .h-why-card {
          border: 1.5px solid var(--gray-light); border-radius: var(--radius);
          padding: 32px 28px; background: #fff; transition: all 0.25s; position: relative;
        }
        .h-why-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, var(--blue), var(--orange));
          border-radius: var(--radius) var(--radius) 0 0;
          transform: scaleX(0); transform-origin: left; transition: transform 0.35s;
        }
        .h-why-card:hover { box-shadow: 0 8px 32px rgba(26,86,219,0.10); border-color: var(--blue); }
        .h-why-card:hover::before { transform: scaleX(1); }
        .h-why-star { display: flex; gap: 2px; color: var(--orange); margin-bottom: 16px; }
        .h-why-title {
          font-family: 'Sora', sans-serif; font-size: 16px; font-weight: 700;
          color: var(--text); margin: 0 0 10px; line-height: 1.3;
        }
        .h-why-desc { font-size: 13px; color: var(--gray); line-height: 1.7; margin: 0; }
        .h-why-num-big {
          font-family: 'Sora', sans-serif; font-size: 48px; font-weight: 800;
          color: var(--blue-light); line-height: 1; margin-bottom: 16px; letter-spacing: -0.04em;
        }

        /* ═══ TESTIMONIALS ═══ */
        .h-testi {
          background: var(--blue-deep); padding: 100px 80px;
          position: relative; overflow: hidden;
        }
        .h-testi-circle {
          position: absolute; bottom: -200px; right: -100px;
          width: 600px; height: 600px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.04); pointer-events: none;
        }
        .h-testi-circle2 {
          position: absolute; top: -100px; left: -100px;
          width: 400px; height: 400px; border-radius: 50%;
          background: rgba(249,115,22,0.05); pointer-events: none;
        }
        .h-testi-h2 {
          font-family: 'Sora', sans-serif; font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 800; color: #fff; margin: 0 0 12px; line-height: 1.15;
        }
        .h-testi-h2 span { color: var(--orange); }
        .h-testi-sub { font-size: 15px; color: rgba(255,255,255,0.55); line-height: 1.75; max-width: 480px; margin: 0 0 56px; }
        .h-testi-head { position: relative; z-index: 1; }

        .h-testi-slide-wrap { position: relative; z-index: 1; }
        .h-testi-slide {
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px; padding: 48px 52px;
          transition: opacity 0.4s ease;
        }
        .h-testi-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 24px; margin-bottom: 32px; }
        .h-testi-person { display: flex; align-items: center; gap: 16px; }
        .h-testi-avatar {
          width: 52px; height: 52px; border-radius: 50%; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Sora', sans-serif; font-size: 18px; font-weight: 800; color: #fff;
        }
        .h-testi-person-name { font-family: 'Sora', sans-serif; font-size: 17px; font-weight: 700; color: #fff; margin-bottom: 4px; }
        .h-testi-person-prog { font-size: 13px; color: rgba(255,255,255,0.5); line-height: 1.4; }
        .h-testi-inst-badge {
          display: flex; align-items: center; gap: 12px; flex-shrink: 0;
          border: 1px solid rgba(255,255,255,0.1); border-radius: 10px;
          padding: 12px 18px; background: rgba(255,255,255,0.04);
        }
        .h-testi-inst-logo {
          width: 36px; height: 36px; border-radius: 6px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Sora', sans-serif; font-size: 9px; font-weight: 800; color: #fff;
        }
        .h-testi-inst-name { font-size: 13px; font-weight: 600; color: #fff; }
        .h-testi-inst-verified { font-size: 10px; color: rgba(255,255,255,0.45); margin-top: 2px; }

        .h-testi-headline {
          font-family: 'Sora', sans-serif; font-size: 20px; font-weight: 700;
          color: #fff; margin-bottom: 24px; line-height: 1.3;
          border-left: 3px solid var(--orange); padding-left: 16px;
        }
        .h-testi-points { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px; }
        .h-testi-point { display: flex; align-items: flex-start; gap: 12px; font-size: 14.5px; color: rgba(255,255,255,0.7); line-height: 1.5; }
        .h-testi-point-check {
          width: 20px; height: 20px; border-radius: 50%; flex-shrink: 0;
          background: rgba(249,115,22,0.15); border: 1px solid rgba(249,115,22,0.35);
          display: flex; align-items: center; justify-content: center; color: var(--orange); margin-top: 1px;
        }
        .h-testi-point-check svg { width: 10px; height: 10px; }
        .h-testi-stars { display: flex; gap: 2px; color: var(--orange); margin-top: 24px; }

        .h-testi-controls { display: flex; align-items: center; justify-content: space-between; margin-top: 28px; }
        .h-testi-dots { display: flex; gap: 8px; align-items: center; }
        .h-testi-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: rgba(255,255,255,0.2); cursor: pointer; transition: all 0.2s; border: none;
        }
        .h-testi-dot.active { background: var(--orange); width: 24px; border-radius: 4px; }
        .h-testi-arrows { display: flex; gap: 8px; }
        .h-testi-arrow {
          width: 42px; height: 42px; border-radius: 50%;
          background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12);
          color: #fff; cursor: pointer; display: flex; align-items: center; justify-content: center;
          transition: all 0.2s;
        }
        .h-testi-arrow:hover { background: var(--orange); border-color: var(--orange); }
        .h-testi-arrow svg { width: 16px; height: 16px; }

        .h-testi-counter { font-size: 13px; color: rgba(255,255,255,0.4); font-weight: 600; }

        /* ═══ CTA ═══ */
        .h-cta {
          background: #fff; padding: 100px 80px;
          position: relative; overflow: hidden;
          border-top: 1px solid var(--gray-light);
        }
        .h-cta-circle {
          position: absolute; bottom: -200px; left: -100px;
          width: 500px; height: 500px; border-radius: 50%;
          background: var(--blue-light); opacity: 0.4; pointer-events: none;
        }
        .h-cta-circle2 {
          position: absolute; top: -100px; right: -80px;
          width: 350px; height: 350px; border-radius: 50%;
          background: var(--orange-faint); pointer-events: none;
        }
        .h-cta-inner { max-width: 720px; margin: 0 auto; text-align: center; position: relative; z-index: 1; }
        .h-cta-h2 {
          font-family: 'Sora', sans-serif; font-size: clamp(32px, 4.5vw, 56px);
          font-weight: 800; color: var(--text); line-height: 1.1; margin: 0 0 20px;
        }
        .h-cta-h2 span { color: var(--blue); }
        .h-cta-sub { font-size: 16px; color: var(--text2); line-height: 1.75; margin: 0 0 44px; }
        .h-cta-btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; margin-bottom: 72px; }
        .h-btn-primary {
          font-family: 'Sora', sans-serif; font-size: 13px; font-weight: 700;
          letter-spacing: 0.06em; text-transform: uppercase;
          background: var(--orange); color: #fff; border: none;
          padding: 15px 36px; border-radius: 8px; cursor: pointer;
          transition: all 0.2s; text-decoration: none; display: inline-block;
          box-shadow: 0 4px 20px rgba(249,115,22,0.35);
        }
        .h-btn-primary:hover { background: var(--orange-light); transform: translateY(-2px); box-shadow: 0 8px 28px rgba(249,115,22,0.45); }
        .h-btn-outline {
          font-family: 'Sora', sans-serif; font-size: 13px; font-weight: 700;
          letter-spacing: 0.06em; text-transform: uppercase;
          background: transparent; color: var(--blue);
          border: 2px solid var(--blue); padding: 13px 32px;
          border-radius: 8px; cursor: pointer;
          transition: all 0.2s; text-decoration: none; display: inline-block;
        }
        .h-btn-outline:hover { background: var(--blue); color: #fff; }
        .h-contact-strip { display: flex; justify-content: center; gap: 48px; flex-wrap: wrap; padding-top: 48px; border-top: 1px solid var(--gray-light); }
        .h-contact-item { display: flex; align-items: center; gap: 14px; }
        .h-contact-icon {
          width: 44px; height: 44px; border: 1.5px solid var(--blue-light); border-radius: 10px;
          display: flex; align-items: center; justify-content: center; color: var(--blue); flex-shrink: 0;
          background: var(--blue-light);
        }
        .h-contact-icon svg { width: 17px; height: 17px; }
        .h-contact-label { font-size: 10px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--gray); margin-bottom: 4px; }
        .h-contact-val { font-size: 14px; font-weight: 600; color: var(--text); }

        /* ── Responsive ── */
        @media (max-width: 1200px) {
          .h-svc-panel {
            grid-template-columns: 1fr 1fr;
          }
          .h-svc-counselor-img-wrap {
            grid-column: 1 / -1;
            border-radius: 0 0 12px 12px;
          }
          .h-svc-counselor-img {
            min-height: 420px;
            max-height: 500px;
            object-position: center 20%;
          }
        }

        @media (max-width: 1024px) {
          .h-about, .h-services, .h-process, .h-why, .h-testi, .h-cta { padding: 80px 48px; }
          .h-about-grid { grid-template-columns: 1fr; gap: 52px; }
          .h-founder-hero img { height: 380px; }
          .h-svc-panel { grid-template-columns: 1fr; }
          .h-svc-content-col { padding: 36px 36px; }
          .h-svc-counselor-img-wrap {
            grid-column: unset;
            border-radius: 0 0 12px 12px;
          }
          .h-svc-counselor-img {
            min-height: 400px;
            max-height: 480px;
          }
          .h-why-grid { grid-template-columns: repeat(2,1fr); }
          .h-flow { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .h-about, .h-services, .h-process, .h-why, .h-testi, .h-cta { padding: 64px 24px; }
          .h-founder-hero img { height: 280px; }
          .h-founder-hero-overlay { padding: 28px 24px 20px; flex-direction: column; gap: 12px; }
          .h-founder-hero-name { font-size: 20px; }
          .h-svc-tabs { flex-direction: column; }
          .h-svc-tab { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.08); }
          .h-svc-content-col { padding: 28px 24px; }
          .h-svc-counselor-img {
            min-height: 340px;
            max-height: 420px;
          }
          .h-why-grid { grid-template-columns: 1fr; }
          .h-flow { grid-template-columns: 1fr; }
          .h-testi-slide { padding: 32px 24px; }
          .h-testi-top { flex-direction: column; }
          .h-stats-grid { grid-template-columns: 1fr 1fr; }
          .h-contact-strip { gap: 24px; flex-direction: column; align-items: center; }
        }
      `}</style>

      <div className="h">

        {/* ══ COLLEGE STRIPS ══ */}
        <div className="h-strip-wrap">
          <div style={{padding:'8px 32px 0', display:'flex', gap:'12px', alignItems:'center'}}>
            <span className="h-strip-label">AP · TS Colleges</span>
          </div>
          <div className="h-strip">
            <div className="h-strip-track">
              {[...Array(2)].map((_, pass) =>
                regionalColleges.map((c, i) => (
                  <div key={`r-${pass}-${i}`} className="h-strip-item">
                    <div className="h-strip-logo">
                      <img src={c.image} alt={c.name} onError={e => { e.target.style.display='none'; if(e.target.nextSibling) e.target.nextSibling.style.display='flex'; }} />
                      <span className="h-strip-logo-text" style={{display:'none'}}>{c.short}</span>
                    </div>
                    <span className="h-strip-name">{c.name}</span>
                    <span className="h-strip-state">{c.state}</span>
                  </div>
                ))
              )}
            </div>
          </div>
          <div style={{borderTop:'1px solid var(--gray-light)', padding:'0 0 0 0'}}>
            <div style={{padding:'8px 32px 0', display:'flex', gap:'12px', alignItems:'center'}}>
              <span className="h-strip-label">National</span>
            </div>
            <div className="h-strip">
              <div className="h-strip-track" style={{animationDirection:'reverse', animationDuration:'28s'}}>
                {[...Array(2)].map((_, pass) =>
                  nationalColleges.map((c, i) => (
                    <div key={`n-${pass}-${i}`} className="h-strip-item">
                      <div className="h-strip-logo" style={{background: c.color + '22', border:`1px solid ${c.color}44`}}>
                        <span className="h-strip-logo-text" style={{color: c.color, display:'flex'}}>{c.short}</span>
                      </div>
                      <span className="h-strip-name">{c.name}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ══ ABOUT US ══ */}
        <section className="h-about">
          <div className="h-about-decor" />
          <div className="h-about-decor2" />
          <RevealSection>
            <div className="h-about-inner">

              {/* ── CHANGE: Large founder photo at the top ── */}
              <div className="h-founder-hero">
                <img
                  src="/images/founder.jpg"
                  alt="Founder — Maharsh Edutech"
                  onError={e => {
                    e.target.style.display = 'none';
                    // show placeholder sibling
                    const placeholder = e.target.parentElement.querySelector('.h-founder-hero-placeholder');
                    if (placeholder) placeholder.style.display = 'flex';
                  }}
                />
                {/* Placeholder shown when image fails */}
                <div className="h-founder-hero-placeholder" style={{display:'none'}}>
                  <div className="h-founder-hero-placeholder-icon">
                    <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                  <div className="h-founder-hero-placeholder-text">Founder Photo</div>
                </div>
                {/* Overlay with name/title */}
                <div className="h-founder-hero-overlay">
                  <div>
                    <div className="h-founder-hero-name">Founder Name</div>
                    <div className="h-founder-hero-title">Founder & CEO · Maharsh Edutech Pvt Ltd</div>
                  </div>
                  <div className="h-founder-hero-badge">
                    NCDA Certified<br />Career Counselor<br />15+ Years
                  </div>
                </div>
              </div>

              {/* ── Two-col: text + stats ── */}
              <div className="h-about-grid">
                <div>
                  <div className="h-pill"><div className="h-pill-dot" /> About Maharsh Edutech</div>
                  <h2 className="h-about-h2 h-sora">
                    AP & Telangana's Most<br /><span>Trusted Education Partner</span>
                  </h2>

                  {/* ── CHANGE: bullet points instead of paragraphs ── */}
                  <ul className="h-about-points">
                    {aboutPoints.map((pt, i) => (
                      <li key={i} className="h-about-point">
                        <div className="h-about-point-dot">
                          <Icons.Check />
                        </div>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats */}
                <div style={{paddingTop:'52px'}}>
                  <div className="h-stats-grid">
                    {aboutStats.map((s, i) => (
                      <div key={i} className="h-stat-box">
                        <div className="h-stat-bg-num">{s.num.replace(/[^0-9]/g,'')}</div>
                        <div className="h-stat-num">{s.num}</div>
                        <div className="h-stat-label">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </RevealSection>
        </section>

        {/* Wave */}
        <svg className="h-wave" viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%', background:'var(--blue-deep)'}}>
          <path d="M0 0 C480 48 960 0 1440 48 L1440 48 L0 48 Z" fill="white"/>
        </svg>

        {/* ══ SERVICES ══ */}
        <section className="h-services">
          <div className="h-svc-circle1" />
          <div className="h-svc-circle2" />
          <div className="h-svc-circle3" />

          <RevealSection>
            <div className="h-svc-head">
              <div className="h-pill orange"><div className="h-pill-dot" /> What We Do</div>
              <h2 className="h-svc-head-h2 h-sora">Four Pillars of Complete Support</h2>
              <p className="h-svc-head-sub">Every service addresses one specific dimension of building your educational career.</p>
            </div>
          </RevealSection>

          <RevealSection delay={120}>
            <div className="h-svc-tabs">
              {services.map((s, i) => (
                <button
                  key={i}
                  className={`h-svc-tab${activeService === i ? ' active' : ''}`}
                  onClick={() => setActiveService(i)}
                >
                  <span className="h-svc-tab-num">{s.num}</span>
                  <span className="h-svc-tab-icon">
                    {Icons[s.icon] && React.createElement(Icons[s.icon])}
                  </span>
                  <span className="h-svc-tab-label">{s.title}</span>
                </button>
              ))}
            </div>

            <div className="h-svc-panel">

              {/* Column 1 — Icon & Title */}
              <div className="h-svc-content-col">
                <div className="h-svc-icon-big">
                  {Icons[services[activeService].icon] && React.createElement(Icons[services[activeService].icon])}
                </div>
                <div className="h-svc-panel-sub">{services[activeService].subtitle}</div>
                <div className="h-svc-panel-title">{services[activeService].title}</div>
              </div>

              {/* Column 2 — Checklist */}
              <div className="h-svc-content-col">
                <div style={{fontSize:'10px',fontWeight:700,letterSpacing:'0.18em',textTransform:'uppercase',color:'rgba(255,255,255,0.35)',marginBottom:'18px'}}>
                  What's Included
                </div>
                <ul className="h-svc-points">
                  {services[activeService].points.map((pt, i) => (
                    <li key={i} className="h-svc-point">
                      <div className="h-svc-check"><Icons.Check /></div>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3 — Counselor Image: large, no box, flush */}
              <div className="h-svc-counselor-img-wrap">
                <img
                  className="h-svc-counselor-img"
                  src="/counselor.png"
                  alt="Maharsh Edutech Counselor"
                  onError={e => {
                    e.target.parentElement.style.display = 'none';
                  }}
                />
              </div>

            </div>
          </RevealSection>
        </section>

        {/* Wave */}
        <svg className="h-wave" viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%', background:'var(--off)'}}>
          <path d="M0 48 C480 0 960 48 1440 0 L1440 0 L0 0 Z" fill="var(--blue-deep)"/>
        </svg>

        {/* ══ PROCESS ══ */}
        <section className="h-process">
          <div className="h-proc-diag" />
          <div className="h-proc-diag2" />

          <RevealSection>
            <div className="h-proc-head">
              <div className="h-pill"><div className="h-pill-dot" /> How It Works</div>
              <h2 className="h-proc-h2 h-sora">Your Path, Step by Step</h2>
              <p className="h-proc-sub">Click any step to see details. Six stages — each building on the last.</p>
            </div>
          </RevealSection>

          <RevealSection delay={100}>
            <div className="h-flow">
              {processSteps.map((step, i) => (
                <React.Fragment key={i}>
                  <div
                    className={`h-flow-card${activeStep === i ? ' active' : ''}`}
                    onClick={() => setActiveStep(activeStep === i ? null : i)}
                  >
                    <div className="h-flow-num">{step.num}</div>
                    <div className="h-flow-title">{step.title}</div>
                    <div className="h-flow-badge">{step.badge}</div>
                    <p className="h-flow-desc">{step.desc}</p>
                  </div>
                  {activeStep === i && (i % 3 === 2 || i === processSteps.length - 1 || (i < 3 && i === processSteps.slice(0,3).lastIndexOf(processSteps[activeStep]))) && (
                    <div className="h-flow-detail">
                      <div className="h-flow-detail-title">{step.title}</div>
                      <div className="h-flow-detail-text">{step.desc}</div>
                    </div>
                  )}
                </React.Fragment>
              ))}
              {activeStep !== null && activeStep < 3 && (
                <div className="h-flow-detail" style={{gridColumn:'1/-1', marginTop:'-8px'}}>
                  <div className="h-flow-detail-title">{processSteps[activeStep].title} · {processSteps[activeStep].badge}</div>
                  <div className="h-flow-detail-text">{processSteps[activeStep].desc}</div>
                </div>
              )}
            </div>
          </RevealSection>
        </section>

        {/* Wave */}
        <svg className="h-wave" viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%', background:'#fff'}}>
          <path d="M0 0 C480 48 960 0 1440 48 L1440 48 L0 48 Z" fill="var(--off)"/>
        </svg>

        {/* ══ WHY US ══ */}
        <section className="h-why">
          <div className="h-why-decor" />
          <div className="h-why-decor2" />
          <RevealSection>
            <div className="h-pill"><div className="h-pill-dot" /> Why Maharsh Edutech</div>
            <h2 className="h-why-h2 h-sora">Built on Integrity.<br /><span>Delivered with Expertise.</span></h2>
            <p className="h-why-sub">Structurally independent. Data-driven. Accountable to outcomes — not commissions.</p>
          </RevealSection>
          <RevealSection delay={100}>
            <div className="h-why-grid">
              {whyUs.map((item, i) => (
                <div key={i} className="h-why-card">
                  <div className="h-why-num-big">{item.num}</div>
                  <div className="h-why-star">
                    {[...Array(5)].map((_, j) => <Icons.Star key={j} />)}
                  </div>
                  <div className="h-why-title">{item.title}</div>
                  <p className="h-why-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </RevealSection>
        </section>

        {/* Wave */}
        <svg className="h-wave" viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%', background:'var(--blue-deep)'}}>
          <path d="M0 48 C480 0 960 48 1440 0 L1440 0 L0 0 Z" fill="#fff"/>
        </svg>

        {/* ══ TESTIMONIALS ══ */}
        <section className="h-testi">
          <div className="h-testi-circle" />
          <div className="h-testi-circle2" />

          <RevealSection>
            <div className="h-testi-head">
              <div className="h-pill orange"><div className="h-pill-dot" /> Student Stories</div>
              <h2 className="h-testi-h2 h-sora">5,000+ Students.<br /><span>One Consistent Result.</span></h2>
              <p className="h-testi-sub">Real outcomes from engineering, medical, law & international programs.</p>
            </div>
          </RevealSection>

          <RevealSection delay={100}>
            <div className="h-testi-slide-wrap">
              <div className="h-testi-slide" style={{opacity: 1}}>
                <div className="h-testi-top">
                  <div className="h-testi-person">
                    <div className="h-testi-avatar" style={{background: testimonials[activeTesti].instColor}}>
                      {testimonials[activeTesti].name.split(' ').map(n=>n[0]).join('')}
                    </div>
                    <div>
                      <div className="h-testi-person-name">{testimonials[activeTesti].name}</div>
                      <div className="h-testi-person-prog">{testimonials[activeTesti].program}</div>
                    </div>
                  </div>
                  <div className="h-testi-inst-badge">
                    <div className="h-testi-inst-logo" style={{background: testimonials[activeTesti].instColor}}>
                      {testimonials[activeTesti].instAbbr}
                    </div>
                    <div>
                      <div className="h-testi-inst-name">{testimonials[activeTesti].institution}</div>
                      <div className="h-testi-inst-verified">✓ Verified Admission</div>
                    </div>
                  </div>
                </div>

                <div className="h-testi-headline">{testimonials[activeTesti].headline}</div>

                <ul className="h-testi-points">
                  {testimonials[activeTesti].points.map((pt, i) => (
                    <li key={i} className="h-testi-point">
                      <div className="h-testi-point-check"><Icons.Check /></div>
                      {pt}
                    </li>
                  ))}
                </ul>

                <div className="h-testi-stars">
                  {[...Array(testimonials[activeTesti].rating)].map((_, j) => <Icons.Star key={j} />)}
                </div>
              </div>

              <div className="h-testi-controls">
                <div style={{display:'flex', alignItems:'center', gap:'16px'}}>
                  <div className="h-testi-dots">
                    {testimonials.map((_, i) => (
                      <button key={i} className={`h-testi-dot${activeTesti === i ? ' active' : ''}`} onClick={() => goTesti(i)} />
                    ))}
                  </div>
                  <span className="h-testi-counter">{activeTesti + 1} / {testimonials.length}</span>
                </div>
                <div className="h-testi-arrows">
                  <button className="h-testi-arrow" onClick={() => goTesti((activeTesti - 1 + testimonials.length) % testimonials.length)}>
                    <Icons.ChevronLeft />
                  </button>
                  <button className="h-testi-arrow" onClick={() => goTesti((activeTesti + 1) % testimonials.length)}>
                    <Icons.ChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </RevealSection>
        </section>

        {/* Wave */}
        <svg className="h-wave" viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%', background:'#fff'}}>
          <path d="M0 0 C480 48 960 0 1440 48 L1440 48 L0 48 Z" fill="var(--blue-deep)"/>
        </svg>

        {/* ══ CTA ══ */}
        <section className="h-cta">
          <div className="h-cta-circle" />
          <div className="h-cta-circle2" />
          <RevealSection>
            <div className="h-cta-inner">
              <div className="h-pill" style={{justifyContent:'center'}}>
                <div className="h-pill-dot" /> Take the First Step
              </div>
              <h2 className="h-cta-h2 h-sora">Your Career Path Starts<br />with <span>One Conversation</span></h2>
              <p className="h-cta-sub">
                Book a free 30-minute session with a certified counselor. No sales pitch. No pressure. Just honest, expert guidance.
              </p>
              <div className="h-cta-btns">
                <a href="/counseling" className="h-btn-primary">Book Free Counseling</a>
                <a href="/services" className="h-btn-outline">Explore All Services</a>
              </div>
              
                
              
            </div>
          </RevealSection>
        </section>

      </div>
    </>
  );
}