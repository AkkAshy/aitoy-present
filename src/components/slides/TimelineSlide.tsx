import {
  ClipboardIcon,
  RobotIcon,
  SmartphoneIcon,
  CalendarIcon,
  RocketIcon,
} from "../ui/Icons";

interface SlideProps {
  isActive: boolean;
}

const timelineData = [
  {
    phase: 1,
    title: "Tahlil va dizayn",
    duration: "2 hafta",
    Icon: ClipboardIcon,
  },
  {
    phase: 2,
    title: "AI Model va Backend",
    duration: "6 hafta",
    Icon: RobotIcon,
  },
  {
    phase: 3,
    title: "Frontend (Web + Mobile)",
    duration: "4 hafta",
    Icon: SmartphoneIcon,
  },
  {
    phase: 4,
    title: "Bron tizimi",
    duration: "2 hafta",
    Icon: CalendarIcon,
  },
  {
    phase: 5,
    title: "Test va ishga tushirish",
    duration: "2 hafta",
    Icon: RocketIcon,
  },
];

export default function TimelineSlide({ isActive }: SlideProps) {
  return (
    <section className="slide slide-timeline">
      <div className="max-w-5xl mx-auto w-full px-4">
        {/* Заголовок */}
        <div
          className={`text-center mb-8 ${
            isActive ? "fade-in-up" : "opacity-0"
          }`}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary-light text-sm mb-3">
            05 / LOYIHA MUDDATI
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">Ishlab chiqish bosqichlari</span>
          </h2>
        </div>

        {/* Горизонтальный timeline */}
        <div className={`${isActive ? "fade-in-up stagger-1" : "opacity-0"}`}>
          {/* Линия */}
          <div className="relative">
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary/30" />

            {/* Элементы */}
            <div className="grid grid-cols-5 gap-2">
              {timelineData.map((item, index) => (
                <div key={index} className="relative flex flex-col items-center">
                  {/* Точка */}
                  <div className="w-12 h-12 rounded-full bg-background border-2 border-accent flex items-center justify-center text-white font-bold z-10">
                    {item.phase}
                  </div>

                  {/* Карточка */}
                  <div className="mt-4 glass-card text-center w-full p-3">
                    <item.Icon className="w-5 h-5 text-accent mx-auto mb-2" />
                    <h3 className="text-sm font-semibold text-white mb-1 leading-tight">
                      {item.title}
                    </h3>
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent/20 text-accent text-xs">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" strokeWidth="2" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2" />
                      </svg>
                      <span>{item.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Итого */}
        <div
          className={`mt-8 text-center ${
            isActive ? "fade-in-up stagger-2" : "opacity-0"
          }`}
        >
          <div className="inline-block glass-card glow-border px-10 py-5">
            <p className="text-white/60 text-sm mb-1">JAMI MUDDAT</p>
            <p className="text-3xl font-bold gradient-text">~4 oy</p>
          </div>
        </div>
      </div>
    </section>
  );
}
