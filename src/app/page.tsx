import { Suspense } from 'react';
import ImageGrid from './_components/ImageGrid';

export default async function Home() {
  return (
    <main>
      {/* TODO: Add loading skeleton */}
      <Suspense fallback={<div>Loading Suspense...</div>}>
        <ImageGrid />
      </Suspense>
    </main>
  );
}
