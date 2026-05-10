// src/components/Navbar.jsx
import React from "react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const WA_NUMBER = "91XXXXXXXXXX"; // ← Replace with your WhatsApp Business number

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, width: '100%', margin: 0, padding: 0 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .mhdr * { box-sizing: border-box; }
        .mhdr {
          --blue: #1a56db;
          --blue-dark: #1442b5;
          --blue-deep: #0d2d6e;
          --orange: #f97316;
          --orange-light: #fb923c;
          --white: #ffffff;
          --white-muted: rgba(255,255,255,0.75);
          --white-faint: rgba(255,255,255,0.45);
          font-family: 'Plus Jakarta Sans', sans-serif;
          width: 100%;
          display: block;
        }

        .mhdr-ticker-bar {
          background: var(--blue-deep);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          height: 30px; overflow: hidden; display: flex; align-items: center; width: 100%;
        }
        .mhdr-ticker-label {
          background: var(--orange); color: #fff; font-size: 9.5px; font-weight: 700;
          letter-spacing: 0.15em; text-transform: uppercase; padding: 0 14px;
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
          display: inline-flex; align-items: center; gap: 8px; padding: 0 22px;
          font-size: 11px; font-weight: 500; color: rgba(255,255,255,0.82);
          letter-spacing: 0.04em; flex-shrink: 0;
        }
        .mhdr-ticker-sep {
          width: 4px; height: 4px; border-radius: 50%; background: var(--orange);
          flex-shrink: 0; opacity: 0.7;
        }
        .mhdr-ticker-badge {
          background: var(--orange); color: #fff; font-size: 9px; font-weight: 700;
          letter-spacing: 0.1em; padding: 2px 7px; border-radius: 3px; text-transform: uppercase;
        }

        .mhdr-top {
          background: var(--blue);
          height: 62px;
          display: flex;
          align-items: center;
          padding: 0 40px;
          justify-content: space-between;
          width: 100%;
        }

        .mhdr-brand { display: flex; flex-direction: column; text-decoration: none; line-height: 1; }
        .mhdr-brand-name {
          font-size: 21px; font-weight: 800; color: var(--white); letter-spacing: 0.02em;
        }
        .mhdr-brand-name span { color: var(--orange-light); }
        .mhdr-brand-sub {
          font-size: 9px; font-weight: 600; letter-spacing: 0.22em;
          text-transform: uppercase; color: rgba(255,255,255,0.65); margin-top: 2px;
        }

        .mhdr-nav { display: flex; align-items: center; gap: 2px; }
        .mhdr-nav a {
          font-size: 13.5px; font-weight: 500; color: var(--white-muted);
          text-decoration: none; padding: 7px 15px; border-radius: 6px;
          letter-spacing: 0.01em; transition: all 0.2s; display: flex; align-items: center; gap: 4px;
        }
        .mhdr-nav a:hover { color: var(--white); background: rgba(255,255,255,0.12); }

        .mhdr-cta {
          font-size: 13px; font-weight: 700; background: var(--orange); color: #fff;
          border: none; padding: 9px 20px; border-radius: 7px; cursor: pointer;
          letter-spacing: 0.04em; text-transform: uppercase; transition: all 0.2s;
          text-decoration: none; display: flex; align-items: center; gap: 7px;
          white-space: nowrap; box-shadow: 0 2px 12px rgba(249,115,22,0.35);
        }
        .mhdr-cta:hover {
          background: var(--orange-light);
          box-shadow: 0 4px 18px rgba(249,115,22,0.5);
          transform: translateY(-1px);
        }
        .mhdr-cta-icon {
          width: 18px; height: 18px; background: #fff; border-radius: 50%;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }

        .mhdr-ham {
          display: none; background: none; border: 1px solid rgba(255,255,255,0.3);
          border-radius: 6px; color: var(--white); cursor: pointer; padding: 6px 8px;
        }

        .mhdr-mobile {
          background: var(--blue-dark);
          padding: 12px 20px 16px; width: 100%;
        }
        .mhdr-mobile a {
          display: block; font-size: 14px; font-weight: 500; color: rgba(255,255,255,0.75);
          text-decoration: none; padding: 10px 0;
          border-bottom: 1px solid rgba(255,255,255,0.08); transition: color 0.2s;
        }
        .mhdr-mobile a:last-child { border-bottom: none; }
        .mhdr-mobile a:hover { color: var(--orange-light); }

        @media (max-width: 640px) {
          .mhdr-top { padding: 0 16px; }
          .mhdr-nav { display: none; }
          .mhdr-cta { display: none; }
          .mhdr-ham { display: block; }
          .mhdr-brand-sub { display: none; }
        }
      `}</style>

      <div className="mhdr">
        {/* Ticker now at the TOP */}
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

        {/* Main nav bar */}
        <div className="mhdr-top">
          <a href="/" className="mhdr-brand">
            <div className="mhdr-brand-name">Maharsh <span>Edutech</span></div>
            <div className="mhdr-brand-sub">Private Limited</div>
          </a>

          <nav className="mhdr-nav">
            <a href="/">Home</a>
            <a href="/about">Engineering</a>
            <a href="/services">MBBS</a>
            <a href="/study-abroad">Study Abroad</a>
            <a href="/contact">Contact Us</a>
          </nav>

          <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer" className="mhdr-cta">
            <span className="mhdr-cta-icon">
              <svg viewBox="0 0 24 24" width="11" height="11" fill="#25d366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.529 5.845L.057 23.5l5.797-1.519A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.795 9.795 0 01-5.031-1.384l-.361-.214-3.44.902.918-3.352-.235-.375A9.795 9.795 0 012.182 12c0-5.42 4.398-9.818 9.818-9.818S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
              </svg>
            </span>
            Book Session
          </a>

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
            <a href="/about">Engineering</a>
            <a href="/services">MBBS</a>
            <a href="/study-abroad">Study Abroad</a>
            <a href="/contact">Contact Us</a>
            <a href={`https://wa.me/${WA_NUMBER}`} style={{ color: '#fb923c', fontWeight: 600 }}>Book Session →</a>
          </div>
        )}
      </div>
    </header>
  );
}