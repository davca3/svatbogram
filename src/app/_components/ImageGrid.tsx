'use client';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { PRELOAD_COUNT } from '@/lib/constants';
import { fetchInfiniteImageList } from '@/lib/data';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Fragment, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import ImageCard from './ImageCard';

// Common styles for "Loading Skeleton" and "Image Grid"
const IMAGE_GRID_STYLES =
  'relative z-10 grid grid-cols-3 gap-1 py-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4';

export default function ImageGrid() {
  // Intersection Observer hook to detect when the last image is in view
  const { ref, inView } = useInView();
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['images'], // Unique key for the query, used to cache the result
    queryFn: fetchInfiniteImageList, // Function to fetch the data
    initialPageParam: 0, // Initial page to fetch
    getNextPageParam: (lastPage, _, lastPageParam) => {
      // fetch the next page if the last page has items
      if (!lastPage || lastPage.length === 0) {
        return undefined;
      }
      return lastPageParam + 1;
    },
    getPreviousPageParam: (_, __, firstPageParam) => {
      // fetch the previous page if the first page has items - in case of random load in middle of the list
      if (firstPageParam <= 1) {
        return undefined;
      }
      return firstPageParam - 1;
    },
  });

  // Fetch next page when the last image is in view
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  // Render loading state while fetching next chunk of images
  if (status === 'pending') {
    return (
      <div className={IMAGE_GRID_STYLES}>
        {Array.from({ length: PRELOAD_COUNT }).map((_, key) => (
          <Skeleton key={key} className="aspect-square w-full" />
        ))}
      </div>
    );
  }

  // Render error state if fetching failed -- TODO: Add Error boundary client
  if (status === 'error') {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='pb-safe'>
      {/* Image grid */}
      <div className={IMAGE_GRID_STYLES}>
        {/* Data is paginated, so we need to map over the pages */}
        {data.pages.map((page, currentPageId) => (
          <Fragment key={currentPageId}>
            {page &&
              page.length > 0 &&
              page.map((image) => (
                <ImageCard
                  priority={currentPageId === 1}
                  {...image}
                  key={image.id}
                />
              ))}
          </Fragment>
        ))}
      </div>

      {/* Load more button in case where observer fail to load */}
      <div className="grid place-content-center">
        <Button
          ref={ref}
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? 'Načítám další obrázky...'
            : hasNextPage
              ? 'Načíst další obrázky'
              : 'Už jsem načetl všechny obrázky'}
        </Button>
      </div>
    </div>
  );
}
