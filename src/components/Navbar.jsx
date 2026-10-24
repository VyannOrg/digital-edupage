import { useState, useEffect } from 'react';
import { GraduationCap, Menu, X, ArrowUpRight } from 'lucide-react';
import { schoolData } from '../data/schoolData';

export default function Navbar({ activePage, setActivePage }) {
  const [currentDate, setCurrentDate] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
      setCurrentDate(now.toLocaleDateString('id-ID', options));
    };
    updateDate();
  }, []);

  // Close mobile menu when active page changes
  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', label: 'Beranda' },
    { id: 'profil', label: 'Profil Sekolah' },
    { id: 'guru', label: 'Guru & Staf' },
    { id: 'fasilitas', label: 'Fasilitas & Denah' },
    { id: 'ekskul', label: 'Ekstrakurikuler' },
    { id: 'berita', label: 'Berita & Pengumuman' },
    { id: 'prestasi', label: 'Prestasi' },
    { id: 'kontak', label: 'Kontak' },
  ];

  return (
    <nav className="fixed top-0 inset-x-0 z-50 p-3 sm:p-4 md:p-6 pointer-events-none">
      <div className="max-w-[1800px] mx-auto flex flex-col items-start pointer-events-auto">
        
        {/* Main Floating Bar */}
        <div className="bg-wf-white/95 backdrop-blur-md border border-wf-medium/30 rounded-2xl sm:rounded-3xl w-full p-2 sm:p-2.5 flex items-center justify-between shadow-sm">
          
          {/* Brand Logo & Title */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 sm:gap-3 pl-1 sm:pl-2 cursor-pointer group"
          >
            <div className="w-9 h-9 sm:w-11 sm:h-11 bg-wf-darkest text-wf-white rounded-xl overflow-hidden flex items-center justify-center border border-wf-medium/30 shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
              <GraduationCap size={20} className="text-wf-blue" />
            </div>
            
            <div className="flex flex-col justify-center max-w-[170px] xs:max-w-[220px] sm:max-w-none">
              <h1 className="font-extrabold text-wf-darkest text-xs sm:text-sm md:text-base leading-tight group-hover:text-wf-blue transition-colors truncate">
                {schoolData.info.name}
              </h1>
              <span className="text-[9px] sm:text-[10px] text-wf-dark font-medium leading-none truncate mt-0.5">
                {schoolData.info.phone} <span className="mx-1 opacity-50">•</span> {schoolData.info.email}
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links (>= xl) */}
          <div className="hidden xl:flex items-center gap-1.5 md:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3.5 py-2 rounded-2xl text-xs md:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activePage === link.id
                    ? 'bg-wf-darkest text-wf-white shadow-sm'
                    : 'bg-transparent text-wf-dark hover:bg-wf-medium/20 hover:text-wf-darkest'
                }`}
              >
                {link.label}
              </button>
            ))}
            
            <a 
              href={schoolData.info.ppdbUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-wf-blue hover:opacity-90 text-wf-white px-4 py-2 rounded-2xl text-xs md:text-sm font-bold transition-all whitespace-nowrap ml-1 shadow-sm flex items-center gap-1.5 cursor-pointer"
            >
              Portal SPMB
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile & Tablet Actions (< xl) */}
          <div className="flex xl:hidden items-center gap-2 pr-1">
            <a 
              href={schoolData.info.ppdbUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-wf-blue hover:opacity-90 text-wf-white px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1 shadow-xs cursor-pointer"
            >
              <span className="hidden xs:inline">SPMB</span>
              <ArrowUpRight size={13} />
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Tutup Menu" : "Buka Menu"}
              className="p-2 rounded-xl bg-wf-light hover:bg-wf-medium/20 text-wf-darkest border border-wf-medium/30 transition-colors cursor-pointer"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>

        {/* Date Notch */}
        <div className="bg-wf-white/95 backdrop-blur-md border border-wf-medium/30 border-t-0 px-4 sm:px-6 py-1.5 rounded-b-2xl ml-4 sm:ml-8 shadow-sm">
          <span className="text-[9px] sm:text-[10px] font-bold text-wf-dark uppercase tracking-widest">
            {currentDate}
          </span>
        </div>

        {/* Mobile & Tablet Dropdown Drawer (< xl) */}
        {isMobileMenuOpen && (
          <div className="w-full xl:hidden mt-2 bg-wf-white/95 backdrop-blur-xl border border-wf-medium/30 rounded-3xl p-4 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-300">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pb-3 border-b border-wf-medium/20">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-4 py-2.5 rounded-xl text-left text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activePage === link.id
                      ? 'bg-wf-darkest text-wf-white shadow-xs'
                      : 'text-wf-dark hover:bg-wf-medium/10 hover:text-wf-darkest'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-3 flex items-center justify-between">
              <span className="text-[11px] font-medium text-wf-dark">
                Penerimaan Peserta Didik Baru
              </span>
              <a 
                href={schoolData.info.ppdbUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-wf-blue text-wf-white px-4 py-2 rounded-xl text-xs font-bold inline-flex items-center gap-1.5 shadow-sm"
              >
                Buka SPMB Online
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
}
