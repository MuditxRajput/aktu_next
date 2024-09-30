'use client'; // This tells Next.js this is a Client Component

import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const FirstStory = dynamic(() => import('./firstStory/AmpStory'), { ssr: false });
// const SecondStory = dynamic(() => import('./secondStory/AmpStory'), { ssr: false });
// const ThirdStory = dynamic(() => import('./thirdStory/AmpStory'), { ssr: false });

export default function ClientStorySelector() {
  const searchParams = useSearchParams();
  const story = searchParams.get('story');

  let StoryComponent;

  if (story === 'first') {
    StoryComponent = FirstStory;
  } 
  // else if (story === 'second') {
  //   StoryComponent = SecondStory;
  // } else if (story === 'third') {
  //   StoryComponent = ThirdStory;
  // }

  return (
    <div>
      {!story && (
        <div>
          <h1>Select a Story</h1>
          <ul>
            <li><a href="/stories?story=first">First Story</a></li>
            <li><a href="/stories?story=second">Second Story</a></li>
            <li><a href="/stories?story=third">Third Story</a></li>
          </ul>
        </div>
      )}
      {story && StoryComponent && (
        <Suspense fallback={<div>Loading story...</div>}>
          <StoryComponent />
        </Suspense>
      )}
    </div>
  );
}
