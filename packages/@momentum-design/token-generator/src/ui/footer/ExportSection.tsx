import React, { useEffect, useState } from 'react';

import { ButtonGroupNext, ButtonPill } from '@momentum-ui/react-collaboration';
import { ColorType } from '../../module/types';

interface Props {
    colors: Record<string, ColorType>;
  }

const downloadJson = (filename: string, obj: Record<string, any>) => {
  // serialize to JSON and pretty print with indent of 4
  const text = JSON.stringify(obj, null, 4);

  // create anchor tag
  const element = document.createElement('a');
  element.setAttribute(
    'href',
    `data:application/json;charset=utf-8,${encodeURIComponent(text)}`,
  );
  element.setAttribute('download', filename);
  // don't display the tag
  element.style.display = 'none';
  // add tag to document
  document.body.appendChild(element);
  // click it: this starts the download
  element.click();
  // remove the tag again
  document.body.removeChild(element);
};

const ExportSection = (props: Props) => {
  const { colors } = props;
  const [isDynamicSchemaExportEnabled, setIsDynamicSchemaExportEnabled] = useState(false);

  useEffect(() => {
    if (Object.keys(colors).length > 0) {
      setIsDynamicSchemaExportEnabled(true);
    } else {
      setIsDynamicSchemaExportEnabled(false);
    }
  }, [colors]);

  const handleDynamicSchemaExportClick = () => {
    const constructObjectToExport = {
      dynamicTokens: Object.values(colors).filter((color) => color.isDynamic),
    };
    downloadJson('dynamic-schema.json', constructObjectToExport);
  };

  const buttonGroupChildren: Array<any> = [
    <ButtonPill
      key="0"
      size={32}
      onPress={handleDynamicSchemaExportClick}
      disabled={!isDynamicSchemaExportEnabled}
    >
        Download dynamic schema
    </ButtonPill>,
    <ButtonPill
      key="1"
      size={32}
      disabled={true}
    >
        Download tokens
    </ButtonPill>,
  ];

  return (
    <section className="export-section">
      <ButtonGroupNext children={buttonGroupChildren} />
    </section>
  );
};

export default ExportSection;
