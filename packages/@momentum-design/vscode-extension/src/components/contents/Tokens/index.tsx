import { useState } from 'react';
import { ContentLayout } from '../common/ContentLayout';
import { TabBar } from '../common/TabBar';
import './Tokens.css';
import { VersionBlock } from '../common/VersionBlock';
import TokensList from '../common/TokensList';
import { ReleaseHistory } from '../common/ReleaseHistory/ReleaseHistory';
import { useReleases } from '../common/VersionBlock/useReleases';

const contentTabs = [{
    id: 'library',
    tabText: 'Library'
}, {
    id: 'release-history',
    tabText: 'Release history'
}];


export const TokensContent = () => {
    const [activeContentTabId, setActiveContentTabId] = useState(contentTabs[0].id);

    const packageName = "@momentum-design/tokens";
    
    const { getLatestReleaseVersionPerPackage } = useReleases();
    const packageVersion = getLatestReleaseVersionPerPackage(packageName) || 'NA';

    return (
        <ContentLayout>
            <TabBar activeTabId={activeContentTabId} setActiveTabId={setActiveContentTabId} tabs={contentTabs} />
            {activeContentTabId === "library" && <div className="tokensContentWrapper">
                <VersionBlock
                    packageName={packageName}
                    latestVersion={packageVersion}
                    detectedVersion="@0.0.28"
                />
                {<TokensList packageName={packageName}
                    packageVersion={packageVersion}
                    placeholderText='Search for a token by name, description or tags' />}
            </div>}
            {activeContentTabId === "release-history" && <ReleaseHistory packageName={packageName} packageType="Tokens" />}
        </ContentLayout>
    );
};
