import { FileTextIcon, ChartIcon, DatabaseIcon, ClockIcon } from "../ui/Icons";

interface SlideProps {
  isActive: boolean;
}

const reportFeatures = [
  {
    Icon: FileTextIcon,
    title: "Batafsil hisobotlar",
    description: "Soliq organlari uchun to'liq hisobotlar avtomatik yaratiladi",
  },
  {
    Icon: ChartIcon,
    title: "Statistika va tahlil",
    description: "Mehmonlar soni, o'rtacha ko'rsatkichlar va trendlar",
  },
  {
    Icon: DatabaseIcon,
    title: "Ma'lumotlar arxivi",
    description: "Barcha tadbirlar tarixi saqlanadi va oson topiladi",
  },
  {
    Icon: ClockIcon,
    title: "Real vaqt ma'lumotlari",
    description: "Joriy holat va o'zgarishlar darhol ko'rinadi",
  },
];

export default function BookingSlide({ isActive }: SlideProps) {
  return (
    <section className="slide slide-booking">
      <div className="max-w-6xl mx-auto w-full">
        {/* Заголовок */}
        <div
          className={`text-center mb-12 ${
            isActive ? "fade-in-up" : "opacity-0"
          }`}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary-light text-sm mb-4">
            04 / HISOBOTLAR
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Hisobotlar va Tahlil</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Barcha ma&apos;lumotlar avtomatik yig&apos;iladi va tahlil qilinadi
          </p>
        </div>

        {/* Две колонки */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Левая колонка - визуализация отчёта */}
          <div className={`${isActive ? "fade-in-up stagger-1" : "opacity-0"}`}>
            <div className="glass-card glow-border p-6">
              {/* Мокап отчёта */}
              <div className="bg-white/5 rounded-lg p-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                  <span className="text-white/80 font-semibold">
                    Oylik hisobot
                  </span>
                  <span className="text-accent text-sm">Yanvar 2025</span>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-accent">156</div>
                    <div className="text-xs text-white/50">Jami tadbirlar</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-emerald-400">12,450</div>
                    <div className="text-xs text-white/50">Jami mehmonlar</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-purple-400">~80</div>
                    <div className="text-xs text-white/50">O&apos;rtacha/tadbir</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-amber-400">98%</div>
                    <div className="text-xs text-white/50">Aniqlik</div>
                  </div>
                </div>

                {/* Mini chart */}
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="text-xs text-white/50 mb-2">Haftalik dinamika</div>
                  <div className="flex items-end gap-1 h-16">
                    {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-primary to-accent rounded-t"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-white/30 mt-1">
                    <span>Du</span>
                    <span>Se</span>
                    <span>Ch</span>
                    <span>Pa</span>
                    <span>Ju</span>
                    <span>Sh</span>
                    <span>Ya</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Правая колонка - список функций */}
          <div className="space-y-4">
            {reportFeatures.map((feature, index) => (
              <div
                key={index}
                className={`glass-card flex items-start gap-4 hover:bg-white/10 transition-all ${
                  isActive ? `fade-in-up stagger-${index + 2}` : "opacity-0"
                }`}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <feature.Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
