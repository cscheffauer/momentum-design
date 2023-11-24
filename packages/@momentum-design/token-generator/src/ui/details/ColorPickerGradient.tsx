import React from 'react';
import { Text } from '@momentum-ui/react-collaboration';
import ColorPickerCore from './ColorPickerCore';

interface ColorPickerGradientProps {
    startValue: string;
    endValue: string;
    onChangeStartValue?: (value: string) => void;
    onChangeEndValue?: (value: string) => void;
    label?: string;
    className?: string;
    disabledStart?: boolean;
    disabledEnd?: boolean;
}

const ColorPickerGradient = (props: ColorPickerGradientProps) => {
  const {
    startValue,
    endValue,
    onChangeStartValue,
    onChangeEndValue,
    label,
    className,
    disabledStart,
    disabledEnd,
  } = props;

  return (
    <div className={`color-picker-wrapper ${className}`}>
      <Text className="color-picker-label">{label}</Text>
      <div className="color-picker-gradient-pair">
        <Text>Start</Text>
        <ColorPickerCore value={startValue} onChange={onChangeStartValue} disabled={disabledStart} />
      </div>
      <div className="color-picker-gradient-pair">
        <Text>End</Text>
        <ColorPickerCore value={endValue} onChange={onChangeEndValue} disabled={disabledEnd} />
      </div>
    </div>
  );
};

export default ColorPickerGradient;
