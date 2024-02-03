import { Suspense } from 'react';
import ImageGrid from './_components/ImageGrid';
import { Loader } from './_components/Loader';

export default async function Home() {

  return (
    <main>
      {/* TODO: Add loading skeleton (not necessary)*/}
      <Suspense fallback={<Loader />}>
        <ImageGrid />
      </Suspense>
    </main>
  );
}
