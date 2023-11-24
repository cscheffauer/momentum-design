import React from 'react';
import Hue from '@uiw/react-color-hue';
import { Toggle } from '@momentum-ui/react-collaboration';

interface Props {
  hue: number;
  setHue: (hue: number) => void;
}

const HeaderSection = ({ hue, setHue }: Props) => {
  const handleChange = (newHue: {h: number}) => {
    if (newHue.h === hue) return;
    setHue(newHue.h);
  };
  return (
    <section className="header-section">
      <img src="/momentum-logo.png" className="logo" />
      <div className="input-color-area">
        <p>Custom Hue</p>
        <Hue hue={hue} className="hue-slider" onChange={handleChange}/>
        <div className="preview-hue-area">
          <p>Preview in graph</p>
          <Toggle className="preview-hue-toggle"></Toggle>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
