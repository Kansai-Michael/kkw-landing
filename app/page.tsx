// To wire up the Kihon booking form when Allan's account is ready:
// 1. Replace KIHON_BOOKING_URL below with the real Kihon embed URL
// 2. Run: git add app/page.tsx && git commit -m "Wire up Kihon booking form" && git push
const KIHON_BOOKING_URL = "KIHON_BOOKING_URL";
const KIHON_IS_LIVE = KIHON_BOOKING_URL !== "KIHON_BOOKING_URL";

const programs = [
  {
    name: "Cubs",
    age: "Ages 3–4",
    img: "/images/class1.jpg",
    description:
      "From listening skills to taking turns, Cubs (ages 3–4) is where karate starts. Your child will learn to interact in a social setting and build valuable life habits in a safe, fun environment.",
  },
  {
    name: "Little Lions",
    age: "Ages 5–7",
    img: "/images/class2.jpg",
    description:
      "There's nothing more satisfying than watching your 5–7 year old gain physical and social skills that will benefit them for life. Focus, self-confidence, and discipline — with a great workout.",
  },
  {
    name: "Juniors",
    age: "Ages 8–12",
    img: "/images/class3.jpg",
    description:
      "Real karate technique across three class levels — Beginner, Intermediate, and Advanced. Juniors (8–12) build mental and emotional skills alongside their karate practice.",
  },
  {
    name: "Adults & Teens",
    age: "Ages 13+",
    img: "/images/class4.jpg",
    description:
      "Teens and adults train together in a supportive, structured environment. Whether you're after fitness, self-defence, or a challenge that means something — our classes work for real people at any level.",
  },
];

const whyFeatures = [
  {
    icon: "🏯",
    title: "Genuine Traditional Karate",
    body: "We teach Shitoryu Shukokai — a classical Japanese karate system known for technical precision and practical self-defence. You're learning the real art.",
  },
  {
    icon: "🎽",
    title: "Part of Kansai Karate Academy",
    body: "A licensed dojo under Kansai Karate Academy, founded by Shihan Stephen Kelly. Our instructors are trained, graded, and accountable to a proven national network.",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Family-First Environment",
    body: "Every class is run with genuine care. Class times are designed to fit real family schedules without sacrificing training quality.",
  },
  {
    icon: "📈",
    title: "Clear Belt Progression",
    body: "Belt gradings give students visible milestones to work toward. Every student knows where they stand and what comes next — keeping kids and adults motivated.",
  },
  {
    icon: "🏅",
    title: "QKA & AKF Affiliated",
    body: "Affiliated with the Queensland Karate Association (QKA) and Australian Karate Federation (AKF), giving students access to official grading and competition pathways.",
  },
  {
    icon: "🤝",
    title: "Welcoming Community",
    body: "From your first class you'll feel the difference — a dojo that celebrates every student's progress and treats families as part of the team.",
  },
];

const testimonials = [
  {
    text: "Wanted to enrol my 3yo and am so happy I did — from the beginning we got a friendly warm welcome. The young instructors Hayden and Chrystle have a great passion to teach.",
    author: "Cubs parent, Willawong",
  },
  {
    text: "A wonderful, welcoming environment with kind and encouraging instructors. My kids have grown so much in confidence.",
    author: "Karate parent, Willawong",
  },
  {
    text: "A fantastic place to learn karate and make friends. The whole Reyes family make you feel at home from day one.",
    author: "Karate parent, Willawong",
  },
];

export default function LandingPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative flex items-center justify-center text-white"
        style={{
          minHeight: "100vh",
          backgroundImage: "url(/images/hero.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "rgba(10, 25, 70, 0.65)" }}
        />
        <div className="relative z-10 text-center px-4 flex flex-col items-center max-w-4xl mx-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.png"
            alt="Kansai Karate Willawong"
            className="w-28 md:w-36 mb-8"
          />
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-white max-w-3xl mx-auto leading-tight font-bold mb-5">
            Traditional Karate for Families in{" "}
            <span style={{ color: "#FFB800" }}>Willawong</span>
          </h1>
          <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-3 leading-relaxed">
            Led by{" "}
            <span className="font-semibold" style={{ color: "#FFB800" }}>
              Sensei Allan Reyes (Sandan — 3rd Dan)
            </span>
            , Kansai Karate Willawong is a warm, family-focused dojo where
            students of all ages learn real Shitoryu Shukokai karate.
          </p>
          <p className="text-white/70 mb-10 text-base">
            Unit 3, 14 Buttonwood Place, Willawong QLD 4110
          </p>
          <a
            href="#book-trial"
            className="inline-block font-bold text-lg px-12 py-4 rounded-sm uppercase tracking-widest transition-colors bg-[#FFB800] text-white hover:bg-[#E6A500]"
          >
            Book a Free Trial
          </a>
          <p className="text-white/50 text-sm mt-5">
            No experience needed. No commitment required.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50">
          <div className="w-px h-8 bg-white animate-pulse" />
          <p className="text-white text-xs uppercase tracking-widest">Scroll</p>
        </div>
      </section>

      {/* ── SOCIAL PROOF BAR ── */}
      <section
        className="py-5 px-4"
        style={{ background: "#FFB800" }}
      >
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-center">
          {[
            "Traditional Shitoryu Shukokai Karate",
            "Sandan Instructor — Sensei Allan Reyes",
            "Programs for Ages 3 and Up",
            "QKA & AKF Affiliated",
          ].map((item) => (
            <span
              key={item}
              className="text-sm font-bold uppercase tracking-wider"
              style={{ color: "#001040" }}
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section id="programs" className="py-16 px-4" style={{ background: "#5B7DB1" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-white/60 text-sm uppercase tracking-widest mb-3">
              Something for everyone
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Find the right class for your family
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              We have programs for every age from 3 years old through to adults.
              All skill levels welcome — beginners included.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {programs.map((p) => (
              <div
                key={p.name}
                className="relative rounded overflow-hidden flex flex-col"
                style={{ minHeight: "320px" }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${p.img})` }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "rgba(10,20,50,0.80)" }}
                />
                <div className="relative z-10 flex flex-col h-full p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {p.name}
                    <br />
                    <span className="text-lg font-normal text-white/70">
                      {p.age}
                    </span>
                  </h3>
                  <p className="text-white/75 text-sm mt-3 leading-relaxed flex-1">
                    {p.description}
                  </p>
                  <a
                    href="#book-trial"
                    className="mt-6 block text-center border border-white text-white font-bold py-3 hover:bg-white hover:text-[#5B7DB1] transition-colors uppercase tracking-widest text-sm"
                  >
                    Book a Free Trial →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY KANSAI KARATE ── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gray-400 text-sm uppercase tracking-widest mb-3">
              Traditional karate done right
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-snug">
              Why Willawong families choose Kansai Karate
            </h2>
            <hr className="border-gray-200 w-16 mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyFeatures.map((f) => (
              <div key={f.title} className="flex gap-4">
                <div className="text-3xl flex-shrink-0">{f.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT SENSEI ALLAN ── */}
      <section className="py-16 px-4" style={{ background: "#5B7DB1" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Photo */}
          <div
            className="rounded-lg overflow-hidden"
            style={{
              aspectRatio: "4/5",
              backgroundImage: "url(/images/instructor.png)",
              backgroundSize: "cover",
              backgroundPosition: "center top",
              minHeight: "380px",
            }}
          />

          {/* Bio */}
          <div>
            <p className="text-white/60 text-sm uppercase tracking-widest mb-3">
              Your instructor team
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-snug">
              Meet Sensei Allan Reyes and the Willawong team
            </h2>
            <hr className="border-white/30 mb-8 w-16" />

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-white mb-1 flex items-center gap-2">
                  <span>🥋</span> Sensei Allan Reyes — Sandan (3rd Dan)
                </h3>
                <p className="text-white/75 text-sm leading-relaxed">
                  Allan has trained and taught Shitoryu Shukokai karate for many years.
                  As a Sandan and licensed Kansai Karate Academy instructor, he brings
                  genuine expertise and a warm teaching style to every class.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-white mb-1 flex items-center gap-2">
                  <span>⭐</span> A Family Teaching Team
                </h3>
                <p className="text-white/75 text-sm leading-relaxed">
                  Sensei Allan is supported by Hayden Reyes (Shodan) and Chrystle Reyes
                  (Junior Shodan) — a dedicated instructing family who bring energy, care,
                  and technical skill to every session.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-white mb-1 flex items-center gap-2">
                  <span>🤝</span> Friendly Administration — Marie Reyes
                </h3>
                <p className="text-white/75 text-sm leading-relaxed">
                  Marie handles enrolments, enquiries, and day-to-day admin. You'll
                  always get a warm, prompt response.
                </p>
              </div>
            </div>

            <a
              href="#book-trial"
              className="inline-block mt-8 border-2 border-white text-white font-bold px-8 py-3 uppercase tracking-widest hover:bg-white hover:text-[#5B7DB1] transition-colors text-sm"
            >
              Book Your Free Trial
            </a>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-gray-400 text-sm uppercase tracking-widest mb-3">
              What our families say
            </p>
            <h2 className="text-3xl font-bold text-gray-900 leading-snug">
              Real families. Real results.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-gray-50 border border-gray-100 rounded-xl p-6 flex flex-col"
              >
                <div className="text-yellow-400 text-lg mb-3">★★★★★</div>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <p
                  className="mt-4 text-sm font-semibold"
                  style={{ color: "#5B7DB1" }}
                >
                  — {t.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOK A FREE TRIAL (Kihon form) ── */}
      <section id="book-trial" className="py-16 px-4" style={{ background: "#5B7DB1" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-white/60 text-sm uppercase tracking-widest mb-3">
              No experience needed
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Book Your Free Trial Class
            </h2>
            <p className="text-white/80 text-lg">
              Fill in your details below and we&apos;ll be in touch to confirm your
              free trial. No commitment, no pressure.
            </p>
          </div>

          <div
            className="rounded-xl overflow-hidden shadow-2xl"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)" }}
          >
            {KIHON_IS_LIVE ? (
              /* Live Kihon embed — swap KIHON_BOOKING_URL constant above to activate */
              <iframe
                src={KIHON_BOOKING_URL}
                width="100%"
                height="600"
                frameBorder="0"
                title="Book a free trial at Kansai Karate Willawong"
                className="w-full"
                style={{ minHeight: "600px" }}
              />
            ) : (
              /* Placeholder shown until Kihon is configured */
              <div className="p-8 md:p-12 text-center">
                <div className="text-5xl mb-6">📋</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Online Booking Coming Soon
                </h3>
                <p className="text-white/75 mb-8 leading-relaxed">
                  Our online booking form is being set up. In the meantime, reach
                  out directly — we&apos;d love to hear from you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:0421366355"
                    className="inline-flex items-center justify-center gap-3 bg-white font-bold py-4 px-8 rounded-sm uppercase tracking-widest text-sm transition-opacity hover:opacity-90"
                    style={{ color: "#5B7DB1" }}
                  >
                    <span>📞</span>
                    Call 0421 366 355
                  </a>
                  <a
                    href="mailto:info@kansaikaratewillawong.com.au"
                    className="inline-flex items-center justify-center gap-3 border-2 border-white text-white font-bold py-4 px-8 rounded-sm uppercase tracking-widest text-sm transition-colors hover:bg-white hover:text-[#5B7DB1]"
                  >
                    <span>✉️</span>
                    Email Us
                  </a>
                </div>
                <p className="text-white/50 text-xs mt-6">
                  We&apos;ll never sell or share your information. Privacy is important to us.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── LOCATION & CONTACT ── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-md" style={{ height: "360px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.1!2d152.9852!3d-27.5685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDM0JzA2LjYiUyAxNTLCsDU5JzA2LjciRQ!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kansai Karate Willawong location"
            />
          </div>

          {/* Contact details */}
          <div>
            <p className="text-gray-400 text-sm uppercase tracking-widest mb-3">
              Come and visit us
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Find us in Willawong
            </h2>
            <hr className="border-gray-200 mb-8 w-16" />

            <div className="space-y-5">
              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">📍</span>
                <div>
                  <p className="font-bold text-gray-800">Address</p>
                  <p className="text-gray-600 text-sm">
                    Unit 3, 14 Buttonwood Place
                    <br />
                    Willawong QLD 4110
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">📞</span>
                <div>
                  <p className="font-bold text-gray-800">Phone</p>
                  <a
                    href="tel:0421366355"
                    className="text-sm hover:underline"
                    style={{ color: "#5B7DB1" }}
                  >
                    0421 366 355
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">✉️</span>
                <div>
                  <p className="font-bold text-gray-800">Email</p>
                  <a
                    href="mailto:info@kansaikaratewillawong.com.au"
                    className="text-sm hover:underline"
                    style={{ color: "#5B7DB1" }}
                  >
                    info@kansaikaratewillawong.com.au
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">🕐</span>
                <div>
                  <p className="font-bold text-gray-800">Class Times</p>
                  <p className="text-gray-600 text-sm">
                    Mon, Wed, Thu, Fri: 4:30pm – 8:30pm
                    <br />
                    Saturday: 8:00am – 12:00pm
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">📘</span>
                <div>
                  <p className="font-bold text-gray-800">Follow us</p>
                  <a
                    href="https://www.facebook.com/kansaikaratewillawong"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:underline"
                    style={{ color: "#5B7DB1" }}
                  >
                    Facebook — Kansai Karate Willawong
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="py-10 px-4"
        style={{ background: "#001040", color: "rgba(255,255,255,0.6)" }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Top row */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.png"
              alt="Kansai Karate Willawong"
              className="h-12 w-auto opacity-90"
            />
            <div className="text-sm">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-2">
                Other Kansai Karate locations
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-1">
                <a
                  href="https://kansaikarategoldcoast.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Gold Coast
                </a>
                <a
                  href="https://kansaikaratetarragindi.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Tarragindi
                </a>
                <a
                  href="https://www.kansaikarate.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Sumner Park / Springfield
                </a>
                <a
                  href="https://www.karateclayfield.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Clayfield
                </a>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div
            className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
            style={{ borderColor: "rgba(255,255,255,0.1)" }}
          >
            <p>
              © {new Date().getFullYear()} Kansai Karate Willawong. All rights
              reserved.
            </p>
            <div className="flex gap-6">
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
