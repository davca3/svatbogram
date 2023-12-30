'use client'

import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

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
        const files = event.target.files;
        if (files.length > 0) {

        }
        console.log(files);
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