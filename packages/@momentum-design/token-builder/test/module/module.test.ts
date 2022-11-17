import { TokenBuilder, Config } from '@momentum-design/token-builder';

import configCoreColor from '../fixtures/config/config-core-color.json';
import { fileToJson } from '../../utils/test/utils';

describe('Token Builder module', () => {
  it('returns the correct output for a core colors config', async () => {
    await TokenBuilder.build({
      config: configCoreColor as Config,
      input: './test/fixtures/inputs',
      output: './test/dist',
    });

    const relativePath = `./test/dist/json/${configCoreColor.files[0].destination}.json`;
    const output = await fileToJson(relativePath);
    expect(output).toMatchObject({});
  });
});