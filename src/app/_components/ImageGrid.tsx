'use client';
import { fetchInfiniteImageList } from '@/lib/data';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Fragment, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import ImageCard from './ImageCard';
import { Skeleton } from '@/components/ui/skeleton';

const IMAGE_GRID_STYLES =
  'grid grid-cols-3 gap-1 py-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4';

export default function ImageGrid() {
  // const imageList = await fetchImageList();

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
        {Array.from({ length: 12 }).map((_, key) => (
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
        {data.pages.map((page, key) => (
          <Fragment key={key}>
            {page &&
              page.length > 0 &&
              page.map((image) => <ImageCard {...image} key={image.id} />)}
          </Fragment>
        ))}
      </div>
      <button
        ref={ref}
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage
          ? 'Loading more...'
          : hasNextPage
            ? 'Load Newer'
            : 'Nothing more to load'}
      </button>
    </>
  );
}
