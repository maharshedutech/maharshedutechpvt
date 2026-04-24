// src/pages/Services.jsx
import React, { useEffect, useRef, useState } from "react";

/* ─── Intersection Observer hook ─── */
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

function RevealSection({ children, className = "", style = {}, delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(52px)",
      transition: `opacity 0.9s cubic-bezier(.22,1,.36,1) ${delay}ms, transform 0.9s cubic-bezier(.22,1,.36,1) ${delay}ms`,
      ...style,
    }}>{children}</div>
  );
}

/* ─── SVG Icons ─── */
const CompassRoseIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="24" cy="24" r="20" />
    <path d="M24 4 L28 20 L24 24 L20 20 Z" fill="currentColor" opacity="0.9" stroke="none"/>
    <path d="M44 24 L28 28 L24 24 L28 20 Z" fill="currentColor" opacity="0.35" stroke="none"/>
    <path d="M24 44 L20 28 L24 24 L28 28 Z" fill="currentColor" opacity="0.55" stroke="none"/>
    <path d="M4 24 L20 20 L24 24 L20 28 Z" fill="currentColor" opacity="0.2" stroke="none"/>
    <circle cx="24" cy="24" r="3" fill="currentColor" stroke="none"/>
    <circle cx="24" cy="24" r="20" strokeDasharray="2 4" opacity="0.3"/>
  </svg>
);

const ScrollDocIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 6 C10 6 8 6 8 10 L8 38 C8 38 8 42 12 42 L38 42 C40 42 40 40 40 38 L40 14 L30 4 L12 4 C10.9 4 10 4.9 10 6Z"/>
    <path d="M30 4 L30 14 L40 14"/>
    <line x1="16" y1="24" x2="32" y2="24" strokeWidth="1.5"/>
    <line x1="16" y1="30" x2="32" y2="30" strokeWidth="1.5"/>
    <line x1="16" y1="18" x2="24" y2="18" strokeWidth="1.5"/>
    <circle cx="13" cy="12" r="2" fill="currentColor" stroke="none" opacity="0.5"/>
  </svg>
);

const GlobePinIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="24" cy="24" r="19"/>
    <ellipse cx="24" cy="24" rx="9" ry="19"/>
    <line x1="5" y1="24" x2="43" y2="24"/>
    <line x1="7" y1="15" x2="41" y2="15"/>
    <line x1="7" y1="33" x2="41" y2="33"/>
    <circle cx="36" cy="13" r="5" fill="var(--gold)" stroke="var(--gold)" strokeWidth="1"/>
    <line x1="36" y1="18" x2="36" y2="26" stroke="var(--gold)" strokeWidth="1.5"/>
  </svg>
);

const CreditCardIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="10" width="40" height="28" rx="4"/>
    <line x1="4" y1="20" x2="44" y2="20" strokeWidth="2"/>
    <rect x="10" y="28" width="10" height="4" rx="1" fill="currentColor" opacity="0.4" stroke="none"/>
    <circle cx="36" cy="30" r="4" opacity="0.3" fill="currentColor" stroke="none"/>
    <circle cx="40" cy="30" r="4" opacity="0.5" fill="currentColor" stroke="none"/>
    <line x1="10" y1="14" x2="18" y2="14" opacity="0.4"/>
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="2.5 8 6.5 12 13.5 4"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="10" x2="17" y2="10"/>
    <polyline points="11 4 17 10 11 16"/>
  </svg>
);

/* ─── Service Data ─── */
const services = [
  {
    id: "01",
    icon: CompassRoseIcon,
    label: "Career Counseling",
    title: "Find the Direction That's Truly Yours",
    tagline: "Psychometric-led, data-backed, deeply personal",
    color: "#C9A84C",
    accentDim: "rgba(201,168,76,0.06)",
    desc: `Your career is not a guess — it is a discovery. Our certified counselors invest deeply in understanding your psychometric profile, academic trajectory, and long-term aspirations before making a single recommendation. Through structured one-on-one sessions, scientifically validated assessment tools, and real-world employment data, we build a career roadmap that is precise and personal.`,
    detail: `Many students approach us carrying the weight of family expectations, peer comparisons, and social pressure. Our process begins by removing that noise. We work with students from Class 10 onwards, understanding not just what they are good at today, but what they are built for in the long run. Every output is a written, detailed report that becomes the foundation of every decision made thereafter.`,
    points: [
      "In-depth psychometric and aptitude assessment",
      "One-on-one 90-minute deep-dive counseling sessions",
      "Written career report with 3 pathway projections",
      "Industry salary benchmarks and growth trajectory data",
      "Post-session follow-up and revision support",
      "Available in Telugu, Tamil, Hindi, Malayalam, Kannada",
    ],
    stat: { num: "5,000+", label: "Students Guided" },
  },
  {
    id: "02",
    icon: ScrollDocIcon,
    label: "Application Support",
    title: "Every Document, Crafted to Perfection",
    tagline: "SOP · LOR · Essays · Mock Interviews",
    color: "#B8966E",
    accentDim: "rgba(184,150,110,0.06)",
    desc: `A great application is a form of storytelling — it shows the institution exactly who you are, why you belong there, and what you will contribute. Our application support team includes former admissions committee members, seasoned SOP writers, and documentation specialists who have helped over 5,000 students craft compelling, distinctive applications.`,
    detail: `We cover every element: Statement of Purpose drafting through four rounds of expert review, Letter of Recommendation strategy and drafting, personal essay coaching, extracurricular positioning, resume and CV building, interview preparation with real-time feedback, and complete document organisation for every institution on your shortlist.`,
    points: [
      "SOP drafting with 4 rounds of expert review",
      "LOR strategy, structure, and drafting support",
      "Personal essay coaching and narrative positioning",
      "Resume and CV crafting for student profiles",
      "Mock interviews with senior counselors",
      "Document verification and submission support",
      "University-specific application alignment",
    ],
    stat: { num: "98%", label: "Top-3 Choice Rate" },
  },
  {
    id: "03",
    icon: GlobePinIcon,
    label: "Admissions — India & Abroad",
    title: "From Shortlist to Enrollment, Completely Managed",
    tagline: "250+ institutions · 18 countries",
    color: "#8FA68A",
    accentDim: "rgba(143,166,138,0.06)",
    desc: `Admission into the right institution is the culmination of years of effort — and the gateway to everything that follows. We manage the complete admission lifecycle for both domestic Indian institutions and universities across 18 countries, with specialist teams for engineering, medical, management, law, architecture, design, and liberal arts.`,
    detail: `For Indian admissions, we navigate the full complexity of JEE, NEET, CLAT, NIFT, NATA, CAT, and state-level entrance counseling. We have established relationships with 250+ partner institutions. For international admissions, our specialists have placed students in the USA, UK, Canada, Australia, Germany, Singapore, UAE, Ireland, Netherlands, and New Zealand — coordinating everything from shortlisting to visa documentation to post-arrival check-ins.`,
    points: [
      "250+ partner institutions across India",
      "Engineering, Medical, MBA, Law, Design, Architecture streams",
      "JEE, NEET, CLAT, NIFT, NATA, CAT counseling in-person",
      "18 countries for international university placements",
      "Visa documentation and embassy interview preparation",
      "Scholarship identification and application support",
      "Pre-departure briefing and post-arrival check-in",
    ],
    stat: { num: "18", label: "Countries Abroad" },
  },
  {
    id: "04",
    icon: CreditCardIcon,
    label: "Education Loan Assistance",
    title: "Fund Your Future on the Right Terms",
    tagline: "14 lender partners · Zero commission",
    color: "#9B8EC4",
    accentDim: "rgba(155,142,196,0.06)",
    desc: `The financial dimension of higher education is one of the most anxiety-inducing aspects for families — and also one of the most misunderstood. Our financial counselors demystify the loan process entirely, working with 14 banking and NBFC partners to identify the most advantageous loan structures for your specific profile, institution, and repayment capacity.`,
    detail: `We assess your family's financial eligibility, the institution's lender relationships, collateral options, and interest rate structures across nationalized banks, private banks, and non-banking financial companies. We build a complete funding plan combining scholarships, merit awards, institutional waivers, and loan amounts to minimise the total debt burden. We also advise on tax benefits available under Section 80E.`,
    points: [
      "Tie-ups with 14 nationalized and private lenders",
      "Collateral and non-collateral loan options explained",
      "Complete funding plan: scholarship + loan combination",
      "Full documentation handling and bank liaison",
      "EMI calculation and long-term repayment strategy",
      "Section 80E Income Tax benefit advisory",
      "Disbursement tracking and follow-up until credited",
    ],
    stat: { num: "14", label: "Loan Partners" },
  },
];

/* ─── Curved Path SVG between cards ─── */
function CurvedPath({ fromRight = false, color = "#C9A84C" }) {
  return (
    <div style={{ position: "relative", height: 80, overflow: "visible", zIndex: 2, margin: "0 0" }}>
      <svg
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        style={{ width: "100%", height: "100%", display: "block", overflow: "visible" }}
      >
        <defs>
          <marker id={`arrow-${fromRight ? "r" : "l"}`} markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d={fromRight ? "M8,4 L2,1 L4,4 L2,7Z" : "M0,4 L6,1 L4,4 L6,7Z"} fill={color} opacity="0.7" />
          </marker>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>
        {/* Decorative dots along the path */}
        {[200, 400, 600, 800, 1000].map((x, i) => (
          <circle key={i} cx={x} cy={fromRight ? 80 - (x / 1200) * 40 : (x / 1200) * 40} r="2.5"
            fill={color} opacity="0.25" />
        ))}
        <path
          d={fromRight
            ? "M 1200,0 C 900,0 800,80 600,80 C 400,80 300,0 0,0"
            : "M 0,80 C 300,80 400,0 600,0 C 800,0 900,80 1200,80"
          }
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeDasharray="6 8"
          opacity="0.35"
          filter="url(#glow)"
          markerEnd={fromRight ? `url(#arrow-r)` : `url(#arrow-l)`}
        />
        {/* Solid thinner centerline */}
        <path
          d={fromRight
            ? "M 1200,0 C 900,0 800,80 600,80 C 400,80 300,0 0,0"
            : "M 0,80 C 300,80 400,0 600,0 C 800,0 900,80 1200,80"
          }
          fill="none"
          stroke={color}
          strokeWidth="0.5"
          opacity="0.12"
        />
      </svg>
      {/* Connector node at center */}
      <div style={{
        position: "absolute", left: "50%", top: fromRight ? "100%" : "0%",
        transform: "translate(-50%, -50%)",
        width: 12, height: 12, borderRadius: "50%",
        border: `1.5px solid ${color}`,
        background: "var(--ink)",
        boxShadow: `0 0 12px ${color}44`,
        zIndex: 3,
      }} />
    </div>
  );
}

/* ─── Service Card (alternating layout) ─── */
function ServiceCard({ svc, index }) {
  const isEven = index % 2 === 0;
  const [ref, visible] = useReveal(0.06);
  const IconComp = svc.icon;

  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(60px)",
      transition: `opacity 1s cubic-bezier(.22,1,.36,1) ${index * 80}ms, transform 1s cubic-bezier(.22,1,.36,1) ${index * 80}ms`,
    }}>
      <div className={`svc-card ${isEven ? "svc-card--normal" : "svc-card--flipped"}`}
        style={{ "--accent": svc.color, "--accent-dim": svc.accentDim }}>

        {/* ── LEFT: Content ── */}
        <div className="svc-content">
          <div className="svc-header">
            <div className="svc-num-badge">
              <span className="svc-num">{svc.id}</span>
            </div>
            <div className="svc-label">{svc.label}</div>
          </div>

          <h2 className="svc-title">{svc.title}</h2>
          <div className="svc-tagline">{svc.tagline}</div>

          <p className="svc-desc">{svc.desc}</p>
          <p className="svc-detail">{svc.detail}</p>

          <div className="svc-stat-row">
            <div className="svc-stat">
              <span className="svc-stat-num">{svc.stat.num}</span>
              <span className="svc-stat-label">{svc.stat.label}</span>
            </div>
          </div>
        </div>

        {/* ── DIVIDER ── */}
        <div className="svc-divider">
          <div className="svc-divider-line" />
          <div className="svc-divider-icon">
            <IconComp />
          </div>
          <div className="svc-divider-line" />
        </div>

        {/* ── RIGHT: Points ── */}
        <div className="svc-points-panel">
          <div className="svc-points-label">What's Included</div>
          <ul className="svc-points">
            {svc.points.map((pt, i) => (
              <li key={i} className="svc-point" style={{ transitionDelay: `${i * 60}ms` }}>
                <span className="svc-point-check"><CheckIcon /></span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
          <button className="svc-cta">
            <span>Book a Free Session</span>
            <span className="svc-cta-arrow"><ArrowRightIcon /></span>
          </button>
        </div>

      </div>
    </div>
  );
}

/* ═══════════════════════════════ MAIN COMPONENT ═══════════════════════════ */
export default function Services() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');

        :root {
          --gold: #C9A84C;
          --gold2: #E2C46B;
          --gold-dim: rgba(201,168,76,0.10);
          --gold-border: rgba(201,168,76,0.18);
          --ink: #0A0A0A;
          --ink2: #111111;
          --ink3: #181818;
          --ink4: #202020;
          --smoke: rgba(255,255,255,0.88);
          --muted: rgba(255,255,255,0.52);
          --faint: rgba(255,255,255,0.22);
          --hair: rgba(255,255,255,0.06);
        }

        .sv * { box-sizing: border-box; margin: 0; padding: 0; }
        .sv {
          font-family: 'DM Sans', sans-serif;
          background: var(--ink);
          color: var(--smoke);
          line-height: 1;
          overflow-x: hidden;
        }

        /* ── HERO ── */
        .sv-hero {
          position: relative;
          padding: 140px 80px 80px;
          background: var(--ink);
          overflow: hidden;
          border-bottom: 1px solid var(--gold-border);
        }
        .sv-hero-bg {
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 60% 50% at 80% 50%, rgba(201,168,76,0.045) 0%, transparent 70%),
            radial-gradient(ellipse 40% 60% at 20% 80%, rgba(201,168,76,0.03) 0%, transparent 60%);
          pointer-events: none;
        }
        /* Decorative grid lines */
        .sv-hero-grid {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 80% at center, black 0%, transparent 70%);
        }
        .sv-hero-inner { position: relative; z-index: 1; max-width: 900px; }
        .sv-tag {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 9.5px; font-weight: 600; letter-spacing: 0.28em;
          text-transform: uppercase; color: var(--gold); margin-bottom: 24px;
        }
        .sv-tag-line { height: 1px; width: 28px; background: var(--gold); }
        .sv-hero-h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(40px, 6vw, 80px);
          font-weight: 900; line-height: 1.04;
          color: var(--smoke); margin-bottom: 24px;
          letter-spacing: -0.01em;
        }
        .sv-hero-h1 em { font-style: italic; color: var(--gold); }
        .sv-hero-lead {
          font-size: clamp(14px, 1.5vw, 17px);
          color: var(--muted); line-height: 1.8;
          max-width: 620px; margin-bottom: 48px;
        }
        .sv-hero-pills { display: flex; gap: 10px; flex-wrap: wrap; }
        .sv-pill {
          font-size: 10.5px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase;
          border: 1px solid var(--gold-border); color: var(--gold);
          padding: 7px 16px; border-radius: 2px;
          background: var(--gold-dim);
        }

        /* ── PATH SECTION ── */
        .sv-path {
          padding: 0 80px;
          position: relative;
        }

        /* ── CARD ── */
        .svc-card {
          display: grid;
          grid-template-columns: 1fr 56px 1fr;
          gap: 0;
          border: 1px solid var(--gold-border);
          border-radius: 4px;
          overflow: hidden;
          background: var(--ink2);
          position: relative;
          transition: box-shadow 0.4s ease;
        }
        .svc-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, var(--accent), transparent);
          opacity: 0.6;
        }
        .svc-card:hover {
          box-shadow: 0 0 60px rgba(201,168,76,0.06), 0 20px 60px rgba(0,0,0,0.3);
        }
        .svc-card--flipped { direction: rtl; }
        .svc-card--flipped > * { direction: ltr; }

        /* Content side */
        .svc-content {
          padding: 56px 52px;
          background: var(--ink2);
          display: flex; flex-direction: column; gap: 0;
        }
        .svc-header {
          display: flex; align-items: center; gap: 14px;
          margin-bottom: 20px;
        }
        .svc-num-badge {
          width: 44px; height: 44px; border-radius: 50%;
          border: 1.5px solid var(--accent, var(--gold));
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          background: var(--accent-dim, var(--gold-dim));
        }
        .svc-num {
          font-family: 'Playfair Display', serif;
          font-size: 14px; font-weight: 700;
          color: var(--accent, var(--gold));
        }
        .svc-label {
          font-size: 9.5px; font-weight: 600; letter-spacing: 0.24em;
          text-transform: uppercase; color: var(--accent, var(--gold));
        }
        .svc-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(22px, 2.4vw, 30px);
          font-weight: 800; line-height: 1.18;
          color: var(--smoke); margin-bottom: 10px;
        }
        .svc-tagline {
          font-size: 11px; font-weight: 500; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--accent, var(--gold));
          opacity: 0.7; margin-bottom: 24px;
        }
        .svc-desc {
          font-size: 14px; color: var(--muted); line-height: 1.88;
          margin-bottom: 16px;
        }
        .svc-detail {
          font-size: 13px; color: rgba(255,255,255,0.35);
          line-height: 1.85; margin-bottom: 32px;
        }
        .svc-stat-row { margin-top: auto; }
        .svc-stat {
          display: inline-flex; flex-direction: column; gap: 4px;
          padding: 14px 20px;
          border: 1px solid var(--gold-border);
          border-left: 3px solid var(--accent, var(--gold));
          background: var(--ink3);
          border-radius: 0 3px 3px 0;
        }
        .svc-stat-num {
          font-family: 'Playfair Display', serif;
          font-size: 28px; font-weight: 900;
          color: var(--accent, var(--gold)); line-height: 1;
        }
        .svc-stat-label {
          font-size: 10px; font-weight: 500; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--muted);
        }

        /* Center divider */
        .svc-divider {
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 12px;
          background: var(--ink3);
          border-left: 1px solid var(--gold-border);
          border-right: 1px solid var(--gold-border);
          padding: 24px 0;
        }
        .svc-divider-line {
          flex: 1; width: 1px;
          background: linear-gradient(to bottom, transparent, var(--accent, var(--gold)), transparent);
          opacity: 0.3; min-height: 40px;
        }
        .svc-divider-icon {
          width: 44px; height: 44px;
          color: var(--accent, var(--gold));
          flex-shrink: 0;
          opacity: 0.8;
        }
        .svc-divider-icon svg { width: 100%; height: 100%; }

        /* Points side */
        .svc-points-panel {
          padding: 56px 48px;
          background: var(--ink);
          display: flex; flex-direction: column;
        }
        .svc-points-label {
          font-size: 9.5px; font-weight: 600; letter-spacing: 0.22em;
          text-transform: uppercase; color: var(--accent, var(--gold));
          margin-bottom: 28px;
          padding-bottom: 14px;
          border-bottom: 1px solid var(--gold-border);
        }
        .svc-points {
          list-style: none; display: flex; flex-direction: column;
          gap: 0; margin-bottom: 40px; flex: 1;
        }
        .svc-point {
          display: flex; align-items: flex-start; gap: 14px;
          font-size: 13.5px; color: rgba(255,255,255,0.62);
          line-height: 1.6;
          padding: 13px 0;
          border-bottom: 1px solid var(--hair);
        }
        .svc-point:last-child { border-bottom: none; }
        .svc-point-check {
          width: 20px; height: 20px; flex-shrink: 0; margin-top: 1px;
          border-radius: 50%; border: 1px solid var(--accent, var(--gold));
          display: flex; align-items: center; justify-content: center;
          color: var(--accent, var(--gold));
        }
        .svc-point-check svg { width: 9px; height: 9px; }

        .svc-cta {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 10.5px; font-weight: 700; letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--ink); background: var(--accent, var(--gold));
          border: none; padding: 14px 28px; border-radius: 3px;
          cursor: pointer; align-self: flex-start;
          transition: opacity 0.2s, transform 0.2s;
          margin-top: auto;
        }
        .svc-cta:hover { opacity: 0.88; transform: translateY(-2px); }
        .svc-cta-arrow { display: flex; }
        .svc-cta-arrow svg { width: 14px; height: 14px; }

        /* ── CTA SECTION ── */
        .sv-cta {
          padding: 120px 80px;
          text-align: center;
          position: relative;
          overflow: hidden;
          border-top: 1px solid var(--gold-border);
        }
        .sv-cta::before {
          content: '';
          position: absolute; bottom: -100px; left: 50%; transform: translateX(-50%);
          width: 700px; height: 400px;
          background: radial-gradient(ellipse, rgba(201,168,76,0.07), transparent 70%);
          pointer-events: none;
        }
        .sv-cta-inner { position: relative; max-width: 680px; margin: 0 auto; }
        .sv-cta-h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(36px, 5vw, 64px); font-weight: 900;
          line-height: 1.06; margin: 16px 0 20px;
        }
        .sv-cta-h2 em { font-style: italic; color: var(--gold); }
        .sv-cta-sub { font-size: 15px; color: var(--muted); line-height: 1.78; margin-bottom: 44px; }
        .sv-cta-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
        .sv-btn-primary {
          font-size: 11px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
          background: var(--gold); color: var(--ink); border: none;
          padding: 16px 40px; border-radius: 3px; cursor: pointer;
          transition: background 0.2s, transform 0.15s; text-decoration: none;
        }
        .sv-btn-primary:hover { background: var(--gold2); transform: translateY(-2px); }
        .sv-btn-outline {
          font-size: 11px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase;
          background: transparent; color: var(--smoke);
          border: 1.5px solid rgba(255,255,255,0.18); padding: 15px 36px;
          border-radius: 3px; cursor: pointer;
          transition: border-color 0.2s, color 0.2s; text-decoration: none;
        }
        .sv-btn-outline:hover { border-color: var(--gold); color: var(--gold); }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .sv-hero, .sv-path, .sv-cta { padding-left: 40px; padding-right: 40px; }
          .svc-card { grid-template-columns: 1fr 1px 1fr; }
          .svc-divider { flex-direction: row; padding: 0 12px; border: none; border-top: 1px solid var(--gold-border); border-bottom: 1px solid var(--gold-border); min-height: 64px; }
          .svc-divider-line { flex: 1; height: 1px; width: auto; min-height: unset; background: linear-gradient(to right, transparent, var(--accent, var(--gold)), transparent); }
          .svc-content { padding: 40px 36px; }
          .svc-points-panel { padding: 40px 36px; }
        }
        @media (max-width: 768px) {
          .sv-hero { padding: 100px 28px 60px; }
          .sv-path { padding: 0 24px; }
          .sv-cta { padding: 80px 28px; }
          .svc-card, .svc-card--flipped {
            grid-template-columns: 1fr !important;
            direction: ltr !important;
          }
          .svc-divider {
            flex-direction: row; min-height: 48px;
            border-left: none; border-right: none;
          }
          .svc-content, .svc-points-panel { padding: 36px 28px; }
          .svc-title { font-size: 22px; }
        }
      `}</style>

      <div className="sv">

        {/* ══ HERO ══ */}
        <RevealSection>
          <section className="sv-hero">
            <div className="sv-hero-bg" />
            <div className="sv-hero-grid" />
            <div className="sv-hero-inner">
              <div className="sv-tag">
                <div className="sv-tag-line" />
                Our Services
                <div className="sv-tag-line" />
              </div>
              <h1 className="sv-hero-h1">
                Four Pillars of<br /><em>Complete Support</em>
              </h1>
              <p className="sv-hero-lead">
                Every service we offer addresses one critical dimension of the complex, multi-stage process of building an educational career. Together, they form a seamless system — from discovering your direction to funding your enrollment.
              </p>
              <div className="sv-hero-pills">
                {services.map(s => (
                  <div key={s.id} className="sv-pill">{s.label}</div>
                ))}
              </div>
            </div>
          </section>
        </RevealSection>

        {/* ══ SERVICE CARDS WITH CURVED PATHS ══ */}
        <div className="sv-path" style={{ paddingTop: 72, paddingBottom: 72 }}>
          {services.map((svc, i) => (
            <React.Fragment key={svc.id}>
              <ServiceCard svc={svc} index={i} />
              {i < services.length - 1 && (
                <CurvedPath
                  fromRight={i % 2 === 0}
                  color={services[i + 1].color}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* ══ CTA ══ */}
        <section className="sv-cta">
          <RevealSection>
            <div className="sv-cta-inner">
              <div className="sv-tag" style={{ justifyContent: "center" }}>
                <div className="sv-tag-line" /> Begin Your Journey <div className="sv-tag-line" />
              </div>
              <h2 className="sv-cta-h2">
                One Conversation<br />Changes <em>Everything</em>
              </h2>
              <p className="sv-cta-sub">
                Book a complimentary 30-minute session with a certified counselor. No sales pitch. No pressure. Just an honest, informed conversation about your future.
              </p>
              <div className="sv-cta-btns">
                <a href="/contact" className="sv-btn-primary">Book Free Counseling</a>
                <a href="/about" className="sv-btn-outline">About Us</a>
              </div>
            </div>
          </RevealSection>
        </section>

      </div>
    </>
  );
}