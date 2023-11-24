import React, { useMemo } from 'react';
import Sketch from '@uiw/react-color-sketch';
import Color from 'colorjs.io';
import { PopoverNext, ButtonPill } from '@momentum-ui/react-collaboration';

interface ColorPickerCoreProps {
    value: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
}

const ColorPickerCore = (props: ColorPickerCoreProps) => {
  const { value, onChange, disabled } = props;

  const handleChange = (color: any) => {
    onChange?.(color.hexa);
  };

  const foregroundColor = useMemo(() => {
    const color = new Color(value);
    // get foreground color based on luminance
    return color.lch.l > 50 ? '#000000' : '#ffffff';
  }, [value]);

  return (
    <PopoverNext
      interactive
      trigger='click'
      className="color-picker-popover"
      triggerComponent={(
      <ButtonPill
        className="color-picker-trigger-button"
        size={32}
        style={{ backgroundColor: value, color: foregroundColor }}
        disabled={disabled}
      >
        {value}
      </ButtonPill> as any)}
    >
      <Sketch
        color={value}
        disableAlpha={false}
        onChange={handleChange}
      />

    </PopoverNext>
  );
};

export default ColorPickerCore;
