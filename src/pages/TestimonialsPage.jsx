import { testimonials } from "../data/content.js";
import ContactSection from "../sections/ContactSection.jsx";

export default function TestimonialsPage() {
  return (
    <>
      <section className="border-b border-slate-200/60 bg-white py-20 dark:border-slate-800/60 dark:bg-slate-950">
        <div className="section-container">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-500 dark:text-brand-300">
            Testimonials
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900 dark:text-white md:text-5xl">
            Proof from the people using and building our automations every day.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-600 dark:text-slate-300">
            Crafting thoughtful automation is human work. Hear from clients who
            scaled faster and BIMCode teammates who make it real. Each insight
            reflects our obsession with clarity, measurable outcomes, and
            empowering design teams.
          </p>
        </div>
      </section>

      <section className="bg-slate-50/60 py-16 dark:bg-slate-900/20">
        <div className="section-container grid gap-10 lg:grid-cols-2">
          <TestimonialsGroup
            heading="Client Partners"
            description="Leaders who trusted BIMCode Solutions to modernize and automate critical BIM workflows."
            items={testimonials.clients}
          />
          <TestimonialsGroup
            heading="Inside BIMCode"
            description="Voices from the engineers and designers creating the automation experiences."
            items={testimonials.team}
          />
        </div>
      </section>
      <ContactSection />
    </>
  );
}

function TestimonialsGroup({ heading, description, items }) {
  return (
    <div className="flex flex-col gap-6 rounded-3xl border border-slate-200/70 bg-white p-8 shadow-md dark:border-slate-800/60 dark:bg-slate-950">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          {heading}
        </h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          {description}
        </p>
      </div>
      <div className="flex flex-col gap-6">
        {items.map((item) => (
          <figure
            key={item.name}
            className="rounded-3xl border border-slate-200/70 bg-slate-50/70 p-6 dark:border-slate-700/70 dark:bg-slate-900/70"
          >
            <blockquote className="text-base leading-relaxed text-slate-700 dark:text-slate-200">
              “{item.quote}”
            </blockquote>
            <figcaption className="mt-4 text-sm text-slate-500 dark:text-slate-300">
              <div className="font-semibold text-slate-900 dark:text-white">
                {item.name}
              </div>
              <div>{item.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
