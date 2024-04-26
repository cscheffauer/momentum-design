import React, { Dispatch, SetStateAction } from "react";
import { tabData, gitHubRepo } from "../constants";
import "./Navigation.css";

import NavigationTab from "./NavigationTab";
import Cloud from "@momentum-design/icons/dist/svg/cloud-regular.svg?react";
import HelpCircle from "@momentum-design/icons/dist/svg/help-circle-regular.svg?react";

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
              active={activeTabId === tab.id}
              onPress={() => setActiveTabId(tab.id)}
            >
              {/* @ts-ignore: next-line */}
              <tab.icon style={{ fill: 'var(--mds-color-theme-text-secondary-normal)', height: '1.5rem', width: '1.5rem' }} />
            </NavigationTab>
          </li>
        ))}

        <div className="navigationFooter">
          <FooterTabItem name="Github repo" IconComponent={Cloud} action={() => window.open(gitHubRepo, "_blank")} />
          <FooterTabItem name="Help" IconComponent={HelpCircle} action={() => alert("help is on the way!")} />
        </div>
      </ul>
    </div>
  );
};

const FooterTabItem = ({ name, IconComponent, action }: { name: string; IconComponent: React.FunctionComponent; action: () => void }) => {
  return (
    <li className="navigationListItem" onClick={action}>
      <NavigationTab key={name} label={name} size={200} active={false} onPress={action}>
        {/* @ts-ignore: next-line */}
        <IconComponent style={{ fill: 'var(--mds-color-theme-text-secondary-normal)', height: '1.5rem', width: '1.5rem' }} />
      </NavigationTab>
    </li>
  );
};
