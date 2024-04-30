import { ContentLayout } from "../common/ContentLayout";
import { Text, Toggle, ToggleSwitch } from "@momentum-ui/react-collaboration";
import { useFetch } from "../common/hooks/useCustomFetch";
import "./Tokens.css";
import { Dispatch, useEffect, useState } from "react";
import { TabBar } from "../common/TabBar";
import { VersionBlock } from "../common/VersionBlock";
import { parseData } from "./colorTokenJsonParser";
import { Dictionary, ColorTokenProps } from "../../../constants.tsx";

const contentTabs = [
  {
    id: "library",
    tabText: "Library",
  },
  {
    id: "release-history",
    tabText: "Release history",
  },
];

const ligthThemeName = "light-stable";
const darkThemeName = "dark-stable";

export const TokensContent = () => {
  const [activeContentTabId, setActiveContentTabId] = useState(contentTabs[0].id);
  const [currentTheme, setCurrentTheme] = useState<string>(darkThemeName);

  const packageName = "@momentum-design/tokens";
  const distName = "json-minimal";

  const { data, isPending } = useFetch(
    `https://unpkg.com/${packageName}/dist/${distName}/theme/webex/${currentTheme}.json`,
    "json"
  );

  const tokenData = parseData(data);

  return (
    <ContentLayout>
      <TabBar activeTabId={activeContentTabId} setActiveTabId={setActiveContentTabId} tabs={contentTabs} />
      {activeContentTabId === "library" && (
        <div className="tokensContentWrapper">
          <VersionBlock packageName={packageName} latestVersion="@0.0.52" detectedVersion="@0.0.52" />
          {!isPending ? (
            <ColorTokenTables tokenData={tokenData} currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
          ) : (
            <p>loading...</p>
          )}
        </div>
      )}
      {activeContentTabId === "release-history" && <p>Release History</p>}
    </ContentLayout>
  );
};

const ColorTokenTables = ({
  tokenData,
  currentTheme,
  setCurrentTheme,
}: {
  tokenData: Dictionary | null;
  currentTheme: string;
  setCurrentTheme: Dispatch<string>;
}) => {
  if (!tokenData) {
    return <div>No data</div>;
  }

  const themeLabel = currentTheme === darkThemeName ? "Dark" : "Light";

  return (
    <>
      <div>
        <label htmlFor={themeLabel}>
          <Toggle
            id={themeLabel}
            isSelected={currentTheme === darkThemeName}
            onChange={() => {
              console.log("currentTheme", currentTheme);
              setCurrentTheme(currentTheme === darkThemeName ? ligthThemeName : darkThemeName);
            }}
          />
          {themeLabel}
        </label>
      </div>
      <div className="colorTablesWrapper">
        {Object.keys(tokenData).map((groupName) => (
          <ColorTokenTable groupName={groupName} tokenRowProps={tokenData[groupName]} />
        ))}
      </div>
    </>
  );
};

const ColorTokenTable = ({ groupName, tokenRowProps }: { groupName: string; tokenRowProps: ColorTokenProps[] }) => {
  return (
    <p>
      <h2>{groupName}</h2>
      <table className="colorTable">
        <ColorTableHead />
        <ColorTableBody tokenData={tokenRowProps} />
      </table>
    </p>
  );
};

const ColorTableHead = () => {
  return (
    <thead>
      <tr>
        <th>Token</th>
        <th>Value</th>
        <th>Sample</th>
      </tr>
    </thead>
  );
};

const ColorTableBody = ({ tokenData }: { tokenData: ColorTokenProps[] }) => {
  return (
    <tbody>
      {tokenData.map(({ name, value }) => (
        <tr>
          <td>{name}</td>
          <td>{value}</td>
          <td>
            <ColorSample color={value} />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

const ColorSample = ({ color }: { color: string }) => {
  return <span className="colorSample" style={{ background: color }}></span>;
};
