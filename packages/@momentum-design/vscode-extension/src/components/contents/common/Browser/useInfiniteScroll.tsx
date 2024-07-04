import { useEffect } from "react";

export const useIntersectionObserver = (options: any) => {
    const {
        root = null,
        target,
        onIntersect,
        threshold = 0.9,
        rootMargin = "30px",
        enabled = true,
        dependencyArray = [],
    } = options;

    useEffect(() => {
        const observer = new IntersectionObserver((entries) =>
            entries[0].intersectionRatio > 0 && enabled && onIntersect(),
            {
                root: root && root.current,
                rootMargin,
                threshold,
            }
        );

        const el = target && target.current;
        if (!el) {
            return;
        }
        observer.takeRecords;
        observer.observe(el);
        return () => {
            observer.unobserve(el);
        };
    }, [target.current, enabled, ...dependencyArray]);
};