import Link from 'next/link'

export default function CalculatorsPage() {
  return (
    <div className="min-h-screen bg-mfg-dark text-mfg-light">
      {/* Header */}
      <div className="bg-mfg-dark/80 backdrop-blur-sm border-b border-mfg-purple/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-black text-mfg-light drop-shadow-[0_3px_3px_rgba(157,78,221,0.7)]">
            Alchemical Calculators
          </h1>
          <p className="text-mfg-light/80 mt-4 text-lg max-w-2xl mx-auto">
            Precise cosmic formulas for your mushroom cultivation journey.
          </p>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="bg-mfg-dark/50 backdrop-blur-md rounded-xl shadow-lg border border-mfg-purple/30 p-12 space-y-8">
          <div className="text-6xl mb-6">🧮</div>
          
          <h2 className="text-3xl font-display font-bold text-mfg-light">
            Use the 4mula Forge
          </h2>
          
          <p className="text-xl text-mfg-light/80 max-w-2xl mx-auto leading-relaxed">
            We utilize the powerful <span className="text-mfg-gold font-bold">4mula Forge</span> for all our substrate, agar, and liquid culture calculations. It&apos;s the most robust tool in the myco-verse.
          </p>

          <div className="pt-8">
            <Link 
              href="https://4mulaforge.web.app/#/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-mfg-purple to-mfg-teal px-8 py-4 rounded-full text-xl font-bold text-white shadow-lg hover:shadow-mfg-purple/50 transform hover:-translate-y-1 transition-all duration-300"
            >
              <span>Launch Calculator</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>
          
          <p className="text-sm text-mfg-light/50 mt-4">
            Opens in a new tab
          </p>
        </div>
      </main>
    </div>
  )
}