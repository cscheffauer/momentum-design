import { SearchInput, Text } from "@momentum-ui/react-collaboration";
import './Browser.css';
import { AssetCard } from "./AssetCard";
import { useCallback, useEffect } from "react";
interface BrowserProps {
  pathToLocalManifestJSON: string;
  placeholderText: string;
  typeofAssetText: string;
}

const Browser = ({ pathToLocalManifestJSON, placeholderText, typeofAssetText }: BrowserProps) => {
  const assets = [{}, {}, {}];
  const totalSize = assets.length;

  // const fetchData = useCallback(async () => {
  //   const data = await fetch('/icons/manifest.json').then((response) => { 
  //     return response.body.json();
  // });

  //   console.log(data);
  // }, []);

  // // the useEffect is only there to call `fetchData` at the right time
  // useEffect(() => {
  //   fetchData()
  //     .catch(console.error);
  // }, [fetchData]);

  return (
    <div className="browserWrapper">
      <SearchInput placeholder={placeholderText} className="searchInput"></SearchInput>
      <Text type="body-secondary" className="numberOfIconsText">Showing {totalSize} {typeofAssetText}</Text>
      <div className="scrollingWrapper">
        <div className="browserGrid">
          {assets.map(() => <AssetCard>A</AssetCard>)}
        </div>
      </div>
      <div className="browserFooter"></div>
    </div>
  );
};

export default Browser;