
import React from 'react';
import { 
  Target, 
  Layers, 
  Tag, 
  Megaphone, 
  ChevronRight, 
  Zap, 
  ShieldCheck, 
  BarChart,
  Lightbulb,
  ArrowRight,
  BrainCircuit
} from 'lucide-react';

interface StrategyLabProps {
  onNavigate: (tab: string) => void;
}

const StrategyLab: React.FC<StrategyLabProps> = ({ onNavigate }) => {
  const strategySections = [
    {
      title: "1. Panduan Sales Funnel (Corong Penjualan)",
      subtitle: "Mengubah orang asing menjadi pembeli setia",
      icon: Layers,
      color: "violet",
      items: [
        {
          label: "TOFU (Top of Funnel) - Kesadaran",
          desc: "Tujuannya adalah menarik perhatian. Berikan konten edukasi gratis di sosmed (Reels/TikTok) yang membahas masalah audiens tanpa langsung berjualan."
        },
        {
          label: "MOFU (Middle of Funnel) - Pertimbangan",
          desc: "Tawarkan 'Lead Magnet' atau produk gratisan (E-book mini/Checklist) ditukar dengan email atau nomor WhatsApp mereka untuk membangun kepercayaan."
        },
        {
          label: "BOFU (Bottom of Funnel) - Konversi",
          desc: "Sampaikan penawaran produk utamamu. Gunakan testimoni, garansi, dan batas waktu (scarcity) untuk mendorong mereka segera membeli."
        }
      ]
    },
    {
      title: "2. Panduan Strategi Harga (Pricing)",
      subtitle: "Menentukan harga yang pas di kantong & hati",
      icon: Tag,
      color: "indigo",
      items: [
        {
          label: "Strategi Paket (Tiering)",
          desc: "Sediakan 3 pilihan: Hemat (Fitur terbatas), Populer (Nilai terbaik), dan Eksklusif (Lengkap + Konsultasi). 80% orang akan memilih paket tengah."
        },
        {
          label: "The Power of .900 / .700",
          desc: "Harga Rp 97.000 secara psikologis terasa jauh lebih murah dibandingkan Rp 100.000. Gunakan akhiran angka ganjil untuk kesan diskon."
        },
        {
          label: "Value over Price",
          desc: "Jangan menjual 'produk', jual 'hasil'. Jika produkmu menghemat waktu 10 jam, hargai berdasarkan nilai 10 jam tersebut, bukan jumlah halamannya."
        }
      ]
    },
    {
      title: "3. Panduan Promosi & Copywriting",
      subtitle: "Kata-kata yang menyulut keinginan beli",
      icon: Megaphone,
      color: "blue",
      items: [
        {
          label: "Formula PAS (Problem-Agitate-Solution)",
          desc: "Sebutkan masalah mereka (Problem), buat mereka merasa butuh solusi segera (Agitate), lalu tawarkan produkmu sebagai solusinya (Solution)."
        },
        {
          label: "Social Proof (Bukti Sosial)",
          desc: "Tampilkan screenshot chat kepuasan pelanggan atau jumlah orang yang sudah bergabung. Orang lebih berani membeli jika orang lain sudah melakukannya."
        },
        {
          label: "Call to Action (CTA) yang Jelas",
          desc: "Jangan biarkan mereka bingung. Gunakan tombol dengan perintah tegas: 'Ambil Akses Sekarang' atau 'Mulai Belajar Hari Ini'."
        }
      ]
    }
  ];

  return (
    <div className="space-y-12 pb-20 max-w-5xl mx-auto px-4">
      {/* Header */}
      <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-[2.5rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-indigo-500/30 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold mb-6 border border-white/10">
            <BrainCircuit size={16} className="text-indigo-300" />
            Framework Bisnis Digital
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Panduan Strategi Pertumbuhan
          </h1>
          <p className="text-indigo-100/80 text-lg leading-relaxed">
            Bisnis bukan hanya tentang membuat produk, tapi tentang bagaimana produk itu sampai ke tangan yang tepat dengan cara yang benar.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
      </div>

      {/* Strategy Content */}
      <div className="grid grid-cols-1 gap-12">
        {strategySections.map((section, idx) => {
          const Icon = section.icon;
          return (
            <div key={idx} className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-${section.color}-50 text-${section.color}-600`}>
                      <Icon size={30} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-3">{section.title}</h2>
                    <p className="text-slate-500 text-sm leading-relaxed">{section.subtitle}</p>
                    
                    <div className="mt-8 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                      <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <Zap size={14} className="text-amber-500" /> Key Metric
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-600">Engagement Rate</span>
                          <span className="font-bold text-slate-900">Tinggi</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-600">Conversion Cost</span>
                          <span className="font-bold text-slate-900">Rendah</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-2/3 space-y-4">
                    {section.items.map((item, iIdx) => (
                      <div key={iIdx} className="p-6 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all">
                        <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                          {item.label}
                        </h4>
                        <p className="text-slate-500 text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bonus Resource Card */}
      <div className="bg-amber-50 border border-amber-200 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8">
        <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 shrink-0">
          <Lightbulb size={40} />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl font-bold text-amber-900 mb-2">Ingin Strategi yang Lebih Personal?</h3>
          <p className="text-amber-800/70 text-sm leading-relaxed">
            Kamu bisa mempelajari cara membuat aset konten yang lebih memukau untuk mendukung strategimu di bagian Panduan Aset.
          </p>
        </div>
        <button 
          onClick={() => onNavigate('assets')}
          className="bg-amber-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-amber-200 hover:bg-amber-700 transition-colors whitespace-nowrap active:scale-95"
        >
          Lihat Panduan Aset
        </button>
      </div>

      {/* Bottom Checklist */}
      <div className="bg-white rounded-[2rem] border border-slate-200 p-8 md:p-12 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Sudah Siap Meluncur?</h2>
        <div className="flex justify-center gap-4">
           <button 
            onClick={() => onNavigate('learning')}
            className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-bold flex items-center gap-3 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-indigo-100"
          >
            Review Materi Belajar <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StrategyLab;
