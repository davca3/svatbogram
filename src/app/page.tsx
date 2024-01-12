"use client";

import { useReducer } from "react";

import ImageGrid from "@/components/imageGrid";
import ShowcaseDialog from "@/components/showcaseDialog";

import { addImage, toggleShowcase } from "@/lib/actions";
import { initialState, reducer } from "@/lib/reducer";
import { ImageType } from "@/lib/types";

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <main>
      <ShowcaseDialog
        openedImage={state.showcaseOpen}
        handleClose={() => dispatch(toggleShowcase(null))}
      />

      <ImageGrid
        images={state.images}
        addImage={(image: ImageType) => dispatch(addImage(image))}
        showcaseOpen={(image: ImageType | null) =>
          dispatch(toggleShowcase(image))
        }
      />
    </main>
  );
}
