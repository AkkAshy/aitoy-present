"use client";

import { useState, useEffect, useCallback } from "react";
import HeroSlide from "./slides/HeroSlide";
import FeaturesSlide from "./slides/FeaturesSlide";
import BookingSlide from "./slides/BookingSlide";
import PricingSlide from "./slides/PricingSlide";
import TimelineSlide from "./slides/TimelineSlide";
import GuaranteeSlide from "./slides/GuaranteeSlide";

const TOTAL_SLIDES = 6;

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Функция перехода на слайд
  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating || index < 0 || index >= TOTAL_SLIDES) return;
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 600);
    },
    [isAnimating]
  );

  // Следующий слайд
  const nextSlide = useCallback(() => {
    if (currentSlide < TOTAL_SLIDES - 1) {
      goToSlide(currentSlide + 1);
    }
  }, [currentSlide, goToSlide]);

  // Предыдущий слайд
  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  }, [currentSlide, goToSlide]);

  // Обработка клавиатуры
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft" || e.key === "Backspace") {
        e.preventDefault();
        prevSlide();
      } else if (e.key === "Home") {
        e.preventDefault();
        goToSlide(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goToSlide(TOTAL_SLIDES - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, goToSlide]);

  // Обработка свайпов на мобильных
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) nextSlide();
        else prevSlide();
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [nextSlide, prevSlide]);

  // Обработка скролла мышью
  useEffect(() => {
    let lastWheelTime = 0;
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const now = Date.now();
      // Ограничение частоты срабатывания
      if (now - lastWheelTime < 800) return;

      if (e.deltaY > 0 || e.deltaX > 0) {
        nextSlide();
        lastWheelTime = now;
      } else if (e.deltaY < 0 || e.deltaX < 0) {
        prevSlide();
        lastWheelTime = now;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [nextSlide, prevSlide]);

  // Прогресс бар
  const progress = ((currentSlide + 1) / TOTAL_SLIDES) * 100;

  return (
    <div className="relative overflow-hidden">
      {/* Прогресс бар */}
      <div className="progress-bar" style={{ width: `${progress}%` }} />

      {/* Навигационные точки */}
      <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {Array.from({ length: TOTAL_SLIDES }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`nav-dot ${currentSlide === index ? "active" : ""}`}
            aria-label={`Слайд ${index + 1}`}
          />
        ))}
      </nav>

      {/* Контейнер слайдов */}
      <div
        className="slides-container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <HeroSlide isActive={currentSlide === 0} />
        <FeaturesSlide isActive={currentSlide === 1} />
        <BookingSlide isActive={currentSlide === 2} />
        <PricingSlide isActive={currentSlide === 3} />
        <TimelineSlide isActive={currentSlide === 4} />
        <GuaranteeSlide isActive={currentSlide === 5} />
      </div>

      {/* Навигация стрелками */}
      <button
        onClick={prevSlide}
        disabled={currentSlide === 0}
        className="fixed left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all"
        aria-label="Oldingi slayd"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        disabled={currentSlide === TOTAL_SLIDES - 1}
        className="fixed right-20 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all"
        aria-label="Keyingi slayd"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>


      {/* Номер слайда */}
      <div className="fixed bottom-8 right-8 text-white/50 text-sm font-mono z-50">
        {currentSlide + 1} / {TOTAL_SLIDES}
      </div>
    </div>
  );
}
