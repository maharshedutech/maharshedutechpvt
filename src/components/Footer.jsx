// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  const WA_NUMBER = "917337267648";

  const links = [
    { label: "Home", href: "/" },
    { label: "Engineering", href: "/about" },
    { label: "MBBS", href: "/services" },
    { label: "Study Abroad", href: "/study-abroad" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Space+Grotesk:wght@400;500;600&display=swap');

        .mftr * { box-sizing: border-box; }
        .mftr {
          font-family: 'Space Grotesk', sans-serif;
          background: #0d2d6e;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .mftr-inner {
          padding: 56px 80px 48px;
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 56px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        /* LEFT */
        .mftr-left { display: flex; flex-direction: column; gap: 28px; }

        .mftr-brand {
          font-family: 'Sora', sans-serif;
          font-size: 20px; font-weight: 800; color: #fff;
          text-decoration: none; display: inline-block;
        }
        .mftr-brand span { color: #fb923c; }

        .mftr-desc {
          font-size: 13px; color: rgba(255,255,255,0.50);
          line-height: 1.75; max-width: 300px;
        }

        .mftr-nav { display: flex; flex-direction: column; gap: 0; }
        .mftr-nav a {
          font-size: 13px; color: rgba(255,255,255,0.50);
          text-decoration: none; transition: color 0.2s;
          display: flex; align-items: center; gap: 7px; padding: 4px 0;
        }
        .mftr-nav a::before {
          content: ''; width: 4px; height: 4px; border-radius: 50%;
          background: rgba(249,115,22,0.4); flex-shrink: 0; transition: background 0.2s;
        }
        .mftr-nav a:hover { color: #fff; }
        .mftr-nav a:hover::before { background: #f97316; }

        .mftr-contacts { display: flex; flex-direction: column; gap: 8px; }
        .mftr-contact-row {
          display: flex; align-items: center; gap: 10px;
          font-size: 13px; color: rgba(255,255,255,0.55);
          text-decoration: none; transition: color 0.2s;
        }
        .mftr-contact-row:hover { color: #fff; }
        .mftr-contact-row svg { width: 15px; height: 15px; flex-shrink: 0; }

        /* RIGHT — Map */
        .mftr-right { display: flex; flex-direction: column; gap: 14px; }

        .mftr-map-label {
          font-size: 10px; font-weight: 700; letter-spacing: 0.16em;
          text-transform: uppercase; color: #f97316;
          display: flex; align-items: center; gap: 8px;
        }
        .mftr-map-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #f97316;
          animation: blink 1.4s infinite;
        }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.25} }

        .mftr-map-wrap {
          border-radius: 10px; overflow: hidden;
          border: 1.5px solid rgba(255,255,255,0.10);
        }
        .mftr-map-wrap iframe {
          width: 100%; height: 260px; border: none; display: block;
        }

        .mftr-addr {
          font-size: 12px; color: rgba(255,255,255,0.35);
          line-height: 1.7;
        }

        /* BOTTOM BAR */
        .mftr-bar {
          padding: 20px 80px;
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 10px;
        }
        .mftr-copy {
          font-size: 12px; color: rgba(255,255,255,0.28);
        }
        .mftr-copy span { color: rgba(255,255,255,0.45); font-weight: 600; }
        .mftr-bar-links { display: flex; gap: 18px; }
        .mftr-bar-links a {
          font-size: 11.5px; color: rgba(255,255,255,0.28);
          text-decoration: none; transition: color 0.2s;
        }
        .mftr-bar-links a:hover { color: rgba(255,255,255,0.6); }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .mftr-inner { grid-template-columns: 1fr; padding: 48px 40px 40px; gap: 40px; }
          .mftr-bar { padding: 18px 40px; }
        }
        @media (max-width: 560px) {
          .mftr-inner { padding: 40px 24px 36px; }
          .mftr-bar { padding: 16px 24px; flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <footer className="mftr">
        <div className="mftr-inner">

          {/* LEFT */}
          <div className="mftr-left">
            <a href="/" className="mftr-brand">Maharsh <span>Edutech</span></a>

            <p className="mftr-desc">
              AP & TS's trusted education counseling firm. 12+ years. 5,000+ students placed. Zero commission conflicts.
            </p>

            <nav className="mftr-nav">
              {links.map(l => (
                <a key={l.label} href={l.href}>{l.label}</a>
              ))}
            </nav>

            <div className="mftr-contacts">
              <a href="tel:+917337267648" className="mftr-contact-row">
                <svg viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                +91 73372 67648
              </a>
              <a href="mailto:maharshedutech@gmail.com" className="mftr-contact-row">
                <svg viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                info@maharshedutech.com
              </a>
              <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer" className="mftr-contact-row">
                <svg viewBox="0 0 24 24" fill="#25d366" style={{width:'15px',height:'15px',flexShrink:0}}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.529 5.845L.057 23.5l5.797-1.519A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.795 9.795 0 01-5.031-1.384l-.361-.214-3.44.902.918-3.352-.235-.375A9.795 9.795 0 012.182 12c0-5.42 4.398-9.818 9.818-9.818S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT — Map */}
          <div className="mftr-right">
            <div className="mftr-map-label">
              <span className="mftr-map-dot" /> Hyderabad Office
            </div>
            <div className="mftr-map-wrap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.097953766952!2d78.446258!3d17.4387716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9188cae40c23%3A0xd9deb2da72fb57c1!2sMaharsh%20Edutech%20Pvt%20Ltd%20Career%20Guidance%20%7C%20B.Tech%2C%20MBA%2C%20MBBS%26%20Aboard%20Colleges%20Best%20Career%20Guidance!5e1!3m2!1sen!2sin!4v1778148919095!5m2!1sen!2sin"
                title="Maharsh Edutech Location"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mftr-addr">
              Flat No. 201, Plot No. 34 East, Srinivasa Colony,<br />
              Sanjeev Reddy Nagar, Hyderabad – 500038, Telangana
            </div>
          </div>

        </div>

        <div className="mftr-bar">
          <div className="mftr-copy">
            © {new Date().getFullYear()} <span>Maharsh Edutech Pvt Ltd</span>. All rights reserved.
          </div>
          <div className="mftr-bar-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </footer>
    </>
  );
}