import localFont from 'next/font/local';

// I'm here using the custom Inter font downloaded from author's site since
// this version is fully optimized, has better legibility and has way more ligatures
// when compared to google fonts version. So I've decided to stick to this one.

export const inter = localFont({
  src: 'InterVariable.woff2',
  display: 'swap'
});