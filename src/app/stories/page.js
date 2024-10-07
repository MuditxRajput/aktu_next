import { Suspense } from 'react';
import ClientStorySelector from './ClientStorySelector';

export const metadata = {
  title: 'Aktu Free Quantum for B.Tech Students',
  description: 'Get all B.tech 1st, 2nd, 3rd and 4th year aktu quantum in just one click',
  openGraph: {
    title: 'Aktu result | aktu oneview Aktu Free Quantum for B.Tech Students',
    description: 'Get all B.tech 1st, 2nd, 3rd and 4th year aktu quantum in just one click',
    // url: 'https://yourwebsite.com/palmistry-stories',
    images: [
      {
        // url: 'https://yourwebsite.com/assets/palmistry-og-image.jpg',
        width: 800,
        height: 600,
        alt: 'Aktu quantum free pdf',
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
