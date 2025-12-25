
import React from 'react';
import { 
  Store, 
  ExternalLink, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  Smartphone, 
  Globe, 
  CreditCard,
  ArrowRight,
  Sparkles,
  Info,
  Heart
} from 'lucide-react';

interface PlatformGuideProps {
  onNavigate: (tab: string) => void;
}

const PlatformGuide: React.FC<PlatformGuideProps> = ({ onNavigate }) => {
  const platforms = [
    {
      id: 'lynk',
      name: 'Lynk.id',
      tagline: 'Terbaik Untuk Pemula',
      color: 'blue',
      description: 'Platform link-in-bio nomor 1 di Indonesia. Sangat mudah digunakan, tanpa biaya bulanan, dan mendukung semua e-wallet lokal.',
      pros: ['Setup Kurang dari 5 Menit', 'Mobile Friendly 100%', 'Jualan E-book & Jasa', 'Pembayaran Otomatis'],
      bestFor: 'Creator pemula yang mau langsung jualan.',
      url: 'https://lynk.id'
    },
    {
      id: 'mayar',
      name: 'Mayar.id',
      tagline: 'Professional LMS & Checkout',
      color: 'indigo',
      description: 'Platform All-in-one untuk menjual kursus online, membership, dan produk digital dengan fitur automasi tingkat lanjut.',
      pros: ['Sistem Kursus (LMS) Lengkap', 'Fitur Upsell & Coupon', 'Automasi Email Pembeli', 'Member Management'],
      bestFor: 'Mentor & Pengajar kursus online serius.',
      url: 'https://mayar.id'
    }
  ];

  return (
    <div className="space-y-10 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center space-y-4 px-4">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-100">
          <Store size={14} /> Marketplace
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Pilih "Toko" Digitalmu</h1>
        <p className="text-slate-500 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">Jangan terjebak bingung memilih platform. Pilihlah yang paling sesuai dengan tahap bisnismu sekarang.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {platforms.map((p) => (
          <div key={p.id} className="bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden hover:border-indigo-300 hover:shadow-2xl transition-all duration-500 flex flex-col group">
            <div className="p-8 md:p-12 space-y-6 flex-1">
              <div className="space-y-2">
                <span className={`text-[10px] font-black uppercase tracking-[0.2em] text-${p.color}-600`}>{p.tagline}</span>
                <h2 className="text-3xl font-black text-slate-900">{p.name}</h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium">{p.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {p.pros.map((pro, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs md:text-sm text-slate-500 font-bold">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> {pro}
                  </div>
                ))}
              </div>
              <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="px-4 py-2 bg-slate-50 rounded-xl text-[10px] font-black text-slate-500 uppercase">Cocok: {p.bestFor}</div>
                <a href={p.url} target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-indigo-600 font-black hover:gap-3 transition-all">
                  Situs Resmi <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Responsive Table Wrapper */}
      <div className="bg-slate-900 rounded-[2.5rem] p-6 md:p-12 text-white relative overflow-hidden shadow-2xl">
        <div className="relative z-10">
          <h3 className="text-xl md:text-2xl font-black mb-8 flex items-center gap-3">
            <Sparkles className="text-indigo-400" /> Perbandingan Cepat
          </h3>
          <div className="overflow-x-auto -mx-2">
            <div className="min-w-[500px] px-2">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-indigo-300 border-b border-white/10 text-[10px] font-black uppercase tracking-widest">
                    <th className="pb-4">Fitur Utama</th>
                    <th className="pb-4 px-4 text-center">Lynk.id</th>
                    <th className="pb-4 px-4 text-center">Mayar.id</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { f: 'Kemudahan', c1: 'Sangat Mudah', c2: 'Menengah' },
                    { f: 'Biaya Bulanan', c1: 'Gratis Selamanya', c2: 'Gratis/Berbayar' },
                    { f: 'LMS (Kursus)', c1: '❌ Tidak Ada', c2: '✅ Ada' },
                    { f: 'Affiliate', c1: '✅ Ada', c2: '✅ Ada' }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="py-5 text-sm font-bold text-slate-400">{row.f}</td>
                      <td className="py-5 px-4 text-center text-sm font-black">{row.c1}</td>
                      <td className="py-5 px-4 text-center text-sm font-black">{row.c2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-12 bg-indigo-600 rounded-[2.5rem] text-white shadow-xl">
        <h2 className="text-2xl font-black mb-4">Siap Membangun Toko Pertamamu?</h2>
        <p className="text-indigo-100/80 mb-8 max-w-lg mx-auto font-medium px-4">Jangan tunggu sempurna. Mulai sekarang dengan platform yang paling mudah untukmu.</p>
        <button onClick={() => onNavigate('dashboard')} className="bg-white text-indigo-600 px-10 py-4 rounded-2xl font-black transition-all hover:scale-105 active:scale-95 shadow-lg">Kembali ke Dashboard</button>
      </div>
    </div>
  );
};

export default PlatformGuide;
