import React from 'react';
import { Text } from '@momentum-ui/react-collaboration';
import ColorPickerCore from './ColorPickerCore';

interface ColorPickerProps {
    value: string;
    onChange?: (value: string) => void;
    label?: string;
    className?: string;
    disabled?: boolean;
}

const ColorPicker = (props: ColorPickerProps) => {
  const { value, onChange, label, className, disabled } = props;

  return (
    <div className={`color-picker-wrapper ${className}`}>
      <Text className="color-picker-label">{label}</Text>
      <ColorPickerCore value={value} onChange={onChange} disabled={disabled}/>
    </div>
  );
};

export default ColorPicker;
