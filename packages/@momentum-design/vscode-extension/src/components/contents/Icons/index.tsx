import { Key, useState } from 'react';
import { ContentLayout } from '../common/ContentLayout';
import { TabBar } from '../common/TabBar';
import './Icons.css';
import { VersionBlock } from '../common/VersionBlock';
import Browser from '../common/Browser';

const contentTabs = [{
    id: 'library',
    tabText: 'Library'
}, {
    id: 'release-history',
    tabText: 'Release history'
}];


export const IconsContent = () => {
    const [activeContentTabId, setActiveContentTabId] = useState(contentTabs[0].id);
    const [selectedVersion, setSelectedVersion] = useState("");

    const handleSelectedVersion = (version: Key) => { 
        setSelectedVersion(version as string);
    };

    return (
        <ContentLayout>
            <TabBar activeTabId={activeContentTabId} setActiveTabId={setActiveContentTabId} tabs={contentTabs} />
            {activeContentTabId === "library" && <div className="iconContentWrapper">
                <VersionBlock
                    packageName="@momentum-design/icons"
                    detectedVersion="@0.0.131"
                    selectedVersion={selectedVersion}
                    setSelectedVersion={handleSelectedVersion}
                    availableVersions={['@0.0.131', '@0.0.130', '@0.0.129']}
                />
                <Browser pathToLocalManifestJSON="" placeholderText='Search for an icon by name, description or tags' typeofAssetText='icons'/>
            </div>}
            {activeContentTabId === "release-history" && <p>Release History</p>}
        </ContentLayout>
    );
};
