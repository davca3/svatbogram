// DownloadButton.tsx
'use client';

import { Button } from '@/components/ui/button';
import { isVideo } from '@/lib/helpers';
import { DownloadIcon } from 'lucide-react';
import React from 'react';
import { toast } from 'sonner';

interface DownloadButtonProps {
    photoId: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ photoId }) => {
    const type = isVideo(photoId) ? "video" : "fotku";

    const handleClick = async () => {
        try {            
            toast.loading(`Stahuji ${type}...`, { id: "download" });
            const response = await fetch("https://utfs.io/f/" + photoId);
            const blob = await response.blob();

            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.style.display = "none";
            a.href = url;
            a.download = photoId;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
            toast.success("Stahování bylo úspěšné.", { id: "download" });
        } catch (error) {
            console.error("Download failed:", error);
            toast.error("Při stahování došlo k chybě: " + error);
        }
    };

    return <Button onClick={handleClick}>
        <DownloadIcon size={24} />&nbsp;
        Stáhnout {type}
    </Button>;
};

export default DownloadButton;