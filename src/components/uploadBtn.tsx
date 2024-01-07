'use client'

import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import { uploadFile } from "@/lib/helpers";
import { ImageType } from "@/lib/types";
import { CircularProgress } from "@mui/material";

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

type UploadBtnProps = {
    addImage: (image: ImageType) => void;
}

export default function UploadBtn({addImage}: UploadBtnProps) {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleUpload = (event: any) => {
        setIsLoading(true);
        uploadFile(event.target.files[0])
            .then((res) => {
                if (res) {
                    addImage(res);
                    setIsLoading(false);
                }
            }).catch((err) => {
                console.error(err);
                setIsLoading(false);
            });
    }

    return (
        <Button
            component="label" 
            variant="contained" 
            startIcon={isLoading ? <CircularProgress color="primary" /> : <AddIcon />}
            disabled={isLoading}
            className='add-button'>
            { isLoading ? 'Přidávám...' : 'Přidat' }
            <VisuallyHiddenInput 
                type="file" 
                onChange={handleUpload} />
        </Button>
    )
}