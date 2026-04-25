// src/components/Footer.jsx
import React from "react";

const FooterLinks = [
  { label: "Services", href: "/services" },
  { label: "Counseling", href: "/counseling" },
  { label: "Admissions", href: "/admissions" },
  { label: "Loan Assistance", href: "/loans" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const SocialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/917337267648",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@400;500;600&display=swap');

        .ft {
          font-family: 'DM Sans', sans-serif;
          background: #080808;
          border-top: 1px solid rgba(201,168,76,0.18);
          color: rgba(255,255,255,0.88);
          line-height: 1;
        }
        .ft * { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── Top strip ── */
        .ft-top {
          display: flex; align-items: center; justify-content: space-between;
          padding: 28px 64px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          gap: 24px; flex-wrap: wrap;
        }

        /* Wordmark */
        .ft-wordmark {
          display: flex; align-items: center; gap: 11px; text-decoration: none;
        }
        .ft-logo-gem {
          width: 28px; height: 28px;
          border: 1px solid rgba(201,168,76,0.45);
          border-radius: 5px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .ft-logo-gem svg { width: 15px; height: 15px; }
        .ft-wordmark-text {
          font-family: 'Playfair Display', serif;
          font-size: 15px; font-weight: 700; letter-spacing: 0.01em;
          color: rgba(255,255,255,0.85);
        }
        .ft-wordmark-text span { color: #C9A84C; font-style: italic; }

        /* Nav links */
        .ft-nav {
          display: flex; align-items: center; flex-wrap: wrap;
        }
        .ft-nav a {
          font-size: 10.5px; font-weight: 500; letter-spacing: 0.1em;
          text-transform: uppercase; color: rgba(255,255,255,0.35);
          text-decoration: none; padding: 5px 14px;
          border-right: 1px solid rgba(255,255,255,0.07);
          transition: color 0.2s; white-space: nowrap;
        }
        .ft-nav a:first-child { padding-left: 0; }
        .ft-nav a:last-child { border-right: none; }
        .ft-nav a:hover { color: #C9A84C; }

        /* Socials */
        .ft-socials { display: flex; align-items: center; gap: 7px; }
        .ft-social {
          width: 30px; height: 30px; border-radius: 6px;
          border: 1px solid rgba(201,168,76,0.14);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.32); text-decoration: none;
          transition: color 0.2s, border-color 0.2s, background 0.2s;
        }
        .ft-social svg { width: 12px; height: 12px; }
        .ft-social:hover {
          color: #C9A84C;
          border-color: rgba(201,168,76,0.4);
          background: rgba(201,168,76,0.07);
        }

        /* ── Address strip ── */
        .ft-address-strip {
          display: flex; align-items: center; justify-content: center;
          padding: 18px 64px;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          gap: 6px; flex-wrap: wrap;
        }
        .ft-address-icon {
          width: 14px; height: 14px; flex-shrink: 0;
          color: #C9A84C; margin-right: 6px;
        }
        .ft-address-icon svg { width: 14px; height: 14px; }
        .ft-address-text {
          font-size: 11px; font-weight: 500;
          color: rgba(255,255,255,0.55);
          letter-spacing: 0.04em; line-height: 1.6;
          text-align: center;
        }
        .ft-address-text strong {
          color: rgba(255,255,255,0.82);
          font-weight: 600;
          letter-spacing: 0.05em;
        }
        .ft-address-sep {
          color: rgba(201,168,76,0.35);
          font-size: 11px; margin: 0 5px;
          user-select: none;
        }

        /* ── Bottom bar ── */
        .ft-bottom {
          display: flex; align-items: center; justify-content: space-between;
          padding: 15px 64px; gap: 16px; flex-wrap: wrap;
        }
        .ft-copy {
          font-size: 10.5px; color: rgba(255,255,255,0.2);
          letter-spacing: 0.04em; line-height: 1.6;
        }
        .ft-copy strong { color: rgba(255,255,255,0.35); font-weight: 600; }
        .ft-tagline {
          font-size: 10px; color: rgba(201,168,76,0.4);
          letter-spacing: 0.14em; text-transform: uppercase;
          font-style: italic; font-family: 'Playfair Display', serif;
        }
        .ft-contact-pill {
          display: flex; align-items: center; gap: 8px;
          border: 1px solid rgba(201,168,76,0.15); border-radius: 20px;
          padding: 6px 14px 6px 10px; text-decoration: none;
          transition: border-color 0.2s;
        }
        .ft-contact-pill:hover { border-color: rgba(201,168,76,0.4); }
        .ft-contact-pill-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #C9A84C; flex-shrink: 0;
          animation: ft-pulse 2.2s ease-in-out infinite;
        }
        @keyframes ft-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.45; transform: scale(0.75); }
        }
        .ft-contact-pill-text {
          font-size: 10.5px; font-weight: 600; letter-spacing: 0.07em;
          color: rgba(255,255,255,0.42);
        }

        @media (max-width: 900px) {
          .ft-top, .ft-bottom, .ft-address-strip { padding-left: 32px; padding-right: 32px; }
          .ft-nav { display: none; }
        }
        @media (max-width: 560px) {
          .ft-top, .ft-bottom, .ft-address-strip { padding-left: 24px; padding-right: 24px; }
          .ft-bottom { flex-direction: column; align-items: flex-start; gap: 10px; }
          .ft-tagline { display: none; }
          .ft-address-sep { display: none; }
          .ft-address-text { text-align: left; }
        }
      `}</style>

      <footer className="ft">

        {/* ── Top: logo · nav · socials ── */}
        <div className="ft-top">
          <a href="/" className="ft-wordmark">
            <div className="ft-logo-gem">
              <svg viewBox="0 0 16 16" fill="none">
                <polygon points="8,1 15,5 15,11 8,15 1,11 1,5"
                  stroke="#C9A84C" strokeWidth="1"
                  fill="rgba(201,168,76,0.08)"/>
                <polygon points="8,4 12,6.5 12,9.5 8,12 4,9.5 4,6.5"
                  fill="#C9A84C" opacity="0.35"/>
              </svg>
            </div>
            <span className="ft-wordmark-text">
              Maharsh <span>Edutech</span>
            </span>
          </a>

          <nav className="ft-nav">
            {FooterLinks.map(l => (
              <a key={l.label} href={l.href}>{l.label}</a>
            ))}
          </nav>

          <div className="ft-socials">
            {SocialLinks.map(s => (
              <a key={s.label} href={s.href} className="ft-social"
                aria-label={s.label} target="_blank" rel="noopener noreferrer">
                <s.icon />
              </a>
            ))}
          </div>
        </div>

        {/* ── Address strip ── */}
        <div className="ft-address-strip">
          <span className="ft-address-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
              <circle cx="12" cy="9" r="2.5"/>
            </svg>
          </span>
          <span className="ft-address-text">
            <strong>Maharsh Edutech Pvt. Ltd.</strong>
          </span>
          <span className="ft-address-sep">·</span>
          <span className="ft-address-text">Flat No. 201, Plot No. 34 East</span>
          <span className="ft-address-sep">·</span>
          <span className="ft-address-text">Srinivasa Colony, Sanjeev Reddy Nagar</span>
          <span className="ft-address-sep">·</span>
          <span className="ft-address-text"><strong>Hyderabad – 500038</strong>, Telangana</span>
          <span className="ft-address-sep">·</span>
          <span className="ft-address-text">
            <strong>Mob:</strong> +91 73372 67648
          </span>
        </div>

        {/* ── Bottom: copyright · tagline · phone pill ── */}
        <div className="ft-bottom">
          <p className="ft-copy">
            © 2026 <strong>Maharsh Edutech Pvt. Ltd.</strong>
            &nbsp;·&nbsp;Hyderabad, Telangana&nbsp;·&nbsp;All rights reserved
          </p>
          
          <a href="tel:+917337267648" className="ft-contact-pill">
            <span className="ft-contact-pill-dot" />
            <span className="ft-contact-pill-text">+91 73372 67648</span>
          </a>
        </div>

      </footer>
    </>
  );
}