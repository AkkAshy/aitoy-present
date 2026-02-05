import { CheckCircleIcon } from "../ui/Icons";

interface SlideProps {
  isActive: boolean;
}

const formatPrice = (price: number) => {
  return price.toLocaleString("uz-UZ");
};

const platformItems = [
  "Web Dashboard (Admin panel)",
  "Mobile App (iOS + Android)",
  "AI Model",
  "Backend + Database",
  "Bron tizimi",
  "Hisobotlar moduli",
];

const pricingData = [
  {
    name: "TOY AI Platformasi",
    price: 130000000,
    note: "Bir martalik",
    highlight: true,
  },
  {
    name: "Server (Variant A: Sotib olish)",
    price: 52000000,
    note: "Bir martalik",
  },
  {
    name: "Server (Variant B: Arenda)",
    price: 12000000,
    note: "Yillik to'lov",
  },
  {
    name: "Har bir kamera uchun sozlash",
    price: 1000000,
    note: "Har bir kamera",
  },
];

const scaleData = [
  { venues: 10, cameras: 60, setup: 60 },
  { venues: 25, cameras: 150, setup: 150 },
  { venues: 50, cameras: 300, setup: 300 },
  { venues: 100, cameras: 600, setup: 600 },
];

export default function PricingSlide({ isActive }: SlideProps) {
  return (
    <section className="slide slide-pricing">
      <div className="max-w-6xl mx-auto w-full overflow-auto">
        {/* Заголовок */}
        <div
          className={`text-center mb-8 ${
            isActive ? "fade-in-up" : "opacity-0"
          }`}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent text-sm mb-4">
            03 / NARXLAR
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Xizmatlar narxi</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Левая колонка - основные цены */}
          <div className={`${isActive ? "fade-in-up stagger-1" : "opacity-0"}`}>
            <div className="glass-card">
              <h3 className="text-xl font-semibold mb-4 text-accent">
                Asosiy narxlar
              </h3>
              <table className="price-table">
                <thead>
                  <tr>
                    <th className="rounded-tl-lg">Xizmat/Mahsulot</th>
                    <th>Narxi (so&apos;m)</th>
                    <th className="rounded-tr-lg">Izoh</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingData.map((item, index) => (
                    <tr key={index}>
                      <td
                        className={
                          item.highlight ? "text-accent font-semibold" : ""
                        }
                      >
                        {item.name}
                      </td>
                      <td className="font-mono text-primary-light">
                        {formatPrice(item.price)}
                      </td>
                      <td className="text-white/50 text-sm">{item.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Что входит в платформу */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="text-white/60 text-sm mb-3">
                  Platforma tarkibiga kiradi:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {platformItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm text-white/80"
                    >
                      <CheckCircleIcon className="w-4 h-4 text-accent flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Правая колонка - калькуляция по масштабам */}
          <div className={`${isActive ? "fade-in-up stagger-2" : "opacity-0"}`}>
            <div className="glass-card">
              <h3 className="text-xl font-semibold mb-4 text-accent">
                Miqyos bo&apos;yicha narx
              </h3>
              <p className="text-white/50 text-sm mb-4">
                Har bir to&apos;yxonada o&apos;rtacha 6 ta kamera
              </p>
              <table className="price-table text-sm">
                <thead>
                  <tr>
                    <th className="rounded-tl-lg">Miqyos</th>
                    <th>Platforma</th>
                    <th>Sozlash</th>
                    <th className="rounded-tr-lg">Server</th>
                  </tr>
                </thead>
                <tbody>
                  {scaleData.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <span className="text-white font-semibold">
                          {item.venues} ta
                        </span>
                        <br />
                        <span className="text-white/50 text-xs">
                          ({item.cameras} kamera)
                        </span>
                      </td>
                      <td className="font-mono text-primary-light">130 mln</td>
                      <td className="font-mono text-primary-light">
                        {item.setup} mln
                      </td>
                      <td className="font-mono text-primary-light">52 mln</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Примечание */}
              <div className="mt-4 p-3 bg-primary/10 rounded-lg text-sm text-white/70 flex items-start gap-2">
                <svg className="w-5 h-5 text-primary-light flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Server arenda bo&apos;lsa, jami summadan 40 mln ayriladi, lekin yiliga 12 mln to&apos;lanadi</span>
              </div>
            </div>

            {/* Важное примечание */}
            <div className="mt-4 glass-card border-l-4 border-accent">
              <p className="text-white/70 text-sm">
                <span className="text-accent font-semibold">Izoh:</span> Biz
                faqat dasturiy ta&apos;minot va sozlash ishlarini bajaramiz.
                Texnik ishlar (kamera o&apos;rnatish, kabel tortish va h.k.)
                bajarilmaydi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
