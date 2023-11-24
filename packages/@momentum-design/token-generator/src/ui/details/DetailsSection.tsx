import React from 'react';
import { ButtonPill, CheckboxNext, TextInput } from '@momentum-ui/react-collaboration';
import { parseGradient } from './utils';
import type { ColorType } from '../../module/types';
import ColorPicker from './ColorPicker';
import ColorPickerGradient from './ColorPickerGradient';

interface DetailsSectionProps {
  nodeId: string;
  color: ColorType
  setColorsAction: (nodeId: string, newValues: Partial<ColorType>) => void;
  previewColors?: Array<string>;
  getColorValueOfToken: (tokenName: string) => string;
}
/**
 * The DetailsSection component.
*/
const DetailsSection = (props: DetailsSectionProps) => {
  const { nodeId, color, setColorsAction, previewColors, getColorValueOfToken } = props;

  const setColorsActionIfChanged = (key: keyof ColorType, newValue: string | boolean) => {
    if (color[key] !== newValue) {
      setColorsAction(nodeId, { [key]: newValue });
    }
  };

  const handleChangeValue = (newValue: string) => {
    setColorsActionIfChanged('name', newValue);
  };
  const handleChangeDynamic = (newValue: boolean) => {
    setColorsActionIfChanged('isDynamic', newValue);
  };

  const handleChangeGradient = (newValue: boolean) => {
    setColorsActionIfChanged('isGradient', newValue);
  };

  const handleChangeColor = (newValue: string) => {
    setColorsActionIfChanged('value', newValue);
  };

  const handleChangeStartColor = (newValue: string) => {
    setColorsActionIfChanged('value', newValue);
    setColorsActionIfChanged('startValue', newValue);
  };

  const handleChangeEndColor = (newValue: string) => {
    setColorsActionIfChanged('endValue', newValue);
  };

  const handleColorFromToken = () => {
    const colorValueFromToken = getColorValueOfToken(color.name);
    if (colorValueFromToken) {
      if (colorValueFromToken.includes('gradient')) {
        const { start, end } = parseGradient(colorValueFromToken);
        setColorsAction(nodeId, { isGradient: true, startValue: start, endValue: end, value: start });
      } else {
        setColorsAction(nodeId, { isGradient: false, value: colorValueFromToken });
      }
    }
  };

  return (
    <div className="details-section">
      <TextInput
        className="entry"
        placeholder="Type in a name..."
        value={color.name}
        onChange={handleChangeValue}
        label={'Token to map to'} />

      <CheckboxNext
        className='entry checkbox-entry'
        isSelected={color.isGradient}
        onChange={handleChangeGradient}
        label={'Is gradient?'}
      />

      <div className='entry color-entry'>
        {color.isGradient ? (
          <ColorPickerGradient
            startValue={color.startValue ?? '#ffffff'}
            endValue={color.endValue ?? '#ffffff'}
            onChangeStartValue={handleChangeStartColor}
            onChangeEndValue={handleChangeEndColor}
            label={'Color Gradient (references)'}
          />
        )
          : (
            <ColorPicker
              value={color.value ?? '#ffffff'}
              onChange={handleChangeColor}
              label={'Color Value (reference)'}
            />
          )
        }

        <ButtonPill size={24} onPress={handleColorFromToken} className="from-token-button">From Token</ButtonPill>
      </div>

      <CheckboxNext
        className='entry checkbox-entry'
        isSelected={color.isDynamic}
        onChange={handleChangeDynamic}
        label={'Is dynamic?'}
      />
      {color.isDynamic && (
        <>
          {color.isGradient ? (
            <ColorPickerGradient
              className="entry hue-preview-entry"
              startValue={previewColors?.[0] ?? '#ffffff'}
              endValue={previewColors?.[1] ?? '#ffffff'}
              label={'Previews (based on custom hue)'}
              disabledStart
              disabledEnd
            />
          )
            : (
              <ColorPicker
                className="entry hue-preview-entry"
                value={previewColors?.[0] ?? '#000'}
                label={'Preview (based on custom hue)'}
                disabled />
            )
          }
        </>
      )}
    </div>
  );
};

export default DetailsSection;
