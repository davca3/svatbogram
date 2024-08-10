import { ImageType } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent, HTMLProps } from 'react';

type ListFilesReturnType = {
  name: string;
  url: string;
  key: string;
  customId: string | null;
  status: "Deletion Pending" | "Failed" | "Uploaded" | "Uploading";
  id: string;
};

type ImageCardProps = ListFilesReturnType & 
  HTMLProps<HTMLDivElement> & {
    priority?: boolean;
  };

const ImageCard: FunctionComponent<ImageCardProps> = ({
  url,
  id,
  name,
  priority = false,
}) => {
  
  let contentNode = null;
  const imageUrl = url;
  const isVideo = name?.includes('mp4') || name?.includes('webm') || name?.includes('mov');

  if (isVideo) {
    contentNode = (
      <video
        src={`${imageUrl}#t=0.1`}
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
        src={`${imageUrl}`}
        blurDataURL={`${imageUrl}?w=30&h=40&q=1`}
        alt={name || 'fotka'}
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
