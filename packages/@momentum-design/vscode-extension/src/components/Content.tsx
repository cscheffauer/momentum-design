import { tabData } from '../constants.tsx';
import './Content.css';

interface ContentProps {
  activeTabId: string
}

export const Content = ({ activeTabId }: ContentProps) => {
  return (
    <div className="contentWrapper">
      {tabData.map((tabDataEntry) => activeTabId === tabDataEntry.id && tabDataEntry.content)}
    </div>
  );
};

export const IconsTab = () => {
  return <div>Icons Tab</div>;
};

export const IllustrationsTab = () => {
  return <div>Illustrations Tab</div>;
};

export const TokensTab = () => {
  return <div>Tokens Tab</div>;
};

export const BrandVisualsTab = () => {
  return <div>Brand Visuals Tab</div>;
};

export const AnnimationsTab = () => {
  return <div>Annimations Tab</div>;
};
