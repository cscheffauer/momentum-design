import { Dispatch, SetStateAction } from "react";
import "./Navigation.css";

import { NavigationTab } from "@momentum-ui/react-collaboration";

const tabData: { name: string; icon: string }[] = [
  {
    name: "Icons",
    icon: "widget",
  },
  {
    name: "Illustrations",
    icon: "colour-palette",
  },
  {
    name: "Tokens",
    icon: "fill-colour",
  },
  {
    name: "Brand visuals",
    icon: "webex-helix",
  },
  {
    name: "Annimations",
    icon: "video-effect",
  },
];

export const Navigation = ({
  activeTabId,
  setActiveTabId,
}: {
  activeTabId: String;
  setActiveTabId: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="navigationWrapper">
      <ul className="navigationList">
        {tabData.map((tab) => (
          <li className="navigationListItem">
            <NavigationTab
              key={tab.name}
              label={tab.name}
              size={200}
              icon={tab.icon}
              active={activeTabId === tab.name}
              onPress={() => setActiveTabId(tab.name)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
