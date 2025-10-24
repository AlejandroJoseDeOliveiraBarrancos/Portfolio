import { useEffect, useRef } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (
  options: UseScrollAnimationOptions = {}
) => {
  const elementRef = useRef<HTMLElement>(null);
  const hasTriggeredRef = useRef(false);
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px',
    triggerOnce = true
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Add initial data attribute for CSS targeting
    element.setAttribute('data-scroll-animate', 'true');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!hasTriggeredRef.current || !triggerOnce) {
            // Use requestAnimationFrame to ensure smooth animation
            requestAnimationFrame(() => {
              element.classList.add('fade-in-up');
              element.classList.remove('fade-out-down');
            });
            hasTriggeredRef.current = true;
            
            if (triggerOnce) {
              observer.unobserve(element);
            }
          }
        } else if (!triggerOnce) {
          requestAnimationFrame(() => {
            element.classList.remove('fade-in-up');
            element.classList.add('fade-out-down');
          });
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return elementRef;
};
