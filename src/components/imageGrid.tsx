import React, { useEffect, useState } from "react"
import { ImageList, ImageListItem, Dialog, DialogContent } from "@mui/material"
import { supabase } from "@/lib/api";
import Image from "next/image";

type responseImage = {
    url: string;
    mimetype: string;
}

export default function ImageGrid() {
    const [images, setImages] = useState([]);
    const [error, setError] = useState<string | null>(null);
    const [open, setOpen] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<responseImage | null>(null);

    useEffect(() => {
        (async () => {
            const { data, error }: any = await supabase.storage.from('images').list('', {
                limit: 20
            });
            if (error) {
                setError(error);
                console.error(error);
            } else {
                const images = data.map((image: any) => {
                    return {
                        url: supabase.storage.from('images').getPublicUrl(image.name).data.publicUrl,
                        mimetype: image.metadata.mimetype
                    }
                });
                setImages(images);
            }
        })();
    }, []);

    const handleClickOpen = (image: responseImage) => {
        setSelectedImage(image);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    if (error) {
        return <div>Error: {(error as any).message}</div>;
    }

    return (
        <div>
            <ImageList cols={3} gap={8} rowHeight={200}>
                {Array.isArray(images) && images.map((image: responseImage, index: number) => (
                    <ImageListItem
                        key={index}
                        onClick={() => handleClickOpen(image)}>
                        {
                            image.mimetype.includes('video') ?
                                <video
                                    src={image.url + "#t=0.1"}
                                    preload="metadata"
                                    muted
                                    playsInline
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                    }}
                                ></video>
                                : <Image
                                    src={image.url}
                                    quality={50}
                                    alt={`photo ${index}`}
                                    priority
                                    fill
                                    style={{
                                        objectFit: 'cover', // cover, contain, none
                                    }}
                                />
                        }
                    </ImageListItem>
                ))}
            </ImageList>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    {
                        selectedImage && selectedImage.mimetype.includes('video') ? 
                        <video
                            src={selectedImage.url}
                            autoPlay
                            muted
                            playsInline
                            style={{
                                width: '100%',
                                height: '100%',
                                maxHeight: '90vh',
                                maxWidth: '90vw',
                                objectFit: 'cover',
                            }}
                            controls
                        ></video>
                        : <img
                            src={selectedImage ? selectedImage.url : ''}
                            alt="Selected"
                            style={{
                                objectFit: 'contain', // cover, contain, none
                                maxHeight: '90vh',
                                maxWidth: '90vw',
                                width: '100%',
                                height: '100%',
                            }}
                        />
                    }
                </DialogContent>
            </Dialog>
        </div>
    )
}