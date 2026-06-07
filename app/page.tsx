// KIHON SWAP NOTE: When Allan's Kihon account is set up, replace the <LeadForm /> component
// in the hero section with an <iframe src="KIHON_FORM_URL" /> embed. The Kihon form will
// collect the lead and redirect to the Kihon booking calendar automatically.

import LeadForm from "@/components/LeadForm";

const programs = [
  {
    name: "Cubs",
    age: "3–4 yrs old",
    img: "/images/dojo-willawong-brisbane-02-1024x768.webp",
    description:
      "Kansai Cubs was created just for preschoolers (3–4 year olds). We start with fun, promote teamwork and friendship, and help create strong individuality and the self-esteem necessary to succeed. They learn how to control their bodies, direct their minds, and empower their spirits — all wrapped up in games, challenges and fun.",
  },
  {
    name: "Little Lions",
    age: "5–7 yrs old",
    img: "/images/dojo-willawong-brisbane-03-1024x768.webp",
    description:
      "The main aim with the Little Lions class is to introduce children to karate in a fun but structured program. The focus is on developing motor skills, confidence and discipline while learning basic karate techniques. Lessons are divided into short bursts of activity — skill and game orientated.",
  },
  {
    name: "Juniors",
    age: "8–12 yrs old",
    img: "/images/dojo-willawong-brisbane-04-1024x768.webp",
    description:
      "The Juniors class builds on karate skills in a fun environment through karate games and technique. Progressively more difficult techniques form the Beginner/Novice teaching criteria, before moving to Junior Intermediate and finally Junior Advanced classes.",
  },
  {
    name: "Adults & Teens",
    age: "13+ yrs old",
    img: "/images/dojo-willawong-brisbane-05-1024x768.webp",
    description:
      "Kansai Karate adult classes are for 13 years and up. These classes incorporate traditional karate with the benefits of self-defence, fitness, health and wellbeing. Teens and adults train together in a supportive, structured environment.",
  },
];

const benefits = [
  {
    icon: "/images/img-1.webp",
    title: "Self Control, Confidence & Discipline",
    body: "Karate at Kansai Karate Willawong emphasizes the development of self-control, confidence, and discipline. Our structured programs guide students through a journey of personal growth, fostering a sense of responsibility and self-awareness.",
  },
  {
    icon: "/images/img-3.webp",
    title: "Physical and Mental Health",
    body: "Engaging in karate enhances both physical and mental health. Regular practice improves fitness, flexibility, and coordination while also promoting mental clarity and stress relief.",
  },
  {
    icon: "/images/img-5.webp",
    title: "Strengthen Mind",
    body: "Karate training at our dojo strengthens the mind by cultivating focus, resilience, and a positive mindset, empowering students to overcome challenges in all areas of life.",
  },
];

const timetable = [
  {
    program: "Cubs (3–4 yrs)",
    mon: "4:30–5:00pm",
    tue: "Closed",
    wed: "Closed",
    thu: "Closed",
    fri: "Closed",
    sat: "8:00–8:30am",
  },
  {
    program: "Little Lions (5–7 yrs)",
    mon: "5:15–6:00pm",
    tue: "Closed",
    wed: "Closed",
    thu: "4:30–5:15pm",
    fri: "4:30–5:15pm",
    sat: "8:45–9:30am",
  },
  {
    program: "Juniors Beg/Nov (White–Yellow)",
    mon: "6:00–6:45pm",
    tue: "Closed",
    wed: "Closed",
    thu: "5:30–6:15pm",
    fri: "5:30–6:15pm",
    sat: "9:30–10:15am",
  },
  {
    program: "Juniors Int (Yellow+2–Blue)",
    mon: "6:00–6:45pm",
    tue: "Closed",
    wed: "Closed",
    thu: "6:15–7:00pm",
    fri: "5:30–6:15pm",
    sat: "10:15–11:00am",
  },
  {
    program: "Adults & Teens White–Orange",
    mon: "7:00–7:45pm",
    tue: "Closed",
    wed: "Closed",
    thu: "7:15–8:00pm",
    fri: "6:15–7:00pm",
    sat: "11:15am–12:00pm",
  },
  {
    program: "Adults & Teens Green–Brown",
    mon: "7:00–7:45pm",
    tue: "Closed",
    wed: "Closed",
    thu: "7:15–8:00pm",
    fri: "6:15–7:00pm",
    sat: "11:15am–12:00pm",
  },
];

export default function LandingPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: "url(/images/dojo-willawong-brisbane-01-1024x768.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(4,4,4,0.82)" }}
        />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-24 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left — Offer copy */}
          <div className="text-white">
            <span
              className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-6 px-3 py-1"
              style={{ background: "#dd3333", color: "#fff" }}
            >
              Introductory Online Special
            </span>

            <h1
              className="leading-none font-black uppercase text-white mb-0"
              style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", fontFamily: "var(--font-open-sans-condensed)", fontWeight: 900 }}
            >
              2 Weeks<br />Training +<br />Free Uniform
            </h1>

            <div className="my-4 w-16 h-1" style={{ background: "#dd3333" }} />

            <p
              className="font-black uppercase leading-none"
              style={{ fontSize: "clamp(3rem, 8vw, 6rem)", color: "#dd3333", fontFamily: "var(--font-open-sans-condensed)", fontWeight: 900 }}
            >
              Only $39
            </p>

            <p className="text-white/70 mt-6 mb-8 text-base leading-relaxed max-w-md">
              Introduce your child — or yourself — to the benefits of Traditional Karate.
              No experience needed. No lock-in contracts.
            </p>

            <div className="space-y-3">
              {[
                "Traditional Shito-Ryu Shukokai Karate",
                "Programs for all ages — Cubs (3) to Adults",
                "Taught by Sensei Allan Reyes (Sandan — 3rd Dan)",
                "Willawong dojo — Mon, Wed, Thu, Fri evenings + Saturday mornings",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span style={{ color: "#dd3333" }} className="font-black text-lg leading-none mt-0.5">✓</span>
                  <p className="text-white/85 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Lead form */}
          <div id="register">
            <div
              className="rounded-sm shadow-2xl"
              style={{ background: "#fff", border: "3px solid #dd3333" }}
            >
              <div className="px-6 pt-5 pb-3" style={{ background: "#dd3333" }}>
                <h2
                  className="text-white font-black uppercase leading-tight"
                  style={{ fontFamily: "var(--font-open-sans-condensed)", fontSize: "1.3rem" }}
                >
                  Claim Your Introductory Special
                </h2>
                <p className="text-white/80 text-xs mt-1">
                  Fill in your details and we&apos;ll be in touch within 24 hours.
                </p>
              </div>
              <div className="p-6">
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── /01 — ABOUT ── */}
      <section className="py-16 px-4" style={{ background: "#243673" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <span className="section-prefix" style={{ color: "#BFD1FF" }}>/01</span>
              <h2
                className="text-white leading-tight mb-6"
                style={{ fontFamily: "var(--font-open-sans-condensed)", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700 }}
              >
                We are family friendly and we teach traditional<br />Shito-Ryu Shukokai Karate.
              </h2>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                We are dedicated to offering great martial arts programs to the residents of{" "}
                <strong className="text-white/90">
                  Acacia Ridge, Algester, Archerfield, Calamvale, Doolandella, Durack,
                  Forest Lake, Heathwood, Inala, Pallara, Richlands, Sunnybank Hills &amp; Willawong.
                </strong>
              </p>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Welcome to Kansai Karate Willawong, where we proudly offer traditional Shito-Ryu
                Shukokai Karate classes in a supportive and family-friendly environment. Our dojo,
                situated in the heart of Willawong, features a purpose-built facility designed to
                foster learning and personal growth for students of all ages.
              </p>
              <p className="text-white/70 text-sm leading-relaxed">
                Under the expert guidance of Chief Instructor Sensei Allan Reyes, we provide
                tailored programs for various age groups, starting from our young Cubs (ages 3–4)
                through to adults. Our classes are structured to enhance physical and mental
                well-being, instilling core values such as discipline, confidence, and self-control.
              </p>
              <a
                href="#register"
                className="inline-block mt-8 px-8 py-3 font-bold uppercase tracking-widest text-white text-sm transition-opacity hover:opacity-90"
                style={{ background: "#dd3333" }}
              >
                Claim the $39 Offer
              </a>
            </div>

            {/* Image */}
            <div className="rounded overflow-hidden shadow-xl" style={{ aspectRatio: "4/3" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/Kansai-Karate-Willawong-Dojo-1024x768.jpg"
                alt="Kansai Karate Willawong dojo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── /02 — BENEFITS ── */}
      <section className="py-16 px-4" style={{ background: "#040404" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-prefix">/02</span>
            <h2
              className="text-white"
              style={{ fontFamily: "var(--font-open-sans-condensed)", fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}
            >
              Benefits of Karate Practice
            </h2>
            <p className="text-white/40 text-xs uppercase tracking-widest mt-2">
              Pride in each class
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="p-6 flex flex-col items-start"
                style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={b.icon}
                  alt=""
                  className="h-16 w-auto mb-5 object-contain"
                />
                <h3
                  className="text-white mb-3"
                  style={{ fontFamily: "var(--font-open-sans-condensed)", fontSize: "1.1rem" }}
                >
                  {b.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── /03 — PROGRAMS ── */}
      <section
        className="py-16 px-4 relative"
        style={{
          backgroundImage: "url(/images/kansai-karate-near-me-1024x683.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(4,4,4,0.88)" }} />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-prefix">/03</span>
            <h2
              className="text-white"
              style={{ fontFamily: "var(--font-open-sans-condensed)", fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}
            >
              Our Karate Programs
            </h2>
            <p className="text-white/50 text-xs uppercase tracking-widest mt-2">
              Kansai Karate General Information
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {programs.map((p) => (
              <div
                key={p.name}
                className="flex flex-col overflow-hidden rounded-sm"
                style={{ border: "1px solid rgba(221,51,51,0.3)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full object-cover"
                  style={{ height: "180px" }}
                />
                <div className="p-5 flex flex-col flex-1" style={{ background: "rgba(255,255,255,0.04)" }}>
                  <h3
                    className="text-white mb-1"
                    style={{ fontFamily: "var(--font-open-sans-condensed)", fontSize: "1.3rem" }}
                  >
                    {p.name}
                  </h3>
                  <p className="text-[#dd3333] text-xs font-bold uppercase tracking-wide mb-3">
                    {p.age}
                  </p>
                  <p className="text-white/65 text-xs leading-relaxed flex-1">{p.description}</p>
                  <a
                    href="#register"
                    className="mt-5 block text-center py-2.5 text-xs font-bold uppercase tracking-widest transition-colors text-white hover:opacity-90"
                    style={{ background: "#dd3333" }}
                  >
                    Claim $39 Offer
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── /04 — TIMETABLE ── */}
      <section className="py-16 px-4" style={{ background: "#243673" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-prefix" style={{ color: "#BFD1FF" }}>/04</span>
            <h2
              className="text-white"
              style={{ fontFamily: "var(--font-open-sans-condensed)", fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}
            >
              2025 Timetable — Willawong Dojo
            </h2>
          </div>

          <div className="overflow-x-auto rounded-sm">
            <table className="w-full text-xs font-semibold" style={{ minWidth: "680px" }}>
              <thead>
                <tr style={{ background: "#dd3333" }}>
                  {["Program", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((h) => (
                    <th key={h} className="text-white uppercase tracking-wide px-3 py-3 text-left">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timetable.map((row, i) => (
                  <tr
                    key={row.program}
                    style={{
                      background: i % 2 === 0 ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.02)",
                    }}
                  >
                    <td className="text-white px-3 py-3 font-bold" style={{ minWidth: "160px" }}>
                      {row.program}
                    </td>
                    {[row.mon, row.tue, row.wed, row.thu, row.fri, row.sat].map((cell, j) => (
                      <td
                        key={j}
                        className="px-3 py-3"
                        style={{ color: cell === "Closed" ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.85)" }}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-white/40 text-xs mt-4 text-center">
            Tuesday — Group Private sessions only (times by appointment).
          </p>
        </div>
      </section>

      {/* ── INSTRUCTOR ── */}
      <section className="py-16 px-4" style={{ background: "#040404" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: "#dd3333" }}>
              Highly Qualified
            </p>
            <h2
              className="text-white"
              style={{ fontFamily: "var(--font-open-sans-condensed)", fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}
            >
              Karate Instructors
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-4xl mx-auto">
            <div className="rounded overflow-hidden shadow-xl" style={{ aspectRatio: "3/4" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/dojo-willawong-brisbane-06-1024x768.webp"
                alt="Sensei Allan Reyes — Kansai Karate Willawong"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.2em] mb-3"
                style={{ color: "#dd3333" }}
              >
                Chief Instructor — Willawong
              </p>
              <h3
                className="text-white mb-2"
                style={{ fontFamily: "var(--font-open-sans-condensed)", fontSize: "2rem" }}
              >
                Sensei Allan Reyes
              </h3>
              <p className="font-bold uppercase tracking-widest mb-6 text-sm" style={{ color: "#BFD1FF" }}>
                Sandan — 3rd Dan Black Belt
              </p>
              <p className="text-white/65 text-sm leading-relaxed mb-4">
                Allan has trained and taught Shitoryu Shukokai karate for many years. As a Sandan
                and licensed Kansai Karate Academy instructor, he brings genuine expertise and a
                warm teaching style to every class.
              </p>
              <p className="text-white/65 text-sm leading-relaxed mb-4">
                Sensei Allan is supported by{" "}
                <strong className="text-white/85">Hayden Reyes (Shodan)</strong> and{" "}
                <strong className="text-white/85">Chrystle Reyes (Junior Shodan)</strong> — a
                dedicated family instructing team who bring energy, care, and technical skill to
                every session.
              </p>
              <p className="text-white/65 text-sm leading-relaxed">
                Dojo administration is managed by{" "}
                <strong className="text-white/85">Marie Reyes</strong>, ensuring every enquiry and
                enrolment is handled promptly and warmly.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                <span
                  className="px-3 py-1 text-xs font-bold uppercase tracking-wide"
                  style={{ background: "rgba(221,51,51,0.15)", color: "#dd3333", border: "1px solid rgba(221,51,51,0.3)" }}
                >
                  QKA Affiliated
                </span>
                <span
                  className="px-3 py-1 text-xs font-bold uppercase tracking-wide"
                  style={{ background: "rgba(221,51,51,0.15)", color: "#dd3333", border: "1px solid rgba(221,51,51,0.3)" }}
                >
                  AKF Affiliated
                </span>
                <span
                  className="px-3 py-1 text-xs font-bold uppercase tracking-wide"
                  style={{ background: "rgba(221,51,51,0.15)", color: "#dd3333", border: "1px solid rgba(221,51,51,0.3)" }}
                >
                  Kansai Karate Academy
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY STRIP ── */}
      <div className="flex overflow-hidden" style={{ height: "120px" }}>
        {[
          "/images/dojo-willawong-brisbane-01-1024x768.webp",
          "/images/dojo-willawong-brisbane-03-1024x768.webp",
          "/images/dojo-willawong-brisbane-04-1024x768.webp",
          "/images/dojo-willawong-brisbane-05-1024x768.webp",
          "/images/karate-near-me-1024x473.jpg",
        ].map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={src}
            alt="Kansai Karate Willawong dojo"
            className="flex-1 object-cover"
            style={{ minWidth: "0" }}
          />
        ))}
      </div>

      {/* ── FINAL CTA ── */}
      <section className="py-16 px-4" style={{ background: "#dd3333" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-white font-black uppercase leading-tight mb-4"
            style={{ fontFamily: "var(--font-open-sans-condensed)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900 }}
          >
            Don&apos;t Miss This Offer
          </h2>
          <p className="text-white/85 text-lg mb-8">
            2 weeks training + free uniform for only $39. Available for new students only.
            Limited spots — register now.
          </p>
          <a
            href="#register"
            className="inline-block bg-white font-black uppercase tracking-widest px-12 py-4 text-sm transition-opacity hover:opacity-90"
            style={{ color: "#dd3333", fontFamily: "var(--font-open-sans-condensed)" }}
          >
            Register Now — $39
          </a>
        </div>
      </section>

      {/* ── CONTACT + FOOTER ── */}
      <footer style={{ background: "#040404" }}>
        {/* Contact bar */}
        <div className="py-12 px-4 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] mb-2" style={{ color: "#dd3333" }}>
                Address
              </p>
              <p className="text-white/70 text-sm">
                Unit 3, 14 Buttonwood Place<br />Willawong QLD 4110
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] mb-2" style={{ color: "#dd3333" }}>
                Phone
              </p>
              <a
                href="tel:0421366355"
                className="text-white/70 text-sm hover:text-white transition-colors"
              >
                0421 366 355
              </a>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] mb-2" style={{ color: "#dd3333" }}>
                Keep in Touch
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://www.facebook.com/kansaikaratewillawong"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/kansaikaratewillawong"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Network + legal */}
        <div className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/kkw-logo.webp" alt="Kansai Karate Willawong" className="h-10 w-auto opacity-70" />
              <div className="text-center md:text-right">
                <p className="text-white/30 text-xs uppercase tracking-widest mb-1">
                  Other Kansai Karate Locations
                </p>
                <div className="flex flex-wrap justify-center md:justify-end gap-x-5 gap-y-1 text-xs text-white/50">
                  {[
                    ["Gold Coast", "https://kansaikarategoldcoast.com.au"],
                    ["Tarragindi", "https://kansaikaratetarragindi.com.au"],
                    ["Sumner Park / Springfield", "https://www.kansaikarate.com.au"],
                    ["Clayfield", "https://www.karateclayfield.com"],
                  ].map(([label, href]) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30"
              style={{ borderColor: "rgba(255,255,255,0.08)" }}
            >
              <p>© {new Date().getFullYear()} Kansai Karate Willawong. All rights reserved.</p>
              <a href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
