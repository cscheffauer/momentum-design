import { AnnimationsContent } from "./components/contents/Annimations";
import { IconsContent } from "./components/contents/Icons";

export const tabData: { id: string; name: string; icon: string; content: React.ReactNode }[] = [
  {
    id: "icons",
    name: "Icons",
    icon: "widget",
    content: <IconsContent />,
  },
  {
    id: "illustrations",
    name: "Illustrations",
    icon: "colour-palette",
    content: <p style={{ marginLeft: "24px" }}>Coming soon...</p>,
  },
  {
    id: "tokens",
    name: "Tokens",
    icon: "fill-colour",
    content: <p style={{ marginLeft: "24px" }}>Coming soon...</p>,
  },
  {
    id: "brand-visuals",
    name: "Brand visuals",
    icon: "webex-helix",
    content: <p style={{ marginLeft: "24px" }}>Coming soon...</p>,
  },
  {
    id: "animations",
    name: "Animations",
    icon: "video-effect",
    content: <AnnimationsContent />,
  },
];

export const gitHubRepo = "https://github.com/momentum-design/momentum-design";
