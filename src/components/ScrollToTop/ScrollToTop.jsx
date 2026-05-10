import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        try {
            window.scrollTo(0, 0);
        } catch (error) {
            // JSDOM doesn't implement window.scrollTo; ignore in tests.
        }
    }, [pathname]);

    return null;
};

export default ScrollToTop; 