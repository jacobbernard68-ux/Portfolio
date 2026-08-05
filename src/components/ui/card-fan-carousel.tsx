"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";

export interface CardItem { imgUrl: string; alt?: string; linkUrl?: string; label?: string; imageFit?: "cover" | "contain"; imageBackground?: string }
interface Props { cards: CardItem[] }

const MAX_VISIBLE = 7;
const HALF = 3;
const positions = [
  { rot: -21, scale: .7756, x: -30, y: 7.3, zIndex: 1 }, { rot: -14, scale: .8498, x: -22, y: 4, zIndex: 2 },
  { rot: -7, scale: .9346, x: -11, y: 1.3, zIndex: 3 }, { rot: 0, scale: 1, x: 0, y: 0, zIndex: 10 },
  { rot: 7, scale: .9346, x: 11, y: 1.3, zIndex: 3 }, { rot: 14, scale: .8498, x: 22, y: 4, zIndex: 2 },
  { rot: 21, scale: .7756, x: 30, y: 7.3, zIndex: 1 },
];

const widthMultiplier = (width: number) => width < 480 ? .28 : width < 640 ? .38 : width < 768 ? .5 : width < 1024 ? .75 : 1;
const heightMultiplier = (width: number) => {
  const ideal = (width < 480 ? 22 : width < 640 ? 26 : width < 768 ? 28 : width < 1024 ? 34 : 38) * 16;
  return Math.min(1, window.innerHeight * .7 / ideal);
};
function slotPosition(total: number, slot: number) {
  if (total >= MAX_VISIBLE) return positions[slot];
  const center = (total - 1) / 2;
  const distance = total > 1 ? (slot - center) / Math.max(center, .5) : 0;
  const compact = total <= 4;
  const x = compact ? distance * 16.5 : total === 5 ? (Math.abs(distance) > .75 ? Math.sign(distance) * 23 : distance * 26) : distance * 30;
  const y = total === 5 && Math.abs(distance) > .75 ? 5.7 : Math.abs(distance) ** 2 * (compact ? 3.5 : 7.3);
  return {
    rot: distance * (compact ? 12 : 21),
    scale: 1 - (compact ? .1 : .2244) * Math.abs(distance) ** 2,
    x,
    y,
    zIndex: 10 - Math.abs(slot - center),
  };
}

export default function CardFanCarousel({ cards }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animating = useRef(false);
  const entered = useRef(false);
  const direction = useRef<"left" | "right" | null>(null);
  const previous = useRef<Set<number>>(new Set());
  const total = cards.length;
  const paginated = total > MAX_VISIBLE;
  const [centerIndex, setCenterIndex] = useState(paginated ? HALF : Math.floor((total - 1) / 2));

  const visibleMap = useCallback((center: number) => {
    const map = new Map<number, number>();
    if (!paginated) cards.forEach((_, index) => map.set(index, index));
    else for (let slot = 0; slot < MAX_VISIBLE; slot++) map.set(((center + slot - HALF) % total + total) % total, slot);
    return map;
  }, [cards, paginated, total]);

  const cycle = useCallback((side: "left" | "right") => {
    if (animating.current || !paginated) return;
    animating.current = true; direction.current = side;
    setCenterIndex((current) => side === "right" ? (current + 1) % total : (current - 1 + total) % total);
  }, [paginated, total]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !total) return;
    const elements = Array.from(container.querySelectorAll<HTMLElement>(".fan-card"));
    const map = visibleMap(centerIndex);
    const first = !entered.current;
    const wm = widthMultiplier(window.innerWidth), hm = heightMultiplier(window.innerWidth), count = paginated ? MAX_VISIBLE : total;
    let finished = 0;
    const done = () => { if (++finished >= map.size) { animating.current = false; entered.current = true; } };
    if (first) animating.current = true;
    elements.forEach((element, index) => {
      const slot = map.get(index), wasVisible = previous.current.has(index);
      if (slot !== undefined) {
        const pos = slotPosition(count, slot);
        const target = { x: `${pos.x * wm}rem`, y: `${pos.y * hm}rem`, rotation: pos.rot, scale: pos.scale, opacity: 1, zIndex: pos.zIndex };
        if (first) { gsap.set(element, { x: 0, y: `${12 * hm}rem`, scale: .5, opacity: 0 }); gsap.to(element, { ...target, duration: 1.2, ease: "elastic.out(1.05,.78)", delay: .2 + slot * .06, onComplete: done }); }
        else if (!wasVisible) { const entering = direction.current === "right" ? 40 : -40; gsap.set(element, { x: `${entering}rem`, rotation: direction.current === "right" ? 30 : -30, scale: .5, opacity: 0 }); gsap.to(element, { ...target, duration: .6, ease: "power2.out", onComplete: done }); }
        else gsap.to(element, { ...target, duration: .5, ease: "power2.out", onComplete: done });
      } else if (wasVisible) gsap.to(element, { x: `${direction.current === "right" ? -40 : 40}rem`, opacity: 0, scale: .5, duration: .4, zIndex: 0 });
      else if (first) gsap.set(element, { opacity: 0, scale: .3, zIndex: 0 });
    });
    previous.current = new Set(map.keys());
    const restoreCard = (element: HTMLElement, index: number) => {
      const slot = map.get(index);
      if (slot === undefined) return;
      const pos = slotPosition(count, slot);
      gsap.to(element, { y: `${pos.y * heightMultiplier(window.innerWidth)}rem`, scale: pos.scale, zIndex: pos.zIndex, duration: .35, ease: "power2.out" });
    };
    const hoverHandlers = elements.map((element, index) => {
      const slot = map.get(index);
      const enter = () => { if (slot === undefined || animating.current) return; elements.forEach((card, cardIndex) => { if (card !== element) restoreCard(card, cardIndex); }); const pos = slotPosition(count, slot); gsap.to(element, { y: `${(pos.y - 2.5) * heightMultiplier(window.innerWidth)}rem`, scale: pos.scale * 1.08, zIndex: 100, duration: .45, ease: "elastic.out(1,.75)" }); };
      const leave = () => restoreCard(element, index);
      element.addEventListener("mouseenter", enter);
      element.addEventListener("mouseleave", leave);
      element.addEventListener("focusin", enter);
      element.addEventListener("focusout", leave);
      return { element, enter, leave };
    });
    const reset = () => elements.forEach((element, index) => { const slot = map.get(index); if (slot === undefined) return; const pos = slotPosition(count, slot); gsap.to(element, { x: `${pos.x * widthMultiplier(window.innerWidth)}rem`, y: `${pos.y * heightMultiplier(window.innerWidth)}rem`, rotation: pos.rot, scale: pos.scale, zIndex: pos.zIndex, duration: .4 }); });
    container.addEventListener("mouseleave", reset);
    return () => { hoverHandlers.forEach(({ element, enter, leave }) => { element.removeEventListener("mouseenter", enter); element.removeEventListener("mouseleave", leave); element.removeEventListener("focusin", enter); element.removeEventListener("focusout", leave); }); container.removeEventListener("mouseleave", reset); };
  }, [centerIndex, paginated, total, visibleMap]);

  if (!total) return null;
  const chevron = (side: "left" | "right") => <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points={side === "left" ? "15 18 9 12 15 6" : "9 18 15 12 9 6"}/></svg>;
  const arrow = "grid size-11 place-items-center rounded-full border border-black/10 bg-white/65 text-[#405671] shadow-lg backdrop-blur-xl transition hover:border-black/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#405671]";
  return <section className="relative z-20 flex w-full flex-col items-center px-4 py-4"><div className="flex w-full max-w-[90rem] justify-center"><div ref={containerRef} className="fan-layout relative flex w-full max-w-[80rem] items-center justify-center">{cards.map((card, index) => { const image = <div className="relative size-full overflow-hidden" style={{ backgroundColor: card.imageBackground }}><img src={card.imgUrl} loading="lazy" alt={card.alt || `Card ${index + 1}`} className="absolute inset-0 size-full" style={{ objectFit: card.imageFit ?? "cover", objectPosition: "center" }}/>{card.label && <div className="absolute inset-x-0 top-0 z-20 border-b border-white/25 bg-[#172334]/82 px-4 py-3 text-white shadow-sm backdrop-blur-md"><p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/60">Featured</p><h2 className="mt-1 text-sm font-semibold tracking-[-0.02em] sm:text-base">{card.label}</h2></div>}</div>; return card.linkUrl ? <a key={`${card.imgUrl}-${index}`} href={card.linkUrl} target={card.linkUrl.startsWith("http") ? "_blank" : "_self"} rel="noopener noreferrer" className="fan-card block cursor-pointer">{image}</a> : <div key={`${card.imgUrl}-${index}`} className="fan-card">{image}</div>; })}</div></div>{paginated && <div className="z-30 mt-4 flex items-center gap-4"><button className={arrow} onClick={() => cycle("left")} aria-label="Previous card">{chevron("left")}</button><div className="flex gap-2" aria-hidden="true">{cards.map((_, index) => <span key={index} className={`size-2 rounded-full ${index === centerIndex ? "scale-125 bg-[#2f3e5c]" : "bg-[#2f3e5c]/20"}`}/>)}</div><button className={arrow} onClick={() => cycle("right")} aria-label="Next card">{chevron("right")}</button></div>}</section>;
}
