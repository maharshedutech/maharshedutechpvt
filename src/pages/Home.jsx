// src/pages/Home.jsx
import Hero from "../components/Hero";
import React, { useEffect, useRef, useState } from "react";

/* ─── Intersection Observer hook ─── */
function useReveal(threshold = 0.1) {
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

function RevealSection({ children, className = "", style = {}, delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(48px)",
      transition: `opacity 0.85s cubic-bezier(.22,1,.36,1) ${delay}ms, transform 0.85s cubic-bezier(.22,1,.36,1) ${delay}ms`,
      ...style,
    }}>{children}</div>
  );
}

/* ─── SVG Icons ─── */
const Icons = {
  CompassRose: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/>
    </svg>
  ),
  ScrollDoc: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <polyline points="10 9 9 9 8 9"/>
    </svg>
  ),
  GlobePin: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  CreditCard: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
      <line x1="1" y1="10" x2="23" y2="10"/>
    </svg>
  ),
  Check: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  Star: () => (
    <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
  ),
  Quote: () => (
    <svg viewBox="0 0 40 30" fill="currentColor">
      <path d="M0 30V18C0 7.6 5.6 1.6 16.8 0l2.4 4C13.2 5.2 10 8.8 10 14v1.5H18V30H0zm22 0V18C22 7.6 27.6 1.6 38.8 0l2.4 4c-6 1.2-9.2 4.8-9.2 10V15.5H40V30H22z"/>
    </svg>
  ),
  Phone: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  Mail: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
  MapPin: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  ArrowRight: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
};

/* ─── Telangana & Andhra Pradesh Top Colleges ─── */
const regionalColleges = [
  { name: "JNTU Hyderabad", short: "JNTU", state: "TS", image: "/images/colleges/jntu.png" },
  { name: "Osmania University", short: "OU", state: "TS", image: "/images/colleges/osmania.png" },
  { name: "University of Hyderabad", short: "UoH", state: "TS", image: "/images/colleges/uoh.png" },
  { name: "BITS Pilani Hyderabad", short: "BITS", state: "TS", image: "/images/colleges/bits-hyd.png" },
  { name: "IIIT Hyderabad", short: "IIITH", state: "TS", image: "/images/colleges/iiit-hyd.png" },
  { name: "SR Engineering", short: "SREC", state: "TS", image: "/images/colleges/srec.png" },
  { name: "VNR Vignana Jyothi", short: "VNRVJIET", state: "TS", image: "/images/colleges/vnr.png" },
  { name: "Mahindra University", short: "MU", state: "TS", image: "/images/colleges/mahindra.png" },
  { name: "Andhra University", short: "AU", state: "AP", image: "/images/colleges/au.png" },
  { name: "JNTU Kakinada", short: "JNTUK", state: "AP", image: "/images/colleges/jntuk.png" },
  { name: "SRM AP", short: "SRMAP", state: "AP", image: "/images/colleges/srmap.png" },
  { name: "VIT AP", short: "VITAP", state: "AP", image: "/images/colleges/vitap.png" },
  { name: "Amrita Amaravati", short: "Amrita", state: "AP", image: "/images/colleges/amrita.png" },
  { name: "RGUKT Basar", short: "RGUKT", state: "TS", image: "/images/colleges/rgukt.png" },
  { name: "Vignan University", short: "VU", state: "AP", image: "/images/colleges/vignan.png" },
  { name: "KL University", short: "KLU", state: "AP", image: "/images/colleges/klu.png" },
];

const nationalColleges = [
  { name: "IIT Bombay", short: "IITB", color: "#003366" },
  { name: "IIT Delhi", short: "IITD", color: "#1a1a6e" },
  { name: "IIT Madras", short: "IITM", color: "#7b1513" },
  { name: "AIIMS Delhi", short: "AIIMS", color: "#8b0000" },
  { name: "IIM Ahmedabad", short: "IIMA", color: "#003d1f" },
  { name: "NIT Warangal", short: "NITW", color: "#003366" },
  { name: "BITS Pilani", short: "BITS", color: "#b71c1c" },
  { name: "Manipal", short: "MU", color: "#2c5f2e" },
  { name: "Ashoka Univ.", short: "AU", color: "#4a0072" },
  { name: "VIT Vellore", short: "VIT", color: "#c9a227" },
];

/* ─── What We Do Services ─── */
const services = [
  {
    icon: "CompassRose",
    num: "01",
    title: "Career Counseling & Guidance",
    subtitle: "Discover Your True Direction",
    desc: "Your career is not a guess — it is a discovery. Our certified counselors invest deeply in understanding your psychometric profile, academic trajectory, and long-term aspirations before making a single recommendation. Through structured one-on-one sessions, industry analysis, and scientifically validated assessment tools, we build a career roadmap that is precise, personal, and grounded in real-world employment data. We do not recycle templates. Every roadmap is built from scratch, for you.",
    detail: "Many students approach us carrying the weight of family expectations, peer comparisons, and social pressure — all pointing in different directions. Our process begins by removing that noise. We work with students from Class 10 onwards, helping them understand not just what they are good at today, but what they are built for in the long run. Our psychometric assessments evaluate aptitude, emotional intelligence, learning style, risk orientation, and career values. The output is a written, detailed report that becomes the foundation of every decision made thereafter.",
    points: [
      "In-depth psychometric and aptitude assessment",
      "One-on-one 90-minute deep-dive sessions",
      "Written career report with 3 pathway projections",
      "Industry salary benchmarks and growth trajectory data",
      "Post-session follow-up and revision support",
      "Available in Telugu, Tamil, Hindi, Malayalam, Kannada",
    ],
  },
  {
    icon: "ScrollDoc",
    num: "02",
    title: "Application Support",
    subtitle: "Every Document, Perfected",
    desc: "A great application is a form of storytelling — it shows the institution exactly who you are, why you belong there, and what you will contribute. Our application support team includes former admissions committee members, seasoned SOP writers, and documentation specialists who have helped over 5,000 students craft compelling, distinctive applications across engineering, medicine, management, law, design, and international programs.",
    detail: "We cover every element of the application process: Statement of Purpose (SOP) writing through four rounds of expert review and revision, Letter of Recommendation (LOR) strategy and drafting, personal essay coaching, extracurricular positioning, resume and CV building, interview preparation with mock sessions and real-time feedback, and the organisation and submission of supporting documents for every institution in your shortlist. For international applications, we align every element with institution-specific evaluation rubrics to maximise your chance of selection.",
    points: [
      "SOP drafting with 4 rounds of expert review",
      "LOR strategy, structure, and drafting support",
      "Personal essay coaching and positioning",
      "Resume and CV crafting for student profiles",
      "Mock interviews with senior counselors",
      "Document verification and submission support",
      "University-specific application alignment",
    ],
  },
  {
    icon: "GlobePin",
    num: "03",
    title: "End-to-End Admission — India & Abroad",
    subtitle: "From Shortlist to Enrollment",
    desc: "Admission into the right institution is the culmination of years of effort — and the gateway to everything that follows. We manage the complete admission lifecycle for both domestic Indian institutions and universities across 18 countries, with specialist teams for engineering, medical, management, law, architecture, design, and liberal arts. From the first college shortlist to the final enrollment confirmation, we are accountable for every step.",
    detail: "For Indian admissions, we navigate the full complexity of JEE, NEET, CLAT, NIFT, NATA, CAT, and state-level entrance counseling processes. We have established relationships with over 250 partner institutions across India and maintain real-time access to seat availability, cutoff trends, and scholarship data. Our counseling teams are present in-person during critical rounds — JOSAA, MCC, state counseling — ensuring students and families never face a high-stakes decision without expert support. For international admissions, our specialist teams have placed students in universities across the USA, UK, Canada, Australia, Germany, Singapore, UAE, Ireland, Netherlands, and New Zealand. We coordinate every element from university shortlisting based on your academic profile and budget, to visa documentation, pre-departure orientation, and post-arrival check-ins.",
    points: [
      "250+ partner institutions across India",
      "Engineering, Medical, MBA, Law, Design, Architecture",
      "JEE, NEET, CLAT, NIFT, NATA, CAT counseling",
      "18 countries for international placements",
      "Visa documentation and embassy preparation",
      "Scholarship identification and application",
      "Pre-departure briefing and airport assistance",
      "Post-arrival check-in and community connection",
    ],
  },
  {
    icon: "CreditCard",
    num: "04",
    title: "Education Loan Assistance",
    subtitle: "Fund Your Future, Wisely",
    desc: "The financial dimension of higher education is one of the most anxiety-inducing aspects for families — and also one of the most misunderstood. Our financial counselors demystify the loan process entirely, working with 14 banking and NBFC partners to identify the most advantageous loan structures for your specific profile, institution, and repayment capacity. We do not receive commission from lenders. Our only goal is to help you secure funding on terms that serve your long-term financial health.",
    detail: "We assess your family's financial eligibility, the institution's lender relationships, collateral options, and interest rate structures across nationalized banks, private banks, and non-banking financial companies. We then build a complete funding plan — combining scholarships, merit awards, institutional fee waivers, and loan amounts — to minimise the total debt burden. Our team handles all documentation, bank liaison, and follow-up, and provides detailed EMI and repayment counseling before any loan is signed. We also advise on tax benefits available under Section 80E of the Income Tax Act.",
    points: [
      "Tie-ups with 14 nationalized and private lenders",
      "Collateral and non-collateral loan options",
      "Complete funding plan: scholarship + loan combo",
      "Full documentation and bank liaison",
      "EMI calculation and repayment strategy",
      "Section 80E tax benefit advisory",
      "Disbursement tracking and follow-up",
    ],
  },
];

/* ─── Process Steps ─── */
const processSteps = [
  {
    num: "01",
    title: "Book Your Free Discovery Session",
    desc: "Begin with a complimentary 30-minute consultation with one of our senior counselors. This is not a sales call — it is an open, honest conversation about where you are in your academic journey, what is worrying you, and what you are hoping to achieve. We listen before we advise.",
    duration: "30 minutes",
    mode: "Free",
  },
  {
    num: "02",
    title: "Psychometric & Aptitude Assessment",
    desc: "Complete our comprehensive scientifically validated assessment covering aptitude across verbal, logical, numerical, and spatial domains; personality dimensions across the Big Five framework; career values and motivational drivers; risk orientation and decision-making style; and learning modality preferences. The assessment is conducted online or in-person and takes approximately 90 minutes.",
    duration: "90 minutes",
    mode: "In-depth",
  },
  {
    num: "03",
    title: "Personalised Career & College Roadmap",
    desc: "Within 72 hours of your assessment, we deliver a detailed written roadmap — 20 to 30 pages — covering your psychometric results and interpretation, three career pathway projections with 5-year and 10-year outlooks, a prioritized shortlist of institutions matched to your profile and budget, entrance exam strategy and preparation timeline, and a financial planning overview covering fees, scholarships, and loan options.",
    duration: "72 hours delivery",
    mode: "Written Report",
  },
  {
    num: "04",
    title: "Application Building & Submission",
    desc: "Our application team takes full ownership of execution. SOP drafting and revision cycles, LOR structure and preparation, university-specific essays and supplemental materials, document authentication and organization, application portal management, and continuous communication with institutional admissions offices — all handled by our specialists while you are kept informed at every milestone.",
    duration: "4–8 weeks",
    mode: "Managed Service",
  },
  {
    num: "05",
    title: "Counseling Rounds & Enrollment",
    desc: "For Indian entrance counseling — JEE, NEET, state quota, management quota — we are present with you through every round, helping you build data-driven choice-filling strategies and react to real-time seat availability. For international admissions, we coordinate with institutions until your I-20, CAS, or offer letter is confirmed and funds are remitted. We do not consider our job done until you have your institution ID in hand.",
    duration: "Variable",
    mode: "In-person",
  },
  {
    num: "06",
    title: "Post-Enrollment Support",
    desc: "Our relationship with students continues well beyond enrollment. We provide hostel and accommodation shortlisting, peer community introductions within your institution, semester check-in calls during your first year, mentorship sessions connecting you with alumni in your field, and ongoing career guidance as you approach internship season and placements. You are never alone in the transition.",
    duration: "First year",
    mode: "Ongoing",
  },
];

/* ─── About Us ─── */
const aboutStats = [
  { num: "12+", label: "Years of Operation" },
  { num: "5,000+", label: "Students Guided" },
  { num: "250+", label: "Partner Institutions" },
  { num: "18", label: "Countries for Abroad" },
  { num: "98%", label: "Admission Success Rate" },
  { num: "14", label: "Loan Partner Banks" },
];

const whyUs = [
  {
    num: "01",
    title: "Certified Career Counselors",
    desc: "Every counselor holds recognized certifications in career guidance and educational counseling — including NCDA, GCDF, or equivalent Indian credentials — and brings a minimum of five years of hands-on admissions experience across both Indian and international institutions. We do not employ freshers with scripts. We employ practitioners who understand what they are advising.",
  },
  {
    num: "02",
    title: "Zero Commission, Zero Conflict",
    desc: "We do not receive referral fees, placement commissions, or incentive payments from any college, university, loan provider, or coaching institute. Our only source of revenue is the transparent service fee paid by the student and their family. This structural independence means our advice is aligned entirely with your interests — not ours.",
  },
  {
    num: "03",
    title: "End-to-End Accountability",
    desc: "You will never be handed off to a junior relationship manager after your initial consultation, or left to navigate a critical application deadline without support. The same senior counselor who conducts your first session owns your file from discovery through enrollment. Accountability is personal at Maharsh Edutech.",
  },
  {
    num: "04",
    title: "Data-Driven Recommendations",
    desc: "Our counselors are supported by a proprietary database of placement statistics, admission cutoff trends, salary benchmarks, and alumni outcome tracking — updated annually from institutional disclosures, LinkedIn data, and our own longitudinal student tracking. Every recommendation we make is grounded in evidence.",
  },
  {
    num: "05",
    title: "Regional Language Depth",
    desc: "Career counseling requires nuance, vulnerability, and clear thinking — none of which should be compromised by a language barrier. Our team serves students in Telugu, Tamil, Malayalam, Hindi, Kannada, and Marathi, ensuring that every student can express themselves fully and receive guidance they can genuinely internalize.",
  },
  {
    num: "06",
    title: "Transparent Outcome Tracking",
    desc: "We publish our admission outcome data annually. Across 5,000+ students counseled, 98% have secured admission into one of their top three institutional choices. We track outcomes, follow up with students after enrollment, and use longitudinal data to continuously refine our counseling methodology. We are accountable to results, not just promises.",
  },
];

/* ─── Testimonials ─── */
const testimonials = [
  {
    name: "Arjun Mehta",
    institution: "IIT Hyderabad",
    program: "B.Tech Computer Science, 2024",
    location: "Hyderabad, Telangana",
    instColor: "#1a1a6e",
    instAbbr: "IIT",
    rating: 5,
    short: "From overwhelmed to IIT Hyderabad in two months",
    text: "I had absolutely no direction after my 12th results. My parents were anxious, I was overwhelmed by the sheer number of options — JEE counseling, private colleges, management quota, everything. The noise was deafening and every well-meaning relative had a different opinion. Maharsh Edutech cut through all of that within the very first session. My counselor had the extraordinary ability to listen without judgment and then frame the situation with complete clarity. Within 45 minutes, he had already mapped three realistic paths based on my JEE rank, my interests, and my family's financial situation. There was no pressure, no sales language, no manufactured urgency. Just honest, specific, experienced advice. The team then took over my JOSAA documentation and guided me through every round of counseling in real time — they were reachable on the phone even late at night when choices had to be locked. I secured Computer Science at IIT Hyderabad. That felt genuinely impossible two months before.",
  },
  {
    name: "Priya Nair",
    institution: "University of Toronto",
    program: "MSc Data Science, 2023",
    location: "Kochi, Kerala",
    instColor: "#002145",
    instAbbr: "UoT",
    rating: 5,
    short: "University of Toronto with a partial scholarship",
    text: "Studying abroad had always been a distant dream, made more distant by how impossibly complex the process seemed — GRE scores, IELTS, SOPs, LORs, financial proofs, visa interviews, proof of funds, scholarship applications, and deadlines that overlapped in ways I could not track. I approached Maharsh Edutech six months before my target intake and the first thing they did was create a week-by-week execution calendar that made the entire process feel manageable for the first time. My Statement of Purpose went through four rounds of expert review. Each round was not just a grammar pass — they challenged my framing, pushed me to articulate my research interests more specifically, and helped me write something that genuinely sounded like me rather than a template. They identified three scholarship opportunities I had not found despite months of independent research. I was admitted to the University of Toronto with a partial scholarship. What I valued most was the calm, systematic competence of the team — I never once felt lost, even when the process got difficult.",
  },
  {
    name: "Rahul Sharma",
    institution: "AIIMS New Delhi",
    program: "MBBS, 2023",
    location: "Jaipur, Rajasthan",
    instColor: "#8b0000",
    instAbbr: "AIIMS",
    rating: 5,
    short: "AIIMS Delhi in Round 1 of NEET counseling",
    text: "NEET counseling is unlike any other process in Indian education — the stakes are enormous, the window is narrow, and the consequences of a wrong choice can cost a student an entire year. I had a competitive score but absolutely no strategic clarity about how to approach choice-filling across the all-India quota, state quota, deemed university seats, and NRI quota. The counselors at Maharsh Edutech helped me build a choice-filling strategy that was genuinely data-driven — they had historical cutoff data going back multiple years and could tell me, for each institution I was considering, not just the expected cutoff but the risk-adjusted probability of my getting a seat given my category, state domicile, and score. They understood that every choice on that list represented years of my life, not just a number in a box. They also prepared my family for the emotional volatility of watching round results — which matters more than people acknowledge. I got AIIMS Delhi in Round 1. My family and I are forever grateful.",
  },
  {
    name: "Sneha Reddy",
    institution: "Manipal University",
    program: "BDS + MBA Healthcare track, 2024",
    location: "Vijayawada, Andhra Pradesh",
    instColor: "#2c5f2e",
    instAbbr: "MU",
    rating: 5,
    short: "Clarity between dentistry and pharmacy — and the loan that made it possible",
    text: "After my 12th results, I was genuinely torn between pursuing dentistry and pharmacy. Both options had merit and both had strong advocates in my family — my father wanted pharmacy for the entrepreneurship opportunities, my mother wanted dentistry for the patient-facing career. I had no objective input from anyone who understood both fields from a professional and financial perspective. The psychometric assessment at Maharsh Edutech was genuinely eye-opening — not because it gave me a magic answer, but because it helped me see my own tendencies with extraordinary clarity. The results showed a strong orientation toward direct patient care, high conscientiousness in detailed procedural work, and moderate entrepreneurial drive. The counselors then walked me through the realistic career trajectories of both BDS and B.Pharm with actual salary data, scope of practice comparisons, further study options, and industry growth forecasts. The BDS path at Manipal with an eventual MBA in Healthcare Management was the right call. I am absolutely certain about my path now — and the education loan assistance they provided made it financially feasible for my family without unreasonable stress.",
  },
  {
    name: "Karthik Iyer",
    institution: "BITS Pilani — Goa Campus",
    program: "B.E. Electronics, 2024",
    location: "Chennai, Tamil Nadu",
    instColor: "#b71c1c",
    instAbbr: "BITS",
    rating: 5,
    short: "The right BITS campus and branch — chosen with data, not prestige bias",
    text: "I had a strong BITSAT score and was facing the classic dilemma — which campus, which branch, and whether to take a less preferred branch at a more preferred campus or vice versa. The internet was full of conflicting opinions driven by prestige bias and anecdote. What I needed was someone who could show me actual data. Maharsh Edutech gave me a thorough, structured breakdown of placement statistics disaggregated by campus and branch, research publication output, industry partnership quality, alumni network density in my target sector, and branch-specific internship opportunity data. What stood out most was their intellectual honesty — they told me when a choice was not in my best long-term interest, even if it was the more prestigious-sounding option on paper. That kind of honesty is genuinely rare in the education consulting space, where most advisors tell students what they want to hear. I am now at BITS Pilani Goa, in Electronics, with full clarity about what I want to do with these four years.",
  },
  {
    name: "Ananya Bose",
    institution: "ISB Hyderabad",
    program: "PGP — Post Graduate Programme, 2023",
    location: "Kolkata, West Bengal",
    instColor: "#1a1a6e",
    instAbbr: "ISB",
    rating: 5,
    short: "From operations professional to ISB — with positioning that actually worked",
    text: "I was a working professional with three years in supply chain operations, considering whether an MBA was genuinely the right investment for my career goals or whether I was falling into the trap of doing what everyone around me was doing. The counselors at Maharsh Edutech were the first to actually challenge the premise of my question — they asked me to articulate specifically what I expected the MBA to unlock, and whether those outcomes were achievable by other paths. That conversation alone was worth more than any generic admission guidance. After two full sessions analyzing my career history, goals, and positioning, they helped me build a narrative that was honest and distinctive — not the sanitized version that most applicants present. My essays were reviewed by counselors with direct experience of what ISB's admissions committee evaluates. I received offers from three top MBA programs and chose ISB for its industry connections in the operations and consulting sectors. The ROI on this counseling investment has been substantial, and I think of it as the most important professional advice I have ever received.",
  },
  {
    name: "Vikram Naidu",
    institution: "Purdue University",
    program: "MS Mechanical Engineering, 2024",
    location: "Guntur, Andhra Pradesh",
    instColor: "#CEB888",
    instAbbr: "PU",
    rating: 5,
    short: "Purdue MS with a university graduate fellowship",
    text: "I was a final-year engineering student at JNTU Kakinada with a decent CGPA, average GRE scores, and very limited guidance on how to position myself competitively for US graduate admissions. My first instinct was to apply to the top 20 universities in the QS ranking, which my counselor at Maharsh Edutech immediately and gently helped me reconsider. She showed me why program-specific research fit, faculty alignment, and funding availability were far more important than aggregate rankings for MS applicants in engineering. We spent two sessions building a balanced university list — safeties, targets, and reaches — all with credible rationale for why I could be competitive at each. My SOP was rewritten from scratch three times until it clearly articulated my specific research interests and connected them to faculty work at each university. My counselor identified a graduate research assistantship opportunity at Purdue that I had not found. I applied specifically noting the faculty connection in my application, was shortlisted for an interview, and ultimately received a graduate fellowship. I cannot overstate how different this outcome would have been without the expert positioning they provided.",
  },
  {
    name: "Divya Krishnamurthy",
    institution: "NLSIU Bangalore",
    program: "B.A. LL.B., 2023",
    location: "Secunderabad, Telangana",
    instColor: "#003366",
    instAbbr: "NLS",
    rating: 5,
    short: "CLAT rank 34 — and knowing exactly what to do with it",
    text: "I had prepared for CLAT for two years and achieved a rank of 34 in the all-India merit list — a result that any law aspirant would celebrate. But in the days immediately after results, I found myself more anxious than celebratory, because I had no framework for understanding which NLU was right for me and why. The rankings exist but they do not capture clinical legal education quality, research culture, infrastructure for the specific practice area I was interested in, or the placement record in the specific firms I had identified as targets. Maharsh Edutech took all of this seriously. My counselor — who had personally advised students entering NLSIU, NALSAR, and NUJS over several years — walked me through each institution's culture, faculty quality in constitutional and human rights law specifically, moot court opportunities, law review publication norms, and detailed clerkship and firm placement data. The choice of NLSIU was clear and I made it with conviction. That confidence has carried through into my first year in ways I did not expect.",
  },
];

export default function Home() {
  const [activeTesti, setActiveTesti] = useState(0);
  const [activeService, setActiveService] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActiveTesti(p => (p + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timerRef.current);
  }, []);

  const handleTestiClick = (i) => {
    clearInterval(timerRef.current);
    setActiveTesti(i);
  };

  return (
    <>
      <Hero />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');

        :root {
          --gold: #C9A84C;
          --gold2: #E2C46B;
          --gold-dim: rgba(201,168,76,0.10);
          --gold-border: rgba(201,168,76,0.20);
          --ink: #0A0A0A;
          --ink2: #121212;
          --ink3: #1A1A1A;
          --ink4: #252525;
          --smoke: rgba(255,255,255,0.85);
          --muted: rgba(255,255,255,0.50);
          --faint: rgba(255,255,255,0.25);
          --hair: rgba(255,255,255,0.07);
          --radius: 3px;
        }

        .h * { box-sizing: border-box; }
        .h { font-family: 'DM Sans', sans-serif; background: var(--ink); color: var(--smoke); line-height: 1; }

        .h-serif { font-family: 'Playfair Display', Georgia, serif; }

        /* ── Ornamental label ── */
        .h-tag {
          display: inline-flex; align-items: center; gap: 12px;
          font-size: 10px; font-weight: 600; letter-spacing: 0.28em;
          text-transform: uppercase; color: var(--gold);
        }
        .h-tag-line { height: 1px; width: 32px; background: var(--gold); flex-shrink: 0; }

        /* ══ COLLEGE STRIP ══ */
        .h-strip { background: var(--ink2); border-bottom: 1px solid var(--gold-border); padding: 14px 0; overflow: hidden; position: relative; }
        .h-strip::before, .h-strip::after {
          content: ''; position: absolute; top: 0; bottom: 0; width: 120px; z-index: 2; pointer-events: none;
        }
        .h-strip::before { left: 0; background: linear-gradient(to right, var(--ink2), transparent); }
        .h-strip::after { right: 0; background: linear-gradient(to left, var(--ink2), transparent); }
        .h-strip-label {
          position: absolute; left: 24px; top: 50%; transform: translateY(-50%);
          font-size: 9px; font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase;
          color: var(--gold); z-index: 3; background: var(--ink2); padding: 0 12px 0 0;
        }
        .h-strip-track {
          display: flex; gap: 0; width: max-content;
          animation: stripScroll 38s linear infinite;
        }
        .h-strip-track:hover { animation-play-state: paused; }
        @keyframes stripScroll { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .h-strip-item {
          display: flex; align-items: center; gap: 10px;
          padding: 0 28px; border-right: 1px solid var(--hair);
          flex-shrink: 0;
        }
        .h-strip-logo {
          width: 34px; height: 34px; border-radius: 5px; flex-shrink: 0;
          overflow: hidden; border: 1px solid var(--hair);
          display: flex; align-items: center; justify-content: center;
          background: var(--ink3);
        }
        .h-strip-logo img {
          width: 100%; height: 100%; object-fit: contain; padding: 4px;
          filter: brightness(0.9) contrast(1.05);
        }
        .h-strip-logo-text {
          font-family: 'Playfair Display', serif; font-size: 9px; font-weight: 700;
          color: var(--gold); letter-spacing: 0.04em;
        }
        .h-strip-name { font-size: 11.5px; font-weight: 500; color: var(--muted); white-space: nowrap; }
        .h-strip-state {
          font-size: 8.5px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase;
          color: var(--gold); background: var(--gold-dim); padding: 2px 6px; border-radius: 2px;
        }

        /* ══ ABOUT ══ */
        .h-about { padding: 120px 80px; background: var(--ink); position: relative; overflow: hidden; }
        .h-about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 100px; align-items: start; }
        .h-about-left {}
        .h-about-eyebrow { margin-bottom: 20px; }
        .h-about-h2 {
          font-family: 'Playfair Display', serif; font-size: clamp(36px, 4vw, 58px);
          font-weight: 900; line-height: 1.05; margin: 0 0 28px; color: var(--smoke);
        }
        .h-about-h2 em { font-style: italic; color: var(--gold); }
        .h-about-body {
          font-size: 15px; color: var(--muted); line-height: 1.85; margin: 0 0 20px;
        }
        .h-about-right { padding-top: 12px; }
        .h-stats-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1px; border: 1px solid var(--gold-border); border-radius: var(--radius); overflow: hidden; }
        .h-stat-box {
          background: var(--ink2); padding: 32px 24px;
          border-right: 1px solid var(--gold-border);
          border-bottom: 1px solid var(--gold-border);
          position: relative;
        }
        .h-stat-box::after {
          content: ''; position: absolute; bottom: 0; left: 24px;
          width: 0; height: 2px; background: var(--gold);
          transition: width 0.6s ease;
        }
        .h-stat-box:hover::after { width: calc(100% - 48px); }
        .h-stat-num {
          font-family: 'Playfair Display', serif; font-size: 36px; font-weight: 900;
          color: var(--gold); line-height: 1; margin-bottom: 8px;
        }
        .h-stat-label { font-size: 11.5px; color: var(--muted); line-height: 1.5; }
        .h-about-quote {
          margin-top: 40px; padding: 28px 32px;
          border-left: 3px solid var(--gold); background: var(--ink2);
          border-radius: 0 var(--radius) var(--radius) 0;
        }
        .h-about-quote-text {
          font-family: 'Playfair Display', serif; font-size: 16px; font-style: italic;
          color: var(--smoke); line-height: 1.7; margin: 0 0 10px;
        }
        .h-about-quote-attr { font-size: 11px; color: var(--muted); letter-spacing: 0.1em; text-transform: uppercase; }

        /* ══ WHAT WE DO — Tabbed Services ══ */
        .h-services { padding: 120px 80px; background: var(--ink2); position: relative; }
        .h-services-nav {
          display: flex; gap: 0; border: 1px solid var(--gold-border);
          border-radius: var(--radius); overflow: hidden; margin: 52px 0 0;
        }
        .h-svc-nav-btn {
          flex: 1; padding: 20px 16px; background: var(--ink); cursor: pointer;
          border: none; border-right: 1px solid var(--gold-border);
          display: flex; flex-direction: column; align-items: flex-start; gap: 6px;
          transition: background 0.25s; text-align: left;
        }
        .h-svc-nav-btn:last-child { border-right: none; }
        .h-svc-nav-btn.active { background: var(--gold-dim); }
        .h-svc-nav-num {
          font-family: 'Playfair Display', serif; font-size: 12px; color: var(--gold); font-weight: 700;
        }
        .h-svc-nav-label { font-size: 12px; font-weight: 600; color: var(--muted); line-height: 1.3; }
        .h-svc-nav-btn.active .h-svc-nav-label { color: var(--smoke); }
        .h-svc-nav-bar {
          width: 0; height: 2px; background: var(--gold); margin-top: 4px;
          transition: width 0.4s ease;
        }
        .h-svc-nav-btn.active .h-svc-nav-bar { width: 28px; }
        
        .h-svc-panel {
          border: 1px solid var(--gold-border); border-top: none;
          border-radius: 0 0 var(--radius) var(--radius);
          display: grid; grid-template-columns: 1fr 1fr; min-height: 480px;
        }
        .h-svc-left {
          padding: 56px 52px; border-right: 1px solid var(--gold-border);
        }
        .h-svc-icon {
          width: 52px; height: 52px; border: 1px solid var(--gold-border);
          border-radius: 10px; display: flex; align-items: center; justify-content: center;
          color: var(--gold); margin-bottom: 24px;
        }
        .h-svc-icon svg { width: 22px; height: 22px; }
        .h-svc-title {
          font-family: 'Playfair Display', serif; font-size: 28px; font-weight: 700;
          color: var(--smoke); margin: 0 0 6px; line-height: 1.2;
        }
        .h-svc-subtitle {
          font-size: 12px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--gold); margin-bottom: 24px;
        }
        .h-svc-desc {
          font-size: 14.5px; color: var(--muted); line-height: 1.85; margin: 0 0 16px;
        }
        .h-svc-detail {
          font-size: 13.5px; color: rgba(255,255,255,0.38); line-height: 1.85; margin: 0;
        }
        .h-svc-right {
          padding: 56px 48px; background: var(--ink);
        }
        .h-svc-points-title {
          font-size: 10px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--gold); margin-bottom: 24px;
        }
        .h-svc-points { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 14px; }
        .h-svc-point {
          display: flex; align-items: flex-start; gap: 12px;
          font-size: 13.5px; color: rgba(255,255,255,0.65); line-height: 1.55;
        }
        .h-svc-check {
          width: 18px; height: 18px; flex-shrink: 0; margin-top: 1px;
          border-radius: 50%; border: 1px solid var(--gold-border);
          display: flex; align-items: center; justify-content: center; color: var(--gold);
        }
        .h-svc-check svg { width: 9px; height: 9px; }

        /* ══ PATH — Process ══ */
        .h-process { padding: 120px 80px; background: var(--ink); position: relative; overflow: hidden; }
        .h-process-bg {
          position: absolute; left: 80px; top: 0; bottom: 0; width: 1px;
          background: linear-gradient(to bottom, transparent, var(--gold-border) 15%, var(--gold-border) 85%, transparent);
          pointer-events: none;
        }
        /* SVG curved path behind steps */
        .h-process-svg {
          position: absolute; left: 0; top: 0; width: 100%; height: 100%;
          pointer-events: none; overflow: visible;
        }
        .h-process-inner { position: relative; z-index: 1; }
        .h-process-steps { display: flex; flex-direction: column; gap: 0; margin-top: 64px; }
        .h-pstep {
          display: grid; grid-template-columns: 120px 1fr;
          gap: 0; align-items: stretch;
          padding: 0; position: relative;
        }
        .h-pstep-left {
          display: flex; flex-direction: column; align-items: center; padding-top: 40px;
        }
        .h-pstep-node {
          width: 64px; height: 64px; border-radius: 50%;
          border: 1.5px solid var(--gold-border); background: var(--ink);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
          font-family: 'Playfair Display', serif; font-size: 18px; font-weight: 700;
          color: var(--gold); transition: all 0.35s; z-index: 2; position: relative;
        }
        .h-pstep:hover .h-pstep-node {
          background: var(--gold); color: var(--ink); border-color: var(--gold);
          box-shadow: 0 0 0 8px var(--gold-dim);
        }
        .h-pstep-connector {
          flex: 1; width: 1.5px; background: var(--gold-border); margin: 8px 0 0;
        }
        .h-pstep:last-child .h-pstep-connector { display: none; }
        .h-pstep-right {
          padding: 40px 0 56px 48px; border-bottom: 1px solid var(--hair);
        }
        .h-pstep:last-child .h-pstep-right { border-bottom: none; }
        .h-pstep-meta { display: flex; gap: 16px; margin-bottom: 14px; }
        .h-pstep-badge {
          font-size: 9.5px; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--gold); background: var(--gold-dim); border: 1px solid var(--gold-border);
          padding: 3px 10px; border-radius: 2px;
        }
        .h-pstep-title {
          font-family: 'Playfair Display', serif; font-size: 24px; font-weight: 700;
          color: var(--smoke); margin: 0 0 14px; line-height: 1.2;
        }
        .h-pstep-desc {
          font-size: 14px; color: var(--muted); line-height: 1.85; margin: 0; max-width: 680px;
        }

        /* ══ WHY US ══ */
        .h-why { padding: 120px 80px; background: var(--ink2); }
        .h-why-header { max-width: 600px; margin-bottom: 64px; }
        .h-why-h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(32px, 4vw, 52px); font-weight: 900; line-height: 1.05;
          margin: 12px 0 20px;
        }
        .h-why-h2 em { font-style: italic; color: var(--gold); }
        .h-why-lead { font-size: 14.5px; color: var(--muted); line-height: 1.82; }
        .h-why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; border: 1px solid var(--gold-border); border-radius: var(--radius); overflow: hidden; }
        .h-why-card {
          background: var(--ink); padding: 44px 36px;
          border-right: 1px solid var(--gold-border); border-bottom: 1px solid var(--gold-border);
          transition: background 0.25s; position: relative;
        }
        .h-why-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: var(--gold); transform: scaleX(0); transform-origin: left;
          transition: transform 0.4s ease;
        }
        .h-why-card:hover::before { transform: scaleX(1); }
        .h-why-card:hover { background: var(--ink3); }
        .h-why-num {
          font-family: 'Playfair Display', serif; font-size: 52px; font-weight: 900;
          color: rgba(201,168,76,0.12); line-height: 1; margin-bottom: 20px;
          letter-spacing: -0.03em;
        }
        .h-why-title {
          font-family: 'Playfair Display', serif; font-size: 18px; font-weight: 700;
          color: var(--smoke); margin: 0 0 12px; line-height: 1.3;
        }
        .h-why-desc { font-size: 13px; color: var(--muted); line-height: 1.82; }

        /* ══ TESTIMONIALS ══ */
        .h-testi { padding: 120px 80px; background: var(--ink); }
        .h-testi-header { max-width: 600px; margin-bottom: 64px; }
        .h-testi-layout { display: grid; grid-template-columns: 280px 1fr; gap: 2px; }
        .h-testi-sidebar {
          display: flex; flex-direction: column; gap: 0;
          border: 1px solid var(--gold-border); border-radius: var(--radius) 0 0 var(--radius);
          overflow: hidden;
        }
        .h-testi-item {
          padding: 20px 22px; border-bottom: 1px solid var(--hair);
          cursor: pointer; transition: background 0.2s;
          border-left: 3px solid transparent;
        }
        .h-testi-item:last-child { border-bottom: none; }
        .h-testi-item.active { background: var(--gold-dim); border-left-color: var(--gold); }
        .h-testi-item:hover:not(.active) { background: rgba(255,255,255,0.02); }
        .h-testi-item-name { font-size: 13px; font-weight: 600; color: var(--smoke); margin-bottom: 3px; }
        .h-testi-item-short { font-size: 11px; color: var(--muted); line-height: 1.4; }
        .h-testi-panel {
          border: 1px solid var(--gold-border); border-left: none;
          border-radius: 0 var(--radius) var(--radius) 0;
          background: var(--ink2); padding: 56px 60px;
          display: flex; flex-direction: column;
        }
        .h-testi-quote-mark { color: var(--gold); opacity: 0.18; margin-bottom: 32px; }
        .h-testi-quote-mark svg { width: 40px; height: 30px; }
        .h-testi-text {
          font-family: 'Playfair Display', serif; font-size: clamp(14px, 1.5vw, 18px);
          font-style: italic; font-weight: 400; color: rgba(255,255,255,0.80);
          line-height: 1.9; margin: 0 0 44px; flex: 1;
        }
        .h-testi-footer { display: flex; align-items: flex-end; justify-content: space-between; gap: 24px; }
        .h-testi-name-row {}
        .h-testi-name { font-size: 15px; font-weight: 700; color: var(--smoke); margin-bottom: 5px; }
        .h-testi-meta { font-size: 12px; color: var(--muted); line-height: 1.5; }
        .h-testi-stars { display: flex; gap: 2px; margin-top: 8px; }
        .h-testi-stars svg { width: 11px; height: 11px; color: var(--gold); }
        .h-testi-badge {
          display: flex; align-items: center; gap: 10px;
          border: 1px solid var(--gold-border); background: var(--gold-dim);
          padding: 12px 16px; border-radius: 4px; flex-shrink: 0;
        }
        .h-testi-badge-logo {
          width: 34px; height: 34px; border-radius: 4px;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Playfair Display', serif; font-size: 9px; font-weight: 700;
          color: white;
        }
        .h-testi-badge-inst { font-size: 13px; font-weight: 600; color: var(--smoke); }
        .h-testi-badge-verified { font-size: 10px; color: var(--muted); margin-top: 2px; }
        .h-testi-dots { display: flex; gap: 6px; margin-top: 28px; }
        .h-testi-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: var(--hair); cursor: pointer; transition: background 0.2s;
          border: 1px solid var(--gold-border);
        }
        .h-testi-dot.active { background: var(--gold); }

        /* ══ CTA ══ */
        .h-cta {
          padding: 140px 80px;
          background: var(--ink);
          border-top: 1px solid var(--gold-border);
          position: relative; overflow: hidden;
        }
        .h-cta::before {
          content: '';
          position: absolute; bottom: -200px; left: 50%; transform: translateX(-50%);
          width: 800px; height: 400px;
          background: radial-gradient(ellipse, rgba(201,168,76,0.07) 0%, transparent 70%);
          pointer-events: none;
        }
        .h-cta-inner { position: relative; max-width: 760px; margin: 0 auto; text-align: center; }
        .h-cta-h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(36px, 5vw, 68px); font-weight: 900;
          line-height: 1.05; margin: 16px 0 22px;
        }
        .h-cta-h2 em { font-style: italic; color: var(--gold); }
        .h-cta-sub { font-size: 15px; color: var(--muted); line-height: 1.75; margin: 0 0 48px; }
        .h-cta-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-bottom: 72px; }
        .h-btn-primary {
          font-size: 11.5px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
          background: var(--gold); color: var(--ink); border: none;
          padding: 16px 40px; border-radius: 4px; cursor: pointer;
          transition: background 0.2s, transform 0.15s; text-decoration: none; display: inline-block;
        }
        .h-btn-primary:hover { background: var(--gold2); transform: translateY(-2px); }
        .h-btn-outline {
          font-size: 11.5px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;
          background: transparent; color: var(--smoke);
          border: 1.5px solid rgba(255,255,255,0.2); padding: 15px 36px;
          border-radius: 4px; cursor: pointer;
          transition: border-color 0.2s, color 0.2s; text-decoration: none; display: inline-block;
        }
        .h-btn-outline:hover { border-color: var(--gold); color: var(--gold); }
        .h-contact-strip { display: flex; justify-content: center; gap: 56px; flex-wrap: wrap; padding-top: 48px; border-top: 1px solid var(--hair); }
        .h-contact-item { display: flex; align-items: center; gap: 14px; }
        .h-contact-icon {
          width: 40px; height: 40px; border: 1px solid var(--gold-border); border-radius: 8px;
          display: flex; align-items: center; justify-content: center; color: var(--gold); flex-shrink: 0;
        }
        .h-contact-icon svg { width: 15px; height: 15px; }
        .h-contact-label { font-size: 9px; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; color: var(--faint); margin-bottom: 4px; }
        .h-contact-val { font-size: 13.5px; font-weight: 500; color: var(--muted); }

        /* ── Divider ── */
        .h-rule { border: none; border-top: 1px solid var(--gold-border); margin: 0; }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .h-about { padding: 80px 48px; }
          .h-about-grid { grid-template-columns: 1fr; gap: 60px; }
          .h-services, .h-process, .h-why, .h-testi, .h-cta { padding: 80px 40px; }
          .h-svc-panel { grid-template-columns: 1fr; }
          .h-svc-right { border-top: 1px solid var(--gold-border); }
          .h-why-grid { grid-template-columns: repeat(2,1fr); }
          .h-testi-layout { grid-template-columns: 1fr; }
          .h-testi-sidebar { border-radius: var(--radius); }
          .h-testi-panel { border-left: 1px solid var(--gold-border); border-radius: var(--radius); }
          .h-testi-footer { flex-direction: column; align-items: flex-start; }
        }
        @media (max-width: 640px) {
          .h-about, .h-services, .h-process, .h-why, .h-testi, .h-cta { padding: 64px 24px; }
          .h-stats-grid { grid-template-columns: 1fr 1fr; }
          .h-why-grid { grid-template-columns: 1fr; }
          .h-svc-nav-btn { padding: 14px 10px; }
          .h-svc-nav-label { font-size: 10.5px; }
          .h-pstep { grid-template-columns: 80px 1fr; }
          .h-pstep-node { width: 48px; height: 48px; font-size: 14px; }
          .h-svc-left, .h-svc-right { padding: 36px 28px; }
          .h-contact-strip { gap: 28px; flex-direction: column; align-items: center; }
        }
      `}</style>

      <div className="h">

        {/* ══ REGIONAL COLLEGE STRIP — AP & TS ══ */}
        <div className="h-strip">
          <div className="h-strip-label">AP · TS</div>
          <div className="h-strip-track">
            {[...Array(2)].map((_, pass) =>
              regionalColleges.map((c, i) => (
                <div key={`r-${pass}-${i}`} className="h-strip-item">
                  <div className="h-strip-logo">
                    <img src={c.image} alt={c.name} onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }} />
                    <span className="h-strip-logo-text" style={{display:'none'}}>{c.short}</span>
                  </div>
                  <span className="h-strip-name">{c.name}</span>
                  <span className="h-strip-state">{c.state}</span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* ══ NATIONAL COLLEGE STRIP ══ */}
        <div className="h-strip" style={{borderTop:'1px solid var(--gold-border)'}}>
          <div className="h-strip-label" style={{color:'var(--faint)'}}>National</div>
          <div className="h-strip-track" style={{animationDirection:'reverse', animationDuration:'30s'}}>
            {[...Array(2)].map((_, pass) =>
              nationalColleges.map((c, i) => (
                <div key={`n-${pass}-${i}`} className="h-strip-item">
                  <div className="h-strip-logo" style={{background: c.color + '22', border:`1px solid ${c.color}44`}}>
                    <span className="h-strip-logo-text" style={{color: c.color, display:'flex'}}>{c.short}</span>
                  </div>
                  <span className="h-strip-name">{c.name}</span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* ══ ABOUT US ══ */}
        <section className="h-about">
          <RevealSection>
            <div className="h-about-grid">
              <div className="h-about-left">
                <div className="h-about-eyebrow">
                  <div className="h-tag"><div className="h-tag-line" /> About Maharsh Edutech <div className="h-tag-line" /></div>
                </div>
                <h2 className="h-about-h2">Andhra Pradesh & Telangana's Most <em>Trusted</em> Education Partner</h2>
                <p className="h-about-body">
                  Maharsh Edutech was founded with a single conviction: that every student in India deserves access to the same quality of education guidance that was previously available only to those with the right connections or the financial means to afford expensive overseas consultants. We are an Andhra Pradesh and Telangana-rooted firm that has grown into a national presence — because the quality of our advice, and the honesty of our model, speaks through the outcomes of our students.
                </p>
                <p className="h-about-body">
                  Over twelve years, we have guided more than 5,000 students through every major educational transition — from Class 10 stream selection to postgraduate admissions in India and across 18 countries. Our team of 40 certified counselors, application specialists, financial advisors, and visa experts operates as a single integrated unit, collectively accountable for every student's outcome.
                </p>
                <p className="h-about-body">
                  We do not earn commissions from colleges. We do not receive referral payments from lenders. We do not employ freshers to deliver generic advice from a script. Maharsh Edutech earns its reputation entirely through the quality of the decisions our students make — and the futures those decisions build.
                </p>
                <div className="h-about-quote">
                  <p className="h-about-quote-text">"We built Maharsh Edutech because we saw too many brilliant students make consequential decisions with the wrong information. We wanted to change that — one student at a time."</p>
                  <div className="h-about-quote-attr">— Founder, Maharsh Edutech · Hyderabad</div>
                </div>
              </div>
              <div className="h-about-right">
                <div className="h-stats-grid">
                  {aboutStats.map((s, i) => (
                    <div key={i} className="h-stat-box">
                      <div className="h-stat-num">{s.num}</div>
                      <div className="h-stat-label">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealSection>
        </section>

        <hr className="h-rule" />

        {/* ══ WHAT WE DO — Services ══ */}
        <section className="h-services">
          <RevealSection>
            <div className="h-tag"><div className="h-tag-line" /> What We Do</div>
            <h2 style={{fontFamily:'Playfair Display, serif', fontSize:'clamp(32px,4vw,52px)', fontWeight:900, lineHeight:1.05, margin:'14px 0 16px', color:'var(--smoke)'}}>
              Four Pillars of <em style={{fontStyle:'italic',color:'var(--gold)'}}>Complete Support</em>
            </h2>
            <p style={{fontSize:'14.5px',color:'var(--muted)',lineHeight:1.82,maxWidth:560,margin:0}}>
              Every service we offer is designed to address one specific dimension of the complex, multi-stage process of building an educational career. Together, they form a seamless system of support.
            </p>
          </RevealSection>

          <RevealSection delay={120}>
            <div className="h-services-nav">
              {services.map((s, i) => (
                <button
                  key={i}
                  className={`h-svc-nav-btn${activeService === i ? ' active' : ''}`}
                  onClick={() => setActiveService(i)}
                >
                  <div className="h-svc-nav-num">{s.num}</div>
                  <div className="h-svc-nav-label">{s.title}</div>
                  <div className="h-svc-nav-bar" />
                </button>
              ))}
            </div>

            <div className="h-svc-panel">
              <div className="h-svc-left" style={{background:'var(--ink2)'}}>
                <div className="h-svc-icon">
                  {Icons[services[activeService].icon] && React.createElement(Icons[services[activeService].icon])}
                </div>
                <div className="h-svc-subtitle">{services[activeService].subtitle}</div>
                <div className="h-svc-title">{services[activeService].title}</div>
                <p className="h-svc-desc">{services[activeService].desc}</p>
                <p className="h-svc-detail">{services[activeService].detail}</p>
              </div>
              <div className="h-svc-right">
                <div className="h-svc-points-title">What's Included</div>
                <ul className="h-svc-points">
                  {services[activeService].points.map((pt, i) => (
                    <li key={i} className="h-svc-point">
                      <div className="h-svc-check"><Icons.Check /></div>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealSection>
        </section>

        <hr className="h-rule" />

        {/* ══ PROCESS — PATH ══ */}
        <section className="h-process">
          <RevealSection>
            <div className="h-tag"><div className="h-tag-line" /> How It Works</div>
            <h2 style={{fontFamily:'Playfair Display, serif', fontSize:'clamp(32px,4vw,52px)', fontWeight:900, lineHeight:1.05, margin:'14px 0 16px', color:'var(--smoke)'}}>
              Your Path, <em style={{fontStyle:'italic',color:'var(--gold)'}}>Step by Step</em>
            </h2>
            <p style={{fontSize:'14.5px',color:'var(--muted)',lineHeight:1.82,maxWidth:580,margin:0}}>
              We have designed a six-stage process that provides complete clarity, eliminates guesswork, and ensures no critical decision is made without expert input. Each stage builds on the last — creating a structured journey from first conversation to first day of college.
            </p>
          </RevealSection>

          <RevealSection delay={100}>
            <div className="h-process-inner">
              <div className="h-process-steps">
                {processSteps.map((step, i) => (
                  <div key={i} className="h-pstep">
                    <div className="h-pstep-left">
                      <div className="h-pstep-node">{step.num}</div>
                      <div className="h-pstep-connector" />
                    </div>
                    <div className="h-pstep-right">
                      <div className="h-pstep-meta">
                        <span className="h-pstep-badge">{step.mode}</span>
                        <span className="h-pstep-badge" style={{background:'transparent',color:'var(--faint)',borderColor:'var(--hair)'}}>{step.duration}</span>
                      </div>
                      <div className="h-pstep-title">{step.title}</div>
                      <p className="h-pstep-desc">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>
        </section>

        <hr className="h-rule" />

        {/* ══ WHY US ══ */}
        <section className="h-why">
          <RevealSection>
            <div className="h-why-header">
              <div className="h-tag"><div className="h-tag-line" /> Why Maharsh Edutech</div>
              <h2 className="h-why-h2">Built on <em>Integrity.</em><br />Delivered with Expertise.</h2>
              <p className="h-why-lead">
                The education consulting industry is crowded with advisors who earn commissions from colleges, offer generic advice recycled from brochures, and vanish after enrollment is confirmed. Maharsh Edutech was built to be the structural opposite of that — in every dimension of how we operate.
              </p>
            </div>
          </RevealSection>
          <RevealSection delay={100}>
            <div className="h-why-grid">
              {whyUs.map((item, i) => (
                <div key={i} className="h-why-card">
                  <div className="h-why-num">{item.num}</div>
                  <div className="h-why-title">{item.title}</div>
                  <p className="h-why-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </RevealSection>
        </section>

        <hr className="h-rule" />

        {/* ══ TESTIMONIALS ══ */}
        <section className="h-testi">
          <RevealSection>
            <div className="h-testi-header">
              <div className="h-tag"><div className="h-tag-line" /> Student Stories</div>
              <h2 style={{fontFamily:'Playfair Display, serif', fontSize:'clamp(32px,4vw,52px)', fontWeight:900, lineHeight:1.05, margin:'14px 0 16px', color:'var(--smoke)'}}>
                5,000+ Students.<br /><em style={{fontStyle:'italic',color:'var(--gold)'}}>One Consistent Result.</em>
              </h2>
              <p style={{fontSize:'14.5px',color:'var(--muted)',lineHeight:1.82,margin:0}}>
                These are unedited accounts from students we have guided across engineering, medicine, management, law, and international programs. Every word is their own.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={100}>
            <div className="h-testi-layout">
              <div className="h-testi-sidebar">
                {testimonials.map((t, i) => (
                  <div
                    key={i}
                    className={`h-testi-item${activeTesti === i ? ' active' : ''}`}
                    onClick={() => handleTestiClick(i)}
                  >
                    <div className="h-testi-item-name">{t.name}</div>
                    <div className="h-testi-item-short">{t.short}</div>
                  </div>
                ))}
              </div>

              <div className="h-testi-panel">
                <div className="h-testi-quote-mark"><Icons.Quote /></div>
                <p className="h-testi-text">{testimonials[activeTesti].text}</p>
                <div className="h-testi-footer">
                  <div className="h-testi-name-row">
                    <div className="h-testi-name">{testimonials[activeTesti].name}</div>
                    <div className="h-testi-meta">
                      {testimonials[activeTesti].program}<br />{testimonials[activeTesti].location}
                    </div>
                    <div className="h-testi-stars">
                      {Array(testimonials[activeTesti].rating).fill(null).map((_, j) => <Icons.Star key={j} />)}
                    </div>
                  </div>
                  <div className="h-testi-badge">
                    <div className="h-testi-badge-logo" style={{background: testimonials[activeTesti].instColor}}>
                      {testimonials[activeTesti].instAbbr}
                    </div>
                    <div>
                      <div className="h-testi-badge-inst">{testimonials[activeTesti].institution}</div>
                      <div className="h-testi-badge-verified">Verified Admission</div>
                    </div>
                  </div>
                </div>
                <div className="h-testi-dots">
                  {testimonials.map((_, i) => (
                    <div key={i} className={`h-testi-dot${activeTesti === i ? ' active' : ''}`} onClick={() => handleTestiClick(i)} />
                  ))}
                </div>
              </div>
            </div>
          </RevealSection>
        </section>

        {/* ══ CTA ══ */}
        <section className="h-cta">
          <RevealSection>
            <div className="h-cta-inner">
              <div className="h-tag" style={{justifyContent:'center'}}>
                <div className="h-tag-line" /> Take the First Step <div className="h-tag-line" />
              </div>
              <h2 className="h-cta-h2">
                Your Career Path Begins<br />with <em>One Conversation</em>
              </h2>
              <p className="h-cta-sub">
                Book a complimentary 30-minute session with a certified counselor. There is no sales pitch, no pressure, and no obligation. Just an honest, informed conversation about your future — and what it takes to get there.
              </p>
              <div className="h-cta-btns">
                <a href="/counseling" className="h-btn-primary">Book Free Counseling</a>
                <a href="/services" className="h-btn-outline">Explore All Services</a>
              </div>
              <div className="h-contact-strip">
                <div className="h-contact-item">
                  <div className="h-contact-icon"><Icons.Phone /></div>
                  <div>
                    <div className="h-contact-label">Call Us</div>
                    <div className="h-contact-val">+91 7337267648</div>
                  </div>
                </div>
                <div className="h-contact-item">
                  <div className="h-contact-icon"><Icons.Mail /></div>
                  <div>
                    <div className="h-contact-label">Email</div>
                    <div className="h-contact-val">maharshedutech@gmail.com</div>
                  </div>
                </div>
                <div className="h-contact-item">
                  <div className="h-contact-icon"><Icons.MapPin /></div>
                  <div>
                    <div className="h-contact-label">Office</div>
                    <div className="h-contact-val">Hyderabad, Telangana</div>
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>
        </section>

      </div>
    </>
  );
}