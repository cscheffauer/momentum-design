import React, { useState } from 'react';
import './App.css';
import { ThemeProvider } from '@momentum-ui/react-collaboration';
import { Tabs, Footer } from './components';
import Export from './sections/export/Export';
import Settings from './sections/settings/Settings';
import Tools from './sections/tools/Tools';
import type { TabType } from './types';
import { useStateHandlers } from './hooks/useStateHandlers';
import { useWindowMessage } from './hooks/useWindowMessage';

function App() {
  const [selectedAssetSettingId, setSelectedAssetSettingId] = useState<string | undefined>(undefined);

  const [activeTab, setActiveTab] = useState<TabType>('export');
  const {
    settings,
    setSettings,
    assetChunks,
    setAssetChunks,
    exportStatus,
    setExportStatus,
    storageStatus,
    setStorageStatus,
  } = useStateHandlers();

  useWindowMessage(setSettings, setAssetChunks, setExportStatus, setStorageStatus);
  return (
    <ThemeProvider theme="darkWebex">
      <div className="wrapper">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="content">
          {activeTab === 'export' && settings && (
            <Export
              selectedAssetSettingId={selectedAssetSettingId}
              setSelectedAssetSettingId={setSelectedAssetSettingId}
              settings={settings}
              assetChunks={assetChunks}
              exportStatus={exportStatus}
              setExportStatus={setExportStatus}
            />
          )}
          {activeTab === 'tools' && <Tools />}
          {activeTab === 'settings' && (
            <Settings
              settings={settings}
              setSettings={setSettings}
              storage={storageStatus}
              setStorage={setStorageStatus}
            />
          )}
        </div>
        <Footer />
      </div >
    </ThemeProvider>
  );
}

export default App;
