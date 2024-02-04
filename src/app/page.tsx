import { Suspense } from 'react';
import ImageGrid from './_components/ImageGrid';
import { Skeleton } from '@/components/ui/skeleton';
// import { Skeleton } from '@mui/material';

export default async function Home() {
  return (
    <main>
      <Suspense fallback={<Skeleton className="h-full w-full" />}>
        <ImageGrid />
      </Suspense>
    </main>
  );
}
