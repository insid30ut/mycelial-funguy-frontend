import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-mfg-dark text-mfg-light font-sans">
      {/* Navigation */}
      <nav className="bg-mfg-dark/80 backdrop-blur-sm shadow-lg shadow-mfg-purple/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <h1 className="text-3xl font-display font-black text-mfg-light drop-shadow-[0_2px_2px_rgba(157,78,221,0.8)]">
                🍄 Mycelial FunGuy
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-mfg-light hover:text-mfg-purple transition-colors duration-300 text-lg font-semibold">
                Home
              </Link>
              <Link href="/blog" className="text-mfg-light hover:text-mfg-purple transition-colors duration-300 text-lg font-semibold">
                Blog
              </Link>
              <Link href="/teks" className="text-mfg-light hover:text-mfg-purple transition-colors duration-300 text-lg font-semibold">
                Teks & Tips
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/Gemini_Generated_Image_iq89s9iq89s9iq89.png"
            alt="Psychedelic mushroom landscape"
            layout="fill"
            objectFit="cover"
            quality={80}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-mfg-dark via-mfg-dark/80 to-mfg-dark"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <h2 className="text-5xl md:text-7xl font-display font-black text-mfg-light mb-6 animate-pulse drop-shadow-[0_4px_4px_rgba(157,78,221,0.6)]">
            Welcome to <span className="text-mfg-purple">Mycelial FunGuy</span>
          </h2>
          <p className="text-xl text-mfg-light/90 mb-10 max-w-3xl mx-auto">
            Your cosmic portal to mushroom cultivation. Tune in, drop out, and discover the secrets of the fungal kingdom.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/blog" 
              className="bg-mfg-purple text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-mfg-gold hover:scale-105 transform transition-all duration-300 shadow-lg shadow-mfg-purple/40"
            >
              Explore the Void
            </Link>
            <Link 
              href="/teks" 
              className="bg-mfg-teal text-mfg-light border-2 border-mfg-teal px-10 py-4 rounded-full font-bold text-lg hover:bg-transparent hover:border-mfg-gold hover:text-mfg-gold transition-all duration-300"
            >
              Master the Teks
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
                Step-by-step journeys through the mycelial network, from spore to spectacle.
              </p>
            </div>
            
            <div className="bg-mfg-dark/50 backdrop-blur-md p-8 rounded-xl shadow-lg border border-mfg-purple/30 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="text-5xl mb-4">🔬</div>
              <h3 className="text-2xl font-display font-bold mb-3 text-mfg-gold">Alchemical Teks</h3>
              <p className="text-mfg-light/80">
                Sacred methods and forbidden knowledge whispered by the mushroom elders.
              </p>
            </div>
            
            <div className="bg-mfg-dark/50 backdrop-blur-md p-8 rounded-xl shadow-lg border border-mfg-purple/30 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-2xl font-display font-bold mb-3 text-mfg-gold">Sprout to Sage</h3>
              <p className="text-mfg-light/80">
                Level up your consciousness and cultivation skills at your own cosmic pace.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}