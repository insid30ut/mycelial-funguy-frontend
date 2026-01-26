import { client, BlogPost } from '@/lib/sanity'
import PostCard from '@/components/PostCard'

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
              <PostCard key={post._id} post={post} basePath="blog" />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}