/**
 * Utility functions for the Mycelial FunGuy application
 */

/**
 * Returns Tailwind CSS classes for difficulty level badges
 * @param difficulty - The difficulty level (beginner, intermediate, advanced)
 * @returns Tailwind CSS class string for background and text colors
 */
export function getDifficultyColor(difficulty: string): string {
  switch (difficulty) {
    case 'beginner':
      return 'bg-mfg-teal text-mfg-light'
    case 'intermediate':
      return 'bg-mfg-gold text-mfg-dark'
    case 'advanced':
      return 'bg-mfg-purple text-mfg-light'
    default:
      return 'bg-gray-500 text-white'
  }
}

/**
 * Returns Tailwind CSS classes for category badges
 * @param category - The category (growing, sterilization, substrate, harvesting, general)
 * @returns Tailwind CSS class string for border and text colors
 */
export function getCategoryColor(category: string): string {
  switch (category) {
    case 'growing':
      return 'border-blue-400 text-blue-300'
    case 'sterilization':
      return 'border-purple-400 text-purple-300'
    case 'substrate':
      return 'border-orange-400 text-orange-300'
    case 'harvesting':
      return 'border-pink-400 text-pink-300'
    case 'general':
      return 'border-gray-400 text-gray-300'
    default:
      return 'border-gray-500 text-gray-400'
  }
}