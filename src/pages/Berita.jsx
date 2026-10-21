import React, { useState, useEffect } from 'react';
import { Newspaper, Calendar, Megaphone, Trophy, ArrowRight, Activity } from 'lucide-react';

export default function Berita({ setActivePage }) {
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [beritaData, setBeritaData] = useState([]);

  useEffect(() => {
    const fetchBerita = async () => {
      setIsLoading(true);
      
      /* 
      const { data } = await supabase.from('berita').select('*').order('created_at', { ascending: false });
      if (data) setBeritaData(data);
      */
      
      const dummyDatabase = [
        {
          id: 'berita-1',
          judul: 'Peringatan Hari Pendidikan Nasional 2026 Berlangsung Meriah',
          kategori: 'Kegiatan',
          tanggal: '02 Mei 2026',
          snippet: 'Upacara bendera dan berbagai perlombaan mewarnai peringatan Hardiknas tahun ini. Semangat belajar dan merdeka belajar menjadi tema utama dalam sambutan Kepala Sekolah.',
          fotoUrl: '',
          penulis: 'Tim Jurnalis Sekolah'
        },
        {
          id: 'berita-2',
          judul: 'Pengumuman Pelaksanaan Ujian Akhir Semester Genap',
          kategori: 'Pengumuman',
          tanggal: '28 April 2026',
          snippet: 'Diberitahukan kepada seluruh siswa bahwa UAS Genap akan dilaksanakan mulai tanggal 15 Mei 2026. Harap mempersiapkan diri dan melengkapi persyaratan administrasi.',
          fotoUrl: '', 
          penulis: 'Humas & Kurikulum'
        },
        {
          id: 'berita-3',
          judul: 'Tim Robotik Bawa Pulang Medali Emas Tingkat Provinsi',
          kategori: 'Prestasi',
          tanggal: '20 April 2026',
          snippet: 'Kabar gembira datang dari Tim Robotik Edupage yang berhasil menyisihkan 45 sekolah lain dalam kompetisi Inovasi Teknologi Tepat Guna tingkat Provinsi Jawa Timur.',
          fotoUrl: '', 
          penulis: 'Tim Jurnalis Sekolah'
        },
        {
          id: 'berita-4',
          judul: 'Kunjungan Industri ke Perusahaan Teknologi Multinasional',
          kategori: 'Kegiatan',
          tanggal: '10 April 2026',
          snippet: 'Siswa kelas XI program keahlian Rekayasa Perangkat Lunak mengadakan kunjungan industri untuk melihat langsung proses kerja di perusahaan teknologi.',
          fotoUrl: '', 
          penulis: 'Kaprog RPL'
        },
        {
          id: 'berita-5',
          judul: 'Jadwal Libur Nasional dan Cuti Bersama Idul Fitri 2026',
          kategori: 'Pengumuman',
          tanggal: '01 April 2026',
          snippet: 'Penyesuaian kalender akademik terkait libur menyambut hari raya Idul Fitri 1447 H. Libur efektif akan dimulai pada pertengahan bulan depan.',
          fotoUrl: '', 
          penulis: 'Tata Usaha'
        },
        {
          id: 'berita-6',
          judul: 'Siswa Edupage Terpilih Sebagai Duta Lingkungan',
          kategori: 'Prestasi',
          tanggal: '15 Maret 2026',
          snippet: 'Dua siswa perwakilan sekolah kita berhasil dinobatkan sebagai Duta Peduli Lingkungan Kabupaten Lumajang setelah mempresentasikan program daur ulang limbah plastik.',
          fotoUrl: '', 
          penulis: 'Pembina OSIS'
        }
      ];

      setTimeout(() => {
        setBeritaData(dummyDatabase);
        setIsLoading(false);
      }, 500);
    };

    fetchBerita();
  }, []);
  const filters = ['Semua', 'Pengumuman', 'Kegiatan', 'Prestasi'];
  
  const filteredBerita = activeFilter === 'Semua' 
    ? beritaData 
    : beritaData.filter(item => item.kategori === activeFilter);

  const getCategoryIcon = (kategori) => {
    switch(kategori) {
      case 'Pengumuman': return <Megaphone size={14} />;
      case 'Kegiatan': return <Activity size={14} />;
      case 'Prestasi': return <Trophy size={14} />;
      default: return <Newspaper size={14} />;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-wf-white text-wf-darkest">
        <span className="font-bold text-wf-dark animate-pulse">Memuat Arsip Berita...</span>
      </div>
    );
  }

  return (
    <div className="max-w-[1800px] mx-auto px-6 lg:px-12 py-12 space-y-12 bg-wf-white text-wf-darkest">
      
      <div className="bg-wf-light rounded-[32px] border border-wf-medium/30 p-8 md:p-12 shadow-sm flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-bold text-wf-blue uppercase tracking-widest block">
            Pusat Informasi
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-wf-darkest tracking-tight">
            Berita & Pengumuman
          </h1>
          <p className="text-wf-dark text-sm md:text-base leading-relaxed">
            Dapatkan informasi terbaru seputar kegiatan akademik, prestasi siswa, dan pengumuman resmi sekolah.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 bg-wf-white p-2 rounded-2xl md:rounded-full border border-wf-medium/30 shrink-0">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeFilter === f
                  ? 'bg-wf-darkest text-wf-white shadow-sm'
                  : 'text-wf-dark hover:text-wf-darkest hover:bg-wf-medium/10'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {filteredBerita.map((item) => (
          <div 
            key={item.id} 
            className="bg-wf-light rounded-3xl border border-wf-medium/30 overflow-hidden shadow-xs hover:shadow-md transition-shadow group flex flex-col"
          >
            <div className="w-full aspect-video bg-wf-dark flex items-center justify-center relative overflow-hidden">
              {item.fotoUrl ? (
                <img 
                  src={item.fotoUrl} 
                  alt={item.judul} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-wf-medium/40 z-10">
                  <Newspaper size={32} className="mb-2" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-center px-4">
                    Slot Thumbnail Berita
                  </span>
                </div>
              )}
              
              <div className="absolute top-4 left-4 bg-wf-darkest/90 backdrop-blur text-wf-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg border border-wf-medium/20 z-20 flex items-center gap-1.5">
                {getCategoryIcon(item.kategori)}
                {item.kategori}
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow bg-wf-white">
              <div className="flex items-center gap-4 text-[10px] md:text-xs font-bold text-wf-dark mb-3">
                <span className="flex items-center gap-1.5">
                  <Calendar size={12} className="text-wf-blue" />
                  {item.tanggal}
                </span>
                <span className="text-wf-medium/40">•</span>
                <span>{item.penulis}</span>
              </div>

              <h3 className="font-bold text-wf-darkest text-lg leading-snug mb-3 line-clamp-2 group-hover:text-wf-blue transition-colors">
                {item.judul}
              </h3>
              <p className="text-wf-dark text-xs md:text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                {item.snippet}
              </p>
              
              <div className="pt-4 border-t border-wf-medium/20 mt-auto">
                <button 
                  onClick={() => setActivePage('berita-detail')} // Routing dummy ke Single Post
                  className="text-xs font-bold text-wf-blue hover:text-wf-darkest flex items-center gap-1.5 transition-colors cursor-pointer group/btn"
                >
                  Baca Selengkapnya
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredBerita.length === 0 && (
        <div className="py-24 text-center bg-wf-light rounded-3xl border border-wf-medium/30 border-dashed flex flex-col items-center justify-center">
          <Newspaper size={40} className="text-wf-medium/50 mb-3" />
          <p className="text-wf-dark font-medium text-sm">Belum ada publikasi untuk kategori {activeFilter}.</p>
        </div>
      )}

    </div>
  );
}