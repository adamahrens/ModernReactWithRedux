import { useEffect, useState } from 'react'

const Route = ({ path, children }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    useEffect(() => {
        const onLocationChange = () => {
            // Now we need to re-render, determines if it should show it's child
            setCurrentPath(window.location.pathname)
        }

        window.addEventListener('popstate', onLocationChange)

        return () => {
            window.removeEventListener('popstate', onLocationChange)
        }
    }, []);

    return currentPath === path ? children : null
}

export default Route