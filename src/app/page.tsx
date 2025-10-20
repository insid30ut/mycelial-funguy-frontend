import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-mfg-dark text-mfg-light font-sans">
      {/* Hero Section */}
      <main className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <Image
            src="/Gemini_Generated_Image_iq89s9iq89s9iq89.png"
            alt="Psychedelic mushroom landscape"
            layout="fill"
            objectFit="cover"
            quality={80}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-mfg-dark via-mfg-dark/80 to-mfg-dark"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 md:pt-16 md:pb-32 text-center">
          <h2 className="text-5xl md:text-7xl font-display font-black text-mfg-light mb-6 animate-pulse drop-shadow-[0_4px_4px_rgba(157,78,221,0.6)]">
            Welcome to the <span className="text-mfg-purple">Psilocyber Underworld</span>
          </h2>
          <p className="text-xl text-mfg-light/90 mb-10 max-w-3xl mx-auto [text-shadow:1px_1px_3px_rgba(0,0,0,0.6)]">
            Welcome to your final stop for everything to do with mushroom cultivation. My mission is to assemble the best &apos;Teks&apos; and &apos;Guides&apos; I&apos;ve discovered during my time as a cultivator. Take a look around to uncover the secrets of mushroom cultivation, and follow my own stories as I journeyed from a hobbyist grower to working at a gourmet/medicinal mushroom farm!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/blog" 
              className="bg-mfg-dark/50 backdrop-blur-sm border-2 border-mfg-light/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-mfg-gold hover:border-mfg-gold hover:text-mfg-dark hover:scale-105 transform transition-all duration-300 shadow-lg shadow-mfg-purple/40"
            >
              My Stories
            </Link>
            <Link
              href="/teks"
              className="bg-mfg-dark/50 backdrop-blur-sm border-2 border-mfg-light/30 text-shadow-neutral-200 px-10 py-4 rounded-full font-bold text-lg hover:bg-mfg-gold hover:border-mfg-gold hover:text-mfg-dark hover:scale-105 transition-all duration-300"
            >
              Some Teks/Tips
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-mfg-dark/50 backdrop-blur-md p-8 rounded-xl shadow-lg border border-mfg-purple/30 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-2xl font-display font-bold mb-3 text-mfg-gold">Cosmic Tomes</h3>
              <p className="text-mfg-light/80">
                My journey through the mycelial network, from spore to spectacle.
              </p>
            </div>
            
            <div className="bg-mfg-dark/50 backdrop-blur-md p-8 rounded-xl shadow-lg border border-mfg-purple/30 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="text-5xl mb-4">🔬</div>
              <h3 className="text-2xl font-display font-bold mb-3 text-mfg-gold">Teks & Tips</h3>
              <p className="text-mfg-light/80">
                Methods for growing found across several forums.
              </p>
            </div>
            
            <div className="bg-mfg-dark/50 backdrop-blur-md p-8 rounded-xl shadow-lg border border-mfg-purple/30 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-2xl font-display font-bold mb-3 text-mfg-gold">Sprout to Sage</h3>
              <p className="text-mfg-light/80">
                Level up your consciousness and cultivation skills at your own pace.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}