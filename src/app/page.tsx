import { Suspense } from 'react';
import ImageGrid from './_components/ImageGrid';
import { Skeleton } from '@mui/material';

export default async function Home() {

  return (
    <main>
      <Suspense fallback={<Skeleton animation="wave" variant="rectangular" height={'100%'} width={'100%'} className='object-cover aspect-square' />}>
        <ImageGrid />
      </Suspense>
    </main>
  );
}
