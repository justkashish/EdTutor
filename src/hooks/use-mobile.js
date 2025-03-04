import { useState, useEffect } from 'react';

/**
 * Hook to detect if the current viewport is mobile
 * @param {number} breakpoint - The breakpoint to consider as mobile (default: 768)
 * @returns {boolean} - True if viewport width is less than the breakpoint
 */
export default function useMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < breakpoint);
        };

        // Check on initial load
        checkIsMobile();

        // Add event listener for window resize
        window.addEventListener('resize', checkIsMobile);

        // Clean up event listener
        return () => window.removeEventListener('resize', checkIsMobile);
    }, [breakpoint]);

    return isMobile;
}