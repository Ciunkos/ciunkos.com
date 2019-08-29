import { useEffect, useState } from 'react'

const useLocation = sourceLocation => {
  const [location, setLocation] = useState(sourceLocation || window.location)

  useEffect(() => {
    const handler = () => {
      setLocation({ ...window.location })
    }

    const listener = window.addEventListener('popstate', handler, false)

    return () => {
      window.removeEventListener(listener)
    }
  }, [])

  return location
}

export default useLocation
