import { useState } from "react";

const initialForm = {
  intent: "business",
  fullName: "",
  email: "",
  company: "",
  message: "",
};

export default function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState(null);

  const updateField = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("Thanks! We will respond within 2 business days.");
    setForm(initialForm);
  };

  return (
    <section
      id="contact"
      className="bg-white py-20 transition dark:bg-slate-950"
    >
      <div className="section-container grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-500 dark:text-brand-300">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
            Tell us about your workflow, your challenges, and where you want to
            go next.
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            Whether you need a targeted Dynamo script, a full automation
            roadmap, or you want to join our team of specialists, drop us a
            note. We tailor every engagement around tangible metrics.
          </p>
          <div className="mt-8 grid gap-6 rounded-3xl border border-slate-200/60 bg-slate-50/70 p-6 text-sm text-slate-600 shadow-sm dark:border-slate-800/60 dark:bg-slate-900/70 dark:text-slate-300">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                Response Window
              </div>
              <div className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">
                48 hours
              </div>
              <p className="mt-1">
                You will hear from a human specialist with domain expertise.
              </p>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                Preferred Channels
              </div>
              <p className="mt-2">
                hello@bimcodesolutions.com · +1 (347) 555-2411 · Teams / Zoom
              </p>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-slate-200/60 bg-white/80 p-8 shadow-xl transition dark:border-slate-800/60 dark:bg-slate-950/80"
        >
          <fieldset className="grid grid-cols-2 gap-3 rounded-2xl border border-slate-200/70 bg-slate-50/50 p-2 text-sm font-semibold text-slate-500 dark:border-slate-800/70 dark:bg-slate-900/40 dark:text-slate-300">
            <label
              className={`cursor-pointer rounded-xl px-4 py-3 text-center transition ${
                form.intent === "business"
                  ? "bg-white text-brand-600 shadow-sm dark:bg-slate-950 dark:text-brand-300"
                  : ""
              }`}
            >
              <input
                type="radio"
                name="intent"
                value="business"
                checked={form.intent === "business"}
                onChange={(event) => updateField("intent", event.target.value)}
                className="sr-only"
              />
              Business Inquiry
            </label>
            <label
              className={`cursor-pointer rounded-xl px-4 py-3 text-center transition ${
                form.intent === "career"
                  ? "bg-white text-brand-600 shadow-sm dark:bg-slate-950 dark:text-brand-300"
                  : ""
              }`}
            >
              <input
                type="radio"
                name="intent"
                value="career"
                checked={form.intent === "career"}
                onChange={(event) => updateField("intent", event.target.value)}
                className="sr-only"
              />
              Careers
            </label>
          </fieldset>

          <div className="mt-6 grid gap-5">
            <div>
              <label
                htmlFor="fullName"
                className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400"
              >
                Full Name
              </label>
              <input
                required
                id="fullName"
                type="text"
                value={form.fullName}
                onChange={(event) => updateField("fullName", event.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none ring-0 transition focus:border-brand-400 focus:ring-2 focus:ring-brand-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-brand-300 dark:focus:ring-brand-500/40"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400"
              >
                Email
              </label>
              <input
                required
                id="email"
                type="email"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-brand-300 dark:focus:ring-brand-500/40"
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400"
              >
                {form.intent === "business" ? "Company / Studio" : "Portfolio or LinkedIn"}
              </label>
              <input
                id="company"
                type="text"
                value={form.company}
                onChange={(event) => updateField("company", event.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-brand-300 dark:focus:ring-brand-500/40"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400"
              >
                How can we help?
              </label>
              <textarea
                required
                id="message"
                rows="4"
                value={form.message}
                onChange={(event) => updateField("message", event.target.value)}
                placeholder="Tell us about your current workflow, the stack you use today, and the outcomes you want to accelerate."
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-brand-300 dark:focus:ring-brand-500/40"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 dark:bg-brand-500 dark:hover:bg-brand-400"
          >
            Send message
          </button>
          {status && (
            <p className="mt-4 text-center text-sm text-brand-600 dark:text-brand-300">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
