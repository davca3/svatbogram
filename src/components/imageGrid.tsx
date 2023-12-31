import React, { useEffect } from "react"
import { ImageList, ImageListItem } from "@mui/material"
import { ref, listAll } from "firebase/storage";
import { storage } from "../../config";

export default function ImageGrid() {

    const itemData = () => {
        // Create a reference under which you want to list
        const listRef = ref(storage, '');

        // Find all the prefixes and items.
        listAll(listRef)
            .then((res) => {
                return res.items;
            }).catch((error) => {
                // Uh-oh, an error occurred!
            });
    }

    useEffect(() => {
        console.log(itemData());
    })

    return (
        <ImageList variant="masonry" cols={3} gap={8}>
            {Array.isArray(itemData) && itemData.map((item: any) => (
                <ImageListItem key={item.img}>
                    <img
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    )
}