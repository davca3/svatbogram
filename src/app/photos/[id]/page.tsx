import CopyButton from '@/app/_components/CopyButton';
import DownloadButton from '@/app/_components/DownloadButton';
import { isVideo } from '@/lib/helpers';
import Image from 'next/image';

export default function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  let contentNode = null
  if (isVideo(photoId)) {
    contentNode = (
      <video
        src={"https://utfs.io/f/" + photoId}
        playsInline
        controls
        autoPlay
        width={500}
        height={500}
      />
    );
  } else {
    contentNode = (
      <Image
          src={"https://utfs.io/f/" + photoId}
          alt='fotka'
          height={500}
          width={500}
        />
    )
  }

  return (
    <div className='flex-col justify-center my-0 mx-auto max-w-[500px] pt-4'>
      {contentNode}
      <div className={`flex row-auto p-4 justify-between`}>
        <DownloadButton photoId={photoId} />
        <CopyButton />
      </div>
    </div>
  );
}
