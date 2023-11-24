import React from 'react';
import Input from './Input';
import type { ColorType } from '../../module/types';

interface DetailsSectionProps {
  nodeId: string;
  color: ColorType
  setColorsAction: (nodeId: string, newValues: Partial<ColorType>) => void;
  previewColor?: string;
}
/**
 * The DetailsSection component.
*/
const DetailsSection = ({ nodeId, color, setColorsAction, previewColor }: DetailsSectionProps) => {
  const handleChangeValue = (newValue: string) => {
    if (color.name !== newValue) {
      setColorsAction(nodeId, { name: newValue });
    }
  };
  const handleChangeDynamic = (newValue: boolean) => {
    if (color.isDynamic !== newValue) {
      setColorsAction(nodeId, { isDynamic: newValue });
    }
  };

  const handleChangeColor = (newValue: string) => {
    if (color.name !== newValue) {
      setColorsAction(nodeId, { value: newValue });
    }
  };

  return (
    <div className="details-section">
      <Input
        placeholder="Type in a name..."
        value={color.name}
        handleChange={handleChangeValue}
        label={'Display name'} />
      <Input
        placeholder="Type in a color value..."
        value={color.value ?? '#ffffff'}
        handleChange={handleChangeColor}
        type="color"
        label={color.isDynamic ? 'Color Value (used as reference for hue adaption)' : 'Color Value'} />
      <Input
        type="checkbox"
        checked={color.isDynamic}
        handleChangeCheckbox={handleChangeDynamic}
        label={'Should color adapt to Custom hue?'}
        value={'dynamic'} />
      {color.isDynamic && (
        <Input
          type="color"
          value={previewColor ?? '#000'}
          label={'Preview (based on custom hue)'}
        />)}
    </div>
  );
};

export default DetailsSection;
