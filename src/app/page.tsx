'use client'

import Navigation from '@/components/navigation';
import UploadBtn from '@/components/uploadBtn';
import ImageGrid from '@/components/imageGrid';

import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { themeOptions } from '@/theme';

export default function Home() {
  return (
    <main>
      <ThemeProvider theme={themeOptions}>
        <Navigation />
        <ImageGrid />
        <UploadBtn />
      </ThemeProvider>
    </main>
  )
}
