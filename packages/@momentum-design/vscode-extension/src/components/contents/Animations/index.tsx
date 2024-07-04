import { useState } from 'react';
import { ContentLayout } from '../common/ContentLayout';
import { TabBar } from '../common/TabBar';
import './Animations.css';
import { VersionBlock } from '../common/VersionBlock';
import Browser from '../common/Browser';
import { useFetch } from '../common/hooks/useCustomFetch';
import { ReleaseHistory } from '../common/ReleaseHistory/ReleaseHistory';

const contentTabs = [{
    id: 'library',
    tabText: 'Library'
}, {
    id: 'release-history',
    tabText: 'Release history'
}];


export const AnimationsContent = () => {
    const [activeContentTabId, setActiveContentTabId] = useState(contentTabs[0].id);

    const packageName = "@momentum-design/animations";

    const { data, isPending } = useFetch(`https://unpkg.com/${packageName}/dist/manifest.json`, 'json');

    const shownPackageVersion = "@0.0.9";

    return (
        <ContentLayout>
            <TabBar activeTabId={activeContentTabId} setActiveTabId={setActiveContentTabId} tabs={contentTabs} />
            {activeContentTabId === "library" && <div className="animationContentWrapper">
                <VersionBlock
                    packageName={packageName}
                    latestVersion={shownPackageVersion}
                    detectedVersion="@0.0.9"
                />
                {!isPending ? <Browser
                    packageName={packageName}
                    packageVersion={shownPackageVersion}
                    pageSize={20}
                    cardSize={6.5}
                    manifestContent={data as unknown as Record<string, string>}
                    placeholderText='Search for a animation by name, description or tags'
                    typeofAsset='animations'
                /> : <p>loading...</p>}
            </div>}
            {activeContentTabId === "release-history" && <ReleaseHistory packageName={packageName} packageType="Animations" />}
        </ContentLayout>
    );
};
