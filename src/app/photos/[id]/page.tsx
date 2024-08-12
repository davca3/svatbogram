import CopyButton from '@/app/_components/CopyButton';
import DownloadButton from '@/app/_components/DownloadButton';
import { isVideo } from '@/lib/helpers';
import Image from 'next/image';
import { auth } from '@/auth';
import DeleteButton from '@/app/_components/DeleteButton';

export default async function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const authFunc = await auth();
  let contentNode = null;

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
      <div className={`flex flex-wrap p-1 justify-end gap-2`}>
        {authFunc && <DeleteButton photoId={photoId} />}
        <DownloadButton photoId={photoId} />
        <CopyButton />
      </div>
    </div>
  );
}
