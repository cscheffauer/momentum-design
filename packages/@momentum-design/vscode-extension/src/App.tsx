import './App.css';
import { ThemeProvider } from '@momentum-ui/react-collaboration';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Content } from './components/Content';
import { useState } from 'react';
import { tabData } from './constants';

const App = () => {
  // by default set the first tab to be active
  // todo: save the last open tab in local storage and open it the next time
  // the extension opens
  const [activeTabId, setActiveTabId] = useState(tabData[0].id);

  return (
    <ThemeProvider theme="darkWebex" style={{
      background: 'var(--mds-color-theme-background-gradient-primary)',
      height: '100vh'
    }}>
      <div className="app">
        <Header />
        <div className="mainContentWrapper">
          <Navigation activeTabId={activeTabId} setActiveTabId={setActiveTabId} />
          <Content activeTabId={activeTabId}/>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
