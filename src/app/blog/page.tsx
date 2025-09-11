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

      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Blog Posts</h1>
          <p className="text-gray-600 mt-2">
            Latest insights, stories, and updates from the mushroom cultivation world
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No blog posts yet. Create your first post in the Sanity Studio!
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link 
                key={post._id} 
                href={`/blog/${post.slug.current}`}
                className="group"
              >
                <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  {post.image && (
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={urlFor(post.image).width(400).height(225).url()}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-3">
                      {new Date(post.published_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                    <p className="text-gray-700 line-clamp-3">
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