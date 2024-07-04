import { RadioGroupNext, Text } from "@momentum-ui/react-collaboration";
import { useState, useCallback } from "react";

import './TokensList.css';
import SearchInput from "../SearchInput";
import { useFetch } from "../hooks/useCustomFetch";
import { TokenTable } from "./Table";

interface TokensListProps {
  packageName: string;
  packageVersion: string;
  placeholderText: string;
}

const TokensList = ({ placeholderText, packageName, packageVersion }: TokensListProps) => {
  const [query, setQuery] = useState('');
  const [theme, setTheme] = useState('dark-stable');
  const [displayNameType, setDisplayNameType] = useState('name');

  const { data, isPending } = useFetch(`https://unpkg.com/${packageName}/dist/json/theme/webex/${theme}.json`, 'json');

  const onQueryChange = useCallback(
    (value: string) => {
      setQuery(value);
    },
    [setQuery],
  );

  return (<div className="tokensListWrapper">
    <div style={{ display: 'flex' }}>
      <RadioGroupNext
        label="Theme"
        className="themeRadioGroup"
        value={theme}
        options={[
          {
            label: 'Dark',
            value: 'dark-stable'
          },
          {
            label: 'Light',
            value: 'light-stable'
          },
          {
            label: 'High Contrast Dark',
            value: 'hc-dark-stable'
          },
          {
            label: 'High Contrast Light',
            value: 'hc-light-stable'
          }
        ]}
        onChange={setTheme}
      />
      <RadioGroupNext
        label="Display Name Type"
        className="themeRadioGroup displayNameRadioGroup"
        value={displayNameType}
        options={[
          {
            label: 'Name',
            value: 'name'
          },
          {
            label: 'CSS Variable',
            value: 'css-variable'
          },
        ]}
        onChange={setDisplayNameType}
      />
    </div>
    <SearchInput placeholder={placeholderText} className="searchInput" onChange={onQueryChange}></SearchInput>
    <div className="numberOfIconsVersionWrapper">
      <Text type="body-secondary">Showing theme tokens of version {packageVersion}</Text>
    </div>
    {!isPending && data ? <TokenTable tokens={data} displayNameType={displayNameType} query={query} /> : <p>loading...</p>}
  </div>);
};

export default TokensList;