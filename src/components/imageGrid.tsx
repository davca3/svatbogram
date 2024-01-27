import React, { ReactPropTypes, useEffect, useState } from 'react';
import { ImageList, ImageListItem, Dialog, DialogContent } from '@mui/material';
import { supabase } from '@/lib/api';
import Image from 'next/image';

import { ImageType } from '@/lib/types';
import { getFileUrl } from '@/lib/helpers';

type ImageGridProps = {
  images: ImageType[];
  addImage: (image: ImageType) => void;
  showcaseOpen: (image: ImageType) => void;
};

const isVideo = (file: ImageType | null): boolean =>
  (file && file?.mimetype?.includes('video')) || false;

export default function ImageGrid({
  images,
  addImage,
  showcaseOpen,
}: ImageGridProps) {
  const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   (async () => {
  //     const { data, error }: any = await supabase.storage
  //       .from('images')
  //       .list('', {
  //         limit: 100,
  //         offset: 0,
  //         sortBy: { column: 'created_at', order: 'asc' },
  //       });
  //     if (error) {
  //       setError(error);
  //       console.error(error);
  //     } else {
  //       data.map((image: any) => {
  //         const imageObject: ImageType = {
  //           url: getFileUrl(image.name),
  //           mimetype: image.metadata.mimetype,
  //           name: image.name,
  //         };
  //         addImage(imageObject);
  //       });
  //     }
  //   })();
  // }, []);

  if (error) {
    return <div>Error: {(error as any).message}</div>;
  }

  return (
    <div>
      <ImageList cols={3} gap={8} rowHeight={200}>
        {Array.isArray(images) &&
          images.map((image: ImageType, index: number) => (
            <ImageListItem key={index} onClick={() => showcaseOpen(image)}>
              {isVideo(image) ? (
                <video
                  src={image.url + '#t=0.1'}
                  preload="metadata"
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                ></video>
              ) : (
                <Image
                  src={image.url}
                  quality={50}
                  alt={`photo ${index}`}
                  priority
                  fill
                  className="h-full w-full object-cover"
                />
              )}
            </ImageListItem>
          ))}
      </ImageList>
    </div>
  );
}
