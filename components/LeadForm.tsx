"use client";

import { useState } from "react";

const ageGroups = [
  { value: "Cubs 3-4", label: "Cubs (3–4 yrs)" },
  { value: "Little Lions 5-7", label: "Little Lions (5–7 yrs)" },
  { value: "Juniors 8-12", label: "Juniors (8–12 yrs)" },
  { value: "Adult-Teens 13+", label: "Adult / Teens (13+ yrs)" },
];

export default function LeadForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);

  function toggleGroup(value: string) {
    setSelectedGroups((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      childName: data.get("childName"),
      phone: data.get("phone"),
      email: data.get("email"),
      ageGroups: selectedGroups,
      source: "kkw-landing",
      submitted_at: new Date().toISOString(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-8">
        <div className="text-4xl mb-4">🥋</div>
        <h3
          className="text-xl font-bold uppercase mb-3"
          style={{ fontFamily: "var(--font-open-sans-condensed)", color: "#dd3333" }}
        >
          You&apos;re In!
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          Thanks for registering! We&apos;ll be in touch shortly to confirm your
          introductory training sessions.
        </p>
        <p className="text-gray-500 text-xs mt-4">
          Questions? Call us on{" "}
          <a href="tel:0421366355" className="font-bold hover:underline" style={{ color: "#243673" }}>
            0421 366 355
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wide text-gray-700 mb-1">
            First Name <span style={{ color: "#dd3333" }}>*</span>
          </label>
          <input
            name="firstName"
            type="text"
            placeholder="John"
            required
            className="kkw-input"
            autoComplete="given-name"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wide text-gray-700 mb-1">
            Last Name <span style={{ color: "#dd3333" }}>*</span>
          </label>
          <input
            name="lastName"
            type="text"
            placeholder="Smith"
            required
            className="kkw-input"
            autoComplete="family-name"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wide text-gray-700 mb-1">
          Child&apos;s Full Name <span className="font-normal text-gray-400 normal-case">(if applicable)</span>
        </label>
        <input
          name="childName"
          type="text"
          placeholder="Name of Child"
          className="kkw-input"
          autoComplete="name"
        />
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wide text-gray-700 mb-1">
          Phone Number <span style={{ color: "#dd3333" }}>*</span>
        </label>
        <input
          name="phone"
          type="tel"
          placeholder="0400 000 000"
          required
          className="kkw-input"
          autoComplete="tel"
        />
      </div>

      <div>
        <p className="block text-xs font-bold uppercase tracking-wide text-gray-700 mb-2">
          Age Group <span className="font-normal text-gray-400 normal-case">(tick all that apply)</span>
        </p>
        <div className="grid grid-cols-2 gap-1">
          {ageGroups.map((g) => (
            <label
              key={g.value}
              className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 p-1 hover:text-gray-900"
            >
              <input
                type="checkbox"
                className="kkw-checkbox"
                checked={selectedGroups.includes(g.value)}
                onChange={() => toggleGroup(g.value)}
              />
              {g.label}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wide text-gray-700 mb-1">
          Email <span style={{ color: "#dd3333" }}>*</span>
        </label>
        <input
          name="email"
          type="email"
          placeholder="example@mail.com"
          required
          className="kkw-input"
          autoComplete="email"
        />
      </div>

      {status === "error" && (
        <p className="text-xs text-red-600">
          Something went wrong. Please try again or call{" "}
          <a href="tel:0421366355" className="underline">0421 366 355</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full py-4 font-bold uppercase tracking-widest text-white transition-colors text-sm disabled:opacity-60"
        style={{ background: status === "submitting" ? "#bb2222" : "#dd3333" }}
      >
        {status === "submitting" ? "Sending…" : "I Want to Learn Karate"}
      </button>

      <p className="text-xs text-gray-400 text-center">
        We will never sell or share your information.
      </p>
    </form>
  );
}
