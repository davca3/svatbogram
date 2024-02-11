'use client';

import { Button } from '@/components/ui/button';
import { resumableUploadFile, uploadFile } from '@/lib/helpers';
import { Loader2Icon, PlusIcon } from 'lucide-react';

import { ChangeEvent, useState } from 'react';
import { toast, ToastT } from 'sonner';

const UploadButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    const toastId = toast.loading('Nahrávám...');

    const uploadFiles = async (files: File[], toastId: ToastT["id"]) => {
      try {
        let uploadedFiles = 0;
        let uploadProgress = 0;
        let progressArray = new Array(files.length).fill(0);

        await Promise.all(files.map(async (file, index) => {
          await resumableUploadFile(file, (progress) => {
            progressArray[index] = progress;
            uploadProgress = progressArray.reduce((a, b) => a + b, 0) / files.length;
            toast.loading(`Nahráno ${uploadedFiles} z ${files.length} souborů: ${uploadProgress.toFixed(0)}%`, { id: toastId });
          }).then(() => {
            uploadedFiles++;
            toast.loading(`Nahráno ${uploadedFiles} z ${files.length} souborů: ${uploadProgress.toFixed(0)}%`, { id: toastId });
          });
        }));
      } catch (error) {
        throw error;
      }
    }

    try {
      if (!event.target.files?.length) throw new Error('Nebyly vybrány žádné soubory k nahrání.');
      const files = Array.from(event.target.files);
      await uploadFiles(files, toastId);
      toast.success(`Soubory byly úspěšně nahrány`, { id: toastId, duration: 3000 });
    } catch (error) {
      console.error(error);
      toast.error(`Během nahrávání souboru došlo k chybě: ${(error as any).message}`, { id: toastId, duration: 20000 });
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
