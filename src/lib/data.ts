import { supabase } from './api';
import { getFileUrl } from './helpers';
import { ImageRAWType, ImageType, ImageTypeParser } from './types';

export async function fetchImageList() {
  try {
    const { data, error } = await supabase.storage.from('images').list('', {
      limit: 100,
      offset: 0,
      sortBy: { column: 'created_at', order: 'asc' },
    });

    if (error) {
      throw new Error();
    }

    const parsedResult = ImageTypeParser.safeParse(data);

    if (!parsedResult.success) {
      console.error(
        '[Database Error] Failed to parse data:',
        parsedResult.error,
      );
      throw new Error('Failed to parse data');
    }

    const res: ImageType[] = parsedResult.data.map((image) => ({
      ...image,
      url: getFileUrl(image.name),
      mimetype: image.metadata.mimetype,
    }));

    // Show the newest images first
    return res.sort((a, b) => (a.created_at < b.created_at ? 1 : -1));
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Images');
  }
}
