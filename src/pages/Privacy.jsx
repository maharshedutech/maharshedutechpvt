// src/pages/Privacy.jsx
import React from "react";

export default function Privacy() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        .priv-page {
          font-family: 'Space Grotesk', sans-serif;
          background: #fff;
          color: #0f172a;
          min-height: 100vh;
        }

        /* ── Hero Banner ── */
        .priv-hero {
          background: linear-gradient(135deg, #0d2d6e 0%, #1a56db 100%);
          padding: 80px 80px 72px;
          position: relative;
          overflow: hidden;
        }
        .priv-hero::before {
          content: '';
          position: absolute; top: -120px; right: -120px;
          width: 500px; height: 500px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.06);
          pointer-events: none;
        }
        .priv-hero::after {
          content: '';
          position: absolute; bottom: -80px; left: -80px;
          width: 300px; height: 300px; border-radius: 50%;
          background: rgba(249,115,22,0.08);
          pointer-events: none;
        }
        .priv-hero-inner { max-width: 860px; position: relative; z-index: 1; }
        .priv-pill {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,255,255,0.12); color: rgba(255,255,255,0.9);
          font-size: 11px; font-weight: 700; letter-spacing: 0.14em;
          text-transform: uppercase; padding: 6px 16px; border-radius: 100px;
          margin-bottom: 20px;
        }
        .priv-pill-dot { width: 6px; height: 6px; border-radius: 50%; background: #f97316; }
        .priv-hero-title {
          font-family: 'Sora', sans-serif;
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 800; color: #fff; line-height: 1.1;
          margin: 0 0 16px;
        }
        .priv-hero-title span { color: #fb923c; }
        .priv-hero-sub {
          font-size: 15px; color: rgba(255,255,255,0.65);
          line-height: 1.75; max-width: 520px; margin: 0;
        }
        .priv-hero-meta {
          margin-top: 28px;
          display: flex; gap: 24px; flex-wrap: wrap;
        }
        .priv-hero-meta-item {
          font-size: 12px; color: rgba(255,255,255,0.45);
          display: flex; align-items: center; gap: 6px;
        }
        .priv-hero-meta-dot { width: 4px; height: 4px; border-radius: 50%; background: #f97316; }

        /* ── Body ── */
        .priv-body {
          max-width: 860px;
          margin: 0 auto;
          padding: 72px 40px 100px;
        }

        /* ── Section Card ── */
        .priv-section {
          border: 1.5px solid #e2e8f0;
          border-radius: 12px;
          padding: 36px 40px;
          margin-bottom: 20px;
          background: #fff;
          position: relative;
          overflow: hidden;
          transition: border-color 0.25s, box-shadow 0.25s;
        }
        .priv-section::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #1a56db, #f97316);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.4s ease;
        }
        .priv-section:hover { border-color: #1a56db; box-shadow: 0 8px 32px rgba(26,86,219,0.09); }
        .priv-section:hover::before { transform: scaleX(1); }

        .priv-section-num {
          font-family: 'Sora', sans-serif;
          font-size: 11px; font-weight: 800; letter-spacing: 0.14em;
          text-transform: uppercase; color: #f97316;
          margin-bottom: 8px;
        }
        .priv-section-title {
          font-family: 'Sora', sans-serif;
          font-size: 18px; font-weight: 700; color: #0f172a;
          margin: 0 0 16px; line-height: 1.3;
        }
        .priv-section-body {
          font-size: 14.5px; color: #475569; line-height: 1.8; margin: 0;
        }

        /* ── Highlight box (for the promotional communications clause) ── */
        .priv-highlight {
          background: #f0f5ff;
          border: 1.5px solid #c7d8fb;
          border-left: 4px solid #1a56db;
          border-radius: 10px;
          padding: 20px 24px;
          margin-top: 16px;
          font-size: 14px; color: #334155; line-height: 1.75;
        }
        .priv-highlight strong { color: #1a56db; font-weight: 700; }

        /* ── List ── */
        .priv-list {
          list-style: none; padding: 0; margin: 12px 0 0;
          display: flex; flex-direction: column; gap: 10px;
        }
        .priv-list li {
          display: flex; align-items: flex-start; gap: 10px;
          font-size: 14px; color: #475569; line-height: 1.7;
        }
        .priv-list-dot {
          width: 20px; height: 20px; border-radius: 50%; flex-shrink: 0;
          background: #e8f0fe; border: 1.5px solid #1a56db;
          display: flex; align-items: center; justify-content: center;
          margin-top: 2px;
        }
        .priv-list-dot svg { width: 10px; height: 10px; color: #1a56db; }

        /* ── Contact Box ── */
        .priv-contact-box {
          background: linear-gradient(135deg, #0d2d6e 0%, #1a56db 100%);
          border-radius: 16px;
          padding: 44px 40px;
          margin-top: 20px;
          position: relative;
          overflow: hidden;
        }
        .priv-contact-box::after {
          content: '';
          position: absolute; bottom: -60px; right: -60px;
          width: 220px; height: 220px; border-radius: 50%;
          background: rgba(249,115,22,0.12);
          pointer-events: none;
        }
        .priv-contact-title {
          font-family: 'Sora', sans-serif;
          font-size: 20px; font-weight: 800; color: #fff;
          margin: 0 0 6px;
        }
        .priv-contact-sub { font-size: 13px; color: rgba(255,255,255,0.55); margin-bottom: 24px; }
        .priv-contact-grid { display: flex; gap: 32px; flex-wrap: wrap; position: relative; z-index: 1; }
        .priv-contact-item { display: flex; align-items: center; gap: 12px; }
        .priv-contact-icon {
          width: 40px; height: 40px; border-radius: 10px;
          background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.15);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
          color: #fff;
        }
        .priv-contact-icon svg { width: 16px; height: 16px; }
        .priv-contact-label { font-size: 10px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.45); margin-bottom: 3px; }
        .priv-contact-val { font-size: 14px; font-weight: 600; color: #fff; }

        /* ── Footer note ── */
        .priv-footer-note {
          text-align: center; font-size: 12px; color: #94a3b8;
          margin-top: 48px; padding-top: 32px;
          border-top: 1px solid #e2e8f0;
        }

        @media (max-width: 768px) {
          .priv-hero { padding: 56px 24px 52px; }
          .priv-body { padding: 48px 20px 72px; }
          .priv-section { padding: 28px 24px; }
          .priv-contact-box { padding: 32px 24px; }
          .priv-contact-grid { flex-direction: column; gap: 20px; }
        }
      `}</style>

      <div className="priv-page">

        {/* ── Hero ── */}
        <div className="priv-hero">
          <div className="priv-hero-inner">
            <div className="priv-pill">
              <span className="priv-pill-dot" />
              Legal
            </div>
            <h1 className="priv-hero-title">
              Privacy <span>Policy</span>
            </h1>
            <p className="priv-hero-sub">
              How Maharsh Edutech collects, uses, and protects your personal information.
            </p>
            <div className="priv-hero-meta">
 
              <span className="priv-hero-meta-item">
                <span className="priv-hero-meta-dot" /> Maharsh Edutech Private Limited
              </span>
            </div>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="priv-body">

          {/* 1 — Information We Collect */}
          <div className="priv-section">
            <div className="priv-section-num">Section 01</div>
            <div className="priv-section-title">Information We Collect</div>
            <p className="priv-section-body">
              We collect personal details you provide when contacting us or using our services — including your name, phone number, email address, location, and educational background.
            </p>
          </div>

          {/* 2 — How We Use Your Information */}
          <div className="priv-section">
            <div className="priv-section-num">Section 02</div>
            <div className="priv-section-title">How We Use Your Information</div>
            <p className="priv-section-body">Your information is used solely to serve your educational needs:</p>
            <ul className="priv-list">
              {[
                "To provide career guidance, counseling, and admission support",
                "To communicate with you regarding our services and updates",
                "To improve our website, offerings, and student experience",
              ].map((item, i) => (
                <li key={i}>
                  <span className="priv-list-dot">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 3 — Privacy & Promotional Communications ← THE KEY SECTION */}
          <div className="priv-section">
            <div className="priv-section-num">Section 03</div>
            <div className="priv-section-title">Privacy &amp; Promotional Communications</div>
            <p className="priv-section-body">
              Your use of this Site is also governed by this Privacy Policy. By submitting an enquiry through our contact form or booking a session, you consent to receive promotional communications from Maharsh Edutech Private Limited via RCS, SMS, Voice, WhatsApp, and Email, as detailed in this Privacy Policy.
            </p>
            <div className="priv-highlight">
              <strong>What this means:</strong> When you submit your name and mobile number through our Book Session form or any enquiry form on this website, you agree to be contacted by our counseling team through any of the following channels — RCS, SMS, Voice call, WhatsApp, and Email — for the purpose of providing career guidance, sharing program updates, and promotional communications related to our educational services.
            </div>
          </div>

          {/* 4 — Data Protection */}
          <div className="priv-section">
            <div className="priv-section-num">Section 04</div>
            <div className="priv-section-title">Data Protection</div>
            <p className="priv-section-body">
              We take appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. Your data is stored securely and accessed only by authorized personnel.
            </p>
          </div>

          {/* 5 — Sharing of Information */}
          <div className="priv-section">
            <div className="priv-section-num">Section 05</div>
            <div className="priv-section-title">Sharing of Information</div>
            <p className="priv-section-body">
              We do not sell or share your personal information with third parties, except where necessary to facilitate your admission process (e.g., with partner institutions) or as required by applicable law.
            </p>
          </div>

          {/* 6 — Contact */}
          <div className="priv-contact-box">
            <div className="priv-contact-title">Questions About This Policy?</div>
            <div className="priv-contact-sub">Reach out to our team directly.</div>
            <div className="priv-contact-grid">
              <div className="priv-contact-item">
                <div className="priv-contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <div className="priv-contact-label">Phone</div>
                  <div className="priv-contact-val">7337267648</div>
                </div>
              </div>
              <div className="priv-contact-item">
                <div className="priv-contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <div className="priv-contact-label">Location</div>
                  <div className="priv-contact-val">Hyderabad, Telangana</div>
                </div>
              </div>
            </div>
          </div>

          <div className="priv-footer-note">
            © {new Date().getFullYear()} Maharsh Edutech Private Limited · All rights reserved ·{" "}
            <a href="/terms" style={{ color: "#1a56db", textDecoration: "none" }}>Terms &amp; Conditions</a>
          </div>

        </div>
      </div>
    </>
  );
}