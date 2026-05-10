// src/components/Hero.jsx
import React, { useState } from "react";

export default function Hero() {
  const [muted, setMuted] = useState(false);

  const stats = [
    { num: '5000+', label: 'Students Guided' },
    { num: '200+',  label: 'Colleges' },
    { num: '15+',   label: 'Countries' },
    { num: '98%',   label: 'Success Rate' },
  ];

  const tags = [
    { label: 'After 10th',        orange: true  },
    { label: 'After 12th',        orange: true  },
    { label: 'After Graduation',  orange: true  },
    { label: 'India Admissions',  orange: false },
    { label: 'Abroad Admissions', orange: false },
    { label: 'Education Loan',    orange: false },
  ];

  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: '#1a56db' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; }

        .hero-inner {
          display: flex; align-items: center; justify-content: space-between;
          padding: 70px 72px 110px; gap: 32px;
          max-width: 1280px; margin: 0 auto; position: relative; z-index: 2;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }



        .hero-h1 {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(28px, 4.5vw, 52px); font-weight: 800; color: #fff;
          line-height: 1.1; margin: 0 0 18px; letter-spacing: -0.01em;
          animation: fadeUp 0.6s 0.08s ease both;
        }
        .hero-h1 span { color: #f97316; }

        .hero-sub {
          font-size: clamp(13px, 1.4vw, 15px); font-weight: 400;
          color: rgba(255,255,255,0.75); line-height: 1.7;
          max-width: 480px; margin: 0 0 28px;
          animation: fadeUp 0.6s 0.16s ease both;
        }

        .hero-tags {
          display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 28px;
          animation: fadeUp 0.6s 0.22s ease both;
        }
        .hero-tag {
          font-size: 11.5px; font-weight: 500; color: rgba(255,255,255,0.65);
          background: rgba(255,255,255,0.09); border: 1px solid rgba(255,255,255,0.14);
          padding: 5px 13px; border-radius: 4px; cursor: default;
        }
        .hero-tag.orange {
          color: #fed7aa; background: rgba(249,115,22,0.15);
          border-color: rgba(249,115,22,0.3);
        }

        .hero-btns {
          display: flex; gap: 12px; flex-wrap: wrap; align-items: center;
          margin-bottom: 20px; animation: fadeUp 0.6s 0.28s ease both;
        }
        .hero-btn-cta {
          font-size: 14px; font-weight: 700; background: #f97316; color: #fff;
          border: none; padding: 13px 28px; border-radius: 8px; cursor: pointer;
          text-decoration: none; display: inline-block; letter-spacing: 0.03em;
          box-shadow: 0 4px 20px rgba(249,115,22,0.4); transition: all 0.2s;
        }
        .hero-btn-cta:hover { background: #fb923c; transform: translateY(-2px); }
        .hero-btn-ghost {
          font-size: 14px; font-weight: 600;
          background: rgba(255,255,255,0.1); color: #fff;
          border: 1.5px solid rgba(255,255,255,0.28); padding: 12px 24px;
          border-radius: 8px; cursor: pointer; text-decoration: none;
          display: inline-block; transition: all 0.2s;
        }
        .hero-btn-ghost:hover { border-color: rgba(255,255,255,0.5); background: rgba(255,255,255,0.16); }

        .hero-trust {
          display: flex; align-items: center; gap: 8px; flex-wrap: wrap;
          font-size: 12px; color: rgba(255,255,255,0.45); letter-spacing: 0.04em;
          animation: fadeUp 0.6s 0.34s ease both;
        }
        .hero-trust-dot { width: 3px; height: 3px; border-radius: 50%; background: rgba(255,255,255,0.3); }

        /* RIGHT side — student image */
/* RIGHT side — student image (ULTRA BIG VERSION) */
.hero-right {
  flex: 0 0 auto;

  /* 🔥 MUCH BIGGER */
  width: clamp(520px, 48vw, 820px);

  display: flex;
  align-items: flex-end;
  justify-content: center;

  position: relative;
  align-self: stretch;

  /* 🔥 push image outside container */
  margin-right: -120px;
  margin-bottom: -100px;

  animation: fadeUp 0.6s 0.1s ease both;
}

.hero-right img {
  width: 115%;              /* 🔥 bigger than container */
  max-height: 720px;

  object-fit: contain;
  object-position: bottom center;

  display: block;
  position: relative;
  z-index: 1;

  /* 🔥 smooth fade into wave */
  -webkit-mask-image: linear-gradient(to bottom, black 78%, transparent 100%);
  mask-image: linear-gradient(to bottom, black 78%, transparent 100%);
}

        /* Arch background decoration */
        .hero-arch-bg {
          position: absolute; right: -20px; top: 0; bottom: 0;
          width: 60%; opacity: 0.05; pointer-events: none; z-index: 0;
        }

        /* Wave bottom */
        .hero-wave {
          position: relative; z-index: 2;
          display: block; margin-bottom: -2px; line-height: 0;
        }

        /* Stats bar */
        .hero-stats-bar {
          display: flex; background: rgba(13,45,110,0.95);
          border-top: 2px solid rgba(249,115,22,0.4);
          position: relative; z-index: 3;
        }
        .hero-stat {
          flex: 1; padding: 18px 8px; text-align: center;
          border-right: 1px solid rgba(255,255,255,0.07); transition: background 0.2s;
        }
        .hero-stat:last-child { border-right: none; }
        .hero-stat:hover { background: rgba(249,115,22,0.06); }
        .hero-stat-num {
          font-size: clamp(20px, 2.5vw, 28px); font-weight: 800;
          color: #f97316; line-height: 1; margin-bottom: 4px;
        }
        .hero-stat-label {
          font-size: clamp(8px, 0.9vw, 10px); font-weight: 500;
          letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.4);
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Tablet ── */
        @media (max-width: 900px) {
          .hero-inner { padding: 60px 40px 100px; gap: 20px; }
          .hero-right { width: clamp(220px, 30vw, 320px); }
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .hero-inner {
            flex-direction: column-reverse;
            padding: 0;
            gap: 0;
            align-items: stretch;
          }
          .hero-right {
            width: 100%;
            height: 220px;
            overflow: hidden;
            align-items: flex-end;
            justify-content: center;
            /* Reset desktop overrides that cause overlap */
            margin-right: 0;
            margin-bottom: 0;
            flex-shrink: 0;
          }
          .hero-right img {
            width: auto; height: 100%; max-height: 220px;
            object-position: center bottom;
          }
          .hero-left-wrap {
            padding: 28px 20px 100px;
            /* Ensure text block sits below image with no overlap */
            position: relative;
            z-index: 2;
            background: #1a56db;
          }
          .hero-h1 { font-size: clamp(26px, 7vw, 34px); }
          .hero-sub { font-size: 14px; }
          .hero-btns { flex-direction: column; align-items: stretch; }
          .hero-btn-cta, .hero-btn-ghost { width: 100%; text-align: center; }
        }

        @media (max-width: 480px) {
          .hero-tags { gap: 6px; }
          .hero-tag { font-size: 10.5px; padding: 4px 10px; }
          .hero-stat { padding: 14px 4px; }
        }
      `}</style>

      {/* Arch decorative bg */}
      <svg className="hero-arch-bg" viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M300 80 Q420 80 420 200 L420 400 L180 400 L180 200 Q180 80 300 80Z" stroke="white" strokeWidth="1.5" fill="none"/>
        <path d="M300 40 Q460 40 460 200 L460 420 L140 420 L140 200 Q140 40 300 40Z" stroke="white" strokeWidth="1" fill="none"/>
        <rect x="240" y="390" width="30" height="40" stroke="white" strokeWidth="1" fill="none"/>
        <rect x="285" y="390" width="30" height="40" stroke="white" strokeWidth="1" fill="none"/>
      </svg>

      <div className="hero-inner">
        {/* LEFT — Text content */}
<div className="hero-left-wrap" style={{ flex: 1, maxWidth: 600 }}>

  <h1 className="hero-h1">
    Confused About<br />Your <span>Career Path?</span>
  </h1>

  <p className="hero-sub">
    We help students after 10th, 12th, and graduation discover the right opportunities
    and achieve their goals with expert guidance.
  </p>

  <div className="hero-tags">
    {tags.map(t => (
      <span key={t.label} className={`hero-tag${t.orange ? ' orange' : ''}`}>{t.label}</span>
    ))}
  </div>

  <div className="hero-btns">
    <a href="/counseling" className="hero-btn-cta">Talk to an Expert</a>
    <a href="/services" className="hero-btn-ghost">Explore Services</a>
  </div>

  <div className="hero-trust">
    <span>Trusted by 5000+ students</span>
    <div className="hero-trust-dot" />
    <span>India &amp; Abroad</span>
    <div className="hero-trust-dot" />
    <span>No hidden fees</span>
  </div>

</div>

        {/* RIGHT — Student image (remove-bg PNG recommended) */}
        <div className="hero-right">
          <img src="/bghero.png" alt="Student" />
        </div>
      </div>

      {/* White wave at bottom — matches KC Overseas style */}
      <svg className="hero-wave" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%' }}>
        <path d="M0 30 C360 60 1080 0 1440 30 L1440 60 L0 60 Z" fill="white"/>
      </svg>

      {/* Stats bar */}
      <div className="hero-stats-bar">
        {stats.map(s => (
          <div key={s.label} className="hero-stat">
            <div className="hero-stat-num">{s.num}</div>
            <div className="hero-stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}