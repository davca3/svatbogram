'use client';
import { fetchInfiniteImageList } from '@/lib/data';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Fragment, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import ImageCard from './ImageCard';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { PRELOAD_COUNT } from '@/lib/constants';

const IMAGE_GRID_STYLES =
  'relative z-10 grid grid-cols-3 gap-1 py-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4';

export default function ImageGrid() {
  const { ref, inView } = useInView();
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['images'],
    queryFn: fetchInfiniteImageList,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (!lastPage || lastPage.length === 0) {
        return undefined;
      }
      return lastPageParam + 1;
    },
    getPreviousPageParam: (firstPage, allPages, firstPageParam) => {
      if (firstPageParam <= 1) {
        return undefined;
      }
      return firstPageParam - 1;
    },
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  if (status === 'pending') {
    return (
      <div className={IMAGE_GRID_STYLES}>
        {Array.from({ length: PRELOAD_COUNT }).map((_, key) => (
          <Skeleton key={key} className="aspect-square w-full" />
        ))}
      </div>
    );
  }

  if (status === 'error') {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className={IMAGE_GRID_STYLES}>
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
      <Button
        ref={ref}
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage
          ? 'Loading more...'
          : hasNextPage
            ? 'Load Newer'
            : 'Nothing more to load'}
      </Button>
    </>
  );
}
