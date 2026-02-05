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
  },
  {
    Icon: UsersIcon,
    title: "Mehmonlarni hisoblash",
    description: "Har bir dasturxonga necha kishi o'tirganini aniq hisoblaydi",
  },
  {
    Icon: ClockIcon,
    title: "Real vaqt monitoring",
    description: "Haqiqiy mehmonlar sonini real vaqtda ko'rsatadi",
  },
  {
    Icon: FileTextIcon,
    title: "Hisobotlar",
    description: "Soliq organlari uchun batafsil hisobotlar yaratadi",
  },
  {
    Icon: DatabaseIcon,
    title: "Arxivlash",
    description: "Barcha ma'lumotlarni xavfsiz arxivlaydi",
  },
];

export default function FeaturesSlide({ isActive }: SlideProps) {
  return (
    <section className="slide slide-features">
      <div className="max-w-6xl mx-auto w-full">
        {/* Заголовок секции */}
        <div
          className={`text-center mb-12 ${
            isActive ? "fade-in-up" : "opacity-0"
          }`}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent text-sm mb-4">
            01 / TIZIM VAZIFALARI
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">TOY AI</span> platformasi
          </h2>
          <p className="text-white/60 text-lg">quyidagi vazifalarni bajaradi</p>
        </div>

        {/* Сетка возможностей */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`glass-card hover:bg-white/10 transition-all duration-300 group ${
                isActive ? `fade-in-up stagger-${index + 1}` : "opacity-0"
              }`}
            >
              {/* Иконка */}
              <div className="icon-circle group-hover:scale-110 transition-transform">
                <feature.Icon className="w-7 h-7 text-white" />
              </div>

              {/* Контент */}
              <h3 className="text-xl font-semibold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Дополнительная информация */}
        <div
          className={`mt-12 text-center ${
            isActive ? "fade-in-up stagger-5" : "opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-4 glass-card px-8 py-4">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
            <span className="text-white/80">
              Barcha funksiyalar real vaqtda ishlaydi
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
