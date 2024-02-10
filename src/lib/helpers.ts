import { ImageType } from './types';
import { supabase } from './db';

export const isVideo = (file: ImageType | null): boolean =>
  (file && file?.mimetype?.includes('video')) || false;

export const getFileUrl = (fileName: string): string =>
  supabase.storage.from('images').getPublicUrl(fileName).data.publicUrl;

export async function uploadFile(file: File): Promise<ImageType | null> {
  const name = self.crypto.randomUUID();

  try {
    const { data, error } = await supabase.storage
      .from('images')
      .upload(name, file);

    const uploadedImage: ImageType = {
      id: crypto.randomUUID(),
      url: getFileUrl(name),
      mimetype: file.type,
      name,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    return uploadedImage;
  } catch (error) {
    throw new Error(`Failed to upload file: ${(error as any).message}`);
  }
}
