import { useState, useEffect } from 'react';
import { Map, Images, Search, MapPin, MonitorPlay } from 'lucide-react';

export default function Fasilitas() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('Semua');
  
  const [fasilitasData, setFasilitasData] = useState({
    denahUrl: '',
    fasilitas: []
  });

  useEffect(() => {
    const fetchFasilitas = async () => {
      setIsLoading(true);
      
      const dummyDatabase = {
        denahUrl: '',
        fasilitas: [
          {
            id: 1,
            nama: 'Laboratorium Rekayasa Perangkat Lunak',
            kategori: 'Akademik',
            deskripsi: 'Dilengkapi dengan PC spesifikasi tinggi, dual monitor, dan koneksi internet fiber optic khusus untuk praktik coding dan pengembangan aplikasi.',
            fotoUrl: '',
          },
          {
            id: 2,
            nama: 'Perpustakaan Digital & Ruang Baca',
            kategori: 'Akademik',
            deskripsi: 'Menyediakan ribuan e-book, jurnal, serta area baca yang nyaman dan tenang dengan akses Wi-Fi berkecepatan tinggi.',
            fotoUrl: '', 
          },
          {
            id: 3,
            nama: 'Lapangan Basket Indoor',
            kategori: 'Olahraga',
            deskripsi: 'Fasilitas olahraga berstandar nasional dengan tribun penonton dan lantai khusus untuk keamanan siswa.',
            fotoUrl: '', 
          },
          {
            id: 4,
            nama: 'Masjid Ulul Albab',
            kategori: 'Umum',
            deskripsi: 'Pusat kegiatan keagamaan siswa dengan area ibadah yang luas, bersih, dan sejuk.',
            fotoUrl: '', 
          },
          {
            id: 5,
            nama: 'Kantin Sehat Digital',
            kategori: 'Umum',
            deskripsi: 'Food court modern yang mengusung konsep pembayaran cashless (non-tunai) dengan beragam pilihan makanan bergizi.',
            fotoUrl: '', 
          },
          {
            id: 6,
            nama: 'Studio Multimedia & Podcast',
            kategori: 'Akademik',
            deskripsi: 'Ruangan kedap suara yang dilengkapi kamera, lighting, dan audio mixer profesional untuk produksi konten digital.',
            fotoUrl: '', 
          }
        ]
      };

      setTimeout(() => {
        setFasilitasData(dummyDatabase);
        setIsLoading(false);
      }, 300);
    };

    fetchFasilitas();
  }, []);

  const filters = ['Semua', 'Akademik', 'Olahraga', 'Umum'];
  
  const filteredFasilitas = activeFilter === 'Semua' 
    ? fasilitasData.fasilitas 
    : fasilitasData.fasilitas.filter(item => item.kategori === activeFilter);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-wf-white text-wf-darkest">
        <span className="font-bold text-wf-dark animate-pulse">Memuat Peta & Fasilitas...</span>
      </div>
    );
  }

  return (
    <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 pt-28 sm:pt-32 md:pt-36 pb-16 space-y-12 sm:space-y-16 bg-wf-white text-wf-darkest">
      
      {/* PETA DENAH SECTION */}
      <section className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        
        <div className="space-y-2 max-w-3xl">
          <span className="text-xs font-bold text-wf-blue uppercase tracking-widest block">
            Eksplorasi Lingkungan
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-wf-darkest tracking-tight">
            Denah & Fasilitas Sekolah
          </h1>
          <p className="text-wf-dark text-xs sm:text-sm md:text-base leading-relaxed pt-1">
            Kenali setiap sudut area institusi kami. Kami menyediakan sarana dan prasarana modern untuk mendukung ekosistem belajar yang optimal, aman, dan nyaman bagi siswa.
          </p>
        </div>

        <div className="bg-wf-light p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-[32px] border border-wf-medium/30 shadow-sm space-y-4 sm:space-y-6">
          <div className="flex items-center gap-3">
            <Map className="text-wf-blue shrink-0" size={24} />
            <h2 className="text-lg sm:text-2xl font-bold text-wf-darkest">Peta Denah Interaktif</h2>
          </div>

          <div className="w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[3/1] bg-wf-dark rounded-xl sm:rounded-2xl border-2 border-dashed border-wf-medium/40 flex flex-col items-center justify-center relative overflow-hidden group">
            {fasilitasData.denahUrl ? (
              <img 
                src={fasilitasData.denahUrl} 
                alt="Denah Sekolah" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            ) : (
              <>
                <MapPin size={40} className="text-wf-medium/40 mb-2 sm:mb-3" />
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-wf-medium/80 text-center px-4">
                  Slot Foto / Gambar Vektor Denah Sekolah
                </span>
                <span className="text-[9px] sm:text-[10px] text-wf-medium/50 mt-1">(Rasio Lanskap / Ultra-wide)</span>
              </>
            )}
          </div>
        </div>

      </section>

      {/* GALERI FASILITAS SECTION */}
      <section className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-wf-medium/20">
          <div className="flex items-center gap-3">
            <Images className="text-wf-blue shrink-0" size={26} />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-wf-darkest">Galeri Fasilitas</h2>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 bg-wf-light p-1.5 rounded-full border border-wf-medium/30 self-start sm:self-auto">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === f
                    ? 'bg-wf-darkest text-wf-white shadow-sm'
                    : 'text-wf-dark hover:text-wf-darkest hover:bg-wf-medium/20'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredFasilitas.map((item) => (
            <div 
              key={item.id} 
              className="bg-wf-light rounded-2xl sm:rounded-3xl border border-wf-medium/30 overflow-hidden shadow-xs hover:shadow-md transition-all group flex flex-col"
            >
              <div className="w-full aspect-video bg-wf-dark flex items-center justify-center relative overflow-hidden border-b border-wf-medium/20">
                {item.fotoUrl ? (
                  <img 
                    src={item.fotoUrl} 
                    alt={item.nama} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-wf-medium/40 z-10">
                    <MonitorPlay size={36} className="mb-2" />
                    <span className="text-[9px] font-bold uppercase tracking-widest">Slot Foto Lanskap 16:9</span>
                  </div>
                )}
                
                <span className="absolute top-3.5 right-3.5 bg-wf-darkest/90 backdrop-blur text-wf-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg border border-wf-medium/20 z-20">
                  {item.kategori}
                </span>
              </div>

              <div className="p-5 sm:p-6 flex flex-col flex-grow bg-wf-white">
                <h3 className="font-bold text-wf-darkest text-base sm:text-lg leading-snug mb-2.5 line-clamp-2 group-hover:text-wf-blue transition-colors">
                  {item.nama}
                </h3>
                <p className="text-wf-dark text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {item.deskripsi}
                </p>
                
                <div className="mt-auto pt-4 sm:pt-5">
                  <div className="w-8 h-1 bg-wf-blue rounded-full opacity-50 group-hover:w-12 transition-all duration-300"></div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {filteredFasilitas.length === 0 && (
          <div className="py-20 text-center bg-wf-light rounded-3xl border border-wf-medium/30 border-dashed flex flex-col items-center justify-center">
            <Search size={40} className="text-wf-medium/50 mb-3" />
            <p className="text-wf-dark font-medium text-sm">Tidak ada fasilitas dalam kategori {activeFilter} yang ditemukan.</p>
          </div>
        )}

      </section>

    </div>
  );
}
