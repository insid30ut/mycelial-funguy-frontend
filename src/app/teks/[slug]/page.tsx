import Link from 'next/link'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { client, urlFor, TekAndTip } from '@/lib/sanity'
import { notFound } from 'next/navigation'

// Function to fetch a single tek by slug
async function getTek(slug: string): Promise<TekAndTip | null> {
  const tek = await client.fetch(
    `*[_type == "tekAndTip" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      image,
      brief_description,
      category,
      difficulty_level,
      full_content_body,
      published_at
    }`,
    { slug }
  )
  return tek
}

// Generate static params for all teks
export async function generateStaticParams() {
  const teks = await client.fetch(
    `*[_type == "tekAndTip"] { slug }`
  )
  return teks.map((tek: { slug: { current: string } }) => ({
    slug: tek.slug.current,
  }))
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

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function TekPage({ params }: PageProps) {
  const { slug } = await params
  const tek = await getTek(slug)

  if (!tek) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-mfg-dark text-mfg-light">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back button */}
        <Link 
          href="/teks" 
          className="inline-flex items-center text-mfg-purple hover:text-mfg-gold mb-10 transition-colors font-semibold"
        >
          &larr; Back to Sacred Teks & Cosmic Tips
        </Link>

        {/* Header */}
        <header className="mb-10 text-center">
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            {tek.category && (
              <span className={`px-4 py-1 text-sm font-bold rounded-full border-2 ${getCategoryColor(tek.category)}`}>
                {tek.category.charAt(0).toUpperCase() + tek.category.slice(1)}
              </span>
            )}
            {tek.difficulty_level && (
              <span className={`px-4 py-1 text-sm font-bold rounded-full ${getDifficultyColor(tek.difficulty_level)}`}>
                {tek.difficulty_level.charAt(0).toUpperCase() + tek.difficulty_level.slice(1)}
              </span>
            )}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-black text-mfg-light mb-4 drop-shadow-[0_3px_3px_rgba(157,78,221,0.7)]">
            {tek.title}
          </h1>
          <p className="text-mfg-light/70 text-lg mb-4 max-w-3xl mx-auto">
            {tek.brief_description}
          </p>
          <p className="text-mfg-light/50">
            Published on {new Date(tek.published_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </header>

        {/* Featured Image */}
        {tek.image && (
          <div className="mb-12 shadow-2xl shadow-mfg-purple/20">
            <div className="aspect-video relative rounded-lg overflow-hidden border-2 border-mfg-purple/50">
              <Image
                src={urlFor(tek.image).width(800).height(450).url()}
                alt={tek.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}

        {/* Content */}
        <div className="bg-mfg-dark/50 backdrop-blur-md rounded-xl shadow-lg border border-mfg-purple/30 p-8 md:p-12">
          <div className="prose prose-lg max-w-none prose-invert prose-headings:font-display prose-headings:text-mfg-gold prose-a:text-mfg-purple hover:prose-a:text-mfg-gold prose-strong:text-mfg-light">
            <PortableText 
              value={tek.full_content_body}
              components={{
                block: {
                  h1: ({ children }) => <h1 className="text-4xl font-black mb-6 mt-10">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-3xl font-bold mb-5 mt-8">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-2xl font-bold mb-4 mt-6">{children}</h3>,
                  normal: ({ children }) => <p className="mb-6 leading-relaxed text-mfg-light/90">{children}</p>,
                  blockquote: ({ children }) => <blockquote className="border-l-4 border-mfg-purple pl-4 italic text-mfg-light/80">{children}</blockquote>,
                },
                list: {
                  bullet: ({ children }) => <ul className="list-disc list-inside mb-6 space-y-2">{children}</ul>,
                  number: ({ children }) => <ol className="list-decimal list-inside mb-6 space-y-2">{children}</ol>,
                },
              }}
            />
          </div>
        </div>

        {/* Navigation to other teks */}
        <div className="mt-16 text-center">
          <Link 
            href="/teks" 
            className="bg-mfg-purple text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-mfg-gold hover:scale-105 transform transition-all duration-300 shadow-lg shadow-mfg-purple/40"
          >
            Browse More Sacred Teks
          </Link>
        </div>
      </article>
    </div>
  )
}