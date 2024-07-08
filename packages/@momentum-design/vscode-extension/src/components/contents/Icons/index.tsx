import { useState } from 'react';
import { ContentLayout } from '../common/ContentLayout';
import { TabBar } from '../common/TabBar';
import './Icons.css';
import { VersionBlock } from '../common/VersionBlock';
import Browser from '../common/Browser';
import { ReleaseHistory } from '../common/ReleaseHistory/ReleaseHistory';
import { useFetch } from '../common/hooks/useCustomFetch';
import { useReleases } from '../common/VersionBlock/useReleases';

const contentTabs = [{
    id: 'library',
    tabText: 'Library'
}, {
    id: 'release-history',
    tabText: 'Release history'
}];


export const IconsContent = () => {
    const [activeContentTabId, setActiveContentTabId] = useState(contentTabs[0].id);

    const packageName = "@momentum-design/icons";

    const { data, isPending } = useFetch(`https://unpkg.com/${packageName}/dist/manifest.json`, 'json');

    const { getLatestReleaseVersionPerPackage } = useReleases();
    const packageVersion = getLatestReleaseVersionPerPackage(packageName) || 'NA';

    return (
        <ContentLayout>
            <TabBar activeTabId={activeContentTabId} setActiveTabId={setActiveContentTabId} tabs={contentTabs} />
            {activeContentTabId === "library" && <div className="iconContentWrapper">
                <VersionBlock
                    packageName={packageName}
                    latestVersion={packageVersion}
                    detectedVersion="@0.0.131"
                />
                {!isPending ? <Browser
                    packageName={packageName}
                    manifestContent={data as unknown as Record<string, string>}
                    placeholderText='Search for an icon by name, description or tags'
                    packageVersion={packageVersion}
                    typeofAsset='icons' /> : <p>loading...</p>
                }
            </div>}
            {activeContentTabId === "release-history" && <ReleaseHistory packageName={packageName} packageType="Icons" />}
        </ContentLayout>
    );
};


