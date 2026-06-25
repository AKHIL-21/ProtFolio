// Ambient declarations for CDN/npm libs that ship no TypeScript types.
declare module 'scrollreveal';
declare module 'particles.js';

interface Window {
  particlesJS: (tagId: string, config: unknown) => void;
}
