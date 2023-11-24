import { useState, useEffect } from 'react';
import { getCorrespondingColorBasedOnHue } from '../module/index';
import type { ColorType } from '../module/types';

interface UseColorPreviewProps {
    colors: Record<string, ColorType>;
    hue: number;
}

export const useColorPreview = ({ colors, hue }: UseColorPreviewProps) => {
  const [colorPreviews, setColorPreviews] = useState<Record<string, string>>({});

  useEffect(() => {
    Object.entries(colors).forEach(([key, value]: [string, ColorType]) => {
      setColorPreviews(
        (prevColorPreviews) => ({ ...prevColorPreviews, [key]: getCorrespondingColorBasedOnHue([value.value], hue) }),
      );
    });
  }, [colors, hue]);

  return { colorPreviews };
};
