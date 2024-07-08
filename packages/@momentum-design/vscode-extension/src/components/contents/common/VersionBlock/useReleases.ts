import { useCallback, useEffect, useContext } from "react";
import { ReleasesContext } from "../../../../ReleasesContext";

export interface Release {
  id: number;
  tag_name: string;
  name: string;
  body: string;
  html_url: string;
  published_at: string;
}

export const useReleases = () => {
  const { releases, setReleases } = useContext(ReleasesContext);

  const fetchReleases = useCallback(() => {
    // @ts-ignore
    window.vscode?.postMessage({
      command: "releases",
    });
  }, []);

  useEffect(() => {
    const listener = (msg: MessageEvent) => {
      switch (msg.data.command) {
        case "releases-response": {
          const { releases }: { releases: Array<Release> } = msg.data;
          console.log("releases", releases);
          setReleases(releases);
          break;
        }
      }
    };

    window.addEventListener("message", listener);

    // cleanup
    return () => {
      window.removeEventListener("message", listener);
    };
  }, []);

  // fetch releases when no releases are fetched
  useEffect(() => {
    if (!releases) {
      fetchReleases();
    }
  }, [fetchReleases, releases]);

  const getReleasesPerPackage = (packageName: string) => {
    return releases
      ?.filter((release) => release.tag_name.includes(packageName))
      .map((release, index) => ({
        version: release.tag_name.split("@")[2],
        date: release.published_at,
        heading: "Meeting Summary Icon",
        changes: release.body,
        package: release.html_url,
        latest: index === 0,
      }));
  };

  const getLatestReleaseVersionPerPackage = (packageName: string): string | undefined => {
    return getReleasesPerPackage(packageName)?.[0]?.version || "N/A";
  };

  return { releases, fetchReleases, getReleasesPerPackage, getLatestReleaseVersionPerPackage };
};
