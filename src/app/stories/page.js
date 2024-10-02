import { Suspense } from 'react';
import ClientStorySelector from './ClientStorySelector';

export const metadata = {
  title: 'Palmistry Revealed | Discover Your Future Through the Ancient Art of Palm Reading',
  description: 'Uncover the secrets hidden in your palm lines. Learn about your life, love, and destiny with our interactive palmistry stories.',
  openGraph: {
    title: 'Explore Your Destiny with Palmistry AMP Stories',
    description: 'Dive into visually engaging AMP stories about palmistry and discover what your palm lines reveal about your future.',
    // url: 'https://yourwebsite.com/palmistry-stories',
    images: [
      {
        // url: 'https://yourwebsite.com/assets/palmistry-og-image.jpg',
        width: 800,
        height: 600,
        alt: 'Palmistry AMP Stories',
      },
    ],
  },
};

export default function Story() {
  return (
    <Suspense fallback={<div>Loading stories...</div>}>
      <ClientStorySelector />
    </Suspense>
  );
}
