import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { schoolData } from '../data/schoolData';

export default function Footer({ setActivePage }) {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 sm:pt-12 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 sm:pb-10 border-b border-gray-800">
          
          {/* Brand & Address */}
          <div className="sm:col-span-2 space-y-3 sm:space-y-4">
            <div 
              onClick={() => setActivePage('home')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-gray-900 font-bold text-xl group-hover:scale-105 transition-transform">
                E
              </div>
              <span className="font-bold text-xl text-white group-hover:text-blue-400 transition-colors">
                {schoolData.info.name}
              </span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm max-w-md">
              {schoolData.info.slogan}
            </p>
            <div className="space-y-2 text-xs sm:text-sm pt-2">
              <div className="flex items-start gap-2">
                <MapPin size={17} className="text-gray-400 shrink-0 mt-0.5" />
                <span>{schoolData.info.address}, {schoolData.info.kelurahan}, Kec. {schoolData.info.kecamatan}, {schoolData.info.kabupaten}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={17} className="text-gray-400 shrink-0" />
                <span>{schoolData.info.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={17} className="text-gray-400 shrink-0" />
                <span>{schoolData.info.email}</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Navigasi Utama</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button onClick={() => setActivePage('home')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Beranda
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('profil')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Profil Sekolah
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('guru')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Guru & Staf
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('fasilitas')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Fasilitas & Denah
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('ekskul')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Ekstrakurikuler
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('prestasi')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Prestasi
                </button>
              </li>
            </ul>
          </div>

          {/* Services & Portals */}
          <div>
            <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Layanan & Portal</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a 
                  href={schoolData.info.ppdbUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white inline-flex items-center gap-1 transition-colors text-blue-400"
                >
                  Portal PPDB Online <ArrowUpRight size={14} />
                </a>
              </li>
              <li>
                <button 
                  onClick={() => setActivePage('kontak')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Kontak Humas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActivePage('berita')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Pusat Berita & Pengumuman
                </button>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-6 text-center text-[11px] sm:text-xs text-gray-500">
          © 2026 {schoolData.info.name}. Powered by Digital Edupage.
        </div>
      </div>
    </footer>
  );
}
