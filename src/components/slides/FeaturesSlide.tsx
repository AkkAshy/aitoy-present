import {
  TableIcon,
  UsersIcon,
  ClockIcon,
  FileTextIcon,
  DatabaseIcon,
} from "../ui/Icons";

interface SlideProps {
  isActive: boolean;
}

const features = [
  {
    Icon: TableIcon,
    title: "Dasturxonlarni aniqlash",
    description:
      "Har bir to'yxonada nechta dasturxon yoyilganini avtomatik aniqlaydi",
    color: "from-purple-500 to-pink-500",
  },
  {
    Icon: UsersIcon,
    title: "Mehmonlarni hisoblash",
    description: "Har bir dasturxonga necha kishi o'tirganini aniq hisoblaydi",
    color: "from-cyan-500 to-blue-500",
  },
  {
    Icon: ClockIcon,
    title: "Real vaqt monitoring",
    description: "Haqiqiy mehmonlar sonini real vaqtda ko'rsatadi",
    color: "from-amber-500 to-orange-500",
  },
  {
    Icon: FileTextIcon,
    title: "Hisobotlar",
    description: "Soliq organlari uchun batafsil hisobotlar yaratadi",
    color: "from-emerald-500 to-teal-500",
  },
  {
    Icon: DatabaseIcon,
    title: "Arxivlash",
    description: "Barcha ma'lumotlarni xavfsiz arxivlaydi",
    color: "from-rose-500 to-red-500",
  },
];

export default function FeaturesSlide({ isActive }: SlideProps) {
  return (
    <section className="slide slide-features">
      <div className="max-w-6xl mx-auto w-full">
        {/* Двухколоночный лейаут - заголовок слева, карточки справа */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Левая колонка - заголовок и описание */}
          <div className="lg:col-span-2 lg:sticky lg:top-1/4">
            <div className={`${isActive ? "fade-in-up" : "opacity-0"}`}>
              <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent text-sm mb-4">
                01 / TIZIM VAZIFALARI
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="gradient-text">TOY AI</span>
                <br />
                <span className="text-white/80">platformasi</span>
              </h2>
              <p className="text-white/60 text-lg mb-8">
                Zamonaviy sun&apos;iy intellekt texnologiyalari yordamida
                to&apos;yxonalarni monitoring qilish
              </p>

              {/* Статистика */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-accent mb-1">99%</div>
                  <div className="text-sm text-white/50">Aniqlik darajasi</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-accent mb-1">24/7</div>
                  <div className="text-sm text-white/50">Uzluksiz ishlash</div>
                </div>
              </div>
            </div>
          </div>

          {/* Правая колонка - карточки */}
          <div className="lg:col-span-3 space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition-all duration-300 ${
                  isActive ? `fade-in-up stagger-${index + 1}` : "opacity-0"
                }`}
              >
                {/* Градиентная полоска слева */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${feature.color}`}
                />

                <div className="flex items-start gap-4 pl-4">
                  {/* Иконка */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                  >
                    <feature.Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Контент */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
