import { getImageModal } from '@/lib/actions';
import Modal from './Modal';

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const data = await getImageModal(photoId);

  return (
    <Modal>
      Intersepted modal {photoId}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Modal>
  );
}
