
import React from 'react';
import { 
  Megaphone, 
  Share2, 
  Calendar, 
  BarChart3, 
  Zap, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  MessageSquare,
  Users,
  Star,
  Smartphone,
  MousePointer2
} from 'lucide-react';

interface MarketingGuideProps {
  onNavigate: (tab: string) => void;
}

const MarketingGuide: React.FC<MarketingGuideProps> = ({ onNavigate }) => {
  const marketingPillars = [
    {
      title: "Content Pillars (Pilar Konten)",
      desc: "Jangan hanya berjualan. Gunakan rumus 4E untuk membangun audiens yang loyal.",
      icon: Star,
      color: "amber",
      items: [
        { label: "Educate", detail: "Berikan tips gratis yang relevan dengan produkmu. Misal: '3 Cara Cepat Belajar Canva'." },
        { label: "Entertain", detail: "Cerita balik layar (BTS) atau meme yang relatable dengan niche kamu." },
        { label: "Empower", detail: "Testimoni atau cerita sukses orang lain setelah menggunakan produkmu." },
        { label: "E-Sell", detail: "Penawaran langsung. Fokus pada manfaat, bukan cuma fitur." }
      ]
    },
    {
      title: "The Viral Hook Formula",
      desc: "Cara menahan jari audiens agar tidak 'scroll' melewati konten Anda.",
      icon: Zap,
      color: "indigo",
      items: [
        { label: "Negative Hook", detail: "Stop lakukan ini kalau mau [Goal]! (Misal: Stop diet kalau mau kurus!)" },
        { label: "Transformation", detail: "Cara saya berubah dari A menjadi B dalam X hari." },
        { label: "Specific Result", detail: "Trik dapat 10jt pertama dari jualan e-book tanpa iklan." },
        { label: "The Question", detail: "Masih bingung cara buat produk digital? Tonton ini sampai habis." }
      ]
    }
  ];

  const contentCalendar = [
    { day: "Senin", content: "Edukasi: Masalah utama audiens & solusinya.", type: "Reels / TikTok" },
    { day: "Selasa", content: "Personal Story: Kenapa Anda membuat produk ini.", type: "Carousel" },
    { day: "Rabu", content: "Soft Sell: Testimoni pembeli / Hasil kerja.", type: "Story / Post" },
    { day: "Kamis", content: "Entertain: Meme / Relatable content niche Anda.", type: "Reels" },
    { day: "Jumat", content: "Hard Sell: Promo terbatas / Diskon Jumat berkah.", type: "Single Post" },
    { day: "Sabtu", content: "Empower: Q&A seputar produk / Tips tambahan.", type: "Story" },
    { day: "Minggu", content: "Relax: Persiapan minggu depan / Recap.", type: "Story" },
  ];

  return (
    <div className="space-y-12 pb-20 max-w-5xl mx-auto px-4 animate-in fade-in duration-700">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-indigo-100">
          <Megaphone size={14} />
          Digital Marketing 101
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 leading-tight">
          Strategi Marketing Tanpa Iklan
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
          Produk digital terbaik tetap butuh pemasaran yang cerdas. Pelajari cara membangun 'Organic Traffic' dari media sosial.
        </p>
      </div>

      {/* Pillars Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {marketingPillars.map((pillar, i) => (
          <div key={i} className="bg-white rounded-[2.5rem] border border-slate-200 p-8 shadow-sm hover:shadow-md transition-all">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-${pillar.color}-50 text-${pillar.color}-600`}>
              <pillar.icon size={28} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">{pillar.title}</h3>
            <p className="text-sm text-slate-500 mb-6 leading-relaxed">{pillar.desc}</p>
            <div className="space-y-4">
              {pillar.items.map((item, j) => (
                <div key={j} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-200 transition-colors">
                  <h4 className="font-bold text-slate-800 text-sm mb-1">{item.label}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Content Calendar Section */}
      <div className="bg-slate-900 rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <Calendar className="text-indigo-400" />
                Kalender Posting Mingguan
              </h3>
              <p className="text-slate-400 text-sm mt-2 italic">Jadwal ideal untuk membangun kepercayaan sebelum berjualan.</p>
            </div>
            <div className="bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm border border-white/10 text-xs flex items-center gap-2">
              <Clock size={14} className="text-indigo-300" /> Waktu Posting Terbaik: 18:00 - 21:00 WIB
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {contentCalendar.map((day, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all group">
                <div className="text-indigo-400 font-black text-xs uppercase mb-2">{day.day}</div>
                <h5 className="font-bold text-sm mb-3 group-hover:text-indigo-200">{day.content}</h5>
                <div className="inline-block px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded text-[10px] font-bold">
                  {day.type}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Management Tools & Automation */}
      <div className="bg-white rounded-[2.5rem] border border-slate-200 p-8 md:p-12">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 space-y-6">
            <h3 className="text-3xl font-black text-slate-900">Otomasi & Manajemen</h3>
            <p className="text-slate-500 leading-relaxed">
              Anda tidak perlu di depan HP 24 jam. Gunakan tool ini untuk menjadwalkan konten dan membalas pesan secara otomatis.
            </p>
            <div className="space-y-4">
              {[
                { name: "Meta Business Suite", desc: "Penjadwalan post Instagram & Facebook gratis." },
                { name: "Buffer / Later", desc: "Manajemen banyak akun sosmed dalam satu dashboard." },
                { name: "ManyChat", desc: "Balas otomatis komentar & DM untuk jualan di Instagram." },
                { name: "Mailchimp / Kirim.email", desc: "Automasi email pengiriman produk digital." }
              ].map((tool, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-indigo-600 shadow-sm shrink-0">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800 text-sm">{tool.name}</h5>
                    <p className="text-xs text-slate-500">{tool.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="bg-indigo-600 rounded-[2.5rem] p-8 md:p-12 text-white relative z-10 shadow-2xl overflow-hidden group">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <TrendingUp className="text-indigo-300" />
                  Strategi "Scale-up"
                </h4>
                <p className="text-sm text-indigo-100 opacity-80 leading-relaxed mb-8">
                  Setelah konten organik Anda mulai menghasilkan sales, saatnya menggunakan <strong>Ads (Iklan Berbayar)</strong> untuk melipatgandakan profit.
                </p>
                <ul className="space-y-4 text-xs">
                  <li className="flex gap-3">
                    <div className="w-5 h-5 bg-white/10 rounded flex items-center justify-center shrink-0">1</div>
                    <span>Gunakan konten terbaik (Viral) sebagai materi iklan.</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-5 h-5 bg-white/10 rounded flex items-center justify-center shrink-0">2</div>
                    <span>Target audiens "Lookalike" dari pembeli sebelumnya.</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-5 h-5 bg-white/10 rounded flex items-center justify-center shrink-0">3</div>
                    <span>Retargeting: Tampilkan iklan ke orang yang sudah klik web tapi belum beli.</span>
                  </li>
                </ul>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
              </div>
              <div className="absolute -inset-4 bg-indigo-100 rounded-[3rem] -z-10 blur-xl opacity-50"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Final Tip */}
      <div className="bg-amber-50 border border-amber-100 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6">
        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-amber-600 shadow-sm shrink-0">
          <MessageSquare size={24} />
        </div>
        <div className="space-y-1">
          <h4 className="font-bold text-amber-900 italic">"Marketing is about testing, not perfection."</h4>
          <p className="text-sm text-amber-800/70 leading-relaxed">
            Jangan kecewa jika satu post sepi penonton. Teruslah bereksperimen dengan Hook dan pilar konten yang berbeda sampai Anda menemukan pola yang disukai audiens Anda.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <button 
          onClick={() => onNavigate('dashboard')}
          className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold inline-flex items-center gap-2 hover:bg-slate-800 transition-all shadow-lg active:scale-95"
        >
          Selesai Belajar Marketing
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default MarketingGuide;
