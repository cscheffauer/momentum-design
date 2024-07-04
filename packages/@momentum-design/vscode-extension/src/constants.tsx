import React from "react";
import { AnimationsContent } from "./components/contents/Animations";
import { IconsContent } from "./components/contents/Icons";
import { IllustrationsContent } from "./components/contents/Illustrations";

import Widget from "@momentum-design/icons/dist/svg/widget-regular.svg?react";
import ColourPalette from "@momentum-design/icons/dist/svg/colour-palette-regular.svg?react";
import FillColour from "@momentum-design/icons/dist/svg/fill-colour-regular.svg?react";
import WebexHelix from "@momentum-design/icons/dist/svg/webex-helix.svg?react";
import VideoEffect from "@momentum-design/icons/dist/svg/video-effect-regular.svg?react";
import { BrandVisualsContent } from "./components/contents/BrandVisuals";
import { TokensContent } from "./components/contents/Tokens";

export const tabData: { id: string; name: string; icon: React.FunctionComponent; content: React.ReactNode }[] = [
  {
    id: "icons",
    name: "Icons",
    icon: Widget,
    content: <IconsContent />,
  },
  {
    id: "illustrations",
    name: "Illustrations",
    icon: ColourPalette,
    content: <IllustrationsContent />,
  },
  {
    id: "tokens",
    name: "Tokens",
    icon: FillColour,
    content: <TokensContent/>,
  },
  {
    id: "brand-visuals",
    name: "Brand visuals",
    icon: WebexHelix,
    content: <BrandVisualsContent />,
  },
  {
    id: "animations",
    name: "Animations",
    icon: VideoEffect,
    content: <AnimationsContent />,
  },
];

export interface ColorTokenProps {
  token: { name: string; value: string };
}

export interface Dictionary {
  [key: string]: [ColorTokenProps];
}

export const gitHubRepo = "https://github.com/momentum-design/momentum-design";
