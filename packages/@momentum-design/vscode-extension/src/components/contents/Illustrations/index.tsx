import { useState } from 'react';
import { ContentLayout } from '../common/ContentLayout';
import { TabBar } from '../common/TabBar';
import './Illustrations.css';
import { VersionBlock } from '../common/VersionBlock';
import Browser from '../common/Browser';
import { useFetch } from '../common/hooks/useCustomFetch';

const contentTabs = [{
    id: 'library',
    tabText: 'Library'
}, {
    id: 'release-history',
    tabText: 'Release history'
}];


export const IllustrationsContent = () => {
    const [activeContentTabId, setActiveContentTabId] = useState(contentTabs[0].id);

    const packageName = "@momentum-design/illustrations";

    const { data, isPending } = useFetch(`https://unpkg.com/${packageName}/dist/manifest.json`, 'json');


    return (
        <ContentLayout>
            <TabBar activeTabId={activeContentTabId} setActiveTabId={setActiveContentTabId} tabs={contentTabs} />
            {activeContentTabId === "library" && <div className="illustrationsContentWrapper">
                <VersionBlock
                    packageName={packageName}
                    latestVersion="@0.0.28"
                    detectedVersion="@0.0.28"
                />
                {!isPending ? <Browser
                    packageName={packageName}
                    pageSize={20}
                    cardSize={6.5}
                    manifestContent={data as unknown as Record<string, string>}
                    placeholderText='Search for an illustrations by name, description or tags'
                    typeofAsset='illustrations'
                /> : <p>loading...</p>}
            </div>}
            {activeContentTabId === "release-history" && <p>Release History</p>}
        </ContentLayout>
    );
};
