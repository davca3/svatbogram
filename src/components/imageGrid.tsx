import React, { useEffect, useState } from "react"
import { ImageList, ImageListItem } from "@mui/material"
import { supabase } from "@/lib/api";
import Image from "next/image";

export default function ImageGrid() {
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            const { data, error }: any = await supabase.storage.from('images').list('', {
                limit: 20
            });
            if (error) {
                setError(error);
                console.error(error);
            } else {
                const urls: any = data.map((image: any) => supabase.storage.from('images').getPublicUrl(image.name).data.publicUrl);
                setImages(urls);
            }
        })();
    }, []);

    if (error) {
        return <div>Error: {(error as any).message}</div>;
    }

    return (
        <ImageList cols={3} gap={8} rowHeight={200}>
            {Array.isArray(images) && images.map((url, index) => (
                <ImageListItem key={index}>
                    <Image
                        src={url}
                        quality={50}
                        alt={`photo ${index}`}
                        priority
                        fill
                        style={{
                            objectFit: 'cover', // cover, contain, none
                        }}
                    />
                </ImageListItem>
            ))}
        </ImageList>
    )
}