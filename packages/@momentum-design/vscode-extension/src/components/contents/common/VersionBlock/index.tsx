import { Text, ButtonHyperlink } from '@momentum-ui/react-collaboration';
import './VersionBlock.css';
import { useEffect } from 'react';
import { useReleases } from './useReleases';

interface VersionBlockProps {
  packageName: string;
  latestVersion: string;
  detectedVersion?: string;
}

// for fetching version info from github, check this: https://github.com/microsoft/vscode-extension-samples/blob/main/github-authentication-sample/src/credentials.ts

export const VersionBlock = ({ detectedVersion, packageName }: VersionBlockProps) => {

  //@ts-ignore
  const {getLatestReleaseVersionPerPackage} = useReleases();

  return (
    <div className="versionBlock">
      <Text type="body-primary" className="packageName">{packageName}</Text>
      <div className="latestVersionWrapper">
        <Text type="body-primary" className="latestVersionText">Latest version: {getLatestReleaseVersionPerPackage(packageName)}</Text>
        <ButtonHyperlink className="buttonHyperlink">Version info</ButtonHyperlink>
      </div>
      <Text type="body-compact" className="detectedVersionText">Version {detectedVersion} was detected in your current workspace</Text>
    </div>
  );
};
