import { Suspense } from 'react';
import ImageGrid from './_components/ImageGrid';
import Loader from './_components/Loader';

export default async function Home() {

  return (
    <main>
      <Suspense fallback={<Loader />}>
        <ImageGrid />
      </Suspense>
    </main>
  );
}
