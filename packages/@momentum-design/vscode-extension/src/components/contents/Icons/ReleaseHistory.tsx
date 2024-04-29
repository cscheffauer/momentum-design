import { Text, Tag } from "@momentum-ui/react-collaboration";
import "./ReleaseHistory.css";
import { ButtonHyperlink } from "@momentum-ui/react-collaboration";

const fakeReleaseHistory = [
  {
    version: "0.0.133",
    date: "2024-01-04",
    heading: "Meeting Summary Icon",
    changes: ["Adding the meeting-summary icon to the library."],
    package: "https://www.npmjs.com/package/@momentum-design/icons/v/0.0.133",
    latest: true,
  },
  {
    version: "0.0.132",
    date: "2024-01-03",
    heading: "Various icon updates",
    changes: [
      "advanced-schedule: updated fill rule of ‘bold’ variant",
      "assets: updated fill rule of ‘filled’ variant",
      "device-muted: updated fill rule of all variants",
      "green-leaf: updated fill rule of all variants",
    ],
    package: "https://www.npmjs.com/package/@momentum-design/icons/v/0.0.132",
    latest: false,
  },
  {
    version: "0.0.131",
    date: "2024-01-02",
    heading: "Multiple icon updates",
    changes: [
      "device-in-room: added ‘filled’ variant",
      "meetings-team: moved meetings-team-active ‘bold’ variant into icon set as ‘filled’ variant",
      "meetings-team-active: deprecated",
      "gift: new icon set",
      "dialpad: made larger to solve some readability issues",
      "All other icons: renamed icons to remove '.' prefix",
    ],
    package: "https://www.npmjs.com/package/@momentum-design/icons/v/0.0.131",
    latest: false,
  },
];

export const ReleaseHistory = () => {
  return (
    <div className="releaseContainer">
      <ul className="releaseList">
        {fakeReleaseHistory.map((release) => (
          <li className="releaseListItem">
            <ReleaseHistoryCard
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

const ReleaseHistoryCard = ({
  version,
  date,
  heading,
  changes,
  packageLink,
  isLatest = false,
}: {
  version: string;
  date: string;
  heading: string;
  changes: string[];
  packageLink: string;
  isLatest: boolean;
}) => {
  return (
    <div className="releaseHistoryCard">
      <Text className="primaryTextColor" type="header-primary">
        @momentum-design/icons@{version} - Icons
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
      <ul className="releaseCardChangeList">
        {changes.map((change) => (
          <li className="releaseCardChangeListItem">
            <Text type="body-secondary">{change}</Text>
          </li>
        ))}
      </ul>

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
