// src/pages/Terms.jsx
import React from "react";

export default function Terms() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        .terms-page {
          font-family: 'Space Grotesk', sans-serif;
          background: #fff;
          color: #0f172a;
          min-height: 100vh;
        }

        /* ── Hero Banner ── */
        .terms-hero {
          background: linear-gradient(135deg, #0d2d6e 0%, #1a56db 100%);
          padding: 80px 80px 72px;
          position: relative;
          overflow: hidden;
        }
        .terms-hero::before {
          content: '';
          position: absolute; top: -120px; right: -120px;
          width: 500px; height: 500px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.06);
          pointer-events: none;
        }
        .terms-hero::after {
          content: '';
          position: absolute; bottom: -80px; left: -80px;
          width: 300px; height: 300px; border-radius: 50%;
          background: rgba(249,115,22,0.08);
          pointer-events: none;
        }
        .terms-hero-inner { max-width: 860px; position: relative; z-index: 1; }
        .terms-pill {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,255,255,0.12); color: rgba(255,255,255,0.9);
          font-size: 11px; font-weight: 700; letter-spacing: 0.14em;
          text-transform: uppercase; padding: 6px 16px; border-radius: 100px;
          margin-bottom: 20px;
        }
        .terms-pill-dot { width: 6px; height: 6px; border-radius: 50%; background: #f97316; }
        .terms-hero-title {
          font-family: 'Sora', sans-serif;
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 800; color: #fff; line-height: 1.1;
          margin: 0 0 16px;
        }
        .terms-hero-title span { color: #fb923c; }
        .terms-hero-sub {
          font-size: 15px; color: rgba(255,255,255,0.65);
          line-height: 1.75; max-width: 520px; margin: 0;
        }
        .terms-hero-meta {
          margin-top: 28px;
          display: flex; gap: 24px; flex-wrap: wrap;
        }
        .terms-hero-meta-item {
          font-size: 12px; color: rgba(255,255,255,0.45);
          display: flex; align-items: center; gap: 6px;
        }
        .terms-hero-meta-dot { width: 4px; height: 4px; border-radius: 50%; background: #f97316; }

        /* ── Body ── */
        .terms-body {
          max-width: 860px;
          margin: 0 auto;
          padding: 72px 40px 100px;
        }

        /* ── Section Card ── */
        .terms-section {
          border: 1.5px solid #e2e8f0;
          border-radius: 12px;
          padding: 36px 40px;
          margin-bottom: 20px;
          background: #fff;
          position: relative;
          overflow: hidden;
          transition: border-color 0.25s, box-shadow 0.25s;
        }
        .terms-section::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #1a56db, #f97316);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.4s ease;
        }
        .terms-section:hover { border-color: #1a56db; box-shadow: 0 8px 32px rgba(26,86,219,0.09); }
        .terms-section:hover::before { transform: scaleX(1); }

        .terms-section-num {
          font-family: 'Sora', sans-serif;
          font-size: 11px; font-weight: 800; letter-spacing: 0.14em;
          text-transform: uppercase; color: #f97316;
          margin-bottom: 8px;
        }
        .terms-section-title {
          font-family: 'Sora', sans-serif;
          font-size: 18px; font-weight: 700; color: #0f172a;
          margin: 0 0 16px; line-height: 1.3;
        }
        .terms-section-body {
          font-size: 14.5px; color: #475569; line-height: 1.8; margin: 0;
        }

        /* ── Highlight box ── */
        .terms-highlight {
          background: #f0f5ff;
          border: 1.5px solid #c7d8fb;
          border-left: 4px solid #1a56db;
          border-radius: 10px;
          padding: 20px 24px;
          margin-top: 16px;
          font-size: 14px; color: #334155; line-height: 1.75;
        }
        .terms-highlight strong { color: #1a56db; font-weight: 700; }

        /* ── List ── */
        .terms-list {
          list-style: none; padding: 0; margin: 12px 0 0;
          display: flex; flex-direction: column; gap: 10px;
        }
        .terms-list li {
          display: flex; align-items: flex-start; gap: 10px;
          font-size: 14px; color: #475569; line-height: 1.7;
        }
        .terms-list-dot {
          width: 20px; height: 20px; border-radius: 50%; flex-shrink: 0;
          background: #e8f0fe; border: 1.5px solid #1a56db;
          display: flex; align-items: center; justify-content: center;
          margin-top: 2px;
        }
        .terms-list-dot svg { width: 10px; height: 10px; color: #1a56db; }

        /* ── Contact Box ── */
        .terms-contact-box {
          background: linear-gradient(135deg, #0d2d6e 0%, #1a56db 100%);
          border-radius: 16px;
          padding: 44px 40px;
          margin-top: 20px;
          position: relative;
          overflow: hidden;
        }
        .terms-contact-box::after {
          content: '';
          position: absolute; bottom: -60px; right: -60px;
          width: 220px; height: 220px; border-radius: 50%;
          background: rgba(249,115,22,0.12);
          pointer-events: none;
        }
        .terms-contact-title {
          font-family: 'Sora', sans-serif;
          font-size: 20px; font-weight: 800; color: #fff;
          margin: 0 0 6px;
        }
        .terms-contact-sub { font-size: 13px; color: rgba(255,255,255,0.55); margin-bottom: 24px; }
        .terms-contact-grid { display: flex; gap: 32px; flex-wrap: wrap; position: relative; z-index: 1; }
        .terms-contact-item { display: flex; align-items: center; gap: 12px; }
        .terms-contact-icon {
          width: 40px; height: 40px; border-radius: 10px;
          background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.15);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
          color: #fff;
        }
        .terms-contact-icon svg { width: 16px; height: 16px; }
        .terms-contact-label { font-size: 10px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.45); margin-bottom: 3px; }
        .terms-contact-val { font-size: 14px; font-weight: 600; color: #fff; }

        /* ── Footer note ── */
        .terms-footer-note {
          text-align: center; font-size: 12px; color: #94a3b8;
          margin-top: 48px; padding-top: 32px;
          border-top: 1px solid #e2e8f0;
        }

        @media (max-width: 768px) {
          .terms-hero { padding: 56px 24px 52px; }
          .terms-body { padding: 48px 20px 72px; }
          .terms-section { padding: 28px 24px; }
          .terms-contact-box { padding: 32px 24px; }
          .terms-contact-grid { flex-direction: column; gap: 20px; }
        }
      `}</style>

      <div className="terms-page">

        {/* ── Hero ── */}
        <div className="terms-hero">
          <div className="terms-hero-inner">
            <div className="terms-pill">
              <span className="terms-pill-dot" />
              Legal
            </div>
            <h1 className="terms-hero-title">
              Terms &amp; <span>Conditions</span>
            </h1>
            <p className="terms-hero-sub">
              Please read these terms carefully before using our website or services.
            </p>
            <div className="terms-hero-meta">
              <span className="terms-hero-meta-item">
                <span className="terms-hero-meta-dot" /> Maharsh Edutech Private Limited
              </span>
            </div>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="terms-body">

          {/* 1 — Privacy & Promotional Communications */}
          <div className="terms-section">
            <div className="terms-section-num">Section 01</div>
            <div className="terms-section-title">Privacy &amp; Promotional Communications</div>
            <p className="terms-section-body">
              Your use of this Site is also governed by our Privacy Policy. By submitting an enquiry through our contact form or booking a session, you consent to receive promotional communications from Maharsh Edutech Private Limited via RCS, SMS, Voice, WhatsApp, and Email, as detailed in our Privacy Policy.
            </p>
            <div className="terms-highlight">
              <strong>What this means:</strong> When you submit your name and mobile number through our Book Session form or any enquiry form on this website, you agree to be contacted by our counseling team through any of the following channels — RCS, SMS, Voice call, WhatsApp, and Email — for the purpose of providing career guidance, sharing program updates, and promotional communications related to our educational services.
            </div>
          </div>

          {/* 2 — Services */}
          <div className="terms-section">
            <div className="terms-section-num">Section 02</div>
            <div className="terms-section-title">Services</div>
            <p className="terms-section-body">
              By accessing and using this website, you agree to comply with the following terms and conditions. Maharsh Edutech Pvt Ltd provides career guidance, admission support, and related services for students in India and abroad.
            </p>
          </div>

          {/* 3 — User Responsibility */}
          <div className="terms-section">
            <div className="terms-section-num">Section 03</div>
            <div className="terms-section-title">User Responsibility</div>
            <p className="terms-section-body">
              Users must provide accurate information while using our services. Any misuse of the website is strictly prohibited.
            </p>
          </div>

          {/* 4 — No Guarantee */}
          <div className="terms-section">
            <div className="terms-section-num">Section 04</div>
            <div className="terms-section-title">No Guarantee</div>
            <p className="terms-section-body">
              We do not guarantee admission or job placement. Final decisions depend on institutions and eligibility criteria.
            </p>
          </div>

          {/* 5 — Intellectual Property */}
          <div className="terms-section">
            <div className="terms-section-num">Section 05</div>
            <div className="terms-section-title">Intellectual Property</div>
            <p className="terms-section-body">
              All content on this website is owned by Maharsh Edutech Pvt Ltd and cannot be copied or reused without permission.
            </p>
          </div>

          {/* 6 — Limitation of Liability */}
          <div className="terms-section">
            <div className="terms-section-num">Section 06</div>
            <div className="terms-section-title">Limitation of Liability</div>
            <p className="terms-section-body">
              We are not responsible for any loss arising from the use of our services or website.
            </p>
          </div>

          {/* 7 — Changes to Terms */}
          <div className="terms-section">
            <div className="terms-section-num">Section 07</div>
            <div className="terms-section-title">Changes to Terms</div>
            <p className="terms-section-body">
              We may update these terms at any time without prior notice. Continued use of our website following any changes constitutes your acceptance of the revised terms.
            </p>
          </div>

          {/* Contact Box */}
          <div className="terms-contact-box">
            <div className="terms-contact-title">Questions About These Terms?</div>
            <div className="terms-contact-sub">Reach out to our team directly.</div>
            <div className="terms-contact-grid">
              <div className="terms-contact-item">
                <div className="terms-contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <div className="terms-contact-label">Phone</div>
                  <div className="terms-contact-val">7337267648</div>
                </div>
              </div>
              <div className="terms-contact-item">
                <div className="terms-contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <div className="terms-contact-label">Location</div>
                  <div className="terms-contact-val">Hyderabad, Telangana</div>
                </div>
              </div>
            </div>
          </div>



        </div>
      </div>
    </>
  );
}