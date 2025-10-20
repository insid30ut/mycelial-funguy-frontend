import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

// Validate required environment variables
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

if (!projectId || !dataset) {
  const missingVars = []
  if (!projectId) missingVars.push('NEXT_PUBLIC_SANITY_PROJECT_ID')
  if (!dataset) missingVars.push('NEXT_PUBLIC_SANITY_DATASET')
  
  throw new Error(
    `Missing required Sanity environment variables: ${missingVars.join(', ')}. ` +
    'Please check your .env.local file and ensure these variables are set.'
  )
}

export const client = createClient({
  projectId,
  dataset,
  useCdn: true,
  apiVersion: '2023-05-03',
})

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// Type definitions for your content
export interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  image?: SanityImageSource
  brief_description: string
  full_content_body: Block[]
  published_at: string
}

export interface TekAndTip {
  _id: string
  title: string
  slug: { current: string }
  image?: SanityImageSource
  brief_description: string
  category: string
  difficulty_level: string
  full_content_body: Block[]
  published_at: string
}

// Type for Sanity's portable text blocks
export interface Block {
  _type: string
  _key: string
  children?: Array<{
    _type: string
    _key: string
    text: string
    marks?: string[]
  }>
  style?: string
  markDefs?: Array<{
    _type: string
    _key: string
    [key: string]: unknown
  }>
}