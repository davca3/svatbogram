import { Suspense } from 'react';
import ImageGrid from './_components/ImageGrid';
import { Skeleton } from '@/components/ui/skeleton';

export default function Home() {
  return (
    <main>
      {/* Suspense client for bundle load, probably never will be seen. */}
      <Suspense fallback={<Skeleton className="h-full w-full" />}>
        <ImageGrid />
      </Suspense>
    </main>
  );
}
