import Link from 'next/link'
import Image from 'next/image'
import { client, urlFor, TekAndTip } from '@/lib/sanity'

// Function to fetch teks and tips from Sanity
async function getTeksAndTips(): Promise<TekAndTip[]> {
  const teks = await client.fetch(
    `*[_type == "tekAndTip"] | order(published_at desc) {
      _id,
      title,
      slug,
      image,
      brief_description,
      category,
      difficulty_level,
      published_at
    }`
  )
  return teks
}

// Helper function to get difficulty color
function getDifficultyColor(difficulty: string) {
  switch (difficulty) {
    case 'beginner':
      return 'bg-mfg-teal text-mfg-light'
    case 'intermediate':
      return 'bg-mfg-gold text-mfg-dark'
    case 'advanced':
      return 'bg-mfg-purple text-mfg-light'
    default:
      return 'bg-gray-500 text-white'
  }
}

// Helper function to get category color
function getCategoryColor(category: string) {
  switch (category) {
    case 'growing':
      return 'border-blue-400 text-blue-300'
    case 'sterilization':
      return 'border-purple-400 text-purple-300'
    case 'substrate':
      return 'border-orange-400 text-orange-300'
    case 'harvesting':
      return 'border-pink-400 text-pink-300'
    case 'general':
      return 'border-gray-400 text-gray-300'
    default:
      return 'border-gray-500 text-gray-400'
  }
}

export default async function TeksPage() {
  const teks = await getTeksAndTips()

  return (
    <div className="min-h-screen bg-mfg-dark text-mfg-light">
      {/* Header */}
      <div className="bg-mfg-dark/80 backdrop-blur-sm border-b border-mfg-purple/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-black text-mfg-light drop-shadow-[0_3px_3px_rgba(157,78,221,0.7)]">Sacred Teks & Cosmic Tips</h1>
          <p className="text-mfg-light/80 mt-4 text-lg max-w-2xl mx-auto">
            Proven techniques and arcane methods for successful mushroom cultivation.
          </p>
        </div>
      </div>

      {/* Teks & Tips Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {teks.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-mfg-light/70 text-lg">
              The ancient library is empty... No teks yet. Scribe your first tek in the Sanity Studio!
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teks.map((tek) => (
              <Link 
                key={tek._id} 
                href={`/teks/${tek.slug.current}`}
                className="group block"
              >
                <article className="bg-mfg-dark/50 backdrop-blur-md rounded-xl shadow-lg border border-mfg-purple/30 overflow-hidden h-full transform hover:-translate-y-2 transition-transform duration-300">
                  {tek.image ? (
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={urlFor(tek.image).width(400).height(225).url()}
                        alt={tek.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ) : (
                    <div className="aspect-video bg-gradient-to-br from-mfg-purple/20 to-mfg-teal/20 flex items-center justify-center">
                      <span className="text-5xl opacity-50">🔬</span>
                    </div>
                  )}
                  <div className="p-6 flex flex-col">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tek.category && (
                        <span className={`px-3 py-1 text-xs font-bold rounded-full border ${getCategoryColor(tek.category)}`}>
                          {tek.category.charAt(0).toUpperCase() + tek.category.slice(1)}
                        </span>
                      )}
                      {tek.difficulty_level && (
                        <span className={`px-3 py-1 text-xs font-bold rounded-full ${getDifficultyColor(tek.difficulty_level)}`}>
                          {tek.difficulty_level.charAt(0).toUpperCase() + tek.difficulty_level.slice(1)}
                        </span>
                      )}
                    </div>
                    <h2 className="text-2xl font-display font-bold text-mfg-light mb-2 group-hover:text-mfg-purple transition-colors">
                      {tek.title}
                    </h2>
                    <p className="text-mfg-light/60 text-sm mb-4">
                      {new Date(tek.published_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                    <p className="text-mfg-light/80 line-clamp-3 flex-grow">
                      {tek.brief_description}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}