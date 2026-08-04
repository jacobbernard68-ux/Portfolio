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
        ? event.target.closest<HTMLElement>("[data-cursor-reactive]")
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

      activeCard = card;
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    frame = window.requestAnimationFrame(render);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.cancelAnimationFrame(frame);
      activeCard?.removeAttribute("data-cursor-active");
    };
  }, []);

  return <div ref={bubbleRef} className="cursor-bubble" aria-hidden="true" />;
};

export default CursorBubble;
