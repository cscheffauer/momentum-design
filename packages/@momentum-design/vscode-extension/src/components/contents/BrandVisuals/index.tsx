import { useState } from 'react';
import { ContentLayout } from '../common/ContentLayout';
import { TabBar } from '../common/TabBar';
import './BrandVisuals.css';
import { VersionBlock } from '../common/VersionBlock';
import Browser from '../common/Browser';
import { useFetch } from '../common/hooks/useCustomFetch';
import { ReleaseHistory } from '../common/ReleaseHistory/ReleaseHistory';
import { useReleases } from '../common/VersionBlock/useReleases';

const contentTabs = [{
    id: 'library',
    tabText: 'Library'
}, {
    id: 'release-history',
    tabText: 'Release history'
}];


export const BrandVisualsContent = () => {
    const [activeContentTabId, setActiveContentTabId] = useState(contentTabs[0].id);

    const packageName = "@momentum-design/brand-visuals";

    const { data, isPending } = useFetch(`https://unpkg.com/${packageName}/dist/manifest.json`, 'json');

    const { getLatestReleaseVersionPerPackage } = useReleases();
    const packageVersion = getLatestReleaseVersionPerPackage(packageName) || 'NA';

    return (
        <ContentLayout>
            <TabBar activeTabId={activeContentTabId} setActiveTabId={setActiveContentTabId} tabs={contentTabs} />
            {activeContentTabId === "library" && <div className="brandvisualsContentWrapper">
                <VersionBlock
                    packageName={packageName}
                    latestVersion={packageVersion}
                    detectedVersion="@0.0.2"
                />
                {!isPending ? <Browser
                    packageName={packageName}
                    packageVersion={packageVersion}
                    pageSize={20}
                    cardSize={6.5}
                    manifestContent={data as unknown as Record<string, string>}
                    placeholderText='Search for a brand visual by name, description or tags'
                    typeofAsset='brand-visuals' /> : <p>loading...</p>}
            </div>}
            {activeContentTabId === "release-history" && <ReleaseHistory packageName={packageName} packageType="Brand Visuals" />}
        </ContentLayout>
    );
};
