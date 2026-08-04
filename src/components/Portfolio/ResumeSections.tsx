"use client";

import { type PointerEvent as ReactPointerEvent, useEffect, useRef, useState } from "react";

type Section = {
  id: string;
  title: string;
  label: string;
  preview: string;
  content: { heading: string; meta?: string; body: string }[];
};

const sections: Section[] = [
  {
    id: "summary",
    title: "Professional summary",
    label: "Profile",
    preview: "Frontend developer and UI designer combining enterprise systems experience with thoughtful, user-focused design.",
    content: [{ heading: "Frontend Developer · UI Designer", body: "Frontend Developer and UI Designer with 15 years of enterprise IT experience and a passion for building responsive, user-focused web applications. Skilled in HTML, CSS, JavaScript, React, and Figma, with experience creating modern interfaces that emphasize usability, accessibility, and maintainable code. I combine technical problem-solving with thoughtful design to create intuitive digital experiences." }],
  },
  {
    id: "experience",
    title: "Experience",
    label: "15 years",
    preview: "Enterprise systems, web platforms, Linux operations, automation, and technical support across five progressive roles.",
    content: [
      { heading: "Defense Intelligence Agency", meta: "Data Systems & IT Operations Manager · May 2021–July 2026", body: "Supported high-availability enterprise systems, improved workflows, managed hardware lifecycle processes, and translated complex technical issues across multidisciplinary teams." },
      { heading: "1st Information Operations Battalion", meta: "Senior IT Specialist · Oct 2018–May 2021", body: "Supported Linux-based operational systems, created Python automation, coordinated maintenance, and maintained platform reliability." },
      { heading: "21st Theater Sustainment Command", meta: "IT Specialist, Web Platforms · Aug 2015–Oct 2018", body: "Developed internal web platforms, improved navigation and information architecture, and created interface improvements adopted at higher organizational levels." },
      { heading: "51st Expeditionary Signal Battalion", meta: "Information Technology Specialist · Mar 2013–Aug 2015", body: "Developed internal websites, strengthened organizational communication, and supported enterprise IT infrastructure." },
      { heading: "716th Military Police Battalion", meta: "IT Support Technician · Mar 2011–Mar 2013", body: "Provided end-user support, maintained hardware and software, and resolved technical issues." },
    ],
  },
  {
    id: "skills",
    title: "Technical skills",
    label: "Toolkit",
    preview: "React, JavaScript, responsive CSS, Figma, accessibility, Git, Linux, Python, and enterprise troubleshooting.",
    content: [
      { heading: "Frontend", body: "HTML5, CSS3, JavaScript (ES6+), React, JSX, responsive web design, component-based architecture, Context API, state management, DOM manipulation, and Fetch API." },
      { heading: "UI / UX", body: "Figma, wireframing, typography, visual hierarchy, accessibility (WCAG), and information architecture." },
      { heading: "Tools", body: "Git, GitHub, VS Code, and Chrome DevTools." },
      { heading: "Additional", body: "Linux, Python, enterprise IT, technical troubleshooting, and process improvement." },
    ],
  },
  {
    id: "projects",
    title: "Projects",
    label: "Selected work",
    preview: "A React coffee shop, JavaScript barbershop, personal portfolio, and a complete Figma interface concept.",
    content: [
      { heading: "The Bean’s Place", meta: "React", body: "Responsive coffee shop application featuring reusable components, Context API shopping-cart state, interactive UI, and modern React practices." },
      { heading: "The Classic Cut", meta: "HTML · CSS · JavaScript", body: "Modern barbershop website demonstrating responsive layouts, DOM manipulation, event-driven interaction, semantic HTML, CSS Grid, Flexbox, and a mobile-first approach." },
      { heading: "Personal Portfolio", meta: "React", body: "A responsive portfolio showcasing frontend projects, UI case studies, and technical experience through a consistent design system." },
      { heading: "UI Design Concept", meta: "Figma", body: "A complete website interface emphasizing typography, layout systems, visual hierarchy, and responsive user experience." },
    ],
  },
  {
    id: "training",
    title: "Technical training",
    label: "Development",
    preview: "Hands-on study across semantic HTML, modern CSS, JavaScript, React, APIs, accessibility, and application architecture.",
    content: [
      { heading: "HTML & CSS", body: "Semantic HTML, responsive design, Flexbox, CSS Grid, accessibility, forms, and animations." },
      { heading: "JavaScript", body: "ES6+, DOM manipulation, event handling, Fetch API, asynchronous programming, objects, and arrays." },
      { heading: "React", body: "Components, JSX, props, state, hooks, Context API, routing, and component composition." },
    ],
  },
  {
    id: "strengths",
    title: "Core strengths",
    label: "Approach",
    preview: "Problem solving, technical communication, collaboration, continuous learning, and close attention to detail.",
    content: [{ heading: "How I work", body: "Frontend development, UI design, problem solving, technical communication, cross-functional collaboration, continuous learning, and attention to detail. My approach brings structure to complexity and keeps the user’s path clear." }],
  },
];

export default function ResumeSections() {
  const [active, setActive] = useState<Section | null>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  const trackGlow = (event: ReactPointerEvent<HTMLElement>) => {
    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    const localX = event.clientX - bounds.left;
    const localY = event.clientY - bounds.top;
    const horizontal = (localX / bounds.width) * 2 - 1;
    const vertical = (localY / bounds.height) * 2 - 1;
    card.style.setProperty("--card-cursor-x", `${localX}px`);
    card.style.setProperty("--card-cursor-y", `${localY}px`);
    card.style.transform = `perspective(900px) rotateX(${-vertical * 2.5}deg) rotateY(${horizontal * 2.5}deg)`;
    card.style.scale = "1.003";
    card.style.boxShadow = `${-horizontal * 4}px ${-vertical * 4 + 8}px 26px rgba(15, 23, 42, 0.18)`;
    card.setAttribute("data-cursor-active", "true");
  };

  const hideGlow = (event: ReactPointerEvent<HTMLElement>) => {
    const card = event.currentTarget;
    card.removeAttribute("data-cursor-active");
    card.style.removeProperty("transform");
    card.style.removeProperty("scale");
    card.style.removeProperty("box-shadow");
  };

  useEffect(() => {
    if (!active) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    const close = (event: KeyboardEvent) => event.key === "Escape" && setActive(null);
    window.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", close);
    };
  }, [active]);

  return (
    <>
      <div className="grid h-full min-h-0 gap-3 sm:grid-cols-2">
        {sections.map((section, index) => (
          <button
            key={section.id}
            data-cursor-reactive={[1, 2, 5].includes(index) ? "dark" : "light"}
            onPointerMove={trackGlow}
            onPointerLeave={hideGlow}
            type="button"
            onClick={() => setActive(section)}
            aria-haspopup="dialog"
            className={`group relative min-h-[150px] overflow-hidden rounded-xl p-5 text-left transition hover:shadow-[0_10px_24px_rgba(15,23,42,0.13)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f2937] focus-visible:ring-offset-2 ${[1, 2, 5].includes(index) ? "bg-[#1f2937] text-white" : "bg-[#b8cadc] text-[#111]"}`}
          >
            <div className="flex items-center justify-between gap-3">
              <span className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${[1, 2, 5].includes(index) ? "text-white/55" : "text-slate-600"}`}>{section.label}</span>
              <span className="text-xs font-semibold opacity-65">Open ↗</span>
            </div>
            <h2 className="mt-3 text-xl font-semibold tracking-[-0.025em]">{section.title}</h2>
            <p className={`mt-2 text-xs leading-5 ${[1, 2, 5].includes(index) ? "text-white/65" : "text-slate-700"}`}>{section.preview}</p>
            <div className={`pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t ${[1, 2, 5].includes(index) ? "from-[#1f2937]" : "from-[#b8cadc]"} to-transparent`} />
          </button>
        ))}
      </div>

      {active && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#111827]/65 p-4 backdrop-blur-sm" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setActive(null)}>
          <section role="dialog" aria-modal="true" aria-labelledby="resume-section-title" className="max-h-[88svh] w-full max-w-[820px] overflow-y-auto rounded-2xl bg-[#e2e8f2] p-5 shadow-2xl sm:p-8">
            <div className="sticky top-0 z-10 flex items-start justify-between gap-6 bg-[#e2e8f2] pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#607795]">{active.label}</p>
                <h2 id="resume-section-title" className="mt-2 text-3xl font-semibold tracking-[-0.035em] text-[#111] sm:text-4xl">{active.title}</h2>
              </div>
              <button ref={closeButton} type="button" onClick={() => setActive(null)} aria-label={`Close ${active.title}`} className="grid size-11 shrink-0 place-items-center rounded-full bg-[#1f2937] text-2xl text-white transition hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f2937] focus-visible:ring-offset-2">×</button>
            </div>
            <div className="space-y-3">
              {active.content.map((item, index) => {
                const activeCardIndex = sections.findIndex((section) => section.id === active.id);
                const cardIsDark = [1, 2, 5].includes(activeCardIndex);
                const isDark = index % 2 === 0 ? !cardIsDark : cardIsDark;

                return (
                  <article
                    key={`${item.heading}-${item.meta ?? ""}`}
                    data-cursor-reactive={isDark ? "dark" : "light"}
                    onPointerMove={trackGlow}
                    onPointerLeave={hideGlow}
                    className={`rounded-xl p-5 shadow-[0_5px_18px_rgba(15,23,42,0.06)] ${isDark ? "bg-[#1f2937] text-white" : "bg-[#b8cadc] text-[#111]"}`}
                  >
                    <h3 className="text-lg font-semibold">{item.heading}</h3>
                    {item.meta && <p className={`mt-1 text-xs font-semibold ${isDark ? "text-[#b8cadc]" : "text-[#526985]"}`}>{item.meta}</p>}
                    <p className={`mt-3 text-sm leading-6 ${isDark ? "text-white/70" : "text-slate-700"}`}>{item.body}</p>
                  </article>
                );
              })}
            </div>
          </section>
        </div>
      )}
    </>
  );
}
