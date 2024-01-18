"use client";

import { uploadFile } from "@/lib/helpers";
import { Button, CircularProgress, styled } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import AddIcon from "@mui/icons-material/Add";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const UploadButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    if (!event.target.files?.length) throw new Error("No Image provided");

    uploadFile(event.target.files[0])
      .then((res) => {
        if (res) {
          //   addImage(res); ---> TODO: server action to upload image
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  };

  return (
    <Button
      component="label"
      variant="contained"
      disabled={isLoading}
      className="bg-neutral text-white py-2 px-4 min-w-0" // TODO: focus/hove state
    >
      <div className="flex gap-2 items-center">
        {isLoading ? <CircularProgress color="primary" /> : <AddIcon />}

        <span className="hidden md:block">
          {isLoading ? "Přidávám..." : "Přidat"}
        </span>
      </div>

      <VisuallyHiddenInput type="file" onChange={handleUpload} />
    </Button>
  );
};

export default UploadButton;
