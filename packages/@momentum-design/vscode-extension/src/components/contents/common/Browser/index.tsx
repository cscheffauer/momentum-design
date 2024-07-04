import { Text } from "@momentum-ui/react-collaboration";
import './Browser.css';
import { AssetCard } from "./AssetCard";
import { useState, useCallback, useMemo, useRef } from "react";
import _ from 'lodash';
import SearchInput from "../SearchInput";
import { useIntersectionObserver } from "./useInfiniteScroll";

interface BrowserProps {
  packageName: string;
  packageVersion: string;
  manifestContent: Record<string, string>;
  placeholderText: string;
  typeofAsset: string;
  cardSize?: 3.25 | 6.5;
  pageSize?: number;
}


const Browser = ({ packageName, manifestContent, placeholderText, typeofAsset, pageSize = 100, cardSize = 3.25, packageVersion }: BrowserProps) => {
  const loadMoreProductsRef = useRef<HTMLDivElement | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState('');
  const PAGE_SIZE = pageSize;

  const filteredManifestContent = _.pickBy(manifestContent, function (value) {
    // filter out manifest, in case its included
    return !_.includes(value, "manifest.json");
  });

  const totalSize = Object.values(filteredManifestContent).length;

  const fetchNextPage = useCallback(() => {
    console.log('intersect');
    setCurrentPage((prev) => prev + 1);
  }, [setCurrentPage]);

  useIntersectionObserver({
    target: loadMoreProductsRef,
    onIntersect: fetchNextPage,
    enabled: query === '' && currentPage * PAGE_SIZE < totalSize,
    // add currentPage as a dependency to use effect to fill up page with items
    dependencyArray: [currentPage]
  });

  const onQueryChange = useCallback(
    (value: string) => {
      setQuery(value);
      setCurrentPage(1);
    },
    [setQuery],
  );

  const items: Record<string, string> = useMemo(
    () => Object.entries(filteredManifestContent)
      .filter(([key]) => (key.includes(query)))
      .slice(0, currentPage * PAGE_SIZE)
      .reduce(
        (output, [key, value]) => ({
          ...output,
          [key]: value,
        }),
        {},
      ),
    [filteredManifestContent, query],
  );

  return (
    // @ts-ignore: next-line
    <div className="browserWrapper" style={{ ["--local-button-size"]: `${cardSize}rem` }}>
      <SearchInput placeholder={placeholderText} className="searchInput" onChange={onQueryChange}></SearchInput>
      <div className="numberOfIconsVersionWrapper">
        <Text type="body-secondary">Total {typeofAsset} in the library - {totalSize}</Text>
        <Text type="body-secondary">Showing {typeofAsset} of version {packageVersion}</Text>
      </div>
      <div className="browserGrid">
        {Object.entries(items).map(([key, value]) => (<AssetCard
          key={key}
          text={key}
          cardSize={cardSize}
          typeofAsset={typeofAsset}
          repoPath={value}
          packageName={packageName}
        />)
        )}
        <div ref={loadMoreProductsRef}>
        </div>
      </div>
    </div>
  );
};

export default Browser;