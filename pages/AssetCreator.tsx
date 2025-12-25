
import React from 'react';
import { 
  Palette, 
  ImageIcon, 
  Video, 
  Type, 
  Layout, 
  Sparkles, 
  Lightbulb, 
  Smartphone, 
  MousePointer2, 
  CheckCircle,
  Shapes,
  PenTool
} from 'lucide-react';

interface AssetCreatorProps {
  onNavigate: (tab: string) => void;
}

const AssetCreator: React.FC<AssetCreatorProps> = ({ onNavigate }) => {
  const assetGuides = [
    {
      title: "1. Aset Produk (E-book & Kursus)",
      subtitle: "Kesan pertama yang menentukan harga",
      icon: Layout,
      color: "blue",
      items: [
        {
          head: "Desain Sampul (Mockup 3D)",
          body: "Gunakan mockup 3D (seperti gambar buku fisik atau tablet) agar produk digitalmu terasa nyata. Psikologi menunjukkan orang lebih berani bayar mahal untuk sesuatu yang terlihat 'berwujud'."
        },
        {
          head: "Tipografi yang Terbaca",
          body: "Jangan gunakan font yang terlalu dekoratif untuk isi materi. Gunakan font Sans Serif (seperti Inter atau Plus Jakarta Sans) agar nyaman dibaca di layar HP."
        },
        {
          head: "Hierarki Informasi",
          body: "Pastikan judul adalah elemen terbesar. Gunakan warna kontras untuk poin-poin penting agar pembeli bisa memindai (skimming) informasi dengan cepat."
        }
      ]
    },
    {
      title: "2. Aset Marketing (Social Media)",
      subtitle: "Menarik perhatian dalam 3 detik pertama",
      icon: Smartphone,
      color: "rose",
      items: [
        {
          head: "Thumbnail yang Menarik (Clickbait Etis)",
          body: "Gunakan wajah orang atau ekspresi kuat di thumbnail video. Tambahkan teks singkat (3-5 kata) dengan warna background yang mencolok."
        },
        {
          head: "Format Carousel Edukatif",
          body: "Gunakan rasio 4:5 di Instagram. Slide pertama harus berisi janji atau hasil: 'Cara Saya Dapat X dalam Y Hari'. Slide terakhir selalu tutup dengan CTA (ajakan bertindak)."
        },
        {
          head: "Aset Video Pendek (Shorts/Reels)",
          body: "Fokus pada 1 detik pertama. Gunakan teks overlay yang muncul bergantian untuk menjaga mata penonton tetap terpaku pada layar."
        }
      ]
    },
    {
      title: "3. Identitas Visual (Branding)",
      subtitle: "Agar brand Anda mudah diingat",
      icon: Shapes,
      color: "amber",
      items: [
        {
          head: "Palet Warna Konsisten",
          body: "Pilih 1 warna utama dan 2 warna pendukung. Gunakan warna ini di semua platform agar orang langsung tahu itu adalah konten Anda tanpa melihat logo."
        },
        {
          head: "Gaya Visual Unik",
          body: "Apakah gaya Anda minimalis, retro, atau futuristik? Konsistensi gaya menciptakan kepercayaan. Jangan berganti-ganti gaya desain setiap hari."
        },
        {
          head: "Elemen Pemanis (Icon & Shape)",
          body: "Gunakan set ikon yang seragam. Jika menggunakan ikon garis (outline), gunakan itu di semua aset. Jangan mencampur ikon isi (solid) dengan garis."
        }
      ]
    }
  ];

  const tools = [
    { name: "Canva", desc: "Rajanya desain instan untuk semua aset.", icon: Palette },
    { name: "CapCut", desc: "Edit video vertikal paling powerful di HP.", icon: Video },
    { name: "Remove.bg", desc: "Hapus background foto dalam 1 detik.", icon: Sparkles },
    { name: "Flaticon", desc: "Gudang ikon gratis untuk mempercantik aset.", icon: Shapes }
  ];

  return (
    <div className="space-y-12 pb-20 max-w-5xl mx-auto px-4">
      {/* Hero Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-rose-50 text-rose-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-rose-100">
          <PenTool size={14} />
          Visual Strategy
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 leading-tight">
          Panduan Pembuatan Aset Digital
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
          Produk bagus butuh kemasan yang memukau. Pelajari rahasia desain yang menjual tanpa harus jadi desainer profesional.
        </p>
      </div>

      {/* Guide Sections */}
      <div className="space-y-16">
        {assetGuides.map((guide, gIdx) => {
          const Icon = guide.icon;
          return (
            <div key={gIdx} className="bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-sm">
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-10">
                  <div className="md:w-1/3">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-${guide.color}-50 text-${guide.color}-600 shadow-sm`}>
                      <Icon size={32} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-3">{guide.title}</h2>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">{guide.subtitle}</p>
                    
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">
                        <CheckCircle size={14} className="text-emerald-500" /> Goal Utama
                      </div>
                      <p className="text-xs text-slate-600 font-medium">Meningkatkan nilai persepsi produk di mata pelanggan.</p>
                    </div>
                  </div>

                  <div className="md:w-2/3 space-y-6">
                    {guide.items.map((item, iIdx) => (
                      <div key={iIdx} className="group p-6 rounded-2xl border border-slate-50 hover:bg-slate-50 transition-all">
                        <h4 className="font-bold text-slate-800 text-lg mb-2 flex items-center gap-3">
                          <span className="text-slate-300 font-black italic">0{iIdx + 1}</span>
                          {item.head}
                        </h4>
                        <p className="text-slate-500 text-sm leading-relaxed">
                          {item.body}
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

      {/* Toolkit Recommendation */}
      <div className="bg-slate-900 rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-8 text-center md:text-left flex items-center gap-3">
            <MousePointer2 className="text-indigo-400" />
            Toolkit Kreator Digital (Gratis)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all cursor-default group">
                <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <tool.icon size={20} />
                </div>
                <h5 className="font-bold mb-1">{tool.name}</h5>
                <p className="text-[11px] text-slate-400 leading-relaxed">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Decor */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Pro Tips Section */}
      <div className="bg-amber-50 border border-amber-100 rounded-[2rem] p-8 md:p-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 shrink-0">
            <Lightbulb size={40} />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-amber-900">Aturan 80/20 dalam Desain</h3>
            <p className="text-amber-800/80 text-sm leading-relaxed">
              Habiskan 80% waktu Anda untuk memastikan <strong>Headline (Judul)</strong> terlihat jelas and menarik. Sisa 20% baru gunakan untuk elemen dekoratif lainnya. Orang tidak akan membaca konten Anda jika judulnya tidak terlihat atau membosankan.
            </p>
          </div>
        </div>
      </div>

      {/* Final Action */}
      <div className="text-center py-10 bg-indigo-600 rounded-[2.5rem] text-white shadow-xl shadow-indigo-100">
        <Sparkles className="mx-auto mb-4 text-indigo-300" size={32} />
        <h2 className="text-2xl font-bold mb-4">Siap Visualisasikan Ide Bisnis Anda?</h2>
        <p className="text-indigo-100/70 mb-8 max-w-lg mx-auto">Gunakan panduan ini untuk mulai membuat aset pertama Anda hari ini juga.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={() => onNavigate('dashboard')}
            className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-all shadow-lg active:scale-95"
          >
            Kembali ke Dashboard
          </button>
          <button 
            onClick={() => onNavigate('learning')}
            className="bg-indigo-500 text-white px-8 py-3 rounded-xl font-bold border border-white/20 hover:bg-indigo-400 transition-all active:scale-95"
          >
            Review Materi Belajar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssetCreator;
