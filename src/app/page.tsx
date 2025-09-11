import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-green-800">🍄 Mycelial FunGuy</h1>
            </div>
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors">
                Home
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-green-600 transition-colors">
                Blog
              </Link>
              <Link href="/teks" className="text-gray-700 hover:text-green-600 transition-colors">
                Teks & Tips
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-green-600">Mycelial FunGuy</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Your comprehensive hub for mushroom cultivation knowledge. From beginner guides to advanced techniques, 
            discover everything you need to grow your own fungi paradise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/blog" 
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Read Latest Posts
            </Link>
            <Link 
              href="/teks" 
              className="bg-white text-green-600 border-2 border-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Browse Teks & Tips
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-4">📚</div>
            <h3 className="text-xl font-semibold mb-2">Comprehensive Guides</h3>
            <p className="text-gray-600">
              Step-by-step tutorials covering every aspect of mushroom cultivation, from substrate preparation to harvesting.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-4">🔬</div>
            <h3 className="text-xl font-semibold mb-2">Proven Techniques</h3>
            <p className="text-gray-600">
              Battle-tested teks and methods shared by experienced cultivators in the community.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-4">🌱</div>
            <h3 className="text-xl font-semibold mb-2">From Beginner to Expert</h3>
            <p className="text-gray-600">
              Content organized by difficulty level, so you can progress at your own pace.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}