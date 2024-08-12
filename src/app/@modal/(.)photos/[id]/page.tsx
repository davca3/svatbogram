import DownloadButton from '@/app/_components/DownloadButton';
import Modal from './Modal';
import Image from 'next/image';
import CopyButton from '@/app/_components/CopyButton';
import { isVideo } from '@/lib/helpers';
import DeleteButton from '@/app/_components/DeleteButton';
import { auth } from '@/auth';

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  let contentNode = null;

  const authFunc = await auth();
  
  if (isVideo(photoId)) {
    contentNode = (
      <video
        src={"https://utfs.io/f/" + photoId}
        playsInline
        controls
        autoPlay
        className='max-h-[70vh] object-contain'
        width={500}
        height={500}
      />
    );
  } else {
    contentNode = (
      <Image
        src={"https://utfs.io/f/" + photoId}
        alt='fotka'
        className='max-h-[70vh] object-contain'
        quality={100}
        height={500}
        width={500}
      />
    );
  }

  return (
    <Modal>
      {contentNode}
      <div className={`flex flex-wrap p-1 justify-end gap-2`}>
        {authFunc && <DeleteButton photoId={photoId} />}
        <DownloadButton photoId={photoId} />
        <CopyButton />
      </div>
      {/* <div className='flex justify-between mt-4'>
        <Button onClick={}>

        </Button>

      </div> */}
    </Modal>
  );
}
