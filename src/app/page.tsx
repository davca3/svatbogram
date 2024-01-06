'use client'

import Navigation from '@/components/navigation';
import UploadBtn from '@/components/uploadBtn';
import ImageGrid from '@/components/imageGrid';

import { ThemeOptions } from '@mui/material/styles';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';

import { createClient } from '@supabase/supabase-js'
import { useEffect } from 'react';

export const themeOptions: ThemeOptions = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6b7557',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Sacramento',
    }
  },
});

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
