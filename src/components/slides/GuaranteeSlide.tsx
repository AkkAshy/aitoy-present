import {
  ShieldIcon,
  WrenchIcon,
  BookIcon,
  LinkIcon,
  CameraIcon,
} from "../ui/Icons";

interface SlideProps {
  isActive: boolean;
}

const guarantees = [
  {
    Icon: ShieldIcon,
    title: "12 oylik bepul texnik qo'llab-quvvatlash",
    description: "Ishga tushirilgandan so'ng 1 yil davomida bepul yordam",
  },
  {
    Icon: WrenchIcon,
    title: "Bug fix va xavfsizlik yangilanishlari",
    description: "Barcha xatolar va xavfsizlik muammolari tezkor tuzatiladi",
  },
  {
    Icon: BookIcon,
    title: "Hujjatlashtirish va o'qitish",
    description: "To'liq hujjatlar va xodimlarni o'qitish xizmatlari",
  },
];

const notes = [
  {
    Icon: LinkIcon,
    text: "Soliq organlari uchun alohida boshqaruv paneli mavjud",
  },
  {
    Icon: CameraIcon,
    text: "Kameralar soni zal hajmiga qarab belgilanadi",
  },
];

export default function GuaranteeSlide({ isActive }: SlideProps) {
  return (
    <section className="slide slide-guarantee">
      <div className="max-w-5xl mx-auto w-full px-4">
        {/* Заголовок */}
        <div
          className={`text-center mb-10 ${
            isActive ? "fade-in-up" : "opacity-0"
          }`}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent text-sm mb-4">
            06 / KAFOLATLAR
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Kafolatlar va izohlar</span>
          </h2>
        </div>

        {/* Основной контент */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Гарантии - большие карточки */}
          {guarantees.map((item, index) => (
            <div
              key={index}
              className={`relative group ${
                isActive ? `fade-in-up stagger-${index + 1}` : "opacity-0"
              }`}
            >
              <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-accent/50 transition-all duration-300">
                {/* Номер */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>

                {/* Иконка */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.Icon className="w-8 h-8 text-white" />
                </div>

                {/* Контент */}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Нижняя секция - примечания + контакты */}
        <div
          className={`mt-10 grid md:grid-cols-2 gap-6 ${
            isActive ? "fade-in-up stagger-4" : "opacity-0"
          }`}
        >
          {/* Примечания */}
          <div className="space-y-3">
            <h4 className="text-white/50 text-sm uppercase tracking-wider mb-4">
              Muhim izohlar
            </h4>
            {notes.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10"
              >
                <item.Icon className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <p className="text-white/70 text-sm">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Контактная информация */}
          <div className="flex flex-col justify-center">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 border border-accent/30 text-center">
              <p className="text-white/50 text-sm mb-2">Tayyorlagan</p>
              <h3 className="text-3xl font-bold gradient-text mb-4">
                IMAX IT Company
              </h3>
              <div className="flex items-center justify-center gap-2 text-white/50 text-sm mb-6">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="18"
                    rx="2"
                    strokeWidth="2"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 2v4M8 2v4M3 10h18"
                  />
                </svg>
                <span>2025-yil, Yanvar</span>
              </div>

              {/* Телефон */}
              <a
                href="tel:+998912555260"
                className="flex items-center justify-center gap-2 text-xl font-semibold text-white hover:text-accent transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +998 91 255 52 60
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
