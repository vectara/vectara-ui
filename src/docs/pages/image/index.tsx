import { Image } from "./Image";
import { Gallery } from "./Gallery";

const ImageSource = require("!!raw-loader!./Image");
const GallerySource = require("!!raw-loader!./Gallery");

export const image = {
  name: "Image",
  path: "/image",
  examples: [
    {
      name: "Image",
      component: <Image />,
      source: ImageSource.default.toString()
    },
    {
      name: "Gallery",
      component: <Gallery />,
      source: GallerySource.default.toString()
    }
  ]
};
