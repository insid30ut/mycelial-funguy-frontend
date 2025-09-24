import Link from 'next/link'
import Image from 'next/image'
import { client, urlFor, BlogPost } from '@/lib/sanity'

// Function to fetch blog posts from Sanity
async function getBlogPosts(): Promise<BlogPost[]> {
  const posts = await client.fetch(
    `*[_type == "blogPost"] | order(published_at desc) {
      _id,
      title,
      slug,
      image,
      brief_description,
      published_at
    }`
  )
  return posts
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="min-h-screen bg-mfg-dark text-mfg-light">
      {/* Header */}
      <div className="bg-mfg-dark/80 backdrop-blur-sm border-b border-mfg-purple/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-black text-mfg-light drop-shadow-[0_3px_3px_rgba(157,78,221,0.7)]">The Mycelial Chronicle</h1>
          <p className="text-mfg-light/80 mt-4 text-lg max-w-2xl mx-auto">
            Latest insights, stories, and cosmic transmissions from the mushroom cultivation universe.
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-mfg-light/70 text-lg">
              The ether is quiet... No blog posts yet. Create your first transmission in the Sanity Studio!
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link 
                key={post._id} 
                href={`/blog/${post.slug.current}`}
                className="group block"
              >
                <article className="bg-mfg-dark/50 backdrop-blur-md rounded-xl shadow-lg border border-mfg-purple/30 overflow-hidden h-full transform hover:-translate-y-2 transition-transform duration-300">
                  {post.image ? (
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={urlFor(post.image).width(400).height(225).url()}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ) : (
                    <div className="aspect-video bg-gradient-to-br from-mfg-purple/20 to-mfg-teal/20 flex items-center justify-center">
                      <span className="text-5xl opacity-50">🍄</span>
                    </div>
                  )}
                  <div className="p-6 flex flex-col">
                    <h2 className="text-2xl font-display font-bold text-mfg-light mb-2 group-hover:text-mfg-purple transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-mfg-light/60 text-sm mb-4">
                      {new Date(post.published_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                    <p className="text-mfg-light/80 line-clamp-3 flex-grow">
                      {post.brief_description}
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