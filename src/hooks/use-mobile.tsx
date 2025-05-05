
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | null>(null)

  React.useEffect(() => {
    // Initialize with the current window width
    const checkIfMobile = () => window.innerWidth < MOBILE_BREAKPOINT
    setIsMobile(checkIfMobile())

    // Set up the event listener for resize events
    const handleResize = () => {
      setIsMobile(checkIfMobile())
    }
    
    window.addEventListener("resize", handleResize)
    
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Return false as fallback during SSR
  return isMobile !== null ? isMobile : false
}
