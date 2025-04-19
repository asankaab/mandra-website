import { useEffect, useState, useRef } from 'react';

interface UseInViewOptions {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number | number[];
}

export function useInView<T extends HTMLElement>(
    options: UseInViewOptions = {}
): [React.RefObject<T>, boolean] {
    const [isInView, setIsInView] = useState(false);
    const elementRef = useRef<T>(null);

    useEffect(() => {
        const observerCallback: IntersectionObserverCallback = (entries) => {
            const [entry] = entries;
            setIsInView(entry.isIntersecting);
        };

        const observer = new IntersectionObserver(observerCallback, options);

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
            observer.disconnect();
        };
    }, [options]);

    return [elementRef as React.RefObject<T>, isInView];
}