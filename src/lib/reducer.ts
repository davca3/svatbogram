import { ImageType } from './types';

type State = {
    images: ImageType[];
    showcaseOpen: ImageType | null;
};

export type Action =
    | { type: 'add'; image: ImageType }
    | { type: 'toggleShowcase'; showcaseOpen: ImageType | null };

export const initialState: State = {
    images: [],
    showcaseOpen: null
};

export function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'add':
            const imageExists = state.images.some(img => img.url === action.image.url && img.mimetype === action.image.mimetype);
            if (imageExists) {
                return state;
            } else {
                return { ...state, images: [action.image, ...state.images] };
            }
        case 'toggleShowcase':
            return { ...state, showcaseOpen: action.showcaseOpen };
        default:
            throw new Error('Invalid action');
    }
}