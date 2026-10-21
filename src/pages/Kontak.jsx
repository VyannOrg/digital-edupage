// import React, { useState, useEffect } from 'react';
// import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Building2, Map } from 'lucide-react';
// import { schoolData } from '../data/schoolData';

// export default function Kontak() {
//   // ---------------------------------------------------------
//   // 1. STATE MANAGEMENT & FORM HANDLER (SIAP UNTUK BACKEND)
//   // ---------------------------------------------------------
//   const [formData, setFormData] = useState({
//     nama: '',
//     email: '',
//     subjek: '',
//     pesan: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     /* 
//     ===============================================================
//     [BACKEND LOGIC PLACEHOLDER]
//     Nanti sambungkan ke API backend / Supabase tabel 'pesan_kontak':
//     await supabase.from('pesan_kontak').insert([formData]);
//     ===============================================================
//     */

//     setTimeout(() => {
//       setIsSubmitting(false);
//       setSuccessMessage('Pesan berhasil dikirim! Tim Humas kami akan segera merespons.');
//       setFormData({ nama: '', email: '', subjek: '', pesan: '' });
      
//       // Hilangkan pesan sukses setelah 5 detik
//       setTimeout(() => setSuccessMessage(''), 5000);
//     }, 800);
//   };

//   return (
//     <div className="max-w-[1800px] mx-auto px-6 lg:px-12 py-12 space-y-12 bg-wf-white text-wf-darkest">
      
//       {/* HEADER SECTION */}
//       <div className="space-y-3 max-w-2xl">
//         <span className="text-xs font-bold text-wf-blue uppercase tracking-widest block">
//           Layanan & Informasi
//         </span>
//         <h1 className="text-3xl md:text-5xl font-extrabold text-wf-darkest tracking-tight">
//           Hubungi Kami
//         </h1>
//         <p className="text-wf-dark text-sm md:text-base leading-relaxed">
//           Punya pertanyaan seputar pendaftaran, informasi akademik, atau kerja sama? Jangan ragu untuk menghubungi atau mendatangi kantor layanan informasi kami.
//         </p>
//       </div>

//       {/* GRID UTAMA (KIRI: INFO & MAPS, KANAN: FORM PESAN) */}
//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start animate-in fade-in slide-in-from-bottom-4 duration-500">
        
//         {/* =========================================
//             KOLOM KIRI: INFO KONTAK & GOOGLE MAPS
//         ========================================= */}
//         <div className="lg:col-span-6 space-y-8">
          
//           {/* Kartu Informasi Kontak */}
//           <div className="bg-wf-light rounded-[32px] border border-wf-medium/30 p-8 shadow-sm space-y-6">
//             <div className="flex items-center gap-3 pb-4 border-b border-wf-medium/20">
//               <Building2 className="text-wf-blue" size={24} />
//               <h2 className="text-xl font-bold text-wf-darkest">Kantor Layanan & Humas</h2>
//             </div>

//             <div className="space-y-5 text-sm">
//               {/* Alamat */}
//               <div className="flex items-start gap-4">
//                 <div className="p-3 bg-wf-white rounded-2xl border border-wf-medium/20 text-wf-blue shrink-0 shadow-2xs">
//                   <MapPin size={20} />
//                 </div>
//                 <div>
//                   <span className="block text-[11px] font-bold text-wf-dark uppercase tracking-wider mb-0.5">Alamat Resmi</span>
//                   <span className="font-bold text-wf-darkest leading-relaxed block">
//                     {schoolData.info.address}, {schoolData.info.kelurahan}, Kec. {schoolData.info.kecamatan}, Kab. {schoolData.info.kabupaten}, Prov. {schoolData.info.provinsi} {schoolData.info.kodePos}
//                   </span>
//                 </div>
//               </div>

//               {/* Telepon */}
//               <div className="flex items-start gap-4">
//                 <div className="p-3 bg-wf-white rounded-2xl border border-wf-medium/20 text-wf-blue shrink-0 shadow-2xs">
//                   <Phone size={20} />
//                 </div>
//                 <div>
//                   <span className="block text-[11px] font-bold text-wf-dark uppercase tracking-wider mb-0.5">Nomor Telepon</span>
//                   <span className="font-bold text-wf-darkest block">{schoolData.info.phone}</span>
//                 </div>
//               </div>

//               {/* Email */}
//               <div className="flex items-start gap-4">
//                 <div className="p-3 bg-wf-white rounded-2xl border border-wf-medium/20 text-wf-blue shrink-0 shadow-2xs">
//                   <Mail size={20} />
//                 </div>
//                 <div>
//                   <span className="block text-[11px] font-bold text-wf-dark uppercase tracking-wider mb-0.5">Email Resmi</span>
//                   <span className="font-bold text-wf-darkest block">{schoolData.info.email}</span>
//                 </div>
//               </div>

//               {/* Jam Operasional */}
//               <div className="flex items-start gap-4">
//                 <div className="p-3 bg-wf-white rounded-2xl border border-wf-medium/20 text-wf-blue shrink-0 shadow-2xs">
//                   <Clock size={20} />
//                 </div>
//                 <div>
//                   <span className="block text-[11px] font-bold text-wf-dark uppercase tracking-wider mb-0.5">Jam Kerja Layanan</span>
//                   <span className="font-bold text-wf-darkest block">Senin - Jumat: 07:00 - 15:30 WIB</span>
//                   <span className="text-xs text-wf-dark">Sabtu: 07:00 - 13:00 WIB</span>
//                 </div>
//               </div>
//             </div>

//             {/* Tombol Cepat Chat Humas via WhatsApp */}
//             <div className="pt-4 border-t border-wf-medium/20">
//               <a 
//                 href={`https://wa.me/6281234567890?text=Halo%20Humas%20${encodeURIComponent(schoolData.info.name)},%20saya%20ingin%20bertanya...`}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="w-full bg-[#25D366] hover:opacity-90 text-white py-3.5 px-6 rounded-2xl font-bold text-sm transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
//               >
//                 <MessageSquare size={18} />
//                 Hubungi Humas via WhatsApp
//               </a>
//             </div>

//           </div>

//           {/* =========================================
//               GOOGLE MAPS EMBED CONTAINER
//           ========================================= */}
//           <div className="bg-wf-light rounded-[32px] border border-wf-medium/30 p-6 shadow-sm space-y-4">
//             <div className="flex items-center gap-2 px-2">
//               <Map className="text-wf-blue" size={20} />
//               <h3 className="font-bold text-wf-darkest text-base">Lokasi pada Peta</h3>
//             </div>

//             {/* Container Embed Maps */}
//             <div className="w-full aspect-video bg-wf-dark rounded-2xl overflow-hidden border border-wf-medium/30 relative flex items-center justify-center">
//               {/* 
//                 Ganti src di bawah ini dengan iframe embed Google Maps sekolahmu nanti.
//                 Contoh: <iframe src="https://www.google.com/maps/embed?..." className="w-full h-full border-0" allowFullScreen="" loading="lazy"></iframe>
//               */}
//               <div className="flex flex-col items-center text-wf-medium/40 z-10 text-center px-4">
//                 <MapPin size={40} className="mb-2" />
//                 <span className="text-[10px] font-bold uppercase tracking-widest">Slot Google Maps Embed (Iframe)</span>
//                 <span className="text-[9px] mt-1">(Tampilkan titik lokasi sekolah di sini)</span>
//               </div>
//             </div>
//           </div>

//         </div>

//         {/* =========================================
//             KOLOM KANAN: FORMULIR PESAN / PERTANYAAN
//         ========================================= */}
//         <div className="lg:col-span-6 bg-wf-light rounded-[32px] border border-wf-medium/30 p-8 md:p-10 shadow-sm space-y-6">
//           <div className="space-y-2">
//             <h2 className="text-2xl font-bold text-wf-darkest">Kirim Pesan Langsung</h2>
//             <p className="text-xs md:text-sm text-wf-dark">
//               Isi formulir di bawah ini untuk mengirimkan pertanyaan atau pesan langsung kepada tim administrasi kami.
//             </p>
//           </div>

//           {successMessage && (
//             <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 text-xs md:text-sm font-bold p-4 rounded-2xl">
//               {successMessage}
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-5">
//             <div className="space-y-1.5">
//               <label className="text-xs font-bold text-wf-darkest uppercase tracking-wider block">Nama Lengkap</label>
//               <input 
//                 type="text" 
//                 name="nama"
//                 value={formData.nama}
//                 onChange={handleChange}
//                 required
//                 placeholder="cth. Budi Santoso"
//                 className="w-full bg-wf-white border border-wf-medium/30 rounded-2xl px-4 py-3 text-sm text-wf-darkest focus:outline-none focus:border-wf-darkest transition-colors"
//               />
//             </div>

//             <div className="space-y-1.5">
//               <label className="text-xs font-bold text-wf-darkest uppercase tracking-wider block">Alamat Email</label>
//               <input 
//                 type="email" 
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 placeholder="cth. budi@email.com"
//                 className="w-full bg-wf-white border border-wf-medium/30 rounded-2xl px-4 py-3 text-sm text-wf-darkest focus:outline-none focus:border-wf-darkest transition-colors"
//               />
//             </div>

//             <div className="space-y-1.5">
//               <label className="text-xs font-bold text-wf-darkest uppercase tracking-wider block">Subjek Pesan</label>
//               <input 
//                 type="text" 
//                 name="subjek"
//                 value={formData.subjek}
//                 onChange={handleChange}
//                 required
//                 placeholder="cth. Informasi PPDB / Kerja Sama"
//                 className="w-full bg-wf-white border border-wf-medium/30 rounded-2xl px-4 py-3 text-sm text-wf-darkest focus:outline-none focus:border-wf-darkest transition-colors"
//               />
//             </div>

//             <div className="space-y-1.5">
//               <label className="text-xs font-bold text-wf-darkest uppercase tracking-wider block">Isi Pesan</label>
//               <textarea 
//                 name="pesan"
//                 rows="4"
//                 value={formData.pesan}
//                 onChange={handleChange}
//                 required
//                 placeholder="Tuliskan pesan atau pertanyaan Anda di sini..."
//                 className="w-full bg-wf-white border border-wf-medium/30 rounded-2xl p-4 text-sm text-wf-darkest focus:outline-none focus:border-wf-darkest transition-colors resize-none"
//               ></textarea>
//             </div>

//             <button 
//               type="submit"
//               disabled={isSubmitting}
//               className="w-full bg-wf-darkest hover:bg-wf-dark text-wf-white py-4 px-6 rounded-2xl font-bold text-sm transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
//             >
//               {isSubmitting ? (
//                 <span className="animate-pulse">Mengirim Pesan...</span>
//               ) : (
//                 <>
//                   <Send size={16} />
//                   Kirim Pesan Sekarang
//                 </>
//               )}
//             </button>
//           </form>
//         </div>

//       </div>

//     </div>
//   );
// }

import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Building2, Map, ExternalLink } from 'lucide-react';
import { schoolData } from '../data/schoolData';

export default function Kontak() {
  return (
    <div className="max-w-[1800px] mx-auto px-6 lg:px-12 py-12 space-y-12 bg-wf-white text-wf-darkest">
      
      {/* HEADER SECTION */}
      <div className="space-y-3 max-w-2xl">
        <span className="text-xs font-bold text-wf-blue uppercase tracking-widest block">
          Layanan & Informasi
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-wf-darkest tracking-tight">
          Hubungi Kami
        </h1>
        <p className="text-wf-dark text-sm md:text-base leading-relaxed">
          Punya pertanyaan seputar pendaftaran, informasi akademik, atau kerja sama? Jangan ragu untuk menghubungi atau mendatangi kantor layanan informasi kami.
        </p>
      </div>

      {/* GRID UTAMA (KIRI: INFO & MAPS, KANAN: CTA HUMAS) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start animate-in fade-in slide-in-from-bottom-4 duration-500">
        
        {/* =========================================
            KOLOM KIRI: INFO KONTAK & GOOGLE MAPS
        ========================================= */}
        <div className="lg:col-span-6 space-y-8">
          
          {/* Kartu Informasi Kontak */}
          <div className="bg-wf-light rounded-[32px] border border-wf-medium/30 p-8 shadow-sm space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-wf-medium/20">
              <Building2 className="text-wf-blue" size={24} />
              <h2 className="text-xl font-bold text-wf-darkest">Kantor Layanan & Humas</h2>
            </div>

            <div className="space-y-5 text-sm">
              {/* Alamat */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-wf-white rounded-2xl border border-wf-medium/20 text-wf-blue shrink-0 shadow-2xs">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="block text-[11px] font-bold text-wf-dark uppercase tracking-wider mb-0.5">Alamat Resmi</span>
                  <span className="font-bold text-wf-darkest leading-relaxed block">
                    {schoolData.info.address}, {schoolData.info.kelurahan}, Kec. {schoolData.info.kecamatan}, Kab. {schoolData.info.kabupaten}, Prov. {schoolData.info.provinsi} {schoolData.info.kodePos}
                  </span>
                </div>
              </div>

              {/* Telepon */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-wf-white rounded-2xl border border-wf-medium/20 text-wf-blue shrink-0 shadow-2xs">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="block text-[11px] font-bold text-wf-dark uppercase tracking-wider mb-0.5">Nomor Telepon</span>
                  <span className="font-bold text-wf-darkest block">{schoolData.info.phone}</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-wf-white rounded-2xl border border-wf-medium/20 text-wf-blue shrink-0 shadow-2xs">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="block text-[11px] font-bold text-wf-dark uppercase tracking-wider mb-0.5">Email Resmi</span>
                  <span className="font-bold text-wf-darkest block">{schoolData.info.email}</span>
                </div>
              </div>

              {/* Jam Operasional */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-wf-white rounded-2xl border border-wf-medium/20 text-wf-blue shrink-0 shadow-2xs">
                  <Clock size={20} />
                </div>
                <div>
                  <span className="block text-[11px] font-bold text-wf-dark uppercase tracking-wider mb-0.5">Jam Kerja Layanan</span>
                  <span className="font-bold text-wf-darkest block">Senin - Jumat: 07:00 - 15:30 WIB</span>
                  <span className="text-xs text-wf-dark">Sabtu: 07:00 - 13:00 WIB</span>
                </div>
              </div>
            </div>

            {/* Tombol Cepat Chat Humas via WhatsApp
            <div className="pt-4 border-t border-wf-medium/20">
              <a 
                href={`https://wa.me/6281234567890?text=Halo%20Humas%20${encodeURIComponent(schoolData.info.name)},%20saya%20ingin%20bertanya...`}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#25D366] hover:opacity-90 text-white py-4 px-6 rounded-2xl font-bold text-sm transition-all shadow-sm flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <MessageSquare size={20} />
                Hubungi Humas via WhatsApp
              </a>
            </div> */}

          </div>

          {/* =========================================
              GOOGLE MAPS EMBED CONTAINER
          ========================================= */}
          <div className="bg-wf-light rounded-[32px] border border-wf-medium/30 p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-2 px-2">
              <Map className="text-wf-blue" size={20} />
              <h3 className="font-bold text-wf-darkest text-base">Lokasi pada Peta</h3>
            </div>

            {/* Container Embed Maps */}
            <div className="w-full aspect-video bg-wf-dark rounded-2xl overflow-hidden border border-wf-medium/30 relative flex items-center justify-center">
              <div className="flex flex-col items-center text-wf-medium/40 z-10 text-center px-4">
                <MapPin size={40} className="mb-2" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Slot Google Maps Embed (Iframe)</span>
                <span className="text-[9px] mt-1">(Tampilkan titik lokasi sekolah di sini)</span>
              </div>
            </div>
          </div>

        </div>

        {/* =========================================
            KOLOM KANAN: CARD CTA EKSKLUSIF (PENGGANTI FORM)
        ========================================= */}
        <div className="lg:col-span-6 bg-wf-darkest text-wf-white rounded-[32px] p-8 md:p-12 shadow-md flex flex-col justify-between space-y-8 relative overflow-hidden">
          
          {/* Aksen Background Halus */}
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-wf-blue/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-4 relative z-10">
            <span className="text-xs font-bold text-wf-blue uppercase tracking-widest block">
              Respon Cepat & Langsung
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">
              Butuh Informasi Cepat? Hubungi Humas Kami
            </h2>
            <p className="text-wf-light text-sm md:text-base leading-relaxed opacity-90">
              Untuk pelayanan yang lebih interaktif, Anda dapat terhubung langsung dengan petugas Hubungan Masyarakat (Humas) kami melalui aplikasi pesan singkat WhatsApp. Tim kami siap melayani pada jam kerja sekolah.
            </p>
          </div>

          <div className="space-y-4 relative z-10 pt-4">
            <a 
              href={`https://wa.me/6281234567890?text=Halo%20Humas%20${encodeURIComponent(schoolData.info.name)},%20saya%20ingin%20bertanya...`}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-[#25D366] hover:opacity-90 text-white py-4 px-8 rounded-2xl font-bold text-base transition-all shadow-lg flex items-center justify-center gap-3 cursor-pointer group"
            >
              <MessageSquare size={22} className="group-hover:scale-110 transition-transform" />
              <span>Chat Humas via WhatsApp</span>
              <ExternalLink size={16} className="opacity-70" />
            </a>

            <div className="bg-wf-white/10 backdrop-blur-md p-4 rounded-2xl border border-wf-white/10 flex items-center justify-between text-xs font-medium text-wf-light">
              <span>Waktu Respon Rata-rata:</span>
              <span className="font-bold text-white">10 - 15 Menit (Jam Kerja)</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}