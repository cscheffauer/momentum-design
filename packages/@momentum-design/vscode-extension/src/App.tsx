import './App.css';
import { ThemeProvider } from '@momentum-ui/react-collaboration';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Content } from './components/Content';
import { useState } from 'react';

const App = () => {
  const [activeTabId, setActiveTabId] = useState<string>("Icons");

  return (
    <ThemeProvider theme="darkWebex" style={{
      background: 'var(--mds-color-theme-background-gradient-primary)',
      height: '100vh'
    }}>
      <div className="app">
        <Header />
        <div className="mainContentWrapper">
          <Navigation activeTabId={activeTabId} setActiveTabId={setActiveTabId} />
          <Content />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
