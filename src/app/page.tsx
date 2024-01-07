'use client'

import { useReducer } from 'react';

import Navigation from '@/components/navigation';
import UploadBtn from '@/components/uploadBtn';
import ImageGrid from '@/components/imageGrid';
import ShowcaseDialog from '@/components/showcaseDialog';

import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { themeOptions } from '@/theme';

import { reducer, initialState } from '@/lib/reducer';
import { ImageType } from '@/lib/types';
import { addImage, toggleShowcase } from '@/lib/actions';

export default function Home() {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<main>
			<ThemeProvider theme={themeOptions}>
				<ShowcaseDialog
					openedImage={state.showcaseOpen}
					handleClose={() => dispatch(toggleShowcase(null))}
				/>
				<Navigation />
				<ImageGrid 
					images={state.images}
					addImage={(image: ImageType) => dispatch(addImage(image))}
					showcaseOpen={(image: ImageType | null) => dispatch(toggleShowcase(image))}
				/>
				<UploadBtn 
					addImage={(image: ImageType) => dispatch(addImage(image))}
				/>
			</ThemeProvider>
		</main>
	)
}
