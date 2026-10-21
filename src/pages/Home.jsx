import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Award, Users, BookOpen } from 'lucide-react';
import { schoolData } from '../data/schoolData';
import bannerFoto from '../images/placeholder-banner.png';
import kepsek from '../images/placeholder-kepalasekolah.png';
import berita from '../images/placeholder-berita.png';

export default function Home({ setActivePage }) {
  // 1. STATE LOGIC UNTUK HERO BANNER DINAMIS
  const [heroBanner, setHeroBanner] = useState({
    badge: '-',
    title: '-',
    description: '-',
    imageUrl: bannerFoto,
  });

  // 2. STATE LOGIC UNTUK CAROUSEL SLIDER
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [slides, setSlides] = useState(schoolData.heroSlides || []);

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

  return (
    <div className="space-y-20 pb-20 bg-wf-white text-wf-darkest">
      
      {/* ---------------- SECTION 1: HERO BANNER ---------------- */}
        <section className="relative bg-wf-darkest text-wf-white w-full -mt-32 pt-32">
            <div className="relative w-full h-[520px] pb-36 pt-12 px-6 lg:px-12 flex items-end overflow-hidden">
                
                {/* FOTO BANNER (Opacity dinaikkan ke 60% & hapus mix-blend-overlay) */}
                {heroBanner.imageUrl && (
                <img 
                    src={heroBanner.imageUrl} 
                    alt={heroBanner.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-80 transition-opacity duration-500"
                />
                )}
                
                {/* OVERLAY GRADIENT DIBUAT LEBIH TRANSPARAN */}
                <div className="absolute inset-0 bg-gradient-to-r from-wf-darkest/80 via-wf-darkest/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-wf-darkest via-transparent to-transparent" />

                {/* Content Container (Teks Kanan Bawah) */}
                <div className="max-w-[1800px] w-full mx-auto relative z-10 flex justify-end pb-6">
                <div className="text-right max-w-2xl space-y-2">
                    {heroBanner.badge && (
                    <span className="text-xs font-bold tracking-wider uppercase text-wf-blue bg-wf-darkest/90 px-3 py-1 rounded border border-wf-medium/30 inline-block">
                        {heroBanner.badge}
                    </span>
                    )}
                    <h1 className="text-2xl md:text-3xl font-extrabold text-wf-white leading-tight">
                    {heroBanner.title}
                    </h1>
                    <p className="text-wf-medium text-sm md:text-base">
                    {heroBanner.description}
                    </p>
                </div>
                </div>
            </div>
        </section>

      {/* ---------------- OVERLAPPING CAROUSEL (3:4) ---------------- */}
      <div className="max-w-[1800px] w-full mx-auto px-6 lg:px-12 -mt-36 relative z-20">
        <div className="relative bg-wf-light p-6 md:p-8 rounded-3xl shadow-xl border border-wf-medium/30">
          
          <button
            onClick={prevSlide}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-wf-blue text-wf-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer ring-4 ring-wf-light"
          >
            <ChevronLeft size={28} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-wf-blue text-wf-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer ring-4 ring-wf-light"
          >
            <ChevronRight size={28} />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-2">
            {visibleSlides.map((slide, idx) => {
              const isActive = slide.realIndex === activeSlide;
              return (
                <div
                  key={`${slide.id}-${idx}`}
                  onClick={() => setActiveSlide(slide.realIndex)}
                  className={`relative rounded-2xl overflow-hidden aspect-[3/4] w-full group transition-all duration-300 bg-wf-dark flex flex-col justify-end items-end p-5 cursor-pointer ${
                    isActive 
                      ? 'ring-2 ring-wf-blue scale-[1.02] shadow-md' 
                      : 'opacity-80 hover:opacity-100'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-wf-darkest/95 via-wf-darkest/40 to-transparent" />

                  <div className="relative z-10 space-y-2 text-right flex flex-col items-end">
                    <span className="text-xs font-bold px-3 py-1 bg-wf-blue text-wf-white rounded-md inline-block">
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

        </div>
      </div>

      {/* ---------------- SECTION 2: SAMBUTAN & RECENT APPS (TANPA GARIS SAMBUNGAN & BER-RADIUS HALUS) ---------------- */}
      <section className="max-w-[1800px] w-full mx-auto px-6 lg:px-12 pt-4">
        
        {/* BARIS ATAS: KANVAS SAMBUTAN + WIDGET RECENT APPS STACK */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* KANVAS SAMBUTAN ATAS (Tanpa border bawah & tanpa shadow pembatas) */}
          <div className="lg:col-span-7 bg-wf-light rounded-tl-3xl rounded-tr-3xl p-6 md:p-8 border border-wf-medium/30 border-b-0">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              {/* FOTO KEPALA SEKOLAH (3:4 PORTRAIT) */}
              <div className="md:col-span-4 max-w-[210px] w-full bg-wf-dark aspect-[3/4] rounded-tr-2xl overflow-hidden relative mx-auto md:mx-0">
                <img 
                  src= {kepsek}
                  alt="Kepala Sekolah" 
                  className="w-full h-full object-cover opacity-90"
                />
              </div>

              {/* TEKS SAMBUTAN */}
              <div className="md:col-span-8 space-y-3">
                <span className="text-xs font-bold text-wf-dark uppercase tracking-wider block">
                  -
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-wf-darkest leading-tight">
                  -
                </h2>
                <p className="text-wf-dark text-xs leading-relaxed">
                  -
                </p>
                <button
                  onClick={() => setActivePage('profil')}
                  className="bg-wf-blue hover:opacity-90 text-wf-white px-5 py-2.5 rounded-xl text-xs md:text-sm font-semibold inline-flex items-center gap-2 transition-all cursor-pointer shadow-sm"
                >
                  Baca Selengkapnya
                  <ArrowRight size={16} />
                </button>
              </div>

            </div>
          </div>

          {/* WIDGET 5 RECENT APPS STACK */}
          <div className="lg:col-span-5 flex items-center justify-center py-2 px-2">
            <div className="flex -space-x-10 hover:-space-x-4 transition-all duration-300 items-center justify-center w-full">
              {[
                { title: '-', code: '-', category: '-' },
                { title: '-', code: '-', category: '-' },
                { title: '-', code: '-', category: '-' },
                { title: '-', code: '-', category: '-' },
                { title: '-', code: '-', category: '-' },
              ].map((item, index) => (
                <div 
                  key={index}
                  style={{ zIndex: index + 1 }}
                  className="w-36 h-64 bg-wf-darkest border border-wf-dark rounded-2xl p-4 flex flex-col justify-between shadow-2xl transform transition-all duration-300 hover:-translate-y-4 hover:scale-105 cursor-pointer group"
                >
                  <div className="flex justify-between items-center border-b border-wf-dark pb-2">
                    <span className="text-[10px] font-extrabold text-wf-blue uppercase tracking-widest">
                      {item.code}
                    </span>
                    <div className="w-2 h-2 rounded-full bg-wf-blue"></div>
                  </div>

                  <div className="my-auto py-2">
                    <span className="text-[10px] text-wf-medium block mb-1 font-medium">
                      {item.category}
                    </span>
                    <h4 className="text-xs font-bold text-wf-white leading-snug group-hover:text-wf-blue transition-colors line-clamp-3">
                      {item.title}
                    </h4>
                  </div>

                  <div className="pt-2 border-t border-wf-dark flex justify-end">
                    <ArrowRight size={14} className="text-wf-medium group-hover:text-wf-blue group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* BARIS BAWAH: BILAH KAKI L-SHAPE + 3 KARTU STATISTIK (DILENGKAPI RADIUS LENGKUNG DI LINGKARAN O) */}
        <div className="bg-wf-light rounded-bl-3xl rounded-br-3xl rounded-tr-3xl p-6 md:p-8 border border-wf-medium/30 border-t-0 -mt-px">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* BILAH EXTENSION FOTO L-SHAPE */}
            <div className="lg:col-span-5 bg-wf-darkest text-wf-white p-4 rounded-r-2xl rounded-bl-xl flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-8 bg-wf-blue rounded-full"></div>
                <div>
                  <span className="block font-bold text-xs text-wf-white">-</span>
                  <span className="text-[10px] text-wf-medium">-</span>
                </div>
              </div>
              <span className="text-[10px] font-bold text-wf-blue bg-wf-dark px-3 py-1 rounded-lg border border-wf-medium/20">
                -
              </span>
            </div>

            {/* 3 KARTU STATISTIK */}
            <div className="lg:col-span-7 grid grid-cols-3 gap-4">
              <div className="bg-wf-white p-4 rounded-2xl border border-wf-medium/30 text-center shadow-2xs">
                <Award className="mx-auto text-wf-blue mb-1" size={22} />
                <span className="block font-bold text-wf-darkest text-xs md:text-sm">-</span>
                <span className="text-[10px] text-wf-dark">-</span>
              </div>
              <div className="bg-wf-white p-4 rounded-2xl border border-wf-medium/30 text-center shadow-2xs">
                <Users className="mx-auto text-wf-blue mb-1" size={22} />
                <span className="block font-bold text-wf-darkest text-xs md:text-sm">-</span>
                <span className="text-[10px] text-wf-dark">-</span>
              </div>
              <div className="bg-wf-white p-4 rounded-2xl border border-wf-medium/30 text-center shadow-2xs">
                <BookOpen className="mx-auto text-wf-blue mb-1" size={22} />
                <span className="block font-bold text-wf-darkest text-xs md:text-sm">-</span>
                <span className="text-[10px] text-wf-dark">-</span>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* ---------------- SECTION 3: GRID KARTU BERITA 3 KOLOM ---------------- */}
      <section className="max-w-[1800px] w-full mx-auto px-6 lg:px-12">
        <div className="mb-8">
          <span className="text-xs font-bold text-wf-dark uppercase tracking-wider block">
            -
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-wf-darkest">-</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {schoolData.news.map((item) => (
            <div 
              key={item.id} 
              className="bg-wf-light rounded-3xl border border-wf-medium/30 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="h-48 bg-wf-dark relative">
                  <img 
                    src={berita} 
                    alt={item.title}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <span className="absolute top-3 right-3 bg-wf-darkest/90 text-wf-white text-xs px-2.5 py-1 rounded-lg">
                    {item.date}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-wf-darkest text-base mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-wf-dark text-xs md:text-sm leading-relaxed line-clamp-2">
                    {item.snippet}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-1 flex justify-end">
                <button className="bg-wf-blue hover:opacity-90 text-wf-white px-4 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer">
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