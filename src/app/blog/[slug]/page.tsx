import Link from 'next/link'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { client, urlFor, BlogPost } from '@/lib/sanity'
import { notFound } from 'next/navigation'

// Function to fetch a single blog post by slug
async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const post = await client.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      image,
      brief_description,
      full_content_body,
      published_at
    }`,
    { slug }
  )
  return post
}

// Generate static params for all blog posts (optional, for better performance)
export async function generateStaticParams() {
  const posts = await client.fetch(
    `*[_type == "blogPost"] {
      slug
    }`
  )
  
  return posts.map((post: { slug: { current: string } }) => ({
    slug: post.slug.current,
  }))
}

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
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
              <Link href="/blog" className="text-green-600 font-semibold">
                Blog
              </Link>
              <Link href="/teks" className="text-gray-700 hover:text-green-600 transition-colors">
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
          href="/blog" 
          className="inline-flex items-center text-green-600 hover:text-green-700 mb-8 transition-colors"
        >
          ← Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          <p className="text-gray-600 text-lg mb-4">
            {post.brief_description}
          </p>
          <p className="text-gray-500">
            Published on {new Date(post.published_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </header>

        {/* Featured Image */}
        {post.image && (
          <div className="mb-8">
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src={urlFor(post.image).width(800).height(450).url()}
                alt={post.title}
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
              value={post.full_content_body}
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

        {/* Navigation to other posts */}
        <div className="mt-12 text-center">
          <Link 
            href="/blog" 
            className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Read More Posts
          </Link>
        </div>
      </article>
    </div>
  )
}