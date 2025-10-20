import { Image } from "./Image";

const ImageSource = require("!!raw-loader!./Image");

export const image = {
  name: "Image",
  path: "/image",
  examples: [
    {
      name: "Image",
      component: <Image />,
      source: ImageSource.default.toString()
    }
  ]
};
