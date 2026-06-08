// src/pages/Contact.jsx
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
      transform: visible ? "translateY(0)" : "translateY(40px)",
      transition: `opacity 0.8s cubic-bezier(.22,1,.36,1) ${delay}ms, transform 0.8s cubic-bezier(.22,1,.36,1) ${delay}ms`,
      ...style,
    }}>{children}</div>
  );
}

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.098148161998!2d78.4462947!3d17.4387618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91ab1835896f%3A0x9ba6d2c8f2f8564a!2sSV%20Technologies%20SAP!5e1!3m2!1sen!2sin!4v1777170438189!5m2!1sen!2sin";

const contactItems = [
  {
    icon: "📞",
    label: "Mobile",
    value: "+91 95662 28499",
    sub: "Mon – Sat, 9 AM – 7 PM IST",
    href: "tel:+919566228499",
    cta: "Call Now",
  },
  {
    icon: "💬",
    label: "WhatsApp",
    value: "+91 95662 28499",
    sub: "Quick response within minutes",
    href: "https://wa.me/919566228499",
    cta: "Message Us",
    isExternal: true,
  },
  {
    icon: "✉️",
    label: "Email",
    value: "info@maharshedutech.com",
    sub: "Response within 24 hours",
    href: "mailto:info@maharshedutech.com",
    cta: "Send Email",
  },
];

const services = [
  "Career Counseling",
  "SOP / LOR Writing",
  "College Admissions",
  "Education Loans",
];

const hours = [
  { day: "Mon – Sat", time: "9:00 AM – 7:00 PM" },
  { day: "Sunday", time: "By Appointment" },
];

const courses = [
  "Engineering (B.Tech / B.E)",
  "MBBS / Medical",
  "Study Abroad",
  "MBA / Management",
  "Law (LLB)",
  "Pharmacy (B.Pharm)",
  "Architecture (B.Arch)",
  "Nursing",
  "Other",
];

// ── Inline Booking Form (same endpoint & logic as BookSessionModal) ──
function InlineBookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    location: "",
    course: "",
    consent: false,
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.consent) {
      alert("Please accept the consent checkbox.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://integration.pqa.salesmax.ai/salesmax/leads?token=O9gEu5f3Tdiw3Rglf52abQ",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            mobile: formData.mobile,
            location: formData.location,
            course: formData.course,
            source: "Website",
            campaign: "Book Session",
          }),
        }
      );

      if (response.ok) {
        alert("Thank you! Our team will contact you shortly.");
        setFormData({ name: "", mobile: "", location: "", course: "", consent: false });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to submit. Please try again.");
    }

    setLoading(false);
  };

  return (
    <Reveal>
      <div className="ct-section-label">
        Book a Free Session <div className="ct-section-line" />
      </div>
      <div className="ct-booking-form">
        <div className="ct-booking-form-header">
          <div className="ct-booking-icon">🎓</div>
          <div>
            <div className="ct-booking-title">Free Counseling Session</div>
            <div className="ct-booking-sub">Fill in your details and we'll get back to you shortly.</div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="ct-form-grid">
            {/* Name */}
            <div className="ct-field">
              <label className="ct-field-label">Full Name <span className="ct-req">*</span></label>
              <input
                type="text"
                className="ct-input"
                placeholder="e.g. Rahul Sharma"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            {/* Mobile */}
            <div className="ct-field">
              <label className="ct-field-label">Mobile Number <span className="ct-req">*</span></label>
              <input
                type="tel"
                className="ct-input"
                placeholder="10-digit mobile number"
                required
                pattern="[0-9]{10}"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
              />
            </div>

            {/* Location */}
            <div className="ct-field">
              <label className="ct-field-label">Location <span className="ct-req">*</span></label>
              <input
                type="text"
                className="ct-input"
                placeholder="e.g. Hyderabad, Telangana"
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              />
            </div>

            {/* Course */}
            <div className="ct-field">
              <label className="ct-field-label">Interested Course <span className="ct-req">*</span></label>
              <select
                className="ct-input ct-select"
                required
                value={formData.course}
                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
              >
                <option value="">-- Select a Course --</option>
                {courses.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Consent */}
          <label className="ct-consent-label">
            <input
              type="checkbox"
              className="ct-checkbox"
              checked={formData.consent}
              onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            />
            <span className="ct-consent-text">
              By submitting, I consent to receive communications from Maharsh Edutech via RCS, SMS, Voice, WhatsApp, and Email. I also agree to the{" "}
              <a href="/terms" target="_blank" className="ct-consent-link">Terms &amp; Conditions</a>{" "}and{" "}
              <a href="/privacy" target="_blank" className="ct-consent-link">Privacy Policy</a>.
            </span>
          </label>

          <button
            type="submit"
            disabled={loading}
            className={`ct-submit-btn${loading ? " ct-submit-loading" : ""}`}
          >
            {loading ? "Submitting…" : "Submit & Book My Session →"}
          </button>
        </form>
      </div>
    </Reveal>
  );
}

export default function Contact() {
  return (
    <>
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

        .ct * { box-sizing: border-box; }
        .ct {
          font-family: 'Space Grotesk', sans-serif;
          background: #fff;
          color: var(--text);
          line-height: 1;
        }

        /* ══ HERO BANNER (no image) ══ */
        .ct-hero {
          background: var(--blue-deep);
          padding: 80px 80px 72px;
          position: relative;
          overflow: hidden;
        }
        .ct-hero-bg-pattern {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
        }
        .ct-hero-circle-1 {
          position: absolute; top: -80px; right: -80px;
          width: 360px; height: 360px; border-radius: 50%;
          background: rgba(249,115,22,0.07); pointer-events: none;
        }
        .ct-hero-circle-2 {
          position: absolute; bottom: -120px; left: 30%;
          width: 280px; height: 280px; border-radius: 50%;
          background: rgba(59,114,240,0.10); pointer-events: none;
        }
        .ct-pill {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,255,255,0.10); color: rgba(255,255,255,0.85);
          font-size: 11px; font-weight: 700; letter-spacing: 0.14em;
          text-transform: uppercase; padding: 6px 16px; border-radius: 100px;
          margin-bottom: 22px; border: 1px solid rgba(255,255,255,0.12);
        }
        .ct-pill-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--orange); }
        .ct-hero-h1 {
          font-family: 'Sora', sans-serif;
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 800; color: #fff; line-height: 1.08;
          letter-spacing: -0.02em; margin: 0 0 16px;
        }
        .ct-hero-h1 span { color: var(--orange); }
        .ct-hero-sub {
          font-size: 15px; color: rgba(255,255,255,0.55);
          max-width: 520px; line-height: 1.7; margin: 0;
        }
        .ct-hero-divider {
          width: 48px; height: 3px;
          background: linear-gradient(90deg, var(--orange), var(--orange-light));
          border-radius: 2px; margin: 24px 0 0;
        }

        /* ══ MAIN BODY ══ */
        .ct-main {
          padding: 80px 80px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          background: #fff;
        }

        /* ══ SECTION LABEL ══ */
        .ct-section-label {
          font-size: 10px; font-weight: 700; letter-spacing: 0.18em;
          text-transform: uppercase; color: var(--blue);
          display: flex; align-items: center; gap: 10px; margin-bottom: 20px;
        }
        .ct-section-line { height: 1px; flex: 1; background: var(--gray-light); }

        /* ══ INLINE BOOKING FORM ══ */
        .ct-booking-form {
          border: 1.5px solid var(--gray-light);
          border-radius: var(--radius);
          padding: 28px 28px 24px;
          background: var(--off);
          margin-bottom: 40px;
          position: relative;
          overflow: hidden;
        }
        .ct-booking-form::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, var(--blue), var(--orange));
        }
        .ct-booking-form-header {
          display: flex; align-items: center; gap: 14px; margin-bottom: 24px;
        }
        .ct-booking-icon {
          width: 44px; height: 44px; border-radius: 10px;
          background: var(--blue-light);
          display: flex; align-items: center; justify-content: center;
          font-size: 22px; flex-shrink: 0;
        }
        .ct-booking-title {
          font-family: 'Sora', sans-serif;
          font-size: 17px; font-weight: 800; color: var(--text); margin-bottom: 3px;
        }
        .ct-booking-sub { font-size: 12px; color: var(--gray); }

        .ct-form-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 16px;
        }
        .ct-field { display: flex; flex-direction: column; }
        .ct-field-label {
          font-size: 11px; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; color: var(--text2); margin-bottom: 6px;
        }
        .ct-req { color: var(--orange); margin-left: 2px; }
        .ct-input {
          width: 100%; padding: 11px 14px;
          border: 1.5px solid var(--gray-light); border-radius: 8px;
          font-size: 13.5px; font-family: 'Space Grotesk', sans-serif;
          color: var(--text); background: #fff; outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .ct-input:focus {
          border-color: var(--blue);
          box-shadow: 0 0 0 3px rgba(26,86,219,0.08);
        }
        .ct-select { cursor: pointer; appearance: auto; }

        .ct-consent-label {
          display: flex; gap: 10px; align-items: flex-start;
          margin-bottom: 20px; cursor: pointer;
        }
        .ct-checkbox {
          margin-top: 3px; flex-shrink: 0;
          accent-color: var(--blue); width: 14px; height: 14px;
        }
        .ct-consent-text {
          font-size: 11.5px; color: var(--gray); line-height: 1.7;
        }
        .ct-consent-link { color: var(--blue); text-decoration: none; font-weight: 600; }
        .ct-consent-link:hover { text-decoration: underline; }

        .ct-submit-btn {
          width: 100%; padding: 14px;
          background: var(--orange); color: #fff; border: none;
          border-radius: 8px; cursor: pointer;
          font-family: 'Sora', sans-serif; font-size: 13px; font-weight: 700;
          letter-spacing: 0.05em;
          box-shadow: 0 4px 18px rgba(249,115,22,0.28);
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .ct-submit-btn:hover:not(:disabled) {
          background: var(--orange-light);
          transform: translateY(-1px);
          box-shadow: 0 6px 24px rgba(249,115,22,0.36);
        }
        .ct-submit-loading {
          background: #ccc !important; cursor: not-allowed !important;
          box-shadow: none !important; transform: none !important;
        }

        @media (max-width: 640px) {
          .ct-form-grid { grid-template-columns: 1fr; }
        }

        /* ══ CONTACT ITEMS ══ */
        .ct-items { display: flex; flex-direction: column; gap: 12px; margin-bottom: 36px; }
        .ct-item {
          border: 1.5px solid var(--gray-light); border-radius: var(--radius);
          padding: 22px 24px;
          display: flex; align-items: flex-start; gap: 16px;
          background: #fff; transition: all 0.25s; position: relative; overflow: hidden;
        }
        .ct-item::before {
          content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
          background: var(--blue); transform: scaleY(0); transform-origin: bottom;
          transition: transform 0.3s;
        }
        .ct-item:hover { border-color: var(--blue); box-shadow: 0 4px 20px rgba(26,86,219,0.10); }
        .ct-item:hover::before { transform: scaleY(1); }
        .ct-item-icon {
          width: 40px; height: 40px; border-radius: 8px;
          background: var(--blue-light); display: flex; align-items: center;
          justify-content: center; font-size: 18px; flex-shrink: 0;
        }
        .ct-item-label {
          font-size: 10px; font-weight: 700; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--gray); margin-bottom: 4px;
        }
        .ct-item-value {
          font-family: 'Sora', sans-serif;
          font-size: 14px; font-weight: 700; color: var(--text); margin-bottom: 3px;
        }
        .ct-item-sub { font-size: 12px; color: var(--gray); line-height: 1.5; margin-bottom: 8px; }
        .ct-item-cta {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 11px; font-weight: 700; letter-spacing: 0.06em;
          text-transform: uppercase; color: var(--blue); text-decoration: none;
          transition: gap 0.2s;
        }
        .ct-item-cta:hover { gap: 8px; }

        /* ══ HOURS ══ */
        .ct-hours {
          display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 36px;
        }
        .ct-hour-card {
          border: 1.5px solid var(--gray-light); border-radius: var(--radius);
          padding: 20px 22px; background: var(--off);
          transition: border-color 0.2s;
        }
        .ct-hour-card:hover { border-color: var(--blue); }
        .ct-hour-day {
          font-size: 10px; font-weight: 700; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--orange); margin-bottom: 6px;
        }
        .ct-hour-time {
          font-family: 'Sora', sans-serif; font-size: 14px; font-weight: 700; color: var(--text);
        }

        /* ══ SERVICES TAGS ══ */
        .ct-tags { display: flex; gap: 8px; flex-wrap: wrap; }
        .ct-tag {
          font-size: 11px; font-weight: 600; letter-spacing: 0.06em;
          padding: 7px 14px; border-radius: 100px;
          border: 1.5px solid var(--gray-light); color: var(--text2);
          background: #fff; transition: all 0.2s; cursor: default;
        }
        .ct-tag:hover { border-color: var(--blue); color: var(--blue); background: var(--blue-light); }

        /* ══ ADDRESS CARD ══ */
        .ct-addr-card {
          border: 1.5px solid var(--gray-light); border-radius: var(--radius);
          padding: 28px 28px; margin-bottom: 28px; background: var(--off);
          transition: all 0.25s; position: relative; overflow: hidden;
        }
        .ct-addr-card::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, var(--blue), var(--orange));
          border-radius: 0 0 var(--radius) var(--radius);
          transform: scaleX(0); transform-origin: left; transition: transform 0.4s;
        }
        .ct-addr-card:hover { border-color: var(--blue); box-shadow: 0 6px 24px rgba(26,86,219,0.10); }
        .ct-addr-card:hover::after { transform: scaleX(1); }
        .ct-addr-eyebrow {
          display: flex; align-items: center; gap: 6px;
          font-size: 10px; font-weight: 700; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--blue); margin-bottom: 12px;
        }
        .ct-addr-eyebrow svg { width: 13px; height: 13px; flex-shrink: 0; }
        .ct-addr-name {
          font-family: 'Sora', sans-serif;
          font-size: 18px; font-weight: 800; color: var(--text); margin-bottom: 6px;
        }
        .ct-addr-bar {
          width: 36px; height: 3px;
          background: linear-gradient(90deg, var(--blue), var(--orange));
          border-radius: 2px; margin-bottom: 16px;
        }
        .ct-addr-lines { font-size: 13.5px; color: var(--text2); line-height: 1.9; }
        .ct-dir-btn {
          display: inline-flex; align-items: center; gap: 6px; margin-top: 18px;
          font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
          background: var(--blue); color: #fff; border: none;
          padding: 10px 20px; border-radius: 7px; cursor: pointer;
          text-decoration: none; transition: background 0.2s, transform 0.2s;
        }
        .ct-dir-btn:hover { background: var(--blue-dark); transform: translateY(-1px); }

        /* ══ MAP ══ */
        .ct-map-wrap {
          border: 1.5px solid var(--gray-light); border-radius: var(--radius);
          overflow: hidden; position: relative;
        }
        .ct-map-badge {
          position: absolute; top: 12px; left: 12px; z-index: 2;
          font-size: 9px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
          background: var(--blue-deep); color: #fff;
          padding: 5px 12px; border-radius: 5px;
        }
        .ct-map-wrap iframe {
          width: 100%; height: 280px; border: none; display: block;
        }

        /* ══ BOTTOM CTA STRIP ══ */
        .ct-cta {
          background: var(--blue-deep); padding: 64px 80px;
          text-align: center; position: relative; overflow: hidden;
        }
        .ct-cta-circle {
          position: absolute; bottom: -150px; left: 50%; transform: translateX(-50%);
          width: 600px; height: 300px; border-radius: 50%;
          background: rgba(249,115,22,0.07); pointer-events: none;
        }
        .ct-cta-pill {
          display: inline-flex; align-items: center; gap: 8px; justify-content: center;
          background: rgba(255,255,255,0.10); color: rgba(255,255,255,0.85);
          font-size: 11px; font-weight: 700; letter-spacing: 0.14em;
          text-transform: uppercase; padding: 6px 16px; border-radius: 100px;
          margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.12);
        }
        .ct-cta-h2 {
          font-family: 'Sora', sans-serif;
          font-size: clamp(24px, 3.5vw, 40px);
          font-weight: 800; color: #fff; margin: 0 0 12px; line-height: 1.1;
          position: relative; z-index: 1;
        }
        .ct-cta-h2 span { color: var(--orange); }
        .ct-cta-sub {
          font-size: 14px; color: rgba(255,255,255,0.50); margin: 0 0 32px;
          max-width: 460px; margin-left: auto; margin-right: auto;
          line-height: 1.7; position: relative; z-index: 1;
        }
        .ct-cta-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; position: relative; z-index: 1; }
        .ct-btn-primary {
          font-family: 'Sora', sans-serif; font-size: 12px; font-weight: 700;
          letter-spacing: 0.07em; text-transform: uppercase;
          background: var(--orange); color: #fff; border: none;
          padding: 14px 32px; border-radius: 8px; cursor: pointer;
          transition: all 0.2s; text-decoration: none; display: inline-block;
          box-shadow: 0 4px 20px rgba(249,115,22,0.35);
        }
        .ct-btn-primary:hover { background: var(--orange-light); transform: translateY(-2px); }
        .ct-btn-outline {
          font-family: 'Sora', sans-serif; font-size: 12px; font-weight: 700;
          letter-spacing: 0.07em; text-transform: uppercase;
          background: transparent; color: #fff;
          border: 1.5px solid rgba(255,255,255,0.3); padding: 13px 28px;
          border-radius: 8px; cursor: pointer; transition: all 0.2s;
          text-decoration: none; display: inline-block;
        }
        .ct-btn-outline:hover { border-color: var(--orange); color: var(--orange); }

        /* ══ RESPONSIVE ══ */
        @media (max-width: 1024px) {
          .ct-hero { padding: 64px 48px 60px; }
          .ct-main { padding: 64px 48px; gap: 40px; }
          .ct-cta { padding: 56px 48px; }
        }
        @media (max-width: 768px) {
          .ct-hero { padding: 48px 24px 44px; }
          .ct-main { padding: 48px 24px; grid-template-columns: 1fr; gap: 32px; }
          .ct-cta { padding: 48px 24px; }
          .ct-hours { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="ct">

        {/* ══ HERO BANNER ══ */}
        <section className="ct-hero">
          <div className="ct-hero-bg-pattern" />
          <div className="ct-hero-circle-1" />
          <div className="ct-hero-circle-2" />
          <Reveal>
            <div className="ct-pill"><div className="ct-pill-dot" /> Reach Out</div>
            <h1 className="ct-hero-h1">
              We're Here to<br /><span>Help You Succeed</span>
            </h1>
            <p className="ct-hero-sub">
              Whether it's choosing the right college, cracking counseling rounds, or planning your academic future — our team is one call away.
            </p>
            <div className="ct-hero-divider" />
          </Reveal>
        </section>

        {/* ══ MAIN CONTENT ══ */}
        <div className="ct-main">

          {/* LEFT — Booking Form + Contact Details + Hours + Tags */}
          <div>
            {/* ── INLINE BOOKING FORM (new) ── */}
            <InlineBookingForm />

            <Reveal>
              <div className="ct-section-label">
                Contact Details <div className="ct-section-line" />
              </div>
              <div className="ct-items">
                {contactItems.map((item, i) => (
                  <div key={i} className="ct-item">
                    <div className="ct-item-icon">{item.icon}</div>
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
            </Reveal>

            <Reveal delay={80}>
              <div className="ct-section-label">
                Office Hours <div className="ct-section-line" />
              </div>
              <div className="ct-hours">
                {hours.map((h, i) => (
                  <div key={i} className="ct-hour-card">
                    <div className="ct-hour-day">{h.day}</div>
                    <div className="ct-hour-time">{h.time}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="ct-section-label">
                Our Services <div className="ct-section-line" />
              </div>
              <div className="ct-tags">
                {services.map((s, i) => (
                  <span key={i} className="ct-tag">{s}</span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* RIGHT — Address + Map */}
          <div>
            <Reveal delay={60}>
              <div className="ct-section-label">
                Our Office <div className="ct-section-line" />
              </div>
              <div className="ct-addr-card">
                <div className="ct-addr-eyebrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  Hyderabad, Telangana
                </div>
                <div className="ct-addr-name">Maharsh Edutech Private Limited</div>
                <div className="ct-addr-bar" />
                <div className="ct-addr-lines">
                  Flat No. 201, Plot No. 34 East<br />
                  Srinivasa Colony, Sanjeev Reddy Nagar<br />
                  Hyderabad – 500038<br />
                  Telangana, India
                </div>
                <a
                  href="https://maps.google.com/?q=Srinivasa+Colony+Sanjeev+Reddy+Nagar+Hyderabad+500038"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ct-dir-btn"
                >
                  Get Directions →
                </a>
              </div>
            </Reveal>

            <Reveal delay={140}>
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
            </Reveal>
          </div>

        </div>

        {/* ══ BOTTOM CTA ══ */}
        <section className="ct-cta">
          <div className="ct-cta-circle" />
          <Reveal>
            <div className="ct-cta-pill"><div className="ct-pill-dot" /> Book a Session</div>
            <h2 className="ct-cta-h2">
              Ready to Secure Your<br /><span>Dream College Seat?</span>
            </h2>
            <p className="ct-cta-sub">
              Book a free counseling session. We'll analyse your rank, shortlist the best colleges, and guide you through every round.
            </p>
            <div className="ct-cta-btns">
              <a href="tel:+919566228499" className="ct-btn-primary">Call Us Now</a>
              <a href="https://wa.me/919566228499" target="_blank" rel="noopener noreferrer" className="ct-btn-outline">WhatsApp Us</a>
            </div>
          </Reveal>
        </section>

      </div>
    </>
  );
}