
import React, { useState, useRef, useEffect } from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  ChevronRight, 
  Target, 
  Search, 
  Cpu, 
  BadgeDollarSign, 
  Store,
  ArrowRight,
  Info,
  Lightbulb,
  ListChecks,
  Briefcase,
  Play,
  Pause,
  Volume2,
  Loader2,
  TrendingUp,
  Award,
  Users,
  Star,
  Activity,
  Zap,
  History,
  Globe,
  PenTool,
  Mic,
  MessageCircle,
  Layers
} from 'lucide-react';
import { generateSpeech } from '../services/geminiService';

export const MODULES = [
  {
    id: '1',
    title: 'Modul 1: Strategi Niche Mastery',
    icon: Target,
    narrationText: 'Selamat datang di modul pertama. Kita akan belajar cara memilih niche yang bukan hanya sekadar hobi, tapi memiliki nilai ekonomi tinggi. Ingat, kekayaan ada di dalam spesifikasi.',
    content: `
      <div class="space-y-8">
        <section>
          <h2 class="text-2xl md:text-3xl font-black text-slate-900 mb-6 tracking-tight">Membangun Fondasi: Spesifik = Profit</h2>
          <p class="text-slate-600 leading-relaxed mb-6 text-base md:text-lg font-medium opacity-80">
            Kesalahan fatal pemula adalah ingin menjual ke "semua orang". Di dunia digital, jika Anda menjual ke semua orang, Anda tidak menjual ke siapa pun.
          </p>
          <div class="bg-indigo-50 border-l-8 border-indigo-600 p-8 rounded-2xl shadow-sm">
            <h4 class="font-bold text-indigo-900 mb-3 text-lg">Prinsip Generalis vs Spesialis:</h4>
            <p class="text-base text-indigo-800/80 leading-relaxed font-medium">Seorang dokter umum mungkin dibayar 100 ribu per kunjungan, tapi dokter spesialis bedah saraf bisa dibayar ratusan juta. Jadilah "bedah saraf" di niche digital Anda.</p>
          </div>
        </section>

        <section class="p-8 md:p-10 bg-white border border-slate-200 rounded-[2.5rem] shadow-xl shadow-slate-100">
          <h3 class="text-xl font-black text-slate-900 mb-6 flex items-center gap-3">
            <Star size={24} className="text-amber-500 fill-amber-500" /> Contoh Transisi Niche
          </h3>
          <ul class="space-y-4">
            <li class="flex items-center gap-4 p-4 bg-rose-50 rounded-2xl border border-rose-100">
              <span class="text-2xl">❌</span>
              <span class="text-rose-900/60 font-medium line-through">E-book Resep Masakan Umum</span>
            </li>
            <li class="flex items-center gap-4 p-4 bg-emerald-50 rounded-2xl border border-emerald-100 shadow-sm">
              <span class="text-2xl">✅</span>
              <span class="text-emerald-900 font-bold text-lg">E-book 30 Hari Menu MPASI Alergi Susu Sapi</span>
            </li>
            <li class="flex items-center gap-4 p-4 bg-rose-50 rounded-2xl border border-rose-100">
              <span class="text-2xl">❌</span>
              <span class="text-rose-900/60 font-medium line-through">Template Desain Canva</span>
            </li>
            <li class="flex items-center gap-4 p-4 bg-emerald-50 rounded-2xl border border-emerald-100 shadow-sm">
              <span class="text-2xl">✅</span>
              <span class="text-emerald-900 font-bold text-lg">Template IG khusus Toko Frozen Food</span>
            </li>
          </ul>
        </section>
      </div>
    `,
    caseStudy: {
      title: "The Yoga Transition",
      challenge: "Maya ingin jualan kursus online umum. Namun, pasarnya sudah sangat jenuh dan ia sulit bersaing dengan instruktur besar.",
      aiSolution: "Maya menggunakan Gemini untuk menganalisis komentar. AI menemukan keluhan 'Pekerja Kantoran dengan Saraf Kejepit'. AI menyarankan Maya mengubah niche menjadi 'Yoga Pemulihan Saraf Kejepit Pekerja WFH'.",
      result: "Dalam 2 minggu, Maya menjual 80 akses kursus tanpa iklan berbayar."
    },
    summary: 'Niche terbaik adalah irisan antara Keahlian, Minat, dan Masalah mendesak di pasar.'
  },
  {
    id: '2',
    title: 'Modul 2: Validasi Pasar & Metode "Pre-Sell"',
    icon: Search,
    narrationText: 'Jangan buang waktu membuat produk yang tidak ada pembelinya. Di modul ini, kita akan belajar cara validasi ide sebelum produknya benar-benar dibuat.',
    content: `
      <div class="space-y-8">
        <section>
          <h2 class="text-2xl md:text-3xl font-black text-slate-900 mb-6 tracking-tight">Validasi: Pastikan Pasarmu Mau Membeli</h2>
          <p class="text-slate-600 leading-relaxed text-base md:text-lg font-medium opacity-80">
            Metode paling akurat untuk validasi bukan bertanya "Apakah idemu bagus?", tapi "Apakah Anda mau bayar sekarang?".
          </p>
        </section>

        <div class="bg-amber-50 rounded-[2.5rem] p-10 border border-amber-200 shadow-lg shadow-amber-100/50">
          <h3 class="text-xl font-black text-amber-900 mb-8 flex items-center gap-3">
             <Activity size={24} className="text-amber-600" /> Alur Validasi 3 Tahap
          </h3>
          <div class="space-y-8">
            <div class="flex gap-6">
              <div class="w-12 h-12 bg-amber-200 rounded-2xl flex items-center justify-center shrink-0 font-black text-amber-900 shadow-sm">1</div>
              <div>
                <h4 class="font-bold text-amber-950 text-xl mb-2">The Waitlist Page</h4>
                <p class="text-base text-amber-900/70 leading-relaxed font-medium">Tawarkan konsep produk melalui halaman pendaftaran. Jika ada 100 orang yang daftar, itu sinyal kuat bahwa pasarmu valid.</p>
              </div>
            </div>
            <div class="flex gap-6">
              <div class="w-12 h-12 bg-amber-200 rounded-2xl flex items-center justify-center shrink-0 font-black text-amber-900 shadow-sm">2</div>
              <div>
                <h4 class="font-bold text-amber-950 text-xl mb-2">The Beta Program</h4>
                <p class="text-base text-amber-900/70 leading-relaxed font-medium">Jual versi awal produk dengan harga diskon besar. Feedback dari pengguna awal jauh lebih berharga daripada profit di awal.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    caseStudy: {
      title: "The Ghostwriting Template",
      challenge: "Roni ingin buat template LinkedIn CEO. Ia takut buang waktu 1 bulan desain tapi ternyata tidak laku.",
      aiSolution: "Roni menjalankan polling di LinkedIn berdasarkan saran AI. Hasil polling menunjukkan audiens lebih butuh 'Sistem Automasi Penjadwalan'.",
      result: "Roni mendapatkan 25 pesanan pre-order senilai Rp 12,5 Juta sebelum produk selesai."
    },
    summary: 'Uang muka dari pelanggan adalah bentuk validasi tertinggi di dunia bisnis.'
  },
  {
    id: '3',
    title: 'Modul 3: Workflow Produksi Kilat dengan AI',
    icon: Cpu,
    narrationText: 'Sekarang saatnya eksekusi. Kita akan menggunakan AI untuk memangkas waktu produksi dari 3 bulan menjadi hanya 3 hari.',
    content: `
      <div class="space-y-8">
        <section>
          <h2 class="text-2xl md:text-3xl font-black text-slate-900 mb-6 tracking-tight">Framework Produksi AI-First</h2>
          <p class="text-slate-600 leading-relaxed mb-8 text-base md:text-lg font-medium opacity-80">
            AI bukan pengganti kreativitas, tapi "mesin pengganda" kecepatan Anda dalam mengeksekusi ide. Gunakan Gemini sebagai 'Digital Apprentice' Anda.
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="p-8 bg-white border border-slate-200 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300">
              <div class="text-indigo-600 mb-4 font-black text-[10px] uppercase tracking-[0.2em] bg-indigo-50 inline-block px-3 py-1 rounded-full">01. Konsep</div>
              <p class="text-base text-slate-700 font-bold leading-tight">Generate <strong>Table of Content</strong> logis dengan bantuan AI.</p>
            </div>
            <div class="p-8 bg-white border border-slate-200 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300">
              <div class="text-indigo-600 mb-4 font-black text-[10px] uppercase tracking-[0.2em] bg-indigo-50 inline-block px-3 py-1 rounded-full">02. Isi Konten</div>
              <p class="text-base text-slate-700 font-bold leading-tight">Draf per bab dibantu AI, lalu poles dengan <strong>gaya bahasa personal</strong> Anda.</p>
            </div>
            <div class="p-8 bg-white border border-slate-200 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300">
              <div class="text-indigo-600 mb-4 font-black text-[10px] uppercase tracking-[0.2em] bg-indigo-50 inline-block px-3 py-1 rounded-full">03. Visual Aset</div>
              <p class="text-base text-slate-700 font-bold leading-tight">Mockup dan aset desain otomatis dalam hitungan <strong>menit</strong>.</p>
            </div>
          </div>
        </section>
      </div>
    `,
    caseStudy: {
      title: "48-Hour E-book Launch",
      challenge: "Desainer ingin buat e-book tapi kesulitan merangkai kata-kata (writer's block).",
      aiSolution: "Metode 'Modular AI': AI buat outline -> User isi poin kunci -> AI kembangkan narasi -> User validasi.",
      result: "E-book 102 halaman selesai dalam 48 jam dan menghasilkan Rp 30 Juta di bulan pertama."
    },
    summary: 'Fokus pada 80% konten berkualitas dari AI, dan 20% kurasi manusia untuk sentuhan unik.'
  },
  { id: '4', title: 'Modul 4: Psikologi Harga & Value Ladder', icon: BadgeDollarSign, narrationText: 'Menentukan harga adalah seni. Kita akan belajar cara membuat penawaran yang terasa murah.', content: '<div class="p-8 bg-indigo-50 rounded-[2rem] font-medium text-slate-700">Materi dalam pengembangan visual premium...</div>', summary: 'Orang tidak membeli produk, mereka membeli transformasi.', caseStudy: { title: 'Profit Multiplier', challenge: 'E-book murah susah menutup biaya.', aiSolution: 'Strategi Value Ladder.', result: 'Omzet 4x lipat.' } },
  { id: '5', title: 'Modul 5: Launching & Organik Scaling', icon: Store, narrationText: 'Modul terakhir dasar! Kita akan belajar meluncurkan produk tanpa iklan.', content: '<div class="p-8 bg-emerald-50 rounded-[2rem] font-medium text-slate-700">Materi dalam pengembangan visual premium...</div>', summary: 'Gunakan kekuatan organik untuk membangun brand.', caseStudy: { title: 'Zero-Ads Success', challenge: 'Malu berjualan di sosmed.', aiSolution: 'Storytelling sequence.', result: '300 sales dalam 48 jam.' } },
  { id: '6', title: 'Modul 6: Optimasi SEO Produk Digital', icon: Globe, narrationText: 'SEO adalah karyawan marketing gratis Anda.', content: '<div class="p-8 bg-blue-50 rounded-[2rem] font-medium text-slate-700">Materi dalam pengembangan visual premium...</div>', summary: 'SEO adalah investasi jangka panjang.', caseStudy: { title: 'Passive Machine', challenge: 'Trafik naik turun.', aiSolution: 'Long-tail keyword targeting.', result: 'Peringkat #1 Google.' } },
  { id: '7', title: 'Modul 7: Psikologi Copywriting Lanjut', icon: PenTool, narrationText: 'Kata-kata adalah senjata jualan Anda.', content: '<div class="p-8 bg-rose-50 rounded-[2rem] font-medium text-slate-700">Materi dalam pengembangan visual premium...</div>', summary: 'Copywriting baik adalah solusi, bukan sekadar jualan.', caseStudy: { title: 'Re-Hook Success', challenge: 'Konversi rendah.', aiSolution: 'Emotive hooks.', result: 'Konversi naik 5x.' } },
  { id: '8', title: 'Modul 8: Blog SEO Mastery', icon: Globe, narrationText: 'Bangun aset konten yang mendatangkan pembeli.', content: '<div class="p-8 bg-slate-100 rounded-[2rem] font-medium text-slate-700">Materi dalam pengembangan visual premium...</div>', summary: 'Blog adalah salesman 24 jam Anda.', caseStudy: { title: 'Semantic Cluster', challenge: 'Kalah saing keyword umum.', aiSolution: 'Topic cluster strategy.', result: 'Omzet pasif Rp 15 Jt/bln.' } },
  { id: '9', title: 'Modul 9: Podcast for Trust', icon: Mic, narrationText: 'Bangun otoritas dengan suara.', content: '<div class="p-8 bg-indigo-50 rounded-[2rem] font-medium text-slate-700">Materi dalam pengembangan visual premium...</div>', summary: 'Podcast adalah tentang kedekatan.', caseStudy: { title: 'Micro-Podcast', challenge: 'Target sibuk.', aiSolution: '7-min lunch podcast.', result: 'Top 10 kategori Bisnis.' } },
  { id: '10', title: 'Modul 10: Community Building', icon: MessageCircle, narrationText: 'Ubah pembeli jadi fans fanatik.', content: '<div class="p-8 bg-purple-50 rounded-[2rem] font-medium text-slate-700">Materi dalam pengembangan visual premium...</div>', summary: 'Komunitas adalah kunci retensi.', caseStudy: { title: 'Membership Engine', challenge: 'Pendapatan tidak stabil.', aiSolution: 'Inner Circle di Telegram.', result: 'Rp 50 Jt recurring income.' } },
  { id: '11', title: 'Modul 11: Omni-channel Integration', icon: Layers, narrationText: 'Satukan semua strategi jadi mesin otomatis.', content: '<div class="p-8 bg-amber-50 rounded-[2rem] font-medium text-slate-700">Materi dalam pengembangan visual premium...</div>', summary: 'Bisnis kuat tidak bergantung satu platform.', caseStudy: { title: 'Organic Blitz', challenge: 'Launch tanpa budget ads.', aiSolution: 'Cross-platform integration.', result: 'Rp 750 Jt dalam 30 hari.' } }
];

function decode(base64: string) {
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) bytes[i] = binaryString.charCodeAt(i);
  return bytes;
}

async function decodeAudioData(data: Uint8Array, ctx: AudioContext, sampleRate: number, numChannels: number): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);
  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
  }
  return buffer;
}

const AudioPlayer: React.FC<{ text: string }> = ({ text }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceNodeRef = useRef<AudioBufferSourceNode | null>(null);
  const audioBufferRef = useRef<AudioBuffer | null>(null);
  const startTimeRef = useRef<number>(0);
  const pausedAtRef = useRef<number>(0);
  const progressIntervalRef = useRef<number | null>(null);

  const stopAudio = () => {
    if (sourceNodeRef.current) {
      sourceNodeRef.current.stop();
      sourceNodeRef.current = null;
    }
    if (progressIntervalRef.current) window.clearInterval(progressIntervalRef.current);
    setIsPlaying(false);
  };

  const playAudio = async () => {
    try {
      if (!audioBufferRef.current) {
        setIsLoading(true);
        const base64Audio = await generateSpeech(text);
        if (!base64Audio) throw new Error("Gagal generate audio");
        if (!audioContextRef.current) audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
        audioBufferRef.current = await decodeAudioData(decode(base64Audio), audioContextRef.current, 24000, 1);
        setIsLoading(false);
      }
      if (!audioContextRef.current || !audioBufferRef.current) return;
      const source = audioContextRef.current.createBufferSource();
      source.buffer = audioBufferRef.current;
      source.connect(audioContextRef.current.destination);
      const offset = pausedAtRef.current;
      source.start(0, offset);
      startTimeRef.current = audioContextRef.current.currentTime - offset;
      sourceNodeRef.current = source;
      setIsPlaying(true);
      source.onended = () => {
        if (Math.abs((audioContextRef.current?.currentTime || 0) - startTimeRef.current - (audioBufferRef.current?.duration || 0)) < 0.1) {
          setIsPlaying(false);
          setProgress(100);
          pausedAtRef.current = 0;
          if (progressIntervalRef.current) window.clearInterval(progressIntervalRef.current);
        }
      };
      progressIntervalRef.current = window.setInterval(() => {
        if (audioContextRef.current && audioBufferRef.current) {
          const current = audioContextRef.current.currentTime - startTimeRef.current;
          setProgress(Math.min((current / audioBufferRef.current.duration) * 100, 100));
        }
      }, 100);
    } catch (e) {
      console.error(e);
      setIsLoading(false);
    }
  };

  const handleToggle = () => {
    if (isPlaying) {
      if (audioContextRef.current) pausedAtRef.current = audioContextRef.current.currentTime - startTimeRef.current;
      stopAudio();
    } else playAudio();
  };

  useEffect(() => {
    stopAudio();
    audioBufferRef.current = null;
    pausedAtRef.current = 0;
    setProgress(0);
    return () => stopAudio();
  }, [text]);

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-[2rem] p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm">
      <div className="flex items-center gap-5">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-lg ${isPlaying ? 'bg-indigo-600 text-white animate-pulse shadow-indigo-200' : 'bg-white text-indigo-600 shadow-slate-100'}`}>
          <Volume2 size={24} />
        </div>
        <div>
          <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Voice Assistant</h4>
          <p className="text-sm font-bold text-slate-800">{isPlaying ? 'Membacakan materi...' : isLoading ? 'Menyiapkan suara...' : 'Putar Audio Materi'}</p>
        </div>
      </div>
      <div className="flex items-center gap-6 flex-1 sm:max-w-[300px]">
        <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
          <div className="h-full bg-indigo-500 transition-all duration-300 shadow-sm" style={{ width: `${progress}%` }} />
        </div>
        <button 
          onClick={handleToggle}
          disabled={isLoading}
          className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all shadow-xl active:scale-90 disabled:opacity-50 shrink-0 ${isPlaying ? 'bg-rose-500 text-white shadow-rose-200' : 'bg-indigo-600 text-white shadow-indigo-200'}`}
        >
          {isLoading ? <Loader2 size={24} className="animate-spin" /> : isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
        </button>
      </div>
    </div>
  );
};

const LearningCenter: React.FC<{ onComplete: (id: string) => void; completedModules: string[] }> = ({ onComplete, completedModules }) => {
  const [activeModuleIdx, setActiveModuleIdx] = useState(0);
  const activeModule = MODULES[activeModuleIdx];
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const activeEl = document.getElementById(`mod-pill-${activeModule.id}`);
    if (activeEl && scrollRef.current) {
      const offset = activeEl.offsetLeft - (scrollRef.current.clientWidth / 2) + (activeEl.clientWidth / 2);
      scrollRef.current.scrollTo({ left: offset, behavior: 'smooth' });
    }
  }, [activeModuleIdx]);

  const handleNext = () => {
    onComplete(activeModule.id);
    if (activeModuleIdx < MODULES.length - 1) {
      setActiveModuleIdx(activeModuleIdx + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (activeModuleIdx > 0) {
      setActiveModuleIdx(activeModuleIdx - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-6xl mx-auto pb-24 animate-in fade-in duration-1000">
      <div className="mb-10 sticky top-0 z-20 bg-slate-50/90 backdrop-blur-xl pt-4 pb-6 -mx-8 px-8 border-b border-slate-200/50">
        <div ref={scrollRef} className="flex items-center gap-4 overflow-x-auto scrollbar-hide py-2">
          {MODULES.map((mod, idx) => {
            const Icon = mod.icon;
            const isActive = activeModuleIdx === idx;
            const isCompleted = completedModules.includes(mod.id);
            return (
              <button
                key={mod.id}
                id={`mod-pill-${mod.id}`}
                onClick={() => setActiveModuleIdx(idx)}
                className={`flex items-center gap-3 px-6 py-3.5 rounded-2xl text-xs font-bold transition-all shrink-0 border-2 ${
                  isActive ? 'bg-indigo-600 text-white border-indigo-600 shadow-2xl shadow-indigo-200 scale-105' : 
                  isCompleted ? 'bg-white text-emerald-600 border-emerald-100 shadow-sm' : 
                  'bg-white text-slate-400 border-slate-100 hover:border-slate-200 hover:text-slate-600'
                }`}
              >
                <Icon size={18} />
                <span className="whitespace-nowrap uppercase tracking-widest text-[10px]">{mod.title.split(':')[0]}</span>
                {isCompleted && <CheckCircle2 size={16} className="ml-1" />}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-start">
        <div className="lg:col-span-8">
          <div className="bg-white rounded-[3rem] border border-slate-200 shadow-2xl shadow-slate-200/50 overflow-hidden flex flex-col">
            <div className="p-10 md:p-16">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                <div className="flex items-center gap-4 text-indigo-600 font-black text-[10px] uppercase tracking-[0.3em]">
                  <div className="h-2 w-12 bg-indigo-600 rounded-full" />
                  Materi {activeModuleIdx + 1} / {MODULES.length}
                </div>
                {completedModules.includes(activeModule.id) && (
                  <span className="flex items-center gap-2 bg-emerald-50 text-emerald-600 px-5 py-2 rounded-2xl text-[10px] font-black border border-emerald-100 tracking-widest">
                    <CheckCircle2 size={16} /> SUDAH DIPELAJARI
                  </span>
                )}
              </div>
              
              <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-10 leading-tight tracking-tight">
                {activeModule.title}
              </h1>

              <div className="mb-12">
                <AudioPlayer text={activeModule.narrationText} />
              </div>
              
              <div 
                className="text-slate-600 prose prose-slate max-w-none prose-lg font-medium opacity-90 prose-headings:font-black prose-strong:text-slate-900 prose-strong:font-bold"
                dangerouslySetInnerHTML={{ __html: activeModule.content }}
              />

              {activeModule.caseStudy && (
                <div className="mt-16 bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl shadow-indigo-100">
                  <div className="relative z-10 space-y-10">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-[1.5rem] bg-indigo-600 flex items-center justify-center shadow-2xl shadow-indigo-500/40 shrink-0">
                        <Award size={36} />
                      </div>
                      <div>
                        <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] block mb-1">Analisis Studi Kasus</span>
                        <h3 className="text-2xl md:text-3xl font-black tracking-tight">{activeModule.caseStudy.title}</h3>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                      <div className="p-8 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 transition-colors">
                        <h4 className="text-[10px] font-black text-rose-400 uppercase tracking-widest mb-3 flex items-center gap-3">
                          <Activity size={18} /> Tantangan Utama
                        </h4>
                        <p className="text-base text-slate-300 italic leading-relaxed font-medium">{activeModule.caseStudy.challenge}</p>
                      </div>
                      <div className="p-8 bg-indigo-600/20 border border-indigo-500/30 rounded-[2rem] hover:bg-indigo-600/30 transition-colors">
                        <h4 className="text-[10px] font-black text-indigo-300 uppercase tracking-widest mb-3 flex items-center gap-3">
                          <Zap size={18} /> Solusi Integrasi AI
                        </h4>
                        <p className="text-base text-slate-200 leading-relaxed font-medium">{activeModule.caseStudy.aiSolution}</p>
                      </div>
                      <div className="p-8 bg-emerald-600/20 border border-emerald-500/30 rounded-[2rem] hover:bg-emerald-600/30 transition-colors">
                        <h4 className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-3 flex items-center gap-3">
                          <TrendingUp size={18} /> Hasil Akhir
                        </h4>
                        <p className="text-lg font-black text-slate-100">{activeModule.caseStudy.result}</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full -mr-48 -mt-48 blur-[100px]"></div>
                </div>
              )}

              <div className="mt-16 p-10 bg-indigo-50 border border-indigo-100 rounded-[3rem]">
                <h4 className="font-black text-slate-900 mb-8 flex items-center gap-4 text-xl">
                  <ListChecks size={28} className="text-indigo-600" /> Checklist Belajar
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['Pahami Konsep Dasar', 'Selesaikan Audio Materi', 'Tulis Poin Utama', 'Simulasi di Strategy Lab'].map((txt, i) => (
                    <label key={i} className="flex items-center gap-4 p-5 bg-white border border-slate-100 rounded-2xl cursor-pointer hover:border-indigo-200 transition-all shadow-sm hover:shadow-md">
                      <input type="checkbox" className="w-6 h-6 rounded-lg border-slate-300 text-indigo-600 focus:ring-indigo-500 transition-all" />
                      <span className="text-sm font-bold text-slate-700">{txt}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-10 md:p-12 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
              <button
                onClick={handlePrev}
                disabled={activeModuleIdx === 0}
                className="w-full sm:w-auto px-10 py-5 rounded-2xl font-bold text-slate-400 hover:bg-white hover:text-indigo-600 border border-transparent hover:border-slate-200 disabled:opacity-0 transition-all flex items-center justify-center gap-3"
              >
                Kembali
              </button>
              <button
                onClick={handleNext}
                className={`w-full sm:w-auto px-12 py-5 rounded-2xl font-black flex items-center justify-center gap-4 transition-all transform active:scale-95 shadow-2xl ${
                  activeModuleIdx === MODULES.length - 1 ? 'bg-emerald-600 text-white shadow-emerald-200' : 'bg-indigo-600 text-white shadow-indigo-200'
                }`}
              >
                {activeModuleIdx === MODULES.length - 1 ? <>Selesaikan Kurikulum <CheckCircle2 size={24} /></> : <>Modul Selanjutnya <ArrowRight size={24} /></>}
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <div className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-xl shadow-slate-100 relative overflow-hidden group">
            <h4 className="font-black text-slate-900 mb-6 flex items-center gap-3 text-xl">
              <Info size={24} className="text-indigo-600" /> Mindset Juragan
            </h4>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed font-bold italic opacity-80 group-hover:opacity-100 transition-opacity">"{activeModule.summary}"</p>
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-full -mr-12 -mt-12 group-hover:bg-indigo-100 transition-colors"></div>
          </div>
          <div className="bg-indigo-600 rounded-[2.5rem] p-10 text-white shadow-2xl shadow-indigo-100">
            <h4 className="font-black text-2xl mb-6">Investasi Waktu</h4>
            <p className="text-base text-indigo-100/90 leading-relaxed mb-10 font-medium">Membangun bisnis digital adalah maraton, bukan sprint. Satu jam belajar hari ini adalah ribuan jam kebebasan di masa depan.</p>
            <div className="p-6 bg-white/10 rounded-[1.5rem] border border-white/20 text-sm font-black text-center uppercase tracking-widest">Kerja Sekali, Untung Berkali-kali</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningCenter;
