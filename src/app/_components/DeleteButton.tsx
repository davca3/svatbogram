'use client';

import { Button } from '@/components/ui/button';
import { isVideo } from '@/lib/helpers';
import { DeleteIcon, DownloadIcon, Trash2Icon } from 'lucide-react';
import React from 'react';
import { toast } from 'sonner';
import ConfirmDialog from './ConfirmDialog';

interface DownloadButtonProps {
    photoId: string;
}

const DeleteButton: React.FC<DownloadButtonProps> = ({ photoId }) => {
    const handleClick = async () => {

        const response = await fetch("https://api.uploadthing.com/v6/deleteFiles", { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-uploadthing-api-key': String(process.env.NEXT_PUBLIC_UPLOADTHING_SECRET)
            },
            body: JSON.stringify({
                fileKeys: [photoId]
            })
        }).then(res => res.json());

        if (response?.success) {
            toast.success("Smazání bylo úspěšné.");
        } else {
            console.error("Delete failed:", response);
            toast.error("Při mazání došlo k chybě.");
        }
    };

    return <ConfirmDialog 
        title={{
            text: "Smazat",
            icon: <Trash2Icon />,
            description: "Tuto akci nelze vrátit zpět."
        }} 
        cancel="Zrušit"
        action={{
            title: "Smazat",
            onClick: handleClick
        }}
    />
};

export default DeleteButton;