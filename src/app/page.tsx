import Image from 'next/image'
import styles from './page.module.scss'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ResponsiveAppBar from '@/components/navigation';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';


export default function Home() {
  return (
    <main>
      <ResponsiveAppBar />
      {/* <ImageList
        sx={{ width: 500, height: 450 }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList> */}
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </main>
  )
}
