'use client'

import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import { createClient } from '@supabase/supabase-js'
import { supabase } from "@/lib/api";

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
    // Upload file using standard upload
    async function uploadFile(file: any) {
        const { data, error } = await supabase.storage.from('images').upload(self.crypto.randomUUID(), file)
        if (error) {
            console.log(error);
        } else {
            console.log('success');
        }
    }

    const handleUpload = (event: any) => {
        // Create a single supabase client for interacting with your database
        uploadFile(event.target.files[0]);
    }

    return (
        <Button
            component="label" 
            variant="contained" 
            startIcon={<AddIcon />}
            className='add-button'>
            Přidat
            <VisuallyHiddenInput 
                type="file" 
                onChange={handleUpload} />
        </Button>
    )
}