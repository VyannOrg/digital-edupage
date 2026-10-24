import { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Award, 
  Users, 
  BookOpen, 
  Building2, 
  Image as ImageIcon, 
  User, 
  Newspaper 
} from 'lucide-react';
import { schoolData } from '../data/schoolData';

export default function Home({ setActivePage, setSelectedBeritaId }) {
  const heroBanner = {
    badge: 'Pusat Keunggulan Teknologi',
    title: 'Membangun Generasi Cerdas & Berkarakter Digital',
    description: 'SMP Digital Edupage mengintegrasikan kurikulum adaptif dengan teknologi modern untuk mencetak talenta masa depan yang unggul dan berakhlak mulia.',
    imageUrl: '',
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = schoolData.heroSlides || [];

  const totalSlides = slides.length;

  const nextSlide = () => {
    if (totalSlides === 0) return;
    const nextIndex = (currentSlide + 1) % totalSlides;
    setCurrentSlide(nextIndex);
    setActiveSlide(nextIndex);
  };

  const prevSlide = () => {
    if (totalSlides === 0) return;
    const prevIndex = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
    setCurrentSlide(prevIndex);
    setActiveSlide(prevIndex);
  };

  const visibleSlides = Array.from({ length: 4 }).map((_, offset) => {
    if (totalSlides === 0) return null;
    const realIndex = (currentSlide + offset) % totalSlides;
    return {
      ...slides[realIndex],
      realIndex,
    };
  }).filter(Boolean);

  const programs = [
    { title: 'Kurikulum Coding & Robotik', code: 'IT-01', category: 'Inovasi' },
    { title: 'Laboratorium Digital Terpadu', code: 'LAB-02', category: 'Fasilitas' },
    { title: 'Karakter & Kepemimpinan', code: 'LDR-03', category: 'Karakter' },
    { title: 'Pembelajaran Berbasis Proyek', code: 'PBL-04', category: 'Akademik' },
    { title: 'Kemitraan Industri Teknologi', code: 'IND-05', category: 'Kolaborasi' },
  ];

  const handleReadNews = (id) => {
    if (setSelectedBeritaId) {
      setSelectedBeritaId(id);
      setActivePage('berita-detail');
    } else {
      setActivePage('berita');
    }
  };

  return (
    <div className="space-y-16 sm:space-y-20 pb-16 sm:pb-20 bg-wf-white text-wf-darkest overflow-x-hidden">
      
      {/* HERO BANNER */}
      <section className="relative bg-wf-darkest text-wf-white w-full -mt-24 sm:-mt-32 pt-24 sm:pt-32">
        <div className="relative w-full min-h-[460px] sm:min-h-[500px] md:h-[540px] pb-28 sm:pb-36 pt-20 sm:pt-28 px-4 sm:px-6 lg:px-12 flex items-end overflow-hidden">
          
          {heroBanner.imageUrl ? (
            <img 
              src={heroBanner.imageUrl} 
              alt={heroBanner.title}
              className="absolute inset-0 w-full h-full object-cover opacity-80 transition-opacity duration-500"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-wf-medium/20 pointer-events-none">
              <Building2 size={64} className="mb-2 opacity-30" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-wf-medium/30">
                Slot Foto Banner Utama
              </span>
            </div>
          )}
          
          <div className="absolute inset-0 bg-gradient-to-r from-wf-darkest/90 via-wf-darkest/50 to-transparent sm:to-wf-darkest/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-wf-darkest via-transparent to-transparent" />

          <div className="max-w-[1800px] w-full mx-auto relative z-10 flex justify-start sm:justify-end pb-4 sm:pb-6">
            <div className="text-left sm:text-right max-w-2xl space-y-2.5">
              {heroBanner.badge && (
                <span className="text-[10px] sm:text-xs font-bold tracking-wider uppercase text-wf-blue bg-wf-darkest/90 px-3 py-1 rounded border border-wf-medium/30 inline-block shadow-sm">
                  {heroBanner.badge}
                </span>
              )}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-wf-white leading-tight">
                {heroBanner.title}
              </h1>
              <p className="text-wf-medium text-xs sm:text-sm md:text-base leading-relaxed">
                {heroBanner.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CAROUSEL SLIDER */}
      <div className="max-w-[1800px] w-full mx-auto px-4 sm:px-6 lg:px-12 -mt-24 sm:-mt-36 relative z-20">
        <div className="relative bg-wf-light p-3.5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-xl border border-wf-medium/30">
          
          <button
            onClick={prevSlide}
            aria-label="Slide sebelumnya"
            className="absolute -left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 bg-wf-blue text-wf-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer ring-4 ring-wf-light"
          >
            <ChevronLeft size={22} className="sm:hidden" />
            <ChevronLeft size={28} className="hidden sm:block" />
          </button>
          
          <button
            onClick={nextSlide}
            aria-label="Slide berikutnya"
            className="absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-wf-blue text-wf-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer ring-4 ring-wf-light"
          >
            <ChevronRight size={22} className="sm:hidden" />
            <ChevronRight size={28} className="hidden sm:block" />
          </button>

          {/* Responsive slide layout: 1 card on mobile, 2 on tablet, 4 on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-1 sm:px-2">
            {visibleSlides.map((slide, idx) => {
              const isActive = slide.realIndex === activeSlide;
              const visibilityClass = idx === 0 
                ? 'flex' 
                : idx === 1 
                  ? 'hidden sm:flex' 
                  : 'hidden lg:flex';

              return (
                <div
                  key={`${slide.id}-${idx}`}
                  onClick={() => setActiveSlide(slide.realIndex)}
                  className={`relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[3/4] w-full group transition-all duration-300 bg-wf-dark flex-col justify-end items-end p-4 sm:p-5 cursor-pointer ${visibilityClass} ${
                    isActive 
                      ? 'ring-2 ring-wf-blue scale-[1.01] sm:scale-[1.02] shadow-md' 
                      : 'opacity-85 hover:opacity-100'
                  }`}
                >
                  {slide.image ? (
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-wf-medium/30 p-4">
                      <ImageIcon size={32} className="mb-2 opacity-50" />
                      <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-center">
                        Slot Foto Carousel
                      </span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-wf-darkest/95 via-wf-darkest/40 to-transparent" />

                  <div className="relative z-10 space-y-1.5 sm:space-y-2 text-right flex flex-col items-end">
                    <span className="text-[10px] sm:text-xs font-bold px-2.5 py-0.5 sm:px-3 sm:py-1 bg-wf-blue text-wf-white rounded-md inline-block shadow-2xs">
                      {slide.category}
                    </span>
                    <h3 className="text-wf-white font-bold text-sm md:text-base leading-snug line-clamp-2 text-right">
                      {slide.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Slide Indicator Dots */}
          <div className="flex sm:hidden justify-center items-center gap-1.5 mt-3 pt-1">
            {slides.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => {
                  setCurrentSlide(dotIdx);
                  setActiveSlide(dotIdx);
                }}
                aria-label={`Lihat slide ${dotIdx + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  dotIdx === activeSlide ? 'w-5 bg-wf-blue' : 'w-1.5 bg-wf-medium/40'
                }`}
              />
            ))}
          </div>

        </div>
      </div>

      {/* SAMBUTAN & PROGRAM STACK */}
      <section className="max-w-[1800px] w-full mx-auto px-4 sm:px-6 lg:px-12 pt-2 sm:pt-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Kepala Sekolah Card */}
          <div className="lg:col-span-7 bg-wf-light rounded-2xl sm:rounded-tl-3xl sm:rounded-tr-3xl p-5 sm:p-6 md:p-8 border border-wf-medium/30 lg:border-b-0">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6 items-center">
              
              <div className="sm:col-span-4 max-w-[170px] sm:max-w-[210px] w-full bg-wf-dark aspect-[3/4] rounded-2xl sm:rounded-tr-2xl overflow-hidden relative mx-auto sm:mx-0 shadow-sm shrink-0 flex items-center justify-center">
                <div className="flex flex-col items-center justify-center text-wf-medium/30 p-4">
                  <User size={56} className="mb-2" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-center">
                    Slot Foto 3:4
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-wf-darkest/60 via-transparent to-transparent opacity-40" />
              </div>

              <div className="sm:col-span-8 space-y-3 text-center sm:text-left">
                <span className="text-xs font-bold text-wf-blue uppercase tracking-wider block">
                  Sambutan Kepala Sekolah
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-wf-darkest leading-tight">
                  Drs. H. Ahmad Wijaya, M.Pd.
                </h2>
                <p className="text-wf-dark text-xs sm:text-sm leading-relaxed text-justify">
                  Selamat datang di portal resmi SMP Digital Edupage. Kami berkomitmen untuk terus berinovasi dalam menghadirkan ekosistem pendidikan yang adaptif terhadap perkembangan teknologi, menjunjung tinggi nilai-nilai karakter luhur, dan mempersiapkan siswa menjadi pembelajar sepanjang hayat.
                </p>
                <div className="pt-1">
                  <button
                    onClick={() => setActivePage('profil')}
                    className="bg-wf-blue hover:opacity-90 text-wf-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold inline-flex items-center gap-2 transition-all cursor-pointer shadow-sm"
                  >
                    Profil Selengkapnya
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Stacked Program Cards (Mobile-optimized) */}
          <div className="lg:col-span-5 flex items-center justify-center py-4 px-2 overflow-x-auto hide-scrollbar">
            <div className="flex -space-x-12 sm:-space-x-10 hover:-space-x-6 sm:hover:-space-x-4 transition-all duration-300 items-center justify-center min-w-max py-2">
              {programs.map((item, index) => (
                <div 
                  key={index}
                  style={{ zIndex: index + 1 }}
                  className="w-28 sm:w-36 h-56 sm:h-64 bg-wf-darkest border border-wf-dark rounded-2xl p-3 sm:p-4 flex flex-col justify-between shadow-xl sm:shadow-2xl transform transition-all duration-300 hover:-translate-y-3 sm:hover:-translate-y-4 hover:scale-105 cursor-pointer group"
                >
                  <div className="flex justify-between items-center border-b border-wf-dark pb-2">
                    <span className="text-[9px] sm:text-[10px] font-extrabold text-wf-blue uppercase tracking-widest">
                      {item.code}
                    </span>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-wf-blue"></div>
                  </div>

                  <div className="my-auto py-2">
                    <span className="text-[9px] sm:text-[10px] text-wf-medium block mb-1 font-medium">
                      {item.category}
                    </span>
                    <h4 className="text-[11px] sm:text-xs font-bold text-wf-white leading-snug group-hover:text-wf-blue transition-colors line-clamp-3">
                      {item.title}
                    </h4>
                  </div>

                  <div className="pt-2 border-t border-wf-dark flex justify-end">
                    <ArrowRight size={13} className="text-wf-medium group-hover:text-wf-blue group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* STATS & ACCREDITATION BANNER */}
        <div className="bg-wf-light rounded-2xl sm:rounded-bl-3xl sm:rounded-br-3xl sm:rounded-tr-3xl p-5 sm:p-6 md:p-8 border border-wf-medium/30 sm:border-t-0 -mt-px space-y-4 sm:space-y-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
            
            <div className="lg:col-span-5 bg-wf-darkest text-wf-white p-4 rounded-xl sm:rounded-r-2xl sm:rounded-bl-xl flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-8 bg-wf-blue rounded-full"></div>
                <div>
                  <span className="block font-bold text-xs sm:text-sm text-wf-white">Akreditasi A (Unggul)</span>
                  <span className="text-[10px] text-wf-medium">Sertifikasi BAN-S/M 2025-2030</span>
                </div>
              </div>
              <span className="text-[10px] font-bold text-wf-blue bg-wf-dark px-2.5 py-1 rounded-lg border border-wf-medium/20">
                Terverifikasi
              </span>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-wf-white p-3.5 sm:p-4 rounded-2xl border border-wf-medium/30 text-center shadow-2xs">
                <Award className="mx-auto text-wf-blue mb-1" size={20} />
                <span className="block font-bold text-wf-darkest text-sm sm:text-base">98.5%</span>
                <span className="text-[10px] text-wf-dark leading-tight block">Tingkat Prestasi & Kelulusan</span>
              </div>
              <div className="bg-wf-white p-3.5 sm:p-4 rounded-2xl border border-wf-medium/30 text-center shadow-2xs">
                <Users className="mx-auto text-wf-blue mb-1" size={20} />
                <span className="block font-bold text-wf-darkest text-sm sm:text-base">750+</span>
                <span className="text-[10px] text-wf-dark leading-tight block">Siswa & Siswi Aktif</span>
              </div>
              <div className="bg-wf-white p-3.5 sm:p-4 rounded-2xl border border-wf-medium/30 text-center shadow-2xs">
                <BookOpen className="mx-auto text-wf-blue mb-1" size={20} />
                <span className="block font-bold text-wf-darkest text-sm sm:text-base">15+</span>
                <span className="text-[10px] text-wf-dark leading-tight block">Program Ekstrakurikuler</span>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* LATEST NEWS & ANNOUNCEMENTS */}
      <section className="max-w-[1800px] w-full mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
          <div>
            <span className="text-xs font-bold text-wf-blue uppercase tracking-wider block">
              Pusat Publikasi
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-wf-darkest">
              Berita & Pengumuman Terbaru
            </h2>
          </div>
          <button 
            onClick={() => setActivePage('berita')}
            className="text-xs font-bold text-wf-blue hover:text-wf-darkest flex items-center gap-1.5 transition-colors cursor-pointer group/all self-start sm:self-auto"
          >
            Lihat Semua Berita
            <ArrowRight size={14} className="group-hover/all:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {schoolData.news.map((item) => (
            <div 
              key={item.id} 
              className="bg-wf-light rounded-2xl sm:rounded-3xl border border-wf-medium/30 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between group"
            >
              <div>
                <div className="h-44 sm:h-48 bg-wf-dark relative overflow-hidden flex items-center justify-center">
                  {item.fotoUrl ? (
                    <img 
                      src={item.fotoUrl} 
                      alt={item.title}
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-wf-medium/40 z-10">
                      <Newspaper size={32} className="mb-2" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-center px-4">
                        Slot Thumbnail Berita
                      </span>
                    </div>
                  )}
                  <span className="absolute top-3 right-3 bg-wf-darkest/90 text-wf-white text-[11px] px-2.5 py-1 rounded-lg backdrop-blur shadow-2xs z-20">
                    {item.date}
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="font-bold text-wf-darkest text-base sm:text-lg mb-2 line-clamp-2 group-hover:text-wf-blue transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-wf-dark text-xs sm:text-sm leading-relaxed line-clamp-2">
                    {item.snippet}
                  </p>
                </div>
              </div>

              <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 flex justify-end">
                <button 
                  onClick={() => handleReadNews(item.id)}
                  className="bg-wf-blue hover:opacity-90 text-wf-white px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                >
                  Baca
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
