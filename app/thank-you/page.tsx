export default function ThankYouPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: "#5B7DB1" }}
    >
      <div className="max-w-lg text-center py-20">
        <div className="text-6xl mb-6">🥋</div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          You&apos;re all set!
        </h1>
        <p className="text-white/80 text-lg mb-6 leading-relaxed">
          Thanks for booking your free trial at Kansai Karate Willawong. We&apos;ll
          be in touch shortly to confirm your class time.
        </p>
        <p className="text-white/60 text-sm mb-10">
          Questions? Call us on{" "}
          <a
            href="tel:0421366355"
            className="text-white font-semibold hover:underline"
          >
            0421 366 355
          </a>{" "}
          or email{" "}
          <a
            href="mailto:info@kansaikaratewillawong.com.au"
            className="text-white font-semibold hover:underline"
          >
            info@kansaikaratewillawong.com.au
          </a>
          .
        </p>
        <a
          href="/"
          className="inline-block border-2 border-white text-white font-bold py-3 px-8 uppercase tracking-widest text-sm hover:bg-white hover:text-[#5B7DB1] transition-colors"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
