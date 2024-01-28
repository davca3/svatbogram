import { fetchImageList } from '@/lib/data';
import { ImageType } from '@/lib/types';
import Image from 'next/image';
import { FunctionComponent, HTMLProps } from 'react';

type ImageCardProps = ImageType & HTMLProps<HTMLDivElement>;

const ImageCard: FunctionComponent<ImageCardProps> = ({
  url,
  name,
  mimetype,
}) => {
  let contentNode = null;

  if (mimetype.includes('video')) {
    contentNode = (
      <video
        src={url + '#t=0.1'}
        preload="metadata"
        muted
        playsInline
        controls
        controlsList="nodownload"
        className="h-full w-full object-cover"
        width={300}
        height={400}
      ></video>
    );
  } else {
    contentNode = (
      <Image
        className="h-full w-full object-cover object-center"
        src={url}
        alt={name}
        width={300}
        height={400}
      />
    );
  }

  return <div className="">{contentNode}</div>;
};

export default async function ImageGrid() {
  const imageList = await fetchImageList();
  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {imageList.map((image, key) => (
        <ImageCard {...image} key={key} />
      ))}
    </div>
  );
}
