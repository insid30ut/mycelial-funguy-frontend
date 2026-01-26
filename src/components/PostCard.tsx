import Link from 'next/link'
import Image from 'next/image'
import { urlFor, BlogPost, TekAndTip } from '@/lib/sanity'
import { getDifficultyColor, getCategoryColor } from '@/lib/utils'

interface PostCardProps {
  post: BlogPost | TekAndTip
  basePath: 'blog' | 'teks'
}

export default function PostCard({ post, basePath }: PostCardProps) {
  // Type guard to check if post is a TekAndTip
  const isTek = (post: BlogPost | TekAndTip): post is TekAndTip => {
    return 'category' in post && 'difficulty_level' in post
  }

  // Different fallback emojis for blog vs teks
  const fallbackEmoji = basePath === 'blog' ? '🍄' : '🔬'

  return (
    <Link 
      href={`/${basePath}/${post.slug.current}`}
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
            <span className="text-5xl opacity-50">{fallbackEmoji}</span>
          </div>
        )}
        <div className="p-6 flex flex-col">
          {/* Conditionally render badges for teks */}
          {isTek(post) && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.category && (
                <span className={`px-3 py-1 text-xs font-bold rounded-full border ${getCategoryColor(post.category)}`}>
                  {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                </span>
              )}
              {post.difficulty_level && (
                <span className={`px-3 py-1 text-xs font-bold rounded-full ${getDifficultyColor(post.difficulty_level)}`}>
                  {post.difficulty_level.charAt(0).toUpperCase() + post.difficulty_level.slice(1)}
                </span>
              )}
            </div>
          )}
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
  )
}
