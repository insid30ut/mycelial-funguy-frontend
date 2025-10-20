/**
 * Centralized Navigation Configuration
 * 
 * This file serves as the single source of truth for all navigation links
 * used throughout the site. It's imported by both Navbar and Footer components
 * to ensure consistency and ease of maintenance.
 */

/**
 * Interface for navigation link items
 */
export interface NavigationLink {
  /** Display name for the link */
  name: string;
  /** URL path for the link */
  href: string;
  /** Optional description for the link (can be used for tooltips or accessibility) */
  description?: string;
}

/**
 * Main navigation links used across the site
 * 
 * These links appear in both the header navigation and footer.
 * Add or modify links here to update them throughout the site.
 */
export const NAVIGATION_LINKS: NavigationLink[] = [
  {
    name: 'Home',
    href: '/',
    description: 'Return to the home page',
  },
  {
    name: 'Blog',
    href: '/blog',
    description: 'Explore the Mycelial Chronicle - articles and cosmic transmissions',
  },
  {
    name: 'Teks & Tips',
    href: '/teks',
    description: 'Discover sacred cultivation techniques and cosmic tips',
  },
  {
    name: 'Calculators',
    href: '/calculators',
    description: 'Access cultivation calculators and measurement tools',
  },
];