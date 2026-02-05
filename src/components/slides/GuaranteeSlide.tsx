import {
  ShieldIcon,
  WrenchIcon,
  BookIcon,
  ClipboardIcon,
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
    Icon: ClipboardIcon,
    text: "TZ aniq bo'lmasa, narxlar o'zgarishi mumkin",
  },
  {
    Icon: LinkIcon,
    text: "Soliq integratsiyasi, qo'shimcha funksiyalar alohida kelishiladi",
  },
  {
    Icon: CameraIcon,
    text: "Kameralar soni zal hajmiga qarab belgilanadi",
  },
];

export default function GuaranteeSlide({ isActive }: SlideProps) {
  return (
    <section className="slide slide-guarantee">
      <div className="max-w-5xl mx-auto w-full">
        {/* Заголовок */}
        <div
          className={`text-center mb-12 ${
            isActive ? "fade-in-up" : "opacity-0"
          }`}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent text-sm mb-4">
            05 / KAFOLATLAR
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Kafolatlar va izohlar</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Гарантии */}
          <div>
            <h3
              className={`text-2xl font-semibold mb-6 text-white ${
                isActive ? "fade-in-up stagger-1" : "opacity-0"
              }`}
            >
              Biz kafolatlaymiz
            </h3>
            <div className="space-y-4">
              {guarantees.map((item, index) => (
                <div
                  key={index}
                  className={`glass-card glow-border flex items-start gap-4 hover:scale-[1.02] transition-transform ${
                    isActive ? `fade-in-up stagger-${index + 2}` : "opacity-0"
                  }`}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <item.Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-white/60 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Условие оплаты */}
            <div
              className={`mt-6 glass-card border-l-4 border-primary ${
                isActive ? "fade-in-up stagger-5" : "opacity-0"
              }`}
            >
              <p className="text-white/70">
                <span className="text-primary-light font-semibold">
                  To&apos;lov tartibi:
                </span>{" "}
                100% shartnoma imzolanganda amalga oshiriladi.
              </p>
            </div>
          </div>

          {/* Примечания */}
          <div>
            <h3
              className={`text-2xl font-semibold mb-6 text-white ${
                isActive ? "fade-in-up stagger-1" : "opacity-0"
              }`}
            >
              Muhim izohlar
            </h3>
            <div className="space-y-4">
              {notes.map((item, index) => (
                <div
                  key={index}
                  className={`glass-card flex items-center gap-4 ${
                    isActive ? `fade-in-up stagger-${index + 2}` : "opacity-0"
                  }`}
                >
                  <item.Icon className="w-6 h-6 text-accent flex-shrink-0" />
                  <p className="text-white/80">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Контактная информация */}
            <div
              className={`mt-8 glass-card glow-border text-center ${
                isActive ? "fade-in-up stagger-5" : "opacity-0"
              }`}
            >
              <div className="mb-4">
                <p className="text-white/60 text-sm mb-2">Tayyorlagan</p>
                <p className="text-2xl font-bold gradient-text">
                  IMAX IT Company
                </p>
              </div>
              <div className="flex items-center justify-center gap-2 text-white/60">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                <span>2025-yil, Yanvar</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div
          className={`mt-12 text-center ${
            isActive ? "fade-in-up stagger-5" : "opacity-0"
          }`}
        >
          <div className="inline-block">
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-full text-white font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-accent/30">
              Bog&apos;lanish
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
