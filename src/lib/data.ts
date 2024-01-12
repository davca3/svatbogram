import { supabase } from "./api";
import { getFileUrl } from "./helpers";
import { ImageType } from "./types";

export async function fetchImageList() {
  try {
    const { data, error } = await supabase.storage.from("images").list("", {
      limit: 100,
      offset: 0,
      sortBy: { column: "created_at", order: "asc" },
    });

    if (error) {
      throw new Error();
    }

    //TODO: add zod parser

    const res = data.map(
      (image: any): ImageType => ({
        url: getFileUrl(image.name),
        mimetype: image.metadata.mimetype,
        name: image.name,
      })
    );

    return res;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch Images");
  }
}
