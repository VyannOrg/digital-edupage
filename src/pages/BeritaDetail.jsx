import { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, User, Tag, Image as ImageIcon, Camera, Link as LinkIcon, PlayCircle, Check } from 'lucide-react';
import { beritaDatabase } from '../data/beritaData';

export default function BeritaDetail({ setActivePage, beritaId = 'berita-1' }) {
  const [isLoading, setIsLoading] = useState(true);
  const [berita, setBerita] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchDetailBerita = async () => {
      setIsLoading(true);
      
      const found = beritaDatabase.find(item => item.id === beritaId) || beritaDatabase[0];

      setTimeout(() => {
        setBerita(found);
        setIsLoading(false);
      }, 300);
    };

    fetchDetailBerita();
  }, [beritaId]);

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (isLoading || !berita) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-wf-white text-wf-darkest">
        <span className="font-bold text-wf-dark animate-pulse">Memuat Artikel...</span>
      </div>
    );
  }

  const shareText = encodeURIComponent(`${berita.judul} - SMP Digital Edupage`);
  const shareUrl = encodeURIComponent(window.location.href);
  const waShareUrl = `https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}`;

  return (
    <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 pt-28 sm:pt-32 md:pt-36 pb-16 space-y-8 sm:space-y-10 bg-wf-white text-wf-darkest">
      
      <div className="flex items-center animate-in fade-in slide-in-from-left-4 duration-500">
        <button 
          onClick={() => setActivePage('berita')}
          className="inline-flex items-center gap-2 text-wf-dark hover:text-wf-darkest font-bold text-xs md:text-sm transition-all cursor-pointer bg-wf-light hover:bg-wf-medium/20 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-wf-medium/30 shadow-sm"
        >
          <ArrowLeft size={16} />
          Kembali ke Pusat Informasi
        </button>
      </div>

      <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
        
        {/* HEADER ARTIKEL */}
        <div className="space-y-3 sm:space-y-4 text-center">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold bg-wf-blue text-wf-white px-3 py-1.5 rounded-lg uppercase tracking-wider shadow-sm">
            <Tag size={12} />
            {berita.kategori}
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-wf-darkest leading-tight">
            {berita.judul}
          </h1>
          
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs md:text-sm font-bold text-wf-dark pt-1 sm:pt-2">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} className="text-wf-blue" />
              {berita.tanggal}
            </span>
            <span className="text-wf-medium/40">•</span>
            <span className="flex items-center gap-1.5">
              <User size={14} className="text-wf-blue" />
              Oleh: {berita.penulis}
            </span>
          </div>
        </div>

        <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-wf-dark rounded-2xl sm:rounded-3xl overflow-hidden relative border border-wf-medium/30 shadow-sm">
          {berita.bannerUrl ? (
            <img 
              src={berita.bannerUrl} 
              alt={berita.judul} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center justify-center w-full h-full text-wf-medium/40 z-10 bg-wf-light">
              <ImageIcon size={44} className="mb-2 sm:mb-3" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-center px-4">
                Slot Foto Cover Berita (16:9)
              </span>
            </div>
          )}
        </div>

        <div className="bg-wf-light p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-[32px] border border-wf-medium/30 shadow-xs">
          <div 
            className="prose prose-sm sm:prose-base max-w-none text-wf-dark text-justify leading-relaxed sm:leading-loose
                       prose-headings:text-wf-darkest prose-headings:font-bold
                       prose-a:text-wf-blue prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: berita.konten }}
          />
        </div>

        <div className="bg-wf-light p-5 sm:p-6 rounded-2xl sm:rounded-[32px] border border-wf-medium/30 shadow-xs space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-wf-medium/20">
            <LinkIcon className="text-wf-blue shrink-0" size={20} />
            <h3 className="font-bold text-wf-darkest text-base sm:text-lg">Tautan & Media Terkait</h3>
          </div>
          
          <div className="w-full aspect-video bg-wf-dark rounded-xl sm:rounded-2xl overflow-hidden relative border border-wf-medium/30 flex items-center justify-center">
            {berita.videoEmbedUrl ? (
              <iframe 
                src={berita.videoEmbedUrl} 
                title="Video Dokumentasi" 
                className="w-full h-full"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="flex flex-col items-center text-wf-medium/40 z-10 text-center px-4">
                <PlayCircle size={36} className="mb-2" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Slot Embed Video / Tautan Luar</span>
              </div>
            )}
          </div>
        </div>

        {berita.galeriDokumentasi && berita.galeriDokumentasi.length > 0 && (
          <div className="bg-wf-light p-5 sm:p-8 rounded-2xl sm:rounded-[32px] border border-wf-medium/30 shadow-xs space-y-4 sm:space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-wf-medium/20">
              <Camera className="text-wf-blue shrink-0" size={20} />
              <h3 className="font-bold text-wf-darkest text-base sm:text-lg">Galeri Dokumentasi</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4">
              {berita.galeriDokumentasi.map((foto) => (
                <div key={foto.id} className="space-y-2 group">
                  <div className="w-full aspect-square bg-wf-dark rounded-xl sm:rounded-2xl overflow-hidden relative border border-wf-medium/30">
                    {foto.fotoUrl ? (
                      <img 
                        src={foto.fotoUrl} 
                        alt={foto.caption} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center w-full h-full text-wf-medium/40 z-10 bg-wf-white">
                        <ImageIcon size={24} className="mb-1" />
                        <span className="text-[9px] font-bold uppercase tracking-widest text-center">Slot Foto</span>
                      </div>
                    )}
                  </div>
                  {foto.caption && (
                    <p className="text-[10px] text-wf-dark leading-relaxed text-center italic px-1">
                      {foto.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="pt-5 sm:pt-6 border-t border-wf-medium/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs sm:text-sm font-bold text-wf-darkest">Bagikan artikel ini:</span>
          
          <div className="flex items-center gap-3">
            <a 
              href={waShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Bagikan ke WhatsApp"
              className="p-2.5 bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/30 rounded-xl transition-colors shadow-2xs cursor-pointer group flex items-center justify-center"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.052 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
            </a>
            <button 
              onClick={handleCopyLink}
              title="Salin Tautan"
              className="p-2.5 bg-wf-light hover:bg-wf-darkest text-wf-dark hover:text-wf-white border border-wf-medium/30 rounded-xl transition-colors shadow-2xs cursor-pointer flex items-center gap-1.5"
            >
              {copied ? (
                <>
                  <Check size={18} className="text-emerald-500" />
                  <span className="text-[10px] font-bold text-emerald-600">Tersalin!</span>
                </>
              ) : (
                <LinkIcon size={20} />
              )}
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
