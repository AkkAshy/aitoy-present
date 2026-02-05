import { CalendarIcon, MicIcon, MonitorIcon, RocketIcon } from "../ui/Icons";

interface SlideProps {
  isActive: boolean;
}

const bookingFeatures = [
  {
    Icon: CalendarIcon,
    title: "To'y sanasini oldindan bilish",
    description: "Qaysi kuni, qaysi to'yxonada to'y bo'lishini oldindan bilish",
  },
  {
    Icon: MicIcon,
    title: "Qo'shiqchi va tamadalar",
    description: "Qo'shiqchi va tamadalar jadvalini kuzatish",
  },
  {
    Icon: MonitorIcon,
    title: "Bron monitoring",
    description: "Barcha bron qilingan tadbirlarni monitoring qilish",
  },
  {
    Icon: RocketIcon,
    title: "Avtomatik ishga tushirish",
    description:
      "To'y sanasi oldindan tizimga kiritiladi va avtomatik monitoring boshlanadi",
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
            04 / QO&apos;SHIMCHA MODUL
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Bron Tizimi</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Qo&apos;shiqchi va Tamadalarni Bron qilish tizimi integratsiya
            qilingan
          </p>
        </div>

        {/* Две колонки */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Левая колонка - визуализация */}
          <div className={`${isActive ? "fade-in-up stagger-1" : "opacity-0"}`}>
            <div className="glass-card glow-border p-8">
              {/* Мокап календаря */}
              <div className="bg-white/5 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white/80 font-semibold">
                    Yanvar 2025
                  </span>
                  <div className="flex gap-2">
                    <button className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-white/60 hover:bg-white/20 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-white/60 hover:bg-white/20 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
                {/* Дни недели */}
                <div className="grid grid-cols-7 gap-1 text-center text-xs text-white/50 mb-2">
                  {["Du", "Se", "Ch", "Pa", "Ju", "Sh", "Ya"].map((day) => (
                    <div key={day}>{day}</div>
                  ))}
                </div>
                {/* Даты */}
                <div className="grid grid-cols-7 gap-1 text-center text-sm">
                  {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                    <div
                      key={day}
                      className={`p-2 rounded cursor-pointer transition-colors ${
                        [5, 12, 19, 26].includes(day)
                          ? "bg-accent/30 text-accent"
                          : [6, 13, 20, 27].includes(day)
                          ? "bg-primary/30 text-primary-light"
                          : "text-white/60 hover:bg-white/10"
                      }`}
                    >
                      {day}
                    </div>
                  ))}
                </div>
              </div>

              {/* Легенда */}
              <div className="flex gap-4 justify-center text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-accent/30" />
                  <span className="text-white/60">To&apos;y</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-primary/30" />
                  <span className="text-white/60">Bron</span>
                </div>
              </div>
            </div>
          </div>

          {/* Правая колонка - список функций */}
          <div className="space-y-4">
            {bookingFeatures.map((feature, index) => (
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
