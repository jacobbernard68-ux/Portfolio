import type { PortfolioProject } from "./projectData";
import Image from "next/image";
import Link from "next/link";

export default function BarbershopCaseStudy({ project }: { project: PortfolioProject }) {
  const story = [["Challenge", project.challenge], ["Approach", project.approach], ["Outcome", project.outcome]];

  return <main className="mt-[88px] h-[calc(100svh-88px)] overflow-hidden bg-[#e2e8f2]/80 p-4 sm:px-8 md:mt-[120px] md:h-[calc(100svh-120px)] lg:px-[60px]">
    <article data-internal-scroll className="no-scrollbar mx-auto h-full max-w-[1440px] overflow-y-auto rounded-2xl bg-[#f2ece4] shadow-[0_12px_35px_rgba(31,41,55,0.1)] ring-1 ring-[#2f3e5c]/8">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col justify-between p-6 sm:p-9 lg:min-h-[560px] lg:p-12">
          <div>
            <Link href="/work" className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8a2f2f]">← From Concept to Experience</Link>
            <p className="mt-10 text-xs font-bold uppercase tracking-[0.18em] text-[#8a2f2f]">{project.number} · {project.type}</p>
            <h1 className="mt-4 max-w-xl text-4xl font-semibold tracking-[-0.05em] text-[#211914] sm:text-6xl">{project.title}</h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#685b52]">{project.summary}</p>
            <div className="mt-7 flex flex-wrap gap-2">{["Service discovery", "Booking calendar", "Responsive navigation"].map((item) => <span key={item} className="rounded-full border border-[#5a382e]/15 bg-white/55 px-3 py-1.5 text-[10px] font-semibold text-[#5a382e]">{item}</span>)}</div>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#dfcfbb] px-4 py-2 text-xs font-semibold text-[#51372e]">{project.status}</span>
            {project.liveHref && <Link href={project.liveHref} target="_blank" className="rounded-full bg-[#8f2228] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#6f171c]">{project.liveLabel} ↗</Link>}
          </div>
        </div>
        <div className="grid min-h-[360px] place-items-center bg-[#33251f] p-5 sm:p-8 lg:min-h-[560px] lg:p-10">
          <div data-glow-card className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/15 bg-[#392b25] shadow-[0_22px_55px_rgba(0,0,0,0.32)]">
            <div className="absolute inset-x-0 top-0 z-10 flex h-7 items-center gap-1.5 border-b border-black/10 bg-[#d9c5a8] px-3" aria-hidden="true"><span className="size-2 rounded-full bg-[#a95252]"/><span className="size-2 rounded-full bg-[#c99a62]"/><span className="size-2 rounded-full bg-[#78906f]"/></div>
            <Image src={project.heroImage ?? project.image} alt={project.imageAlt} fill priority sizes="(max-width: 1023px) 90vw, 50vw" className="object-contain object-center pt-7" />
          </div>
        </div>
      </div>

      <section className="grid gap-px bg-[#cdbba5] md:grid-cols-3">{story.map(([label, copy]) => <div key={label} className="bg-[#faf5ed] p-7 sm:p-9"><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8a2f2f]">{label}</p><p className="mt-4 text-sm leading-6 text-[#685b52]">{copy}</p></div>)}</section>

      <section className="grid gap-5 p-4 sm:grid-cols-2 sm:p-8" style={{ backgroundColor: "#f2ece4" }}>
        <article className="relative min-h-[320px] overflow-hidden rounded-xl" style={{ backgroundColor: "#2f231e" }}>
          <Image src="/vintage-barbershop/assets/images/hero.jpg" alt="Vintage Barbershop interior" fill priority sizes="(max-width: 639px) 100vw, 50vw" className="object-cover"/>
          <div className="absolute border border-[#fff0da]/55" style={{ left: 0, top: 0, maxWidth: "78%", padding: "14px 18px 15px 13px", backgroundColor: "rgba(216, 195, 165, 0.35)", borderRadius: "0 0 14px 0", borderLeft: "5px solid rgba(143, 34, 40, 0.82)", boxShadow: "0 10px 30px rgba(30, 18, 11, 0.18)", backdropFilter: "blur(1px)", color: "#2e1d14" }}><p className="text-[9px] font-bold uppercase tracking-[0.18em]" style={{ color: "#3f291d" }}>Landing experience</p><h2 className="mt-2 font-semibold leading-[1.08]" style={{ color: "#2e1d14", fontFamily: "Georgia, serif", fontSize: "clamp(12px, 1.35vw, 16px)" }}><span className="block whitespace-nowrap">Classic character</span><span className="block whitespace-nowrap">with a direct path to booking.</span></h2></div>
        </article>

        <article className="relative min-h-[320px] overflow-hidden rounded-xl" style={{ backgroundColor: "#161817" }}>
          <Image src="/vintage-barbershop/assets/images/beard-trim-v2.png" alt="Barber shaping a client's beard" fill priority sizes="(max-width: 639px) 100vw, 50vw" className="object-cover"/>
          <div className="absolute max-w-[62%] border border-[#fff0da]/55 p-5" style={{ right: 0, top: 0, backgroundColor: "rgba(216, 195, 165, 0.35)", borderRadius: "0 0 0 14px", borderRight: "5px solid rgba(143, 34, 40, 0.82)", boxShadow: "0 10px 30px rgba(30, 18, 11, 0.18)", backdropFilter: "blur(1px)", color: "#2e1d14" }}><p className="text-[9px] font-bold uppercase tracking-[0.18em]" style={{ color: "#3f291d" }}>Service detail</p><h2 className="mt-2 text-[24px] font-semibold leading-[1.08]" style={{ color: "#2e1d14", fontFamily: "Georgia, serif" }}>The craft stays at the center.</h2></div>
        </article>

        <article className="relative overflow-hidden rounded-xl p-5" style={{ alignSelf: "start", backgroundColor: "#dcc8aa" }}>
          <div className="absolute inset-x-0 top-0 h-1" style={{ background: "repeating-linear-gradient(90deg,#b22222 0 18px,#f4efe8 18px 36px,#3a2d28 36px 54px,#f4efe8 54px 72px)" }} aria-hidden="true"/>
          <div className="flex items-start justify-between gap-4 pt-1"><div><p className="text-[9px] font-bold uppercase tracking-[0.18em]" style={{ color: "#7a2c2c" }}>Style · Service discovery</p><h2 className="mt-2 text-xl font-semibold" style={{ color: "#2e211b" }}>A visual menu built around the result</h2></div><span className="grid size-10 shrink-0 place-items-center rounded-full border text-lg" style={{ borderColor: "rgba(58,45,40,.2)", backgroundColor: "rgba(244,239,232,.55)", color: "#8f2228" }} aria-hidden="true">✂</span></div>
          <div className="mt-4 gap-3" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>{[
            ["/vintage-barbershop/assets/images/classic-cut-v2.png", "Classic cut", "Clean finish", "$25"],
            ["/vintage-barbershop/assets/images/beard-trim-v2.png", "Beard trim", "Sharp detail", "$15"],
            ["/vintage-barbershop/assets/images/straight-razor-v2.png", "Straight razor", "Traditional care", "$30"],
            ["/vintage-barbershop/assets/images/fade-style-v2.png", "Fade + style", "Precision blend", "$35"],
            ["/vintage-barbershop/assets/images/kids-cut-v2.png", "Kids cut", "Comfort first", "$20"],
            ["/vintage-barbershop/assets/images/head-shave-v2.png", "Head shave", "Smooth finish", "$28"],
          ].map(([src, label, detail, price], index) => <div key={`${label}-${index}`} className="overflow-hidden rounded-lg border" style={{ backgroundColor: "#f4e9da", borderColor: "rgba(58,45,40,.14)" }}><div className="relative aspect-[4/3]"><Image src={src} alt={label} fill priority sizes="18vw" className="object-cover"/><span className="absolute right-2 top-2 grid size-6 place-items-center rounded-full text-[9px] font-bold text-white" style={{ backgroundColor: "rgba(58,45,40,.82)" }}>0{index + 1}</span></div><div className="px-2.5 py-2"><div className="flex items-start justify-between gap-1.5"><p className="text-[9px] font-bold leading-tight" style={{ color: "#3a2d28" }}>{label}</p><span className="text-[10px] font-bold" style={{ color: "#b22222" }}>{price}</span></div><p className="mt-1 text-[7px] uppercase tracking-[0.1em]" style={{ color: "#806f61" }}>{detail}</p></div></div>)}</div>
          <div className="mt-4 flex items-center justify-between border-t pt-3" style={{ borderColor: "rgba(58,45,40,.16)" }}><p className="text-[9px] font-semibold uppercase tracking-[0.12em]" style={{ color: "#675247" }}>Details open without leaving the service list</p><span className="rounded-full px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.12em] text-white" style={{ backgroundColor: "#3a2d28" }}>View service</span></div>
        </article>

        <div className="flex h-full flex-col gap-4">
        <article className="flex overflow-hidden rounded-xl p-5 text-white lg:h-[650px] lg:flex-col lg:justify-center" style={{ backgroundColor: "#b22222" }}>
          <div className="w-full">
          <div className="flex items-start justify-between gap-4"><div><p className="text-[9px] font-bold uppercase tracking-[0.18em]" style={{ color: "#d8c3a5" }}>Appointment flow</p><h2 className="mt-2 text-xl font-semibold" style={{ color: "#ffffff" }}>Pick a service, date, and time.</h2></div><span className="rounded-full px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em]" style={{ backgroundColor: "#951b1f", color: "#ffffff" }}>Interactive</span></div>
          <div className="mt-4 rounded-[18px] p-4 shadow-inner" style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)", color: "#ffffff", backdropFilter: "blur(6px)" }}>
            <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: "rgba(255,255,255,0.18)" }}><span className="text-sm font-bold">August 2026</span><span className="text-[10px] font-semibold" style={{ color: "#d8c3a5" }}>Choose a date</span></div>
            <div className="mt-3 text-center text-[9px]" style={{ display: "grid", gridTemplateColumns: "repeat(7, minmax(0, 1fr))", gap: "5px" }}>{["S","M","T","W","T","F","S",...Array.from({length:6},(_,i)=>`J${i+26}`),...Array.from({length:31},(_,i)=>`A${i+1}`),...Array.from({length:5},(_,i)=>`P${i+1}`)].map((day,index)=>{ const weekday = index < 7; const adjacent = day.startsWith("J") || day.startsWith("P"); const today = day === "A4"; const disabled = adjacent || ["A1","A2","A3","A9","A16","A23","A30"].includes(day); const label = weekday ? day : day.slice(1); return <span key={`${day}-${index}`} className="grid place-items-center rounded-lg font-bold" style={weekday ? { height: "28px", color: "rgba(255,255,255,0.85)" } : { height: "44px", backgroundColor: adjacent ? "rgba(255,255,255,0.035)" : "rgba(255,255,255,0.08)", color: disabled ? "rgba(216,195,165,0.42)" : "#ffffff", border: today ? "2px solid #d8c3a5" : "1px solid rgba(255,255,255,0.14)" }}>{label}</span>})}</div>
          </div>
          </div>
        </article>
        <aside className="relative flex min-h-[180px] flex-1 flex-col justify-center overflow-hidden rounded-xl border p-5" style={{ backgroundColor: "#f4e9da", borderColor: "rgba(58,45,40,.14)" }}>
          <div className="absolute inset-y-0 left-0 w-1.5" style={{ backgroundColor: "#b22222" }} aria-hidden="true"/>
          <div className="flex flex-wrap items-end justify-between gap-3"><div><p className="text-[9px] font-bold uppercase tracking-[0.18em]" style={{ color: "#8f2228" }}>Before you arrive</p><h3 className="mt-2 text-xl font-semibold" style={{ color: "#2e211b" }}>A smoother visit starts here.</h3></div><span className="rounded-full border px-3 py-1 text-[8px] font-bold uppercase tracking-[0.12em]" style={{ borderColor: "rgba(58,45,40,.16)", color: "#675247" }}>Good to know</span></div>
          <div className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-lg border" style={{ backgroundColor: "rgba(58,45,40,.12)", borderColor: "rgba(58,45,40,.12)" }}>{[["Walk-ins", "Welcome"], ["Appointment", "30–45 minutes"], ["Arrival", "5 minutes early"], ["Payment", "Cash + cards"]].map(([label, value]) => <div key={label} className="p-3" style={{ backgroundColor: "#fffaf3" }}><p className="text-[7px] font-bold uppercase tracking-[0.16em]" style={{ color: "#9a7663" }}>{label}</p><p className="mt-1 text-[11px] font-semibold" style={{ color: "#3a2d28" }}>{value}</p></div>)}</div>
        </aside>
        </div>
      </section>
    </article>
  </main>;
}
