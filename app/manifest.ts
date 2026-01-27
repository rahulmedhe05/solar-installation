import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SolarVadodara.in - Best Solar Installation Company',
    short_name: 'SolarVadodara',
    description: 'Gujarat\'s most trusted solar panel installation company in Vadodara. MNRE & GEDA approved. Get up to ₹78,000 government subsidy.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#F59E0B',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['business', 'utilities'],
    lang: 'en-IN',
  };
}
