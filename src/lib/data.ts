import { supabase } from './db';
import { PRELOAD_COUNT } from './constants';
import { getFileUrl } from './helpers';
import { ImageType, ImageTypeParser } from './types';

export const fetchInfiniteImageList = async ({ pageParam = 0 }) => {
  try {
    // Fetch images from the database
    const data = await fetch('https://api.uploadthing.com/v6/listFiles', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'x-uploadthing-api-key': String(process.env.NEXT_PUBLIC_UPLOADTHING_SECRET)
      }),
      body: JSON.stringify({ limit: PRELOAD_COUNT, offset: pageParam * PRELOAD_COUNT })
    });

    // If there's an error, throw an error
    if (!data || !data.ok) {
      throw new Error();
    }

    return data.json();
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Images');
  }
};
