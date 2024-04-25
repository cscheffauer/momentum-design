import './TabBar.css';
import { TabNext as Tab } from '@momentum-ui/react-collaboration';

type Tab = {
  id: string;
  tabText: string;
};

interface TabBarProps {
  activeTabId: string;
  setActiveTabId: (id: string) => void;
  tabs: Array<Tab>
}

export const TabBar = ({ activeTabId, setActiveTabId, tabs }: TabBarProps) => {
  return (
    <div className="tabBar">{
      tabs.map(({ id, tabText }) => <Tab active={id === activeTabId} className="tab" onPress={() => setActiveTabId(id)}>{tabText}</Tab>)}
    </div>
  );
};
