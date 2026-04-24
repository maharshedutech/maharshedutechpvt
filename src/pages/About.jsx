// src/pages/About.jsx
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
      transform: visible ? "translateY(0)" : "translateY(44px)",
      transition: `opacity 0.9s cubic-bezier(.22,1,.36,1) ${delay}ms, transform 0.9s cubic-bezier(.22,1,.36,1) ${delay}ms`,
      ...style,
    }}>{children}</div>
  );
}

const pillars = [
  {
    num: "01",
    title: "Career Counseling & Guidance",
    caption: "Clarity before commitment",
    body: [
      "Before a student can choose the right institution, they must understand themselves — their aptitudes, values, learning style, and long-term ambitions. This is where the Maharsh Edutech process begins. Career counseling is not an advisory formality. It is the intellectual core of everything we do.",
      "Our certified counselors conduct psychometric assessments validated against industry employment data, measure aptitude across verbal, logical, numerical, and spatial domains, and evaluate personality dimensions through structured frameworks. The output is a written career report — 20 to 30 pages — that maps the student's profile against real-world career trajectories, salary benchmarks, and growth projections across multiple sectors.",
      "We work with students from Class 10 onwards, helping them navigate stream selection, entrance exam strategy, and the longer-arc question of what profession they are genuinely building towards. Sessions are conducted in Telugu, Tamil, Hindi, Malayalam, Kannada, and Marathi, so every student receives guidance in the language they think most clearly in.",
    ],
    metrics: [
      { val: "90 min", label: "Deep-dive sessions" },
      { val: "6", label: "Regional languages" },
      { val: "3", label: "Pathway projections per student" },
    ],
  },
  {
    num: "02",
    title: "Application Support",
    caption: "Every word, every document, every deadline",
    body: [
      "An exceptional application does not describe a student's academic record — it communicates their intellectual character, their specific ambitions, and the precise reasons why they belong at a particular institution. The difference between a shortlisted and rejected application is often not grades or test scores. It is the quality of the narrative.",
      "Our application support team includes specialists with direct experience of what Indian and international admissions committees evaluate. We draft and refine Statements of Purpose through four rounds of expert review — substantive challenges to framing, specificity, and authenticity. We build Letter of Recommendation strategies that brief referees on what to emphasise. We coach students through personal essays, supplemental materials, and institution-specific questions.",
      "For every application in a student's shortlist, we align the materials to that institution's stated values and evaluation rubrics. We handle document verification, authentication, and submission. We track deadlines across all institutions simultaneously and ensure nothing is missed.",
    ],
    metrics: [
      { val: "4×", label: "SOP review rounds" },
      { val: "250+", label: "Partner institutions" },
      { val: "100%", label: "Deadline compliance" },
    ],
  },
  {
    num: "03",
    title: "End-to-End Admissions — India & Abroad",
    caption: "From shortlist to enrollment, we own every step",
    body: [
      "The admission process in India is one of the most operationally complex in the world. JEE, NEET, CLAT, NIFT, NATA, CAT, and state-level counseling processes each operate on different calendars, quota structures, and choice-filling logic. A student navigating all of this alone — while managing exam preparation — is at a structural disadvantage. We eliminate that disadvantage entirely.",
      "For Indian admissions, our counseling teams are present during every critical round — JOSAA, MCC, DASA, state quota rounds, and management quota processes. We maintain real-time access to seat availability data, historical cutoff trends disaggregated by category and state, and institutional scholarship information. Our choice-filling strategies are data-driven, risk-adjusted, and built around the specific student's rank, category, and goals.",
      "For international admissions, our specialist teams have placed students in universities across 18 countries including the USA, UK, Canada, Australia, Germany, Singapore, Ireland, Netherlands, UAE, and New Zealand. We coordinate university shortlisting, application submission, financial documentation, visa interviews, pre-departure orientation, and post-arrival community connection.",
    ],
    metrics: [
      { val: "18", label: "Countries for abroad" },
      { val: "250+", label: "Indian partner institutions" },
      { val: "98%", label: "Top-3 admission rate" },
    ],
  },
  {
    num: "04",
    title: "Education Loan Assistance",
    caption: "The right funding, on the right terms",
    body: [
      "The financial dimension of higher education is among the most consequential and least well-understood aspects of the process. Many families make loan decisions under time pressure, without adequate comparative information, and without understanding the long-term implications of interest structures, moratorium terms, or collateral requirements.",
      "Our financial advisors assess each family's eligibility profile, the institution's existing lender relationships, and the student's likely post-graduation income trajectory. We then build a comprehensive funding plan combining scholarships, institutional fee waivers, and loan structures across 14 banking and NBFC partners — all selected for that specific student's situation. We do not receive referral commissions from any lender.",
      "Before any loan agreement is signed, our advisors conduct a detailed EMI and repayment counseling session — including the Section 80E income tax benefit available on education loan interest — so families make their decision with complete information.",
    ],
    metrics: [
      { val: "14", label: "Lending partners" },
      { val: "₹0", label: "Commission from lenders" },
      { val: "80E", label: "Tax benefit advisory included" },
    ],
  },
];

const values = [
  {
    letter: "A",
    title: "Independence",
    desc: "We accept no commission, referral fee, or incentive payment from any institution, lender, or third party. Our revenue comes entirely from our clients. This structural independence is the foundation of every honest recommendation we make.",
  },
  {
    letter: "B",
    title: "Accountability",
    desc: "The same senior counselor who conducts your discovery session owns your file through enrollment. We do not hand students off to junior executives at critical moments. Accountability is personal, named, and tracked.",
  },
  {
    letter: "C",
    title: "Evidence",
    desc: "Every recommendation is grounded in data — placement statistics, admission cutoff trends, salary benchmarks, and alumni outcome tracking, updated annually. We do not advise from intuition or institutional reputation alone.",
  },
  {
    letter: "D",
    title: "Continuity",
    desc: "Our relationship with students does not end at enrollment. We conduct semester check-in calls, provide mentorship through internship and placement season, and track long-term outcomes. A student who comes to us at 16 may still be in contact with their counselor at 26.",
  },
];

const stats = [
  { val: "12+", sub: "Years in Operation" },
  { val: "5,000+", sub: "Students Guided" },
  { val: "250+", sub: "Partner Institutions" },
  { val: "18", sub: "Countries" },
  { val: "98%", sub: "Top-3 Success Rate" },
  { val: "40+", sub: "Certified Counselors" },
];

const commitments = [
  { title: "A named counselor from day one to enrollment", desc: "You will never be handed off. The same senior counselor who conducts your first session owns your file through every stage of the process." },
  { title: "Advice that is never influenced by commission", desc: "We earn nothing from colleges, lenders, or third parties. Every recommendation exists solely because it serves your interest." },
  { title: "Written documentation of every recommendation", desc: "Every career pathway recommendation, college shortlist, and financial plan is provided in writing — so you can review, question, and refer back to it." },
  { title: "Real-time availability during critical windows", desc: "During JEE, NEET, state counseling rounds, and visa application deadlines, a senior counselor is reachable — not a chatbot, not a junior executive." },
  { title: "Post-enrollment support through your first year", desc: "Semester check-in calls, mentorship connections, and ongoing career guidance continue well beyond the day you receive your admission letter." },
  { title: "Transparent outcome data upon request", desc: "We publish our admission outcome statistics annually and share historical placement data for any institution or program you are considering." },
];

export default function About() {
  const [activePillar, setActivePillar] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,400;0,600;0,700;1,400;1,700&family=Syne:wght@400;500;600;700;800&display=swap');

        :root {
          --g: #C6A84B;
          --g2: #DFC06E;
          --gdim: rgba(198,168,75,0.09);
          --gborder: rgba(198,168,75,0.18);
          --ink: #080808;
          --ink2: #101010;
          --ink3: #181818;
          --smoke: rgba(255,255,255,0.88);
          --muted: rgba(255,255,255,0.48);
          --faint: rgba(255,255,255,0.22);
          --hair: rgba(255,255,255,0.06);
        }

        .ab * { box-sizing: border-box; }
        .ab { font-family: 'Syne', sans-serif; background: var(--ink); color: var(--smoke); line-height: 1; }

        .ab-tag {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 9.5px; font-weight: 700; letter-spacing: 0.28em;
          text-transform: uppercase; color: var(--g);
        }
        .ab-tag-line { height: 1px; width: 28px; background: var(--g); flex-shrink: 0; }

        /* ── HERO ── */
        .ab-hero {
          min-height: 92vh; display: grid; grid-template-columns: 1fr 1fr;
          border-bottom: 1px solid var(--gborder); position: relative; overflow: hidden;
        }
        .ab-hero-left {
          padding: 100px 80px; display: flex; flex-direction: column; justify-content: flex-end;
          border-right: 1px solid var(--gborder); position: relative; z-index: 1;
        }
        .ab-hero-right {
          display: flex; flex-direction: column; justify-content: space-between;
          padding: 100px 72px; position: relative; background: var(--ink2);
        }
        .ab-hero-bg {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 80% 60% at 80% 40%, rgba(198,168,75,0.05) 0%, transparent 65%);
          pointer-events: none;
        }
        .ab-hero-h1 {
          font-family: 'Cormorant', Georgia, serif;
          font-size: clamp(52px, 7vw, 96px); font-weight: 700;
          line-height: 0.95; margin: 28px 0 36px; letter-spacing: -0.01em;
        }
        .ab-hero-h1 em { font-style: italic; color: var(--g); }
        .ab-hero-lead { font-size: 15px; color: var(--muted); line-height: 1.82; max-width: 480px; margin: 0; }

        .ab-manifesto {
          border-left: 2px solid var(--g); padding: 28px 32px; background: var(--gdim);
        }
        .ab-manifesto-text {
          font-family: 'Cormorant', serif; font-size: 21px; font-style: italic;
          color: var(--smoke); line-height: 1.65; margin: 0;
        }
        .ab-hero-stats { display: flex; flex-direction: column; gap: 0; }
        .ab-hero-stat {
          display: flex; align-items: baseline; gap: 16px; padding: 20px 0;
          border-bottom: 1px solid var(--hair);
        }
        .ab-hero-stat:last-child { border-bottom: none; }
        .ab-hero-stat-val {
          font-family: 'Cormorant', serif; font-size: 36px; font-weight: 700;
          color: var(--g); line-height: 1; flex-shrink: 0; min-width: 80px;
        }
        .ab-hero-stat-label { font-size: 12px; color: var(--muted); }

        /* ── ORIGIN ── */
        .ab-origin {
          padding: 120px 80px; background: var(--ink2);
          display: grid; grid-template-columns: 300px 1fr; gap: 100px;
          border-bottom: 1px solid var(--gborder);
        }
        .ab-origin-h2 {
          font-family: 'Cormorant', serif; font-size: clamp(34px, 3.5vw, 52px);
          font-weight: 700; line-height: 1.08; margin: 14px 0 0;
        }
        .ab-origin-h2 em { font-style: italic; color: var(--g); }
        .ab-origin-paras { display: flex; flex-direction: column; gap: 22px; }
        .ab-origin-para { font-size: 15px; color: var(--muted); line-height: 1.88; margin: 0; }
        .ab-origin-para strong { color: var(--smoke); font-weight: 600; }

        /* ── PILLARS ACCORDION ── */
        .ab-pillars { background: var(--ink); border-bottom: 1px solid var(--gborder); }
        .ab-pillars-header { padding: 100px 80px 0; }
        .ab-pillars-h2 {
          font-family: 'Cormorant', serif;
          font-size: clamp(32px, 4vw, 54px); font-weight: 700; line-height: 1.05; margin: 14px 0 0;
        }
        .ab-pillars-h2 em { font-style: italic; color: var(--g); }

        .ab-accordion { margin-top: 64px; border-top: 1px solid var(--gborder); }
        .ab-acc-row { border-bottom: 1px solid var(--gborder); overflow: hidden; }
        .ab-acc-trigger {
          width: 100%; padding: 0 80px;
          display: grid; grid-template-columns: 72px 1fr 44px;
          align-items: center; gap: 32px;
          cursor: pointer; background: none; border: none; text-align: left;
          transition: background 0.25s; min-height: 90px;
        }
        .ab-acc-trigger:hover { background: rgba(255,255,255,0.015); }
        .ab-acc-row.open .ab-acc-trigger { background: var(--gdim); }
        .ab-acc-num {
          font-family: 'Cormorant', serif; font-size: 13px; font-weight: 700;
          color: var(--g); letter-spacing: 0.06em;
        }
        .ab-acc-title-wrap {}
        .ab-acc-title {
          font-family: 'Cormorant', serif; font-size: 24px; font-weight: 700;
          color: var(--smoke); line-height: 1.2; margin-bottom: 3px;
        }
        .ab-acc-caption {
          font-size: 10.5px; color: var(--muted); letter-spacing: 0.12em; text-transform: uppercase;
        }
        .ab-acc-icon {
          width: 40px; height: 40px; border: 1px solid var(--gborder); border-radius: 50%;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
          transition: all 0.3s;
        }
        .ab-acc-row.open .ab-acc-icon { background: var(--g); border-color: var(--g); transform: rotate(45deg); }
        .ab-acc-icon svg { width: 14px; height: 14px; color: var(--g); }
        .ab-acc-row.open .ab-acc-icon svg { color: var(--ink); }

        .ab-acc-body { max-height: 0; overflow: hidden; transition: max-height 0.65s cubic-bezier(.22,1,.36,1); }
        .ab-acc-row.open .ab-acc-body { max-height: 1400px; }
        .ab-acc-inner {
          padding: 0 80px 64px;
          display: grid; grid-template-columns: 1fr 260px; gap: 80px;
        }
        .ab-acc-paras { display: flex; flex-direction: column; gap: 20px; }
        .ab-acc-para { font-size: 14.5px; color: var(--muted); line-height: 1.88; margin: 0; }
        .ab-acc-para:first-child { color: rgba(255,255,255,0.70); font-size: 15.5px; }
        .ab-metrics { display: flex; flex-direction: column; gap: 1px; align-self: start; }
        .ab-metric {
          border: 1px solid var(--gborder); background: var(--ink2);
          padding: 22px 24px; border-bottom: none;
        }
        .ab-metric:first-child { border-radius: 3px 3px 0 0; }
        .ab-metric:last-child { border-bottom: 1px solid var(--gborder); border-radius: 0 0 3px 3px; }
        .ab-metric-val {
          font-family: 'Cormorant', serif; font-size: 32px; font-weight: 700;
          color: var(--g); line-height: 1; margin-bottom: 6px;
        }
        .ab-metric-label { font-size: 11px; color: var(--muted); }

        /* ── VALUES ── */
        .ab-values { padding: 120px 80px; background: var(--ink2); border-bottom: 1px solid var(--gborder); }
        .ab-values-h2 {
          font-family: 'Cormorant', serif;
          font-size: clamp(30px,3.5vw,50px); font-weight: 700; line-height:1.05; margin: 14px 0 56px;
        }
        .ab-values-h2 em { font-style: italic; color: var(--g); }
        .ab-values-grid {
          display: grid; grid-template-columns: repeat(4,1fr); gap: 1px;
          border: 1px solid var(--gborder); border-radius: 3px; overflow: hidden;
        }
        .ab-value-card {
          background: var(--ink); padding: 44px 32px;
          border-right: 1px solid var(--gborder);
          position: relative; transition: background 0.25s;
        }
        .ab-value-card:hover { background: var(--ink3); }
        .ab-value-card::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 2px;
          background: var(--g); transform: scaleX(0); transform-origin: left;
          transition: transform 0.4s ease;
        }
        .ab-value-card:hover::after { transform: scaleX(1); }
        .ab-value-glyph {
          font-family: 'Cormorant', serif; font-size: 72px; font-weight: 700;
          color: rgba(198,168,75,0.08); line-height: 1; margin-bottom: 20px;
          letter-spacing: -0.04em;
        }
        .ab-value-title {
          font-family: 'Cormorant', serif; font-size: 22px; font-weight: 700;
          color: var(--smoke); margin: 0 0 12px;
        }
        .ab-value-desc { font-size: 13px; color: var(--muted); line-height: 1.82; }

        /* ── COMMITMENT ── */
        .ab-commit {
          padding: 120px 80px; background: var(--ink);
          display: grid; grid-template-columns: 1fr 1fr; gap: 100px; align-items: start;
          border-bottom: 1px solid var(--gborder);
        }
        .ab-commit-h2 {
          font-family: 'Cormorant', serif;
          font-size: clamp(34px,4vw,56px); font-weight: 700; line-height:1.06; margin:14px 0 24px;
        }
        .ab-commit-h2 em { font-style: italic; color: var(--g); }
        .ab-commit-body { font-size: 14.5px; color: var(--muted); line-height: 1.88; }
        .ab-commit-items { display: flex; flex-direction: column; gap: 1px; }
        .ab-commit-item {
          background: var(--ink2); border: 1px solid var(--gborder); border-bottom: none;
          padding: 22px 26px; display: flex; align-items: flex-start; gap: 18px;
          transition: background 0.2s;
        }
        .ab-commit-item:first-child { border-radius: 3px 3px 0 0; }
        .ab-commit-item:last-child { border-bottom: 1px solid var(--gborder); border-radius: 0 0 3px 3px; }
        .ab-commit-item:hover { background: var(--ink3); }
        .ab-commit-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--g); flex-shrink: 0; margin-top: 7px; }
        .ab-commit-item-title { font-size: 13.5px; font-weight: 600; color: var(--smoke); margin-bottom: 4px; }
        .ab-commit-item-desc { font-size: 12px; color: var(--muted); line-height: 1.72; }

        /* ── STATS STRIP ── */
        .ab-stats-strip {
          background: var(--ink2); border-top: 1px solid var(--gborder);
          display: grid; grid-template-columns: repeat(6,1fr);
        }
        .ab-stat-cell {
          padding: 44px 28px; border-right: 1px solid var(--gborder);
          text-align: center; transition: background 0.2s; position: relative;
        }
        .ab-stat-cell:last-child { border-right: none; }
        .ab-stat-cell::after {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: var(--g); transform: scaleX(0); transition: transform 0.35s ease;
        }
        .ab-stat-cell:hover::after { transform: scaleX(1); }
        .ab-stat-cell:hover { background: var(--ink3); }
        .ab-stat-val {
          font-family: 'Cormorant', serif; font-size: 38px; font-weight: 700;
          color: var(--g); line-height: 1; margin-bottom: 8px;
        }
        .ab-stat-sub { font-size: 11px; color: var(--muted); line-height: 1.45; }

        /* ── CTA ── */
        .ab-cta {
          padding: 120px 80px; background: var(--ink); text-align: center; position: relative; overflow: hidden;
        }
        .ab-cta::before {
          content: ''; position: absolute; bottom: -160px; left: 50%; transform: translateX(-50%);
          width: 700px; height: 350px;
          background: radial-gradient(ellipse, rgba(198,168,75,0.07) 0%, transparent 68%);
          pointer-events: none;
        }
        .ab-cta-inner { position: relative; max-width: 680px; margin: 0 auto; }
        .ab-cta-h2 {
          font-family: 'Cormorant', serif;
          font-size: clamp(36px, 5vw, 64px); font-weight: 700; line-height: 1.06; margin: 14px 0 20px;
        }
        .ab-cta-h2 em { font-style: italic; color: var(--g); }
        .ab-cta-sub { font-size: 14.5px; color: var(--muted); line-height: 1.78; margin: 0 0 40px; }
        .ab-cta-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
        .ab-btn-primary {
          font-size: 11px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
          background: var(--g); color: var(--ink); border: none;
          padding: 16px 40px; border-radius: 4px; cursor: pointer;
          transition: background 0.2s, transform 0.15s; text-decoration: none; display: inline-block;
        }
        .ab-btn-primary:hover { background: var(--g2); transform: translateY(-2px); }
        .ab-btn-outline {
          font-size: 11px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase;
          background: transparent; color: var(--smoke);
          border: 1.5px solid rgba(255,255,255,0.18); padding: 15px 36px;
          border-radius: 4px; cursor: pointer;
          transition: border-color 0.2s, color 0.2s; text-decoration: none; display: inline-block;
        }
        .ab-btn-outline:hover { border-color: var(--g); color: var(--g); }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .ab-hero { grid-template-columns: 1fr; min-height: auto; }
          .ab-hero-left { padding: 80px 48px 56px; border-right: none; border-bottom: 1px solid var(--gborder); }
          .ab-hero-right { padding: 56px 48px 80px; }
          .ab-origin { grid-template-columns: 1fr; gap: 48px; padding: 80px 48px; }
          .ab-pillars-header { padding: 80px 48px 0; }
          .ab-acc-trigger { padding: 0 40px; grid-template-columns: 56px 1fr 40px; gap: 20px; }
          .ab-acc-inner { padding: 0 40px 48px; grid-template-columns: 1fr; gap: 36px; }
          .ab-metrics { flex-direction: row; flex-wrap: wrap; gap: 8px; }
          .ab-metric { flex: 1; min-width: 110px; border-radius: 3px !important; border-bottom: 1px solid var(--gborder) !important; }
          .ab-values { padding: 80px 40px; }
          .ab-values-grid { grid-template-columns: 1fr 1fr; }
          .ab-commit { grid-template-columns: 1fr; gap: 48px; padding: 80px 48px; }
          .ab-stats-strip { grid-template-columns: repeat(3,1fr); }
          .ab-stat-cell:nth-child(3n) { border-right: none; }
          .ab-stat-cell { border-bottom: 1px solid var(--gborder); }
          .ab-cta { padding: 80px 40px; }
        }
        @media (max-width: 640px) {
          .ab-hero-left, .ab-hero-right { padding: 60px 28px; }
          .ab-origin { padding: 64px 28px; }
          .ab-pillars-header { padding: 64px 28px 0; }
          .ab-acc-trigger { padding: 0 24px; min-height: 72px; gap: 14px; }
          .ab-acc-inner { padding: 0 24px 40px; }
          .ab-values { padding: 64px 24px; }
          .ab-values-grid { grid-template-columns: 1fr; }
          .ab-commit { padding: 64px 28px; }
          .ab-stats-strip { grid-template-columns: 1fr 1fr; }
          .ab-stat-cell:nth-child(3n) { border-right: 1px solid var(--gborder); }
          .ab-stat-cell:nth-child(2n) { border-right: none; }
          .ab-cta { padding: 64px 28px; }
        }
      `}</style>

      <div className="ab">

        {/* ══ HERO ══ */}
        <section className="ab-hero">
          <div className="ab-hero-left">
            <Reveal>
              <div className="ab-tag"><div className="ab-tag-line" />About Maharsh Edutech</div>
              <h1 className="ab-hero-h1">
                We Guide<br /><em>Futures.</em><br />Not Admissions.
              </h1>
              <p className="ab-hero-lead">
                Maharsh Edutech is an Andhra Pradesh and Telangana-rooted education counseling firm that has spent twelve years doing one thing: helping students make the most consequential decisions of their early lives with complete clarity, expert guidance, and unwavering integrity. We are not a placement agency. We are a counseling firm — and that distinction defines everything about how we operate.
              </p>
            </Reveal>
          </div>
          <div className="ab-hero-right">
            <div className="ab-hero-bg" />
            <Reveal delay={120}>
              <div className="ab-manifesto">
                <p className="ab-manifesto-text">
                  "The education consulting industry in India is full of people who earn money when a student enrolls in a particular college. We earn money only when a student chooses us — and we work to deserve that choice every single time."
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="ab-hero-stats">
                {stats.map((s, i) => (
                  <div key={i} className="ab-hero-stat">
                    <div className="ab-hero-stat-val">{s.val}</div>
                    <div className="ab-hero-stat-label">{s.sub}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══ ORIGIN / WHO WE ARE ══ */}
        <section className="ab-origin">
          <Reveal>
            <div className="ab-tag"><div className="ab-tag-line" />Our Origin</div>
            <h2 className="ab-origin-h2">
              Built in<br />Hyderabad.<br /><em>Trusted</em><br />Nationally.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="ab-origin-paras">
              <p className="ab-origin-para">
                Maharsh Edutech was established in Hyderabad with a specific observation: that the quality of education guidance a student receives is overwhelmingly determined by their socioeconomic position, their family's professional network, and their proximity to large urban centres — none of which have any bearing on a student's intelligence, ambition, or potential.
              </p>
              <p className="ab-origin-para">
                A student in Vijayawada weighing NEET counseling options, a student in Warangal considering whether to pursue engineering or commerce, a student in Guntur applying to universities in the United Kingdom — each deserves access to the same quality of guidance that affluent families in metropolitan India can purchase from expensive private consultants. That conviction is what Maharsh Edutech was built to act on.
              </p>
              <p className="ab-origin-para">
                <strong>Over twelve years, we have built a team of 40 certified counselors, application specialists, financial advisors, and visa experts</strong> who operate as an integrated unit — not a collection of siloed departments. Every student file is owned by a named counselor who is accountable for the outcome. Every recommendation is grounded in data. Every process is documented, tracked, and reviewed for quality.
              </p>
              <p className="ab-origin-para">
                We serve students across Class 10, Class 12, undergraduate, and postgraduate transitions. We serve families across Telugu, Tamil, Hindi, Malayalam, Kannada, and Marathi-speaking communities. We operate across India and facilitate admissions in 18 countries. But every conversation begins the same way — with listening, without a script, and without a predetermined conclusion.
              </p>
              <p className="ab-origin-para">
                <strong>We do not earn commissions from institutions. We do not earn referral payments from lenders.</strong> Our only revenue is the transparent service fee paid by the families who trust us with their most important decisions. This is not a marketing statement. It is the structural fact that makes every piece of advice we give genuinely independent.
              </p>
            </div>
          </Reveal>
        </section>

        {/* ══ WHAT WE DO — Accordion ══ */}
        <section className="ab-pillars">
          <Reveal>
            <div className="ab-pillars-header">
              <div className="ab-tag"><div className="ab-tag-line" />What We Do</div>
              <h2 className="ab-pillars-h2">
                Four Services.<br /><em>One Commitment.</em>
              </h2>
            </div>
          </Reveal>

          <div className="ab-accordion">
            {pillars.map((p, i) => {
              const isOpen = activePillar === i;
              return (
                <div key={i} className={`ab-acc-row${isOpen ? " open" : ""}`}>
                  <button
                    className="ab-acc-trigger"
                    onClick={() => setActivePillar(isOpen ? null : i)}
                  >
                    <div className="ab-acc-num">{p.num}</div>
                    <div className="ab-acc-title-wrap">
                      <div className="ab-acc-title">{p.title}</div>
                      <div className="ab-acc-caption">{p.caption}</div>
                    </div>
                    <div className="ab-acc-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"/>
                        <line x1="5" y1="12" x2="19" y2="12"/>
                      </svg>
                    </div>
                  </button>
                  <div className="ab-acc-body">
                    <div className="ab-acc-inner">
                      <div className="ab-acc-paras">
                        {p.body.map((para, j) => (
                          <p key={j} className="ab-acc-para">{para}</p>
                        ))}
                      </div>
                      <div className="ab-metrics">
                        {p.metrics.map((m, j) => (
                          <div key={j} className="ab-metric">
                            <div className="ab-metric-val">{m.val}</div>
                            <div className="ab-metric-label">{m.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ══ CORE VALUES ══ */}
        <section className="ab-values">
          <Reveal>
            <div className="ab-tag"><div className="ab-tag-line" />How We Operate</div>
            <h2 className="ab-values-h2">
              The Principles That <em>Define Us</em>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="ab-values-grid">
              {values.map((v, i) => (
                <div key={i} className="ab-value-card">
                  <div className="ab-value-glyph">{v.letter}</div>
                  <div className="ab-value-title">{v.title}</div>
                  <p className="ab-value-desc">{v.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ══ COMMITMENT ══ */}
        <section className="ab-commit">
          <Reveal>
            <div>
              <div className="ab-tag"><div className="ab-tag-line" />Our Commitment</div>
              <h2 className="ab-commit-h2">
                What You Can<br /><em>Always Expect</em><br />From Us
              </h2>
              <p className="ab-commit-body">
                Commitments are easy to state. The ones below are structural — meaning they are built into how our business operates, not aspirational values written on a wall. Every student who works with Maharsh Edutech receives these, without exception, regardless of which service tier they engage.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="ab-commit-items">
              {commitments.map((item, i) => (
                <div key={i} className="ab-commit-item">
                  <div className="ab-commit-dot" />
                  <div>
                    <div className="ab-commit-item-title">{item.title}</div>
                    <div className="ab-commit-item-desc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ══ STATS STRIP ══ */}
        <Reveal>
          <div className="ab-stats-strip">
            {stats.map((s, i) => (
              <div key={i} className="ab-stat-cell">
                <div className="ab-stat-val">{s.val}</div>
                <div className="ab-stat-sub">{s.sub}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ══ CTA ══ */}
        <section className="ab-cta">
          <Reveal>
            <div className="ab-cta-inner">
              <div className="ab-tag" style={{justifyContent:'center'}}>
                <div className="ab-tag-line" />Begin Here<div className="ab-tag-line" />
              </div>
              <h2 className="ab-cta-h2">
                A Conversation<br />Changes <em>Everything</em>
              </h2>
              <p className="ab-cta-sub">
                Your first session is complimentary, completely without obligation, and entirely focused on understanding your situation — not presenting a package. Book a 30-minute call with a certified counselor and see what genuinely independent guidance feels like.
              </p>
              <div className="ab-cta-btns">
                <a href="/contact" className="ab-btn-primary">Book Free Session</a>
                <a href="/services" className="ab-btn-outline">Explore Services</a>
              </div>
            </div>
          </Reveal>
        </section>

      </div>
    </>
  );
}