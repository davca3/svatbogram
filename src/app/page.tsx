'use client'

import Image from 'next/image'
import styles from './page.module.scss'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Navigation from '@/components/navigation';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/system';
import UploadBtn from '@/components/uploadBtn';
import ImageGrid from '@/components/imageGrid';

export default function Home() {
  return (
    <main>
      <Navigation />
      <ImageGrid />
      <UploadBtn />
    </main>
  )
}
