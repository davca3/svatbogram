import React, { ReactPropTypes, useEffect, useState } from "react"
import { ImageList, ImageListItem, Dialog, DialogContent } from "@mui/material"
import { supabase } from "@/lib/api";
import Image from "next/image";

import { ImageType } from "@/lib/types";

type ImageGridProps = {
    images: ImageType[],
    addImage: (image: ImageType) => void
}

const isVideo = (file: ImageType | null): boolean => (file && file?.mimetype?.includes('video')) || false;

export default function ImageGrid({images, addImage}: ImageGridProps) {
    const [error, setError] = useState<string | null>(null);
    const [open, setOpen] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

    useEffect(() => {
        (async () => {
            const { data, error }: any = await supabase.storage.from('images').list('', {
                limit: 20
            });
            if (error) {
                setError(error);
                console.error(error);
            } else {
                data.map((image: any) => {
                    const imageObject: ImageType = { 
                        url: supabase.storage.from('images').getPublicUrl(image.name).data.publicUrl, 
                        mimetype: image.metadata.mimetype 
                    };
                    addImage(imageObject);
                });
            }
        })();
    }, []);

    const handleClickOpen = (image: ImageType) => {
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
                {Array.isArray(images) && images.map((image: ImageType, index: number) => (
                    <ImageListItem
                        key={index}
                        onClick={() => handleClickOpen(image)}>
                        {
                            isVideo(image) ?
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
                        selectedImage && (
                        isVideo(selectedImage) ? 
                            <video
                                src={selectedImage.url + "#t=0.1"}
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
                                src={selectedImage.url}
                                alt="Selected"
                                style={{
                                    objectFit: 'contain', // cover, contain, none
                                    maxHeight: '90vh',
                                    maxWidth: '90vw',
                                    width: '100%',
                                    height: '100%',
                                }}
                            />
                        )
                    }
                </DialogContent>
            </Dialog>
        </div>
    )
}