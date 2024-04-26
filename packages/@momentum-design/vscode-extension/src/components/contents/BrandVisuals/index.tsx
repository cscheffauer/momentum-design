import { useState } from 'react';
import { ContentLayout } from '../common/ContentLayout';
import { TabBar } from '../common/TabBar';
import './BrandVisuals.css';
import { VersionBlock } from '../common/VersionBlock';
import Browser from '../common/Browser';
import JSON from '@momentum-design/brand-visuals/dist/manifest.json';

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

    return (
        <ContentLayout>
            <TabBar activeTabId={activeContentTabId} setActiveTabId={setActiveContentTabId} tabs={contentTabs} />
            {activeContentTabId === "library" && <div className="brandvisualsContentWrapper">
                <VersionBlock
                    packageName={packageName}
                    latestVersion="@0.0.2"
                    detectedVersion="@0.0.2"
                />
                <Browser
                    packageName={packageName}
                    pageSize={20}
                    cardSize={6.5}
                    manifestContent={JSON as Record<string, string>}
                    placeholderText='Search for a brand visual by name, description or tags'
                    typeofAsset='brand-visuals'
                />
            </div>}
            {activeContentTabId === "release-history" && <p>Release History</p>}
        </ContentLayout>
    );
};
