import { Sizes } from "./Sizes";
import { Colors } from "./Colors";
import { Icons } from "./Icons";
import { IconButton } from "./IconButton";
import { Link } from "./Link";
import { Submit } from "./Submit";
import { ComponentApi } from "../../components/Api";

const ColorsSource = require("!!raw-loader!./Colors");
const SizesSource = require("!!raw-loader!./Sizes");
const IconsSource = require("!!raw-loader!./Icons");
const IconButtonSource = require("!!raw-loader!./IconButton");
const LinkSource = require("!!raw-loader!./Link");
const SubmitSource = require("!!raw-loader!./Submit");

const api: ComponentApi[] = [
  {
    name: "VuiButtonPrimary",
    props: [
      {
        name: "color",
        type: '"accent" | "primary" | "success" | "danger" | "warning" | "neutral" | "subdued"',
        required: true,
        description: "The color scheme of the button"
      },
      {
        name: "size",
        type: '"xs" | "s" | "m" | "l"',
        default: '"m"',
        description: "The size of the button"
      },
      {
        name: "children",
        type: "ReactNode",
        description: "The content to display inside the button"
      },
      {
        name: "icon",
        type: "ReactElement",
        description: "An optional icon to display alongside the button text"
      },
      {
        name: "iconSide",
        type: '"left" | "right"',
        default: '"left"',
        description: "Which side of the button text to display the icon"
      },
      {
        name: "fullWidth",
        type: "boolean",
        description: "Whether the button should take up the full width of its container"
      },
      {
        name: "isSelected",
        type: "boolean",
        description: "Whether the button is in a selected state"
      },
      {
        name: "isDisabled",
        type: "boolean",
        description: "Whether the button is disabled"
      },
      {
        name: "isLoading",
        type: "boolean",
        description: "Whether to show a loading spinner"
      },
      {
        name: "href",
        type: "string",
        description: "If provided, renders the button as a link"
      },
      {
        name: "target",
        type: "string",
        description: "The target attribute for the link (when href is provided)"
      },
      {
        name: "onClick",
        type: "(event: MouseEvent) => void",
        description: "Click handler for the button"
      },
      {
        name: "isSubmit",
        type: "boolean",
        description: 'Whether the button should submit a form (type="submit")'
      }
    ]
  },
  {
    name: "VuiButtonSecondary",
    props: [
      {
        name: "color",
        type: '"accent" | "primary" | "success" | "danger" | "warning" | "neutral" | "subdued"',
        required: true,
        description: "The color scheme of the button"
      },
      {
        name: "size",
        type: '"xs" | "s" | "m" | "l"',
        default: '"m"',
        description: "The size of the button"
      },
      {
        name: "children",
        type: "ReactNode",
        description: "The content to display inside the button"
      },
      {
        name: "icon",
        type: "ReactElement",
        description: "An optional icon to display alongside the button text"
      },
      {
        name: "isDisabled",
        type: "boolean",
        description: "Whether the button is disabled"
      },
      {
        name: "onClick",
        type: "(event: MouseEvent) => void",
        description: "Click handler for the button"
      }
    ]
  },
  {
    name: "VuiIconButton",
    props: [
      {
        name: "icon",
        type: "ReactElement",
        required: true,
        description: "The icon to display"
      },
      {
        name: "color",
        type: '"accent" | "primary" | "success" | "danger" | "warning" | "neutral" | "subdued"',
        required: true,
        description: "The color scheme of the button"
      },
      {
        name: "size",
        type: '"xs" | "s" | "m" | "l"',
        default: '"m"',
        description: "The size of the button"
      },
      {
        name: "isDisabled",
        type: "boolean",
        description: "Whether the button is disabled"
      },
      {
        name: "onClick",
        type: "(event: MouseEvent) => void",
        description: "Click handler for the button"
      }
    ]
  }
];

export const button = {
  name: "Button",
  path: "/button",
  api,
  examples: [
    {
      name: "Colors",
      component: <Colors />,
      source: ColorsSource.default.toString()
    },
    {
      name: "Sizes",
      component: <Sizes />,
      source: SizesSource.default.toString()
    },
    {
      name: "Icons",
      component: <Icons />,
      source: IconsSource.default.toString()
    },
    {
      name: "IconButton",
      component: <IconButton />,
      source: IconButtonSource.default.toString()
    },
    {
      name: "Link",
      component: <Link />,
      source: LinkSource.default.toString()
    },
    {
      name: "Submit form",
      component: <Submit />,
      source: SubmitSource.default.toString()
    }
  ]
};
