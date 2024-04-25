import './App.css';
import { ThemeProvider } from '@momentum-ui/react-collaboration';
const App = () => {
  return (
    <ThemeProvider theme="darkWebex" style={{
      backgroundColor: 'var(--mds-color-theme-background-solid-primary-normal)',
      height: '100vh',
      overflowY: 'scroll',
      padding: '2rem',
      alignItems: 'flex-start',
      display: 'flex',
      flexWrap: 'wrap',
    }}>
      <div className="App">
        <div>
          Tabs asdf asdf hello ... Icons ... Tokens ... Illustrations ... Animations ... Brand Visuals
        </div>
        <div>
          Content
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;