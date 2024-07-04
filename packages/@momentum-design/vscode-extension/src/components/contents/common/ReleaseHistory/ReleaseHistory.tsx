import { Text, Tag } from "@momentum-ui/react-collaboration";
import "./ReleaseHistory.css";
import { ButtonHyperlink } from "@momentum-ui/react-collaboration";
import { useReleases } from "../VersionBlock/useReleases";

const ReleaseHistoryCard = ({
  packageName,
  packageType,
  version,
  date,
  heading,
  changes,
  packageLink,
  isLatest = false,
}: {
  packageName: string;
  packageType: string;
  version: string;
  date: string;
  heading: string;
  changes: string;
  packageLink: string;
  isLatest: boolean;
}) => {
  return (
    <div className="releaseHistoryCard">
      <Text className="primaryTextColor" type="header-primary">
        {packageName}@{version} - {packageType}
      </Text>
      <table className="releaseDate">
        <tr>
          <td>
            <Text className="primaryTextColor" type="header-secondary">
              {date}
            </Text>
          </td>
          {isLatest && (
            <td>
              <Tag color="lime">Latest</Tag>
            </td>
          )}
        </tr>
      </table>

      <Text type="body-secondary">{heading}</Text>
      <Text type="body-secondary">{changes}</Text>

      <p>
        <Text type="body-secondary">Package:</Text>
        <br />
        <ButtonHyperlink href={packageLink} target="_blank">
          {packageLink}
        </ButtonHyperlink>
      </p>
    </div>
  );
};

export const ReleaseHistory = ({packageName, packageType}: {packageName: string, packageType: string}) => {

  const { getReleasesPerPackage } = useReleases();

  return (
    <div className="releaseContainer">
      <ul className="releaseList">
        {getReleasesPerPackage(packageName)?.map((release) => (
          <li className="releaseListItem">
            <ReleaseHistoryCard
              packageName={packageName}
              packageType={packageType}
              version={release.version}
              date={release.date}
              heading={release.heading}
              changes={release.changes}
              packageLink={release.package}
              isLatest={release.latest}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

