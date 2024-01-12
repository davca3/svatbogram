import { Suspense } from "react";
import ImageGrid from "./_components/ImageGrid";

export default async function Home() {
  //   const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <main>
      {/* <ShowcaseDialog
        openedImage={state.showcaseOpen}
        handleClose={() => dispatch(toggleShowcase(null))}
      /> */}

      {/* <ImageGrid
        images={state.images}
        addImage={(image: ImageType) => dispatch(addImage(image))}
        showcaseOpen={(image: ImageType | null) =>
          dispatch(toggleShowcase(image))
        }
      /> */}

      {/* TODO: Add loading skeleton */}
      <Suspense fallback={null}>
        <ImageGrid />
      </Suspense>
    </main>
  );
}
