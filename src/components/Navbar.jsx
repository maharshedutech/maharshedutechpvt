// src/components/Navbar.jsx
import React from "react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, width: '100%', margin: 0, padding: 0 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Outfit:wght@400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .mhdr * { box-sizing: border-box; }
        .mhdr {
          --bg: #1a1a1a;
          --bg-dark: #111111;
          --bg-light: #242424;
          --gold: #c9a227;
          --gold-light: #e0b93a;
          --text: #ffffff;
          --text-muted: rgba(255,255,255,0.55);
          font-family: 'Outfit', sans-serif;
          width: 100%;
          display: block;
        }

        .mhdr-top {
          background: var(--bg-dark);
          border-bottom: 1px solid rgba(201,162,39,0.25);
          height: 56px;
          display: flex;
          align-items: center;
          padding: 0 32px;
          justify-content: space-between;
          width: 100%;
        }

        .mhdr-brand { display: flex; align-items: center; gap: 12px; text-decoration: none; }

        .mhdr-logo-wrap {
          width: 42px; height: 42px; border-radius: 8px;
          background: white; display: flex; align-items: center; justify-content: center;
          border: 1.5px solid var(--gold); overflow: hidden; flex-shrink: 0;
        }
        .mhdr-logo-wrap img { width: 38px; height: 38px; object-fit: contain; }

        .mhdr-logo-name {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 20px; font-weight: 700; color: var(--text); letter-spacing: 0.04em; line-height: 1;
        }
        .mhdr-logo-name span { color: var(--gold); }

        .mhdr-logo-sub {
          font-size: 9px; font-weight: 600; letter-spacing: 0.18em;
          text-transform: uppercase; color: var(--gold); line-height: 1; margin-top: 2px;
        }

        .mhdr-nav { display: flex; align-items: center; gap: 4px; }

        .mhdr-nav a {
          font-size: 13px; font-weight: 500; color: var(--text-muted);
          text-decoration: none; padding: 6px 14px; border-radius: 6px;
          letter-spacing: 0.03em; transition: all 0.2s;
        }
        .mhdr-nav a:hover { color: var(--text); background: rgba(255,255,255,0.07); }

        .mhdr-cta {
          font-size: 12px; font-weight: 600; background: var(--gold); color: #111111;
          border: none; padding: 7px 16px; border-radius: 6px; cursor: pointer;
          letter-spacing: 0.05em; text-transform: uppercase; transition: background 0.2s; text-decoration: none;
        }
        .mhdr-cta:hover { background: var(--gold-light); }

        .mhdr-ham {
          display: none; background: none; border: 1px solid rgba(255,255,255,0.2);
          border-radius: 6px; color: var(--text); cursor: pointer; padding: 6px 8px;
        }

        .mhdr-mobile {
          background: var(--bg); border-bottom: 2px solid var(--gold); padding: 12px 20px 16px;
          width: 100%;
        }
        .mhdr-mobile a {
          display: block; font-size: 14px; font-weight: 500; color: rgba(255,255,255,0.75);
          text-decoration: none; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06);
          transition: color 0.2s;
        }
        .mhdr-mobile a:last-child { border-bottom: none; }
        .mhdr-mobile a:hover { color: var(--gold); }

        .mhdr-ticker-bar {
          background: var(--bg);
          border-bottom: 2px solid var(--gold);
          height: 32px; overflow: hidden; display: flex; align-items: center;
          width: 100%;
        }
        .mhdr-ticker-label {
          background: var(--gold); color: #111111; font-size: 10px; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase; padding: 0 14px;
          height: 100%; display: flex; align-items: center; flex-shrink: 0;
        }
        .mhdr-ticker-scroll { flex: 1; overflow: hidden; }
        .mhdr-ticker-track {
          display: flex; animation: mhdr-scroll 40s linear infinite; white-space: nowrap;
        }
        .mhdr-ticker-track:hover { animation-play-state: paused; }
        @keyframes mhdr-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .mhdr-ticker-item {
          display: inline-flex; align-items: center; gap: 8px; padding: 0 24px;
          font-size: 11.5px; font-weight: 500; color: rgba(255,255,255,0.85);
          letter-spacing: 0.04em; flex-shrink: 0;
        }
        .mhdr-ticker-sep {
          width: 5px; height: 5px; border-radius: 50%; background: var(--gold);
          flex-shrink: 0; opacity: 0.7;
        }
        .mhdr-ticker-badge {
          background: var(--gold); color: #111111; font-size: 9px; font-weight: 700;
          letter-spacing: 0.12em; padding: 2px 7px; border-radius: 3px; text-transform: uppercase;
        }

        @media (max-width: 640px) {
          .mhdr-top { padding: 0 16px; }
          .mhdr-nav { display: none; }
          .mhdr-cta { display: none; }
          .mhdr-ham { display: block; }
          .mhdr-logo-sub { display: none; }
        }
      `}</style>

      <div className="mhdr">
        <div className="mhdr-top">
          <a href="/" className="mhdr-brand">
            <div className="mhdr-logo-wrap">
              <img src="/FinalRoundlogo.png" alt="Maharsh Edutech" />
            </div>
            <div>
              <div className="mhdr-logo-name">Maharsh <span>Edutech</span></div>
              <div className="mhdr-logo-sub">Pvt Ltd</div>
            </div>
          </a>

          <nav className="mhdr-nav">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            
            <a href="/contact">Contact</a>
          </nav>

          <a href="/contact" className="mhdr-cta">Free Counseling</a>

          <button className="mhdr-ham" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {isOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="mhdr-mobile">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            
            <a href="/contact">Contact</a>
            <a href="/contact" style={{ color: '#c9a227', fontWeight: 600 }}>Free Counseling →</a>
          </div>
        )}

        <div className="mhdr-ticker-bar">
          <div className="mhdr-ticker-label">Latest</div>
          <div className="mhdr-ticker-scroll">
            <div className="mhdr-ticker-track">
              {[...Array(2)].map((_, i) => (
                <span key={i} style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <span className="mhdr-ticker-item">Admissions Open 2026 <span className="mhdr-ticker-badge">Apply Now</span></span>
                  <span className="mhdr-ticker-sep" />
                  <span className="mhdr-ticker-item">Free Career Counseling Available Now</span>
                  <span className="mhdr-ticker-sep" />
                  <span className="mhdr-ticker-item">India &amp; Abroad Admissions Support</span>
                  <span className="mhdr-ticker-sep" />
                  <span className="mhdr-ticker-item">Get Education Loan Assistance Easily <span className="mhdr-ticker-badge">New</span></span>
                  <span className="mhdr-ticker-sep" />
                  <span className="mhdr-ticker-item">After 10th | 12th | Graduation – We Guide You</span>
                  <span className="mhdr-ticker-sep" />
                  <span className="mhdr-ticker-item">Limited Slots – Book Now <span className="mhdr-ticker-badge">Limited</span></span>
                  <span className="mhdr-ticker-sep" />
                  <span className="mhdr-ticker-item">Start Your Career Journey with Maharsh Edutech</span>
                  <span className="mhdr-ticker-sep" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}