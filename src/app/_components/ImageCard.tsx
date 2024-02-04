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
        src={`${url}?w=300&h=400`}
        alt={name}
        width={300}
        height={400}
        blurDataURL={`${url}?w=30&h=40&q=1`}
      />
    );
  }

  return <div className="">{contentNode}</div>;
};

export default ImageCard;
