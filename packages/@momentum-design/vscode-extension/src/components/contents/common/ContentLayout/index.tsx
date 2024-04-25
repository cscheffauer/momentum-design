import './ContentLayout.css';

interface ContentLayoutProps {
    children?: React.ReactNode;
}

export const ContentLayout = ({children}: ContentLayoutProps) => {
  return (
    <div className="contentLayout">{children}</div>
  );
};
