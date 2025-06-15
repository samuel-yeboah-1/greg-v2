import { useEffect, useState } from 'react'

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)
  const getMatches = (query: string): boolean => {
    // Prevents SSR issues
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches
    }
    return false
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)
    // Set initial value
    setMatches(mediaQuery.matches)

    // Create event listener
    const handler = (event: MediaQueryListEvent) => setMatches(event.matches)

    // Add event listener
    mediaQuery.addEventListener('change', handler)

    // Remove event listener on cleanup
    return () => mediaQuery.removeEventListener('change', handler)
  }, [query]) // Empty array ensures effect is only run on mount and unmount

  return matches
}
