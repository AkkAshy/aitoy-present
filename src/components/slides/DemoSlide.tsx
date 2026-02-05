import Image from "next/image";

interface SlideProps {
  isActive: boolean;
}

export default function DemoSlide({ isActive }: SlideProps) {
  return (
    <section className="slide slide-features">
      <div className="max-w-7xl mx-auto w-full px-4">
        {/* Компактный заголовок */}
        <div
          className={`text-center mb-6 ${
            isActive ? "fade-in-up" : "opacity-0"
          }`}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent text-sm mb-2">
            03 / TIZIM KO&apos;RINISHI
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">Platforma interfeysi</span>
          </h2>
        </div>

        {/* Основной контент - большой скрин слева, описание справа */}
        <div className="grid lg:grid-cols-3 gap-6 items-center">
          {/* Большой скриншот */}
          <div
            className={`lg:col-span-2 ${
              isActive ? "fade-in-up stagger-1" : "opacity-0"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl shadow-accent/10">
              {/* Browser mockup header */}
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-4 py-3 flex items-center gap-2 border-b border-white/10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white/10 rounded-md px-4 py-1 text-white/50 text-sm text-center max-w-md mx-auto">
                    toyai.uz/dashboard
                  </div>
                </div>
              </div>

              {/* Screenshot */}
              <div className="relative aspect-[16/10]">
                <Image
                  src="/screenshots/dashboard.png"
                  alt="Dashboard - Bosh sahifa"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Правая панель с фичами */}
          <div
            className={`space-y-4 ${
              isActive ? "fade-in-up stagger-2" : "opacity-0"
            }`}
          >
            {/* Feature cards */}
            <div className="glass-card p-4 border-l-4 border-cyan-500">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-cyan-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-semibold">Real-time</h3>
              </div>
              <p className="text-white/60 text-sm">
                Jonli video oqimini real vaqtda tahlil qilish
              </p>
            </div>

            <div className="glass-card p-4 border-l-4 border-purple-500">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-semibold">Web + Mobile</h3>
              </div>
              <p className="text-white/60 text-sm">
                Barcha qurilmalarda ishlaydi
              </p>
            </div>

            <div className="glass-card p-4 border-l-4 border-amber-500">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-amber-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-semibold">AI Analytics</h3>
              </div>
              <p className="text-white/60 text-sm">
                Avtomatik hisoblash va tahlil
              </p>
            </div>

            {/* Второй скриншот маленький */}
            <div className="relative rounded-xl overflow-hidden border border-white/10">
              <div className="relative aspect-video">
                <Image
                  src="/screenshots/toykhana-detail.png"
                  alt="To'yxona monitoring"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-2 left-3">
                <span className="text-white/80 text-sm font-medium">
                  Monitoring sahifasi
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
