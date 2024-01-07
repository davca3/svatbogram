import React from 'react';
import { ImageType } from '@/lib/types';
import { Dialog, DialogContent } from '@mui/material';
import { isVideo } from '@/lib/helpers';
import { IconButton, Button } from '@mui/material';
import { Close, Download } from '@mui/icons-material';

type ShowcaseDialogProps = {
    openedImage: ImageType | null,
    handleClose: () => void
}

export default function ShowcaseDialog({ openedImage, handleClose }: ShowcaseDialogProps) {

    return (
        <Dialog open={openedImage !== null} onClose={handleClose}>
            <Button
                aria-label="stáhnout"
                href={openedImage?.url + "?download"}
                size='large'
                color='primary'
                sx={{
                    position: 'absolute',
                    left: 10,
                    top: 12
                }}>
                    <Download />
                    Stáhnout
            </Button>
            <IconButton
                aria-label="zavřít"
                onClick={handleClose}
                size='large'
                color='primary'
                sx={{
                    position: 'absolute',
                    right: 10,
                    top: 8
                }}
            >
                <Close />
            </IconButton>
            <DialogContent style={{marginTop:'40px'}}>
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
                                maxHeight: '80vh',
                                maxWidth: '90vw',
                                objectFit: 'cover',
                            }}
                            controls
                        ></video>
                        : <img
                            src={openedImage.url}
                            alt="Selected Image"
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