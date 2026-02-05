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
    color: "from-blue-500 to-cyan-500",
    percentage: 12.5,
  },
  {
    phase: 2,
    title: "AI Model va Backend",
    duration: "6 hafta",
    Icon: RobotIcon,
    color: "from-purple-500 to-pink-500",
    percentage: 37.5,
  },
  {
    phase: 3,
    title: "Frontend",
    duration: "4 hafta",
    Icon: SmartphoneIcon,
    color: "from-amber-500 to-orange-500",
    percentage: 25,
  },
  {
    phase: 4,
    title: "Bron tizimi",
    duration: "2 hafta",
    Icon: CalendarIcon,
    color: "from-emerald-500 to-teal-500",
    percentage: 12.5,
  },
  {
    phase: 5,
    title: "Test va ishga tushirish",
    duration: "2 hafta",
    Icon: RocketIcon,
    color: "from-rose-500 to-red-500",
    percentage: 12.5,
  },
];

export default function TimelineSlide({ isActive }: SlideProps) {
  return (
    <section className="slide slide-timeline">
      <div className="max-w-6xl mx-auto w-full px-4">
        {/* Заголовок по центру */}
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

        {/* Двухколоночный лейаут - круговая диаграмма слева, список справа */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Левая колонка - круговая диаграмма */}
          <div
            className={`flex justify-center ${
              isActive ? "fade-in-up stagger-1" : "opacity-0"
            }`}
          >
            <div className="relative w-72 h-72">
              {/* Внешний круг - прогресс */}
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                {/* Базовый круг */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="8"
                />
                {/* Сегменты по проценту */}
                {timelineData.map((item, index) => {
                  const previousPercentage = timelineData
                    .slice(0, index)
                    .reduce((sum, i) => sum + i.percentage, 0);
                  const circumference = 2 * Math.PI * 45;
                  const offset = (previousPercentage / 100) * circumference;
                  const length = (item.percentage / 100) * circumference;

                  return (
                    <circle
                      key={index}
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke={`url(#gradient-${index})`}
                      strokeWidth="8"
                      strokeDasharray={`${length} ${circumference - length}`}
                      strokeDashoffset={-offset}
                      strokeLinecap="round"
                      className="transition-all duration-500"
                    />
                  );
                })}

                {/* Gradient definitions */}
                <defs>
                  <linearGradient
                    id="gradient-0"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                  <linearGradient
                    id="gradient-1"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                  <linearGradient
                    id="gradient-2"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#f97316" />
                  </linearGradient>
                  <linearGradient
                    id="gradient-3"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#14b8a6" />
                  </linearGradient>
                  <linearGradient
                    id="gradient-4"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#f43f5e" />
                    <stop offset="100%" stopColor="#ef4444" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Центральный текст */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold gradient-text">~4 oy</span>
                <span className="text-white/50 text-sm">Jami muddat</span>
              </div>
            </div>
          </div>

          {/* Правая колонка - список этапов */}
          <div className="space-y-3">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all ${
                  isActive ? `fade-in-up stagger-${index + 2}` : "opacity-0"
                }`}
              >
                {/* Номер этапа */}
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold flex-shrink-0`}
                >
                  {item.phase}
                </div>

                {/* Название */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-medium truncate">
                    {item.title}
                  </h3>
                </div>

                {/* Иконка */}
                <item.Icon className="w-5 h-5 text-white/40 flex-shrink-0" />

                {/* Длительность */}
                <div className="px-3 py-1 rounded-full bg-white/10 text-white/70 text-sm font-medium flex-shrink-0">
                  {item.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
