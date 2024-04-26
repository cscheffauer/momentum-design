import { useState } from 'react';
import { ContentLayout } from '../common/ContentLayout';
import { TabBar } from '../common/TabBar';
import './Icons.css';
import { VersionBlock } from '../common/VersionBlock';
import Browser from '../common/Browser';
import JSON from '@momentum-design/icons/dist/manifest.json';
import { ReleaseHistory } from './ReleaseHistory';

const contentTabs = [{
    id: 'library',
    tabText: 'Library'
}, {
    id: 'release-history',
    tabText: 'Release history'
}];


export const IconsContent = () => {
    const [activeContentTabId, setActiveContentTabId] = useState(contentTabs[0].id);

    return (
        <ContentLayout>
            <TabBar activeTabId={activeContentTabId} setActiveTabId={setActiveContentTabId} tabs={contentTabs} />
            {activeContentTabId === "library" && <div className="iconContentWrapper">
                <VersionBlock
                    packageName="@momentum-design/icons"
                    latestVersion="@0.0.133"
                    detectedVersion="@0.0.131"
                />
                <Browser manifestContent={JSON as Record<string, string>} placeholderText='Search for an icon by name, description or tags' typeofAsset='icons' />
            </div>}
            {activeContentTabId === "release-history" && <ReleaseHistory />}
        </ContentLayout>
    );
};


