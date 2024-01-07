'use client'

import { useReducer } from 'react';

import Navigation from '@/components/navigation';
import UploadBtn from '@/components/uploadBtn';
import ImageGrid from '@/components/imageGrid';

import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { themeOptions } from '@/theme';

import { reducer, initialState } from '@/lib/reducer';
import { ImageType } from '@/lib/types';
import { addImage } from '@/lib/actions';

export default function Home() {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<main>
			<ThemeProvider theme={themeOptions}>
				<Navigation />
				<ImageGrid 
					images={state}
					addImage={(image: ImageType) => dispatch(addImage(image))}
				/>
				<UploadBtn />
			</ThemeProvider>
		</main>
	)
}
