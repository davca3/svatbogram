'use client';

import { Button } from '@/components/ui/button';
import { LinkIcon } from 'lucide-react';
import React from 'react';
import { toast } from 'sonner';

interface CopyButtonProps {
    url?: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ url }) => {
    return <Button onClick={() => {
        navigator.clipboard.writeText(url ?? window.location.href);
        toast.success("Odkaz byl zkopírován.", { duration: 3000 });
    }}>
        <LinkIcon size={24} />&nbsp;Zkopírovat odkaz
    </Button>;
};

export default CopyButton;