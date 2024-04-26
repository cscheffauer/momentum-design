import { useState } from 'react';
import { ContentLayout } from '../common/ContentLayout';
import { TabBar } from '../common/TabBar';
import './Illustrations.css';
import { VersionBlock } from '../common/VersionBlock';
import Browser from '../common/Browser';
import JSON from '@momentum-design/illustrations/dist/manifest.json';

const contentTabs = [{
    id: 'library',
    tabText: 'Library'
}, {
    id: 'release-history',
    tabText: 'Release history'
}];


export const IllustrationsContent = () => {
    const [activeContentTabId, setActiveContentTabId] = useState(contentTabs[0].id);

    return (
        <ContentLayout>
            <TabBar activeTabId={activeContentTabId} setActiveTabId={setActiveContentTabId} tabs={contentTabs} />
            {activeContentTabId === "library" && <div className="illustrationsContentWrapper">
                <VersionBlock
                    packageName="@momentum-design/illustrations"
                    latestVersion="@0.0.28"
                    detectedVersion="@0.0.28"
                />
                <Browser pageSize={20} cardSize={6.5} manifestContent={JSON as Record<string, string>} placeholderText='Search for an illustrations by name, description or tags' typeofAsset='illustrations' />
            </div>}
            {activeContentTabId === "release-history" && <p>Release History</p>}
        </ContentLayout>
    );
};
