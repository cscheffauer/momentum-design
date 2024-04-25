import "./Content.css";

export const Content = ({ tabId }: { tabId: string }) => {
  return (
    <div className="contentWrapper">
      {tabId === "Icons" && <IconsTab />}
      {tabId === "Illustrations" && <IllustrationsTab />}
      {tabId === "Tokens" && <TokensTab />}
      {tabId === "Brand visuals" && <BrandVisualsTab />}
      {tabId === "Annimations" && <AnnimationsTab />}
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
  return <div>Icons Tab</div>;
};

export const BrandVisualsTab = () => {
  return <div>Brand Visuals Tab</div>;
};

export const AnnimationsTab = () => {
  return <div>Annimations Tab</div>;
};
