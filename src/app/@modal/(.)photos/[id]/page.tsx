import { getImageModal } from '@/lib/actions';
import Modal from './Modal';
import Image from 'next/image';

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const data = await getImageModal(photoId);

  return (
    <Modal>
      <Image
        src={"https://utfs.io/f/" + photoId}
        alt='fotka'
        height={500}
        width={500}
      />
    </Modal>
  );
}
