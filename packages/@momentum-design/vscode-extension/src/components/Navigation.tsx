import React, { Dispatch, SetStateAction, useState } from "react";
import { tabData, gitHubRepo } from "../constants";
import "./Navigation.css";

import NavigationTab from "./NavigationTab";
import Cloud from "@momentum-design/icons/dist/svg/cloud-regular.svg?react";
import HelpCircle from "@momentum-design/icons/dist/svg/help-circle-regular.svg?react";
import ArrowLeft from "@momentum-design/icons/dist/svg/arrow-left-bold.svg?react";
import ArrowRight from "@momentum-design/icons/dist/svg/arrow-right-bold.svg?react";
import { ButtonCircle } from "@momentum-ui/react-collaboration";

interface NavigationProps {
  activeTabId: string;
  setActiveTabId: Dispatch<SetStateAction<string>>;
}


export const Navigation = ({ activeTabId, setActiveTabId }: NavigationProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleExpand = () => { 
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);
   };

  return (
    <div className="navigationWrapper">
      <ul className="navigationList">
        {tabData.map((tab) => (
          <li className="navigationListItem">
            <NavigationTab
              key={tab.id}
              label={isExpanded ? tab.name : undefined}
              active={activeTabId === tab.id}
              onPress={() => setActiveTabId(tab.id)}
            >
              {/* @ts-ignore: next-line */}
              <tab.icon style={{ fill: 'var(--mds-color-theme-text-secondary-normal)', height: '1.5rem', width: '1.5rem' }} />
            </NavigationTab>
          </li>
        ))}

        <div className="navigationFooter">
          <FooterTabItem name="Github repo" IconComponent={Cloud} action={() => window.open(gitHubRepo, "_blank")} isExpanded={isExpanded} />
          <FooterTabItem name="Help" IconComponent={HelpCircle} action={() => alert("help is on the way!")} isExpanded={isExpanded} />
        </div>
      </ul>
      <div className="sidebarDivider" />
      <ButtonCircle onPress={handleExpand} className="expandButton" ghost outline size={20}>
        {isExpanded ? <ArrowLeft /> : <ArrowRight />}
      </ButtonCircle>
    </div>
  );
};

const FooterTabItem = ({ name, IconComponent, action, isExpanded }: { name: string; IconComponent: React.FunctionComponent; action: () => void, isExpanded: boolean }) => {
  return (
    <li className="navigationListItem" onClick={action}>
      <NavigationTab key={name} label={isExpanded ? name : undefined} active={false} onPress={action}>
        {/* @ts-ignore: next-line */}
        <IconComponent style={{ fill: 'var(--mds-color-theme-text-secondary-normal)', height: '1.5rem', width: '1.5rem' }} />
      </NavigationTab>
    </li>
  );
};
