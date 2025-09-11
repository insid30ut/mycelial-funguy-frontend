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
      return 'bg-green-100 text-green-800'
    case 'intermediate':
      return 'bg-yellow-100 text-yellow-800'
    case 'advanced':
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

// Helper function to get category color
function getCategoryColor(category: string) {
  switch (category) {
    case 'growing':
      return 'bg-blue-100 text-blue-800'
    case 'sterilization':
      return 'bg-purple-100 text-purple-800'
    case 'substrate':
      return 'bg-orange-100 text-orange-800'
    case 'harvesting':
      return 'bg-pink-100 text-pink-800'
    case 'general':
      return 'bg-gray-100 text-gray-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

export default async function TeksPage() {
  const teks = await getTeksAndTips()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-green-800">
                🍄 Mycelial FunGuy
              </Link>
            </div>
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors">
                Home
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-green-600 transition-colors">
                Blog
              </Link>
              <Link href="/teks" className="text-green-600 font-semibold">
                Teks & Tips
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Teks & Tips</h1>
          <p className="text-gray-600 mt-2">
            Proven techniques and methods for successful mushroom cultivation
          </p>
        </div>
      </div>

      {/* Teks & Tips Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {teks.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No teks & tips yet. Create your first tek in the Sanity Studio!
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teks.map((tek) => (
              <Link 
                key={tek._id} 
                href={`/teks/${tek.slug.current}`}
                className="group"
              >
                <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
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
                    <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                      <span className="text-4xl">🔬</span>
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {tek.category && (
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(tek.category)}`}>
                          {tek.category.charAt(0).toUpperCase() + tek.category.slice(1)}
                        </span>
                      )}
                      {tek.difficulty_level && (
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(tek.difficulty_level)}`}>
                          {tek.difficulty_level.charAt(0).toUpperCase() + tek.difficulty_level.slice(1)}
                        </span>
                      )}
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                      {tek.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-3">
                      {new Date(tek.published_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                    <p className="text-gray-700 line-clamp-3">
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