import { Text, SelectNext, ButtonHyperlink } from '@momentum-ui/react-collaboration';
import { Item } from '@react-stately/collections';
import './VersionBlock.css';
import { Key } from 'react';

interface VersionBlockProps {
  packageName: string;
  availableVersions: Array<string>;
  detectedVersion?: string;
  selectedVersion: string;
  setSelectedVersion: (version: Key) => void;
}

export const VersionBlock = ({ detectedVersion, packageName, availableVersions, selectedVersion, setSelectedVersion }: VersionBlockProps) => {
  return (
    <div className="versionBlock">
      <Text type="body-primary" className="packageName">{packageName}</Text>
      <div className="selectWrapper">
        <SelectNext selectedKey={selectedVersion} onSelectionChange={setSelectedVersion}>
          {availableVersions.map((version) => <Item key={version}>{version}</Item>)}
        </SelectNext>
        <ButtonHyperlink className="buttonHyperlink">Version info</ButtonHyperlink>
      </div>
      <Text type="body-compact" className="detectedVersionText">Version {detectedVersion} was detected in your current workspace</Text>
    </div>
  );
};
