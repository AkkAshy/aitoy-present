import Image from "next/image";

interface SlideProps {
  isActive: boolean;
}

export default function DemoSlide({ isActive }: SlideProps) {
  return (
    <section className="slide slide-features">
      <div className="max-w-6xl mx-auto w-full px-4">
        {/* Заголовок */}
        <div
          className={`text-center mb-8 ${
            isActive ? "fade-in-up" : "opacity-0"
          }`}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent text-sm mb-3">
            03 / TIZIM KO&apos;RINISHI
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">Platforma interfeysi</span>
          </h2>
          <p className="text-white/60">Real vaqtda monitoring va boshqaruv</p>
        </div>

        {/* Скриншоты */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Dashboard */}
          <div
            className={`${isActive ? "fade-in-up stagger-1" : "opacity-0"}`}
          >
            <div className="glass-card p-2 glow-border">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/screenshots/dashboard.png"
                  alt="Dashboard - Bosh sahifa"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-3 text-center">
                <h3 className="text-lg font-semibold text-white">Bosh sahifa</h3>
                <p className="text-white/50 text-sm">Barcha to&apos;yxonalar ro&apos;yxati</p>
              </div>
            </div>
          </div>

          {/* Toykhana detail */}
          <div
            className={`${isActive ? "fade-in-up stagger-2" : "opacity-0"}`}
          >
            <div className="glass-card p-2 glow-border">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/screenshots/toykhana-detail.png"
                  alt="To'yxona monitoring"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-3 text-center">
                <h3 className="text-lg font-semibold text-white">Monitoring sahifasi</h3>
                <p className="text-white/50 text-sm">Kameralar va real vaqt tahlil</p>
              </div>
            </div>
          </div>
        </div>

        {/* Возможности */}
        <div
          className={`mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 ${
            isActive ? "fade-in-up stagger-3" : "opacity-0"
          }`}
        >
          <div className="glass-card text-center py-4">
            <div className="text-2xl font-bold text-accent mb-1">Real-time</div>
            <div className="text-white/60 text-sm">Jonli monitoring</div>
          </div>
          <div className="glass-card text-center py-4">
            <div className="text-2xl font-bold text-accent mb-1">AI</div>
            <div className="text-white/60 text-sm">Avtomatik hisoblash</div>
          </div>
          <div className="glass-card text-center py-4">
            <div className="text-2xl font-bold text-accent mb-1">Web + Mobile</div>
            <div className="text-white/60 text-sm">Barcha qurilmalar</div>
          </div>
          <div className="glass-card text-center py-4">
            <div className="text-2xl font-bold text-accent mb-1">24/7</div>
            <div className="text-white/60 text-sm">Uzluksiz ishlash</div>
          </div>
        </div>
      </div>
    </section>
  );
}
