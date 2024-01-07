import { ImageType } from './types';

type State = ImageType[];

export type Action = { type: 'add'; image: ImageType }

export const initialState: State = [];

export function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'add':
            const imageExists = state.some(img => img.url === action.image.url && img.mimetype === action.image.mimetype);
            if (imageExists) {
                return state;
            } else {
                return [...state, action.image];
            }
        default:
            throw new Error('Invalid action');
    }
}