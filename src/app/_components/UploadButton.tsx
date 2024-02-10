'use client';

import { Button } from '@/components/ui/button';
import { resumableUploadFile, uploadFile } from '@/lib/helpers';
import { Loader2Icon, PlusIcon } from 'lucide-react';

import { ChangeEvent, useState } from 'react';
import { toast } from 'sonner';

const UploadButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    try {
      setIsLoading(true);
      if (!event.target.files?.length) throw new Error('No File provided');

      const files = Array.from(event.target.files);

      for (const file of files) {
        const res = await resumableUploadFile(file);
        // console.log(res);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative cursor-pointer">
      <Button variant="secondary" disabled={isLoading}>
        {isLoading ? (
          <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <PlusIcon className="mr-2 h-4 w-4" />
        )}

        <span className="block">{isLoading ? 'Přidávám...' : 'Přidat'}</span>
      </Button>
      <input
        type="file"
        className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
        onChange={handleUpload}
        accept='image/*, video/*'
        multiple
      />
    </div>
  );
};

export default UploadButton;
