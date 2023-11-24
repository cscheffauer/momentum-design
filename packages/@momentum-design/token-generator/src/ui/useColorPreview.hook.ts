import { useState, useEffect } from 'react';
import { getCorrespondingColorBasedOnHue } from '../module/index';
import type { ColorType } from '../module/types';

interface UseColorPreviewProps {
    colors: Record<string, ColorType>;
    hue: number;
}

export const useColorPreview = ({ colors, hue }: UseColorPreviewProps) => {
  const [colorPreviews, setColorPreviews] = useState<Record<string, Array<string>>>({});

  useEffect(() => {
    Object.entries(colors).forEach(([key, value]: [string, ColorType]) => {
      if (!value.isDynamic) { return; }
      let newColorPreviews = [getCorrespondingColorBasedOnHue([value.value], hue)];

      if (value.isGradient) {
        newColorPreviews = [
          getCorrespondingColorBasedOnHue([value.startValue!], hue),
          getCorrespondingColorBasedOnHue([value.endValue!], hue),
        ];
      }

      setColorPreviews(
        (prevColorPreviews) => ({ ...prevColorPreviews, [key]: newColorPreviews }),
      );
    });
  }, [colors, hue]);

  return { colorPreviews };
};
