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

// Generate static params for all teks (optional, for better performance)
export async function generateStaticParams() {
  const teks = await client.fetch(
    `*[_type == "tekAndTip"] {
      slug
    }`
  )
  
  return teks.map((tek: { slug: { current: string } }) => ({
    slug: tek.slug.current,
  }))
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

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back button */}
        <Link 
          href="/teks" 
          className="inline-flex items-center text-green-600 hover:text-green-700 mb-8 transition-colors"
        >
          ← Back to Teks & Tips
        </Link>

        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-3 mb-4">
            {tek.category && (
              <span className={`px-3 py-1 text-sm font-medium rounded-full ${getCategoryColor(tek.category)}`}>
                {tek.category.charAt(0).toUpperCase() + tek.category.slice(1)}
              </span>
            )}
            {tek.difficulty_level && (
              <span className={`px-3 py-1 text-sm font-medium rounded-full ${getDifficultyColor(tek.difficulty_level)}`}>
                {tek.difficulty_level.charAt(0).toUpperCase() + tek.difficulty_level.slice(1)}
              </span>
            )}
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {tek.title}
          </h1>
          <p className="text-gray-600 text-lg mb-4">
            {tek.brief_description}
          </p>
          <p className="text-gray-500">
            Published on {new Date(tek.published_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </header>

        {/* Featured Image */}
        {tek.image && (
          <div className="mb-8">
            <div className="aspect-video relative rounded-lg overflow-hidden">
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
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="prose prose-lg max-w-none">
            <PortableText 
              value={tek.full_content_body}
              components={{
                block: {
                  h1: ({ children }) => <h1 className="text-2xl font-bold mb-4 mt-8">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-xl font-bold mb-3 mt-6">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-lg font-bold mb-2 mt-4">{children}</h3>,
                  normal: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
                },
                marks: {
                  strong: ({ children }) => <strong className="font-bold">{children}</strong>,
                  em: ({ children }) => <em className="italic">{children}</em>,
                },
                list: {
                  bullet: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-1">{children}</ul>,
                  number: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-1">{children}</ol>,
                },
                listItem: {
                  bullet: ({ children }) => <li className="mb-1">{children}</li>,
                  number: ({ children }) => <li className="mb-1">{children}</li>,
                },
              }}
            />
          </div>
        </div>

        {/* Navigation to other teks */}
        <div className="mt-12 text-center">
          <Link 
            href="/teks" 
            className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Browse More Teks & Tips
          </Link>
        </div>
      </article>
    </div>
  )
}