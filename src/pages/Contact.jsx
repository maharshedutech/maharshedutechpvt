// src/pages/Contact.jsx
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

function RevealSection({ children, style = {}, delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(48px)",
      transition: `opacity 0.9s cubic-bezier(.22,1,.36,1) ${delay}ms, transform 0.9s cubic-bezier(.22,1,.36,1) ${delay}ms`,
      ...style,
    }}>{children}</div>
  );
}

/* ─── Map Embed ─── */
const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6!2d78.4389!3d17.4497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91e7d7b!2sSanjeev+Reddy+Nagar%2C+Hyderabad%2C+Telangana!5e0!3m2!1sen!2sin!4v1700000000000";

/* ─── Contact Items ─── */
const contactItems = [
  {
    label: "Mobile",
    value: "+91 73372 67648",
    sub: "Mon – Sat, 9 AM – 7 PM IST",
    href: "tel:+917337267648",
    cta: "Call Now",
  },
  {
    label: "WhatsApp",
    value: "+91 73372 67648",
    sub: "Quick response within minutes",
    href: "https://wa.me/917337267648",
    cta: "Message Us",
    isExternal: true,
  },
  {
    label: "Email",
    value: "hello@maharshedutech.com",
    sub: "Response within 24 hours",
    href: "mailto:hello@maharshedutech.com",
    cta: "Send Email",
  },
];

const services = [
  "Career Counseling",
  "SOP / LOR",
  "Admissions",
  "Education Loans",
];

export default function Contact() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');

        :root {
          --gold: #C9A84C;
          --gold2: #E2C46B;
          --gold-border: rgba(201,168,76,0.18);
          --ink: #0A0A0A;
          --ink2: #111111;
          --ink3: #161616;
          --smoke: rgba(255,255,255,0.88);
          --muted: rgba(255,255,255,0.50);
          --faint: rgba(255,255,255,0.28);
        }

        .ct * { box-sizing: border-box; margin: 0; padding: 0; }
        .ct {
          font-family: 'DM Sans', sans-serif;
          background: var(--ink);
          color: var(--smoke);
          line-height: 1;
          overflow-x: hidden;
          border-radius: 12px;
          overflow: hidden;
        }

        /* ══ HERO ══ */
        .ct-hero {
          position: relative;
          border-bottom: 1px solid var(--gold-border);
          overflow: hidden;
        }
        .ct-hero-img {
          width: 100%;
          height: clamp(200px, 30vw, 3000px);
          object-fit: cover;
          object-position: center top;
          display: block;
          filter: brightness(0.55) saturate(0.7);
        }
        .ct-hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, rgba(10,10,10,0.1) 0%, rgba(10,10,10,0.72) 100%);
        }
        .ct-hero-grid {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px);
          background-size: 44px 44px;
          mask-image: radial-gradient(ellipse 80% 80% at center, black 0%, transparent 70%);
        }
        .ct-hero-text {
          position: absolute; bottom: 0; left: 0;
          padding: clamp(20px, 4vw, 36px) clamp(24px, 5vw, 52px);
        }
        .ct-eyebrow {
          font-size: 9px; font-weight: 600; letter-spacing: 0.28em;
          text-transform: uppercase; color: var(--gold);
          display: flex; align-items: center; gap: 8px; margin-bottom: 10px;
        }
        .ct-eyebrow-line { height: 1px; width: 22px; background: var(--gold); flex-shrink: 0; }
        .ct-hero-h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(26px, 5vw, 46px); font-weight: 900;
          line-height: 1.06; color: rgba(255,255,255,0.95);
        }
        .ct-hero-h1 em { font-style: italic; color: var(--gold); }

        /* ══ BODY ══ */
        .ct-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
        }
        @media (max-width: 700px) {
          .ct-body { grid-template-columns: 1fr; }
          .ct-left { border-right: none !important; border-bottom: 1px solid var(--gold-border); }
        }

        .ct-left {
          padding: clamp(28px, 4vw, 44px) clamp(24px, 4vw, 40px);
          border-right: 1px solid var(--gold-border);
        }
        .ct-right {
          padding: clamp(28px, 4vw, 44px) clamp(24px, 4vw, 40px);
          background: var(--ink2);
        }

        /* ── Section Label ── */
        .ct-section-label {
          font-size: 9px; font-weight: 600; letter-spacing: 0.26em;
          text-transform: uppercase; color: var(--gold);
          display: flex; align-items: center; gap: 10px;
          margin-bottom: 18px;
        }
        .ct-section-line { height: 1px; flex: 1; background: var(--gold-border); }

        /* ── Contact Items ── */
        .ct-items {
          border: 1px solid var(--gold-border);
          border-radius: 6px; overflow: hidden;
          margin-bottom: 28px;
        }
        .ct-item {
          display: flex; align-items: flex-start; gap: 14px;
          padding: 18px 20px;
          border-bottom: 1px solid rgba(201,168,76,0.08);
          background: var(--ink2);
          position: relative; transition: background 0.2s;
        }
        .ct-item:last-child { border-bottom: none; }
        .ct-item:hover { background: var(--ink3); }
        .ct-item::before {
          content: ''; position: absolute; left: 0; top: 0; bottom: 0;
          width: 2px; background: var(--gold);
          transform: scaleY(0); transform-origin: top;
          transition: transform 0.3s;
        }
        .ct-item:hover::before { transform: scaleY(1); }
        .ct-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--gold); flex-shrink: 0; margin-top: 5px;
        }
        .ct-item-label {
          font-size: 9px; font-weight: 600; letter-spacing: 0.2em;
          text-transform: uppercase; color: var(--gold); opacity: 0.7;
          margin-bottom: 4px;
        }
        .ct-item-value {
          font-size: 13.5px; font-weight: 600;
          color: rgba(255,255,255,0.9); line-height: 1.4;
        }
        .ct-item-sub {
          font-size: 11px; color: var(--faint);
          margin-top: 3px; line-height: 1.5;
        }
        .ct-item-cta {
          display: inline-block; margin-top: 6px;
          font-size: 10px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--gold);
          text-decoration: none;
        }

        /* ── Hours ── */
        .ct-hours {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          border: 1px solid var(--gold-border); border-radius: 6px;
          overflow: hidden; margin-bottom: 28px;
        }
        .ct-hour-cell {
          background: var(--ink2); padding: 16px 18px;
        }
        .ct-hour-day {
          font-size: 9px; font-weight: 600; letter-spacing: 0.18em;
          text-transform: uppercase; color: var(--gold); margin-bottom: 5px;
        }
        .ct-hour-time { font-size: 13px; font-weight: 500; color: var(--smoke); }

        /* ── Tags ── */
        .ct-tags { display: flex; gap: 8px; flex-wrap: wrap; }
        .ct-tag {
          font-size: 10px; font-weight: 500; padding: 5px 12px;
          border: 1px solid rgba(201,168,76,0.22); border-radius: 2px;
          color: var(--muted); letter-spacing: 0.06em;
        }

        /* ── Address Card ── */
        .ct-addr-card {
          border: 1px solid var(--gold-border); border-radius: 6px;
          background: var(--ink2); padding: 22px 22px;
          margin-bottom: 28px;
        }
        .ct-addr-pin {
          display: flex; align-items: center; gap: 6px;
          font-size: 9px; font-weight: 600; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--gold); margin-bottom: 10px;
        }
        .ct-addr-pin svg { width: 12px; height: 12px; flex-shrink: 0; }
        .ct-addr-name {
          font-family: 'Playfair Display', serif;
          font-size: 17px; font-weight: 700;
          color: rgba(255,255,255,0.95); margin-bottom: 10px;
        }
        .ct-gold-bar {
          width: 32px; height: 2px; background: var(--gold);
          border-radius: 1px; margin-bottom: 14px;
        }
        .ct-addr-line {
          font-size: 13px; color: var(--muted);
          line-height: 1.85;
        }
        .ct-dir-btn {
          display: inline-flex; align-items: center; gap: 6px;
          margin-top: 16px;
          font-size: 10px; font-weight: 700; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--gold);
          text-decoration: none;
          border: 1px solid rgba(201,168,76,0.3); padding: 9px 16px;
          border-radius: 3px; transition: border-color 0.2s, background 0.2s;
        }
        .ct-dir-btn:hover { border-color: var(--gold); background: rgba(201,168,76,0.06); }

        /* ── Map ── */
        .ct-map-wrap {
          border: 1px solid var(--gold-border); border-radius: 6px;
          overflow: hidden; position: relative;
        }
        .ct-map-badge {
          position: absolute; top: 10px; left: 10px; z-index: 2;
          font-size: 8.5px; font-weight: 700; letter-spacing: 0.18em;
          text-transform: uppercase;
          background: var(--ink); color: var(--gold);
          border: 1px solid rgba(201,168,76,0.3); padding: 4px 9px; border-radius: 2px;
        }
        .ct-map-wrap iframe {
          width: 100%; height: 260px; border: none; display: block;
          filter: invert(0.9) hue-rotate(180deg) saturate(0.35) brightness(0.88);
        }
      `}</style>

      <div className="ct">

        {/* ══ HERO — Reception Image ══ */}
        <RevealSection>
          <section className="ct-hero">
            <img
              className="ct-hero-img"
              src="/reception.png"
              alt="Maharsh Edutech Office Reception"
            />
            <div className="ct-hero-overlay" />
            <div className="ct-hero-grid" />
            <div className="ct-hero-text">
              <div className="ct-eyebrow">
                <div className="ct-eyebrow-line" /> Get In Touch <div className="ct-eyebrow-line" />
              </div>
              <h1 className="ct-hero-h1">
                We're Here to <em>Help You</em>
              </h1>
            </div>
          </section>
        </RevealSection>

        {/* ══ BODY ══ */}
        <div className="ct-body">

          {/* ── LEFT: Contact Details + Hours + Tags ── */}
          <RevealSection delay={60} style={{ display: "contents" }}>
            <div className="ct-left">

              <div className="ct-section-label">
                Contact Details <div className="ct-section-line" />
              </div>

              <div className="ct-items">
                {contactItems.map((item, i) => (
                  <div key={i} className="ct-item">
                    <div className="ct-dot" />
                    <div>
                      <div className="ct-item-label">{item.label}</div>
                      <div className="ct-item-value">{item.value}</div>
                      <div className="ct-item-sub">{item.sub}</div>
                      <a
                        href={item.href}
                        className="ct-item-cta"
                        target={item.isExternal ? "_blank" : undefined}
                        rel="noopener noreferrer"
                      >
                        {item.cta} →
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="ct-section-label">
                Office Hours <div className="ct-section-line" />
              </div>
              <div className="ct-hours">
                <div className="ct-hour-cell">
                  <div className="ct-hour-day">Mon – Sat</div>
                  <div className="ct-hour-time">9:00 AM – 7:00 PM</div>
                </div>
                <div className="ct-hour-cell">
                  <div className="ct-hour-day">Sunday</div>
                  <div className="ct-hour-time">By appointment</div>
                </div>
              </div>

              <div className="ct-tags">
                {services.map((s, i) => (
                  <span key={i} className="ct-tag">{s}</span>
                ))}
              </div>

            </div>
          </RevealSection>

          {/* ── RIGHT: Address + Map ── */}
          <RevealSection delay={160} style={{ display: "contents" }}>
            <div className="ct-right">

              <div className="ct-section-label">
                Our Office <div className="ct-section-line" />
              </div>

              <div className="ct-addr-card">
                <div className="ct-addr-pin">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  Hyderabad, Telangana
                </div>
                <div className="ct-addr-name">Maharsh Edutech Pvt. Ltd.</div>
                <div className="ct-gold-bar" />
                <div className="ct-addr-line">Flat No. 201, Plot No. 34 East</div>
                <div className="ct-addr-line">Srinivasa Colony, Sanjeev Reddy Nagar</div>
                <div className="ct-addr-line">Hyderabad – 500038</div>
                <div className="ct-addr-line">Telangana, India</div>
                <a
                  href="https://maps.google.com/?q=Srinivasa+Colony+Sanjeev+Reddy+Nagar+Hyderabad+500038"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ct-dir-btn"
                >
                  Get Directions →
                </a>
              </div>

              <div className="ct-section-label">
                Location Map <div className="ct-section-line" />
              </div>
              <div className="ct-map-wrap">
                <div className="ct-map-badge">Sanjeev Reddy Nagar</div>
                <iframe
                  title="Maharsh Edutech Location"
                  src={MAP_SRC}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

            </div>
          </RevealSection>

        </div>
      </div>
    </>
  );
}