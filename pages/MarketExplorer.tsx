
import React from 'react';
import { 
  Search, 
  TrendingUp, 
  Users, 
  BarChart3, 
  ChevronRight, 
  Lightbulb, 
  Eye, 
  MessageSquare, 
  Compass,
  ArrowRight,
  Cpu,
  MessagesSquare,
  Bot
} from 'lucide-react';

interface MarketExplorerProps {
  onNavigate: (tab: string) => void;
}

const MarketExplorer: React.FC<MarketExplorerProps> = ({ onNavigate }) => {
  const sections = [
    {
      title: "1. Panduan Riset Produk",
      subtitle: "Menemukan 'Apa' yang harus dijual",
      icon: Search,
      color: "blue",
      steps: [
        {
          head: "Identifikasi Masalah (The Pain Point)",
          body: "Produk digital terbaik adalah obat bagi masalah orang lain. Cari tahu apa yang membuat orang frustrasi di bidang yang kamu kuasai."
        },
        {
          head: "Metode 'The Gap'",
          body: "Cari produk serupa di marketplace. Baca ulasan bintang 1-3. Apa yang kurang? Itulah 'celah' (gap) yang bisa kamu isi dengan produkmu."
        },
        {
          head: "Cek Profitabilitas",
          body: "Lihat apakah sudah ada orang yang menjual produk serupa. Jika ada dan laku, itu pertanda bagus—artinya ada pasar yang mau membayar."
        }
      ]
    },
    {
      title: "2. Panduan Riset Tren",
      subtitle: "Menunggangi gelombang yang sedang naik",
      icon: TrendingUp,
      color: "emerald",
      steps: [
        {
          head: "Gunakan Google Trends",
          body: "Ketik kata kunci produkmu. Pastikan grafiknya stabil atau naik dalam 12 bulan terakhir. Hindari tren yang sedang terjun bebas."
        },
        {
          head: "Eksplorasi Media Sosial",
          body: "Cek hashtag di TikTok atau Instagram. Apa yang sedang viral? Apakah ada pola permintaan baru (misal: template video pendek)?"
        },
        {
          head: "AnswerThePublic",
          body: "Gunakan situs ini untuk melihat pertanyaan apa yang diajukan orang di internet terkait topikmu. Buat produk yang menjawab pertanyaan itu."
        }
      ]
    },
    {
      title: "3. Panduan Riset Audiens",
      subtitle: "Mengenal 'Siapa' calon pembelimu",
      icon: Users,
      color: "indigo",
      steps: [
        {
          head: "Membuat Persona Pembeli",
          body: "Bayangkan satu orang ideal. Berapa usianya? Apa pekerjaannya? Apa ketakutan terbesarnya? Bicaralah hanya kepada orang ini."
        },
        {
          head: "Observasi Komunitas",
          body: "Masuk ke grup Facebook, Reddit, atau forum. Lihat bahasa yang mereka gunakan. Gunakan bahasa yang sama dalam copywriting produkmu."
        },
        {
          head: "Survei Sederhana",
          body: "Jika punya pengikut di sosmed, tanyakan: 'Apa kesulitan terbesar kalian dalam [topik]?' Jawaban mereka adalah ide produkmu."
        }
      ]
    }
  ];

  return (
    <div className="space-y-12 pb-20 max-w-5xl mx-auto px-4">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-indigo-100">
          <Compass size={14} />
          Market Intelligence
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 leading-tight">
          Panduan Strategi Riset Pasar
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
          Riset bukan tentang angka yang rumit, tapi tentang memahami manusia. Pelajari cara menemukan peluang emas di dunia digital.
        </p>
      </div>

      {/* Main Content Sections */}
      <div className="space-y-16">
        {sections.map((section, sIdx) => {
          const Icon = section.icon;
          return (
            <div key={sIdx} className="relative">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Left Side: Title & Info */}
                <div className="md:w-1/3 sticky top-24">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-${section.color}-100 text-${section.color}-600 shadow-sm shadow-${section.color}-100`}>
                    <Icon size={28} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">{section.title}</h2>
                  <p className="text-slate-500 font-medium italic">{section.subtitle}</p>
                </div>

                {/* Right Side: Steps */}
                <div className="md:w-2/3 space-y-4">
                  {section.steps.map((step, stepIdx) => (
                    <div 
                      key={stepIdx} 
                      className="group bg-white p-6 rounded-3xl border border-slate-200 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-50 transition-all duration-300"
                    >
                      <div className="flex gap-4">
                        <div className="shrink-0 w-8 h-8 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center font-bold text-xs group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                          {stepIdx + 1}
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-800 text-lg mb-2 group-hover:text-indigo-700 transition-colors">
                            {step.head}
                          </h4>
                          <p className="text-slate-500 text-sm leading-relaxed">
                            {step.body}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}

        {/* AI Research Section - NEW */}
        <div className="relative">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3 sticky top-24">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-purple-100 text-purple-600 shadow-sm shadow-purple-100">
                <Bot size={28} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">4. AI Untuk Riset Pasar</h2>
              <p className="text-slate-500 font-medium italic">Asisten pintar untuk analisa cepat</p>
              
              <div className="mt-6 p-4 bg-purple-50 rounded-2xl border border-purple-100 shadow-sm hidden md:block">
                <div className="flex items-center gap-2 text-xs font-bold text-purple-400 mb-2 uppercase tracking-tighter">
                  <Cpu size={14} className="text-purple-500" />
                  AI Advantage
                </div>
                <p className="text-xs text-purple-700 leading-relaxed">
                  "Gunakan AI (seperti Gemini) untuk merangkum ratusan ulasan pelanggan dalam hitungan detik."
                </p>
              </div>
            </div>

            <div className="md:w-2/3 space-y-6">
              <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <TrendingUp size={20} className="text-purple-500" />
                    Analisis Tren dengan AI
                  </h4>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    Minta AI untuk menganalisis laporan industri terbaru atau merangkum tren apa yang sedang naik daun di niche Anda. AI dapat menghubungkan titik-titik data yang mungkin kita lewatkan.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-purple-500">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Contoh Prompt Riset Tren:</p>
                    <p className="text-sm text-slate-700 italic">
                      "Analisis tren produk digital untuk niche 'Kesehatan Mental Remaja' di Indonesia tahun 2024. Masalah apa yang belum banyak terselesaikan oleh produk yang ada saat ini?"
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <MessagesSquare size={20} className="text-purple-500" />
                    Analisis Sentimen Kompetitor
                  </h4>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    Salin ulasan pelanggan kompetitor dan minta AI untuk menganalisis sentimen mereka. AI akan memberitahu Anda apa yang paling mereka sukai dan apa yang membuat mereka kecewa.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-purple-500">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Contoh Prompt Analisis Sentimen:</p>
                    <p className="text-sm text-slate-700 italic">
                      "Berikut adalah 20 ulasan pelanggan dari produk kompetitor X. Berikan daftar 3 keluhan utama mereka dan 3 hal yang menurut mereka paling bermanfaat. Bagaimana saya bisa membuat produk yang lebih baik dari ini?"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tools Recommendation Card */}
      <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Peralatan 'Mata-Mata' Pasar Gratis</h3>
            <p className="text-slate-300 leading-relaxed mb-8 opacity-90">
              Kamu tidak butuh tool mahal seharga jutaan rupiah untuk memulai. Gunakan kombinasi alat gratis ini untuk mendapatkan data akurat.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Google Trends", url: "trends.google.com" },
                { name: "Pinterest Trends", url: "trends.pinterest.com" },
                { name: "Ubersuggest", url: "neilpatel.com" },
                { name: "EtsyHunt", url: "etsyhunt.com" }
              ].map((tool, i) => (
                <div key={i} className="flex items-center gap-2 p-3 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span className="text-xs font-medium">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-indigo-600 rounded-3xl p-8 shadow-inner border border-indigo-500/50">
            <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Eye size={22} className="text-indigo-200" />
              Apa yang dicari?
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm">
                <span className="text-indigo-300">●</span>
                <span><strong>Volume:</strong> Berapa banyak orang yang mencari solusi ini?</span>
              </li>
              <li className="flex gap-3 text-sm">
                <span className="text-indigo-300">●</span>
                <span><strong>Kompetisi:</strong> Seberapa banyak orang yang menjual produk serupa?</span>
              </li>
              <li className="flex gap-3 text-sm">
                <span className="text-indigo-300">●</span>
                <span><strong>Sentimen:</strong> Apakah orang senang atau kecewa dengan solusi yang ada saat ini?</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Background Decor */}
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-indigo-500 rounded-full opacity-10 blur-3xl"></div>
      </div>

      {/* Final Action */}
      <div className="text-center py-10 bg-indigo-50 rounded-[2rem] border border-indigo-100">
        <h3 className="text-xl font-bold text-slate-800 mb-2">Sudah Selesai Riset?</h3>
        <p className="text-slate-500 mb-6 px-4">Langkah selanjutnya adalah merumuskan rencana aksimu.</p>
        <button 
          onClick={() => onNavigate('strategy')}
          className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold inline-flex items-center gap-2 hover:bg-indigo-700 transition-all shadow-lg hover:scale-105 active:scale-95"
        >
          Lanjut ke Strategi Lab
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default MarketExplorer;
