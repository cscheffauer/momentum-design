import { Dispatch, SetStateAction } from "react";
import { tabData, gitHubRepo } from "../constants";
import "./Navigation.css";

import { NavigationTab } from "@momentum-ui/react-collaboration";

interface NavigationProps {
  activeTabId: string;
  setActiveTabId: Dispatch<SetStateAction<string>>;
}

export const Navigation = ({ activeTabId, setActiveTabId }: NavigationProps) => {
  return (
    <div className="navigationWrapper">
      <ul className="navigationList">
        {tabData.map((tab) => (
          <li className="navigationListItem">
            <NavigationTab
              key={tab.id}
              label={tab.name}
              size={200}
              icon={tab.icon}
              active={activeTabId === tab.id}
              onPress={() => setActiveTabId(tab.id)}
            />
          </li>
        ))}

        <div className="navigationFooter">
          <FooterTabItem name="Github repo" icon="cloud" action={() => window.open(gitHubRepo, "_blank")} />
          <FooterTabItem name="Help" icon="help-circle" action={() => alert("help is on the way!")} />
        </div>
      </ul>
    </div>
  );
};

const FooterTabItem = ({ name, icon, action }: { name: string; icon: string; action: () => void }) => {
  return (
    <li className="navigationListItem" onClick={action}>
      <NavigationTab key={name} label={name} size={200} icon={icon} active={false} onPress={action} />
    </li>
  );
};
