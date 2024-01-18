import { fetchImageList } from '@/lib/data';

import { ImageType } from '@/lib/types';
import { FunctionComponent, HTMLProps } from 'react';

type ImageCardProps = ImageType & HTMLProps<HTMLDivElement>;

const ImageCard: FunctionComponent<ImageCardProps> = () => {
  return (
    <div>
      <h1>Image</h1>
    </div>
  );
};

export default async function ImageGrid() {
  const imageList = await fetchImageList();
  return (
    <div>
      {imageList.map((image, key) => (
        <ImageCard {...image} key={key} />
      ))}
    </div>
  );
}
