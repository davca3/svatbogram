import React, { useEffect, useState } from "react"
import { ImageList, ImageListItem } from "@mui/material"

export default function ImageGrid() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        // const fetchImages = async () => {
        //     const listRef = ref(storage, '');

        //     try {
        //         const res = await listAll(listRef);
        //         const imageUrls: any = await Promise.all(res.items.map(item => getDownloadURL(item)));
        //         setImages(imageUrls);
        //     } catch (error) {
        //         // Handle error
        //     }
        // }

        // fetchImages();
    }, []);

    return (
        <ImageList cols={3} gap={8} rowHeight={130}>
            {Array.isArray(images) && images.map((url: string, index: number) => (
                <ImageListItem key={index}>
                    <img
                        srcSet={url}
                        src={url}
                        alt={'photo'}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    )
}