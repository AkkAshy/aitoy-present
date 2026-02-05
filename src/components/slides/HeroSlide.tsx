import { TargetIcon, RobotIcon, ChartIcon } from "../ui/Icons";

interface SlideProps {
  isActive: boolean;
}

export default function HeroSlide({ isActive }: SlideProps) {
  return (
    <section className="slide slide-hero">
      {/* Декоративные элементы фона */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl float-animation" />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl float-animation"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div
        className={`relative z-10 max-w-4xl mx-auto text-center ${
          isActive ? "fade-in-up" : "opacity-0"
        }`}
      >
        {/* Логотип/бейдж компании */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
          <span className="text-accent">IMAX IT Company</span>
          <span className="text-white/50">|</span>
          <span className="text-white/70">2025</span>
        </div>

        {/* Главный заголовок */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          <span className="gradient-text">TOY AI</span>
        </h1>

        {/* Подзаголовок */}
        <h2 className="text-2xl md:text-3xl text-white/80 mb-4 font-light">
          Monitoring Tizimi
        </h2>

        {/* Описание */}
        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
          Soliq organlari uchun to&apos;yxonalarni monitoring qilish platformasi
        </p>

        {/* Иконки возможностей */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="glass-card flex items-center gap-3 px-6 py-3">
            <TargetIcon className="w-6 h-6 text-accent" />
            <span className="text-white/80">Real vaqt monitoring</span>
          </div>
          <div className="glass-card flex items-center gap-3 px-6 py-3">
            <RobotIcon className="w-6 h-6 text-accent" />
            <span className="text-white/80">AI tahlil</span>
          </div>
          <div className="glass-card flex items-center gap-3 px-6 py-3">
            <ChartIcon className="w-6 h-6 text-accent" />
            <span className="text-white/80">Hisobotlar</span>
          </div>
        </div>

        {/* Kommersiya taklifi badge */}
        <div className="inline-block">
          <div className="glass-card glow-border px-8 py-4">
            <p className="text-accent text-lg font-semibold">
              KOMMERSIYA TAKLIFI
            </p>
          </div>
        </div>
      </div>

      {/* Стрелка вниз */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-8 h-8 text-white/50"
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
      </div>
    </section>
  );
}
