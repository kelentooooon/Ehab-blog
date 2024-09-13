import ImageUrlBuilder from "@sanity/image-url";
import { client } from "./sanity";

const builder = ImageUrlBuilder(client);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source);
}
