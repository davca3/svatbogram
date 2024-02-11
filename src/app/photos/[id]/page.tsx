import { getImageModal } from '@/lib/actions';

export default function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const image = getImageModal(photoId);

  return (
    <div>
      Normal value: {photoId}
      <pre>{JSON.stringify(image, null, 2)}</pre>
    </div>
  );
}
