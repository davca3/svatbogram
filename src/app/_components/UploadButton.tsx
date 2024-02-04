'use client';

import { Button } from '@/components/ui/button';
import { uploadFile } from '@/lib/helpers';
import { Loader2Icon, PlusIcon } from 'lucide-react';
// import { Button, CircularProgress, styled } from "@mui/material";
import React, { ChangeEvent, useState, useContext } from 'react';
// import { SnackbarContext } from "@/app/_components/SnackbarProvider";

// const VisuallyHiddenInput = styled("input")({
//   clip: "rect(0 0 0 0)",
//   clipPath: "inset(50%)",
//   height: 1,
//   overflow: "hidden",
//   position: "absolute",
//   bottom: 0,
//   left: 0,
//   whiteSpace: "nowrap",
//   width: 1,
// });

const UploadButton = () => {
  // const { showMessage } = useContext(SnackbarContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    if (!event.target.files?.length) throw new Error('No Image provided');

    uploadFile(event.target.files[0])
      .then((res) => {
        if (res) {
          //   addImage(res); ---> TODO: server action to upload image
          // showMessage("Obrázek byl úspěšně nahrán", "success");
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.error(err);
        // showMessage("Něco se pokazilo, zkuste to prosím znovu", "error");
        setIsLoading(false);
      });
  };

  return (
    <Button disabled={isLoading} variant="secondary">
      <div className="flex items-center gap-2">
        {isLoading ? (
          <Loader2Icon className="h-4 w-4 animate-spin" />
        ) : (
          <PlusIcon className="h-4 w-4" />
        )}

        <span className="block">{isLoading ? 'Přidávám...' : 'Přidat'}</span>
      </div>

      {/* <VisuallyHiddenInput 
        type="file" 
        onChange={handleUpload}
        accept="image/*"
      /> */}
    </Button>
  );
};

export default UploadButton;
