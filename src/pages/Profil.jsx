import { useState, useEffect } from 'react';
import { Building2, MapPin, Target, Compass, Users, History, Image as ImageIcon } from 'lucide-react';

export default function Profil() {
  const [activeTab, setActiveTab] = useState('profil');
  const [isLoading, setIsLoading] = useState(true);
  
  const [profileData, setProfileData] = useState({
    name: '',
    sejarah: '',
    visi: '',
    misi: [],
    identitas: [],
    alamat: [],
    fotoSekolahUrl: '',
    fotoStrukturUrl: '',
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      setIsLoading(true);
      
      const dummyDatabase = {
        name: 'SMP Digital Edupage',
        sejarah: 'Berdiri sejak tahun 2010, SMP Digital Edupage telah bertransformasi menjadi institusi percontohan dalam penerapan kurikulum berbasis teknologi. Kami terus berinovasi untuk mencetak generasi yang adaptif terhadap disrupsi digital tanpa meninggalkan nilai-nilai karakter bangsa.',
        visi: 'Mewujudkan ekosistem pendidikan menengah yang unggul dalam teknologi informasi, berkarakter mulia, dan berwawasan global.',
        misi: [
          'Menyelenggarakan proses pembelajaran interaktif berbasis perangkat digital terkini.',
          'Mengintegrasikan pendidikan moral dan etika dalam setiap aspek kegiatan akademik.',
          'Mengembangkan minat dan bakat siswa melalui fasilitas ekstrakurikuler yang komprehensif.',
          'Menjalin kemitraan strategis dengan institusi teknologi untuk pemutakhiran kurikulum.'
        ],
        identitas: [
          { label: 'Nama Sekolah', value: 'SMP Digital Edupage' },
          { label: 'NPSN', value: '20198765' },
          { label: 'Status', value: 'Swasta' },
          { label: 'Bentuk Pendidikan', value: 'SMP' },
          { label: 'Status Kepemilikan', value: 'Yayasan Edupage' },
          { label: 'SK Pendirian Sekolah', value: '123/YAYASAN/2010' },
          { label: 'Tanggal SK Pendirian', value: '10 Oktober 2010' },
          { label: 'SK Izin Operasional', value: '124/IZIN/2010' },
          { label: 'Tanggal SK Izin Operasional', value: '15 Oktober 2010' },
        ],
        alamat: [
          { label: 'Alamat Lengkap', value: 'Jl. Teknologi Raya No. 99' },
          { label: 'Dusun', value: 'RT 01 / RW 02' },
          { label: 'Desa / Kelurahan', value: 'Cybercity' },
          { label: 'Kecamatan', value: 'Inovasi' },
          { label: 'Kabupaten/Kota', value: 'Lumajang' },
          { label: 'Provinsi', value: 'Jawa Timur' },
          { label: 'Kode Pos', value: '67311' },
          { label: 'Nomor Telepon', value: '(0334) 881-234' },
        ],
        fotoSekolahUrl: '',
        fotoStrukturUrl: '',
      };

      setTimeout(() => {
        setProfileData(dummyDatabase);
        setIsLoading(false);
      }, 300);
    };

    fetchProfileData();
  }, []);

  const tabs = [
    { id: 'profil', label: 'Profil & Sejarah' },
    { id: 'identitas', label: 'Identitas Resmi' },
    { id: 'visi-misi', label: 'Visi & Misi' },
    { id: 'struktur', label: 'Struktur Organisasi' },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-wf-white text-wf-darkest">
        <span className="font-bold text-wf-dark animate-pulse">Memuat Data Profil...</span>
      </div>
    );
  }

  return (
    <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 pt-28 sm:pt-32 md:pt-36 pb-16 space-y-8 sm:space-y-12 bg-wf-white text-wf-darkest">
      
      <div className="space-y-2">
        <span className="text-xs font-bold text-wf-blue uppercase tracking-widest block">
          Mengenal Lebih Dekat
        </span>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-wf-darkest tracking-tight">
          Profil {profileData.name}
        </h1>
      </div>

      <div className="bg-wf-light rounded-2xl sm:rounded-[32px] border border-wf-medium/30 p-4 sm:p-8 md:p-10 shadow-sm space-y-8 sm:space-y-10">
        
        {/* Tabs Bar */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 border-b border-wf-medium/20 pb-4 sm:pb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-wf-darkest text-wf-white shadow-md'
                  : 'bg-transparent text-wf-dark hover:bg-wf-medium/20 hover:text-wf-darkest'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Profil & Sejarah */}
        {activeTab === 'profil' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 text-wf-darkest">
                <History size={24} className="text-wf-blue shrink-0" />
                <h2 className="text-xl sm:text-2xl font-bold">Sejarah Singkat</h2>
              </div>
              <p className="text-wf-dark text-sm sm:text-base leading-relaxed text-justify">
                {profileData.sejarah}
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="w-full aspect-[4/3] bg-wf-medium/10 border-2 border-dashed border-wf-medium/30 rounded-2xl sm:rounded-3xl flex flex-col items-center justify-center text-wf-dark overflow-hidden relative">
                {profileData.fotoSekolahUrl ? (
                  <img src={profileData.fotoSekolahUrl} alt="Gedung Sekolah" className="w-full h-full object-cover" />
                ) : (
                  <>
                    <ImageIcon size={44} className="text-wf-medium/50 mb-3" />
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-wf-medium/80 text-center px-4">
                      Slot Foto Gedung Sekolah
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Identitas Resmi & Alamat */}
        {activeTab === 'identitas' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-2 border-b border-wf-medium/20">
                <Building2 className="text-wf-blue shrink-0" size={22} />
                <h2 className="text-lg sm:text-xl font-bold text-wf-darkest">Data Identitas Resmi Sekolah</h2>
              </div>

              <div className="bg-wf-light rounded-2xl border border-wf-medium/30 overflow-hidden shadow-xs">
                <div className="divide-y divide-wf-medium/20">
                  {profileData.identitas.map((item, index) => (
                    <div 
                      key={index} 
                      className={`grid grid-cols-1 md:grid-cols-12 px-4 sm:px-6 py-3 text-xs sm:text-sm ${
                        index % 2 === 0 ? 'bg-wf-light' : 'bg-wf-medium/10'
                      }`}
                    >
                      <span className="md:col-span-4 font-bold text-wf-darkest">
                        {item.label}
                      </span>
                      <span className="md:col-span-8 text-wf-dark font-medium mt-0.5 md:mt-0 break-words">
                        {item.value || '-'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-2 border-b border-wf-medium/20">
                <MapPin className="text-wf-blue shrink-0" size={22} />
                <h2 className="text-lg sm:text-xl font-bold text-wf-darkest">Rincian Alamat Sekolah</h2>
              </div>

              <div className="bg-wf-light rounded-2xl border border-wf-medium/30 overflow-hidden shadow-xs">
                <div className="divide-y divide-wf-medium/20">
                  {profileData.alamat.map((item, index) => (
                    <div 
                      key={index} 
                      className={`grid grid-cols-1 md:grid-cols-12 px-4 sm:px-6 py-3 text-xs sm:text-sm ${
                        index % 2 === 0 ? 'bg-wf-light' : 'bg-wf-medium/10'
                      }`}
                    >
                      <span className="md:col-span-4 font-bold text-wf-darkest">
                        {item.label}
                      </span>
                      <span className="md:col-span-8 text-wf-dark font-medium mt-0.5 md:mt-0 break-words">
                        {item.value || '-'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
          </div>
        )}

        {/* Tab 3: Visi & Misi */}
        {activeTab === 'visi-misi' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="lg:col-span-5 bg-wf-darkest text-wf-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-md flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <Target size={26} className="text-wf-blue shrink-0" />
                <h2 className="text-xl sm:text-2xl font-bold">Visi Kami</h2>
              </div>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed italic text-wf-light font-medium">
                "{profileData.visi}"
              </p>
            </div>
            <div className="lg:col-span-7 bg-wf-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-wf-medium/30 shadow-xs">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <Compass size={26} className="text-wf-blue shrink-0" />
                <h2 className="text-xl sm:text-2xl font-bold text-wf-darkest">Misi Kami</h2>
              </div>
              <ul className="space-y-3 sm:space-y-4">
                {profileData.misi.map((m, idx) => (
                  <li key={idx} className="flex items-start gap-3 sm:gap-4">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-wf-light border border-wf-medium/30 flex items-center justify-center text-wf-darkest font-bold text-xs shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <span className="text-wf-dark text-xs sm:text-sm md:text-base leading-relaxed">{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Tab 4: Struktur Organisasi */}
        {activeTab === 'struktur' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-3 justify-center text-center">
              <Users size={26} className="text-wf-blue" />
              <h2 className="text-xl sm:text-2xl font-bold text-wf-darkest">Struktur Organisasi</h2>
            </div>
            
            <div className="w-full max-w-4xl mx-auto aspect-video bg-wf-medium/10 border-2 border-dashed border-wf-medium/30 rounded-2xl sm:rounded-3xl flex flex-col items-center justify-center text-wf-dark overflow-hidden relative">
              {profileData.fotoStrukturUrl ? (
                <img src={profileData.fotoStrukturUrl} alt="Bagan Struktur Organisasi" className="w-full h-full object-contain" />
              ) : (
                <>
                  <ImageIcon size={44} className="text-wf-medium/50 mb-3" />
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-wf-medium/80 text-center px-4">
                    Slot Foto Bagan Organisasi
                  </span>
                </>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
