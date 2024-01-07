import { ImageType } from './types';

export const isVideo = (file: ImageType | null): boolean => (file && file?.mimetype?.includes('video')) || false;