'use client'

import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../../config";

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

export default function UploadBtn() {

    // <Fab color="primary" aria-label="add" className='add-button'>
    //     <AddIcon />
    //     <VisuallyHiddenInput type="file" />
    // </Fab>
    const handleUpload = (event: any) => {
        const storageRef = ref(storage, self.crypto.randomUUID());
        const files = event.target.files;
        console.log(files);
        if (files.length > 0) {
            uploadBytes(storageRef, files[0])
                .then((snapshot) => {
                    // console.log(snapshot);
                }).catch((err) => {
                    console.error(err);
                });
        }
    }

    return (
        <Button 
            component="label" 
            variant="contained" 
            startIcon={<AddIcon />}
            className='add-button'>
            Upload file
            <VisuallyHiddenInput 
                type="file" 
                onChange={handleUpload} />
        </Button>
    )
}