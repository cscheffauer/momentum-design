import { Dispatch, SetStateAction } from "react";
import { tabData } from "../constants";
import "./Navigation.css";

import { NavigationTab } from "@momentum-ui/react-collaboration";

interface NavigationProps {
  activeTabId: string
  setActiveTabId: Dispatch<SetStateAction<string>>;
}

export const Navigation = ({ activeTabId, setActiveTabId }: NavigationProps) => {
  return (
    <div className="navigationWrapper">
      {tabData.map((tab) => (
        <NavigationTab key={tab.id} label={tab.name} size={200} icon={tab.icon} active={activeTabId === tab.id} onPress={() => setActiveTabId(tab.id)} />
      ))}
    </div>
  );
};
