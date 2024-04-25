import './App.css';
import { ThemeProvider } from '@momentum-ui/react-collaboration';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Content } from './components/Content';

const App = () => {
  return (
    <ThemeProvider theme="darkWebex" style={{
      backgroundColor: 'var(--mds-color-theme-background-solid-primary-normal)',
      height: '100vh'
    }}>
      <div className="App">
        <Header />
        <div className="MainContentWrapper">
          <Navigation />
          <Content/>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;