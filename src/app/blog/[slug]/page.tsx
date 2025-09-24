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

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = await client.fetch(
    `*[_type == "blogPost"] { slug }`
  )
  return posts.map((post: { slug: { current: string } }) => ({
    slug: post.slug.current,
  }))
}

interface PageProps {
  params: {
    slug: string
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = params
  const post = await getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-mfg-dark text-mfg-light">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back button */}
        <Link 
          href="/blog" 
          className="inline-flex items-center text-mfg-purple hover:text-mfg-gold mb-10 transition-colors font-semibold"
        >
          &larr; Back to The Mycelial Chronicle
        </Link>

        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-black text-mfg-light mb-4 drop-shadow-[0_3px_3px_rgba(157,78,221,0.7)]">
            {post.title}
          </h1>
          <p className="text-mfg-light/70 text-lg mb-4 max-w-3xl mx-auto">
            {post.brief_description}
          </p>
          <p className="text-mfg-light/50">
            Published on {new Date(post.published_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </header>

        {/* Featured Image */}
        {post.image && (
          <div className="mb-12 shadow-2xl shadow-mfg-purple/20">
            <div className="aspect-video relative rounded-lg overflow-hidden border-2 border-mfg-purple/50">
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
        <div className="bg-mfg-dark/50 backdrop-blur-md rounded-xl shadow-lg border border-mfg-purple/30 p-8 md:p-12">
          <div className="prose prose-lg max-w-none prose-invert prose-headings:font-display prose-headings:text-mfg-gold prose-a:text-mfg-purple hover:prose-a:text-mfg-gold prose-strong:text-mfg-light">
            <PortableText 
              value={post.full_content_body}
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

        {/* Navigation to other posts */}
        <div className="mt-16 text-center">
          <Link 
            href="/blog" 
            className="bg-mfg-purple text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-mfg-gold hover:scale-105 transform transition-all duration-300 shadow-lg shadow-mfg-purple/40"
          >
            Explore More Chronicles
          </Link>
        </div>
      </article>
    </div>
  )
}