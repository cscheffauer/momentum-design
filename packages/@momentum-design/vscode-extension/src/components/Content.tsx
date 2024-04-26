import { tabData } from "../constants.tsx";
import "./Content.css";

interface ContentProps {
  activeTabId: string;
}

export const Content = ({ activeTabId }: ContentProps) => {
  return (
    <div className="contentWrapper">
      {tabData.map((tabDataEntry) => activeTabId === tabDataEntry.id && tabDataEntry.content)}
    </div>
  );
};