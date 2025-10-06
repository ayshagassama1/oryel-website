import { useEffect, useRef } from 'react';
 
/**
 * Hook qui ajoute une animation d'apparition quand l'élément
 * entre dans le viewport (scroll-based reveal).
 *
 * Usage :
 *   const ref = useScrollAnimate();
 *   <div ref={ref} className="scroll-animate">...</div>
 */
export function useScrollAnimate(delay = 0) {
  const ref = useRef(null);
 
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
 
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add('visible');
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
 
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
 
  return ref;
}
