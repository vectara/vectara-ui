import { ImagePreview } from "./ImagePreview";

const ImagePreviewSource = require("!!raw-loader!./ImagePreview");

export const image = {
  name: "Image",
  path: "/image",
  examples: [
    {
      name: "Image Preview",
      component: <ImagePreview />,
      source: ImagePreviewSource.default.toString()
    }
  ]
};
