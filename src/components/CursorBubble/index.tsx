"use client";

import { useEffect, useRef } from "react";

const CursorBubble = () => {
  const bubbleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bubble = bubbleRef.current;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!bubble || !finePointer.matches || reducedMotion.matches) return;

    let frame = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let activeCard: HTMLElement | null = null;
    let activePage: HTMLElement | null = null;

    const render = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      bubble.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      frame = window.requestAnimationFrame(render);
    };

    const handlePointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      bubble.dataset.visible = "true";

      const card = event.target instanceof Element
        ? event.target.closest<HTMLElement>("[data-cursor-reactive], [data-glow-card], main article:not([data-internal-scroll]), main form")
        : null;
      const page = event.target instanceof Element
        ? event.target.closest<HTMLElement>("main")
        : null;

      if (activeCard && activeCard !== card) {
        activeCard.removeAttribute("data-cursor-active");
      }

      if (card) {
        const bounds = card.getBoundingClientRect();
        card.style.setProperty("--card-cursor-x", `${event.clientX - bounds.left}px`);
        card.style.setProperty("--card-cursor-y", `${event.clientY - bounds.top}px`);
        card.setAttribute("data-cursor-active", "true");
      }

      if (activePage && activePage !== page) {
        activePage.removeAttribute("data-cursor-active");
      }

      if (page) {
        const pageBounds = page.getBoundingClientRect();
        page.setAttribute("data-page-glow", "true");
        page.style.setProperty("--card-cursor-x", `${event.clientX - pageBounds.left}px`);
        page.style.setProperty("--card-cursor-y", `${event.clientY - pageBounds.top}px`);
        page.setAttribute("data-cursor-active", "true");
      }

      activeCard = card;
      activePage = page;
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    frame = window.requestAnimationFrame(render);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.cancelAnimationFrame(frame);
      activeCard?.removeAttribute("data-cursor-active");
      activePage?.removeAttribute("data-cursor-active");
    };
  }, []);

  return <div ref={bubbleRef} className="cursor-bubble" aria-hidden="true" />;
};

export default CursorBubble;
