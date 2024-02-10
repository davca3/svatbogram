import { ImageType } from './types';
import { supabase } from './db';
import * as tus from 'tus-js-client';

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

export async function resumableUploadFile(file: File) {
  return new Promise((resolve, reject) => {
    const upload = new tus.Upload(file, {
      endpoint: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/upload/resumable`,
      retryDelays: [0, 3000, 5000, 10000, 20000],
      uploadDataDuringCreation: true,
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
        'x-upsert': 'true'
      },
      metadata: {
        bucketName: 'images',
        objectName: crypto.randomUUID(),
        cacheControl: '3600'
      },
      chunkSize: 6 * 1024 * 1024, // NOTE: it must be set to 6MB (for now) do not change it
      onError: function (error) {
        console.log('Failed because: ' + error)
        reject(error)
      },
      onProgress: function (bytesUploaded, bytesTotal) {
        var percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2)
        console.log(bytesUploaded, bytesTotal, percentage + '%')
      },
      onSuccess: function () {
        console.log(upload)
        resolve(true);
      },
    });

    // Check if there are any previous uploads to continue.
    return upload.findPreviousUploads().then(function (previousUploads) {
      // Found previous uploads so we select the first one.
      if (previousUploads.length) {
        upload.resumeFromPreviousUpload(previousUploads[0])
      }

      // Start the upload
      upload.start()
    });
  });
}