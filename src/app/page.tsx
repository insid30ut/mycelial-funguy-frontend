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
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-mfg-dark via-mfg-dark/80 to-mfg-dark"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-32 md:pb-32 text-center">
          <h2 className="text-5xl md:text-7xl font-display font-black text-mfg-light mb-6 animate-pulse drop-shadow-[0_4px_4px_rgba(157,78,221,0.6)]">
            Welcome to the <span className="text-mfg-purple">Psilocyber Underworld</span>
          </h2>
          <p className="text-xl md:text-2xl text-mfg-light/90 mb-12 max-w-3xl mx-auto font-light leading-relaxed [text-shadow:1px_1px_3px_rgba(0,0,0,0.6)]">
            Your ultimate resource for mushroom cultivation. From comprehensive guides and cosmic stories to precision tools and trusted sources—we exist to help you grow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="/teks" 
              className="bg-mfg-purple/80 backdrop-blur-sm border-2 border-mfg-purple text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-mfg-purple hover:scale-105 transform transition-all duration-300 shadow-lg shadow-mfg-purple/40"
            >
              Start Growing (Teks)
            </Link>
            <Link
              href="/partners"
              className="bg-mfg-dark/50 backdrop-blur-sm border-2 border-mfg-light/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-mfg-gold hover:border-mfg-gold hover:text-mfg-dark hover:scale-105 transition-all duration-300"
            >
              Find Supplies
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1: Content */}
            <Link href="/blog" className="group">
              <div className="bg-mfg-dark/50 backdrop-blur-md p-8 rounded-xl shadow-lg border border-mfg-purple/30 transform group-hover:-translate-y-2 transition-transform duration-300 h-full">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">📚</div>
                <h3 className="text-2xl font-display font-bold mb-3 text-mfg-gold group-hover:text-mfg-purple transition-colors">Cosmic Tomes</h3>
                <p className="text-mfg-light/80">
                  Dive into deep-dive articles, stories from the farm, and mycelial musings.
                </p>
              </div>
            </Link>
            
            {/* Card 2: Tools */}
            <Link href="/calculators" className="group">
              <div className="bg-mfg-dark/50 backdrop-blur-md p-8 rounded-xl shadow-lg border border-mfg-purple/30 transform group-hover:-translate-y-2 transition-transform duration-300 h-full">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🧮</div>
                <h3 className="text-2xl font-display font-bold mb-3 text-mfg-gold group-hover:text-mfg-purple transition-colors">Alchemical Tools</h3>
                <p className="text-mfg-light/80">
                  Precision calculators for substrate ratios, agar recipes, and liquid cultures.
                </p>
              </div>
            </Link>
            
            {/* Card 3: Partners */}
            <Link href="/partners" className="group">
              <div className="bg-mfg-dark/50 backdrop-blur-md p-8 rounded-xl shadow-lg border border-mfg-purple/30 transform group-hover:-translate-y-2 transition-transform duration-300 h-full">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🤝</div>
                <h3 className="text-2xl font-display font-bold mb-3 text-mfg-gold group-hover:text-mfg-purple transition-colors">Trusted Network</h3>
                <p className="text-mfg-light/80">
                  A curated list of verified vendors and knowledge hubs to support your journey.
                </p>
              </div>
            </Link>

          </div>
        </div>
      </main>
    </div>
  );
}