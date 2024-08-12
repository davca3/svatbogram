import { createUploadthing, type FileRouter } from 'uploadthing/next';
import { UploadThingError } from 'uploadthing/server';

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: '16GB' }, video: { maxFileSize: '16GB' } })
    .onUploadComplete(async ({ metadata, file }) => {
      return true;
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
