/// <reference types="vite-plugin-svgr/client" />
import './Header.css';
import { Text } from '@momentum-ui/react-collaboration';

import Logo from "@momentum-design/brand-visuals/dist/svg/momentum-design-logo-dark-color-horizontal.svg?react";

export const Header = () => {
  return (
    <div className="headerWrapper">
        <Text type="header-primary" className='headerText'>Momentum Tank</Text>
        <Logo className="headerLogo"/>
    </div>
  );
};
