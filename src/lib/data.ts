import { supabase } from './db';
import { PRELOAD_COUNT } from './constants';
import { getFileUrl } from './helpers';
import { ImageType, ImageTypeParser } from './types';

export const fetchInfiniteImageList = async ({ pageParam = 0 }) => {
  try {
    // Fetch images from the database
    const { data, error } = await supabase.storage.from('images').list('', {
      limit: PRELOAD_COUNT, // Fetch X images at a time
      offset: pageParam * PRELOAD_COUNT, // Offset the images based on the page number
      sortBy: { column: 'created_at', order: 'desc' }, // Sort the images by the created_at column -- newest first
    });

    // If there's an error, throw an error
    if (error) {
      throw new Error();
    }

    // Parse the data to make sure it's in the correct format
    const parsedResult = ImageTypeParser.safeParse(data);

    // If the data is not in the correct format, throw an error
    if (!parsedResult.success) {
      console.error(
        '[Database Error] Failed to parse data:',
        parsedResult.error,
      );
      throw new Error('Failed to parse data');
    }

    // Map the data to add the URL and mimetype to each image
    const res: ImageType[] = parsedResult.data.map((image) => ({
      ...image,
      url: getFileUrl(image.name),
      mimetype: image.metadata.mimetype,
    }));

    return res;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Images');
  }
};
