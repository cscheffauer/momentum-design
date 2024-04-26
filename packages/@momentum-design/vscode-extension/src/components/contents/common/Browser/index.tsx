import { ButtonPill, Text } from "@momentum-ui/react-collaboration";
import './Browser.css';
import { AssetCard } from "./AssetCard";
import { useState, useCallback, useMemo } from "react";
import _ from 'lodash';
import SearchInput from "../SearchInput";

interface BrowserProps {
  manifestContent: Record<string, string>;
  placeholderText: string;
  typeofAsset: string;
  cardSize?: 3.25 | 6.5;
  pageSize?: number;
}


const Browser = ({ manifestContent, placeholderText, typeofAsset, pageSize = 50, cardSize = 3.25 }: BrowserProps) => {
  var filteredManifestContent = _.pickBy(manifestContent, function (_1, key) {
    return !_.includes(key, "manifest");
  });

  const totalSize = Object.values(filteredManifestContent).length;

  const PAGE_SIZE = pageSize;
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState('');

  const onQueryChange = useCallback(
    (value: string) => {
      setQuery(value);
    },
    [setQuery],
  );

  const onClickNext = useCallback(() => {
    setCurrentPage((page) => page + 1);
  }, [setCurrentPage]);

  const onClickPrev = useCallback(() => {
    setCurrentPage((page) => (page === 1 ? 1 : page - 1));
  }, [setCurrentPage]);


  const paginatedItems: Record<string, string> = useMemo(
    () => Object.entries(filteredManifestContent)
      .filter(([key]) => (key.includes(query)))
      .slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)
      .reduce(
        (output, [key, value]) => ({
          ...output,
          [key]: value,
        }),
        {},
      ),
    [currentPage, filteredManifestContent, query],
  );

  return (
    // @ts-ignore: next-line
    <div className="browserWrapper" style={{ ["--local-button-size"]: `${cardSize}rem` }}>
      <SearchInput placeholder={placeholderText} className="searchInput" onChange={onQueryChange}></SearchInput>
      <Text type="body-secondary" className="numberOfIconsText">Total {typeofAsset} in the library - {totalSize}</Text>
      <Text type="body-secondary" className="currentPageText">Current page: {currentPage}</Text>
      <div className="browserGrid">
        {Object.entries(paginatedItems).map(([key, value]) => {
          const finalPath = `${value.replace('./svg', `/${typeofAsset}`)}`;
          return (<AssetCard text={key} path={finalPath} cardSize={cardSize} resizeImg={typeofAsset === 'illustrations'}/>);
        })}
      </div>
      <div className="browserFooter">
        <div className="browserFooterButtons">
          <ButtonPill onPress={onClickPrev} disabled={currentPage === 1}>Previous</ButtonPill>
          <ButtonPill onPress={onClickNext}>Next</ButtonPill>
        </div>
      </div>
    </div>
  );
};

export default Browser;