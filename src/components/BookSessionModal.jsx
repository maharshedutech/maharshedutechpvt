// src/components/BookSessionModal.jsx
import React, { useState } from "react";

export default function BookSessionModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    location: "",
    course: "",
    consent: false,
  });

  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

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
        onClose();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to submit. Please try again.");
    }

    setLoading(false);
  };

  // ── Input restriction handlers ──────────────────────────────────────────────

  // Name: allow only letters and spaces
  const handleNameChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    setFormData({ ...formData, name: value });
  };

  // Mobile: allow only digits, max 10
  const handleMobileChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "").slice(0, 10);
    setFormData({ ...formData, mobile: value });
  };

  // Keydown guard for name field — block non-letter / non-space keys early
  const handleNameKeyDown = (e) => {
    const allowedKeys = [
      "Backspace", "Delete", "ArrowLeft", "ArrowRight",
      "ArrowUp", "ArrowDown", "Tab", "Home", "End",
    ];
    if (allowedKeys.includes(e.key)) return;
    if (!/^[a-zA-Z\s]$/.test(e.key)) e.preventDefault();
  };

  // Keydown guard for mobile field — block non-digit keys early
  const handleMobileKeyDown = (e) => {
    const allowedKeys = [
      "Backspace", "Delete", "ArrowLeft", "ArrowRight",
      "ArrowUp", "ArrowDown", "Tab", "Home", "End",
    ];
    if (allowedKeys.includes(e.key)) return;
    if (!/^[0-9]$/.test(e.key)) e.preventDefault();
  };

  // ── Paste guards ────────────────────────────────────────────────────────────

  const handleNamePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/[^a-zA-Z\s]/g, "");
    setFormData({ ...formData, name: formData.name + pasted });
  };

  const handleMobilePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/[^0-9]/g, "").slice(0, 10);
    setFormData({ ...formData, mobile: pasted });
  };

  // ───────────────────────────────────────────────────────────────────────────

  const inputStyle = {
    width: "100%",
    padding: "10px 12px",
    marginBottom: "12px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "14px",
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "inherit",
    color: "#333",
  };

  const labelStyle = {
    display: "block",
    fontSize: "12px",
    fontWeight: "600",
    color: "#444",
    marginBottom: "4px",
  };

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

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.75)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "16px",
          width: "100%",
          maxWidth: "500px",
          padding: "28px 30px 24px",
          position: "relative",
          /* No overflowY / maxHeight — form fits without scroll */
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "14px",
            right: "16px",
            background: "none",
            border: "none",
            fontSize: "20px",
            cursor: "pointer",
            color: "#888",
            lineHeight: 1,
          }}
        >
          ✕
        </button>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "18px" }}>
          <h2
            style={{
              fontSize: "22px",
              fontWeight: "800",
              color: "#1a56db",
              marginBottom: "4px",
            }}
          >
            Book Free Counseling Session
          </h2>
          <p style={{ fontSize: "13px", color: "#888" }}>
            Fill in your details and we'll get back to you shortly.
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          {/* Name */}
          <label style={labelStyle}>
            Full Name <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Rahul Sharma"
            required
            value={formData.name}
            onChange={handleNameChange}
            onKeyDown={handleNameKeyDown}
            onPaste={handleNamePaste}
            inputMode="text"
            style={inputStyle}
          />

          {/* Mobile */}
          <label style={labelStyle}>
            Mobile Number <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="tel"
            placeholder="10-digit mobile number"
            required
            pattern="[0-9]{10}"
            maxLength={10}
            value={formData.mobile}
            onChange={handleMobileChange}
            onKeyDown={handleMobileKeyDown}
            onPaste={handleMobilePaste}
            inputMode="numeric"
            style={inputStyle}
          />

          {/* Location */}
          <label style={labelStyle}>
            Location <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Hyderabad, Telangana"
            required
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            style={inputStyle}
          />

          {/* Interested Course */}
          <label style={labelStyle}>
            Interested Course <span style={{ color: "red" }}>*</span>
          </label>
          <select
            required
            value={formData.course}
            onChange={(e) => setFormData({ ...formData, course: e.target.value })}
            style={{
              ...inputStyle,
              background: "#fff",
              cursor: "pointer",
              appearance: "auto",
            }}
          >
            <option value="">-- Select a Course --</option>
            {courses.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          {/* Consent */}
          <label
            style={{
              display: "flex",
              gap: "10px",
              fontSize: "11px",
              lineHeight: "17px",
              marginBottom: "16px",
              alignItems: "flex-start",
              cursor: "pointer",
            }}
          >
            <input
              type="checkbox"
              checked={formData.consent}
              onChange={(e) =>
                setFormData({ ...formData, consent: e.target.checked })
              }
              style={{ marginTop: "2px", flexShrink: 0, accentColor: "#1a56db" }}
            />
            <span style={{ color: "#666" }}>
              By submitting, I consent to receive promotional communications from
              Maharsh Edutech Private Limited via RCS, SMS, Voice, WhatsApp, and
              Email. I also agree to the{" "}
              <a href="/terms" target="_blank" style={{ color: "#1a56db" }}>
                Terms &amp; Conditions
              </a>{" "}
              and{" "}
              <a href="/privacy" target="_blank" style={{ color: "#1a56db" }}>
                Privacy Policy
              </a>
              .
            </span>
          </label>

          {/* Buttons */}
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              type="submit"
              disabled={loading}
              style={{
                flex: 1,
                background: loading ? "#ccc" : "#f97316",
                color: "#fff",
                border: "none",
                padding: "13px",
                borderRadius: "8px",
                cursor: loading ? "not-allowed" : "pointer",
                fontWeight: "700",
                fontSize: "14px",
                letterSpacing: "0.03em",
                fontFamily: "inherit",
                transition: "background 0.2s",
              }}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>

            <button
              type="button"
              onClick={onClose}
              style={{
                flex: 1,
                background: "#f0f0f0",
                color: "#333",
                border: "none",
                padding: "13px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "14px",
                fontFamily: "inherit",
              }}
            >
              Cancel
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}