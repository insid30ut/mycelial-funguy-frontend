import Link from 'next/link'
import partnersData from '@/data/partners.json'

// Type definition for Partner
interface Partner {
  id: string
  name: string
  url: string
  description: string
  category: string
  verified: boolean
  image: string | null
}

// Helper to filter partners by category
function getPartnersByCategory(category: string) {
  return partnersData.filter((p) => p.category === category)
}

function SectionHeader({ title, icon }: { title: string; icon: string }) {
  return (
    <div className="flex items-center gap-3 mb-8 border-b border-mfg-purple/30 pb-4">
      <span className="text-3xl">{icon}</span>
      <h2 className="text-3xl font-display font-bold text-mfg-light">{title}</h2>
    </div>
  )
}

function VerifiedBadge() {
  return (
    <span className="inline-flex items-center gap-1 bg-mfg-gold/20 text-mfg-gold border border-mfg-gold/50 px-2 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider">
      <span>✓</span> Verified Partner
    </span>
  )
}

export default function PartnersPage() {
  const vendors = getPartnersByCategory('vendor')
  const knowledge = getPartnersByCategory('knowledge')
  const social = getPartnersByCategory('social')

  return (
    <div className="min-h-screen bg-mfg-dark text-mfg-light">
      {/* Header */}
      <div className="bg-mfg-dark/80 backdrop-blur-sm border-b border-mfg-purple/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-black text-mfg-light drop-shadow-[0_3px_3px_rgba(157,78,221,0.7)]">
            Trusted Partners
          </h1>
          <p className="text-mfg-light/80 mt-4 text-lg max-w-2xl mx-auto">
            A curated network of reliable vendors, knowledge hubs, and community spaces.
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Vendors Section */}
        <section>
          <SectionHeader title="Trusted Vendors" icon="🛒" />
          {vendors.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {vendors.map((partner) => (
                <PartnerCard key={partner.id} partner={partner} />
              ))}
            </div>
          ) : (
            <EmptyState message="Curating the best vendors... Check back soon!" />
          )}
        </section>

        {/* Knowledge Section */}
        <section>
          <SectionHeader title="Knowledge Hubs" icon="🧠" />
          {knowledge.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {knowledge.map((partner) => (
                <PartnerCard key={partner.id} partner={partner} />
              ))}
            </div>
          ) : (
            <EmptyState message="Gathering ancient wisdom... Check back soon!" />
          )}
        </section>

        {/* Social Section */}
        <section>
          <SectionHeader title="Community & Social" icon="🌐" />
          {social.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {social.map((partner) => (
                <PartnerCard key={partner.id} partner={partner} />
              ))}
            </div>
          ) : (
            <EmptyState message="Connecting the mycelial network... Check back soon!" />
          )}
        </section>

      </main>
    </div>
  )
}

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <Link 
      href={partner.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full"
    >
      <article className="bg-mfg-dark/50 backdrop-blur-md rounded-xl shadow-lg border border-mfg-purple/30 overflow-hidden h-full transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
        {/* Card Header / Image Placeholder */}
        <div className="h-24 bg-gradient-to-r from-mfg-purple/20 to-mfg-teal/20 flex items-center justify-center border-b border-mfg-purple/10">
          <span className="text-4xl opacity-50 group-hover:scale-110 transition-transform duration-300">
            {partner.category === 'vendor' ? '📦' : partner.category === 'knowledge' ? '📚' : '💬'}
          </span>
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-display font-bold text-mfg-light group-hover:text-mfg-purple transition-colors">
              {partner.name}
            </h3>
            {partner.verified && <VerifiedBadge />}
          </div>
          
          <p className="text-mfg-light/70 text-sm flex-grow">
            {partner.description}
          </p>
          
          <div className="mt-4 flex items-center text-mfg-teal text-sm font-bold group-hover:underline">
            Visit Website 
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  )
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="text-center py-12 bg-mfg-dark/30 rounded-xl border border-dashed border-mfg-purple/30">
      <p className="text-mfg-light/50 text-lg italic">{message}</p>
    </div>
  )
}
