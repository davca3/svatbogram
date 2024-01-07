import React from 'react';
import { ImageType } from '@/lib/types';
import { Dialog, DialogContent } from '@mui/material';
import { isVideo } from '@/lib/helpers';

type ShowcaseDialogProps = {
    openedImage: ImageType | null,
    handleClose: () => void
}

export default function ShowcaseDialog({ openedImage, handleClose }: ShowcaseDialogProps) {

    return (
        <Dialog open={openedImage !== null} onClose={handleClose}>
            <DialogContent>
                {
                    openedImage && (
                    isVideo(openedImage) ?
                        <video
                            src={openedImage.url + "#t=0.1"}
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
                            src={openedImage.url}
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
    )
}