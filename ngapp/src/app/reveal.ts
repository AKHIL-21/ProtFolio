import ScrollReveal from 'scrollreveal';

// Single shared ScrollReveal instance (matches the static site's config).
let instance: ReturnType<typeof ScrollReveal> | null = null;

export function getSR() {
  if (!instance) {
    instance = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 1000,
      reset: true
    });
  }
  return instance;
}
