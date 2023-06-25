import { PlopGeneratorConfig } from 'plop';

import { GENERATOR_NAME, componentName, PROMPT_TYPE } from '../../constants';
import { AddComponent } from '../../actions/AddComponent';
import { prompt } from '../../prompts';

const generator: Partial<PlopGeneratorConfig> = {
  description: 'Scaffold a new package',
  prompts: [
    prompt(
      `${componentName}`,
      `${componentName} you'd like to generate (lowercase and without prefix e.g. "button")`,
      PROMPT_TYPE.INPUT,
    ),
  ],
  actions: [
    AddComponent,
  ],
};

export const ComponentGenerator = {
  name: GENERATOR_NAME.COMPONENT_GENERATOR,
  generator,
};
