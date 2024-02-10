import { supabase } from './db';
import { PRELOAD_COUNT } from './constants';
import { getFileUrl } from './helpers';
import { ImageType, ImageTypeParser } from './types';

export const fetchImageList = async () => {
  try {
    const { data, error } = await supabase.storage.from('images').list('', {
      // limit: 100,
      // offset: 0,
      sortBy: { column: 'created_at', order: 'desc' },
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
    return res;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Images');
  }
};

export const fetchInfiniteImageList = async ({ pageParam = 0 }) => {
  const { data, error } = await supabase.storage.from('images').list('', {
    limit: PRELOAD_COUNT,
    offset: pageParam * PRELOAD_COUNT,
    sortBy: { column: 'created_at', order: 'desc' },
  });

  if (error) {
    throw new Error();
  }

  const parsedResult = ImageTypeParser.safeParse(data);

  if (!parsedResult.success) {
    console.error('[Database Error] Failed to parse data:', parsedResult.error);
    throw new Error('Failed to parse data');
  }

  const res: ImageType[] = parsedResult.data.map((image) => ({
    ...image,
    url: getFileUrl(image.name),
    mimetype: image.metadata.mimetype,
  }));

  return res;
};
