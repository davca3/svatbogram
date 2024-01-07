import { Action } from "./reducer";
import { ImageType } from './types';

export const addImage = (image: ImageType): Action => ({
    type: 'add',
    image
});

export const toggleShowcase = (showcaseOpen: ImageType | null): Action => ({
    type: 'toggleShowcase',
    showcaseOpen
});