import { ImageType } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent, HTMLProps } from 'react';

type ImageCardProps = ImageType &
  HTMLProps<HTMLDivElement> & {
    priority?: boolean;
  };

const ImageCard: FunctionComponent<ImageCardProps> = ({
  url,
  name,
  mimetype,
  id = '1',
  priority = false,
}) => {
  let contentNode = null;

  if (mimetype.includes('video')) {
    contentNode = (
      <video
        src={url + '#t=0.1'}
        preload="metadata"
        muted
        playsInline
        className="aspect-square h-full w-full object-cover"
        width={150}
        height={150}
      ></video>
    );
  } else {
    contentNode = (
      <Image
        className="aspect-square h-full w-full object-cover object-center"
        src={`${url}?w=300&h=400`}
        blurDataURL={`${url}?w=30&h=40&q=1`}
        alt={name}
        width={150}
        height={150}
        priority={priority}
        placeholder="blur"
      />
    );
  }

  return (
    <Link href={`/photos/${id}`} passHref prefetch={false}>
      {contentNode}
    </Link>
  );
};

export default ImageCard;
