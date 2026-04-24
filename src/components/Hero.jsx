// src/components/Hero.jsx
import React, { useEffect, useState, useRef } from "react";

export default function Hero() {
  const [muted, setMuted] = useState(false); // start unmuted (with audio)
  const videoRef = useRef(null);

  const stats = [
    { num: '5000+', label: 'Students Guided' },
    { num: '200+',  label: 'Colleges' },
    { num: '15+',   label: 'Countries' },
    { num: '98%',   label: 'Success Rate' },
  ];

  const tags = [
    { label: 'After 10th',        gold: true  },
    { label: 'After 12th',        gold: true  },
    { label: 'After Graduation',  gold: true  },
    { label: 'India Admissions',  gold: false },
    { label: 'Abroad Admissions', gold: false },
    { label: 'Education Loan',    gold: false },
  ];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Attempt autoplay WITH audio; browsers may block it.
    // If blocked, fall back to muted autoplay and sync state.
    video.muted = false;
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Browser blocked unmuted autoplay — fall back to muted
        video.muted = true;
        setMuted(true);
        video.play().catch(() => {
          // If even muted autoplay fails, do nothing
        });
      });
    }
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    const next = !muted;
    video.muted = next;
    setMuted(next);
  };

  return (
    <section style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,700;1,600&family=Outfit:wght@400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; }

        /* ── Eyebrow ── */
        .hero-eyebrow {
          display: inline-flex; align-items: center; gap: 10px; margin-bottom: 20px;
          animation: fadeUp 0.7s ease both;
        }
        .hero-eyebrow-line { width: 32px; height: 2px; background: #c9a227; flex-shrink: 0; }
        .hero-eyebrow-text {
          font-size: 11px; font-weight: 700; letter-spacing: 0.22em;
          text-transform: uppercase; color: #c9a227; font-family: 'Outfit', sans-serif;
        }

        /* ── Heading ── */
        .hero-h1 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 5.5vw, 68px);
          font-weight: 700; color: white; line-height: 1.07;
          margin: 0 0 22px;
          animation: fadeUp 0.7s 0.1s ease both;
        }
        .hero-h1 em { font-style: italic; color: #c9a227; }

        /* ── Sub ── */
        .hero-sub {
          font-family: 'Outfit', sans-serif; font-size: clamp(13px, 1.6vw, 15.5px);
          color: rgba(255,255,255,0.68); line-height: 1.7;
          max-width: 520px; margin: 0 0 32px;
          animation: fadeUp 0.7s 0.18s ease both;
        }

        /* ── Tags ── */
        .hero-tags {
          display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 38px;
          animation: fadeUp 0.7s 0.26s ease both;
        }
        .hero-tag {
          font-family: 'Outfit', sans-serif; font-size: 11.5px; font-weight: 500;
          color: rgba(255,255,255,0.65); background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1); padding: 5px 13px; border-radius: 4px;
          transition: all 0.2s; cursor: default;
        }
        .hero-tag:hover { background: rgba(255,255,255,0.1); color: white; }
        .hero-tag.gold {
          color: #c9a227; background: rgba(201,162,39,0.1);
          border-color: rgba(201,162,39,0.3);
        }
        .hero-tag.gold:hover { background: rgba(201,162,39,0.18); }

        /* ── Buttons ── */
        .hero-btns {
          display: flex; gap: 12px; flex-wrap: wrap; align-items: center;
          animation: fadeUp 0.7s 0.34s ease both;
        }
        .hero-btn-primary {
          font-family: 'Outfit', sans-serif; font-size: 13px; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          background: #c9a227; color: #111111; border: none;
          padding: 13px 30px; border-radius: 6px; cursor: pointer;
          transition: background 0.2s, transform 0.15s; text-decoration: none;
          display: inline-block; white-space: nowrap;
        }
        .hero-btn-primary:hover { background: #e0b93a; transform: translateY(-1px); }
        .hero-btn-outline {
          font-family: 'Outfit', sans-serif; font-size: 13px; font-weight: 600;
          letter-spacing: 0.06em; text-transform: uppercase;
          background: transparent; color: white;
          border: 1.5px solid rgba(255,255,255,0.3);
          padding: 12px 26px; border-radius: 6px; cursor: pointer;
          transition: border-color 0.2s, color 0.2s, transform 0.15s; text-decoration: none;
          display: inline-block; white-space: nowrap;
        }
        .hero-btn-outline:hover { border-color: #c9a227; color: #c9a227; transform: translateY(-1px); }

        /* ── Trust strip ── */
        .hero-trust {
          margin-top: 20px; display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
          font-family: 'Outfit', sans-serif; font-size: 12px; color: rgba(255,255,255,0.4);
          letter-spacing: 0.06em; animation: fadeUp 0.7s 0.42s ease both;
        }
        .hero-trust-dot { width: 4px; height: 4px; border-radius: 50%; background: #c9a227; opacity: 0.6; flex-shrink: 0; }

        /* ── Stats bar ── */
        .hero-stats-bar {
          position: absolute; bottom: 0; left: 0; right: 0;
          display: flex; border-top: 1px solid rgba(201,162,39,0.25);
          background: rgba(17,17,17,0.82);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          animation: fadeUp 0.7s 0.5s ease both;
          z-index: 3;
        }
        .hero-stat {
          flex: 1; padding: 18px 8px; text-align: center;
          border-right: 1px solid rgba(201,162,39,0.12);
          transition: background 0.2s; min-width: 0;
        }
        .hero-stat:last-child { border-right: none; }
        .hero-stat:hover { background: rgba(201,162,39,0.05); }
        .hero-stat-num {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(20px, 3vw, 28px); font-weight: 700; color: #c9a227;
          line-height: 1; margin-bottom: 4px;
        }
        .hero-stat-label {
          font-family: 'Outfit', sans-serif; font-size: clamp(8px, 1vw, 10px); font-weight: 500;
          letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.45);
        }

        /* ── Audio toggle ── */
        .hero-audio-btn {
          position: absolute; bottom: 90px; right: 32px; z-index: 4;
          width: 40px; height: 40px; border-radius: 50%;
          background: rgba(17,17,17,0.7); border: 1px solid rgba(201,162,39,0.4);
          color: white; cursor: pointer; display: flex; align-items: center; justify-content: center;
          backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
          transition: border-color 0.2s, background 0.2s;
          animation: fadeUp 0.7s 0.55s ease both;
        }
        .hero-audio-btn:hover { background: rgba(201,162,39,0.15); border-color: #c9a227; }
        .hero-audio-btn svg {
          width: 16px; height: 16px; fill: none; stroke: currentColor;
          stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round;
        }

        /* ── Scroll hint ── */
        .hero-scroll {
          position: absolute; bottom: 90px; right: 84px; z-index: 2;
          display: flex; flex-direction: column; align-items: center; gap: 6px; opacity: 0.35;
        }
        .hero-scroll-line {
          width: 1px; height: 44px; background: white;
          animation: spulse 2s ease-in-out infinite;
        }
        @keyframes spulse {
          0%,100%{opacity:.3;transform:scaleY(.55)} 50%{opacity:.9;transform:scaleY(1)}
        }
        .hero-scroll-text {
          font-family: 'Outfit', sans-serif; font-size: 9px; font-weight: 600;
          letter-spacing: 0.2em; text-transform: uppercase; color: white;
          writing-mode: vertical-lr;
        }

        /* ── Animations ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Responsive: Tablet ── */
        @media (max-width: 900px) {
          .hero-content { padding: 70px 48px 110px !important; }
        }

        /* ── Responsive: Mobile ── */
        @media (max-width: 768px) {
          .hero-content { padding: 60px 20px 100px !important; max-width: 100% !important; }
          .hero-scroll { display: none; }
          .hero-audio-btn { bottom: 86px; right: 16px; }
          .hero-stat { padding: 14px 6px; }
        }

        /* ── Responsive: Small mobile ── */
        @media (max-width: 480px) {
          .hero-eyebrow-text { font-size: 9.5px; letter-spacing: 0.16em; }
          .hero-btns { flex-direction: column; align-items: stretch; }
          .hero-btn-primary,
          .hero-btn-outline { width: 100%; text-align: center; }
          .hero-tags { gap: 6px; }
          .hero-tag { font-size: 10.5px; padding: 4px 10px; }
          .hero-trust { gap: 7px; }
          .hero-trust-dot { display: none; }
        }

        /* ── Responsive: Very small ── */
        @media (max-width: 360px) {
          .hero-content { padding: 50px 16px 96px !important; }
          .hero-stat-label { letter-spacing: 0.04em; }
        }
      `}</style>

      {/* Background video — autoplay with audio, loops */}
      <video
        ref={videoRef}
        autoPlay
        loop
        playsInline
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', zIndex: 0,
        }}
        src="/bgvideo.mp4"
      />

      {/* Dark overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,10,10,0.68)', zIndex: 1 }} />

      {/* Gold left accent bar */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: '#c9a227', zIndex: 3 }} />

      {/* Main content */}
      <div
        className="hero-content"
        style={{
          position: 'relative', zIndex: 2,
          padding: '80px 72px 100px',
          width: '100%', maxWidth: '860px',
        }}
      >
        <div className="hero-eyebrow">
          <div className="hero-eyebrow-line" />
          <span className="hero-eyebrow-text">Free Career Counseling — 2026</span>
        </div>

        <h1 className="hero-h1">
          Confused About<br />Your <em>Career Path?</em>
        </h1>

        <p className="hero-sub">
          We help students after 10th, 12th, and graduation discover the right opportunities
          and achieve their goals with expert guidance.
        </p>

        <div className="hero-tags">
          {tags.map(t => (
            <span key={t.label} className={`hero-tag${t.gold ? ' gold' : ''}`}>{t.label}</span>
          ))}
        </div>

        <div className="hero-btns">
          <a href="/counseling" className="hero-btn-primary">Talk to an Expert</a>
          <a href="/services" className="hero-btn-outline">Explore Services</a>
          <a href="/admissions" className="hero-btn-outline">View Admissions</a>
        </div>

        <div className="hero-trust">
          <span>Trusted by 5000+ students</span>
          <div className="hero-trust-dot" />
          <span>India &amp; Abroad</span>
          <div className="hero-trust-dot" />
          <span>No hidden fees</span>
        </div>
      </div>

      {/* Stats bar */}
      <div className="hero-stats-bar">
        {stats.map(s => (
          <div key={s.label} className="hero-stat">
            <div className="hero-stat-num">{s.num}</div>
            <div className="hero-stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        <span className="hero-scroll-text">Scroll</span>
      </div>

      {/* Audio toggle — shows MUTE icon when audio is ON, UNMUTE icon when OFF */}
      <button
        className="hero-audio-btn"
        onClick={toggleMute}
        aria-label={muted ? 'Unmute video' : 'Mute video'}
        title={muted ? 'Unmute' : 'Mute'}
      >
        {muted ? (
          /* Muted state → show crossed-out speaker (click to unmute) */
          <svg viewBox="0 0 24 24">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        ) : (
          /* Unmuted state → show speaker with sound waves (click to mute) */
          <svg viewBox="0 0 24 24">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          </svg>
        )}
      </button>
    </section>
  );
}