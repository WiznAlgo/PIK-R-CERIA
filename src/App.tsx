/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { motion } from 'motion/react';
import { MessageCircle, Heart, ShieldCheck, Users, BookOpen, SmilePlus, ArrowRight, Sparkles } from 'lucide-react';

const WA_LINK = "https://wa.me/6282233412942?text=Halo%20kak%20konselor%20PIK-R%20CERIA,%20aku%20mau%20cerita/konsultasi%20nih...";

export default function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="min-h-screen bg-brand-light font-sans text-slate-800 overflow-x-hidden selection:bg-brand selection:text-white flex flex-col">
      {/* NAVBAR */}
      <nav className="fixed w-full top-0 z-50 bg-white border-b border-brand-light shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand rounded-lg flex items-center justify-center text-white font-bold shadow-md shadow-brand/30">
              <SmilePlus className="w-6 h-6" />
            </div>
            <span className="font-heading font-black text-2xl tracking-tight text-brand-dark">
              PIK-R <span className="text-accent">CERIA</span>
            </span>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-5 py-2 rounded-full font-semibold transition-all shadow-md shadow-brand/20 hover:shadow-lg hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="hidden sm:inline">Konsultasi Chat</span>
          </a>
        </div>
      </nav>

      <main className="pt-20 flex-1 flex flex-col">
        {/* HERO SECTION */}
        <section className="relative w-full">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-0 overflow-hidden bg-white shadow-sm border border-brand-light md:my-8 md:rounded-3xl">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={stagger}
              className="p-8 md:p-16 flex flex-col justify-center bg-white"
            >
              <motion.div variants={fadeInUp} className="inline-block bg-accent-light text-accent-dark px-4 py-1 rounded-full text-sm font-bold mb-6 tracking-wide uppercase self-start">
                <Sparkles className="w-4 h-4 inline-block mr-2 -mt-0.5" />
                <span>Tempat Nyaman Buat Sobat Remaja</span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="font-heading text-5xl md:text-6xl font-extrabold leading-tight text-slate-900 mb-6">
                Lagi Banyak Pikiran? <br/>
                <span className="text-brand italic">Yuk, Ceritain Aja!</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-lg text-slate-600 mb-10 leading-relaxed">
                Nggak perlu bingung kalau ada masalah. Di sini kamu bisa ngobrol santai bareng konselor sebaya yang sefrekuensi dan ngertiin kamu banget.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-2">
                <a 
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-2xl font-bold text-lg transition-colors shadow-lg shadow-brand/20 hover:shadow-xl hover:-translate-y-1"
                >
                  Mulai Konsultasi (Gratis)
                  <ArrowRight className="w-6 h-6" />
                </a>
              </motion.div>
            </motion.div>

            {/* HERO ILLUSTRATION / CARD */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-brand relative flex items-center justify-center p-12 overflow-hidden min-h-[400px]"
            >
               {/* Geometric Decorative Elements */}
               <div className="absolute w-96 h-96 bg-white/20 rounded-full opacity-50 -top-20 -right-20 backdrop-blur-sm" />
               <div className="absolute w-64 h-64 border-8 border-white opacity-10 rotate-45 -bottom-10 -left-10" />
               <div className="absolute w-32 h-32 bg-accent/40 rounded-full blur-2xl top-1/2 left-1/4" />

               {/* Inside the geometric area */}
               <div className="relative z-10 w-full max-w-sm flex flex-col gap-4">
                  <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/40 flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 bg-brand rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                      <SmilePlus className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-heading font-black text-2xl text-brand-dark tracking-tight mb-2">Bestie Belajarmu</h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">Dari kita, oleh kita, untuk kita. Semua cerita kamu dijamin 100% rahasia.</p>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center gap-3">
                      <Heart className="w-6 h-6 text-white" />
                      <div>
                        <p className="font-bold text-sm text-white">No Judgement</p>
                      </div>
                    </div>
                    <div className="flex-1 bg-accent rounded-2xl p-4 flex items-center gap-3 shadow-lg shadow-accent/20">
                      <ShieldCheck className="w-6 h-6 text-slate-900" />
                      <div>
                        <p className="font-bold text-sm text-slate-900">Aman & Rahasia</p>
                      </div>
                    </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="px-6 py-24 bg-brand-light relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900">Apa Saja yang Ada di PIK-R Ceria?</h2>
              <p className="text-slate-600 text-lg leading-relaxed">Kami punya program asik buat mendampingi masa remajamu biar makin ceria, bermakna, dan penuh prestasi.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <FeatureCard 
                icon={<MessageCircle className="w-8 h-8 text-white" />}
                title="Konseling Sebaya"
                desc="Konsultasi jadi lebih nyambung karena ngobrolnya langsung bareng teman seumuran. Anti kaku, anti canggung."
                color="bg-brand"
              />
              <FeatureCard 
                icon={<Heart className="w-8 h-8 text-slate-900" />}
                title="Kesehatan Reproduksi"
                desc="Edukasi penting yang bakal bikin kamu makin paham dan sayang sama cara merawat kesehatan dirimu sendiri."
                color="bg-accent"
              />
              <FeatureCard 
                icon={<BookOpen className="w-8 h-8 text-white" />}
                title="Keterampilan Hidup"
                desc="Sharing persiapan seru menuju dewasa. Ngobrolin cita-cita, mental health, sampai perencanaan masa depan."
                color="bg-slate-900"
              />
            </div>
          </div>
        </section>

        {/* ABOUT / WHY US SECTION */}
        <section className="px-6 py-24 bg-white relative">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 grid grid-cols-2 gap-4 relative">
              <div className="space-y-4 mt-8">
                <InfoCard 
                  icon={<Users className="w-8 h-8 text-white" />}
                  title="Konselor Sebaya"
                  desc="Berpengalaman & dilatih khusus."
                  iconBg="bg-brand"
                />
              </div>
              <div className="space-y-4 lg:mb-8">
                 <InfoCard 
                  icon={<MessageCircle className="w-8 h-8 text-slate-900" />}
                  title="Akses Mudah"
                  desc="Tinggal chat WA, kita langsung siap sedia."
                  iconBg="bg-accent"
                />
              </div>
            </div>
            
            <div className="order-1 md:order-2 space-y-8">
              <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900">Kenapa Harus ke PIK-R Ceria?</h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed font-medium">
                <p>
                  Masa remaja itu emang masa paling *the best*, tapi kadang banyak galaunya juga. Mulai dari urusan nilai sekolah, teman tongkrongan, keluarga, gebetan, sampai mikirin *'habis lulus aku ngapain ya?'*.
                </p>
                <p>
                  PIK-R Ceria pas banget buat kamu! Karena semua dikelola **oleh remaja, untuk remaja**. Jadi obrolannya nyantai ala sahabat, nggak bakal di-judge apalagi diceramahin panjang lebar.
                </p>
              </div>

              <ul className="space-y-5 pt-4">
                {[
                  '100% Gratis, tanpa dipungut biaya apapun.',
                  'Bisa curhat online gampang banget via WhatsApp.',
                  'Lingkungan yang positif, supportive, dan no toxic.'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-800 font-medium text-lg">
                    <div className="w-8 h-8 rounded-full bg-brand-light text-brand flex items-center justify-center shrink-0 border border-brand/20">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA BATCH SECTION */}
        <section className="bg-brand relative overflow-hidden">
           {/* Abstract shapes */}
           <div className="absolute w-96 h-96 border-8 border-white opacity-10 rotate-45 -right-20 -top-20 pointer-events-none" />
           <div className="absolute w-64 h-64 bg-accent/30 rounded-full blur-2xl bottom-0 left-10 pointer-events-none" />
           
           <div className="max-w-4xl mx-auto px-6 py-24 text-center space-y-8 relative z-10">
              <h2 className="font-heading text-4xl md:text-6xl font-black text-white leading-tight">
                Pasti Ada Jalan Keluar <br/> Buat Setiap Keluh Kesahmu.
              </h2>
              <p className="text-brand-light text-xl md:text-2xl max-w-2xl mx-auto opacity-90 leading-relaxed font-medium">
                Jangan pendam sendirian. Kami siap jadi pendengar yang baik. Mulai obrolan pertamamu sekarang!
              </p>
              <div className="pt-6">
                <a 
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-accent text-slate-900 px-10 py-4 rounded-2xl font-bold text-xl hover:bg-accent-light transition-all shadow-xl shadow-slate-900/10 hover:scale-105 active:scale-95"
                >
                  <MessageCircle className="w-7 h-7" />
                  Chat Konselor via WA
                </a>
              </div>
           </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-16 px-6 text-center">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">
          <div className="flex items-center gap-3 text-white">
              <div className="w-10 h-10 bg-brand rounded-lg flex items-center justify-center text-white font-bold">
                <SmilePlus className="w-6 h-6" />
              </div>
              <span className="font-heading font-black text-2xl tracking-tight">PIK-R <span className="text-accent">CERIA</span></span>
          </div>
          <p className="max-w-md text-lg leading-relaxed font-medium text-slate-300">
            Pusat Informasi dan Konseling Remaja. <br/> Mengedepankan asas <strong>"Dari, Oleh, dan Untuk Remaja."</strong>
          </p>
          <div className="w-24 h-px bg-slate-700 my-4" />
          <p className="text-sm opacity-60 font-medium">
            &copy; {new Date().getFullYear()} PIK-R CERIA. Bersama Menciptakan Remaja Sehat & Ceria.
          </p>
        </div>
      </footer>
    </div>
  );
}

// Subcomponents

function FeatureCard({ icon, title, desc, color }: { icon: React.ReactNode, title: string, desc: string, color: string }) {
  return (
    <div className="bg-white border-2 border-slate-100 p-8 rounded-3xl hover:border-brand-light hover:shadow-xl transition-all duration-300 group flex flex-col">
      <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center mb-6`}>
        {icon}
      </div>
      <h3 className="font-heading font-extrabold text-2xl text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 text-base leading-relaxed font-medium">{desc}</p>
    </div>
  );
}

function InfoCard({ icon, title, desc, iconBg = 'bg-slate-100' }: { icon: React.ReactNode, title: string, desc: string, iconBg?: string }) {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl transition-shadow flex flex-col">
      <div className={`${iconBg} w-14 h-14 rounded-2xl flex items-center justify-center mb-5`}>
        {icon}
      </div>
      <h4 className="font-heading font-extrabold text-xl mb-2 text-slate-900">{title}</h4>
      <p className="text-slate-600 text-sm leading-relaxed font-medium">{desc}</p>
    </div>
  )
}

