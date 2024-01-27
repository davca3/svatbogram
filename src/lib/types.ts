import { z } from 'zod';

export type ImageRAWType = {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
  metadata: {
    size: number;
    mimetype: string;
  };
};

export type ImageType = {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
  url: string;
  mimetype: string;
};

export const ImageTypeParser: z.ZodSchema<ImageRAWType[]> = z.array(
  z.object({
    id: z.string(),
    name: z.string(),
    created_at: z.string(),
    updated_at: z.string(),
    metadata: z.object({
      size: z.number(),
      mimetype: z.string(),
    }),
  }),
);
