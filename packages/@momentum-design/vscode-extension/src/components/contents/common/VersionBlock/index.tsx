import { Text, ButtonHyperlink } from '@momentum-ui/react-collaboration';
import './VersionBlock.css';

interface VersionBlockProps {
  packageName: string;
  latestVersion: string;
  detectedVersion?: string;
}

export const VersionBlock = ({ detectedVersion, packageName, latestVersion }: VersionBlockProps) => {
  return (
    <div className="versionBlock">
      <Text type="body-primary" className="packageName">{packageName}</Text>
      <div className="latestVersionWrapper">
        <Text type="body-primary" className="latestVersionText">Latest version: {latestVersion}</Text>
        <ButtonHyperlink className="buttonHyperlink">Version info</ButtonHyperlink>
      </div>
      <Text type="body-compact" className="detectedVersionText">Version {detectedVersion} was detected in your current workspace</Text>
    </div>
  );
};