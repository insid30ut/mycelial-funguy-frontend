import { client, TekAndTip } from '@/lib/sanity'
import PostCard from '@/components/PostCard'

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
              <PostCard key={tek._id} post={tek} basePath="teks" />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}